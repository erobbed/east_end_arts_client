import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { combineReducers, applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import registerServiceWorker from "./registerServiceWorker";
import authReducer from "./reducers/authReducer";
import eventReducer from "./reducers/eventReducer";
import groupReducer from "./reducers/groupReducer";
import noticeReducer from "./reducers/noticeReducer";
import thunk from "redux-thunk";
import firebase from "firebase";
import "./index.css";

let config = {
  apiKey: "AIzaSyAv12yqtAwD5Ug1OAOkH2zBnaSKaEYyklo",
  authDomain: "shacc-ed3ef.firebaseapp.com",
  databaseURL: "https://shacc-ed3ef.firebaseio.com",
  projectId: "shacc-ed3ef",
  storageBucket: "shacc-ed3ef.appspot.com",
  messagingSenderId: "853571361089"
};

firebase.initializeApp(config);

const rootReducer = combineReducers({
  auth: authReducer,
  groups: groupReducer,
  events: eventReducer,
  notice: noticeReducer
});
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
