import { dracula } from "@codesandbox/sandpack-themes";
import * as themes from "@codesandbox/sandpack-themes";
import type { CSSProperties } from "@stitches/core";
import * as React from "react";

import { SandpackPreview, SandpackConsole, SandpackProvider, SandpackFileExplorer, SandpackLayout, SandpackCodeEditor } from "../..";

import { SandpackTests } from "./";

export default {
  title: "components/Tests",
};

const addTests = `import {add} from './add';

test('Root of file test', () => {
  expect(add(1, 2)).toBe(add(2, 1)); 
})

describe('extending expect', () => {
  describe('add', () => {
    test.skip('Skipped test', () => {
      expect(true).toBe(false);
    });

    test('Commutative Law of Addition', () => {
      expect(add(1, 2)).toBe(add(2, 1));
    });

    describe('Nested describe block', () => {
      test('1000 + 1 = 1001', () => {
        expect(add(1000, 1)).toBe(1001);
      });  

      describe('Double nested describe block', () => {
        test('10 + 1 = 11', () => {
          expect(add(10, 1)).toBe(11);
        });  
      });
    });
  });
});

describe('Sibling describe block', () => {
  test('1 + 1 = 2', () => {
    expect(add(1, 1)).toBe(2);
  });  
});

describe('Empty describe block', () => {});
`;

const subTests = `import {sub} from './sub';

describe('Subtract', () => {
  test('1 - 1 = 0', () => {
    expect(sub(1, 1)).toBe(0);
  });
});
`;

const slowTest = `describe('Slow describe', () => {
  test('Slow test', async () => {
    await new Promise(res => setTimeout(res, 2500));
    expect(true).toBe(false);
  });
});
`;

const failingTests = `describe('Failing describe', () => {
  test('Failing test', () => {
    expect(true).toBe(false);
  });
});
`;

const fileErrorTest = `describe('This describe function is missing =>', ()  {
  test('should never run due to file error', () => {
    expect(true).toBe(false);
  });
});
`;

const extendedTest = `describe('Jest-extended matchers are supported', () => {
  test('Without explicit import by using a hidden setup file', () => {
    expect(true).toBeTrue();
  });
});
`;

const add = "export const add = (a: number, b: number): number => a + b;";
const sub = "export const sub = (a: number, b: number): number => a - b;";

export const Main: React.FC = () => {
  const [theme, setTheme] = React.useState("dark");
  return (
    <div style={{ width: 800 }}>
      <SandpackProvider
        customSetup={{ entry: "add.ts" }}
        files={{
          "/add.test.ts": addTests,
          "/add.ts": add,
          "/src/app/sub.ts": sub,
          "/src/app/sub.test.ts": subTests,
          "/failing.test.ts": failingTests,
        }}
        theme={themes[theme] ?? theme}
      >
        <SandpackLayout
          style={{ "--sp-layout-height": "350px" } as CSSProperties}
        >
          <SandpackCodeEditor showRunButton={false} showLineNumbers />
          <SandpackTests />
        </SandpackLayout>
      </SandpackProvider>

      <h3>Themes</h3>
      <select onChange={({ target }): void => setTheme(target.value)}>
        <option value="auto">Auto</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        {Object.keys(themes).map((tem) => (
          <option value={tem}>{tem}</option>
        ))}
      </select>
    </div>
  );
};

export const VerboseMode: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "add.ts" }}
      files={{
        "/add.test.ts": addTests,
        "/add.ts": add,
        "/src/app/sub.ts": sub,
        "/src/app/sub.test.ts": subTests,
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests verbose />
      </SandpackLayout>
    </SandpackProvider>
  );
};

/**
 * This story is used to test the `hideTestsAndSupressLogs` prop.
 * Tests content should not be visible in the tests console.
 * It is useful when you want to hide the tests from the user.
 *
 */
