import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './css/style.css'

// Redux
import { createStore } from 'redux';
// Provider pour globaliser le store
import {Provider} from 'react-redux';

import reducer from './reducers/calculatrice';

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
