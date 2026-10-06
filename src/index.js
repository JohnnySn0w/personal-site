import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'react-bnb-gallery/dist/style.css';

ReactDOM.render(<App />, document.getElementById('root'));
// No service worker: it kept visitors on a stale cached build after deploys. unregister() removes old installs.
unregister();
