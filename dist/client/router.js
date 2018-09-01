"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var root_1 = require("./root");
var items_1 = require("./components/items");
var notFound_1 = require("./components/notFound");
var home_1 = require("./components/home");
exports.routes = [
    {
        component: root_1.default,
        routes: [
            {
                path: '/',
                exact: true,
                component: home_1.default
            },
            {
                path: '/items',
                component: items_1.default
            },
            {
                path: '*',
                component: notFound_1.default
            }
        ]
    }
];
//# sourceMappingURL=router.js.map