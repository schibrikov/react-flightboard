import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app/';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import configureStore from './store/configureStore'

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

registerServiceWorker();
