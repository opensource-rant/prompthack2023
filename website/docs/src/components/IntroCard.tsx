import React from "react";

import styles from "./IntroCard.module.css";

type Props = Record<"title" | "description" | "href" | "icon", string> & {
  external?: boolean;
};

export const IntroSection: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <div className={styles["intro-section"]}>{children}</div>;
};

const icons = {
  Play: (
    <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 18.925v-14l11 7-11 7ZM9.5 16.2l6.725-4.275L9.5 7.65v8.55Z"
        fill="currentColor"
      />
    </svg>
  ),
  Mosaic: (
    <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M4.5 21c-.4 0-.75-.15-1.05-.45-.3-.3-.45-.65-.45-1.05v-15c0-.4.15-.75.45-1.05.3-.3.65-.45 1.05-.45h15c.4 0 .75.15 1.05.45.3.3.45.65.45 1.05v15c0 .4-.15.75-.45 1.05-.3.3-.65.45-1.05.45h-15Zm0-1.5h6.75v-15H4.5v15Zm8.25 0h6.75v-7.525h-6.75V19.5Zm0-9.025h6.75V4.5h-6.75v5.975Z"
        fill="currentColor"
      />
    </svg>
  ),
  Code: (
    <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="m8 17.95-6-6L8.05 5.9l1.075 1.075L4.15 11.95l4.925 4.925L8 17.95Zm7.95.05-1.075-1.075 4.975-4.975-4.925-4.925L16 5.95l6 6L15.95 18Z"
        fill="currentColor"
      />
    </svg>
  ),
  Theme: (
    <svg fill="none" height={24} width={24} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 22a9.676 9.676 0 0 1-3.875-.788 10.144 10.144 0 0 1-3.188-2.15 10.142 10.142 0 0 1-2.15-3.187A9.676 9.676 0 0 1 2 12c0-1.417.267-2.733.8-3.95a9.96 9.96 0 0 1 2.188-3.175 10.09 10.09 0 0 1 3.25-2.112A10.421 10.421 0 0 1 12.225 2c1.317 0 2.567.22 3.75.663A9.922 9.922 0 0 1 19.087 4.5a8.83 8.83 0 0 1 2.125 2.787c.526 1.076.788 2.255.788 3.538 0 1.8-.525 3.22-1.575 4.263-1.05 1.041-2.442 1.562-4.175 1.562h-1.875c-.3 0-.558.117-.775.35-.217.233-.325.492-.325.775 0 .45.12.833.362 1.15.242.317.363.683.363 1.1 0 .633-.175 1.12-.525 1.463-.35.341-.842.512-1.475.512Zm-5.825-9.35a1.2 1.2 0 0 0 .875-.375 1.2 1.2 0 0 0 .375-.875 1.2 1.2 0 0 0-.375-.875 1.2 1.2 0 0 0-.875-.375 1.2 1.2 0 0 0-.875.375 1.2 1.2 0 0 0-.375.875c0 .333.125.625.375.875s.542.375.875.375Zm3.15-4.25a1.2 1.2 0 0 0 .875-.375 1.2 1.2 0 0 0 .375-.875 1.2 1.2 0 0 0-.375-.875 1.2 1.2 0 0 0-.875-.375 1.2 1.2 0 0 0-.875.375 1.2 1.2 0 0 0-.375.875c0 .333.125.625.375.875s.542.375.875.375Zm5.35 0a1.2 1.2 0 0 0 .875-.375 1.2 1.2 0 0 0 .375-.875 1.2 1.2 0 0 0-.375-.875 1.2 1.2 0 0 0-.875-.375 1.2 1.2 0 0 0-.875.375 1.2 1.2 0 0 0-.375.875c0 .333.125.625.375.875s.542.375.875.375Zm3.275 4.25a1.2 1.2 0 0 0 .875-.375 1.2 1.2 0 0 0 .375-.875 1.2 1.2 0 0 0-.375-.875 1.2 1.2 0 0 0-.875-.375 1.2 1.2 0 0 0-.875.375 1.2 1.2 0 0 0-.375.875c0 .333.125.625.375.875s.542.375.875.375ZM12 20.5c.183 0 .313-.038.387-.113.075-.075.113-.195.113-.362 0-.233-.12-.45-.363-.65-.241-.2-.362-.642-.362-1.325 0-.767.25-1.442.75-2.025a2.394 2.394 0 0 1 1.9-.875h1.825c1.267 0 2.292-.37 3.075-1.113.783-.741 1.175-1.812 1.175-3.212 0-2.2-.833-3.97-2.5-5.312S14.408 3.5 12.225 3.5c-2.433 0-4.496.82-6.188 2.463C4.346 7.604 3.5 9.617 3.5 12c0 2.35.83 4.354 2.487 6.012C7.646 19.671 9.65 20.5 12 20.5Z"
        fill="currentColor"
      />
    </svg>
  ),
  Magic: (
    <svg
      height={24}
      viewBox="0 0 48 48"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40.6 12.85 38.9 9.1l-3.75-1.7 3.75-1.7 1.7-3.75 1.7 3.75 3.75 1.7-3.75 1.7Zm-24.1 0L14.8 9.1l-3.75-1.7 3.75-1.7 1.7-3.75 1.7 3.75 3.75 1.7-3.75 1.7Zm24.1 24.1-1.7-3.75-3.75-1.7 3.75-1.7 1.7-3.75 1.7 3.75 3.75 1.7-3.75 1.7ZM9.35 43.4 4.6 38.65q-.55-.55-.6-1.275-.05-.725.6-1.375l22.5-22.5q.6-.6 1.45-.6t1.45.6l4.5 4.5q.6.6.6 1.45t-.6 1.45L12 43.4q-.6.6-1.325.6t-1.325-.6Zm1.15-2.85L26.15 24.9l-3.1-3.1L7.4 37.45Z"
        fill="currentColor"
      />
    </svg>
  ),
};

const IntroCard: React.FC<Props> = ({
  title,
  description,
  href,
  external,
  icon,
}) => {
  return (
    <a
      className={`${styles["intro-card"]}`}
      href={href}
      rel="noreferrer"
      target={external ? "_blank" : "_self"}
    >
      <span className={styles["intro-card_icon"]}>{icons[icon]}</span>
      <h3 className={styles["intro-card_title"]}>{title}</h3>
      <p className={`${styles["intro-card_desc"]}`}>{description}</p>
    </a>
  );
};

export { IntroCard };
