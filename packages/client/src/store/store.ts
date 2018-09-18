import { applyMiddleware, compose, createStore, Middleware, Store } from "redux";

import { asyncMiddleware } from "../model/middleware";
import { reducer } from "../reducers/reducers";

export function configureStore(initStore: {} = { items: [] }) {
  let composeEnhancers = compose;
  const enhancers: any[] = [];
  const middleware: Middleware[] = [
    asyncMiddleware(),
  ];

  if (typeof window !== "undefined" && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === "function") {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createStore(
    reducer,
    initStore,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("../reducers", () => {
      const nextRootReducer = require("../reducers/reducers");
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
