# AIIO

To run services, Please follow instructions:

- https://github.com/graphile/starter
- https://github.com/open-telemetry/opentelemetry-demo

Everything else is powered by Voiceflow or runs in the browser with WASM.

                                   Bookmarks

  Bookmarks bar

  #PromptHack23

  AIIO

                    [1]How interesting/unique is the project you built?
                            Projects that solve a problem creatively will
                            score higher.

                    [2]For the purposes of this demo, I'm going to need to
                            stand in for the agent...In theory, there will
                            always be unsolved problems... xeno's paradox.
                            this was cutting edge for hundreds of years.
                            and when the apple doesn't fall far from the
                            tree, it all seems obvious in hindsight.

                    [3]Polly can generate a JSON-formatted list of mouth
                            shapes corresponding to the sounds in that
                            audio file. You can call any function that is
                            callable from Blueprint. This includes any
                            function defined in C++ with the
                            BlueprintCallable specifier, or any function
                            that is defined and implemented entirely in
                            Blueprint.

                    [4]metahuman editor It runs in the browser, how about
                            your glasses? (what tech does it actually
                            run?) Remote Control API HTTP Reference |
                            Unreal Engine Documentation The call returns a
                            JSON payload that contains the return value of
                            the function called, along with any other
                            output parameters specified in the function's
                            definition. Paper2D Transported man
                            (responding to mediapipe events)

                    [5]Introducing Whisper
                    [6]Callback Hell
                    [7]Ask a question on StackOverflow and tag it with
                            aws-sdk-js.

  What have I got in my pocket?

                    [8]How technically advanced is your project? Teams
                            that build comprehensive projects or use more
                            sophisticated prompting (out of necessity)
                            will score higher.

                    [9]What have I got in my pocket?playwright
                    [10]Install Services with Docker Extension and
                            WebExtension

                    [11]A docker extension to build a distributed swarm of
                            DeFi yo, and a web extension to 10x my
                            investment on voiceflow

                    [12]Storybook environment to develop docker extension
                    [13]It would be cool to input APIkey wioth storybook
                            contorls

                    [14]const axios = require('axios'); // View our quick
                            start guide to get your API key: //
                            https://www.voiceflow.com/api/dialog-manager#s
                            ection/Quick-Start const apiKey = '{api_key}';
                            const userID = 'user_123'; // Unique ID used
                            to track conversation state const userInput =
                            'Hello world!'; // User's message to your
                            Voiceflow assistant const body = { action: {
                            type: 'text', payload: userInput, }, }; async
                            function startInteract() { // Start a
                            conversation const response = await axios({
                            method: 'POST', baseURL:
                            'https://general-runtime.voiceflow.com', url:
                            `/state/user/${userID}/interact`, headers: {
                            Authorization: apiKey, }, data: body, }); //
                            Log the response console.log(response.data); }
                            startInteract().catch((error) =>
                            console.error(error));

                    [15]import { CognitoIdentityClient } from
                            "@aws-sdk/client-cognito-identity"; import {
                            fromCognitoIdentityPool, } from
                            "@aws-sdk/credential-provider-cognito-identity
                            "; import { Polly } from
                            "@aws-sdk/client-polly"; import {
                            getSynthesizeSpeechUrl } from
                            "@aws-sdk/polly-request-presigner"; // Create
                            the Polly service client, assigning your
                            credentials const client = new Polly({ region:
                            "REGION", credentials:
                            fromCognitoIdentityPool({ client: new
                            CognitoIdentityClient({ region: "REGION" }),
                            identityPoolId: "IDENTITY_POOL_ID" //
                            IDENTITY_POOL_ID }), }); // Set the parameters
                            const speechParams = { OutputFormat:
                            "OUTPUT_FORMAT", // For example, 'mp3'
                            SampleRate: "SAMPLE_RATE", // For example,
                            '16000 Text: "", // The 'speakText' function
                            supplies this value TextType: "TEXT_TYPE", //
                            For example, "text" VoiceId: "POLLY_VOICE" //
                            For example, "Matthew" }; const speakText =
                            async () => { // Update the Text parameter
                            with the text entered by the user
                            speechParams.Text =
                            document.getElementById("textEntry").value;
                            try{ let url = await getSynthesizeSpeechUrl({
                            client, params: speechParams });
                            console.log(url); // Load the URL of the voice
                            recording into the browser
                            document.getElementById('audioSource').src =
                            url;
                            document.getElementById('audioPlayback').load(
                            ); document.getElementById('result').innerHTML
                            = "Speech ready to play."; } catch (err) {
                            console.log("Error", err);
                            document.getElementById('result').innerHTML =
                            err; } }; // Expose the function to the
                            browser window.speakText = speakText;

  whisper-wasm

                          [16]https://whisper.ggerganov.com/talk/helpers.j
                                  s

                          [17]https://whisper.ggerganov.com/talk/talk.js
                          [18]view-source:https://whisper.ggerganov.com/ta
                                  lk/

                    [19]Or use the official tiny Docker image and run it
                            with the sample configuration file:

                    [20]MediaPipe HandGestureRecognizer Task for web
                    [21]GraphQL Endpoints to train and monitor agents
                    [22]PostGraphile | PostGraphile JWT/JWK Verification
                            Quickstart

                    [23]Sandbox interface for docker/kube
                    [24]Telemetry

  The usual personas

                    [25]How well does your project accomplish the task you
                            described? Projects that are thoroughly tested
                            and can be sent to users with few
                            modifications will score higher.

                    [26]You are Elon Musk. Respond with Unreal Engine
                            config based on tweets from my friends.
                            Example: Menolis Kelis; a sandbox for your
                            digital twin

                    [27]You could monitor the *real* world in a digital
                            computer. Objects by reference are available
                            in Grafana Dashboard and Unreal Engine
                            ~~Monitor A.I behaviour with Embedded
                            Dashboards~~

                    [28]Traditional monitoring and Reinforcement learning
                            ~~Capture Data with Graphile Starter and
                            OpenTelemetry Demo~~

  Multi-Modal O.A.I RPC GUI MMORPG

                    [29]Did your project leverage interesting abilities
                            from GPT-4 or other LLMs? Submissions which
                            leverage unique use cases that LLMs can do
                            will score higher.

                    [30]Parting the seas with ChatGPT ~~Use mediapipe
                            motion capture fed into prompt (GPT) to
                            generate unreal engine config~~

                    [31]Prompt based motion capture training (sign SDK
                            ~~heel hook~~)

                    [32]It sounds like you want to create an alien world
                            where the creatures live underwater
                            ~~Influence scene generation based on twitter
                            stream~~

  The Alignment in the Room...

                    [33]How important is the problem you're solving?
                            Practical uses of LLMs will score higher in
                            this category.

                    [34]Interfacing with A.I at the storybook level is a
                            level down from neuralink~~Use the screenshot
                            distance to allow for acceptable distance
                            allignment maybe that is playwright~~

                    [35]Videos | Playwright
                    [36]Screenshot Testing with Chromatic
                    [37]Reviewing Build 2 o public-rant/test-storybook
                    [38]Playwright Test uses the pixelmatch library. You
                            can pass various options to modify its
                            behavior:

                    [39]playwright & chromatic
                    [40]Paul Christiano on how OpenAI is developing real
                            solutions to the 'AI alignment problem', and
                            his vision of how humanity will progressively
                            hand over decision-making to AI systems -
                            80,000 Hours

                    [41]Podcast: AI and the Value Alignment Problem with
                            Meia Chita-Tegmark and Lucas Perry - Future of
                            Life Institute

              [42]thumbsup
              [43]media
              [44]youtube upload
              [45]canva upload
              [46]prompt prompt
              [47]Project Data Structure
              [48]Need to squash all the old commits and explain about the
                      astro self generating storyboook

              [49]UI Mode | Playwright
              [50]Are you ready?
              [51]Wolfram for Startups: Technology Grants & Partnerships
              [52]Stephen Wolfram on AI's rapid progress & the
                      "Post-Knowledge Work Era" | E1711 - YouTube

              [53]Best World Cup Boulders 2022 - YouTube
              [54]Visual Prompting Livestream With Andrew Ng - YouTube
              [55]2x faster feature development with Storybook, mirage and
                      interactions by Chris Webb | Storybook Day - YouTube

              [56]Grafana Canvas Overview - YouTube

  References

        [57]Prefer GraphQL/Postgres for now
        [58]Vector Database for Vector Search | Pinecone
        [59]Twilio SMS
        [60](16) Conversation Designer | TPG Telecom | LinkedIn

  Vox2txt2Vox

        [61]Unreal Editor For Fortnite for Free - Epic Games Store
        [62]embedding voxFlow canvas (or chat client)
        [63]codesandbox
        [64]voiceflow/react-chat: React-based chat widget for
                conversations powered by Voiceflow?sandbox

        [65]Templates / Chat - Empty ∑ Storybook?sandbox
        [66]Video camera
        [67]It sounds like you want to create an alien world where the
                creatures live underwater ~~Influence scene generation
                based on twitter stream~~

        [68]Mediapipe and metahuman
        [69]Sentiment analysis through mediapipe (nltk) retreived through
                graphile

        [70]Google Developers Blog: SignAll SDK: Sign language interface
                using MediaPipe is now available for developers

        [71]Lots of new features coming soon, so thought it better not to
                focus but instead great op for collab.

        [72]Learn Prompting | Learn Prompting
        [73]¢ Detecting AI Generated Text | Learn Prompting mediapipe

  How interesting/unique is the project you built? Projects that solve a problem
  creatively will score higher.

        [74]Install Services with Docker Extension and WebExtension
        [75]This was for another comp~~The rules say they favor custom
                domains? onlyplan.net~~

        [76]ElevenLabs - Prime AI Text to Speech | Voice Cloning
        [77]Best practices for prompt engineering with OpenAI API | OpenAI
                Help Center

  [1]

              [78]You can call any function that is callable from
                      Blueprint. This includes any function defined in C++
                      with the BlueprintCallable specifier, or any
                      function that is defined and implemented entirely in
                      Blueprint.

              [79]Text To Speech Quickstart in Unreal Engine | Unreal
                      Engine 5.0 Documentation

              [80]Polly can generate a JSON-formatted list of mouth shapes
                      corresponding to the sounds in that audio file.

  2

              [81]metahuman editor It runs in the browser, how about your
                      glasses? (what tech does it actually run?)

              [82]Remote Control API HTTP Reference | Unreal Engine
                      Documentation

              [83]The call returns a JSON payload that contains the return
                      value of the function called, along with any other
                      output parameters specified in the function's
                      definition.

              [84]Paper2D Transported man (responding to mediapipe events)

  For the purposes of this demo, I'm going to need to stand in for the
  agent...In theory, there will always be unsolved problems... xeno's paradox.
  this was cutting edge for hundreds of years. and when the apple doesn't fall
  far from the tree, it all seems obvious in hindsight.

              [85]For the purposes of this demo, I'm going to need to
                      stand in for the agent...In theory, there will
                      always be unsolved problems... xeno's paradox. this
                      was cutting edge for hundreds of years. and when the
                      apple doesn't fall far from the tree, it all seems
                      obvious in hindsight.

              [86]MediaPipe HandLandmarker Task for web
              [87]Animate 3D Characters Using WebCams and MediaPipe --
                      Part 1 [Pose Tracking] | by Klurdy Studios |
                      Heartbeat

              [88]MediaPipe Audio Classifier for web
              [89]Talk - GPT-2 meets Whisper in WebAssembly
              [90]the pope pretending to be henry kissenger steve jobs -
                      Brave Search

              [91]Add `SpeechMarkTypes` to params
              [92]Using Speech Marks - Amazon Polly

        [93]I could imagine your ability to review the AI's actions to
                become so realtime that it might even feel subejctively
                alike to reading this sentnece.

