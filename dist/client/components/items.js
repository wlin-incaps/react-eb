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
var redux_1 = require("redux");
var ReactRedux = require("react-redux");
var react_helmet_1 = require("react-helmet");
var reducers_1 = require("../reducers");
var Items = /** @class */ (function (_super) {
    __extends(Items, _super);
    function Items() {
        var _this = _super.call(this) || this;
        _this.renderItems = _this.renderItems.bind(_this);
        return _this;
    }
    Items.fetchData = function (store, match) {
        return store.dispatch(reducers_1.fetchUsers());
    };
    Items.prototype.componentDidMount = function () {
        this.props.fetchUsers();
    };
    Items.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(react_helmet_1.default, { title: 'Items' }),
            this.props.items.map(this.renderItems)));
    };
    Items.prototype.renderItems = function (item) {
        return (React.createElement("div", { key: item.id },
            React.createElement("span", null, item.name)));
    };
    return Items;
}(React.Component));
var mapDispatchToProps = function (dispatch) { return redux_1.bindActionCreators({ fetchUsers: reducers_1.fetchUsers }, dispatch); };
var mapStateToProps = function (state) { return ({ items: state.items }); };
exports.default = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(Items);
//# sourceMappingURL=items.js.map