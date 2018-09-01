"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var react_helmet_1 = require("react-helmet");
function NotFound(_a) {
    var staticContext = _a.staticContext;
    // will be available only on the server
    if (staticContext) {
        staticContext.status = 404;
    }
    var title = 'Page Not Found';
    var meta = [
        { name: 'description', content: 'A page to say hello asynchronously' },
    ];
    return (React.createElement("div", null,
        React.createElement(react_helmet_1.default, { title: title, meta: meta }),
        React.createElement("h1", null, "404 : Not Found")));
}
function NotFoundRoute() {
    return (React.createElement(react_router_dom_1.Route, { component: NotFound }));
}
exports.NotFoundRoute = NotFoundRoute;
exports.default = NotFoundRoute;
//# sourceMappingURL=notFound.js.map