"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteStream = exports.editStream = exports.fetchStream = exports.fetchStreams = exports.createStream = exports.signOut = exports.signIn = void 0;

var _streams = _interopRequireDefault(require("../apis/streams"));

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var createStream = function createStream(form) {
  return function _callee(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_streams["default"].post('/streams', form));

          case 2:
            response = _context.sent;
            dispatch({
              type: _types.CREATE_STREAM,
              payload: response.data
            });

          case 4:
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
            return regeneratorRuntime.awrap(_streams["default"].get('/streams'));

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

var editStream = function editStream(id, form) {
  return function _callee4(dispatch) {
    var response;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return regeneratorRuntime.awrap(_streams["default"].put("/streams/".concat(id)));

          case 2:
            response = _context4.sent;
            dispatch({
              type: _types.EDIT_STREAM,
              payload: response.data
            });

          case 4:
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
              payload: response.data
            });

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    });
  };
};

exports.deleteStream = deleteStream;