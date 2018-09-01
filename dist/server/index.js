"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var wds_1 = require("./wds");
var ssr_1 = require("./ssr");
if (typeof process.env.NODE_ENV === 'undefined') {
    process.env.NODE_ENV = 'production';
}
var isDevelopment = process.env.NODE_ENV === 'development';
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = isDevelopment;
global.__TEST__ = false;
var config = require('../../config')(process.env.NODE_ENV);
var app = express();
if (isDevelopment) {
    wds_1.default(app);
}
else {
    app.use(config.PUBLIC_PATH, express.static(config.PUBLIC_FOLDER));
}
app.get('*', ssr_1.default);
app.listen(config.PORT, function (err) {
    if (err) {
        throw err;
    }
    console.log('===> Starting Server . . .');
    console.log('===> Port: ' + config.PORT);
    console.log('===> Environment: ' + process.env.NODE_ENV, ', isDevelopment', isDevelopment);
});
//# sourceMappingURL=index.js.map