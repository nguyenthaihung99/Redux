import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';
import Main from './redux.js';

const store = createStore(reducer);

<Provider store={store}>
    <Main />
</Provider>;