References

   Visible links:
   1. todo://criteria/
   2. chrome://bookmarks/?id=4072
   3. chrome://bookmarks/?id=4064
   4. chrome://bookmarks/?id=4066
   5. https://openai.com/research/whisper
   6. http://callbackhell.com/
   7. https://www.npmjs.com/package/@aws-sdk/client-polly
   8. todo://crit/
   9. chrome://bookmarks/?q=zx
  10. chrome://bookmarks/?id=2790
  11. https://docs.docker.com/desktop/extensions-sdk/dev/api/reference/interfaces/Docker/
  12. chrome://bookmarks/?id=3864
  13. http://localhost:6006/?path=/story/components-tests--no-tests
  14. https://creator.voiceflow.com/project/644da59a3e87a3cf4f4f3376/publish/api
  15. https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started-browser.html
  16. https://whisper.ggerganov.com/talk/helpers.js
  17. https://whisper.ggerganov.com/talk/talk.js
  18. view-source:https://whisper.ggerganov.com/talk/
  19. https://github.com/traefik/traefik#download
  20. https://codepen.io/mediapipe-preview/pen/zYamdVd
  21. chrome://bookmarks/?id=3887
  22. https://www.graphile.org/postgraphile/jwk-verification/
  23. chrome://bookmarks/?id=3888
  24. https://storybook.js.org/docs/6.5/react/configure/telemetry
  25. todo://crit/
  26. chrome://bookmarks/?q=sandbox
  27. chrome://bookmarks/?q=embed
  28. brave://bookmarks/?q=graphql+opentel
  29. todo://crit/
  30. chrome://bookmarks/?q=mediapipe
  31. chrome://bookmarks/?q=metahuman
  32. chrome://bookmarks/?q=twitter
  33. todo://crit/
  34. chrome://bookmarks/?q=chromatic
  35. https://playwright.dev/docs/videos
  36. https://formidable.com/blog/2018/screenshot-testing-with-chromatic/
  37. https://www.chromatic.com/test?appId=63db2f7100e6154e490cc4ef&id=63db3141d5a24441afedc99a
  38. https://playwright.dev/docs/test-snapshots
  39. https://mail.proton.me/u/0/inbox/83vM4nD_c0ObTPyNxC2yCzhBxfMyePjBj0wiQ4Hwfun7zyygJnLdtbANPy4Vy_ItpxIaJBpmJLJD51svF4MDvQ==#filter=unread
  40. https://80000hours.org/podcast/episodes/paul-christiano-ai-alignment-solutions/
  41. https://futureoflife.org/podcast/podcast-ai-value-alignment-problem-meia-chita-tegmark-lucas-perry/
  42. https://www.gstatic.com/alkali/ddc10b3ff2318f233f34585084625b0c2b3b495e.png
  43. https://codesandbox.io/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feditors.3475b465.png&w=3840&q=100
  44. https://youtu.be/pTaGJX4qiP0
  45. https://www.canva.com/design/DAFhjLhVK-c/HPgGswhSG6vqlEY5s6nSlg/watch?utm_content=DAFhjLhVK-c&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink
  46. https://www.linkedin.com/posts/isaacspeter_prompthacks-activity-7057685343575158784--d26?utm_source=share&utm_medium=member_ios
  47. https://developer.voiceflow.com/docs/voiceflow-project-data-structure
  48. https://github.com/opensource-rant/prompthack2023/commit/6869b11d183649b272e352205011d08112e0440f
  49. https://playwright.dev/docs/test-ui-mode
  50. https://www.youtube.com/watch?v=0xGBwnG7Bz4
  51. https://www.wolfram.com/startups/
  52. https://www.youtube.com/watch?v=F5tXWmCJ_wo
  53. https://www.youtube.com/watch?v=F0kyGCsvZ2k&t=13s
  54. https://www.youtube.com/watch?v=FE88OOUBonQ&t=1291s
  55. https://www.youtube.com/watch?v=L4KeG4iPcus&t=204s
  56. https://www.youtube.com/watch?v=4mmpDvNAh90
  57. https://docs.pinecone.io/docs/node-client
  58. https://www.pinecone.io/
  59. https://developer.voiceflow.com/docs/twilio-sms
  60. https://www.linkedin.com/jobs/view/3576941085/
  61. https://store.epicgames.com/en-US/p/fortnite--uefn?lang=en-US
  62. https://mail.proton.me/u/0/inbox/EYQ6ksQLBEdUzoVJWDxPFHmkhFEgFHlnXtmHo-u3Ys-d_RIvdsr4p3496161rKHGEraDTQ64X2qx34k4cZE4tA==
  63. chrome://bookmarks/?q=codesandbox
  64. https://github.com/voiceflow/react-chat
  65. https://voiceflow.github.io/react-chat/?path=/story/templates-chat--empty
  66. https://mail.proton.me/u/0/inbox/XJ4zoQC7r_GQP1AKvCdLddSxgqRoqvm8mwATay4Ezr3JsJJ2Ixl8KWbfplCWoJr8dIOeSAVmh_1Ifi8huMrecg==#filter=unread
  67. https://mail.proton.me/u/0/inbox/93jcN03i6hVmuL4i72-O6AbMJQcRNX5ui7YHQbIK36bTlBoB2t0m26xZkbcCx6qRZBui221GvYz77FAbTiNxgQ==#filter=unread
  68. https://mail.proton.me/u/0/inbox/5OXXkyZO9hP4q-gRGY7gPr5ZjPZEKdEk4YuuD_mFvBxo0hNRFKZbXkpit3TDM2IZzTauwZlbMJm0-m6wLk2Wfg==#filter=unread
  69. https://mediapipe-studio.webapps.google.com/demo/text_classifier
  70. https://developers.googleblog.com/2021/04/signall-sdk-sign-language-interface-using-mediapipe-now-available.html
  71. https://mediapipe-studio.webapps.google.com/home
  72. https://learnprompting.org/
  73. https://learnprompting.org/docs/miscl/detect#openai-text-classifier
  74. https://mail.proton.me/u/0/inbox/eVt__m-3rO9NABWF34MNgzN3e435X_uGh6aW427-JMhzBmjGuN74q2t2EGFLjS5_mFX_iCVvaP6yqft331k4bA==#filter=unread
  75. https://mail.proton.me/u/0/inbox/mELYDvaAKr-yivI6YSaCBc_8_zL4WejcKjtouyJM5tk1h0BITQPu6EnT4r9TgtX4dxgqur53ZFozr7E0zuUFWA==#filter=unread
  76. https://beta.elevenlabs.io/
  77. https://help.openai.com/en/articles/6654000-best-practices-for-prompt-engineering-with-openai-api?twitter
  78. https://docs.unrealengine.com/5.1/en-US/remote-control-api-http-reference-for-unreal-engine/#putremote\/object\/call
  79. https://docs.unrealengine.com/5.0/en-US/text-to-speech-quickstart-in-unreal-engine/
  80. https://github.com/aws-samples/amazon-polly-metahumans/blob/main/Documentation/DeveloperGuide.md#how-it-works
  81. https://metahuman.unrealengine.com/
  82. https://docs.unrealengine.com/4.26/en-US/ProductionPipelines/ScriptingAndAutomation/WebControl/Endpoints/
  83. https://docs.unrealengine.com/4.26/en-US/ProductionPipelines/ScriptingAndAutomation/WebControl/Endpoints/#example_1
  84. https://docs.unrealengine.com/5.0/en-US/plugins-in-unreal-engine/
  85. https://cdn2.unrealengine.com/Unreal+Engine%2Fperformance-capture-whitepaper%2FLPC_Whitepaper_final-7f4163190d9926a15142eafcca15e8da5f4d0701.pdf
  86. https://codepen.io/mediapipe-preview/pen/gOKBGPN
  87. https://heartbeat.comet.ml/animate-3d-characters-using-webcams-and-mediapipe-part-1-pose-tracking-5ca5bd371adf
  88. https://codepen.io/mediapipe-preview/pen/wvxYYmy
  89. https://whisper.ggerganov.com/talk/
  90. https://search.brave.com/search?q=the+pope+pretending+to+be+henry+kissenger+steve+jobs&source=desktop
  91. https://github.com/awsdocs/aws-doc-sdk-examples/tree/main/javascriptv3/example_code/polly/general-examples/src
  92. https://docs.aws.amazon.com/polly/latest/dg/using-speechmarks.html
  93. todo://embed/

   Hidden links:
  95. http://todo/
  96. http://todo/
  97. http://todo/
  98. http://todo/
  99. http://todo/
 100. http://todo/


---



<img style="width:100%" src="https://user-images.githubusercontent.com/4838076/163777661-a44ec0a9-ee7c-483a-bdbb-7898ba665f68.gif" alt="Component toolkit for live running code editing experiences" />

# Sandpack

Sandpack is a component toolkit for creating your own live running code editing experience powered by CodeSandbox.

[Learn more about Sandpack](https://sandpack.codesandbox.io/) 

[![Edit in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/github/codesandbox/sandpack)

## Sandpack Client

This is a small foundation package that sits on top of the bundler. It is
framework agnostic and facilitates the handshake between your context and the bundler iframe.

[Read more](https://sandpack.codesandbox.io/docs/advanced-usage/client)

## Sandpack React

React components that give you the power of editable sandboxes that run in the browser.

```jsx
import { Sandpack } from "@codesandbox/sandpack-react";

<Sandpack template="react" />;
```

[Read more](https://sandpack.codesandbox.io/docs/advanced-usage/components)

## Sandpack Themes

A list of themes to customize your Sandpack components.

```jsx
import { githubLight } from "@codesandbox/sandpack-themes";

<Sandpack theme={githubLight} />;
```

[Read more](https://sandpack.codesandbox.io/docs/getting-started/themes)
