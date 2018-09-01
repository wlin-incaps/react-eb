"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * webpack dev server
 * @param  {express.Application} app express app
 */
function wds(app) {
    var webpackConfig = require('../../webpack.config');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var compiler = webpack(webpackConfig);
    app.use(webpackDevMiddleware(compiler, {
        hot: true,
        noInfo: true,
        publicPath: webpackConfig.output.publicPath,
        serverSideRender: true,
        // https://github.com/webpack/webpack-dev-server/issues/143#issuecomment-139705511
        watchOptions: {
            poll: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));
    // Throw away the cached client modules and let them be re-required next time
    compiler.plugin('done', function () {
        var cacheModules = Object.keys(require.cache)
            .filter(function (id) { return /client/.test(id) || /ssr/.test(id); });
        if (cacheModules.length > 1) {
            console.info('===> Client\'s cache has been removed.', "Find " + cacheModules.length);
            cacheModules.forEach(function (id) { return delete require.cache[id]; });
        }
    });
}
exports.wds = wds;
exports.default = wds;
//# sourceMappingURL=wds.js.map