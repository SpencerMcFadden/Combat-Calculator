/// <reference path="./interfaces.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App formulas={[]} dice={[]} stats={{}} />, document.getElementById('root') as HTMLElement);
registerServiceWorker();
