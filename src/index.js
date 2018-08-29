import React from 'react';
import ReactDOM from 'react-dom';

// some css
import './index.css';

// imports our app component so it can be rendered
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
