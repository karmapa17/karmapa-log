'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var level = process.env.LOG_LEVEL || 'debug';
var log = require('console-log-level')({ level: level });
var trace = log.trace;
var debug = log.debug;
var info = log.info;
var warn = log.warn;
var error = log.error;
var fatal = log.fatal;


log.trace = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return trace.call.apply(trace, [log, _chalk2.default.gray('[trace]')].concat(args));
};
log.debug = function () {
  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  return debug.call.apply(debug, [log, _chalk2.default.white('[debug]')].concat(args));
};
log.info = function () {
  for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    args[_key3] = arguments[_key3];
  }

  return info.call.apply(info, [log, _chalk2.default.green('[info]')].concat(args));
};
log.warn = function () {
  for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    args[_key4] = arguments[_key4];
  }

  return warn.call.apply(warn, [log, _chalk2.default.yellow('[warn]')].concat(args));
};
log.error = function () {
  for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    args[_key5] = arguments[_key5];
  }

  return error.call.apply(error, [log, _chalk2.default.red('[error]')].concat(args));
};
log.fatal = function () {
  for (var _len6 = arguments.length, args = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    args[_key6] = arguments[_key6];
  }

  return fatal.call.apply(fatal, [log, _chalk2.default.bgRed('[fatal]')].concat(args));
};

exports.default = log;
module.exports = exports['default'];

