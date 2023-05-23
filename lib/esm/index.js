import require$$0, { useState, useRef, useEffect } from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=require$$0,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;

	if (process.env.NODE_ENV !== "production") {
	  (function() {

	var React = require$$0;

	// ATTENTION
	// When adding new symbols to this file,
	// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
	// The Symbol used to tag the ReactElement-like types.
	var REACT_ELEMENT_TYPE = Symbol.for('react.element');
	var REACT_PORTAL_TYPE = Symbol.for('react.portal');
	var REACT_FRAGMENT_TYPE = Symbol.for('react.fragment');
	var REACT_STRICT_MODE_TYPE = Symbol.for('react.strict_mode');
	var REACT_PROFILER_TYPE = Symbol.for('react.profiler');
	var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
	var REACT_CONTEXT_TYPE = Symbol.for('react.context');
	var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
	var REACT_SUSPENSE_TYPE = Symbol.for('react.suspense');
	var REACT_SUSPENSE_LIST_TYPE = Symbol.for('react.suspense_list');
	var REACT_MEMO_TYPE = Symbol.for('react.memo');
	var REACT_LAZY_TYPE = Symbol.for('react.lazy');
	var REACT_OFFSCREEN_TYPE = Symbol.for('react.offscreen');
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	var FAUX_ITERATOR_SYMBOL = '@@iterator';
	function getIteratorFn(maybeIterable) {
	  if (maybeIterable === null || typeof maybeIterable !== 'object') {
	    return null;
	  }

	  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

	  if (typeof maybeIterator === 'function') {
	    return maybeIterator;
	  }

	  return null;
	}

	var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

	function error(format) {
	  {
	    {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
	        args[_key2 - 1] = arguments[_key2];
	      }

	      printWarning('error', format, args);
	    }
	  }
	}

	function printWarning(level, format, args) {
	  // When changing this logic, you might want to also
	  // update consoleWithStackDev.www.js as well.
	  {
	    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
	    var stack = ReactDebugCurrentFrame.getStackAddendum();

	    if (stack !== '') {
	      format += '%s';
	      args = args.concat([stack]);
	    } // eslint-disable-next-line react-internal/safe-string-coercion


	    var argsWithFormat = args.map(function (item) {
	      return String(item);
	    }); // Careful: RN currently depends on this prefix

	    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
	    // breaks IE9: https://github.com/facebook/react/issues/13610
	    // eslint-disable-next-line react-internal/no-production-logging

	    Function.prototype.apply.call(console[level], console, argsWithFormat);
	  }
	}

	// -----------------------------------------------------------------------------

	var enableScopeAPI = false; // Experimental Create Event Handle API.
	var enableCacheElement = false;
	var enableTransitionTracing = false; // No known bugs, but needs performance testing

	var enableLegacyHidden = false; // Enables unstable_avoidThisFallback feature in Fiber
	// stuff. Intended to enable React core members to more easily debug scheduling
	// issues in DEV builds.

	var enableDebugTracing = false; // Track which Fiber(s) schedule render work.

	var REACT_MODULE_REFERENCE;

	{
	  REACT_MODULE_REFERENCE = Symbol.for('react.module.reference');
	}

	function isValidElementType(type) {
	  if (typeof type === 'string' || typeof type === 'function') {
	    return true;
	  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


	  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing  || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden  || type === REACT_OFFSCREEN_TYPE || enableScopeAPI  || enableCacheElement  || enableTransitionTracing ) {
	    return true;
	  }

	  if (typeof type === 'object' && type !== null) {
	    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
	    // types supported by any Flight configuration anywhere since
	    // we don't know which Flight build this will end up being used
	    // with.
	    type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== undefined) {
	      return true;
	    }
	  }

	  return false;
	}

	function getWrappedName(outerType, innerType, wrapperName) {
	  var displayName = outerType.displayName;

	  if (displayName) {
	    return displayName;
	  }

	  var functionName = innerType.displayName || innerType.name || '';
	  return functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName;
	} // Keep in sync with react-reconciler/getComponentNameFromFiber


	function getContextName(type) {
	  return type.displayName || 'Context';
	} // Note that the reconciler package should generally prefer to use getComponentNameFromFiber() instead.


	function getComponentNameFromType(type) {
	  if (type == null) {
	    // Host root, text node or just invalid type.
	    return null;
	  }

	  {
	    if (typeof type.tag === 'number') {
	      error('Received an unexpected object in getComponentNameFromType(). ' + 'This is likely a bug in React. Please file an issue.');
	    }
	  }

	  if (typeof type === 'function') {
	    return type.displayName || type.name || null;
	  }

	  if (typeof type === 'string') {
	    return type;
	  }

	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return 'Fragment';

	    case REACT_PORTAL_TYPE:
	      return 'Portal';

	    case REACT_PROFILER_TYPE:
	      return 'Profiler';

	    case REACT_STRICT_MODE_TYPE:
	      return 'StrictMode';

	    case REACT_SUSPENSE_TYPE:
	      return 'Suspense';

	    case REACT_SUSPENSE_LIST_TYPE:
	      return 'SuspenseList';

	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_CONTEXT_TYPE:
	        var context = type;
	        return getContextName(context) + '.Consumer';

	      case REACT_PROVIDER_TYPE:
	        var provider = type;
	        return getContextName(provider._context) + '.Provider';

	      case REACT_FORWARD_REF_TYPE:
	        return getWrappedName(type, type.render, 'ForwardRef');

	      case REACT_MEMO_TYPE:
	        var outerName = type.displayName || null;

	        if (outerName !== null) {
	          return outerName;
	        }

	        return getComponentNameFromType(type.type) || 'Memo';

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            return getComponentNameFromType(init(payload));
	          } catch (x) {
	            return null;
	          }
	        }

	      // eslint-disable-next-line no-fallthrough
	    }
	  }

	  return null;
	}

	var assign = Object.assign;

	// Helpers to patch console.logs to avoid logging during side-effect free
	// replaying on render function. This currently only patches the object
	// lazily which won't cover if the log function was extracted eagerly.
	// We could also eagerly patch the method.
	var disabledDepth = 0;
	var prevLog;
	var prevInfo;
	var prevWarn;
	var prevError;
	var prevGroup;
	var prevGroupCollapsed;
	var prevGroupEnd;

	function disabledLog() {}

	disabledLog.__reactDisabledLog = true;
	function disableLogs() {
	  {
	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      prevLog = console.log;
	      prevInfo = console.info;
	      prevWarn = console.warn;
	      prevError = console.error;
	      prevGroup = console.group;
	      prevGroupCollapsed = console.groupCollapsed;
	      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

	      var props = {
	        configurable: true,
	        enumerable: true,
	        value: disabledLog,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        info: props,
	        log: props,
	        warn: props,
	        error: props,
	        group: props,
	        groupCollapsed: props,
	        groupEnd: props
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    disabledDepth++;
	  }
	}
	function reenableLogs() {
	  {
	    disabledDepth--;

	    if (disabledDepth === 0) {
	      /* eslint-disable react-internal/no-production-logging */
	      var props = {
	        configurable: true,
	        enumerable: true,
	        writable: true
	      }; // $FlowFixMe Flow thinks console is immutable.

	      Object.defineProperties(console, {
	        log: assign({}, props, {
	          value: prevLog
	        }),
	        info: assign({}, props, {
	          value: prevInfo
	        }),
	        warn: assign({}, props, {
	          value: prevWarn
	        }),
	        error: assign({}, props, {
	          value: prevError
	        }),
	        group: assign({}, props, {
	          value: prevGroup
	        }),
	        groupCollapsed: assign({}, props, {
	          value: prevGroupCollapsed
	        }),
	        groupEnd: assign({}, props, {
	          value: prevGroupEnd
	        })
	      });
	      /* eslint-enable react-internal/no-production-logging */
	    }

	    if (disabledDepth < 0) {
	      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
	    }
	  }
	}

	var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
	var prefix;
	function describeBuiltInComponentFrame(name, source, ownerFn) {
	  {
	    if (prefix === undefined) {
	      // Extract the VM specific prefix used by each line.
	      try {
	        throw Error();
	      } catch (x) {
	        var match = x.stack.trim().match(/\n( *(at )?)/);
	        prefix = match && match[1] || '';
	      }
	    } // We use the prefix to ensure our stacks line up with native stack frames.


	    return '\n' + prefix + name;
	  }
	}
	var reentry = false;
	var componentFrameCache;

	{
	  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
	  componentFrameCache = new PossiblyWeakMap();
	}

	function describeNativeComponentFrame(fn, construct) {
	  // If something asked for a stack inside a fake render, it should get ignored.
	  if ( !fn || reentry) {
	    return '';
	  }

	  {
	    var frame = componentFrameCache.get(fn);

	    if (frame !== undefined) {
	      return frame;
	    }
	  }

	  var control;
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

	  Error.prepareStackTrace = undefined;
	  var previousDispatcher;

	  {
	    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
	    // for warnings.

	    ReactCurrentDispatcher.current = null;
	    disableLogs();
	  }

	  try {
	    // This should throw.
	    if (construct) {
	      // Something should be setting the props in the constructor.
	      var Fake = function () {
	        throw Error();
	      }; // $FlowFixMe


	      Object.defineProperty(Fake.prototype, 'props', {
	        set: function () {
	          // We use a throwing setter instead of frozen or non-writable props
	          // because that won't throw in a non-strict mode function.
	          throw Error();
	        }
	      });

	      if (typeof Reflect === 'object' && Reflect.construct) {
	        // We construct a different control for this case to include any extra
	        // frames added by the construct call.
	        try {
	          Reflect.construct(Fake, []);
	        } catch (x) {
	          control = x;
	        }

	        Reflect.construct(fn, [], Fake);
	      } else {
	        try {
	          Fake.call();
	        } catch (x) {
	          control = x;
	        }

	        fn.call(Fake.prototype);
	      }
	    } else {
	      try {
	        throw Error();
	      } catch (x) {
	        control = x;
	      }

	      fn();
	    }
	  } catch (sample) {
	    // This is inlined manually because closure doesn't do it for us.
	    if (sample && control && typeof sample.stack === 'string') {
	      // This extracts the first frame from the sample that isn't also in the control.
	      // Skipping one frame that we assume is the frame that calls the two.
	      var sampleLines = sample.stack.split('\n');
	      var controlLines = control.stack.split('\n');
	      var s = sampleLines.length - 1;
	      var c = controlLines.length - 1;

	      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
	        // We expect at least one stack frame to be shared.
	        // Typically this will be the root most one. However, stack frames may be
	        // cut off due to maximum stack limits. In this case, one maybe cut off
	        // earlier than the other. We assume that the sample is longer or the same
	        // and there for cut off earlier. So we should find the root most frame in
	        // the sample somewhere in the control.
	        c--;
	      }

	      for (; s >= 1 && c >= 0; s--, c--) {
	        // Next we find the first one that isn't the same which should be the
	        // frame that called our sample function and the control.
	        if (sampleLines[s] !== controlLines[c]) {
	          // In V8, the first line is describing the message but other VMs don't.
	          // If we're about to return the first line, and the control is also on the same
	          // line, that's a pretty good indicator that our sample threw at same line as
	          // the control. I.e. before we entered the sample frame. So we ignore this result.
	          // This can happen if you passed a class to function component, or non-function.
	          if (s !== 1 || c !== 1) {
	            do {
	              s--;
	              c--; // We may still have similar intermediate frames from the construct call.
	              // The next one that isn't the same should be our match though.

	              if (c < 0 || sampleLines[s] !== controlLines[c]) {
	                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
	                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at '); // If our component frame is labeled "<anonymous>"
	                // but we have a user-provided "displayName"
	                // splice it in to make the stack more readable.


	                if (fn.displayName && _frame.includes('<anonymous>')) {
	                  _frame = _frame.replace('<anonymous>', fn.displayName);
	                }

	                {
	                  if (typeof fn === 'function') {
	                    componentFrameCache.set(fn, _frame);
	                  }
	                } // Return the line we found.


	                return _frame;
	              }
	            } while (s >= 1 && c >= 0);
	          }

	          break;
	        }
	      }
	    }
	  } finally {
	    reentry = false;

	    {
	      ReactCurrentDispatcher.current = previousDispatcher;
	      reenableLogs();
	    }

	    Error.prepareStackTrace = previousPrepareStackTrace;
	  } // Fallback to just using the name if we couldn't make it throw.


	  var name = fn ? fn.displayName || fn.name : '';
	  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

	  {
	    if (typeof fn === 'function') {
	      componentFrameCache.set(fn, syntheticFrame);
	    }
	  }

	  return syntheticFrame;
	}
	function describeFunctionComponentFrame(fn, source, ownerFn) {
	  {
	    return describeNativeComponentFrame(fn, false);
	  }
	}

	function shouldConstruct(Component) {
	  var prototype = Component.prototype;
	  return !!(prototype && prototype.isReactComponent);
	}

	function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

	  if (type == null) {
	    return '';
	  }

	  if (typeof type === 'function') {
	    {
	      return describeNativeComponentFrame(type, shouldConstruct(type));
	    }
	  }

	  if (typeof type === 'string') {
	    return describeBuiltInComponentFrame(type);
	  }

	  switch (type) {
	    case REACT_SUSPENSE_TYPE:
	      return describeBuiltInComponentFrame('Suspense');

	    case REACT_SUSPENSE_LIST_TYPE:
	      return describeBuiltInComponentFrame('SuspenseList');
	  }

	  if (typeof type === 'object') {
	    switch (type.$$typeof) {
	      case REACT_FORWARD_REF_TYPE:
	        return describeFunctionComponentFrame(type.render);

	      case REACT_MEMO_TYPE:
	        // Memo may contain any component type so we recursively resolve it.
	        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

	      case REACT_LAZY_TYPE:
	        {
	          var lazyComponent = type;
	          var payload = lazyComponent._payload;
	          var init = lazyComponent._init;

	          try {
	            // Lazy may contain any component type so we recursively resolve it.
	            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
	          } catch (x) {}
	        }
	    }
	  }

	  return '';
	}

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	var loggedTypeFailures = {};
	var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame.setExtraStackFrame(null);
	    }
	  }
	}

	function checkPropTypes(typeSpecs, values, location, componentName, element) {
	  {
	    // $FlowFixMe This is okay but Flow doesn't know it.
	    var has = Function.call.bind(hasOwnProperty);

	    for (var typeSpecName in typeSpecs) {
	      if (has(typeSpecs, typeSpecName)) {
	        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
	        // fail the render phase where it didn't fail before. So we log it.
	        // After these have been cleaned up, we'll let them throw.

	        try {
	          // This is intentionally an invariant that gets caught. It's the same
	          // behavior as without this statement except with a better message.
	          if (typeof typeSpecs[typeSpecName] !== 'function') {
	            // eslint-disable-next-line react-internal/prod-error-codes
	            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
	            err.name = 'Invariant Violation';
	            throw err;
	          }

	          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
	        } catch (ex) {
	          error$1 = ex;
	        }

	        if (error$1 && !(error$1 instanceof Error)) {
	          setCurrentlyValidatingElement(element);

	          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

	          setCurrentlyValidatingElement(null);
	        }

	        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
	          // Only monitor this failure once because there tends to be a lot of the
	          // same error.
	          loggedTypeFailures[error$1.message] = true;
	          setCurrentlyValidatingElement(element);

	          error('Failed %s type: %s', location, error$1.message);

	          setCurrentlyValidatingElement(null);
	        }
	      }
	    }
	  }
	}

	var isArrayImpl = Array.isArray; // eslint-disable-next-line no-redeclare

	function isArray(a) {
	  return isArrayImpl(a);
	}

	/*
	 * The `'' + value` pattern (used in in perf-sensitive code) throws for Symbol
	 * and Temporal.* types. See https://github.com/facebook/react/pull/22064.
	 *
	 * The functions in this module will throw an easier-to-understand,
	 * easier-to-debug exception with a clear errors message message explaining the
	 * problem. (Instead of a confusing exception thrown inside the implementation
	 * of the `value` object).
	 */
	// $FlowFixMe only called in DEV, so void return is not possible.
	function typeName(value) {
	  {
	    // toStringTag is needed for namespaced types like Temporal.Instant
	    var hasToStringTag = typeof Symbol === 'function' && Symbol.toStringTag;
	    var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || 'Object';
	    return type;
	  }
	} // $FlowFixMe only called in DEV, so void return is not possible.


	function willCoercionThrow(value) {
	  {
	    try {
	      testStringCoercion(value);
	      return false;
	    } catch (e) {
	      return true;
	    }
	  }
	}

	function testStringCoercion(value) {
	  // If you ended up here by following an exception call stack, here's what's
	  // happened: you supplied an object or symbol value to React (as a prop, key,
	  // DOM attribute, CSS property, string ref, etc.) and when React tried to
	  // coerce it to a string using `'' + value`, an exception was thrown.
	  //
	  // The most common types that will cause this exception are `Symbol` instances
	  // and Temporal objects like `Temporal.Instant`. But any object that has a
	  // `valueOf` or `[Symbol.toPrimitive]` method that throws will also cause this
	  // exception. (Library authors do this to prevent users from using built-in
	  // numeric operators like `+` or comparison operators like `>=` because custom
	  // methods are needed to perform accurate arithmetic or comparison.)
	  //
	  // To fix the problem, coerce this object or symbol value to a string before
	  // passing it to React. The most reliable way is usually `String(value)`.
	  //
	  // To find which value is throwing, check the browser or debugger console.
	  // Before this exception was thrown, there should be `console.error` output
	  // that shows the type (Symbol, Temporal.PlainDate, etc.) that caused the
	  // problem and how that type was used: key, atrribute, input value prop, etc.
	  // In most cases, this console output also shows the component and its
	  // ancestor components where the exception happened.
	  //
	  // eslint-disable-next-line react-internal/safe-string-coercion
	  return '' + value;
	}
	function checkKeyStringCoercion(value) {
	  {
	    if (willCoercionThrow(value)) {
	      error('The provided key is an unsupported type %s.' + ' This value must be coerced to a string before before using it here.', typeName(value));

	      return testStringCoercion(value); // throw (to help callers find troubleshooting comments)
	    }
	  }
	}

	var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
	var RESERVED_PROPS = {
	  key: true,
	  ref: true,
	  __self: true,
	  __source: true
	};
	var specialPropKeyWarningShown;
	var specialPropRefWarningShown;
	var didWarnAboutStringRefs;

	{
	  didWarnAboutStringRefs = {};
	}

	function hasValidRef(config) {
	  {
	    if (hasOwnProperty.call(config, 'ref')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.ref !== undefined;
	}

	function hasValidKey(config) {
	  {
	    if (hasOwnProperty.call(config, 'key')) {
	      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

	      if (getter && getter.isReactWarning) {
	        return false;
	      }
	    }
	  }

	  return config.key !== undefined;
	}

	function warnIfStringRefCannotBeAutoConverted(config, self) {
	  {
	    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
	      var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);

	      if (!didWarnAboutStringRefs[componentName]) {
	        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentNameFromType(ReactCurrentOwner.current.type), config.ref);

	        didWarnAboutStringRefs[componentName] = true;
	      }
	    }
	  }
	}

	function defineKeyPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingKey = function () {
	      if (!specialPropKeyWarningShown) {
	        specialPropKeyWarningShown = true;

	        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingKey.isReactWarning = true;
	    Object.defineProperty(props, 'key', {
	      get: warnAboutAccessingKey,
	      configurable: true
	    });
	  }
	}

	function defineRefPropWarningGetter(props, displayName) {
	  {
	    var warnAboutAccessingRef = function () {
	      if (!specialPropRefWarningShown) {
	        specialPropRefWarningShown = true;

	        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
	      }
	    };

	    warnAboutAccessingRef.isReactWarning = true;
	    Object.defineProperty(props, 'ref', {
	      get: warnAboutAccessingRef,
	      configurable: true
	    });
	  }
	}
	/**
	 * Factory method to create a new React element. This no longer adheres to
	 * the class pattern, so do not use new to call it. Also, instanceof check
	 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
	 * if something is a React Element.
	 *
	 * @param {*} type
	 * @param {*} props
	 * @param {*} key
	 * @param {string|object} ref
	 * @param {*} owner
	 * @param {*} self A *temporary* helper to detect places where `this` is
	 * different from the `owner` when React.createElement is called, so that we
	 * can warn. We want to get rid of owner and replace string `ref`s with arrow
	 * functions, and as long as `this` and owner are the same, there will be no
	 * change in behavior.
	 * @param {*} source An annotation object (added by a transpiler or otherwise)
	 * indicating filename, line number, and/or other information.
	 * @internal
	 */


	var ReactElement = function (type, key, ref, self, source, owner, props) {
	  var element = {
	    // This tag allows us to uniquely identify this as a React Element
	    $$typeof: REACT_ELEMENT_TYPE,
	    // Built-in properties that belong on the element
	    type: type,
	    key: key,
	    ref: ref,
	    props: props,
	    // Record the component responsible for creating this element.
	    _owner: owner
	  };

	  {
	    // The validation flag is currently mutative. We put it on
	    // an external backing store so that we can freeze the whole object.
	    // This can be replaced with a WeakMap once they are implemented in
	    // commonly used development environments.
	    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
	    // the validation flag non-enumerable (where possible, which should
	    // include every environment we run tests in), so the test framework
	    // ignores it.

	    Object.defineProperty(element._store, 'validated', {
	      configurable: false,
	      enumerable: false,
	      writable: true,
	      value: false
	    }); // self and source are DEV only properties.

	    Object.defineProperty(element, '_self', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: self
	    }); // Two elements created in two different places should be considered
	    // equal for testing purposes and therefore we hide it from enumeration.

	    Object.defineProperty(element, '_source', {
	      configurable: false,
	      enumerable: false,
	      writable: false,
	      value: source
	    });

	    if (Object.freeze) {
	      Object.freeze(element.props);
	      Object.freeze(element);
	    }
	  }

	  return element;
	};
	/**
	 * https://github.com/reactjs/rfcs/pull/107
	 * @param {*} type
	 * @param {object} props
	 * @param {string} key
	 */

	function jsxDEV(type, config, maybeKey, source, self) {
	  {
	    var propName; // Reserved names are extracted

	    var props = {};
	    var key = null;
	    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
	    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
	    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
	    // but as an intermediary step, we will use jsxDEV for everything except
	    // <div {...props} key="Hi" />, because we aren't currently able to tell if
	    // key is explicitly declared to be undefined or not.

	    if (maybeKey !== undefined) {
	      {
	        checkKeyStringCoercion(maybeKey);
	      }

	      key = '' + maybeKey;
	    }

	    if (hasValidKey(config)) {
	      {
	        checkKeyStringCoercion(config.key);
	      }

	      key = '' + config.key;
	    }

	    if (hasValidRef(config)) {
	      ref = config.ref;
	      warnIfStringRefCannotBeAutoConverted(config, self);
	    } // Remaining properties are added to a new props object


	    for (propName in config) {
	      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
	        props[propName] = config[propName];
	      }
	    } // Resolve default props


	    if (type && type.defaultProps) {
	      var defaultProps = type.defaultProps;

	      for (propName in defaultProps) {
	        if (props[propName] === undefined) {
	          props[propName] = defaultProps[propName];
	        }
	      }
	    }

	    if (key || ref) {
	      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

	      if (key) {
	        defineKeyPropWarningGetter(props, displayName);
	      }

	      if (ref) {
	        defineRefPropWarningGetter(props, displayName);
	      }
	    }

	    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
	  }
	}

	var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
	var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

	function setCurrentlyValidatingElement$1(element) {
	  {
	    if (element) {
	      var owner = element._owner;
	      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
	      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
	    } else {
	      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
	    }
	  }
	}

	var propTypesMisspellWarningShown;

	{
	  propTypesMisspellWarningShown = false;
	}
	/**
	 * Verifies the object is a ReactElement.
	 * See https://reactjs.org/docs/react-api.html#isvalidelement
	 * @param {?object} object
	 * @return {boolean} True if `object` is a ReactElement.
	 * @final
	 */


	function isValidElement(object) {
	  {
	    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
	  }
	}

	function getDeclarationErrorAddendum() {
	  {
	    if (ReactCurrentOwner$1.current) {
	      var name = getComponentNameFromType(ReactCurrentOwner$1.current.type);

	      if (name) {
	        return '\n\nCheck the render method of `' + name + '`.';
	      }
	    }

	    return '';
	  }
	}

	function getSourceInfoErrorAddendum(source) {
	  {
	    if (source !== undefined) {
	      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
	      var lineNumber = source.lineNumber;
	      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
	    }

	    return '';
	  }
	}
	/**
	 * Warn if there's no key explicitly set on dynamic arrays of children or
	 * object keys are not valid. This allows us to keep track of children between
	 * updates.
	 */


	var ownerHasKeyUseWarning = {};

	function getCurrentComponentErrorInfo(parentType) {
	  {
	    var info = getDeclarationErrorAddendum();

	    if (!info) {
	      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

	      if (parentName) {
	        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
	      }
	    }

	    return info;
	  }
	}
	/**
	 * Warn if the element doesn't have an explicit key assigned to it.
	 * This element is in an array. The array could grow and shrink or be
	 * reordered. All children that haven't already been validated are required to
	 * have a "key" property assigned to it. Error statuses are cached so a warning
	 * will only be shown once.
	 *
	 * @internal
	 * @param {ReactElement} element Element that requires a key.
	 * @param {*} parentType element's parent's type.
	 */


	function validateExplicitKey(element, parentType) {
	  {
	    if (!element._store || element._store.validated || element.key != null) {
	      return;
	    }

	    element._store.validated = true;
	    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

	    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
	      return;
	    }

	    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
	    // property, it may be the creator of the child that's responsible for
	    // assigning it a key.

	    var childOwner = '';

	    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
	      // Give the component that originally created this child.
	      childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
	    }

	    setCurrentlyValidatingElement$1(element);

	    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

	    setCurrentlyValidatingElement$1(null);
	  }
	}
	/**
	 * Ensure that every element either is passed in a static location, in an
	 * array with an explicit keys property defined, or in an object literal
	 * with valid key property.
	 *
	 * @internal
	 * @param {ReactNode} node Statically passed child of any type.
	 * @param {*} parentType node's parent's type.
	 */


	function validateChildKeys(node, parentType) {
	  {
	    if (typeof node !== 'object') {
	      return;
	    }

	    if (isArray(node)) {
	      for (var i = 0; i < node.length; i++) {
	        var child = node[i];

	        if (isValidElement(child)) {
	          validateExplicitKey(child, parentType);
	        }
	      }
	    } else if (isValidElement(node)) {
	      // This element was passed in a valid location.
	      if (node._store) {
	        node._store.validated = true;
	      }
	    } else if (node) {
	      var iteratorFn = getIteratorFn(node);

	      if (typeof iteratorFn === 'function') {
	        // Entry iterators used to provide implicit keys,
	        // but now we print a separate warning for them later.
	        if (iteratorFn !== node.entries) {
	          var iterator = iteratorFn.call(node);
	          var step;

	          while (!(step = iterator.next()).done) {
	            if (isValidElement(step.value)) {
	              validateExplicitKey(step.value, parentType);
	            }
	          }
	        }
	      }
	    }
	  }
	}
	/**
	 * Given an element, validate that its props follow the propTypes definition,
	 * provided by the type.
	 *
	 * @param {ReactElement} element
	 */


	function validatePropTypes(element) {
	  {
	    var type = element.type;

	    if (type === null || type === undefined || typeof type === 'string') {
	      return;
	    }

	    var propTypes;

	    if (typeof type === 'function') {
	      propTypes = type.propTypes;
	    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
	    // Inner props are checked in the reconciler.
	    type.$$typeof === REACT_MEMO_TYPE)) {
	      propTypes = type.propTypes;
	    } else {
	      return;
	    }

	    if (propTypes) {
	      // Intentionally inside to avoid triggering lazy initializers:
	      var name = getComponentNameFromType(type);
	      checkPropTypes(propTypes, element.props, 'prop', name, element);
	    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
	      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

	      var _name = getComponentNameFromType(type);

	      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
	    }

	    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
	      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
	    }
	  }
	}
	/**
	 * Given a fragment, validate that it can only be provided with fragment props
	 * @param {ReactElement} fragment
	 */


	function validateFragmentProps(fragment) {
	  {
	    var keys = Object.keys(fragment.props);

	    for (var i = 0; i < keys.length; i++) {
	      var key = keys[i];

	      if (key !== 'children' && key !== 'key') {
	        setCurrentlyValidatingElement$1(fragment);

	        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

	        setCurrentlyValidatingElement$1(null);
	        break;
	      }
	    }

	    if (fragment.ref !== null) {
	      setCurrentlyValidatingElement$1(fragment);

	      error('Invalid attribute `ref` supplied to `React.Fragment`.');

	      setCurrentlyValidatingElement$1(null);
	    }
	  }
	}

	function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
	  {
	    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
	    // succeed and there will likely be errors in render.

	    if (!validType) {
	      var info = '';

	      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
	        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
	      }

	      var sourceInfo = getSourceInfoErrorAddendum(source);

	      if (sourceInfo) {
	        info += sourceInfo;
	      } else {
	        info += getDeclarationErrorAddendum();
	      }

	      var typeString;

	      if (type === null) {
	        typeString = 'null';
	      } else if (isArray(type)) {
	        typeString = 'array';
	      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
	        typeString = "<" + (getComponentNameFromType(type.type) || 'Unknown') + " />";
	        info = ' Did you accidentally export a JSX literal instead of a component?';
	      } else {
	        typeString = typeof type;
	      }

	      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
	    }

	    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
	    // TODO: Drop this when these are no longer allowed as the type argument.

	    if (element == null) {
	      return element;
	    } // Skip key warning if the type isn't valid since our key validation logic
	    // doesn't expect a non-string/function type and can throw confusing errors.
	    // We don't want exception behavior to differ between dev and prod.
	    // (Rendering will throw with a helpful message and as soon as the type is
	    // fixed, the key warnings will appear.)


	    if (validType) {
	      var children = props.children;

	      if (children !== undefined) {
	        if (isStaticChildren) {
	          if (isArray(children)) {
	            for (var i = 0; i < children.length; i++) {
	              validateChildKeys(children[i], type);
	            }

	            if (Object.freeze) {
	              Object.freeze(children);
	            }
	          } else {
	            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
	          }
	        } else {
	          validateChildKeys(children, type);
	        }
	      }
	    }

	    if (type === REACT_FRAGMENT_TYPE) {
	      validateFragmentProps(element);
	    } else {
	      validatePropTypes(element);
	    }

	    return element;
	  }
	} // These two functions exist to still get child warnings in dev
	// even with the prod transform. This means that jsxDEV is purely
	// opt-in behavior for better messages but that we won't stop
	// giving you warnings if you use production apis.

	function jsxWithValidationStatic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, true);
	  }
	}
	function jsxWithValidationDynamic(type, props, key) {
	  {
	    return jsxWithValidation(type, props, key, false);
	  }
	}

	var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
	// for now we can ship identical prod functions

	var jsxs =  jsxWithValidationStatic ;

	reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_development.jsx = jsx;
	reactJsxRuntime_development.jsxs = jsxs;
	  })();
	}
	return reactJsxRuntime_development;
}

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = requireReactJsxRuntime_production_min();
} else {
  jsxRuntime.exports = requireReactJsxRuntime_development();
}

