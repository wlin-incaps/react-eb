"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var redux_1 = require("redux");
var reducers_1 = require("../reducers");
var middleware_1 = require("../model/middleware");
function configureStore(initStore) {
    if (initStore === void 0) { initStore = {}; }
    var composeEnhancers = redux_1.compose;
    var enhancers = [];
    var middleware = [
        middleware_1.asyncMiddleware()
    ];
    if (typeof window !== 'undefined' && typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
    var store = redux_1.createStore(reducers_1.reducer, initStore, composeEnhancers.apply(void 0, [redux_1.applyMiddleware.apply(void 0, middleware)].concat(enhancers)));
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', function () {
            var nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }
    return store;
}
exports.configureStore = configureStore;
//# sourceMappingURL=index.js.map