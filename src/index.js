import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes'
import {Provider } from 'react-redux';
// import {createStore, applyMiddleware, compose } from 'redux';
// import promiseMiddleware from 'redux-promise';
// import rootReducer from './reducers';
import store from './store';



ReactDOM.render(
    <Provider store ={store}>
 
         <BrowserRouter>
            <Routes/>
        </BrowserRouter>
    </Provider>
        , document.getElementById('root'));

