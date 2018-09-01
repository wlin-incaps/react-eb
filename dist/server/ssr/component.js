"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_redux_1 = require("react-redux");
var react_router_1 = require("react-router");
var react_router_config_1 = require("react-router-config");
var router_1 = require("../../client/router");
var store_1 = require("../../client/store");
function Component(_a) {
    var config = _a.config;
    return (React.createElement(react_redux_1.Provider, { store: config.store },
        React.createElement(react_router_1.StaticRouter, { context: config.routerContext, location: config.locationUrl }, react_router_config_1.renderRoutes(router_1.routes))));
}
exports.Component = Component;
function getStore() {
    return store_1.configureStore();
}
exports.getStore = getStore;
function fetchData(url, store) {
    var branch = react_router_config_1.matchRoutes(router_1.routes, url);
    var promises = branch.map(function (_a) {
        var route = _a.route, match = _a.match;
        var fetchDataPromise = _.get(route, 'component.fetchData');
        return fetchDataPromise instanceof Function
            ? fetchDataPromise(store, match)
            : Promise.resolve(null);
    });
    return promises;
}
exports.fetchData = fetchData;
//# sourceMappingURL=component.js.map