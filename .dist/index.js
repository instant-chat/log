"use strict";
var $__lodash__;
var _ = ($__lodash__ = require("lodash"), $__lodash__ && $__lodash__.__esModule && $__lodash__ || {default: $__lodash__}).default;
module.exports = (function() {
  var methods = {
    log: log,
    debug: debug,
    info: info,
    status: status,
    warn: warn,
    error: error
  };
  function log() {
    var $__8;
    for (var args = [],
        $__1 = 0; $__1 < arguments.length; $__1++)
      args[$__1] = arguments[$__1];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(args));
  }
  function debug() {
    var $__8;
    for (var args = [],
        $__2 = 0; $__2 < arguments.length; $__2++)
      args[$__2] = arguments[$__2];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(['DEBUG:'], args));
    send.apply((void 0), $traceurRuntime.spread(['debug', new Date()], args));
  }
  function info() {
    var $__8;
    for (var args = [],
        $__3 = 0; $__3 < arguments.length; $__3++)
      args[$__3] = arguments[$__3];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(['INFO:'], args));
    send.apply((void 0), $traceurRuntime.spread(['info', new Date()], args));
  }
  function status() {
    var $__8;
    for (var args = [],
        $__4 = 0; $__4 < arguments.length; $__4++)
      args[$__4] = arguments[$__4];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(['STATUS:'], args));
    send.apply((void 0), $traceurRuntime.spread(['status', new Date()], args));
  }
  function warn() {
    var $__8;
    for (var args = [],
        $__5 = 0; $__5 < arguments.length; $__5++)
      args[$__5] = arguments[$__5];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(['WARN:'], args));
    send.apply((void 0), $traceurRuntime.spread(['warn', new Date()], args));
  }
  function error() {
    var $__8;
    for (var args = [],
        $__6 = 0; $__6 < arguments.length; $__6++)
      args[$__6] = arguments[$__6];
    ($__8 = console).log.apply($__8, $traceurRuntime.spread(['ERROR:'], args));
    send.apply((void 0), $traceurRuntime.spread(['error', new Date()], args));
  }
  function send(level) {
    for (var args = [],
        $__7 = 1; $__7 < arguments.length; $__7++)
      args[$__7 - 1] = arguments[$__7];
  }
  var debouncedSend = _.debounce((function() {
    Log.save({logs: buffer}, (function() {
      buffer.splice(0);
    }));
    buffer = [];
  }), 100, {maxWait: 500});
  return _.extend(methods.log, methods);
});

//# sourceMappingURL=index.js.map