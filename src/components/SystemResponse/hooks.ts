import { useEffect, useMemo, useState } from 'react';
import { match } from 'ts-pattern';

import { MessageProps } from './types';

export * from './types';

const ANIMATION_INTERVAL = 1000;

enum AnimationType {
  MESSAGE = 'message',
  INDICATOR = 'indicator',
  ACTIONS = 'actions',
}

type Animation<T extends AnimationType = AnimationType> = {
  [AnimationType.MESSAGE]: { type: AnimationType.MESSAGE; message: MessageProps };
  [AnimationType.INDICATOR]: { type: AnimationType.INDICATOR };
  [AnimationType.ACTIONS]: { type: AnimationType.ACTIONS };
}[T];

const ANIMATE_INDICATOR: Animation<AnimationType.INDICATOR> = { type: AnimationType.INDICATOR };
const ANIMATE_ACTIONS: Animation<AnimationType.ACTIONS> = { type: AnimationType.ACTIONS };

const useAnimations = (messages: MessageProps[], hasActions: boolean) =>
  useMemo<Animation[]>(() => {
    const messageAnimations = messages.flatMap<Animation>((message) => [ANIMATE_INDICATOR, { type: AnimationType.MESSAGE, message }]);
    const actionsAnimations = hasActions ? [ANIMATE_ACTIONS] : [];

    return [...messageAnimations, ...actionsAnimations];
  }, []);

export const useAnimatedMessages = ({
  messages,
  isAnimated,
  hasActions,
  onAnimationEnd,
}: {
  messages: MessageProps[];
  isAnimated: boolean;
  hasActions: boolean;
  onAnimationEnd: VoidFunction;
}) => {
  const shouldAnimate = isAnimated && messages.length;
  const [showIndicator, setShowIndicator] = useState(false);
  const [showActions, setShowActions] = useState(!shouldAnimate);
  const [visibleMessages, setVisibleMessages] = useState(shouldAnimate ? [] : messages);
  const animations = useAnimations(messages, hasActions);

  useEffect(() => {
    if (!shouldAnimate) return undefined;

    const remaining = [...animations];

    let timer: NodeJS.Timeout;
    const setTimer = (callback: VoidFunction) => {
      timer = setTimeout(() => {
        callback();
      }, ANIMATION_INTERVAL);
    };

    const animate = () => {
      const next = remaining.shift();
      if (!next) return;

      match(next)
        .with({ type: AnimationType.MESSAGE }, ({ message }) => {
          setShowIndicator(false);
          setVisibleMessages((prev) => [...prev, message]);
          setTimer(animate);

          if (!remaining.length) {
            onAnimationEnd();
          }
        })
        .with({ type: AnimationType.INDICATOR }, () => {
          setShowIndicator(true);
          setTimer(animate);
        })
        .with({ type: AnimationType.ACTIONS }, () => {
          setShowIndicator(false);
          setShowActions(true);
          onAnimationEnd();
        })
        .exhaustive();
    };

    animate();

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return {
    showIndicator,
    showActions,
    visibleMessages,
  };
};