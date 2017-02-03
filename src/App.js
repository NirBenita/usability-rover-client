import React from 'react';
import {render} from 'react-dom';
import SessionPage from './pages/session-page';
import HomePage from './pages/home-page';
import { injectGlobal } from 'styled-components';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';

// Simulating Slack Data
import { mock } from './lib/mock.js';

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
      p{
        font-family: Roboto-Regular;
        font-size: 14px;
        color: #1F455C;
        line-height: 24px;
      }
`
class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/">
                </Route>
            </Router>
        )
    }
}

render(
    <App session={mock} />,
    document.querySelector('#app')
);