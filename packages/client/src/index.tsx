import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import { renderRoutes, RouteConfig } from "react-router-config";
import { BrowserRouter } from "react-router-dom";

import "isomorphic-fetch";
import "./styles/styles.scss";

import { routes } from "./router";
import { configureStore } from "./store/store";

const element = document.getElementById("root");
const preloadedState = window.__PRELOADED_STATE__;
const store = configureStore(preloadedState);

delete window.__PRELOADED_STATE__;

function render(route: RouteConfig[]) {
  const childContent = (
    <AppContainer>
      <Provider store={store}>
        <BrowserRouter>
          {renderRoutes(route)}
        </BrowserRouter>
      </Provider>
    </AppContainer>
  );

  ReactDOM.hydrate(childContent, element);
}

render(routes);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("./router", () => {
    const newRoutes = require("./router").routes;
    render(newRoutes);
  });
}
