"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function asyncMiddleware(extraArgument) {
    return function (_a) {
        var dispatch = _a.dispatch, getState = _a.getState;
        return function (next) { return function (action) {
            if (typeof action === 'function') {
                return action(dispatch, getState, extraArgument);
            }
            return next(action);
        }; };
    };
}
exports.asyncMiddleware = asyncMiddleware;
//# sourceMappingURL=middleware.js.map