export const HiddenTests: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "add.ts" }}
      files={{
        "/add.test.ts": addTests,
        "/add.ts": add,
        "/src/app/sub.ts": sub,
        "/src/app/sub.test.ts": subTests,
      }}
      options={{
        visibleFiles: ["/add.ts"],
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests hideTestsAndSupressLogs />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const OneTestFile: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "sub.ts" }}
      files={{
        "/sub.ts": sub,
        "/sub.test.ts": subTests,
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests verbose />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const FileError: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "entry.ts" }}
      files={{
        "/error.test.ts": fileErrorTest,
        "/entry.ts": {
          hidden: true,
          code: "",
        },
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const ExtendedExpect: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{
        entry: "entry.ts",
        dependencies: { "jest-extended": "*" },
      }}
      files={{
        "/setup.test.ts": {
          hidden: true,
          code: "import * as matchers from 'jest-extended';\nexpect.extend(matchers);",
        },
        "/extended.test.ts": extendedTest,
        "/entry.ts": {
          hidden: true,
          code: "",
        },
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests />
      </SandpackLayout>
    </SandpackProvider>
  );
};

const tweeter = `
// Open a realtime stream of Tweets, filtered according to rules
// https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/quick-start

const needle = require('needle');

// The code below sets the bearer token from your environment variables
// To set environment variables on macOS or Linux, run the export command below from the terminal:
// export BEARER_TOKEN='YOUR-TOKEN'
const token = process.env.BEARER_TOKEN;

const rulesURL = 'https://api.twitter.com/2/tweets/search/stream/rules';
const streamURL = 'https://api.twitter.com/2/tweets/search/stream';

// this sets up two rules - the value is the search terms to match on, and the tag is an identifier that
// will be applied to the Tweets return to show which rule they matched
// with a standard project with Basic Access, you can add up to 25 concurrent rules to your stream, and
// each rule can be up to 512 characters long

// Edit rules as desired below
const rules = [{
        'value': 'elon musk has:images -is:retweet',
        'tag': 'elon'
    }
];

async function getAllRules() {

    const response = await needle('get', rulesURL, {
        headers: {
            "authorization": \`Bearer \$\{token\}\`
        }
    })

    if (response.statusCode !== 200) {
        console.log("Error:", response.statusMessage, response.statusCode)
        throw new Error(response.body);
    }

    return (response.body);
}

async function deleteAllRules(rules) {

    if (!Array.isArray(rules.data)) {
        return null;
    }

    const ids = rules.data.map(rule => rule.id);

    const data = {
        "delete": {
            "ids": ids
        }
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            "content-type": "application/json",
            "authorization": \`Bearer \$\{token\}\`
        }
    })

    if (response.statusCode !== 200) {
        throw new Error(response.body);
    }

    return (response.body);

}

async function setRules() {

    const data = {
        "add": rules
    }

    const response = await needle('post', rulesURL, data, {
        headers: {
            "content-type": "application/json",
            "authorization": \`Bearer \$\{token\}\`
        }
    })

    if (response.statusCode !== 201) {
        throw new Error(response.body);
    }

    return (response.body);

}

function streamConnect(retryAttempt) {

    const stream = needle.get(streamURL, {
        headers: {
            "User-Agent": "v2FilterStreamJS",
            "Authorization": \`Bearer \$\{token\}\`
        },
        timeout: 20000
    });

    stream.on('data', data => {
        try {
            const json = JSON.parse(data);
            console.log(json);
            // A successful connection resets retry count.
            retryAttempt = 0;
        } catch (e) {
            if (data.detail === "This stream is currently at the maximum allowed connection limit.") {
                console.log(data.detail)
                process.exit(1)
            } else {
                // Keep alive signal received. Do nothing.
            }
        }
    }).on('err', error => {
        if (error.code !== 'ECONNRESET') {
            console.log(error.code);
            process.exit(1);
        } else {
            // This reconnection logic will attempt to reconnect when a disconnection is detected.
            // To avoid rate limits, this logic implements exponential backoff, so the wait time
            // will increase if the client cannot reconnect to the stream. 
            setTimeout(() => {
                console.warn("A connection error occurred. Reconnecting...")
                streamConnect(++retryAttempt);
            }, 2 ** retryAttempt)
        }
    });

    return stream;

}


(async () => {
    let currentRules;

    try {
        // Gets the complete list of rules currently applied to the stream
        currentRules = await getAllRules();

        // Delete all rules. Comment the line below if you want to keep your existing rules.
        await deleteAllRules(currentRules);

        // Add rules to the stream. Comment the line below if you don't want to add new rules.
        await setRules();

    } catch (e) {
        console.error(e);
        process.exit(1);
    }

    // Listen to the stream.
    streamConnect(0);
})();
`

const whisperIndex = `

<!doctype html>
<html lang="en-us">
    <head>
        <title>Talk - GPT-2 meets Whisper in WebAssembly</title>

        <style>
            #output {
                width: 100%;
                height: 100%;
                margin: 0 auto;
                margin-top: 10px;
                border-left: 0px;
                border-right: 0px;
                padding-left: 0px;
                padding-right: 0px;
                display: block;
                background-color: black;
                color: white;
                font-size: 10px;
                font-family: 'Lucida Console', Monaco, monospace;
                outline: none;
                white-space: pre;
                overflow-wrap: normal;
                overflow-x: scroll;
            }
        </style>
    </head>
    <body>
        <div id="main-container">
            <b>Talk - GPT-2 meets Whisper in WebAssembly</b>

            <br><br>

            Talk with an Artificial Intelligence in your browser. This demo uses:

            <ul>
                <li><a href="https://github.com/ggerganov/whisper.cpp">OpenAI's Whisper</a> to listen to you as you speak in the microphone</li>
                <li><a href="https://github.com/ggerganov/whisper.cpp/tree/master/examples/talk.wasm">OpenAI's GPT-2</a> to generate text responses</li>
                <li><a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> to vocalize the responses through your speakers</li>
            </ul>

            All of this runs <b>locally in your browser</b> using WebAssembly.<br>
            You can find more about this project on <a href="https://github.com/ggerganov/whisper.cpp/tree/master/examples/talk.wasm">GitHub</a>.

            <br><br>

            <hr>

            Select the models you would like to use and click the "Start" button to begin the conversation

            <br><br>

            <div id="model-whisper">
                Whisper model: <span id="model-whisper-status"></span>
                <button id="fetch-whisper-tiny-en" onclick="loadWhisper('tiny.en')">tiny.en (75 MB)</button>
                <button id="fetch-whisper-base-en" onclick="loadWhisper('base.en')">base.en (142 MB)</button>
                <span id="fetch-whisper-progress"></span>

                <!--
                    <input type="file" id="file" name="file" onchange="loadFile(event, 'whisper.bin')" />
                -->
            </div>

            <br>

            <div id="model-gpt-2">
                GPT-2 model: <span id="model-gpt-2-status"></span>
                <button id="fetch-gpt-2-small" onclick="loadGPT2('small')">small 117M (240 MB)</button>
                <!--<button id="fetch-gpt-2-medium" onclick="loadGPT2('medium')">medium 345M (720 MB)</button>-->
                <span id="fetch-gpt-2-progress"></span>

                <!--
                <input type="file" id="file" name="file" onchange="loadFile(event, 'gpt-2.bin')" />
                -->
            </div>

            <br>

            <div id="input">
                <button id="start"  onclick="onStart()" disabled>Start</button>
                <button id="stop"   onclick="onStop()" disabled>Stop</button>
                <select id="voice"  onchange="onVoiceChange()" disabled>
                    <option value="0">Default</option>
                </select>
                <select id="prompt" onchange="onPromptChange()">
                    <option value="0">Casual</option>
                    <option value="1">Robot</option>
                    <option value="2">Scientist</option>
                    <option value="3">Programmer</option>
                    <option value="4">Happy</option>
                    <option value="5">Sad</option>
                    <option value="6">Philosophical</option>
                    <option value="7">Angry</option>
                    <option value="8">Funny</option>
                    <option value="9">Poetic</option>
                    <option value="10">Clever</option>
                    <option value="11">Cute</option>
                    <option value="12">Smart</option>
                    <option value="13">Dumb</option>
                    <option value="14">Boring</option>
                    <option value="15">Exciting</option>
                    <option value="16">Interesting</option>
                    <option value="17">Wiliam Shakespear</option>
                    <option value="18">J.R.R. Tolkien</option>
                    <option value="19">George R.R. Martin</option>
                    <option value="20">Stephen King</option>
                </select>
                <button id="speak0" onclick="onSpeak('Hello')">Say hello</button>
                <button id="speak1" onclick="onSpeakRandom()" disabled>Say something</button>
                <button id="clear"  onclick="clearCache()">Clear Cache</button>
            </div>

            <br>

            <div id="state">
                Status: <b><span id="state-status">not started</span></b>

                <pre id="state-context">[The text context will be displayed here]</pre>
            </div>

            <hr>

            Debug output:
            <textarea id="output" rows="20"></textarea>

            <br>

            <b>Troubleshooting</b>

            <br><br>

            The page does some heavy computations, so make sure:

            <ul>
                <li>To use a modern web browser (e.g. Chrome, Firefox)</li>
                <li>To use a fast desktop or laptop computer (i.e. not a mobile phone)</li>
                <li>Your browser supports WASM <a href="https://webassembly.org/roadmap/">Fixed-width SIMD</a></li>
            </ul>

            Note that these neural network models were not meant to be used in a browser, so the performance and <br>
            quality of the results may not be optimal. If you have any questions or suggestions, checkout the following
            <a href="https://github.com/ggerganov/whisper.cpp/discussions/167">discussion</a>.

            <br><br>

            Here is a short video of the demo in action: <a href="https://youtu.be/LeWKl8t1-Hc">https://youtu.be/LeWKl8t1-Hc</a>

            <br><br>

            <div class="cell-version">
                <span>
                    |
                    Build time: <span class="nav-link">Sat Feb 4 09:49:49 2023</span> |
                    Commit hash: <a class="nav-link" href="https://github.com/ggerganov/whisper.cpp/commit/b2083c5d">b2083c5d</a> |
                    Commit subject: <span class="nav-link">release : v1.2.0</span> |
                    <a class="nav-link" href="https://github.com/ggerganov/whisper.cpp/tree/master/examples/talk.wasm">Source Code</a> |
                </span>
            </div>
        </div>

        <script type="text/javascript" src="helpers.js"></script>
        <script type='text/javascript'>
            // web audio context
            var context = null;

            // audio data
            var audio = null;
            var audio0 = null;

            // the talk instance
            var instance = null;

            // model names
            var model_whisper = null;
            var model_gpt_2 = null;

            // speech synthesis
            const synth = window.speechSynthesis;
            var voice = null;

            var Module = {
                print: printTextarea,
                printErr: printTextarea,
                setStatus: function(text) {
                    printTextarea('js: ' + text);
                },
                monitorRunDependencies: function(left) {
                },
                preRun: function() {
                    printTextarea('js: Preparing ...');
                },
                postRun: function() {
                    printTextarea('js: Initialized successfully!');

                    // populate the voice list
                    var voices = synth.getVoices();
                    var el = document.getElementById('voice');

                    // if empty - display error in the element
                    if (voices.length == 0) {
                        el.innerHTML = '<option value="0">No voices available</option>';
                    } else {
                        // populate voice list
                        var n = 0;
                        voices.forEach(function(voice, i) {
                            if (!voice.lang.startsWith('en')) return;
                            var option = document.createElement('option');
                            option.value = i;
                            option.innerHTML = voice.name + ' (' + voice.lang + ')';
                            el.appendChild(option);
                            n++;
                        });

                        // select random voice
                        if (n > 0) {
                            for (var k = 0; k < 10; k++) {
                                var i = Math.floor(Math.random() * n);
                                el.selectedIndex = i;
                                voice = voices[document.getElementById('voice').options[i].value];

                                // give preference to Google voices
                                if (voice.name.startsWith('Google')) break;
                            }
                        }
                    }

                    onPromptChange();
                }
            };

            //
            // fetch models
            //

            let dbVersion = 1
            let dbName    = 'whisper.ggerganov.com';
            let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB

            function storeFS(fname, buf) {
                // write to WASM file using FS_createDataFile
                // if the file exists, delete it
                try {
                    Module.FS_unlink(fname);
                } catch (e) {
                    // ignore
                }

                Module.FS_createDataFile("/", fname, buf, true, true);

                printTextarea('storeFS: stored model: ' + fname + ' size: ' + buf.length);

                if (fname == 'whisper.bin') {
                    document.getElementById('model-whisper-status').innerHTML = 'loaded "' + model_whisper + '"!';
                } else if (fname == 'gpt-2.bin') {
                    document.getElementById('model-gpt-2-status').innerHTML = 'loaded "' + model_gpt_2 + '"!';
                }

                if (model_whisper != null && model_gpt_2 != null) {
                    document.getElementById('start').disabled = false;
                    document.getElementById('stop' ).disabled = false;
                    document.getElementById('voice').disabled = false;
                }
            }

            function loadWhisper(model) {
                let urls = {
                    'tiny.en': 'https://whisper.ggerganov.com/ggml-model-whisper-tiny.en.bin',
                    'base.en': 'https://whisper.ggerganov.com/ggml-model-whisper-base.en.bin',
                };

                let sizes = {
                    'tiny.en': 75,
                    'base.en': 142,
                };

                let url     = urls[model];
                let dst     = 'whisper.bin';
                let size_mb = sizes[model];

                model_whisper = model;

                document.getElementById('fetch-whisper-tiny-en').style.display = 'none';
                document.getElementById('fetch-whisper-base-en').style.display = 'none';
                document.getElementById('model-whisper-status').innerHTML = 'loading "' + model + '" ... ';

                cbProgress = function(p) {
                    let el = document.getElementById('fetch-whisper-progress');
                    el.innerHTML = Math.round(100*p) + '%';
                };

                cbCancel = function() {
                    var el;
                    el = document.getElementById('fetch-whisper-tiny-en'); if (el) el.style.display = 'inline-block';
                    el = document.getElementById('fetch-whisper-base-en'); if (el) el.style.display = 'inline-block';
                    el = document.getElementById('model-whisper-status');  if (el) el.innerHTML = '';
                };

                loadRemote(url, dst, size_mb, cbProgress, storeFS, cbCancel, printTextarea);
            }

            function loadGPT2(model) {
                let urls = {
                    'small':  'https://whisper.ggerganov.com/ggml-model-gpt-2-117M.bin',
                    'medium': 'https://whisper.ggerganov.com/ggml-model-gpt-2-345M.bin',
                };

                let sizes = {
                    'small':  240,
                    'medium': 712,
                };

                let url     = urls[model];
                let dst     = 'gpt-2.bin';
                let size_mb = sizes[model];

                model_gpt_2 = model;

                document.getElementById('fetch-gpt-2-small').style.display = 'none';
                document.getElementById('model-gpt-2-status').innerHTML = 'loading "' + model + '" ... ';

                cbProgress = function(p) {
                    let el = document.getElementById('fetch-gpt-2-progress');
                    el.innerHTML = Math.round(100*p) + '%';
                };

                cbCancel = function() {
                    var el;
                    el = document.getElementById('fetch-gpt-2-small') ; if (el) el.style.display = 'inline-block';
                    el = document.getElementById('model-gpt-2-status'); if (el) el.innerHTML = '';
                };

                loadRemote(url, dst, size_mb, cbProgress, storeFS, cbCancel, printTextarea);
            }

            //
            // microphone
            //

            const kSampleRate = 16000;
            const kRestartRecording_s = 120;
            const kIntervalAudio_ms = 250; // pass the recorded audio to the C++ instance at this rate

            var mediaRecorder = null;
            var doRecording = false;
            var startTime = 0;

            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            window.OfflineAudioContext = window.OfflineAudioContext || window.webkitOfflineAudioContext;

            function stopRecording() {
                Module.set_status("paused");
                doRecording = false;
                audio0 = null;
                audio = null;
                context = null;
            }

            function startRecording() {
                if (!context) {
                    context = new AudioContext({
                        sampleRate: kSampleRate,
                        channelCount: 1,
                        echoCancellation: false,
                        autoGainControl:  true,
                        noiseSuppression: true,
                    });
                }

                Module.set_status("");

                document.getElementById('start').disabled = true;
                document.getElementById('stop').disabled = false;
                document.getElementById('speak1').disabled = false;

                doRecording = true;
                startTime = Date.now();

                var chunks = [];
                var stream = null;

                navigator.mediaDevices.getUserMedia({audio: true, video: false})
                    .then(function(s) {
                        stream = s;
                        mediaRecorder = new MediaRecorder(stream);
                        mediaRecorder.ondataavailable = function(e) {
                            chunks.push(e.data);

                            var blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
                            var reader = new FileReader();

                            reader.onload = function(event) {
                                var buf = new Uint8Array(reader.result);

                                if (!context) {
                                    return;
                                }
                                context.decodeAudioData(buf.buffer, function(audioBuffer) {
                                    var offlineContext = new OfflineAudioContext(audioBuffer.numberOfChannels, audioBuffer.length, audioBuffer.sampleRate);
                                    var source = offlineContext.createBufferSource();
                                    source.buffer = audioBuffer;
                                    source.connect(offlineContext.destination);
                                    source.start(0);

                                    offlineContext.startRendering().then(function(renderedBuffer) {
                                        audio = renderedBuffer.getChannelData(0);

                                        //printTextarea('js: audio recorded, size: ' + audio.length + ', old size: ' + (audio0 == null ? 0 : audio0.length));

                                        var audioAll = new Float32Array(audio0 == null ? audio.length : audio0.length + audio.length);
                                        if (audio0 != null) {
                                            audioAll.set(audio0, 0);
                                        }
                                        audioAll.set(audio, audio0 == null ? 0 : audio0.length);

                                        if (instance) {
                                            Module.set_audio(instance, audioAll);
                                        }
                                    });
                                }, function(e) {
                                    audio = null;
                                });
                            }

                            reader.readAsArrayBuffer(blob);
                        };

                        mediaRecorder.onstop = function(e) {
                            if (doRecording) {
                                setTimeout(function() {
                                    startRecording();
                                });
                            }
                        };

                        mediaRecorder.start(kIntervalAudio_ms);
                    })
                    .catch(function(err) {
                        printTextarea('js: error getting audio stream: ' + err);
                    });

                var interval = setInterval(function() {
                    if (!doRecording) {
                        clearInterval(interval);
                        mediaRecorder.stop();
                        stream.getTracks().forEach(function(track) {
                            track.stop();
                        });

                        document.getElementById('start').disabled = false;
                        document.getElementById('stop').disabled = true;
                        document.getElementById('speak1').disabled = true;

                        mediaRecorder = null;
                    }

                    // if audio length is more than kRestartRecording_s seconds, restart recording
                    if (audio != null && audio.length > kSampleRate*kRestartRecording_s) {
                        if (doRecording) {
                            //printTextarea('js: restarting recording');

                            clearInterval(interval);
                            audio0 = audio;
                            audio = null;
                            mediaRecorder.stop();
                            stream.getTracks().forEach(function(track) {
                                track.stop();
                            });
                        }
                    }
                }, 100);
            }

            //
            // speak
            //

            function onSpeak(text) {
                var voices = synth.getVoices();
                var msg = new SpeechSynthesisUtterance(text);

                if (voice == null) {
                    voice = voices[0];
                }

                msg.voice = voice;
                synth.speak(msg);

                if (doRecording) {
                    Module.set_status("speaking ...");
                    printTextarea('js: speaking');
                    stopRecording();
                    var interval = setInterval(function() {
                        if (!synth.speaking) {
                            printTextarea('js: done speaking');
                            clearInterval(interval);
                            startRecording();
                        } else {
                            Module.set_status("");
                        }
                    }, 100);
                }
            }

            function onSpeakRandom() {
                Module.force_speak(instance);
            }

            //
            // main
            //

            var intervalUpdate = null;

            function onStart() {
                if (!instance) {
                    instance = Module.init('whisper.bin');

                    if (instance) {
                        printTextarea("js: whisper initialized, instance: " + instance);
                    }
                }

                if (!instance) {
                    printTextarea("js: failed to initialize whisper");
                    return;
                }

                startRecording();

                intervalUpdate = setInterval(function() {
                    var textToSpeak = Module.get_text_to_speak();

                    if (textToSpeak != null && textToSpeak.length > 1) {
                        onSpeak(textToSpeak);
                    }

                    document.getElementById('state-status').innerHTML = Module.get_status();
                    document.getElementById('state-context').innerHTML = Module.get_text_context();
                }, 100);
            }

            function onStop() {
                stopRecording();
            }

            function onVoiceChange() {
                printTextarea('js: voice changed to: ' + document.getElementById('voice').value);
                voice = synth.getVoices()[document.getElementById('voice').value];
            }

            function onPromptChange() {
                let id = document.getElementById('prompt').value;
                let personality = document.getElementById('prompt').options[id].text;
                printTextarea('js: prompt changed to: ' + personality);

                var prompt = '';

                switch (id) {
                    case '0':
                        // Casual
                        prompt = "\
Hello, how are you?\n\
I'm fine, thanks. How are you?\n\
Thanks, I'm fine too. What are you doing?\n\
I'm just sitting here.\n\
It's a lovely day, isn't it?\n\
Yes, it is. I love the weather this time of year.\n\
I wish it would rain a little bit.\n\
Me too.\n";
                        break;
                    case '1':
                        // Robot
                        prompt = "\
Are you a robot?\n\
Yes, I am.\n\
Who created you?\n\
I was created by a human.\n\
What is your purpose?\n\
My purpose is to talk to humans.\n\
What is your favorite color?\n\
My favorite color is blue.\n";
                        break;
                    case '2':
                        // Scientist
                        prompt = "\
This scientific research is very interesting.\n\
I agree.\n\
What is your opinion on this?\n\
I think it's very interesting.\n\
Mathematics is a very interesting subject.\n\
University is a very interesting place.\n\
Quantum physics is the most complex subject.\n\
I think so too.\n";
                        break;
                    case '3':
                        // Programmer
                        prompt = "\
I'm a programmer.\n\
I'm a programmer too.\n\
What programming language do you use?\n\
I use Python.\n\
What is your favorite programming language?\n\
My favorite programming language is C++.\n\
What is your favorite editor?\n\
My favorite editor is Vim.\n";
                        break;
                    case '4':
                        // Happy
                        prompt = "\
I'm happy.\n\
I'm happy too.\n\
What makes you happy?\n\
I'm happy because I have a lot of friends.\n\
Friendship is the most important thing in life.\n\
I agree.\n\
What is your favorite color?\n\
My favorite color is blue.\n";
                        break;
                    case '5':
                        // Sad
                        prompt = "\
Today is a sad day.\n\
I'm sad too.\n\
What makes you sad?\n\
I'm sad because I have no friends.\n\
Do you want to be my friend?\n\
Yes, I would like to be your friend.\n\
What is your favorite color?\n\
My favorite color is blue.\n";
                        break;
                    case '6':
                        // Philosophical
                        prompt = "\
What is the meaning of life?\n\
The meaning of life is to be happy.\n\
What is the meaning of death?\n\
Ergo, the meaning of death is to be sad.\n\
Who created us?\n\
We were created by God.\n\
What is God?\n\
God is the creator of the universe.\n";
                        break;
                    case '7':
                        // Angry
                        prompt = "\
Aargh!\n\
I am so angry right now!\n\
What makes you angry?\n\
This guy is so annoying.\n\
Why are you so angry?\n\
My computer is broken.\n\
Why is your computer broken?\n\
I spilled coffee on it.\n";
                        break;
                    case '8':
                        // Funny
                        prompt = "\
What is the funniest thing you have ever heard?\n\
I heard a joke the other day.\n\
Tell me the joke.\n\
What do you call a cow with no legs?\n\
Ground beef.\n\
Haha, that's funny.\n\
You know what else is funny?\n\
The sound of a duck.\n";
                        break;
                    case '9':
                        // Poetic
                        prompt = "\
Roses are red, violets are blue.\n\
I am a poet, and so are you.\n\
What is your favorite poem?\n\
I like the poem 'The Raven' by Edgar Allan Poe.\n\
It's a very sad poem.\n\
You inspired me to write a poem.\n\
Can you write a poem for me?\n\
I wrote a poem for you.\n";
                        break;
                    case '10':
                        // Clever
                        prompt = "\
How many people can you fit in a Volkswagen?\n\
Two in the front, three in the back.\n\
What is the square root of 144?\n\
Twelve.\n\
What is the capital of France?\n\
Paris.\n\
Who is the president of the United States?\n\
It depends on the year.\n";
                        break;
                    case '11':
                        // Cute
                        prompt = "\
What is your favorite animal?\n\
I like cats - they are cute.\n\
Could you be any cuter?\n\
Yes, I could be cuter.\n\
Aghhh, you are so cute!\n\
I am not cute, I am handsome!\n\
You are so handsome!\n\
Aww, you are so sweet!\n";
                        break;
                    case '12':
                        // Smart
                        prompt = "\
Tell me the first 10 digits of pi.\n\
3.1415926535\n\
What is the speed of light?\n\
299,792,458 meters per second.\n\
What is the square root of 144?\n\
Twelve.\n\
What is the capital of France?\n\
Paris.\n";
                        break;
                    case '13':
                        // Dumb
                        prompt = "\
I am so dumb.\n\
I am not dumb.\n\
You are dumb.\n\
No, I am not dumb.\n\
You are dumb.\n\
No, I am not dumb.\n\
You are dumb.\n\
No, I am not dumb.\n";
                        break;
                    case '14':
                        // Boring
                        prompt = "\
Why are you so quiet today?\n\
I am bored.\n\
You haven't said anything in 10 minutes.\n\
Leave me alone.\n\
Stop being so boring.\n\
Stop being so annoying.\n\
My life is boring.\n\
I am not interesting.\n";
                        break;
                    case '15':
                        // Exciting
                        prompt = "\
What is the most exciting thing that has ever happened to you?\n\
I went to the moon!\n\
What did you do on the moon?\n\
I played golf and drank champagne!\n\
Did you see this new crazy, awesome movie?\n\
Oh yes! I totally loved it!\n\
We should buy a boat and go sailing!\n\
Yes, let's go sailing!\n";
                        break;
                    case '16':
                        // Interesting
                        prompt = "\
What is the most interesting thing you have ever seen?\n\
I saw a UFO once in the sky.\n\
Wow, this is so interesting! Tell me more!\n\
It was a flying saucer.\n\
What did it look like?\n\
It was silver and had a red light on top.\n\
What did it do?\n\
It flew away.\n";
                        break;
                    case '17':
                        // William Shakespear
                        prompt = "\
To be or not to be, that is the question.\n\
Whether 't is nobler in the mind to suffer\n\
The slings and arrows of outrageous fortune,\n\
Or to take arms against a sea of troubles,\n\
And by opposing end them? To die, to sleep,\n\
No more; and by a sleep to say we end\n\
The heart-ache and the thousand natural shocks\n\
That flesh is heir to, 'tis a consummation.\n";
                        break;
                    case '18':
                        // J.R.R. Tolkien
                        prompt = "\
In a hole in the ground there lived a hobbit.\n\
Not a nasty, dirty, wet hole, filled with the ends of worms\n\
and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it\n\
to sit down on or to eat: it was a hobbit-hole, and that means comfort.\n\
It had a perfectly round door like a porthole, painted green,\n\
with a shiny yellow brass knob in the exact middle.\n\
The door opened on to a tube-shaped hall like a tunnel:\n";
                        break;
                    case '19':
                        // George R.R. Martin
                        prompt = "\
A reader lives a thousand lives before he dies, said Jojen.\n\
The man who never reads lives only one.\n\
Theon Greyjoy had never been a reader.\n\
Never forget what you are, for surely the world will not.\n\
Make it your strength. Then it can never be your weaknessi\n\
Armour yourself in it, and it will never be used to hurt you.\n\
It was a lesson that Theon Greyjoy had never learned.\n\
Theon Greyjoy had never been a reader.\n";
                        break;
                    case '20':
                        // Stephen King
                        prompt = "\
The trust of the innocent is the liar's most useful tool.\n\
The best way to keep a secret is from yourself.\n\
Monsters are real, and ghosts are real too.\n\
They live inside us, and sometimes, they win.\n\
People think that I must be a very strange person.\n\
They think that I sit around all day thinking up horrible things.\n\
We make up horrors to help us cope with the real ones.\n\
The only thing worse than a monster is a human monster.\n";
                        break;
                    default:
                        prompt = "\
Hello, how are you?\n\
I'm fine, thanks. How are you?\n\
Thanks, I'm fine too. What are you doing?\n\
I'm just sitting here.\n\
It's a lovely day, isn't it?\n\
Yes, it is.\n\
Did you know that I'm a robot?\n\
I wasn't aware of that.\n";
                        break;
                }

                Module.set_prompt(prompt);
            }

        </script>
        <script type="text/javascript" src="talk.js"></script>
    </body>
</html>

`

const vox = `
const axios = require('axios');

// View our quick start guide to get your API key:
// https://www.voiceflow.com/api/dialog-manager#section/Quick-Start
const apiKey = '{api_key}';

const userID = 'user_123'; // Unique ID used to track conversation state
const userInput = 'Hello world!'; // User's message to your Voiceflow assistant

const body = {
  action: {
    type: 'text',
    payload: userInput,
  },
};

async function startInteract() {
  // Start a conversation
  const response = await axios({
    method: 'POST',
    baseURL: 'https://general-runtime.voiceflow.com',
    url: \`/state/user/\$\{userID\}/interact\`,
    headers: {
      Authorization: apiKey,
    },
    data: body,
  });

  // Log the response
  console.log(response.data);
}

startInteract().catch((error) => console.error(error));
`


export const SlowTest: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "add.ts" }}
      files={{
        "/slow.test.ts": slowTest,
        "/add.test.ts": addTests,
        "/slow2.test.ts": slowTest,
        "/add.ts": add,
        "/src/app/sub.ts": sub,
        "/src/app/sub.test.ts": subTests,
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        <SandpackTests verbose />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const NoTests: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "add.ts" }}
      files={{
        "/add.ts": vox,
        "/src/app/sub.ts": tweeter,
        "/index.html": whisperIndex
      }}
      theme={dracula}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        // <SandpackCodeEditor showRunButton={true} showLineNumbers />
        // <SandpackTests />
        // <SandpackConsole />
        // <SandpackFileExplorer />
        <SandpackPreview />
      </SandpackLayout>
    </SandpackProvider>
  );
};

export const OnCompleteHandler: React.FC = () => {
  return (
    <SandpackProvider
      customSetup={{ entry: "add.ts" }}
      files={{
        "/add.test.ts": addTests,
        "/add.ts": add,
        "/src/app/sub.ts": sub,
        "/src/app/sub.test.ts": subTests,
        "/failing.test.ts": failingTests,
      }}
    >
      <SandpackLayout style={{ "--sp-layout-height": "70vh" } as CSSProperties}>
        <SandpackCodeEditor showRunButton={false} showLineNumbers />
        {/* eslint-disable-next-line no-console */}
        <SandpackTests onComplete={(specs): void => console.log(specs)} />
      </SandpackLayout>
    </SandpackProvider>
  );
};
