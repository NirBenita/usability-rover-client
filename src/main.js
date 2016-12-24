import React from 'react';
import {render} from 'react-dom';
import App from './app.js';

const mock = {
    "name": "mock flow",
    "startTime": "1479141248.000002",
    "messages": [{
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "This product is terrible! No it's not ^_^",
        "ts": "1479117541.000034",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "Testing a product",
        "ts": "1479141266.000005",
        "team": "T2CSKBAE7",
        "event": "ambient"
    }, {
        "type": "message",
        "channel": "C2CU76YDB",
        "user": "U2CTXB49J",
        "text": "Let's see how this goes...",
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