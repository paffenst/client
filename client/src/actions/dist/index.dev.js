"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteStream = exports.editStream = exports.fetchStream = exports.fetchStreams = exports.createStream = exports.signOut = exports.signIn = void 0;

var _streams = _interopRequireDefault(require("../apis/streams"));

var _history = _interopRequireDefault(require("../history"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var signIn = function signIn(userId) {
  return {
    type: _types.SIGN_IN,
    payload: userId
  };
};

exports.signIn = signIn;

var signOut = function signOut() {
  return {
    type: _types.SIGN_OUT
  };
};

exports.signOut = signOut;

var createStream = function createStream(formValues) {
  return function _callee(dispatch, getState) {
    var userId, response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = getState().auth.userId;
            _context.next = 3;
            return regeneratorRuntime.awrap(_streams["default"].post("/streams", _objectSpread({}, formValues, {
              userId: userId
            })));

          case 3:
            response = _context.sent;
            dispatch({
              type: _types.CREATE_STREAM,
              payload: response.data
            });

            _history["default"].push("/");

          case 6:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.createStream = createStream;

var fetchStreams = function fetchStreams() {
  return function _callee2(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return regeneratorRuntime.awrap(_streams["default"].get("/streams"));

          case 2:
            response = _context2.sent;
            dispatch({
              type: _types.FETCH_STREAMS,
              payload: response.data
            });

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.fetchStreams = fetchStreams;

var fetchStream = function fetchStream(id) {
  return function _callee3(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return regeneratorRuntime.awrap(_streams["default"].get("/streams/".concat(id)));

          case 2:
            response = _context3.sent;
            dispatch({
              type: _types.FETCH_STREAM,
              payload: response.data
            });

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.fetchStream = fetchStream;

var editStream = function editStream(id, formValues) {
  return function _callee4(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_streams["default"].patch("/streams/".concat(id), formValues));

          case 2:
            response = _context4.sent;
            dispatch({
              type: _types.EDIT_STREAM,
              payload: response.data
            });

            _history["default"].push("/");

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    });
  };
};

exports.editStream = editStream;

var deleteStream = function deleteStream(id) {
  return function _callee5(dispatch) {
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return regeneratorRuntime.awrap(_streams["default"]["delete"]("/streams/".concat(id)));

          case 2:
            dispatch({
              type: _types.DELETE_STREAM,
              payload: id
            });

            _history["default"].push("/");

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.deleteStream = deleteStream;