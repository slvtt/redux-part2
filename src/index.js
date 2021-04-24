//import react/redux
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {commentReducer} from './redux/reducers/commentReducer'


import './css/style.css';
import './sass/style.scss';

import {loadState,saveState} from './redux/localStorage/localStorage'

import App from './containers/app';


const state = loadState();

const store = createStore(commentReducer,state,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

store.subscribe(() => {
    saveState(store.getState())
})


ReactDOM.render(
    <Provider store ={store}>
        <App />
    </Provider>

    ,document.getElementById('root')
)