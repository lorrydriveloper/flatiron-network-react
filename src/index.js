import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/main.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";
import { loadState, saveState } from "./helpers/localStorage";

const persistedState = loadState();
const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
