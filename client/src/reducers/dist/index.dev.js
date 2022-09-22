"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _reducers = _interopRequireDefault(require("../reducers"));

var _reactFinalForm = require("react-final-form");

var _streamReducer = _interopRequireDefault(require("./streamReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  auth: _authReducer["default"],
  streams: _streamReducer["default"] // form: Form 

});

exports["default"] = _default;