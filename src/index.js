import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise';
import App from './components/App';
import reducers from './reducers/index';


const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);





ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)} >
        <App />
    </Provider>
    , document.getElementById('root'));
