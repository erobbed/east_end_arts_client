import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
import { combineReducers, applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import registerServiceWorker from './registerServiceWorker';
import authReducer from './reducers/authReducer';
import groupReducer from './reducers/groupReducer'
import thunk from 'redux-thunk';
import './index.css';

const rootReducer = combineReducers({auth: authReducer, groups: groupReducer});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(<Provider store={store}><Router><App/></Router></Provider>, document.getElementById('root'));
registerServiceWorker();
