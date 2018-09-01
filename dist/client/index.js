"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var react_redux_1 = require("react-redux");
var react_router_dom_1 = require("react-router-dom");
var react_router_config_1 = require("react-router-config");
var react_hot_loader_1 = require("react-hot-loader");
require("isomorphic-fetch");
require("./styles/index.scss");
var router_1 = require("./router");
var store_1 = require("./store");
var element = document.getElementById('root');
var preloadedState = window.__PRELOADED_STATE__;
var store = store_1.configureStore(preloadedState);
delete window.__PRELOADED_STATE__;
function render(route) {
    var childContent = (React.createElement(react_hot_loader_1.AppContainer, null,
        React.createElement(react_redux_1.Provider, { store: store },
            React.createElement(react_router_dom_1.BrowserRouter, null, react_router_config_1.renderRoutes(route)))));
    ReactDOM.hydrate(childContent, element);
}
render(router_1.routes);
// Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./router', function () {
        var newRoutes = require('./router').routes;
        render(newRoutes);
    });
}
//# sourceMappingURL=index.js.map