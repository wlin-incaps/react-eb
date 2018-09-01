"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _ = require("lodash");
var USERS_LOADED = '@ssr/users/loaded';
var initialState = {
    items: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case USERS_LOADED:
            return _.assign({}, state, { items: action.items });
        default:
            return state;
    }
}
exports.reducer = reducer;
exports.fetchUsers = function () { return function (dispatch) {
    return fetch('//jsonplaceholder.typicode.com/users')
        .then(function (res) { return res.json(); })
        .then(function (users) {
        dispatch({
            type: USERS_LOADED,
            items: users
        });
    });
}; };
//# sourceMappingURL=index.js.map