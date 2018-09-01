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
var _ = require("lodash");
var react_helmet_1 = require("react-helmet");
var Html = /** @class */ (function (_super) {
    __extends(Html, _super);
    function Html() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Html, "defaultProps", {
        get: function () {
            return {
                content: '',
                publicPath: '/',
                assets: {},
            };
        },
        enumerable: true,
        configurable: true
    });
    Html.prototype.render = function () {
        var __PRELOADED_STATE__ = JSON.stringify(this.props.store.getState()).replace(/</g, '\\u003c');
        var head = react_helmet_1.default.rewind();
        return (React.createElement("html", { lang: 'en' },
            React.createElement("head", null,
                head.title.toComponent(),
                head.meta.toComponent(),
                React.createElement("meta", { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
                React.createElement("meta", { charSet: 'utf-8' }),
                this.renderCSS(this.props.assets.app)),
            React.createElement("body", null,
                React.createElement("div", { id: 'root', dangerouslySetInnerHTML: { __html: this.props.content } }),
                React.createElement("script", { dangerouslySetInnerHTML: { __html: "window.__PRELOADED_STATE__=" + __PRELOADED_STATE__ + ";" }, charSet: 'UTF-8' }),
                this.renderJS(this.props.assets.vendor),
                this.renderJS(this.props.assets.app))));
    };
    Html.prototype.normalizeAssets = function (assets) {
        return Array.isArray(assets) ? assets : [assets];
    };
    Html.prototype.renderJS = function (asset) {
        var _this = this;
        return this.normalizeAssets(asset)
            .filter(function (path) { return _.endsWith(path, '.js'); })
            .map(function (path, key) { return React.createElement("script", { key: key, type: 'text/javascript', src: _this.props.publicPath + path }); });
    };
    Html.prototype.renderCSS = function (asset) {
        var _this = this;
        return this.normalizeAssets(asset)
            .filter(function (path) { return _.endsWith(path, '.css'); })
            .map(function (path, key) { return React.createElement("link", { key: key, rel: 'stylesheet', href: _this.props.publicPath + path }); });
    };
    return Html;
}(React.Component));
exports.Html = Html;
exports.DOCTYPE = '<!DOCTYPE html>';
//# sourceMappingURL=html.js.map