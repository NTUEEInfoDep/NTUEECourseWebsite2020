import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import configureStore from "../store";
import Routes from "../routes/routes.jsx";

const preloadedState = window.PRELOADED_STATE;

delete window.PRELOADED_STATE;

const store = configureStore(preloadedState);

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
