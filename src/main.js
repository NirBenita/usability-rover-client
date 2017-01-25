import React from 'react';
import {render} from 'react-dom';
import App from './app.js';
import { injectGlobal } from 'styled-components';

// Simulating Slack Data
import avatarBenita from './assets/benitanir.png'
import avatarArnon from './assets/arnon.png'

injectGlobal`
    * {
        padding:0;
        margin:0;
        box-sizing: border-box;
      }
      html {
        font-size: 75%;
        
      }
      body {
        height: 100%;
        width: 100%;
        font-family: "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
      }
`
const mock = {
    "name": "mock flow",
    "startTime": "1479141248.000002",
    "messages": [{
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "benita",
        "avatar": avatarBenita,
        "text": "the New File should open the newly created file in a new window.",
        "ts": "1479117541.000034",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "arnon",
        "avatar": avatarArnon,
        "text": "the're was missing context when he opened the new file",
        "ts": "1479141266.000005",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "benita",
        "avatar": avatarBenita,
        "text": "the part about comapring files in the tutorial isn't working. let’s find a better way.",
        "ts": "1479141271.000006",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }],
    "endTime": "1479117841.000034"
}

render(
    <App session={mock} />,
    document.querySelector('#app')
);