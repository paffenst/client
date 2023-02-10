"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _types = require("../actions/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var streamReducer = function streamReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.FETCH_STREAMS:
      return _objectSpread({}, state, {}, _lodash["default"].mapKeys(action.payload, 'id'));

    case _types.FETCH_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case _types.CREATE_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case _types.EDIT_STREAM:
      return _objectSpread({}, state, _defineProperty({}, action.payload.id, action.payload));

    case _types.DELETE_STREAM:
      return _lodash["default"].omit(state, action.payload);

    default:
      return state;
  }
};

var _default = streamReducer;
exports["default"] = _default;