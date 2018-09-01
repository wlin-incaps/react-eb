"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var fs = require("fs");
var util = require("util");
var React = require("react");
var server_1 = require("react-dom/server");
var existsP = util.promisify(fs.exists);
var html_1 = require("./html");
var config = require('../../../config')(process.env.NODE_ENV);
require("isomorphic-fetch");
function getAssets(res) {
    if (process.env.NODE_ENV === 'development' && res.locals.webpackStats) {
        var assets = res.locals.webpackStats.toJson().assetsByChunkName;
        return Promise.resolve(assets);
    }
    var assetsPath = path.join(config.PUBLIC_FOLDER, 'manifest.json');
    return existsP(assetsPath)
        .then(function (exists) {
        var assets = {};
        if (exists) {
            assets = require(assetsPath);
        }
        return Promise.resolve(assets);
    });
}
function serverSideRender(req, res, next) {
    var _a = require('./component'), Component = _a.Component, getStore = _a.getStore, fetchData = _a.fetchData;
    var navigator = { userAgent: req.headers['user-agent'] };
    var componentConfig = {
        routerContext: {},
        store: getStore(),
        locationUrl: req.url
    };
    Promise.all(fetchData(req.url, componentConfig.store))
        .then(function () { return getAssets(res); })
        .then(function (assets) {
        var template = server_1.renderToString(React.createElement(Component, {
            config: componentConfig
        }));
        if (componentConfig.routerContext.status === 404) {
            res.status(404);
        }
        if (componentConfig.routerContext.url) {
            res.redirect(301, componentConfig.routerContext.url);
            return;
        }
        res.send(html_1.DOCTYPE + '\n' +
            server_1.renderToString(React.createElement(html_1.Html, {
                assets: assets,
                content: template,
                publicPath: config.PUBLIC_PATH,
                store: componentConfig.store,
            })));
    })
        .catch(function (err) { return next(err); });
}
exports.default = serverSideRender;
//# sourceMappingURL=index.js.map