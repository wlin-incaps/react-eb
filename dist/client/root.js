"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
var react_router_dom_1 = require("react-router-dom");
var react_router_config_1 = require("react-router-config");
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        var APP_NAME = 'any app name';
        return (React.createElement("div", null,
            React.createElement(react_helmet_1.default, { titleTemplate: "%s | " + APP_NAME, defaultTitle: APP_NAME }),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: '/' }, "Home")),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: '/items' }, "items")),
            React.createElement("p", null,
                React.createElement(react_router_dom_1.Link, { to: '/not-found' }, "Not Found")),
            React.createElement("hr", null),
            react_router_config_1.renderRoutes(this.props.route.routes)));
    };
    return Root;
}(React.Component));
exports.default = Root;
//# sourceMappingURL=root.js.map