var jsxRuntimeExports = jsxRuntime.exports;

function LoadingIcon() {
    return (jsxRuntimeExports.jsxs("svg", __assign({ width: "38", height: "38", xmlns: "http://www.w3.org/2000/svg" }, { children: [jsxRuntimeExports.jsx("defs", { children: jsxRuntimeExports.jsxs("linearGradient", __assign({ x1: "8.042%", y1: "0%", x2: "65.682%", y2: "23.865%", id: "a" }, { children: [jsxRuntimeExports.jsx("stop", { stopColor: "#a1a1a1", stopOpacity: "0", offset: "0%" }), jsxRuntimeExports.jsx("stop", { stopColor: "#a1a1a1", stopOpacity: ".631", offset: "63.146%" }), jsxRuntimeExports.jsx("stop", { stopColor: "#a1a1a1", offset: "100%" })] })) }), jsxRuntimeExports.jsxs("g", __assign({ transform: "translate(1 1)", fill: "none", fillRule: "evenodd" }, { children: [jsxRuntimeExports.jsx("path", __assign({ d: "M36 18c0-9.94-8.06-18-18-18", stroke: "url(#a)", strokeWidth: "2" }, { children: jsxRuntimeExports.jsx("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" }) })), jsxRuntimeExports.jsx("circle", __assign({ fill: "#a1a1a1", cx: "36", cy: "18", r: "1" }, { children: jsxRuntimeExports.jsx("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "0.9s", repeatCount: "indefinite" }) }))] }))] })));
}

function ArrowIcon() {
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-icon-container" }, { children: [jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-light", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 3.44 2.728", height: "10.312", width: "13" }, { children: jsxRuntimeExports.jsx("g", __assign({ transform: "matrix(10.37411 0 0 10.37411 -5.49 -9.923)" }, { children: jsxRuntimeExports.jsx("path", { d: "M.53 1.088c0-.012.008-.02.02-.02h.228L.71 1C.693.981.697.972.706.962c.01-.01.02-.006.034.006l.12.12-.125.126c-.01.008-.025.006-.03-.002-.01-.014-.008-.021.01-.04l.063-.063H.55C.533 1.11.53 1.1.53 1.09z", fill: "#202020" }) })) })), jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-dark", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 3.44 2.728", height: "10.312", width: "13" }, { children: jsxRuntimeExports.jsx("g", __assign({ transform: "matrix(10.37411 0 0 10.37411 -5.49 -9.923)" }, { children: jsxRuntimeExports.jsx("path", { d: "M.53 1.088c0-.012.008-.02.02-.02h.228L.71 1C.693.981.697.972.706.962c.01-.01.02-.006.034.006l.12.12-.125.126c-.01.008-.025.006-.03-.002-.01-.014-.008-.021.01-.04l.063-.063H.55C.533 1.11.53 1.1.53 1.09z", fill: "#c6c6c6" }) })) }))] })));
}

function SuccessIcon() {
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-icon-container" }, { children: [jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-light", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 3.44 2.728", height: "10.312", width: "13" }, { children: jsxRuntimeExports.jsx("path", { d: "M3.37.473L1.187 2.654.098 1.562l.409-.409.68.682L2.96.063z", fill: "#202020" }) })), jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-dark", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 3.44 2.728", height: "10.312", width: "13" }, { children: jsxRuntimeExports.jsx("path", { d: "M3.37.473L1.187 2.654.098 1.562l.409-.409.68.682L2.96.063z", fill: "#c6c6c6" }) }))] })));
}

function FailureIcon() {
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-icon-container" }, { children: [jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-light", xmlns: "http://www.w3.org/2000/svg", width: "13", height: "10.312", viewBox: "0 0 3.44 2.728" }, { children: jsxRuntimeExports.jsx("path", { d: "M2.12 1.377l.961.962-.379.38-.964-.963-.962.963-.38-.38.963-.962L.396.413l.38-.38.962.963.964-.962.38.38z", fill: "#202020" }) })), jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-dark", xmlns: "http://www.w3.org/2000/svg", width: "13", height: "10.312", viewBox: "0 0 3.44 2.728" }, { children: jsxRuntimeExports.jsx("path", { d: "M2.12 1.377l.961.962-.379.38-.964-.963-.962.963-.38-.38.963-.962L.396.413l.38-.38.962.963.964-.962.38.38z", fill: "#c6c6c6" }) }))] })));
}

function ReloadIcon() {
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-card-reload-button" }, { children: [jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-light", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", width: "30px", height: "30px" }, { children: jsxRuntimeExports.jsx("path", { d: "M 15 3 C 12.03125 3 9.304688 4.082031 7.207031 5.875 C 6.921875 6.101562 6.78125 6.46875 6.84375 6.828125 C 6.90625 7.1875 7.160156 7.484375 7.507812 7.605469 C 7.855469 7.722656 8.238281 7.640625 8.503906 7.394531 C 10.253906 5.898438 12.515625 5 15 5 C 20.195312 5 24.449219 8.9375 24.949219 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.4375 7.851562 21.277344 3 15 3 Z M 4 10 L 0 16 L 3.050781 16 C 3.5625 22.148438 8.722656 27 15 27 C 17.96875 27 20.695312 25.917969 22.792969 24.125 C 23.078125 23.898438 23.21875 23.53125 23.15625 23.171875 C 23.09375 22.8125 22.839844 22.515625 22.492188 22.394531 C 22.144531 22.277344 21.761719 22.359375 21.496094 22.605469 C 19.746094 24.101562 17.484375 25 15 25 C 9.804688 25 5.550781 21.0625 5.046875 16 L 8 16 Z M 4 10 ", fill: "#ffffff" }) })), jsxRuntimeExports.jsx("svg", __assign({ className: "scaptcha-icon-dark", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 30 30", width: "30px", height: "30px" }, { children: jsxRuntimeExports.jsx("path", { d: "M 15 3 C 12.03125 3 9.304688 4.082031 7.207031 5.875 C 6.921875 6.101562 6.78125 6.46875 6.84375 6.828125 C 6.90625 7.1875 7.160156 7.484375 7.507812 7.605469 C 7.855469 7.722656 8.238281 7.640625 8.503906 7.394531 C 10.253906 5.898438 12.515625 5 15 5 C 20.195312 5 24.449219 8.9375 24.949219 14 L 22 14 L 26 20 L 30 14 L 26.949219 14 C 26.4375 7.851562 21.277344 3 15 3 Z M 4 10 L 0 16 L 3.050781 16 C 3.5625 22.148438 8.722656 27 15 27 C 17.96875 27 20.695312 25.917969 22.792969 24.125 C 23.078125 23.898438 23.21875 23.53125 23.15625 23.171875 C 23.09375 22.8125 22.839844 22.515625 22.492188 22.394531 C 22.144531 22.277344 21.761719 22.359375 21.496094 22.605469 C 19.746094 24.101562 17.484375 25 15 25 C 9.804688 25 5.550781 21.0625 5.046875 16 L 8 16 Z M 4 10 ", fill: "#ffffff" }) }))] })));
}

var imageDataUrl = function (image) {
    return "data:image/png;base64,".concat(Buffer.from(image).toString('base64'));
};
var slider = {
    default: {
        track: 'scaptcha-card-slider-track-default',
        control: 'scaptcha-card-slider-control-default',
        icon: jsxRuntimeExports.jsx(ArrowIcon, {}),
    },
    active: {
        track: 'scaptcha-card-slider-track-active',
        control: 'scaptcha-card-slider-control-active',
        icon: jsxRuntimeExports.jsx(ArrowIcon, {}),
    },
    success: {
        track: 'scaptcha-card-slider-track-success',
        control: 'scaptcha-card-slider-control-success',
        icon: jsxRuntimeExports.jsx(SuccessIcon, {}),
    },
    failure: {
        track: 'scaptcha-card-slider-track-failure',
        control: 'scaptcha-card-slider-control-failure',
        icon: jsxRuntimeExports.jsx(FailureIcon, {}),
    },
};
function Challenge(props) {
    var text = props.text, captcha = props.captcha, completeCaptcha = props.completeCaptcha, reloadCaptcha = props.reloadCaptcha, hasReloadButton = props.hasReloadButton;
    var _a = useState(slider.default), sliderVariant = _a[0], setSliderVariant = _a[1];
    var _b = useState(false), solving = _b[0], setSolving = _b[1];
    var _c = useState(false), submittedResponse = _c[0], setSubmittedResponse = _c[1];
    var _d = useState({
        x: 0,
        y: 0,
    }), origin = _d[0], setOrigin = _d[1];
    var _e = useState({
        x: [0],
        y: [0],
    }), trail = _e[0], setTrail = _e[1];
    // Converts distances along the control track to corresponding distances moved by the puzzle piece
    var scaleSliderPosition = function (x) { return 5 + 0.86 * x; };
    var handleStart = function (e) {
        if (submittedResponse)
            return;
        setOrigin({
            x: e.clientX || e.touches[0].clientX,
            y: e.clientY || e.touches[0].clientY,
        });
        setSolving(true);
        setSliderVariant(slider.active);
    };
    var handleMove = function (e) {
        if (!solving || submittedResponse)
            return;
        var move = {
            x: (e.clientX || e.touches[0].clientX) - origin.x,
            y: (e.clientY || e.touches[0].clientY) - origin.y,
        };
        if (move.x > 325 || move.x < 0)
            return; // Don't update if outside bounds of captcha
        setTrail({
            x: trail.x.concat([move.x]),
            y: trail.y.concat([move.y]),
        });
    };
    var handleEnd = function () {
        if (!solving || submittedResponse)
            return;
        setSubmittedResponse(true);
        completeCaptcha(scaleSliderPosition(trail.x[trail.x.length - 1]), trail).then(function (validated) {
            setSliderVariant(validated ? slider.success : slider.failure);
        });
    };
    var handleEnter = function () {
        if (solving || submittedResponse)
            return;
        setSliderVariant(slider.active);
    };
    var handleLeave = function () {
        if (solving)
            return;
        setSliderVariant(slider.default);
    };
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-card-element", draggable: "false", onMouseMove: handleMove, onTouchMove: handleMove, onTouchEnd: handleEnd, onMouseUp: handleEnd, onMouseLeave: handleEnd }, { children: [jsxRuntimeExports.jsx("div", { className: "scaptcha-card-background scaptcha-card-element", style: {
                    backgroundImage: "url('".concat(imageDataUrl(captcha.background), "')"),
                } }), hasReloadButton && (jsxRuntimeExports.jsx("div", __assign({ className: ".scaptcha-card-reload-button scaptcha-card-element", onClick: reloadCaptcha }, { children: jsxRuntimeExports.jsx(ReloadIcon, {}) }))), jsxRuntimeExports.jsx("div", { className: "scaptcha-card-slider-puzzle scaptcha-card-element", style: {
                    backgroundImage: "url('".concat(imageDataUrl(captcha.slider), "')"),
                    left: "".concat(scaleSliderPosition(trail.x[trail.x.length - 1]), "px"),
                }, onMouseDown: handleStart, onTouchStart: handleStart }), jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-card-slider-container scaptcha-card-element" }, { children: [jsxRuntimeExports.jsx("div", { className: "scaptcha-card-slider-track scaptcha-card-element" }), jsxRuntimeExports.jsx("div", __assign({ className: "scaptcha-card-slider-label scaptcha-card-element", style: { opacity: solving ? 0 : 1 } }, { children: jsxRuntimeExports.jsx("span", { children: text.challenge }) })), jsxRuntimeExports.jsx("div", { className: "scaptcha-card-slider-mask ".concat(sliderVariant.track, " scaptcha-card-element"), style: { width: "".concat(trail.x[trail.x.length - 1] + 30, "px") } }), jsxRuntimeExports.jsx("div", { className: "scaptcha-card-slider-container scaptcha-card-element", draggable: "false" }), jsxRuntimeExports.jsx("div", __assign({ className: "scaptcha-card-slider-control ".concat(sliderVariant.control, " scaptcha-card-element"), style: { left: "".concat(trail.x[trail.x.length - 1], "px") }, onMouseDown: handleStart, onTouchStart: handleStart, onMouseEnter: handleEnter, onMouseLeave: handleLeave }, { children: sliderVariant.icon }))] }))] })));
}

function Card(props) {
    var text = props.text, fetchCaptcha = props.fetchCaptcha, submitResponse = props.submitResponse, hasReloadButton = props.hasReloadButton;
    var _a = useState(Math.random()), key = _a[0], setKey = _a[1];
    var _b = useState(false), captcha = _b[0], setCaptcha = _b[1];
    var isMounted = useRef(false);
    var refreshCaptcha = function () {
        fetchCaptcha().then(function (newCaptcha) {
            setTimeout(function () {
                if (!isMounted.current)
                    return;
                setKey(Math.random());
                setCaptcha(newCaptcha);
            }, 300);
        });
    };
    var completeCaptcha = function (response, trail) {
        return new Promise(function (resolve) {
            submitResponse(response, trail).then(function (verified) {
                if (verified) {
                    resolve(true);
                }
                else {
                    refreshCaptcha();
                    resolve(false);
                }
            });
        });
    };
    useEffect(function () {
        isMounted.current = true;
        refreshCaptcha();
        return function () {
            isMounted.current = false;
        };
    }, []);
    return (jsxRuntimeExports.jsx("div", __assign({ className: "scaptcha-card-container scaptcha-card-element" }, { children: captcha ? (jsxRuntimeExports.jsx(Challenge, { text: text, captcha: captcha, completeCaptcha: completeCaptcha, reloadCaptcha: refreshCaptcha, hasReloadButton: hasReloadButton }, key)) : (jsxRuntimeExports.jsx("div", __assign({ className: "scaptcha-card-loading scaptcha-card-element" }, { children: jsxRuntimeExports.jsx(LoadingIcon, {}) }))) })));
}

function Anchor(props) {
    var text = props.text, fetchCaptcha = props.fetchCaptcha, submitResponse = props.submitResponse, verified = props.verified, hasReloadButton = props.hasReloadButton, hasOutsideClick = props.hasOutsideClick, hideButton = props.hideButton;
    var _a = useState(false), open = _a[0], setOpen = _a[1];
    var handleClose = function () {
        setOpen(false);
    };
    var handleOpen = function () {
        setOpen(true);
    };
    var handleKey = function (e) {
        if (e.code === 'Enter' || e.code === 'Space') {
            setOpen(true);
        }
        else if (e.key === 'Escape') {
            setOpen(false);
        }
    };
    return (jsxRuntimeExports.jsxs("div", { children: [!hideButton && (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-anchor-container scaptcha-anchor-element", onClick: handleOpen }, { children: [jsxRuntimeExports.jsx("button", __assign({ suppressHydrationWarning: true, type: "button", className: "scaptcha-anchor-checkbox ".concat(!verified && 'scaptcha-anchor-checkbox-default', " scaptcha-anchor-element"), onKeyUp: handleKey }, { children: verified && jsxRuntimeExports.jsx(SuccessIcon, {}) })), jsxRuntimeExports.jsx("div", __assign({ className: "scaptcha-anchor-label scaptcha-anchor-element" }, { children: text.anchor }))] }))), !verified && open && (jsxRuntimeExports.jsxs("div", { children: [hasOutsideClick && (jsxRuntimeExports.jsx("div", { className: "scaptcha-hidden", onClick: handleClose })), jsxRuntimeExports.jsx(Card, { fetchCaptcha: fetchCaptcha, submitResponse: submitResponse, text: text, hasReloadButton: hasReloadButton })] }))] }));
}

var lightTheme = ".scaptcha-icon-dark {\n  display: none;\n}\n\n.scaptcha-icon-light {\n  display: block;\n}\n\n.scaptcha-anchor-container {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #f8f8f8;\n  width: 100%;\n  height: 50px;\n  padding: 13px;\n  max-width: 400px;\n}\n\n.scaptcha-anchor-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  display: flex;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  height: 24px;\n  width: 24px;\n  background-color: #fff;\n}\n\n.scaptcha-anchor-checkbox-default:hover {\n  cursor: pointer;\n  border: 2px solid rgba(0, 0, 0, 0.35);\n}\n\n.scaptcha-anchor-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  color: #424242;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  margin-left: 13px;\n  cursor: default;\n}\n\n.scaptcha-card-background {\n  width: 350px;\n  height: 200px;\n}\n\n.scaptcha-card-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 350px;\n  min-height: 200px;\n  z-index: 1;\n}\n\n.scaptcha-card-container {\n  position: absolute;\n  padding: 15px 15px 0px 15px;\n  min-width: 380px;\n  min-height: 266px;\n  background-color: #f1f1f1;\n  box-shadow: 0px -1px 0px -2px rgba(0, 0, 0, 0.2), 0px 2px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 9px 0px rgba(0, 0, 0, 0.15);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.scaptcha-card-slider-puzzle {\n  margin-left: 15px;\n  margin-top: 15px;\n  position: absolute;\n  left: 5px;\n  top: 0;\n  height: 200px;\n  width: 60px;\n  cursor: pointer;\n}\n\n.scaptcha-card-slider-control {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  border-radius: 50%;\n}\n\n.scaptcha-card-slider-control-default {\n  background-color: #fafafa;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active,\n.scaptcha-card-slider-control-success,\n.scaptcha-card-slider-control-failure {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active {\n  background-color: #0889e4;\n}\n\n.scaptcha-card-slider-control-success {\n  background-color: rgb(53, 221, 116);\n}\n\n.scaptcha-card-slider-control-failure {\n  background-color: rgb(228, 8, 8);\n}\n\n.scaptcha-card-slider-container {\n  margin-top: 7px;\n  position: relative;\n  height: 44px;\n  width: 350px;\n}\n\n.scaptcha-card-slider-track {\n  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 350px;\n  height: 24px;\n  background-color: #d9d9d9;\n  border-radius: 12px;\n}\n\n.scaptcha-card-reload-button {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  z-index: 1;\n  width: 30px;\n  height: 30px;\n}\n\n.scaptcha-card-slider-mask {\n  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 0;\n  height: 24px;\n  border-radius: 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.scaptcha-card-slider-track-default,\n.scaptcha-card-slider-track-active {\n  background-color: #3caeff;\n}\n\n.scaptcha-card-slider-track-success {\n  background-color: rgb(131, 247, 136);\n}\n\n.scaptcha-card-slider-track-failure {\n  background-color: rgb(255, 60, 60);\n}\n\n.scaptcha-card-slider-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #716e6e;\n  padding-left: 20px;\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 350px;\n  height: 24px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  cursor: default;\n}\n\n.scaptcha-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1px;\n  margin-top: 1px;\n}\n\n.scaptcha-hidden {\n  background: none;\n  top: 0;\n  left: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}\n\n.scaptcha-container * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n";

var darkTheme = ".scaptcha-icon-light {\n  display: none;\n}\n\n.scaptcha-icon-dark {\n  display: block;\n}\n\n.scaptcha-anchor-container {\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.1);\n  border: 1px solid rgba(0, 0, 0, 0.12);\n  background-color: #1c1919;\n  width: 100%;\n  height: 50px;\n  padding: 13px;\n  max-width: 400px;\n}\n\n.scaptcha-anchor-checkbox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n  display: flex;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-radius: 3px;\n  height: 24px;\n  width: 24px;\n  background-color: #535353;\n}\n\n.scaptcha-anchor-checkbox-default:hover {\n  cursor: pointer;\n  border: 2px solid rgba(0, 0, 0, 0.35);\n}\n\n.scaptcha-anchor-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: left;\n  color: #c6c6c6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  margin-left: 13px;\n  cursor: default;\n}\n\n.scaptcha-card-background {\n  width: 350px;\n  height: 200px;\n}\n\n.scaptcha-card-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 15px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  min-width: 350px;\n  min-height: 200px;\n  z-index: 1;\n}\n\n.scaptcha-card-container {\n  position: absolute;\n  padding: 15px 15px 0px 15px;\n  min-width: 380px;\n  min-height: 266px;\n  background-color: #1a1a1a;\n  box-shadow: 0px -1px 0px -2px rgba(0, 0, 0, 0.2), 0px 2px 9px 0px rgba(0, 0, 0, 0.14), 0px 5px 9px 0px rgba(0, 0, 0, 0.15);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.scaptcha-card-slider-puzzle {\n  margin-left: 15px;\n  margin-top: 15px;\n  position: absolute;\n  left: 5px;\n  top: 0;\n  height: 200px;\n  width: 60px;\n  cursor: pointer;\n}\n\n.scaptcha-card-slider-control {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  border-radius: 50%;\n}\n\n.scaptcha-card-slider-control-default {\n  background-color: #242222;\n  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active,\n.scaptcha-card-slider-control-success,\n.scaptcha-card-slider-control-failure {\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n}\n\n.scaptcha-card-slider-control-active {\n  background-color: #0889e4;\n}\n\n.scaptcha-card-slider-control-success {\n  background-color: rgb(53, 221, 116);\n}\n\n.scaptcha-card-slider-control-failure {\n  background-color: rgb(228, 8, 8);\n}\n\n.scaptcha-card-slider-container {\n  margin-top: 7px;\n  position: relative;\n  height: 44px;\n  width: 350px;\n}\n\n.scaptcha-card-slider-track {\n  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 350px;\n  height: 24px;\n  background-color: #353535;\n  border-radius: 12px;\n}\n\n.scaptcha-card-reload-button {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  z-index: 1;\n  width: 30px;\n  height: 30px;\n}\n\n.scaptcha-card-slider-mask {\n  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 0;\n  height: 24px;\n  border-radius: 12px;\n  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n}\n\n.scaptcha-card-slider-track-default,\n.scaptcha-card-slider-track-active {\n  background-color: #3caeff;\n}\n\n.scaptcha-card-slider-track-success {\n  background-color: rgb(131, 247, 136);\n}\n\n.scaptcha-card-slider-track-failure {\n  background-color: rgb(255, 60, 60);\n}\n\n.scaptcha-card-slider-label {\n  font-size: 13px;\n  font-family: system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n  font-weight: 400;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #716e6e;\n  padding-left: 20px;\n  position: absolute;\n  top: 3px;\n  left: 0;\n  width: 350px;\n  height: 24px;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  cursor: default;\n}\n\n.scaptcha-icon-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 1px;\n  margin-top: 1px;\n}\n\n.scaptcha-hidden {\n  background: none;\n  top: 0;\n  left: 0;\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  position: fixed;\n}\n\n.scaptcha-container * {\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n}\n";

function Theme(props) {
    var _a = props.variant, variant = _a === void 0 ? 'light' : _a;
    return (jsxRuntimeExports.jsx("style", __assign({ suppressHydrationWarning: true }, { children: variant === 'dark' ? darkTheme : lightTheme })));
}

var fetchCaptcha = function (create) { return function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, typeof create === 'string'
                ? fetch(create, {
                    // Use create as API URL for fetch
                    method: 'GET',
                    credentials: 'include',
                }).then(function (message) { return message.json(); })
                : create()];
    });
}); }; };
//TODO: Add types
var fetchVerification = function (verify) {
    return function (response, trail) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, typeof verify === 'string'
                    ? fetch(verify, {
                        // Verification API URL provided instead
                        method: 'POST',
                        credentials: 'include',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            response: response,
                            trail: trail,
                        }),
                    }).then(function (message) { return message.json(); })
                    : verify(response, trail)];
        });
    }); };
}; // Use provided promise for verifying captcha
var SliderCaptcha = function (props) {
    var _a = useState(false), verified = _a[0], setVerified = _a[1];
    var callback = props.callback || (function (token) { return console.log(token); });
    var create = props.create || 'captcha/create';
    var verify = props.verify || 'captcha/verify';
    var variant = props.variant || 'light';
    var text = props.text || {
        anchor: 'I am human',
        challenge: 'Slide to finish the puzzle',
    };
    var hasReloadButton = props.hasReloadButton, hasOutsideClick = props.hasOutsideClick, hideButton = props.hideButton;
    var submitResponse = function (response, trail) {
        return new Promise(function (resolve) {
            fetchVerification(verify)(response, trail).then(function (verification) {
                if (!verification.result ||
                    verification.result !== 'success' ||
                    !verification.token) {
                    resolve(false);
                }
                else {
                    setTimeout(function () {
                        callback(verification.token);
                        setVerified(true);
                    }, 500);
                    resolve(true);
                }
            });
        });
    };
    return (jsxRuntimeExports.jsxs("div", __assign({ className: "scaptcha-container" }, { children: [jsxRuntimeExports.jsx(Theme, { variant: variant }), jsxRuntimeExports.jsx(Anchor, { text: text, fetchCaptcha: fetchCaptcha(create), submitResponse: submitResponse, verified: verified, hasReloadButton: hasReloadButton, hasOutsideClick: hasOutsideClick, hideButton: hideButton })] })));
};

export { SliderCaptcha };
