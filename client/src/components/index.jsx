import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { getInitialState } from "../actions/sessionAction";

import configureStore from "../store";
import Routes from "../routes/routes";

const preloadedState = window.PRELOADED_STATE;

delete window.PRELOADED_STATE;

const store = configureStore(preloadedState);
store.dispatch(getInitialState());

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
