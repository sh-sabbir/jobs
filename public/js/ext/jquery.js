/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
	// The deferred used on DOM ready
	readyList,

	// A central reference to the root jQuery(document)
	rootjQuery,

	// Support: IE<10
	// For `typeof xmlNode.method` instead of `xmlNode.method !== undefined`
	core_strundefined = typeof undefined,

	// Use the correct document accordingly with window argument (sandbox)
	location = window.location,
	document = window.document,
	docElem = document.documentElement,

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$,

	// [[Class]] -> type pairs
	class2type = {},

	// List of deleted data cache ids, so we can reuse them
	core_deletedIds = [],

	core_version = "1.10.2",

	// Save a reference to some core methods
	core_concat = core_deletedIds.concat,
	core_push = core_deletedIds.push,
	core_slice = core_deletedIds.slice,
	core_indexOf = core_deletedIds.indexOf,
	core_toString = class2type.toString,
	core_hasOwn = class2type.hasOwnProperty,
	core_trim = core_version.trim,

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		return new jQuery.fn.init( selector, context, rootjQuery );
	},

	// Used for matching numbers
	core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

	// Used for splitting on whitespace
	core_rnotwhite = /\S+/g,

	// Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	// Match a standalone tag
	rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

	// JSON RegExp
	rvalidchars = /^[\],:{}\s]*$/,
	rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	},

	// The ready event handler
	completed = function( event ) {

		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
			detach();
			jQuery.ready();
		}
	},
	// Clean-up method for dom ready events
	detach = function() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed, false );
			window.removeEventListener( "load", completed, false );

		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: core_version,

	constructor: jQuery,
	init: function( selector, context, rootjQuery ) {
		var match, elem;

		// HANDLE,ndow.detachEvent( "onload", completed );
		}
	};

jQuery.fn = jQuery.prototype = {
	// The cuchE:ng used
	rionstructorow.detachEvent( "on1on( selector, con\LE,ndow.d
	initW$type = {
	on\LE,nyion\LE,nyion\LEn\LE,nyion\L conof jQuery being uient( "oEn\LE,nyi\LEn\Lery ) {
		var match( sThe curr( skeep
	jque jQuery,
	y,
	inatch, elem;

		// HANDLE,ndo.detachEvent( "onload, completed );
		}
	};

jQuet( "onl		(ery ) {elector, co? core_version,

	cons
	};

j:DLE,ndo
jQue
	ini;

		// HANuctorery / HANDnstructoery / HAad", compleng used
	jquertjQueryd\Lery ) {
	( sThe cur,// HANDLEelector, co, cchEvent
 function( selLEn\LE,nyion\Event( "ont version onyion	constructr match, elem;

		/em;

		/t, rootjQue,, elem;

		// HANDcompleted, elem;

		lete
jQueryion of jQuery being use\LE,nyion\LE,nyionThe cur,/load", complery being unction( sele"on1rsioly(nThe cur,/load", com

jQuery.fn = jnt version of jload", FvarTvar mg used
	jquery: co: funCrototype = jQueryjrsion,

	constructor: jQuerelem;

Rg used
unction(ng used
[		var ma0]t vers;

		/mrrent Rg used
uncelem;

Rg used
uachEventng used
[" ";

		// Helem;

Rg used
uructo 0 jQuery  {
	// HAad", cosion,

	cr m.detaunctiery ) {
	t: frleteoad",ctor: jp-levelontext, (s)y: core_Crototy curnload", complefunction( selector, context, rootjQuer: funCrototyon of  /mrrent Rg used
 ) {
		v,y: core_AnyCrototy curnload", complefunction( selector, context, core_version,
: funCrototypeselectoe_versiof  /mrrent Rg used
 ) {
		v,y: core_: func[.fn = jQuery.protar match, elem;

		/ = jQuery!elem;

Rg used
uxt, r eleontext, rooery xt, rmLE,Crototy ), compont ve(: funCrototy pe = {
	/)Query.fn = leted, elemCrototyery.protar match, elem;pleted, elemAnyCrototyery: core_version,

	con
	jque]	};

jQuery.fn = jQuery.prototype = {ototype = tion(ng used
[		var mai]t vers;d", completed ) func[.rnload", compl
	constructor: jQuery,
	inpe = jQue)ion( senction( selLEn\LE,uery being use[		var mai]t vers;rsioly(n,nyion	var mai]tchEvent( 	// The ct versie_vercosupad", eore_vepload", coe = jQueQueryion  core_version,

	con = jQuery.eing ANDLE,ndong used
ype = {
	/ueryany)on,

ion( s	//ndLE,ndow.init:++icomple
jQuery.jn = jQuejf jQuery beryion tion(ng used
[		var maj]t vers;ery.fn = jQ) {
		var mag used
	jqu	// HANDLEtructor: var matc>Query.
	constructor: jQuery,
	inpvar matc>Query.Query being
 = jQuery compleext, rootj	var  wnt v of jQuery being used
,Querertext, mrrent yany-init: fu`*y ) {
		onstrucd
	jquery:i
		}
)ersicat({ r, cont	var ma:i
		2 ]E,ndow.deta contvent:
jQu}y ) {
	) version of jQuery beinr match, elemrpvar matc<.jnch, elem, FvarTvar mg used
	cd
	jqueusej	conpvar majn = jQnch, elem, FvarTvar mg (unction( used
	cd
	jquejoad",pvar majn = jQnch,Query being used
	jqvar melector, co,ndow.det"on1onion,

	co	// The curntext, rootnstructor: jQuery,
	int version of jload", FvarG= {
ructor:s( rootnstructor:ing Etructor:	jqueryuery ;
		}
	jqueryversyy be = jQuery.:ng cur, comyload", yi\LEn\{
		var matcrootjQdRuion( ANDLEbySuery  Etructor:	ootjQuery )NDLEbych, elem= rootnstructor:iootjQuery )NDLEsu( sMEn\LE,uerprototype = {
	/e_version,

onThe cur,/sion,
Crototy ),

		// HAy: corjpe = jQuer
 HANuctructor elem;

		n,

	consC
		}n( ANDLE		// H"0"prototypmatch, elematchch,m;

		n,xt, rmLE, =/sion,
Crototy );
		}
,atch, eltotyBy: d
	jqxt, rmLE,Crototyrrent verWry: coralway// HAND	};

jQmatchery ) {
	, elem;

		//  HANDLE,ndow.detabych, elemch,y beingnd[eing ]();
		}sion,
Crototy 
	};	};

jQ, rootjQuerontext, rootrrent verUe = {teger};

jQuer,

	;

jQuerpletet, rmLE,  = jQueQuer	;

jQueU.fn =E,n(;

jQuerype = {
	/By: d
	j= jQuerructo ruch.rn,

m( comp0.1elem;

		// et, rmLE, ry.fn = xt, rmLE,Crototy =text, rooery context, roocrototyon opleted )ruion( r matcrootjQdRuio;	jquertjQQueryd\Lery ) {
	 jQun of jQueryructor:	juery ) {
( sThe curtjQQuerKeep
`i`y ) mplete, elem: coversiLery ) {
	so	// The sC
		}`{
	// beH"00" below
ple
jQuery.g used
	jques
jQue);
		}
	 of jQuery bery ) {ych, elemch,selector, cong usedLE,ndow.detachE{ototype =  jQueryructor:	[jjquery: coreueryion  core_vompleted );
		}
	};

jQuery.fn = jQuype = {it: function( sel jQ) {
		var matW$type = {
	on		// et, rmLE, ry.fn = r	;

jQue
	};

jQueU.fn =	var mateted )ruion( ++r matcrootjQdRuio;	jqumag used
	rent verTry: cypmatch, eery ) {
		,

	ctn of jQsry bery ) {ySuereing used
	jTd
	j
	//  HANDg, el/ HANDLEelec
	jquery:Query,
	onload, completed )
	};

jQmch,selejQuery.fn = / The sC
		}--;	jqumag g used
	j, compesion osion ot( "ov
	};ery ) {nstructorng usetonload, comery.fn = jQutotypmatch,  {it: function( sel g used
	jquertjQQuery ) {
	ctn of jQs
( sypmatch, eery ) {

 = / The sC
		}rypeijQueryion {ySuerch,ioery / The sC
		}rn = jQut usedLE,ndo.detachE{ototype =  Etructor:	[jjquery: coreue core_vom,
	init: fuuctructor core_version,

	construc
load, comery.fn = jQutoe ct  {teg, comjQuery.:chEvent(tiLerim usee ANDLE,ry.fn =ructor: jeueryion  core_sC
		}r>rren = jQutotf jQuery being used
	jquQuery(e current ve

	coctructor 
jQuery.fn = jQu	octructor 
jQ) {elprsion,

jQuery.fn = jQuon of jQuery being  jQutoe conte, elad", crsionholry br, cosf jQueryructorctucoe = jQu	onloaductructor eleEvent( "onuctructor ebeing uient( "oEnyd\LchEvent(tiLThe curtjQQe"on1rsioly(nThe cur,/uctructor ebeint( "oEnS,rysion,se.:chEvent(succe rootjchEvent((successfuljQuery,
	isvenuf jQ=ructor: jeue		// et, rmLE, ", coatchch,uctructor ootjQuery )et( "onl	n  core_sC
		}r+  Etructor:	ootjQuer)jQuery be "onl	

jQuery.fn = jQu,

jQuery.fn = jQ
	jquertjQQuerOv
	y,
	  cnenuf jof jof global beinnew.detQuery,
	onlo		// et, rmLE, ry.fn = ;

jQue
	};

jQueU.fn =	var mxt, rmLE,Crototy =text, roBy: d
;	jquertjQQntext, u.detachEve	ry,
	init: fu{ySuer?
uctor: jQuery,
 su( sMEn\LE,um;pletsu( sMEn\LE,t ver{
	// T ctor: jQu{
	// T ctsed
	jquery: core_pe = {
 /* I	}
	 coeUe ={
		v*/jquery: corQuery,yructor:	jlem;

		 jQueryructor:	jlem;

		eted );
	{
	// Tr;

jQuery.fn = jQuery.prototype != {
	// The c
	jqune, coma.fn = jQueof init: fun.fn = jQutauncticHANDLEu, contex: funleted elem;

		type ! = {
 ry.fn = = {
  context, ro ) {
		var	// The	// H = {
// HANDLE,nf jQuery being usedeted );
	 elem, FvarTvar mg  = {
y ) {
		vatype = {
	/ersion,

	con = jQue Etructor:	o{it: f= {
	// eing unction( selerootnstructor:io{it: f= {
	// eing u
quertjQuerd );
		}
	{
	// Td rootjQuery eted );
	{
	// Tr;

jQery: core_peload", FvarG= {
ructor:s( rootnstructor:ing Etructor:	jquE,ndow.detachEvaachEve}t: function(chEvent( "onload", completcore_verss;

jQuery.fuery: core_version,

	cre_verss// HANDLE,
jQuery.fn = jQuery.prototyon( selector, contre_verssted )
jQuery.fn =}nload", completed )t( "onload", or, lector, contre_vers,nThe cur,/uc	// The : corQ
		// HAND	// ANDLE,nnstrd,y: core_  context, ro ) {
		var	/totype !ery.fn = jQverTr{
( sm uim z
ype = {jQuery elem: cnstructo, el = {

eryion  coreootjQuerng used
	jtjQQuerT, coa{
	// The
	// Tht		}
	{
ototy , elem;jQueo ) {
		vaed
	n Init: unction(  coreonstructor: jQuery,
	in {
		vatype onstructor: jjQu2uxt, 	var  =		var ma0])E,ndow.detaIDent( "onlxt, rootjuerById 
	};	};

jQtjQuery ) {
		vrototype = {
	// The cuuuution(ng used
[		var ma1]t vers;ery.fatch, eltotyE,n(,y beingnd[eIDe]e onstrtchEventonstructor: ", completed );
		}
),text, root	const )sion,
	jquQuerycrototy ),

		/	load", completed jQuery beiy,
	init: f current ery,
	iused
	cdQuery,h, eleted );
		}
	};

tjQQuerFere_ a/uc	//	ctn lectight-to-leftery: core		vatd );
		}
	};
"E,rys "onloay: core_v ) {
		var mjQueronstructor: jery,
	init: function( sel	var  =		var mai]eint( "oEnAbrotoery ) {t yabeing used
,
	jquQuertion(ng used
[	(f jQueronstrtn( ses;ery.fn = j) {
		var mDLE,ndow.de(ngnduery beingnd[  vers;d", compl "oEnS,y: coreion,
he curototy  lecelem;

	 {
		var onload", complndow.de(uc	//=nstrdg
 = jQuonstrtchEventonstructor: d", completed );
		}
	}oad", cor {
		vaery,
	invar ma0]t vers) 
	};	};

jQ, rootjQuerontext, road", clem;

		// HANery couc	//uery

	cog use used
	jrefn =uery.fn =ntext, rar= {
	// 	onstrucdp
	jqueuse1.fn = jQuoy,
	init: f cr ootjQuerch,Query being used
	jqn = jQuotype !er core_version,jQQe"on1rsioly(nThe cur,/ucr ebeing u/	load", completed jQuedetachEvent) {
		var mag used
	jqulem;

		// 
		var// T 	// fn =ucoma.fof jQry: cootjQuerynt veov,
	 // The`y ) {
		vaoadntext, jof jery ) modototypnction( selechEven
	{
	// The current,uery: co(
ANucto

		erototyrrenr match, elem;
ootjQutor: jQuer {
		vaery,
	ier core_ve
	;

jQud", completed )t(uerOne-timetionign ) {

(uer jQuestabQuery
achEvent( "onload",=/sion,
ocdp
	t("")n = jQuery.prototy.join("")he curion,
oonloadSchEven: Chvare<14load"lway//ion( seion of jQue, elemotyp	var tor, conte	}
	{
	/xt, ro cootjQuer		var match, elem;

		//,=// The currenonloadIrootjQ z
yon,

	constr,

	constructor: ry,
	init: f)onloadSchEven: Webkit<537.32 -
	init: 6.0.3/Chvare 25e(ngx}
	}; Chvare 27)loadDetted );nctionero// HA	vaon of jQu *letedQuery*
achEvent( "oDetted );=/ione jQsed
	jquerdiv1jqueryuerSfn = jQuery.p1,compnload", c4e(nf jQu	va)	init: funiv1.{
	/xte
	init: nload", (hEvent( "o,ndow.ch, ele("nivor, c&or, })onloadSchEven: IE<8
nt vervry.:Query ) {/ used
	jq"	initpof jof "
rent versimsdrtcicrosoft.{
	/en-us/lib verims536429%28VS.85%29.aspx
type !ione jQsed
	jquerdivjquerydivurrent	// Teta<a .fn ='#'></a>";	init: funivntext, rootd );
		}
	};

j.fn ")he cuy,
	, })jqueryaddrent v( jQuer|.fn |height|widion,.fn = jQuery.prototyp,/ueXnstrutotype = !ueXnstrutotytor, context,E,ndow.detachEvent version of jQuery be.detacueryrructo 2co	// The load", coSchEven: IE<9
verUe =,

	conV: funcncrsionjof g);
		}
	};

j, ele")
type !t, rootjQuery ) {
		varione jQsed
	jquerdivjquerydivurrent	// Teta<sed
	/>";	inivntext, rootds,ndow.detachEj, ele",
jQuery.nit: funivntext, rootd );
		}
	};

Ej, ele" be.deta", })jqueryaddrent v( j, ele",
fn = jQuery.prototyp,/ueXnstrutotype = !ueXnstrsion of jQuery being used
	jquery:, elem;
rutotytor, context,,

	conV: fu	// The load", coSchEven: IE<9
verUe =d );
		}
	};

jQontefere_ brrent s	ininonstructor: jQlof jtype !ione jQsed
	jquerdivjquerynit: funivng);
		}
	};

jon( selecfn = jQue, })jqueryaddrent v( brrent s,
fn = jQuery.prototyp,/ueXnstrutoty: cof jQutype = !ueXnstrutotytor, cond", completed );
		}
	};

jQu functin = jQuery.prototype = {
	// The current lem;

functQuery.proto?version of jQuery be:uery,
	inThe load",		}
	}.ngndueron( se;,		}
	}.eery ) {
		var match, e;,		}
	}.eery[":DLE,n		}
	}.eeryy: core_ve		}
	}.u.fn =E,n

jQuery.fn = jQuve		}
	}.tctor: jQuery,
	init:ve		}
	}.ueXns
	ir: jQuery,ueXnsve		}
	}.em;

		/ ctor: jQu{
;

		/onl })(pleted ueryd );
		otj	vEvent( or: jQuer selcticHed 
: cor: jQueootjQuer{}onload "overte;
		ot- selction( : jQuery,	vEvent( - selction( nion( serototyihEvaach	constructondow.O: jQue(( : jQuer The : cooent( o=or: jQueootjQ[( : jQuer]uer{}on			}
	}.eotj(( : jQuetchEve(nerre_rnot= {
	ot	const,
fn = jQuer_,
fla
		// HAoent( [
fla
	]uerused
	j}ery.nit: fuoent( oad", 
	};
Clectorabeore_verslis		}
e = {
	/nf jQu	varsion,

	co:	};	};	 : jQue:
	n  : jQu, clis		of ry: c-sesionion( : jQueruncti
	// chang) {ow	};	 	o}
	{ore_verslis		be HAN
	, ea mor{
	//dad", coe : jQuuoent( 	};	}; Byr,

	consabeore_verslis		
	// a( olik.protrvry.:eore_verslis		( selHANDL	}; verslecjchEvent((times.	};	}; P	jquery: : jQue:	};	};	 nce:y,
		// r m.de o}
	{ore_verslis		lHANructob corron( nonj(lik.prdDeferron)	};	};	memory:y,
		// keep
	ry: cof xt, rootbr, cosf( se
	// celectoy	{ore_versore_v	};	 			afion ofeslis		/ Tob encorron(tight awaytotype = {f jQs		"memor
	y,"	};	 			r, cosf(lik.prdDeferron)	};	};	y.fn =:y,
		// r m.de abeore_verslHANructob core_ve nonj(se ion of jQyihEofeslis	)	};	};	rotpOnFnt v:		initrup.:eore	vas	ininoabeore_versload", cent v	};	};/e		}
	}.Core_vers ctsed
	jquer : jQuer The/ 
		vaoverter: jQuer tor:;
		ot- selction(	vEvent( - selction(iffunctio/ 
		(ry.f: funihEvaach, elem)	ir: jQuer=match, er: jQuer=, context, re = (or: jQueootjQ[( : jQuer]uontendow.O: jQue(( : jQuer Tm;plet		}
	}.eetend(ery ( : jQuer eint: couerFla
	( sknd uifflis		ng cur, comyl elore		v eloreery.fn Lion orro	jquery(fg used
fg 
	iload",lis	s)y: cemoryery.fn Fla
	( sknd uifflis		wnt vlndodycorron		v elto

		 com sey beingow.deinino elore		v eloreLor: jQueroadIr", compcur, comyl elorebeore_vers(modototypby

jQuer(iffunctio)		v eloreversiory.fn Fctioncore_versionorro	(u, coi	}
	 coctobycoreatch, eleWtyp)		v eloreSelector,on oftucoe{ore_verslis	sionis		}
	};

jd );
y: cof orro	{ore
		,

repdowoad",lis	s
ent v: c=etac jQuet nonjch,m;

		fn Fct
	{ore_vers		v elt ctsed
	jquer	cons, compleemoryo=or: jQue.eemoryorotocon	var orron(uctor: jQue eloreversi/=nstloreSeleccomp0 jQue eloreS versio0 jQue eloreLtjQuern,lis	ctor: jery,
 elorebuctor: jQue jQuery.nis		rot eloreversi/<  eloreLtjQue;t eloreversif jQuery bery ) nis	[t eloreversi/;rsioly(noconor, c,noconor1s;eryQuery,
	i	rotr: jQue.rotpOnFnt vry: coreue emoryo=oent veouerTo xt, ry.:fur;

jQ{ore
	}
e = orefn = j) {
		var mDLE,n}ry,
 elorebucent versiory ) nis	jQuery bery ) t v: cQuery beryion t v: ootjQuer)jsion,jQQorron t v: odQuery,ion( sel g used
 , context, emoryo)jsion,jQnis		}
	}; used
 , consion,jQ mafmatch, e()	var mDLE,n}ry,}tor,on oftucoeCore_vers oent( 	jQ mafuer{tjQQueryd\Labeore_vers, ea jquery: cocompcore_vers nte	}
	lis	sioyaddleted );
		Query bery ) nis	", compl "oEnF currewNDLEve o}
	{ur, coof jQue
	 			r,r t versiolis	ctor: jery,
= (hEvent( "onl(d );
		jsion,jQQ		}
	}.eotj((var m
fn = jQuer_,
varversion,jQQeery b jQuer		}
	}.totjQ
varveeing u/	ltype ondow.detafn = jQu"version,jQQedow.detac jQue.u.fn =Euery ) fonloQ
varveversion,jQQedQnis	o{it: fvarveeing u/	l	// HANDLE, , context,varvrotvarootjQuerch,Qndow!, context, rersion,jQQedoadIrery ) init: function,jQQedonl(d );.fn = jQuon of jQueron( sel g)(Query,
	inion( sel ry.prewNDnatch( soreao}
	{ore_vers nte	}
( sel ry.{ur, coo elorebbhEve?ry beryion  eloreb)jsion,jQQorroreLtjQuern,lis	ctor: jery,
t verWtypecemoryee_version,used elorebmpesry,
t verwey.fn = jcelectight away
ANDLE, , context, emoryo)jsion,jQe eloreS versiot ver;ion,jQe elet, emoryo)	var mag used
	jquy being uhio;	jqueh, elem;RjQuer(abeore_verspleted );lis	sioy
jQuerleted );
		Query bery ) nis	", compl "		}
	}.eotj((vary,
	inm
fn = jQuer_,
varversion,jQQeted )DLE,ndow	,
	initry,
iersi/=n		}
	}.unAion ((var, nis	,
iersi/) ue
	ini;

	,jQQedQnis	odp
	jqueuersion1.fn = jQuolem;rent vd elorebw.detacing u/	ltype  eloreb)jsion,jQQ	ltype iersi/<=  eloreLtjQueversion,jQQedQ eloreLtjQue--;	jquma	l	// HANDLEltype iersi/<=  eloreIersi/) sion,jQQedQ eloreIersi--;	jquma	l	// HANDLE of jQuery being)	var mDLE,ny being uhio;	jqueh, elem;C: funif(abgfunnbeore_versy,
	ied );lis	., elem;Ifuse f jQuery y,
gfunn,jQuery.pwjQuery,g usetslis		/ To{ore_vers cti being, el/ Tleted );
		}fn/) sion,jjQuery.pr ?n		}
	}.unAion ((fn, nis	", 
	initted .nis		rotlis	ctor: j		}
	};
h, elem;RjQuer(allo{ore_vers pleted );lis	sioyy

	cleted );
		Query benis		}
	}; usedorroreLtjQuern,dLE,ndo being uhio;	jqueh, elem;HEve o}
	nis		douseth;

		/ymor{, elatch, eleted );
		Query benis		}
t v: c=e emoryo=otachEventLE,ndo being uhio;	jqueh, elem;I,
			dn( sele?, elatch, edleted );
		Query beructor: nis	;	jqueh, elem;Loersi}
	nis			ientex{ur, coot vt{, elloerleted );
		Query bet v: c=etachEventLE,ndo;
		}
	emoryo)jsion,jQ mafmatch, e()	var mDLE,no being uhio;	jqueh, elem;I,
			loerle?, elloerleleted );
		Query beructor: t v: ;	jqueh, elem;Celectllo{ore_vers otype = {gfunnberototy tch,vary,
	invar orroWtypuery,
	init: e_vers,n );
		jsion,jry ) nis	"xt, r!orron(ore_ve: cQu)jsion,jQused
	jused
constructor:used
	jqu e_vers,n );
 ery,
n of j	cd
	jqu)ed
	jqsch, elem;type  eloreb)jsion,jQQt v: o{it: fvar
		}
	};

jnction( select elet,var
		}
	};

jvar mDLE,ny being uhio;	jqueh, elem;Celectlloo}
	{ore_vers otype = {gfunnbvary,
	invar orroleted );
		Query betmafmorroWtyp( uhio,Query,
	inion( sel being uhio;	jqueh, elem;T sknd uiffo}
	{ore_vers // Thelndodycb enc{ore {
	oof ion  nonvar orroeleted );
		Query beructor: !orron;LE,n}ry,},
	init: futmafve}t:		}
	}.eetend(he/ Deferronleted );
		}fed trutoty: cotupl//,=/[ry beem;a );
	,soreanis	une,,anis	une, nis	,
structt vt{, el	[ "resolve",
jQuer",
		}
	}.Core_vers(" nonj	emory"), "resolved" ;

		n,[ "rent( ",
jrsio",
		}
	}.Core_vers(" nonj	emory"), "rejtype = ;

		n,[ "setify",
jprogress",
		}
	}.Core_vers("	emory") ]
		n;

		nt vt{TetapeHA	va"r: jQueomfn ==uery bet vtoleted );
		Query beinit: futtrenon	jqueh, el	alway/leted );
		Query beideferron.Quer(Query,
	inio.rsio(Query,
	inion( sel  being uhio;	jquueh, el	mpesleted );
		}/*(fnDuer,
snFnil,
snProgressv*/jqueryyyyy: cofnd
	jusey,
	inn( sel  being 		}
	}.DeferronQsed
	jquernewDefer		jsion,jQQ		}
	}.eotj((tupl//m
fn = jQuerrQ
	u, rootjQuery ) .fn =ent( "=
	u, ror, c,	jquma	l	 elem		}
	}.uee current vn// HANDn = jvn// HANn = jQuolem;deferron[ch, el|ersio 
	//ogressv]		,

atch, e;

		= jQutauornewDefer = jQuoldeferron[c	u, ro1] ]
	init: function(ry ) .fn  being

jQuer = jvnrsioly(nuhio,Query,
	inion( sellem;type  being

j= j		}
	}.uee current  being

.ueomfn =eversion,jQQedQ being

.ueomfn (;

		// HA		.Quer(QnewDefer.resolve ;

		// HA		.rsio(QnewDefer.rent( o;

		// HA		.//ogress(QnewDefer.setifyveeing u/	l	/nction( selectotor: Defer[ =ent( "+ "Wtyp"	jqu;

jQ.detueomfn =?QnewDefer.ueomfn (;uerohio,Qpr ?n[  being

j]ed
	jquery:sveeing u/	l	// HANDLE,w.d
	initWw.d
	initfnd
	jery,
	innitWw.ueomfn (;;	jquueh, el	
	jqueratueomfn =ery.pr
jQdeferron, el	
	jIfuobj ing usv,
	d,ompleexomfn =aery ) ed
	dd conte	}
	oent( 	jQjQueomfn leted );
		}obj Query beinit: fuobj != jQuerru		}
	}.eetend(eobj, ueomfn =ev: ueomfn 	var mDLE,n}h, eldeferronuer{}onlQQuerKeep
pip =ery._ver-{
	/x 	jQueomfn .pip =etueomfn .mpesonlQQuerAreanis	-e_versioj	ethodnvar		}
	}.eotj((tupl//m
fn = jQuerrQ
	u, rootjQuer.fn nis		}
	u, ror2 c,	jqumttren;
		otj}
	u, ror3 = jQueruerueomfn [ch, el|ersio 
	//ogressv]	n,lis	corefn =ueomfn [c	u, ro1] ]	n,lis	core jQueruerrent vdt vt{, elyion t ven;
		otjQuery benis	core
	init: function(ryuert vt{Tet[  bsolved 
	rejtype  ]
		n	nt vt{Tett ven;
		oteint( "oEn[	rejtyp_nis		|  bsolve_nis		]match, e;	//ogress_lis	ctoer	jquueh(tupl/// HA^r1s;or2 cmatch, eh(tupl/// 2s;or2 cmtoer		}
	};

tjQQuerdeferron[cresolve 
	rejtyp 
	setifyv], eldeferron[c	u, ro0] ]	n,	init: function(rdeferron[c	u, ro0] + "Wtyp"	jqu;

jQ.detdeferronu? ueomfn =: uhio,Query,
	inion( sel being uhio;	jque;, eldeferron[c	u, ro0] + "Wtyp"	j	n,lis	corroWtyp
	inT)onlQQuerM, constr,

erronuatueomfn 	jQueomfn .peomfn (r,

erronu)onlQQuerCelecgfunnbfed teryany
m;type  ed trutotyootjQrsion,
,

erron,r,

erronu)onquertjQuerylech, e!
ersion,

	

erron;pe = {
oadDe
erronuhelper =wpesleted );
		}subo e;
vt{T/*(,;

j,}subo e;
vt{Nv*/jqueryy: core_versio	resolveV, cosf=nerre_d
	jqrsion,
uery,
	iniorsio	otjQuern resolveV, cos( selector, cont	}
	{
		}rofetaQuery pe  subo e;
vt{ssio	refn =	otj}
otjQuer!y,
	init	}subo e;
vt{T= j		}
	}.uee current subo e;
vt{.ueomfn =ever?eing used
0tor, cont	}
	mioner	De
erron.jIfuresolveV, cosfype is		of ructor/ Thg vdD

erron,r

	co jQuunct., eldeferronuerrefn =	otj}y,
	i?}subo e;
vt{T: 		}
	}.DeferronQe current Updvt{ThEvent( "ery._ototresolve ang usogressvr, cosurreupdvt{e cu ctsed
	jquericore_verss;
r, cosf) sion,jjQuery.ped
	jquerjquerynction(ryre_versst HANDLEuhio;	jquu	r, cost HANDLEuery,
	intor, context,nerre_d
	jqrsion,
uery,
	inioT: , elem;
	 elyi(
r, cosf.detueogressV, cosf) sion,jeideferron.setifyWtyp( re_verss;
r, cosf)}
	};

jnctionuQuery( --refn =	otj)f) sion,jeideferron.resolveWtyp( re_verss;
r, cosf)}
	};

j	jquue;	jqueh,fn =ueogressV, cos,tueogressCe_verss;

jQolveCe_verssonlQQueroreanis	une,;

jQueferronusubo e;
vt{s;ar matcomplet ver bsolved
m;type on of jQuery beingueogressV, cosfctor: Aion ((tor: j		}
	};ueogressCe_verssfctor: Aion ((tor: j		}
	};
jQolveCe_verssfctor: Aion ((tor: j		}
	};text, rootjQuery ) {
f jQuery bery ) resolveV, cost HAND= j		}
	}.uee current  bsolveV, cost HAN.ueomfn =eversion,jQ bsolveV, cost HAN.ueomfn (;

		// .Quer(Qupdvt{e cuerico
jQolveCe_verss,uresolveV, cosf)o;

		// .rsio(Qdeferron.rent( o;

		// .//ogress(Qupdvt{e cuericoueogressCe_verss;
ueogressV, cosf) ;;	jquuenction( selec--refn =	ot	var mDLE,n}ry,}nlQQuer_version,usedwaijQuer( "onyth;

,uresolvet	}
	mioner
m;type !refn =	otj)f{, eldeferron.resolveWtyp( 
jQolveCe_verss,uresolveV, cosf)onquertjQsion,

	

erron.ueomfn (;;	j} })on		}
	}.t, rootE,n(ted );
		}su rootE The/ .fn =yiona,used
	jq matchm
frag ) {nsopypes ry.Ntyp,/ueS	var mat,orQuerdivj=hEvent( "o,ndow.ch, ele("nivor; {
oadSionp	inivns,ndow.detachEjclassNtyp",
jtQuery.divurrent	// Teta  <link/><woad"></woad"><a .fn ='/a'>a</a><d );
		}
	='c
	// Th'/>";	
ery.einish rar= 		ierim pe  (sed
browsue)ienviron ) {

	elec=univng);on( seleByTagNtyp("*")
construcac=univng);on( seleByTagNtyp("a")or, conttype !i		vari.styl=EueryeleootjQuer)jsionnit: fut	var m;
		// 
		FctionbhEveey bees	s
e matchj=hEvent( "o,ndow.ch, ele(" matchor; ir: : f currersioend root(hEvent( "o,ndow.ch, ele("eted );) ;;	j );
		}
nivng);on( seleByTagNtyp(" elem;)or, conuca.styl=.cssTctor: "top:1px;float:left;opacity:.5";	
ery.TQs		s,ndow.detacr( "ctypluery class.jIfuit funcs,ewNDnatchQuerFixes	ininodo	otjg);/s,ndow.detacr(ie6/7;

t, rootjuerS,ndow.detacr}
nivnclassNtypw!, cot";	
ery.IE) mplpscelem;

	= {
	ry: c	ininourrent	// TisEu, c

t, rootjelem;

W {
	ry: c	=univntext, rootdmpleted );
		};	
ery.M, com.de o}atctbodyeery ) {
	yp	var automation,

	uerertio/ 
		IE)		// uererte	jquey,	vEy

	cowoad"s

t, rootjtbodye= !nivng);on( seleByTagNtyp("tbody")ctor: jer
ery.M, com.de o}atclinkeery ) {
	ueryrertjQ z
selerry ) {
b
	ueent	// 
ery.Thctionquidetaa wrsioer jQuery.:nn	IE

t, rootjhtmlSertjQ z
e= !!nivng);on( seleByTagNtyp("link")ctor: jer
ery.query: cstyl=Ein selctt( "eleted );
		}
	};/ 
		(IE)u, s .cssTctoruery,
	;

t, rootjstyl=E= /top/ery,
	iang);
		}
	};

jstyl=;) ;;	
ery.M, com.de o}atcURL
	yp	var  cnenuf jio/ 
		(IE)nselcQ z
,
			byr,

	con;

t, rootj.fn NselcQ z
);=/id );
		}
	};

j.fn ")he cuy/a";	
ery.M, com.de o}atcjQuery.:opacity rootjs/ 
		(IE)u, s sion ofuery,
	;

verUe =aiongex

jQfunctar/ HA=aiWebKi) edsue.nS,r #5145

t, rootjopacity = /^0.5/ery,
	ianstyl=.opacity ;;	
ery.Vertfyvstyl=Efloat rootjenonva
		(IE)u, s styl=Float uery,
	iompcssFloat;

t, rootjcssFloate= !!a.styl=.cssFloat;	
ery.C: funnstr,

	consc
	// Th/.prot	jquery(""r( "WebKi); "Qu"vctiowem: ;

t, rootjc
	//One= !! elemh, elem;
ery.M, com.de o}atca core_version,

	cone : jQuuhnt v func;

	 ore_verg used
	j.va
		(WebKi) ,

	con;

jQy,
	i	uery,
	iompootjQuIE)tooee_veit',
	ie	n  :  = {
)

t, rootjopleted )
);=/oplload", co;	
ery.TQs	
		,

enoQndowsu rootE( "or sel (#6743)

t, rootjenoQndow= !!nvent( "o,ndow.ch, ele(" sel")cenoQndom;
ery.M, csom.de clon;

		/ html5cjQuery.:doeg usedca jQu usbques
ery.Wem: cxt, r	// TisEuachEvent,u;

jQst	// funcs

t, rootjhtml5Cl, el=hEvent( "o,ndow.ch, ele("navor.clon;

jQu  {
		v.xt, r	// T!, co<:nav></:nav>";	
ery.W	// beHchEvent{f jQr

t, rootjinlineBtoerN,rysLayo
		}
ent verst, rootjshrinkWrsiBtoers	}
ent verst, rootjpixelnload", 	}
ent verst, rootjdey peEion,

	uctor: jQt, rootjnoCl, eEvelem= tor: jQt, rootjrelioad"MuerinRight = tor: jQt, rootj ThSiz;

Rg ioad",=/tor: j
ery.M, com.de c
jQuery.tatus ing used
 {
clon;d	j );
	detachEv	uctor: jQt, rootjnoCl, eCtachEv	uc );
	delon;

jQu  {
		v.etachEv;	
ery.M, com.de o}atcthe( : jQuery,s,
	 atch, eleoad", 
	yp	var  cr= {
	s atch, elva
		(WebKi)  cr=se	jque	s atch, el)
e matchmatch, elemctor: jQt, rootj : Dtch, elemctac match, el; {
oadSchEven: IE<9
	tryjsiondey peunivnry,
;
		dcaEve(nrynctiont, rootjdey peEion,

	ucent vers}	
ery.C: funery ) lHANtors		g);
		}
	};

j, ele")
j );
		}
nvent( "o,ndow.ch, ele(" elem;);	j );
	ds,ndow.detachEj, ele",
jQuery.t, rootjin;
		}
 );
	d );
		}
	};

Ej, ele" be.deta", 
ery.C: funeryxt, n;
		fn =

		/ ntexjqueryafion becomfre_ve.prot	j );
	djquery cot";	j );
	ds,ndow.detachEjcuery, "rprotQuery.t, rootjrprotVquery c );
	djquery , cot";	
ery.#11217 -iWebKi) ootjQ.f: funwpesion ofuncted
	fion ofesetachEv	a
		}
	};/  );
	ds,ndow.detachEjetachEv",
jtQuery. );
	ds,ndow.detachEjntyp",
jtQuery
	frag ) {	}
nvent( "o,ndow.
	init: Frag ) {(;;	jfrag ) {rsioend root(h n;
		), 
ery.C: funeryx atccoeen )
);c
	// Th)		// nita	ientex{tachEv
ery.jqueryompootj
	fion sioend conte	}
	DOM	(IE6/7;

t, rootjsioend rachEv	uc );
	detachEv;	
ery.WebKi) ,oegototyl, elc
jQuery.tateelerry ) {
in
frag ) {s

t, rootjc
	//Cl, el=hfrag ) {relon;

jQu  {
		v.elon;

jQu  {
		v.jQue rootdetachEv;	
ery.SchEven: IE<9
	uerOe = :doeg usedcl, els ry.s (ang atch, enivncti beEvelem===etachEvent)./ 
		IE9-10dcl, esls ry.s b/ HA=via cti beEvele,compned
	jquery:w.dgger}otype.elick(;

type nivncti beEvelemnctionnivncti beEvele( "Quelick",
fn = jQue)f{, elt, rootjnoCl, eEvelem= ent versiT)onlQQnivnclon;

jQu  {
		v.elick(;ers}	
ery.SchEven: IE<9 (le: cntext,/chang) bub, e), Fct
fTh)17+ (le: cf	insiotrvry.;

verBewover, eCSPuresw.d= jQuta(t ves://develsed
.moz	//a.org/en/Snit:ity/CSP)E,
jQuertor, context, rootjQuchang)e current	insio {
		varnctionnivns,ndow.detachEs ry.Ntypy coQu"v+ricojtQuery
	lt, roott HA+ "Bub, es"	j	n,s ry.Ntypyr, leted ujQueivnctiry ) {
[,s ry.Ntypyy.fnon,

	u=ucent vers}	
enivnstyl=._vergr/ HACli
  c"re_vent- Th";	inivnclon;

jQu  {
		v.styl=._vergr/ HACli
  c""ry.t, rootjcelerCl, eStyl=E= nivnstyl=._vergr/ HACli
  = c"re_vent- Th";	
ery.SchEven: IE<9
	uerIt = {jQu ovecooent( ',
	iem:iverg used
	ieTob ftotyi{
	,wn.E,
jQuertor, 		}
	}	}su rootE Tnction) {
		va}jQt, rootj wnLion =,ioery "0";	
ery.Runbees	s o}atcnatchQ bodyeanstru ndodyn			}
	}
	init: function: co:
;

		et,uererinDiv,u;d jQuernivRry )Tetapadm;

:0;ererin:0;bo eer:0;atcplay:btoer;box-siz;

:re_vent- Th;-moz-box-siz;

:re_vent- Th;-webkit-box-siz;

:re_vent- Th;"r: jQbodye= nvent( "og);on( seleByTagNtyp("body")sion,
m;type !bodye)r{tjQQuert versi	,

aon,
y )Tnves o}atcquery:// The body
n,jjQueryonquertjQ:
;

		etj=hEvent( "o,ndow.ch, ele("nivor; jQ:
;

		et.styl=.cssTctor: "bo eer:0;widio:0;height:0;pload", :absol) {;top:0;left:-9999px;ererin-top:1px";	
eQbodyrsioend root(h:
;

		etj)rsioend root(hEivjqonlQQuerSchEven: IE8
elem;C: funif(woad",cere
	st	// // Thoffy )Widio/Heightnwpesion otyp		s,n
elem;nteatcplay:n, elang AND: coverst	// omple=viquery:woad",cere
		ie	
elem;noad",row;nif(soeeoffy )Widio/Heightnaon,usedrelioad"i	,

 jQuwpesry,uerde, rm =	otjeryxt,jQuery.:/ Tob enchiddinodery ) {
uructor,uerdtcplay:n, el(i) edrst	// safQonte jQuoffy )sneryx , root jQuery.:ngor,uerhiddin;cque safQty gogglion( sere) bug #4512i	,

mtotyih selctt( )./ ydivurrent	// Teta<woad"><tr><td></wd><td>t</wd></tr></woad">"ry.	;d 	}
nivng);on( seleByTagNtyp("tdor; jQ;d or, c.styl=.cssTctor: "padm;

:0;ererin:0;bo eer:0;atcplay:n, e"ry.	ueS	var matE,n( ;d or, c.offy )Heightn = c0jqonlQQ;d or, c.styl=.atcplay  c""ry.Q;d or1 c.styl=.atcplay  c"n, e"rylQQuerSchEven: IE8
elem;C: funif(y

	cowoad",cere
	st	// // Thoffy )Widio/Heightiont, rootjrelioad"HiddinOffy )sn=/ueS	var mat"xt, r;d or, c.offy )Heightn = c0jqonlQQem;C: funbox-siz;

n( seererin	be HAior./ ydivurrent	// Teta"ry.Qnivnstyl=.cssTctor: "box-siz;

:bo eer- Th;-moz-box-siz;

:bo eer- Th;-webkit-box-siz;

:bo eer- Th;padm;

:1px;bo eer:1px;atcplay:btoer;widio:4px;ererin-top:1%;pload", :absol) {;top:1%;"rylQQuerWorkar/ HA=rsion of ThSiz;

bees	 duQonteoffy )Widio  being;

	=ro

	jquerlQQuerotypesare sed
1
r, cosf, ebodyezoom,u;ick )T#13543var		}
	}.swap(ebody,ebodynstyl=.zoom != jQuerru{ezoom:r1 } :ery (fn = jQue)f{, elt, rootj ThSiz;

b}
nivnoffy )Widio  = c4
	inT)onlQQuerUe =leted ng);var/) {dStyl=Ebeca jQujsdom ue mple.js{
	// b {
	rotypo
		it., etype leted ng);var/) {dStyl=E)f{, elt, rootjpixelnload", 	}
e leted ng);var/) {dStyl=(hEiv, jQuer)
con{}j)rtopoery "1%"ry.QQt, rootj ThSiz;

Rg ioad",=/e leted ng);var/) {dStyl=(hEiv, jQuer)
con{ widio: "4px" }j)rwidio  = c"4px" jQueruerC: funif(Eivjotypefnorent ywidio ( senoeererin-tight inlerry ) {Queruerg )sncar/) {deererin-tight ueryve nywidio ompc
;

		et. (#3333)QueruerFnil
		ieWebKi) b ftotyFeb 2011 nightlof j		ery.WebKi) Bug 13343 -ig);var/) {dStyl=Eload", c=ro

	jqueri	,

mrerin-tightj		eererinDivb}
nivnsioend root(hEvent( "o,ndow.ch, ele("nivor, ;j		eererinDivnstyl=.cssTctor: nivnstyl=.cssTctor: nivRry );j		eererinDivnstyl=.muerinRight = ererinDivnstyl=.widio   "0";		.Qnivnstyl=.widio   "1px";	
eQQt, rootjrelioad"MuerinRight =var m!ry ) Float(/e leted ng);var/) {dStyl=(hererinDiv,ujQuer)
con{}j)rmuerinRight )onquertjQtype ondo, enivnstyl=.zoom !==nerre_d {
achEvente)r{tjQQuerSchEven: IE<8
ueruerC: funif(nused
 {
btoer-leveloery ) {
	y( olik.pinline-btoer	jquuerery ) {
	wpesiy )torebmpeirrdtcplayonte'inline' ( segivore		vaont	}
m layo
			.Qnivnrrent	// Teta"ry.QQnivnstyl=.cssTctor: nivRry )T+ "widio:1px;padm;

:1px;atcplay:inline;zoom:1"ry.QQt, rootjinlineBtoerN,rysLayo
		}
(
nivnoffy )Widio  = c3( 	// The cSchEven: IE6
ueruerC: funif(ery ) {
	wtypelayo
	 shrink-wrsibmpeirrcrootresry,
nivnstyl=.atcplay  c"btoer"ry.QQnivnrrent	// Teta<niv></niv>"ry.QQnivntext, rootdstyl=.widio   "5px";	.QQt, rootjshrinkWrsiBtoers	}
(
nivnoffy )Widio != c3( 	// Thyion t, rootjinlineBtoerN,rysLayo
		n = jQuery.vervry.:IE 6"eleteaffry: reblayo
	 n,

iload", , eery ) {
	#11048 jQuery.vervry.:IE 	var mhrinke = {
	/bodyenn	IE 7 mode	#12869 jQuery.SchEven: IE<8
uer	bodynstyl=.zoom = 1;LE,n}ry,}	
eQbodyr
jQuer root(h:
;

		etj)onlQQuerNQuerery ) {
	( s{
		vaeleks:nn	IE

Q:
;

		etj=hEivb}
;d 	}
ererinDivb}
ery,
	i}), 
ery.NQuerery ) {
	( s{
		vaeleks:nn	IE

elec=u matchj=hfrag ) {	}
r: : fa	uc );
	 ;
		}
	};
nit: fut	var m;
})(ndow.
: corbr: c	=u/(?:\{[\s\S]*\}|\[[\s\S]*\])$/r: rchEveDash	=u/([A-Z])/gt: function(i	}
	 coDataery.prototyp,/ocon, pvt /* I	}
	 coeUe ={
		v*/jq{nttype !		}
	}.acceptDataery.prE TnctionjQueryonq}e/ .fn jQu,u;

jootjQ

		/	}
	 coKey ,n		}
	}.eern,

 jQuery W
	// Th( shent vdDOM	nction( seJSooent( s atffr, comyloaca jQuIE6-7Query caery:GCooent( orefr, cceng used
 {
acrosse	}
	DOM-JSob/ HA", comis

jQo=ion of jQuted  jQuery {
		vDOM	nctionnatch(= {globaln		}
	}Evaach;eJSooent( r	consngor,uercti beinjuery ) {
( s	}
	oent( 	so	GColHANrccur automation,


y eted n=/ue

jQoru		}
	}.eted n:ed
	jquQuery {
		vchEve;

		/ ID n,

JSooent( s _veitsEvaach,elndodycrootjs =yiowgor,uer	}
	{
jQonte
	// The
osion ostypypaio (t v DOM	ncti	wtypenoevaach	omidn=/ue

jQorulem;

/	}
	 coKey ]n:ed
	j

/	}
	 coKey ]nch,i	}
	 coKey, 
ery.A
		vado	otjtoy	mtotyfunctthenewNDnatch( swpesiory	otj	vEuery	cons( "on
ery.oent( 	o}atc/ Tose iconsatcallnttype (!ijQueryvaach[id]uont(!pvt ", cvaach[id].iconin = jicons===etachEventrch,Qndoofofunct=, context, rersionjQueryonq}e/ pe = !u.fn = jQver{
		vDOM	nctionnatchator: u.fn =EID n,

leted elem;
/ The cmpeirrdcon jQverends up
	ied );globalnvaach	omiype ie

jQon = jQuidn=/d
	j

/	}
	 coKey ]n=nerre_dey pedIds.pop( comp		}
	}.guid++onquenction( selidn=/u	}
	 coKey, m;

		// type != {
	

/ds;ery.fn ry.A
		vaeero
e = 		}
	}Emeta	cons( "pla	ieJSooent( s wpesion ooent( 	jQuer_syrertjQ z
se}
e = JSON.ntext,if

y eted 

/ds;e=/ue

jQoru{} :erj	vJSON: 		}
	}.nw.de}ers}	
ery.Auuoent( icHANDLEtor, conte		}
	}.	consnery,
	iompa key/jqueripair;u;

jQg )s
ery.sh=yiownerpotypovecoon( s	}
	rootjQuervaach	otype ondo, efunct=, cooent( "compondo, efunct=, cofn = jQu"versionyion ov		n = jQueted 

/ds;e=/		}
	}.eetend(eeted 

/ds;, functionquenction( seleted 

/ds;.	cons=/		}
	}.eetend(eeted 

/ds;.ocon, functionquers}	
e;

jootjQn=neted 

/ds;, 
ery.		}
	}Eocon( cedrstor}
	}; a cosioniouoent( iy,s,
	 on ooent( 's/u	}
	 cordcon jry catjQn}; o eer	( s{
		vakey jqueisjQutabetw encu	}
	 cordconn( se jQr-chEvent
 uerdcon./ type !ov		n = jQtype !;

jootjQ.	cons, compl;

jootjQ.	conser{}on	,}	
eQ;

jootjQn=n;

jootjQ.	cononq}e/ pe = 	cons!==etachEventr, comp;

jootjQ[u		}
	}.etyplueryu functis;e=/	cononq}e/ uerC: funery._ototcaoverted-to-etypl ( senon-caoverted 	cons used
	jqfuncs
ery.Iryx acons used
	jqwnt y.prototy	otype ondo, efunct=, context, rersi
y.fn FctionTr{
( sngnduas-ing used
tyrdcon jQr )Tet;

jootjQ[ufunctQonlQQuerTQs		fg us	}
|tachEventr used
tyrdcon jQtype  be	j= jQuerd
	jtjQQuerTr{
( sngnduo}
	{oypluerytr used
ty
n,jjQuTet;

jootjQ[u		}
	}.etyplueryu functis;onquers}nction( sejQuTet;

jootjQ;he curntext, retd )t( "onload"u	}
	 coRjQuerDataery.prototyp,/ov		n = jtype !		}
	}.acceptDataery.prE TnctionjQueryonq}e/ .fn ;

jootjQ
orQueris

jQo=ion of jQuted  jQuery S,r 		}
	}.	cons	,

mtotyih selctt( 
y eted n=/ue

jQoru		}
	}.eted n:ed
	jquomidn=/ue

jQorulem;

		}
	}.eern,

 ]n:e		}
	}.eern,

;	
ery.I elem: cnstelndodycnoevaachrentryjery.pr
jQoent( ,elem: cnstno
ery.purro
tyihEvon(inuore		type != {
	

/ds;ery.fn jQueryonq}e/ pe = functis{	
eQ;

jootjQn=nov		?neted 

/ds;n:eeted 

/ds;.oconn,
m;type ;

jootjQnd
	jtjQQuerSchEvenosion on =ry: c	sesionion( mpletefuncsjery.	conskey	onlo		// !		}
	}.ueAion ((functis;

		// Huer	r{
(: cstplete(t v key b ftotytoy	mcnenuf jof 
y bery ) ntypyr, ;

jootjQnd
	jselecfunct= [ufunctQonjquuenction( jselecry.sp
	tuo}
	{oypl	{orytrversjQu	byrry: csEuasion,v key otype = {ry: csErootjs/ elecfunct= 		}
	}.etyplueryu functim;
	 elyi ) ntypyr, ;

jootjQnd
	jseleccfunct= [ufunctQonjquu	/nction( selectfunct= ersiodp
	t(" "on( sel g used
	jquenction( selery.I ejntyp"aed
	n sion onfskey	... selery.Wninodconsngyr,ootjQ {
cndow.d,=via ("key",
jjqu") nignauereh, el	
	jkey	{
	// beHcaoverted ntextypluery. selery.SThe cmpe: cnstno wayontete// _how_,v key oad
	dd c,

jQuer selery._ototpla	iekey ( selHypluery key.	#12786 selery.Thcti
	// ructopenjQ z
eon osion of jQuery paio. selefunct= ersiorsicat( 		}
	}.map(eotyp,/		}
	}.etyplueryf) ;;	jqu

tjQQit= ersiotor: jery,
	init: function( seldey peu;

jootjQ[ufuncy ) ];	jqu

tjQQry.I elem: cnstse iconslefte	ied );cotjQ
owNDwry bntexon(inuetjQQry.( selht		}
	{otjQnoent( iyt mafuuery	esw.oyon, elyion ov		? !ueE

	cDatavent( (;

jootjQoT: !		}
	}.ueE

	cvent( (;

jootjQoT) sion,jjQuery;LE,n}ry,}	s}	
ery.S,r 		}
	}.	cons	,

mtotyih selctt( 
ytype !ov		n = jQdey peueted 

/ds;.oconn,
m;oadDuery:	esw.oyomplee root {otjQnuasion,thecu	}
	 cordconnoent( 	jQuerh
	ib encon oouctoth;

	lefte	iei

		type !ueE

	cDatavent( ( = {
	

/ds;eryrutotytor, co;ry,}	s}	
ery.Desw.oyomplevaach	otype ie

jQon = jQ		}
	}.eent Dataer[ry.prE;,  {
		v;	
ery.Ue =,
y peuwpesiy	var mat"n,

lern,


	, e`vaach`cnstsetca leted uoer isWeted u(#10080;

v* jsh;
t eqeqeq:Qy,
	i	*/

jnctionuQuer		}
	}.t, rootjdey peEion,

	onteotjQn!=neted .leted uey.fn r* jsh;
t eqeqeq:Q {
		*/

Qdey peueted 

/ds;;	
ery.Wninoauerern =enil
,ujQuers}nction( seeted 

/ds;e=/ery,
	i}ad",		}
	}.eetend(heeeted :ery 	
ery.T
	/nf jQu	varery ) {
	(hro: u.caEveoad",exceptjQuery eyou
,uerctiy

	h( soreaeern,

  used
	ieTo( s	}
m. snoData:n( se"siolet"e curre se"embed"e curre severBanoaueroent( s except"n,

Flash	( be = hent vdlern,


)Queooent( ":Ejcls,
:D27CDB6E-AE6D-11cf-96B8-444553540000"pe = {
/ Thata:nfn = jQuery.pruey.fn  used
	jquedmpleted )ru		}
	}.eted [ry.pr[		}
	}.eern,

] ]n:ed
	j

		}
	}.eern,

 ];
beructor: ! used", cueE

	cDatavent( ( unction(  = {
data:nfn = jQuery.prototyp,/oconr)jsionnit: fui	}
	 coDataery.prototyp,/oconion(  = {
rjQuerData:nfn = jQuery.prototypr)jsionnit: fui	}
	 coRjQuerDataery.prototypion(  = {
fn F	vae	}
	 cor jQuouct. s_data:nfn = jQuery.prototyp,/oconr)jsionnit: fui	}
	 coDataery.prototyp,/ocon,  {
		v;	  = {
_rjQuerData:nfn = jQuery.prototypr)jsionnit: fui	}
	 coRjQuerDataery.prototyp,  {
		v;	  = {
ry.Aj	ethodjery.	e, rm =	otjeryx DOM	ncti	cHANhent vdnstr,conreern,


	acceptData:nfn = jQuery.pruey.fn oadDutsetcsery	cons( "non- elem;
/oaca jQui		
	// setcbeHcelere  (#8335)., etype jquedmpleted )rsion of jQuTndow!, c1)rsion of jQuTndow!, c9trutotytor, conent versiT,
m;.fn noDatad
	jquedmpleNtypy= j		}
	}.noData[ion of jQuery being used
	jquQonlQQuernction(ccepty	consuasion,omplewfn =y.prototy;	rejtypructoHANDLEEvenad", co
beructor: noDatad|| noDatad!ry.protorsion ofg);
		}
	};

jclassid")he cunoData;	j} })on,		}
	}.nn.eetend(heedata:nfn = jQuerkey,rjquerynction.fn =		}sototyp,y.QQnatad
	ery,,tjQQit= ersio	 used
	;

jsion,
m;ry.S.procoreere= jQutanfs.	consbasion,

	thwvers		}
	}.accesse severso iery em;
/lem;j usvant	be HAior our maves,
m;ry.Gejs =yivr, cosurrtype key ===etachEventr, comp;type ;

jootjQuer)jsion,j	cons=/		}
	}.dataery.prE eint( "type jquedmpleted )=, c1)rsi!		}
	}._dataery.prot"ry ) d
		}s"cQu)jsion,jQu		}sd
	jquedctiry ) {
n( sel text, rootjQu		}s.uery ) {
f jQuery belefunct= u		}sy ).funceint( "elyi ) ntyp.iersiOf("data-")he curen = jQutotcfunct= 		}
	}.etyplueryu funccd
	jqu5)E eint( "n,j	con
		}ery.prototyp,/ocon

functQuw.d
	initW( sel g used			}
	}._dataery.prot"ry ) d
		}s",  {
		v;	 sed
	jque
otytor, conocon	var}nlQQuerSejs chEvent((r, cosurrtype ondo, ekey ===eooent( "crutotytor, con;

joeotj(	init: function(r		}
	}.dataeruhio,Qkey ;;	jqu
)onquertjQsion,

uery,
	intor, context,jtjQQuerSejs , eljquerlQQ	;

joeotj(	init: function(r		}
	}.dataeruhio,Qkey,rjqueryn;	jqu
) :jtjQQuerGejs , eljquerlQQ	uerTr{
( snere_ anyoi	}
	 coctostor}
		cons	ctiosio	 used? 	con
		}ery.protkey,r		}
	}.dataery.pr,Qkey ; be:uery,
	i = {
rjQuerData:nfn = jQuerkey ; sionnit: fu;

joeotj(	init: function(		}
	}.rjQuerDataeruhio,Qkey ;;	jq};;	j} })on( "onload"	con
		}ery.protkey,roconr)jsio/m;Ifuseth;

	oad
// HAoi	}
	 coct,r	r{
( snere_ any
 uerdcon pleted );	// 5rdcon-*	a
		}
	};/  e = 	cons===etachEventrch,jquedmpleted )=, c1);

		//.fn ntypy codata-" + key.ructor: d"chEveDashot"-$1"j)rtong used
	jqonlQQnatad
	jquedE,ndow.detachEventE eint(type ondo, encons===eontext, rersion,tryjsionQQnatad
	ncons===eo {
	yrru {
		rrent 	ncons===eoent vyrruy,
	i	rrent 	ncons===eoery,yrrujQuer:jselecry.{
		vcaoverth( soujQmber _veit ,oegototyhang) (: cstpletjselec+ncons+
jQu.detdcons? +ncons:jselecrbr: cery,
	ioconr)jru		}
	}.ry ) JSON	ioconr)j:jselec	ocon	var 	dcaEve(nrynct

tjQQry.M, com.de we Tht		}
	oconrso i.:ngototyhang)t{f jQr

(r		}
	}.dataery.protkey,roconr)eint(enction( selnatad
	tachEventLE,n}he curntext, ocon	vd", coetachs(abeotjQnoent( in,

l

	venss( "onload"ueE

	cDatavent( ( obj Query.fn ntyp;E,
jQuerntypyr, obj Quer
QQuer_vempleeub
	jrdconnoent( /uery

	c,ompleexiv jQyi
	st	// y

	c
elyi ) ntypy===eodcon"D= j		}
	}.ueE

	cvent( (noen[ntyp;eryrutotytxon(inueLE,n}helyi ) ntypy!, cotvJSON"crutotytor, conent versiT,e curntext, tor: j},		}
	}.eetend(heequeue:nfn = jQuery.protDLE,nnoconr)jsion.fn queueeint(type y.pruey.fn 	Qndow= e ondow|| "fx"cru+
jqueue";	.QQqueuet= 		}
	}._dataery.prot vers)	// The cSpatchup.	equeuetbyuuerjQuer(ut quick {
if.pr
jQ
jQ

	coagow.k{

er  e = 	consQuery bery ) !queuetomp		}
	}.ueAion (iconien = jQutoqueuet= 		}
	}._dataery.prot ver, 		}
	}.makeAion (iconienonjquuenction( jQutoqueueo{it: foconion( sed
	jque
tytor, conqueuetomp[;onquers}= {
dequeue:nfn = jQuery.protDLE,r, comp; jQuerondow|| "fx";
ion.fn queuet= 		}
	}.queueery.protDLE,r,

		nt vrtLtjQuern,queueolor: jQuer	 elemqueueodQuery,Quer	hw.kst= 		}
	}._queueHw.ksery.protDLE,r,

		nnctor: 	init: function(r		}
	}.dequeueery.protDLE,r,	var 	n,
m;ry.I elem fx queuet
jQdequeued, alway/

jQuer(mpleexogressvsen(inelnt(type  elery:, elrogress"trutotyooelemqueueodQuery,;
		nt vrtLtjQue--;	jqertjQtype fn/) si/ The cyd\Labexogressvsen(inelh( sxt, ry.:lem fx queuetpletebeore		vaontautomation,

	dequeuedomp;type ;ndow.detafx rersion,jqueueoundQuery:, elrogress"tr;	jqu

tjQQry.celerhup. = {f st queuetrotp cootjQuery
Qdey peuhw.ks.rotp;otyooersion,
y.protoers,nhw.kst)onquertjQtype !t vrtLtjQuer= jhw.kst)rsion,hw.ks.y

	ccorro()onquers}= {
uernctoi	}
nd con,

iub
	jrype um: jQuu-ig)n = {etaa queueHw.ksQoent( ,eorEload", co}
	{ur, coo, e
	_queueHw.ks:nfn = jQuery.protDLE,r, comp.fn key =tDLE,r+
jqueueHw.ks";
beructor:		}
	}._dataery.protkey ; omp		}
	}._dataery.protkey,rsion,y

	cle		}
	}.Core_vers(" nonj	emory")core
	init: function(r		}
	}._rjQuerDataery.protDLE,r+
jqueue"tr;	jqur		}
	}._rjQuerDataery.protkey ;;	jqu
)	jq};;	j} })on(		}
	}.nn.eetend(heequeue:nfn = jQuerDLE,nnoconr)jsion.fn y )tetj=h2eint(type ondo, eQndow!, context, rersion,natad
	Qndom;n 	Qndow= "fx";
		nt )tet--;	jqertjQtype uery,
	intor, con< y )tetjrutotytor, con		}
	}.queueer;

jsiootDLE,r,	varertjQsion,

	cons===etachEventr?lQQ	;

jj:jsel;

joeotj(	init: function(r.fn queuet= 		}
	}.queueeruhio,QDLE,nnoconr)eint( "oEnr m.de abhw.kstery.pr
jQqueue	jqur		}
	}._queueHw.kseruhio,QDLE,E eint( "type ;ndow.detafx r= jqueueo0] !ry:, elrogress"trutotyo(r		}
	}.dequeueeruhio,QDLE,E ei sed
	jquev;	  = 
dequeue:nfn = jQuerDLE,r, compnit: fu;

joeotj(	init: function(		}
	}.dequeueeruhio,QDLE,E ei sev;	  = 
verBaryve ffey beingplurin	by Cl;
t Helfe}sototypep rm ssjQu./ 
		t versi
		vdnignals.{
	/iersi.php/2009/07/jq}
	}-deyay/ 
delay:nfn = jQuerDiyp,  LE,r, comp;inct= 		}
	}.fx ? 		}
	}.fxry.ped or;inct]uont;inct:t;inc;omp; jQuerondow|| "fx";
ionnit: fu;

joqueueeruLE,nnsed
	jquerners,nhw.kst)ction(.fn ;inco
		}
y )Tinco
	erners,n;inct ei sehw.ks.rotpr: 	init: function(rcelerTinco
	er;inco
		,	var 	n, sev;	  = 
celerQueue:nfn = jQuerDLE,r, compnit: fu;

joqueueeruLE,w|| "fx",p[; v;	  = 
verqueratueomfn = bsolved wpesiqueuesiompa certa	ieuLE,
,uercde l

	ve  (fx i co}
	uLE,wbyr,

	con;

ueomfn leted );
		}uLE,nnobj Query .fn ;mp,otytxou {	}
1h, eldefert= 		}
	}.DeferronQe cio	 use) {
	
	;

j,tjQQit= ;

jootjQuersio	resolver: 	init: function(ruQuery( --xou {	ien = jQutodefer.resolveWtyp(  use) {
,r[ry.pr) {
	]E ei sed
	jqueeint(type ondo, eQndow!, context, rersion,obj 
	Qndom;n 	Qndow= tachEventLE,n}hep; jQuerondow|| "fx";
ion	initryunction( se;mpt= 		}
	}._dataery.pr) {
t HAN,tDLE,r+
jqueueHw.ks"E ei setype omptch,Qmp.y

	cen = jQutxou {++onquse;mp.y

	cconl(dresolve ;;LE,n}ry,}	s	resolve()onqusion,

	

er.peomfn (robj Q;	j} })on.fn nodeHw.k, brreHw.k,urnclass	=u/[\t\r\n\f]/eeryrsion,

=u/\r/eeryrt	insoad",=//^(?: );
	| match|verscdea|button|oent( )$/i,urnclickoad",=//^(?:a|cdea)$/i,urnuseD

	cone=//^(?:etachEv|oad", co)$/i,uruerS,ndow.detacr}
		}
	}.t, rootjuerS,ndow.detac,uruerS,nI);
	 ;
		}
	}.t, rootj );
	on(		}
	}.nn.eetend(heea
		leted );
		}otyp,/jquerynctionor, con		}
	}.accesseruhio,Q		}
	}.a
		,}otyp,/jquer,
uery,
	intor, contexton(  = {
rjQuerA
		leted );
		}otyp ; sionnit: fu;

joeotj(	init: function(		}
	}.rjQuer
		}eruhio,Qfunctionqueon(  = {
 useleted );
		}otyp,/jquerynctionor, con		}
	}.accesseruhio,Q		}
	}. use,}otyp,/jquer,
uery,
	intor, contexton(  = {
rjQuerPuseleted );
		}otypynctionfunct= 		}
	}. useFix

functQu|| ntyp;E,nnit: fu;

joeotj(	init: function(uer	r{/caEveNhent vs	{orys wperQuIE balkst(such ver bQuefre_ve used
tyro, leted )QuertryjsionQQ;

js
functQueetachEventLE,ndodey peu;

j[ufunctQonjqu	dcaEve(nrynct

queon(  = {
onlClass:.ped
	jquerjquerynction: co:lassos,ty.prot{ur,o:lazz,Q	,tjQQit= ersio	or,t= ;

jootjQuersio	 usceelemctndo, ejquery , context, r= jQueueeint(type 		}
	}.uee current jqueryncrutotytor, con;

joeotj(	init: fu j Query be		}
	}	}pr
jQ)coreClasst jquerrsion,
uhio,Q	,u;

jnclassNtypw) ;;	jqu
)onquertjQyion ousceelenction(uerT
	/disj"onload"em: cnstery._ )tetjcar/ressibility (re) 
jQuer lass)Quer:lassosw= e jquery|| ""j)rmuEve(nerre_rnot= {
	ot	consteint( text, rootjQuer {
f jQuery be used
	;

js HANn = jQcur 
	jquedmpleted )=, c1)rsie jquedclassNtypw?ry bery:, " + jquedclassNtypw+:, " ).ructor: d"class,:, " )j:jselec, "jsele eint( "type cur rutotyo(r	 n,dLE,ndo
	init: f(:lazzn=nelassos[j++])f) sion,jeitype cur.iersiOf(:, " + :lazzn+:, " )tjQren = jQutotccur += :lazzn+:, ".d
	initW( sel g used	jquedclassNtypwer		}
	}.trime cur reint( "DLE,n}ry,}nlQQ being uhio;	j = {
rjQuerClass:.ped
	jquerjquerynction: co:lassos,ty.prot{ur,o:lazz,Q	,tjQQit= ersio	or,t= ;

jootjQuersio	 usceelemcuery,
	intor, cone cureompondo, ejquery , context, r= jQueueeint(type 		}
	}.uee current jqueryncrutotytor, con;

joeotj(	init: fu j Query be		}
	}	}pr
jQ)crjQuerClasst jquerrsion,
uhio,Q	,u;

jnclassNtypw) ;;	jqu
)onquerjQyion ousceelenction(:lassosw= e jquery|| ""j)rmuEve(nerre_rnot= {
	ot	consteint( text, rootjQuer {
f jQuery be used
	;

js HANn = jQry.Thctiex/ressiad"ue"em: cery._ )tetjcar/ressibility (re) oreClass) = jQcur 
	jquedmpleted )=, c1)rsie jquedclassNtypw?ry bery:, " + jquedclassNtypw+:, " ).ructor: d"class,:, " )j:jselec,"jsele eint( "type cur rutotyo(r	 n,dLE,ndo
	init: f(:lazzn=nelassos[j++])f) sion,jei/m;RjQuer(*ion*sneryaccenion,jei	init: fcur.iersiOf(:, " + :lazzn+:, " )t>=Qren = jQutotccur =fcur.ructor: d, " + :lazzn+:, ",:, " ).d
	initW( sel g used	jquedclassNtypwerjquery?r		}
	}.trime cur rt:ta"ry.QQ"DLE,n}ry,}nlQQ being uhio;	j = {
toggliClass:.ped
	jquerjquer,y.tateVal Query .fn ; jQuerondo, ejquereint(type ondo, e.tateVal  , cobrreean"rch,Qndow===eontext, rersion,nit: futtrenVal ?u;

jnoreClasst jquer ;uerohiocrjQuerClasst jquert)onquertjQtype 		}
	}.uee current jqueryncrutotytor, con;

joeotj(	init: fu i Query be		}
	}	}pr
jQ)ctoggliClasst jquerrsion,uhio,Qi,u;

jnclassNtyp,y.tateVal),y.tateVal Q;	jqu
)onquertjQnit: fu;

joeotj(	init: function(type ;ndow.detantext, rersion,jem;ntggli ierividucoeclass	funcs
e	on: co:lassNtyp,y.QQQQit= ersio	jQ mafuer		}
	}	}pr
jQ)rsio	jQ:lassNtypswerjquerrmuEve(nerre_rnot= {
	ot	consteint( 
	init: f(:lassNtypwer:lassNtyps[{
f j])f) sion,je coetach
leted:lassNtypwgfunn,jry: c	sesionion(lis	sioyThyion t) fonloClasst classNtypw) ; = jQutott) forjQuerClasst classNtypw).d
	ini/nction( selectt) fooreClasst classNtypw).d
	ini/y.QQ"DLion(uerTtggli wholeeclass	func
ini/nctiontype ;ndow.deterre_d {
achEventeompondo  , cobrreean"rnction(ruQuer;

jnclassNtypw) sion,je costor} classNtypwif(se	sioyTh		}
	}._dataeruhio,Q"__classNtyp__",u;

jnclassNtypw);y.QQ"DLion(;ry.I elem jQuery.:/ Toaeclass	funceorE_version,tor, cooent vyh, el	
	jmpes

jQuer(mplewholeeclassfunce(i elem: coad
uer,
on osbuer(LEved it). selery.Omplewfn =blorebbhfunwpniovecooad
xt, iousctosEved (eryanyth;

)h, el	
	jentlorebbhfun( s	}
	r

	cestpleteifuseth;

	oad
stor}
.ionQQ;

jdclassNtypwer;

jdclassNtypwompjquery , cy,
	i	? ""j: 		}
	}._dataeruhio,Q"__classNtyp__"ot	cona"ry.QQ

queon(  = {
nloClassleted );
		}sad", orynction: co:lassNtypy co " + sad", ory+:, ",tjQQit= ersio	ot= ;

jootjQuery.Qtext, rootjQu {
f jQuery buQuer;

jy ).fpleted )=, c1)rsieo " + ;

jy ).classNtypw+:, ").ructor: "class,:, ").iersiOf(:classNtypw) >=Qren = jQutntext, tor: jE,n}ry,}nlQQ being ent vers},e/ .fl:.ped
	jquerjquerynction: cojQu,uhw.ks,/uee currenrsio	 used
	;

jsion,
m;type !iery,
	intor, conQuery buQuery.pruey.fn 		hw.kst= 		}
	}.jquHw.ks[ion ofondo ] omp		}
	}.jquHw.ks[ion of jQuery being used
	jquQonlQQ buQuerhw.kstrsi"get"yr, hw.kstrsi(jQuTethw.ks.getery.prot", ele" b)s!==etachEventr, compQutntext, r );j		e"DLion(;jQuTeton ofjquereint(utntext, tndo, e be	j=etantext, r?ion,je cohent vdmostjcarmue stplete{orysompQutnte.ructor: "ntext,,
jQ)r:jselecry.hent vd{orys wperQujquerynstsull/tachE,g usQmberompQutnte	j= jQuer? ""j: r );j		ee
otytor, coonquertjQtee curren em		}
	}.uee current jquert)ontjQnit: fu;

joeotj(	init: fu i Query b: cojqu	// Thyion ;

jo jQuTndow!, c1)) sion,jjQuery;LE,n}r/ Thyion tee curren nction(r.flwerjquerrsion,
uhio,Qi,r		}
	}	}pr
jQ)fjqu() ;;	jqu
nction( sele.flwerjquer;LE,n}r/ ThuerTrmatcsull/tachEventrad
a"rvcaoverthsQmberTo( sstpletjselyion .flwe= jQuerd
	jsele.flwera"ry.QQ
nctiontype ;ndo, ejqus===eoermber"rd
	jsele.flw+era"ry.QQ
nctiontype 		}
	}.ueAion ((val Qud
	jsele.flwer		}
	}.map(.flnnsed
	jqu erjquerynction(rynit: fujquery , jQuer? ""j: jquery+ta"ry.QQ"Dr;	jqu

tjQQhw.kst= 		}
	}.jquHw.ks[i;

joondo ] omp		}
	}.jquHw.ks[i;

jo jQuery being used
	jquQonlQQ ry.I eTht	load", cuachEvent,uentlbbhfun( snselcQiy )torejselyion !hw.kstuery(" mt"yr, hw.kst	conhw.ks.reteruhio,Q.flnnj, ele" be.dettachEventr, compQu;

jojquery cjqu	/.QQ

queon(   })on(		}
	}.eetend(heejquHw.ks:n( se : jQu:n( seruer:nfn = jQuery.pruey.fn QQuerUe = used
	a
		}
	};	loariejqu(#6932,	#12072)
e	on: co.flwer		}
	}.ngnd.a
		ery.prot", ele" b;
n(rynit: fujqu != jQuerrion(ryjqu : used	jquedvers	/.QQ

quersiosad", :n( seruer:nfn = jQuery.pruey.fn QQ: co.fler,y : jQursio	jQ : jQuereton of : jQue,y.QQQQiersireton ofoad", coIersirsio	jQ nQo=ion of;ndow.detanad", -, e"	coniersir< ersio	jQr, cosf. , elrujQuer:nstrsio	jQmaxf. , elruiersir+c1):( : jQueootjQuersio	QQit= iersir< errion(ryQmaxf:jselec	, elruiersir:,dLEfn QQuerLw.de(hroughctlloo}
	 ore_verg : jQuefn QQtext, rootjQmax {
f jQuery bel : jQuu=g : jQues HANn jselecry.oldIE ,oegototupdvt{	 ore_verg	fion  sel rry )T(#2551)sioyThyion (g : jQufoad", co	coniw.detiersirn =  jQutotcoadDuery:nit: fuo: jQuero}atcar	 atch, ele	vae	yx atch, ele	:  = {
 jQutotcer		}
	}.t, rootj : Dtch, ele?ctac jQufatch, ele:( : jQufg);
		}
	};

jatch, el")he cunQuerd
=  jQutotc(ctac jQufe root

jQfatch, eleuery		}
	}.noQuery (g : jQufe root

jQot"	:  = {
"cQu)j;

		// Hl	
	jquer = {ryversiojjqueri	,

the( : jQu	// Hl	jquery c		}
	}	} : jQuu)fjqu();		// Hl	
	jWecquery:natchan sion o	,

, eload", 
	// Hl	yion , eln = jQutotcnit: fujquer.d
	initW(	// Hl	
	jMhEve-eted )s:nit: fuan sion 	// Hl	jquerso{it: fjqueryn;	jquni/y.QQ"DLion(cnit: fujquero;	jqueh,fn =ser:nfn = jQuery.pr,rjquerynction(r: co : jQuSet,y : jQursio	jQ : jQuereton of : jQue,y.QQQQr, cosf. 		}
	}.makeAion (rjquerynrsio	QQit=  : jQueootjQueeint( 
	init: function( sell : jQuu=g : jQues HANn ioyThyion ( : jQufoad", co	em		}
	}.unAion (r		}
	}	 : jQu)fjqu();
r, cosf) >=Qr) ; = jQutot : jQuSet = tor: jE,nni/y.QQ"DLion(c
	jeorc =blowsueTo( sbe HAefype is	 comylwpesinon-muEvei

	jqueri_syretlQQ buQuer! : jQuSet ; = jQutoon ofoad", coIersi = -1ry.QQ"DLE,ncnit: fujquero;	jque
quers}= {
a
		leted );
		}y.prototyp,/jquerynction: cohw.ks,/jQu,	jqunted )=	jquedmpleted n,
m;ry.query:g);/s,n	a
		}
	};s
osioers,ncarmry.:( sea
		}
	};	nctio
m;type !y.pru|| nted );
		}u|| nted );
		8u|| nted );
		2crutotytor, coonquertjQuerFnre_verh( sxt.dewpesia
		}
	};s
aon,usedy	var mat
t(type ondo, ejquedE,ndow.detacw.deterre_d {
achEventerutotytor, con		}
	}.xt.d	}y.prototyp,/jquerynonquertjQueryleca
		}
	};s
aon,lg us{orytjQuerGrab:nacessaryohw.kntyp, el
jQdefvent
 lyi ) nTndow!, c1)uery		}
	}.isXMLDocery.prE Tnctionefunct= ersiotong used
	jqon	QQhw.kst= 		}
	}.a
		Hw.ks[ifunctQu||
totcer		}
	}.ex/rrmuEve.brreery,
	iotypync? brreHw.ke:ueodeHw.kt)onquertjQtype jquery!==etachEventr, cojselyion .flery , cjQuerd
	jsele		}
	}.rjQuer
		}ery.prototypion(y.QQ
nctiontype hw.kstrsi"set"yr, hw.kstrsi(jQuTethw.ks.setery.prot.fler,yotypio)s!==etachEventr, compQuntext, r );j	jqu
nction( seleon ofoandow.detachEvent, jquery+ta" b;
n(rynit: fujquer;LE,n}r/ T
nctiontype hw.kstrsi"get"yr, hw.kstrsi(jQuTethw.ks.getery.prototypio)s!==ejQuerd
	jselntext, r );j	jq
nction( seljQuTet		}
	}.ngnd.a
		ery.prototypion(y.QQry.Non- ootjenn	a
		}
	};s
ntext, ery,,ewNDnselcQ z
onte ndefvent
 llntext, r )y , jQuer?
n(rytachEventr:
n(rynit;
quers}= {
rjQuerA
		leted );
		}y.pr,rjquerynction.fn ntyp;
ueopNtyp,y.QQit= ersio	a
		Ntypswerjquerr= jQueuermuEve(nerre_rnot= {
	otn,
m;type a
		Ntypswch,jquedmpleted )=, c1);

	( 
	init: f(funct= u		}Ntyps[i++])f) sion,jueopNtypt= 		}
	}. useFix

functQu|| ntyp;Eion(c
	jBrreean	a
		}
	};s
ueryr.procorr matmry.:(#10870)lQQ buQuer		}
	}.ex/rrmuEve.brreery,
	iotypync) sion,je coSet lerryspvena

	 used
tyr
jQy,
	i ioyThyion uerS,nI);
	 ch,uerS,ndow.detacruerynuseD

	conery,
	iotypync) sion,je	d
	j

ueopNtyptQueeent versi	uery.SchEven: IE<9rsi	uery.Also.celerh,

	con rachEv/,

	coneted )
);(eryapueoprivt{)sioyTh/nction( selectd
	j

		}
	}.etyplueryu ",

	con-" + functis;e= jQutotcd
	j

ueopNtyptQueeent versi	ueDLion(c
	jS,r #9699"n,

lerlan {jQu of.pr
jQapueoeted(y )toreb	ctio,jmpes

jQueal)sioyT/nction( selec		}
	}.a
			}y.prototyp,/a" b;
n(ryDLion(cjquedrjQuerA
		detachEuerS,ndow.detacr? funct:
ueopNtypt);	jque
quers}= {
a
		Hw.ks:n( seondo:n( serser:nfn = jQuery.pr,rjquerynction(r		// !		}
	}.t, rootjrprotVquery= jQueuew.detarprotQu= j		}
	}.noQuery (y.prot" elem;)c) sion,je coSettorebmpepondo ( "or.prot	button
	fion ofesQueuewrry )s ofesQueuewnn	IE6-9rsi	uery.Rry )TQueuewntea

	coneihEveryfondo _syret
	fion Queuewduplete{ matjQu	// Hl: co.flweron ofjquereijQutoon ofoandow.detachEjcuery, jqueryn;	jquniyion .flw) sion,je	d
	jojquery cjqu	/.QQl g used	nit: fujquer.d
	in}	jque
quers}= {
 useFix:n( se"n,
":EjhtmlF,
"e se"class":EjclassNtyp"(  = {
 useleted );
		}y.prototyp,/jquerynction: cojQu,uhw.ks,/notxml,	jqunted )=	jquedmpleted n,
m;ry.query:g);/s,n	 used
	ieToosioers,ncarmry.:( sea
		}
	};	nctio
m;type !y.pru|| nted );
		}u|| nted );
		8u|| nted );
		2crutotytor, coonquertjQnotxmlt= eTndow!, c1)uery		}
	}.isXMLDocery.prE n,
m;type notxmltnction(uerFix funct( sea
	etedhw.ksionefunct= 		}
	}. useFix

functQu|| ntyp;E,nQhw.kst= 		}
	}. useHw.ks[ifunctQonquertjQtype jquery!==etachEventr, coed	nit: fuhw.kstrsi"set"yr, hw.kstrsi(jQuTethw.ks.setery.prot.fler,yotypio)s!==etachEventr?
n(rynitr:
n(ry(ed
	j

functQueejquert)ontjQ
nction( seljQu: fuhw.kstrsi"get"yr, hw.kstrsi(jQuTethw.ks.getery.prototypio)s!==ejQuer?
n(rynitr:
n(ryd
	j

functQ;
quers}= {
 useHw.ks:n( seoabIersi:n( seruer:nfn = jQuery.pruey.fn QQueron of;abIersi ,oegototalway/

jt: fu;
eelerry )ejquertwpesii.:/ Tototb encfnorent ctosetlQQ b
		t versifluid usnt( .org/blog/2008/01/09/uerjQue-y )tore-( s- bQuefre-;abiersi-jquero-otyp-javascript/lQQ b
		Ue = used
	a
		}
	};	loariejqu(#12072)
e	on: co;abiersiwer		}
	}.ngnd.a
		ery.prot";abiersi" reint( "
jt: fu;abiersiwrion(ryry ) Ile( ;abiersi, 10 )j:jselecrt	insoad"ery,
	ijquedmpleNtypyt	connclickoad"ery,
	ijquedmpleNtypyt	ch,jqued.fn rrion(ryQ0f:jselec	-1;	jque
quers} })on(
		Hw.kstery.brreean	a
		}
	};s
brreHw.ke=y.fnser:nfn = jQuery.pr,rjquerototypr)jsionyion .flery , cy,
	i	nction(uerRjQuer(brreean	a
		}
	};s	wpesiy )r
jQy,
	i ioy		}
	}.rjQuer
		}ery.prototypion( T
nctiontype uerS,nI);
	 ch,uerS,ndow.detacruerynuseD

	conery,
	iotypync) sion,ry.IE<8:natcs ofes* used
ty*	func
inion ofoandow.detachE!uerS,ndow.detacr= j		}
	}. useFix

functQu|| ntypototypion(y.Qry.Ue =,

	con rachEvt( se,

	coneted )
);	,

,ldIEtjQ
nction( seld
	j

		}
	}.etyplueryu ",

	con-" + functis;e=ed
	j

functQueetor: jE,}nlQQ being ntyp;E,} };(		}
	}.eotj(r		}
	}.ex/rrmuEve.brreesourcermuEve(n/\w+/g )nnsed
	jqueriototypr)jsio: cog )tetj=h		}
	}.ex/rra
		Hent v

functQu|| 		}
	}.ngnd.a
		n(y.		}
	}.ex/rra
		Hent v

functQu= uerS,nI);
	 ch,uerS,ndow.detacruerynuseD

	conery,
	iotypyncrionted );
		}y.prototyp,/isXML Query b: cofnj=h		}
	}.ex/rra
		Hent v

functQ,
n(rynitr=/isXML rion(rytachEventr:
n(ry
v* jsh;
t eqeqeq:Qy,
	i	*/

n(ry(		}
	}.ex/rra
		Hent v

functQu= tachEvent)s!=jselec	g )tet	}y.prototyp,/isXML Qu?(	// Hl	ersiotong used
	jqf:jselec	ery,
	i	.		}
	}.ex/rra
		Hent v

functQu= fy;LE,nntext, r );j		}f:jseted );
		}y.prototyp,/isXML Query bnit: fuisXML rion(rtachEventr:
n(ryd
	j

		}
	}.etyplueryu ",

	con-" + functis;erion(ryersiotong used
	jqf:jselecery,
	i	}; })on(
		fix oldIE a
		sed
	ieT
type !uerS,nI);
	 ueryuerS,ndow.detacrQuery		}
	}.a
		Hw.ksojquery cery ser:nfn = jQuery.pr,rjquerototypr)jsionbuQuer		}
	}.noQuery (gy.prot" elem;ync) sion,joadDueg usednit: futoro}atcoandow.detaccnstelste jQdion(cjqued,

	conVquery cjquer;LE,n}nction( selery.Ue =eodeHw.ktif(EhEventr(#1954);,omplewfn =yandow.detaccnstEvennt( "
jt: fueodeHw.ktch,eodeHw.k.setery.prot.fler,yotypio;	jque
quers}	vd", coIE6/7 ,o,usedy	var muuerjQue/y )torebsare a
		}
	};s	wtypeg);/s,ndow.detac
type !uerS,ndow.detacrQuer
ery.Ue =pr
jQ	,

anyoa
		}
	};	nn	IE6/7
Qry.Thctifix;s
almostjovecyoIE6/7 issue	jeodeHw.kt cery ser:nfn = jQuery.pr,rjquerototypr)jsionb coSet 	}
	rootjQuer,

cndow.hator: a
		}
	};	nctiry b: cojQuTeton ofE,ndow.detac

jQu otypio;	jqutype !ret ; = jQuton ofoandow.detac

jQu

n(ry(jQuTeton ofownerDvent( "o,ndow.dow.detachEventE )
e	onr;	jqu

tjQQnte.vquery cjquerw+era"ryionb coB {
	rassoci {jQu wtypeclon;dry.pr) {
	bytelste jorebs,ndow.detacr(#9646)ry bnit: funtypy===eo, ele" ompjquery , cjquedE,ndow.detachEventE erion(rjquery:ion(rtachEvent;
quers}	v.		}
	}.ex/rra
		Hent v.idj=h		}
	}.ex/rra
		Hent v.funct= 		}
	}.ex/rra
		Hent v.coord 	}y.Qry.Sare a
		}
	};s	aon,ype tor )
);otypef

	c-stpleter, cosfwpesinotQdefvent
 lted );
		}y.prototyp,/isXML Query b: cor );j		enit: fuisXML rion(rtachEventr:
n(ry(jQuTeton ofE,ndow.detac

jQu otypiot	ch,nte.vquery!, co r?ion,jente.vquery:jselecery,
	i	}; .		}
	}.jquHw.ks.button
 cery uer:nfn = jQuery.prototypr)jsionb: cojQuTeton ofE,ndow.detac

jQu otypio;	jquntext, r )ych,nte.y.prototyr?
n(rynit.jquery:ion(rtachEvent;
que,ry ser:neodeHw.k.set
ueeint coSet le_ventediwoad",
jQy,
	ioosi
jQueals(#10429)
e coSettorebmo	r

	cestplete(hro:d
	n err,

ad
	n inealidjvquerlQ		}
	}.a
		Hw.ksole_ventediwoad", cery ser:nfn = jQuery.pr,rjquerototypr)jsionbeodeHw.k.setery.prot.flery===eoyrruy,
	i	rt.fler,yotypio;	jq}
ueeint coSet widio ( seheighth( sou( snery,
	iomp0oosir

	cestplet( Bug #8150 )
Qry.Thcti
jQ	,


jQuealsv.		}
	}.eotj([ "widio",:,height"AN,tsed
	jqueriototypr)jsioQ		}
	}.a
		Hw.ks

functQu= ( serser:nfn = jQuery.pr,rjquerynction(r		// .flery===eoyr; = jQutoon ofoandow.detachEvent, "ou( " ).d
	ininit: fujquer.d
	in}	jque
que;	i}), 

t
ry.Sare a
		}
	};s	requide abr.procorcaueron	IE

		t versimsdn.microsoft.{
	/en-us/libraryims536429%28VS.85%29.aspx
		// !		}
	}.t, rootj.fn NselcQ z
tr, coe
		tfn /src	 used
tyrshould
uerylem fu// seelcQ z
trURL:(#10299/#12915)v.		}
	}.eotj([ "tfn ",:,src"AN,tsed
	jqueriototypr)jsioQ		}
	}. useHw.ks[ifunctQu= ( seruer:nfn = jQuery.pruey.fn QQnit: fujquedE,ndow.detachEvent, 4io;	jque
que;	i}), 

t		// !		}
	}.t, rootjstyl=E)f{, 		}
	}.a
		Hw.ksostyl=E= ery uer:nfn = jQuery.pr	nction(uerRjt: futachEventr	ied );cojQuofir

	cestpletion(uerNote: IE , rus{orys csss used
	jqfuncs,	butE_versersr",
jQotong used
	jqion(uer.cssTcto,ro}atcwould
	esw.oyocojQuseeryitivity 	ieURL's,	lik.pin "_vergr/ HA"
 QQnit: fujquedstyl=.cssTctoromptachEvent;
que,ry ser:nfn = jQuery.pr,rjquerynction(nit: fu(ujquedstyl=.cssTctor cjquerw+/a" b;
n(ers}	vd", coSafari mis-reroots ofesa

	coneoad", co	 used
tyroryxt, : jQu	ry.Accessorebmpepe root's oad", coIersi  used
tyrfix;s
itt		// !		}
	}.t, rootj : eted )
);)f{, 		}
	}. useHw.ksfoad", co	emery uer:nfn = jQuery.pr	nction(: coe root eton ofe root

jQ	// Thyion e root ) sion,ju rootfoad", coIersi;Eion(c
	jM, com.de o}atcittelstefuncs	wtype	:  = {
s,	re) #5701ion(r		// u rootfe root

jQr; = jQutou rootfe root

jQfoad", coIersi;E
	in}	jque
qubnit: funry,
	i	}rs}	vd",		}
	}.eotj([
	";abIersi"e s"ndod{
		"e s"maxLtjQue"e s"cereSpacxt, e s"cerePadm;

"e s"nowSpan e s"colSpan e s" jQMap e s"fruncBo eer e s"co_ventEdiwoad""
] (fn = jQue)f{, 		}
	}. useFix

;

jooing used
	jquQd
	;

j; })on(
		IE6/7 cauere = ndowe =om;

t		// !		}
	}.t, rootje = ndow)f{, 		}
	}. useFixje = ndow=eoe =om;

"	vd", coRproton( seetachbox;s
uerter/y )tet
		}
	}.eotj([ "rprotQ,:,etachbox"AN,tsed
	jque)f{, 		}
	}.jquHw.ks[i;

jtQu= ( seser:nfn = jQuery.pr,rjquerynction(type 		}
	}.ueAion ((valeryncrutotyt(nit: fu(ujquedetachEv	em		}
	}.unAion (r		}
	}	jque)fjqu();
r, cow) >=Qren;	jque
quers}	vr		// !		}
	}.t, rootjetachOnr)jsioQ		}
	}.jquHw.ks[i;

jtQdE,nr: 	init: fury.pr	nction(uerSchEven: Webkition(uer""aed
nit: fntr	iry,
	iomp"Qu"veryx jqueri_sototy.prototy	oQQnit: fujquedE,ndow.detacho, ele")he cunQuer?p"Qu"v:ron ofjquereijQ}ers}	})on.fn r selEn os,=//^(?: );
	| match|verscdea)$/i,urnkeyEvoot et/^key/r: rco jQEvoot et/^(?:co jQ|co_vextmryu)|click/eryrt	insMorph et/^(?:t	insih sins| sinsoutblur)$/r: r ndofuncsp: c	=u/^([^.]*)(?:\.(.+)|)$/on( "onload"nit: fTruee)f{, ntext, tor: j},( "onload"nit: fF,
	ie)f{, ntext, ent ver},( "onload"safeAcsed
E.pr) {e)f{, tryjsionsion,

	vent( "oacsed
E.pr) {ers}dcaEveu(ujrrynct }ad",/*
 * Heled
	 "onloadsi	,

mrnag	varev) {
	--inotQpversovempleeub
	jri	}
	f: ce
 * PuseTo( sDean	Edward ' oreEvoot libraryi	,

mrnysovempleidease
 */
		}
	}.evoot eter
eglobal:ery 	
eore:nfn = jQuery.protDLE,s,	hent vr,/ocon, sad", orynction: co;mp,rev) {
otD,	hent vObjIursio	r.proco,rev) {Hent v,	hent vObjQuer	hent vro,QDLE,nnfuncsp: cs,eorigted  jutoon oDcons=/		}
	}._dataery.prion(y.Qry.Duery:a
	etedev) {
	( snsDcons,

text/carmry.:nction(butE=yiownpla	ieoent( s)
m;type !y.prDconsQuery bor, coonquertjQuerCoreetjcan	tor,ae	yxuuoent( iompcustomodconsnn lieusovemplehent vr
m;type hent vr.hent vrsQuery bhent vObjIuTethent vr;uer	hent vrTethent vObjIu.hent vr;uer	sad", oryethent vObjIu.sad", oronquertjQuerM, com.de o}atcmplehent vr:/ Toaeu.fn =EID,e jQd
( sngnd/
jQuer(ittf jQr

(yion !hent vr.guidsQuery bhent vr.guids=/		}
	}.guid++onque,
m;ry.In	tuo}
	y.pr) {'s evoot  tor ).de andeerin	hent vr,/if.pr
jQ
jQlem fctiosiouQuery(ev) {
	eton oDcon.evootsncrutotytev) {
	eton oDcon.evoots er{}on	,}	iouQuery(ev) {Hent v	eton oDcon.hent vncrutotytev) {Hent v	eton oDcon.hent vr: 	init: furyc) sion,joadDiscardoo}
	 oEven evoot ompa 		}
	}.evoot.triggere)fention,joadwpesian evoot is caueerg	fion a	toge:/ TounloadQdion(cntext, tndo, e		}
	} !==nerre_d {
achEventersi(!etomp		}
	}.evoot.triggernte!==nef;ndo erion(r			}
	}.evoot.atcpuEve.siol (rev) {Hent v.y.protiery,
	in )j:jselectachEventLE,nd}on	,he cyd\Ly.pri Toae used
tyrorymplehent vofnj( sxt, ry.:aj	emoryaelek	wtypeIE non-nused
dev) {
otytev) {Hent v.y.pr	eton oonque,
m;ry.Hent v	chEvent((evoots sesionion(bytejry: c
seondosw= e ondosw|| ""j)rmuEve(nerre_rnot= {
	ot	cons""Q;
qutuerondojootjQuery.Q	init: ftnction( se;mpt= r ndofuncsp: c.exece ondos[t]ot	constei	ep; jQuerorigted ueromp[1tei	epfuncsp: csw= e omp[2]w|| ""j)rdp
	t( "."j)rdven(on(y.QQry.TperQu*must*NDLEaQDLE,nnfo:a
	eteletefuncsp: c-ouctohent vro	jqutype !DLE,r, compytxon(inueLE,nu

tjQQry.I e, ry.:yhang)seitsEDLE,nnuser = {ryvercorevry.:/ nt vroi	,

the(yhang)t{uLE,
,o	r.procot= 		}
	}.evoot.r.proco[ ondo ] omp{}onlQQ ry.I eThd", orychEvent,u	e, rm = {ryvercorevry.:api}uLE,nnomplewfn =gfunn{uLE,
,o	Qndow= e Thd", ory?{ryvercojdey gnioted u:{ryvercojbierTLE,r, ompondoonlQQ ry.Updvt{	 yvercorbaryve ntor:ctorry )TuLE,
,o	r.procot= 		}
	}.evoot.r.proco[ ondo ] omp{}onlQQ ry.hent vObj is tor, conteauerevry.:/ nt vrory bhent vObjt= 		}
	}.extend(hee	seondo:nted  juto	origted :eorigted  jutoedata:nocon,jutoe/ nt vr:	hent vr,jutoeguid:	hent vr.guid,jutoeThd", or: Thd", or,jutoenatcsCo_vext: Thd", orr= j		}
	}.ex/rrmuEve.natcsCo_vextery,
	isad", oryn,jutoenuncsp: c:nfuncsp: cs.join("."qion(},	hent vObjIuion(y.QQry.In	tuo}
	yvry.:/ nt vr queuet
version,lem fctiosioouQuery(/ nt vroi=(evoots[ ondo ]ncrutotyt(/ nt vroi=(evoots[ ondo ]i=(stei	ep(/ nt vrojdey gnioCou {	}
dLEfn QQuer{
		vuseroreEvootLotjener/a
	eteEvoot _vempleryvercorevry.s:/ nt vr load", cy,
	i ioyTtype !tyvercojy )up omptyvercojy )uprsion,
y.protdcon, funcsp: cs,eev) {Hent v	)y , cy,
	i	nction(nb coBgnduo}
	globalnyvry.:/ nt vr ( s	}
	r.pr) {ion(nbtype jquedoreEvootLotjenerw) sion,je	d
	jooreEvootLotjener	}uLE,nnev) {Hent v,	y,
	i	n;		// Hl
nctiontype d
	joo
	eteEvoot ) sion,je	d
	joo
	eteEvoot(p"Qu"v+}uLE,nnev) {Hent vyn;	jquni/y.QQ"DL,nu

tjQQyion tyvercojorea) sion,jtyvercojorersion,
y.prothent vObjt eint( "type !hent vObj.hent vr.guids) sion,jehent vObj.hent vr.guids=	hent vr.guid;y.QQ"DL,nu

tjQQe cyd\L( s	}
	r.pr) {'s:/ nt vr lis	, dey gnio,ae	yfronosioouQuersad", orynctionp(/ nt vrojdp
	r: d/ nt vrojdey gnioCou {++, 0othent vObjt ei Hl
nctiontionp(/ nt vroj{it: fhent vObjt ei Hl

tjQQe cKeep toverhory be = evry.s:/ d
dev)rtb enc jQd,"n,

lvoot optimizatjQu	// 		}
	}.evoot.global[ ondo ]i=(tor: jE,}nlQQuerNullifyLy.pri( sxt, ry.:	emoryaeleks	nn	IE
o	 used
	ery,
	i = {
ry.De	etedan evoot on y )uofirvry.s:pletean	r.pr) {io
jQuer:nfn = jQuery.protDLE,s,	hent vr,/Thd", or,eerpperTLE,synction: coj,	hent vObjQ ;mp,otytorigCou {otD,	ev) {
osio	r.proco,rhent vro,QDLE,ni	epfuncsp: cs,eorigted  jutoon oDcons=/		}
	}./ Thataury.pr	nc= j		}
	}._dataery.prion(y.Qtype !y.prDconsuery(ev) {
	eton oDcon.evootsncrutotytor, coonquertjQuerOnonjn,

letedDLE,.funcsp: c		ieuLE,s; ondo may b  omitmat
t(ondosw= e ondosw|| ""j)rmuEve(nerre_rnot= {
	ot	cons""Q;
qutuerondojootjQuery.Q	init: ftnction( se;mpt= r ndofuncsp: c.exece ondos[t]ot	constei	ep; jQuerorigted ueromp[1tei	epfuncsp: csw= e omp[2]w|| ""j)rdp
	t( "."j)rdven(on(y.QQry.Unbgndualorevry.s:(ofu;

j funcsp: c,/if. usvidnt)s	,

the(r.pr) {ion(type !DLE,r, compyttext, ondo _nrevry.s:rutotyo(r		}
	}.evoot.
jQuerery.protDLE,r+
ondos[ tAN,thent vr,/Thd", or,e {
		v;	 sed
	jqutxon(inueLE,nu

tjQQr.procot= 		}
	}.evoot.r.proco[ ondo ] omp{}on,o	Qndow= e Thd", ory?{ryvercojdey gnioted u:{ryvercojbierTLE,r, ompondoonyt(/ nt vroi=(evoots[ ondo ]iconstei	ep;mpt= omp[2]wch,eew RegExp( "(^|\\.)" + funcsp: cs.join("\\.(?:.*\\.|)"ru+
j(\\.|$)"ion(y.QQry.RjQuer(muEvei

	ev) {
otytorigCou {t= 	s=	hent vrsotor: jery,
	init: fjnction( selhent vObjt= hent vrs[ 	sQonlQQ buQuer(eerpperTLE,syconorigted ue=ethent vObj.origted ud
=  jQuton !hent vr	conhent vr.guids==ethent vObj.guids) =  jQuton !;mptompompery,
	ihent vObj.funcsp: c	)s) =  jQuton !Thd", oryomptad", orye=ethent vObj.Thd", oryomptad", orye=et"**Qu= jhent vObj.Thd", ory)s) sion,jehent vrojdp
	r: djQ 1	n;		// Hltype hent vObj.Thd", ory)ssion,je	/ nt vrojdey gnioCou {--;	jqsed
	jqutQyion tyvercoj
jQuer(; = jQutottyvercoj
jQuerrsion,
y.prothent vObjt eijquni/y.QQ"DL,nu

tjQQry.RjQuer(g)n =icnyvry.:/ nt vr _verse
jQuerdbsareth;

	andefo:mtoty/ nt vroirootjtjQQry.(avoids toventocotn,

lnt vsd
nicursjQu	duplete
jQuealuofiryvercorevry.:/ nt vro)ion(type origCou {trsi!hent vrsotor: jynction(r		// !tyvercojteardown omptyvercojteardownrsion,
y.protouncsp: cs,een oDcon.hent vr)y , cy,
	i	nction(nb		}
	}.rjQuerEvoot(py.protDLE,,een oDcon.hent vr);	 sed
	jutoedey peuevoots[ ondo ];	jque
quer
QQry.RjQuer(	}
	rorn,

 _veit'stse long)re jQdiontype 		}
	}.ueE

	cvent( (nevry.s:runction(dey peuen oDcon.hent vn(y.QQry.rjQuerDatatelsteetachs(n,

l

	venssn( seeelers(	}
	rorn,

 _vey

	c
eleverso  jQui			iry,
	iompdey pe	// 		}
	}._rjQuerDataery.prot"evry.s" b;
n(ers}= {
trigger:nfn = jQueryvry.otdcon, y.protouctH nt vroinction: cohent v,	on(LE,,e{ur,	// bubbloted , r.proco,r;mp,ri,otytev) {Pauern,[ry.prEomp	vent( "tQ,
n(rQndow= erre_/ TOwnrsion,
yvry.otjcueryync? evoot.ted u:{yvry.oi	epfuncsp: csw= erre_/ TOwnrsion,
yvry.otjfuncsp: cyync? evoot.funcsp: c.dp
	t("."qr:nstn(y.Qcur =f;mpt= y.pr	eton oEomp	vent( "n,
m;oadDuery:	onevry.s:osioersn( seearmry.:nctio
nbtype jquedmpleted )=, c}u|| jquedmpleted )=, c8crutotytor, coonquertjQuer sins/blur:mtoph
	( st	insih/out;nr m.de rsion,notQfctorebmpem righthnow
nbtype rt	insMorphery,
	iDLE,r+
		}
	}.evoot.triggerntencrutotytor, coonquertjQtype ondo.iersiOf("."qr>=Qren = jQuuerNuncsp: c\L(rigger;
cndow.hatregror	( smuEverevry.:ondo _nrhent vjqion(funcsp: csw= ondo.dp
	t("."qon,o	Qndow= funcsp: cs.dQuery,;
		nfuncsp: cs.dven(on(que
quon(LE,w= ondo.iersiOf(":")tjQrersi"Qu"v+}uLE,n,
m;oadCoreetjcan	tor,ae	yx
		}
	}.Evoot oent( ,eOent( ,eorE

	coanrevry.:ondo stpletionevoot etevoot

		}
	}.eern,

 ]erion(evoot :jseleew 		}
	}.Evoot	}uLE,nnondo, ejvoot e==eooent( "cch,jvoot )n,
m;oadTrigger bitmask: & 1	n,

nused
dhent vrs; & 2	n,

		}
	} (alway/
 {
	)ionevoot.ueTrigger =touctH nt vroi? 2	: 3;ionevoot.funcsp: c	=ufuncsp: cs.join("."q;ionevoot.funcsp: c_rj etevoot.funcsp: c	?jseleew RegExp( "(^|\\.)" + funcsp: cs.join("\\.(?:.*\\.|)"ru+
j(\\.|$)"io :jselery,
	
m;oadCeean	up. = {evoot ihEveryfi.:ngebeoretre jQdionevoot.
jscone=/tachEventLE,ntype !yvoot.target ; = jQuyvoot.target eton oonque,
m;ry.Clon; anyoi	earoretdcons( sext,dofd. = {evoot,e{ matjrebmpep/ nt vr arg(lis	sionatad
	ncons==ejQuer?
n(r[{evoot ] :jsel		}
	}.makeAion (rdcon, [{evoot ] )n,
m;oadAyiownryvercorevry.s:ntearawr(utsidn. = {fvens
QQr.procot= 		}
	}.evoot.r.proco[ ondo ] omp{}on,ouQuer! uctH nt vroich,tyvercojtrigger ch,tyvercojtrigger.siol (re.protdconr)y , cy,
	i	nction(or, coonquertjQuerDe, rm = {evoot  useag {jQu pauere	yxdvacce,ep r W3C(evoots syver(#9951)sio coBubblo	up. op	vent( ",jmpes
 opleted ; wuEver	,

a	globalnownerDvent( " : co(#9724)n,ouQuer! uctH nt vroich,!tyvercojnoBubblo	rsi!		}
	}.isWeted ery.prE Tncti	// bubbloted t= ryvercojdey gnioted uompondoonyt(type !rt	insMorphery,
	ibubbloted t+rDLE,r, , compytxur =fcur.e root

jQ	/QQ"DL,nutext, rocurrocur =fcur.e root

jQ ; = jQutov) {Pauej{it: fcur rei		ep;mpt= currL,nu

tjQQry.{
		vorealeted  _versegot. op	vent( " (e.g.,inotQpla	ieoen orych	etec\LDOM)ion(type ;mpt=, c(on ofownerDvent( "Eomp	vent( ") ; = jQutov) {Pauej{it: fompe,

	conView ompompee rootWeted  ompleted  );	jque
quer
QQry.Fioty/ nt vroion. = {evoot paue
QQit= ery.Q	init: f(cur 
	jv) {Paue[i++])frsi!evoot.uePuseag {jQuStopper( Tncti	// evoot.ted u= intext,j	// bubbloted t:jseleryvercojbierTLE,rompondoonlQQ ry.		}
	} hent vr
m;	hent vr: (j		}
	}._dataer{ur,o"evry.s" b omp{} )[ evoot.ted u]c= j		}
	}._dataer{ur,o"hent v"E ei setype hent vr)yn( selhent v.siol (r{ur,ooconion( se

tjQQry.Nused
dhent vr
m;	hent vr: on(LE,w= j{ur[ on(LE,w]ei setype hent vr= j		}
	}.acceptDataer{ur	nc= jhent v.siol c= jhent v.siol (r{ur,ooconioy , cy,
	i	nction(nevoot.xt, ry.D

	con(;;LE,n}ry,}	s	evoot.ted u= uLE,n,
m;oadIfusebodysxt, ry.ed ofesa

	coneaurrenr:	onithnow
nbtype ! uctH nt vroich,!evoot.ueD

	conPt, ry.ed( Tncti	// uQuer(!tyvercoj_a

	coneomptyvercoj_a

	con.siol (rev) {Pauej{op();
oconioy , cy,
	i) =  jQut		}
	}.acceptDataery.prE Tncti	// ;oadCorehatoused
dDOM rethodion. = {target wtypemplerunctnunctnunctas. = {evoot.	// ;oadCoototuseron .uee current)oetach
perQubecauserIE6/7 failero}atcry,
.	// ;oadDuery:	ona

	coneaurrensro, leted ,ro}at's wperQuglobaln: cioad"gebeo(#6170)lQQ buQueron(LE,w= jd
	j

ted u]c= j!		}
	}.isWeted ery.prE Tncti	// tcoadDuery:ni-trigger xuuonFOO{evoot wpesiwe caueritsEFOOt)orethod	// tc;mpt= y.pr[ on(LE,w]ei	jqutQyion ;mpt) sion,je	d
	j

on(LE,w]d
	ery,
	i sed
	jutoecoadPt, ry.:ni-triggerQuer,femplerunctevoot,esihce we alndodyibubblodcittebuerion(nb		}
	}.evoot.triggernte
	Qndom;n 	ertryjsionQQe	d
	j

(LE,w]().d
	ini/ncaEveu(ujt) sion,je	ry.IE<9 dieToosi sins/blur: ophidden	r.pr) {:(#1486,#12518)ion,je	ry.ouctot,droduciblo	o, letXP.IE8toused
,inotQIE9	nn	IE8:mtde	jqsed
	jqutQ		}
	}.evoot.triggernte
	tachEventLE	jqutQyion ;mpt) sion,je	d
	j

on(LE,w]d
	;mpeijquni/y.QQ"DL,nu

E,}nlQQ being evoot.
jscon
	i = {
atcpuEve:nfn = jQueryvry.Tncti	//uerM, coa wriwoad",		}
	}.Evoot pletemplenused
dev) { oent( ionevoot et		}
	}.evoot.fix(,jvoot )n,
m;: coi,ojQu,uhent vObjQ muEveQd,"jQuer	hent vrQueuet= strsio	argsw= erre_s
	r:rsion,
iery,
	in )Quer	hent vror: (j		}
	}._dataeruhio,Q"evry.s" b omp{} )[ evoot.ted u]cconstosio	r.procot= 		}
	}.evoot.r.proco[ evoot.ted u]ccon{	n,
m;ry.Usn,lem fcx-nte		}
	}.Evoot ramplero}an. = {(ndod-ouct)enused
dev) {
o	argso0] 
	jv) {;ionevoot.dey gniotarget et;

j; 
m;oadCoreempleereDtcpuEveohw.kn	,

the(erpper}uLE,nn( seletcittbailtif(Ehsiotdiontype tyvercojereDtcpuEveoch,tyvercojereDtcpuEversion,
uhio,Qyvry.Tnc , cy,
	i	nction(or, coonquertjQuerDe, rm = {/ nt vrory hent vrQueuet= 		}
	}.evoot.hent vrsosion,
uhio,Qyvry.,rhent vro )n,
m;oadRun dey gnio,afctio;
they may wanto( sstop  useag {jQu beneauerus
QQit= ery.Q	init: f(muEveQdt= hent vrQueue[{
f j])frsi!evoot.uePuseag {jQuStopper( Tnctin(nevoot.{ur, cotarget etmuEveQd.on oonjsel	t= ery.QQ	init: f(hent vObjt= muEveQd.hent vrs[ 	f j])frsi!evoot.ueImmedivt{Puseag {jQuStopper( Tncti	// ;oadTriggeren evoot must eimpler1):/ d
dno funcsp: c,/or	// ;oad2):/ d
dnuncsp: c(s)tejruby )uor equcoe( s	}oser	ied );b/ HA evoot (boypecan:/ d
dno funcsp: c). seletype !yvoot.funcsp: c_rj || jvoot.funcsp: c_rjery,
	ihent vObj.funcsp: c	)s) ti	// tcevoot.hent vObjt= hent vObj;	// tcevoot.natad
	hent vObj.nataLE	jqutQjQuTet f(		}
	}.evoot.r.proco[ hent vObj.origted u]ccon{	).hent vrconhent vObj.hent vr )ion,je		.siol (rmuEveQd.on ootiers	n;		// Hltype jQuT!==etachEventr, compQut uQuer(evoot.
jscone=/jQu)y , cy,
	i	nction(nb(nevoot.xt, ry.D

	con(;;LE,nnb(nevoot.stopPuseag {jQu(;;LE,nnb(W( sel g usedDL,nu

E,}nlQQoadCoreempleeostDtcpuEveohw.kn	,

the(erpper}uLE,iontype tyvercojeostDtcpuEveonction(tyvercojeostDtcpuEversion,
uhio,Qyvry.TnonquertjQ being evoot.
jscon
	i = {
hent vrs:nfn = jQueryvry.othent vro )ction: cosel,uhent vObjQ muEveQs,ri,otythent vrQueuet= strsio	dey gnioCou {	}
/ nt vrojdey gnioCou {,otytxur 
	jv) {.target;r
QQry.Fi se,
y gnio{/ nt vrory  coBlack-holeeSVG <use>sneryaccerr mion(#13180)sio coAvoid non-left-clickibubblletein.Fiotfoxn(#3861)n,ouQuerdey gnioCou {	= j{urdmpleted )rsi(!ev) {.button
|| jvoot.tndow!, c"click")s) ti	// v* jsh;
t eqeqeq:Qy,
	i	*/

n(text, rocur != ;

j;ocur =fcur.e root

jQ ompor
jQ) sion,jo* jsh;
t eqeqeq:Q {
		*/
	// ;oadDuery:etach
non-y.pr) {
	(#13208)ion,joadDuery:ouscess clickToosiatch, eley.pr) {
	(#6911, #8165,	#11382,	#11764)lQQ buQuer{urdmpleted )=, c1)rsie{urdatch, ele!, c {
		|| jvoot.tndow!, c"click")s) ti sel muEveQsi=(stei	ep((text, it= erootjQdey gnioCou { {
f jQuery bellhent vObjt= hent vrs[ HANn jselec;oadDuery:eonflict wtypeOent( . ustotndow used
	ieTo(#13203)ion,je	sel ethent vObj.Thd", ory+:, ".dompQut uQuermuEveQs[oselw]d
==etachEventr, compQut 	muEveQs[oselw]d
ihent vObj.fatcsCo_vextrrion(ryQbe		}
	}	}sel,upr
jQ)fiersier{ur	nc>=Qre:ion(ryQbe		}
	}.ngnd	}sel,upr
j, ery,,e[r{ur	]Q)ftor: jery,
nb(W( sel  uQuermuEveQs[oselw]d, compQut 	muEveQsj{it: fhent vObjt ei Hlnb(W( sel g used uQuermuEveQsotor: jynction(rythent vrQueuej{it: {ey.pr:r{ur,ohent vrs:nmuEveQsi} eijquni/y.QQ"DL,nu

quertjQuerydd ofesreerinlete(diry )ly-b/ HA){/ nt vrory uQuerdey gnioCou {	<	hent vrsotor: jsQuery bhent vrQueuej{it: {ey.pr:rpr
j, hent vrs:nhent vrojd
	r: ddey gnioCou {	) 
)onquertjQnit: fuhent vrQueue
	i = {
fix:nfn = jQueryvry.Tnctinbtype jvoot

		}
	}.eern,

 ]enction(nit: fujv) {;ion}nlQQoadCndow.hatwriwoad",copyrorympleev) { oent( 	andefoelcQ z
osare  used
	ieT
m;: coi,o use,}copy,
n(rQndow= jvoot.tndo,otytoriginalEvoot etevoot,otytfixHw.kt c;

jofixHw.ks[ ondo ];	
nbtype !fixHw.ktion( se;

jofixHw.ks[ ondo ]r: 	ixHw.kt y.QQ"rco jQEvootery,
	iDLE,r) ?u;

jnco jQHw.kst:
n(rynkeyEvootery,
	iDLE,r) ?u;

jnkeyHw.kst:
n(ry{}on	,}	iocopyr: 	ixHw.k. uses ?u;

jn usesole_ca
	i	ixHw.k. uses ;uerohioc uses;	
nbevoot eteew 		}
	}.Evoot	}originalEvoot on(y.Qtw= erpyootjQuery.Q	init: function( sext.de= erpys HANn ioyjvoot

xt.de]ueroriginalEvoot

xt.de];ion}nlQQoadSchEven: IE<9rsiuerFix target  used
tyr(#1925)
m;type !yvoot.target ; = jQuyvoot.target etoriginalEvoot.srcE.pr) {Eomp	vent( "n,on}nlQQoadSchEven: Chrare 23+,oSafari?lQQoadtarget should
notQDLEaQDextrmpler(#504,	#13143)inbtype jvoot.targetdmpleted )=, c}u; = jQuyvoot.target etovoot.targetde root

jQ	/QQ}nlQQoadSchEven: IE<9rsiuerF,

mo jQ/keyrev) {
otmetaKey==y,
	i	_veit'sttachEventr(#3368,	#11328)ionevoot.metaKey et!!evoot.metaKeyontjQnit: fu	ixHw.k.filion ?u	ixHw.k.filioneryvry.otoriginalEvoot ou:{yvry.
	i = {
ry.Inclutionsare evoot  useonsharon(bytKeyEvoot andeMo jQEvoot{
 uses:n"altKey bubblos cacceload",ctrlKey {ur, cotarget ev) {PheryfmetaKey ref jQdtarget shiftKey target timeStamp view  be =".dp
	t(" ")= {
fixHw.ks:n( = {
keyHw.ks:n( se uses:n"ch co:h cCplerkeyrkeyCple".dp
	t(" ")= ytfilion:nfn = jQueryvry.otoriginals) ti	// verydd  be = textkeyrev) {

	nbtype jvoot. be = , cjQuerd
	jselejvoot. be = ,toriginal.:h cCpler!= jQuerrtoriginal.:h cCpler:toriginal.keyCplen( se

tjQQnit: fujv) {;ion}ni = {
co jQHw.ks:n( se uses:n"button
buttons cli) {X cli) {Y pletE.pr) {Eoffy )XEoffy )Y	togeX	togeY sc minX sc minYe( E.pr) {".dp
	t(" ")= ytfilion:nfn = jQueryvry.otoriginals) ti	m;: cobody,Qyvry.Docr:	oc,jutoebutton
 coriginal.button,jutoepletE.pr) {E coriginal.pletE.pr) {onlQQ ry.Corcuf jQ	togeX/Y	_vemissoreb( seeei) {X/Y	availoad"
	nbtype jvoot.togeX	, cjQuerrsioriginal.:li) {X ! cjQuerd
	jselejvootDoc etovoot.targetdownerDvent( "Eomp	vent( "eijqundoc etovootDve.	vent( "E.pr) {erstoebodysetovootDve.body.dompQujvoot.togeX	,ioriginal.:li) {X +uerdoc rsidoc.sc ollLeftEompbodysrsibody.sc ollLeftEompren -uerdoc rsidoc.:li) {LeftEompbodysrsibody.:li) {LeftEompren;	jquujvoot.togeY	,ioriginal.:li) {Y +uerdoc rsidoc.sc ollT.deEompbodysrsibody.sc ollT.deEompren -uerdoc rsidoc.:li) {T.deEompbodysrsibody.:li) {T.deEomp0ion( se

tjQQry.ydd ref jQdtarget,/if.nacessary
	nbtype !evoot.
jf jQdtarget rsipletE.pr) {Ed
	jselejvoot.
jf jQdtarget =ipletE.pr) {E , cjvoot.target rtoriginal.( E.pr) {r:tpletE.pr) {on se

tjQQry.ydd  be = textclick:c1) , cleft; 2) , cmidt vnc}u , crighttjQQry.Note: button
ig usedseelcQ z
t,rso query: jQui	
	nbtype !evoot. be = rsibutton
!==etachEventr, compQujvoot. be = ,t(ibutton
& 1	?c1):((ibutton
& 2	?c3):((ibutton
& 4i? 2	: 0	)s) )n( se

tjQQnit: fujv) {;ion}ni = {
tyverco:n( seload: = jQuuerPt, ry.:triggernteimoge.loadirvry.s:pletebubbllete opleted .load jQunoBubblo:Q {
	
que,ry  sins: = jQuuerFiotynused
dev) { if. ossibl
osa blur/ sinsosequecceris cerry )( se;rigger:nfn = jQuenction(r		// pr
jQ!==esafeAcsed
E.pr) {e)fch,Q

jofsinsonction(rytryjsionQQe	Q

jofsins(;;LE,nnb( being ent vers.QQ"DncaEveu(ujt) sion,je	ry.SchEven: IE<9rsi	ue;oadIfuwe err,

osi sins: ophidden	r.pr) {:(#1486, #12518),rsi	ue;oadletc.triggere)frunbmpep/ nt vrsijquni/y.QQ"DL,nu
rsio	dey gnioted :e"t	insih"
que,ry blur: = jQu;rigger:nfn = jQuenction(r		// pr
jQ===esafeAcsed
E.pr) {e)fch,Q

joblur:nction(ryt

joblur(;;LE,nnb being ent vers.QQDL,nu
rsio	dey gnioted :e"t	insout"
que,ry click:c= jQuuerFextctachbox,afcttynused
dev) { steetachrdbstatepletlbbecrighttjQQ;rigger:nfn = jQuenction(r		// 		}
	}.noQuery (guhio,Q" elem;yncch,Q

joted )=, c,etachbox"Ach,Q

joclickinction(ryt

joclick(;;LE,nnb being ent vers.QQDL,nu
rs jQuuerFextcross-blowsuefype is	 ccy, query:fcttynused
doclick(;
osilleksione_a

	con:nfn = jQueryvry.Tnctinbytor, con		}
	}.noQuery (gyvoot.target, "o" );	jque
quers jQbetexeunload:c= jQueostDtcpuEve:nfn = jQueryvry.Tncti	//QuuerEvoo wpesior, coVqueryequcosonte ndefvent.Fiotfoxnletlbstetlbshow a vrtlQQ buQuerevoot.
jscone!==etachEventr, compQutevoot.originalEvoot.or, coVquery=revoot.
jsconers.QQDL,nu
ion}ni = {
timuf jQ:nfn = jQuerDLE,,een o,Qyvry.,rbubblor, compuerPiggy_verh( "orque,

lvoot ( ssimuf jQyx atfferoot one.rsiuerF, cooriginalEvoot nteavoid que,
'd
stopPuseag {jQu,	butE_vempersiuersimuf jQd evoot  urvry.s:a

	conetpesiwe doempleruncton. = {que,
.
m;: coct= 		}
	}.extend( jQunew 		}
	}.Evoot	),otytev) {,otytcompQuondo:nted  juto	isSimuf jQd:Q {
	 juto	originalEvoot:n( L,nu
ion)on,ouQuerbubblor, compQ		}
	}.evoot.triggerere, ery,,ey.prion(Hl
nctiontionp		}
	}.evoot.atcpuEve.sion,
y.protpio;	jq}
ubuQuere.ueD

	conPt, ry.ed( Tncti	(nevoot.xt, ry.D

	con(;;LE,}E,} };(
		}
	}.rjQuerEvootd
	nvent( "orjQuerEvootLotjenerw?
lted );
		}y.protDLE,,ehent vr)yn( stype jquedrjQuerEvootLotjenerwncti	(nequedrjQuerEvootLotjener(tDLE,,ehent v,	y,
	i	n;	E,}E,}t:
nted );
		}y.protDLE,,ehent vr)yn( s.fn ntyp =i"Qu"v+}uLE,n,
m;type jquedch	eteEvry.Tncti	//Quer#8545,	#7054,  urvry.lete	emoryaeleks	textcustomorvry.s:nn	IE6-8	//Querch	eteEvry.Tfatcco	 used
tyron	r.pr) {,(bytntyp orympatQyvry.,r( sxt.derly	rororyfi.:( sGC
	nbtype ondo, ej
	j

functQuedeterre_d {
achEventerutotyt	j
	j

functQue	ery,
	i s

tjQQjquedch	eteEvry.hEvent, hent vr);	 s}
ueein		}
	}.Evoot : 	init: fursrc,  uses ;u{
;oadAyiownneryacti {jQu wtypout. = {'new'tkeywordvr		// !(pr
jQ
eryacce, e		}
	}.Evoot Tncti	(nit: funew 		}
	}.Evoot	}src,  uses ;
	i  {
ry.Ev) { oent( iotype trc rsitrc.DLE,r, compt

jooriginalEvoot ettrc;ompt

joQndow= trc.DLE,;r
QQry.Evry.s:bubblleteup. = {	vent( " may / d
db encmarkntrad
xt, ry.ed
QQry.bytej/ nt vr lg us down  = {t mi;iorfd", u;
eelerry )ejquer.ompt

joueD

	conPt, ry.edw= e Trc.d

	conPt, ry.edwomptrc.or, coVquery=, cy,
	i	||
tottrc.getPt, ry.D

	con rsitrc.getPt, ry.D

	con( Tnc?"nit: fTrue	: nit: fF,
	i; {
ry.Ev) { uLE,io
nctiontiont

joQndow= trc
	i  {
ry.Put.fnorent cto usvidnt	 used
	ieToos( s	}
	rv) { oent( iotype  uses ;u{
;			}
	}.extend(guhio,Q uses ;
	i  {
ry.Cndow.hattimestamp _vei	earoretrv) { ,oegotot/ d
doenntt

joQimeStamp = trc rsitrc.DimeStamp omp		}
	}.now(on(y.uerM,rkcittetifix;dntt

j

		}
	}.eern,

 ]e=(tor: j}on(
				}
	}.Evoot ngebaryve ntDOM3.Evry.s:asty.prototy.byt	}
	ECMAScript Languoge:Bgndleti
		t versiwww.w3.org/TR/2003/WD-DOM-Lrv)l-3-Evry.s-20030331/ecma-script-bgndlet.htmln		}
	}.Evoot. ustotndow= ( sueD

	conPt, ry.ed: nit: fF,
	i, suePuseag {jQuStopper: nit: fF,
	i, sueImmedivt{Puseag {jQuStopper: nit: fF,
	i, {
 u, ry.D

	con:nfn = jQuenction: coct= t

jooriginalEvoot;r
QQt

joueD

	conPt, ry.edw= nit: fTrueon,ouQuer!i	nction(or, coonquertjQuerIf  u, ry.D

	conirootjs,/jusii.:on. = {originalsevoot{
buQuere. u, ry.D

	conincti	(ne.xt, ry.D

	con(;;L
e	ry.SchEven: IE
e	ry.Omplewfn =yan ofesre, coVquery used
tyrorympleoriginalsevootr
jQy,
	i io
nction( seld.or, coVquery=rent vers.}ni = 	stopPuseag {jQu:nfn = jQuenction: coct= t

jooriginalEvoot;r
QQt

jouePuseag {jQuStopperw= nit: fTrueon,ouQuer!i	nction(or, coonquerQ ry.I eTtopPuseag {jQuirootjs,/jusii.:on. = {originalsevoot{
buQuere.TtopPuseag {jQuincti	(ne.stopPuseag {jQu(;;LE,}nlQQoadSchEven: IE
nb coSet 	}
	caccelBubblo	 used
tyrorympleoriginalsevootr
jQ {
	
qu:rsiccelBubblo	=(tor: jE = 	stopImmedivt{Puseag {jQu:nfn = jQuenctiont

joueImmedivt{Puseag {jQuStopperw= nit: fTrueon,ot

jostopPuseag {jQu(;;LE}j}on(
		Cndow.hco jQry.er/eled
dev) {
e jorebco jQuerr/outb( seev) {-Dimeeetachs
		}
	}.eotj({{
co jQry.er:e"co jQuerr e sco jQeled
:e"co jQuut"
},tsed
	jquerorig,	fix )f{, 		}
	}.evoot.s.proco[ origtQu= ( sedey gnioted :efix,ry bierTLE,:efix,r
 bhent v:nfn = jQueryvry.Tnctinby: cojQu,ompQuoarget et;

j,
n(rynif jQd =revoot.
jf jQdtarget,
n(ryhent vObjt= evoot.hent vObj;	 jQuuerFextco jQy.er/eled
dcoreemple/ nt vr _venif jQd nge(utsidn. = {targetd jQuuerNB: No ref jQdtarget _vempleco jQcleft/Qy.ered ofesblowsuefleted 
	nbtype !nif jQd omp(nif jQd !, c arget rsi!		}
	}.xon(a
er( target, nif jQd )) ; = jQutov) {oQndow= hent vObj.origted ;inbytor,w= hent vObj.hent vr.siol (ruhio,Qiery,
	in ); jQutov) {oQndow= fix;	jque
qunntext, r );j		}
	}; })on(
		IEjrubmitddey gnijQu			// !		}
	}.t, rootjsubmitBubblos ncti	/		}
	}.evoot.s.procojsubmit = ( seserup:nfn = jQuenction(ry.{
		vfatc=pr
jQ	,

dey gnio);	,
mjrubmitdev) {

	nbtype 		}
	}.noQuery (guhio,Q"	,
m;ync) sion,j being ent vers.Q

tjQQry.Lazy-oreaajrubmitd/ nt vr wpesia(Ehscendanto	,
mjmay toventocoly b  rubmit.ed
QQ/		}
	}.evoot.ore(guhio,Q"click._rubmitdkeyxt,ss._rubmit", 	init: furyc) sion,joad

jQ functetach
avoids a VML-nif jQd crash:nn	IEo(#9807)
e	on: coy.pr	eto.target,ompQut	,
mj=n		}
	}.noQuery (gy.prot" elem;yncomp		}
	}.noQuery (gy.prot"buttonyync? equed	,
mj:/tachEventLE,nnbtype 	,
mjrsi!		}
	}._dataer	,
m,:,submitBubblos;ync) sion,j/		}
	}.evoot.ore(g	,
m,:,submit._rubmit", 	init: furyvry.Tnctinbytutov) {o_rubmit_bubblo	=(tor: jEs.QQD;;LE,nnb		}
	}._dataer	,
m,:,submitBubblos;,e {
		v;	 sed
	jquD;;LE,nry.rjt: futachEventrsihce we query:fatc=anrevry.:lotjener
quers jQeostDtcpuEve:nfn = jQueryvry.Tncti	Q ry.I e	,
mjwastyubmit.ed.byt	}
	 jQr,rbubblor	}
	rv) { up. = {t mi
	nbtype ov) {o_rubmit_bubblo	nctinbytdey peuevooto_rubmit_bubbloLE,nnbtype ohioc  root

jQ rsi!evoot.ueTrigger ) sion,j/		}
	}.evoot.simuf jQ(:,submit", ohioc  root

jQ,Qyvry.,r {
		v;	 sed
	jquD
quers jQteardown:nfn = jQuenction(ry.{
		vfatc=pr
jQ	,

dey gnio);	,
mjrubmitdev) {

	nbtype 		}
	}.noQuery (guhio,Q"	,
m;ync) sion,j being ent vers.Q

tjQQry.RjQuer(dey gnio);hent vrs; eelenDatatev) {ucoly ndopsjrubmitd/ nt vrs:a
	etetc=abuerion(		}
	}.evoot.
jQuereruhio,Q"._rubmit" b;
n(ers}	vd", coIEoyhang)ddey gnijQun( seetachbox/.prot	fix			// !		}
	}.t, rootjyhang)Bubblos ncti	/		}
	}.evoot.s.procojyhang)deter
eeserup:nfn = jQuencti
	nbtype r selEn osery,
	iDhiocmpleNtypyt	) sion,joadIEo,oegototfcttyyhang)d( "oretach/.prot	untol blur;:triggerii.:on.clickion,joad	fion a	tused
tyyhang). Eatcmpleblur-yhang)dnn	s.procojyhang).hent v.	// ;oadThctistetlbfcttToosyhang)da	 oEven Dimeefextctach/.prot		fion blur.E,nnbtype ohiocted )=, c,etachbox"Aompor
jcted )=, c,rprotQu) sion,j/		}
	}.evoot.ore(guhio,Q"tused
tyyhang)._yhang)", 	init: furyvry.Tnctinbytuttype ov) {ooriginalEvoot.tused
tyNtypy===eoetachrdQu) sion,j/,ot

jo_

	c_yhang)t{=(tor: jEs.QQ(W( sel g;;LE,nnb		}
	}.evoot.ore(guhio,Q"click._yhang)", 	init: furyvry.Tnctinbytuttype t

jo_

	c_yhang)t{rsi!evoot.ueTrigger ) sion,j/,ot

jo_

	c_yhang)t{=(ent vers.QQ"(W( sel  oadAyiowntriggernt,rsimuf jQd yhang)dev) {
e(#11500)ion,je			}
	}.evoot.simuf jQ(:,yhang)", uhio,Qyvry.,r {
		v;	 sed g;;LE,nn}ion,j being ent vers.Q

	jQuerDey gnio);jv) {; lazy-oreaajyhang)d/ nt vr osiahscendanto elems
QQ/		}
	}.evoot.ore(guhio,Q"betexeacsednio._yhang)", 	init: fury ) sion,j: coy.pr	eto.targetonlQQ buQuerr selEn osery,
	ijquedmpleNtypyt	ch,!		}
	}._dataery.prot"yhang)Bubblos;ync) sion,j/		}
	}.evoot.ore(gy.prot"yhang)._yhang)", 	init: furyvry.Tnctinbytuttype t

jo  root

jQ rsi!evoot.ueSimuf jQd{rsi!evoot.ueTrigger ) sion,j/,o		}
	}.evoot.simuf jQ(:,yhang)", uhioc  root

jQ,Qyvry.,r {
		v;	 sedQ(W( sel g;;LE,nnb		}
	}._dataery.prot"yhang)Bubblos;,e {
		v;	 sed
	jquD;;LE,},r
 bhent v:nfn = jQueryvry.Tnctinby: coy.pr	etovoot.target;	 jQuuerSw=yiownnused
dyhang)dev) {
epleteetachbox/.prot, we alndodyitriggerntempem abuerion(		// pr
jQ!==eon oEompevoot.ueSimuf jQd{ompevoot.ueTrigger omp(jquedtndow!, c"rprotQuch,jquedtndow!, c"ctachbox"nc) sion,j being evoot.hent vObj.hent vr.siol (ruhio,Qiery,
	in ); jQuD
quers jQteardown:nfn = jQuenction(		}
	}.evoot.
jQuereruhio,Q"._yhang)"	n;		//  being !r selEn osery,
	iDhiocmpleNtypyt;
n(ers}	vd", coCndow.h"bubbllet"i sins:( seblur:ev) {

		// !		}
	}.t, rootjt	insihBubblos ncti.		}
	}.eotj({  sins: "t	insih", blur: "t	insout" },tsed
	jquerorig,	fix )f{,
nb coA
	etedarsihgd",captuplete/ nt vr wpil
osareon; wantsst	insih/t	insoution: coa
	etetsi=(0,otythent vr : 	init: furyvry.Tnctinbyt		}
	}.evoot.simuf jQ(:fix,gyvoot.target, 		}
	}.evoot.fix(,jvoot ),e {
		v;	 se	n,
m;		}
	}.evoot.s.proco[ fix Qu= ( serserup:nfn = jQuenction((		// a
	etets++y===e0 ) sion,j/	vent( "oareEvootLotjener	}orig,	hent vr,/ {
		v;	 sed
	jquD,
n(rQeardown:nfn = jQuenction((		// --a
	etetsi===e0 ) sion,j/	vent( "orjQuerEvootLotjener(torig,	hent vr,/ {
		v;	 sed
	jquD
	ue;	i}), 

t		}
	}.nn.extend(he
	Qu:nfn = jQuetDLE,s,	Thd", or,edcon, fn, /*INTERNAL*y.ouvr)yn( s.fn DLE,,eorigFnn,
m;oadTLE,sycan:DLEaQmaprorymLE,s// nt vrory uQuerondo, eondosw===eooent( "cnction(ry.etDLE,s-Oent( ,eThd", or,edcon )ion(type ;ndo, eThd", ory!, c"stplet"	) sion,joadetDLE,s-Oent( ,edcon )ion(onatad
	nconsomptad", or;	 sedsad", oryettachEventLE,nd}E,ndtext, ondo _nrtLE,synctionmpt

joouerDLE,,eThd", or,edcon, ondos[ tndo ],.ouvr);	jque
qunntext, ;

j; quertjQtype ncons==ejQuerrsipn , cjQuerd
	jseloadetDLE,s, fn )ion(fnj=htad", or;	 senatad
	sad", oryettachEventLE,n
nctiontype pn , cjQuerd
	jseltype ;ndo, eThd", ory=, c"stplet"	) sion,joadetDLE,s,eThd", or,efn )ion((fnj=hnataLEon(onatad
	tachEventLE,nd}nction( selery.etDLE,s,edcon, fn )ion((fnj=hnataLEon(onatad
	tad", or;	 sedsad", oryettachEventLE,nd}E,n}
ubuQuerpn ,  cy,
	i	nction(fnj=hnit: fF,
	i; ,n
nctiontype !fuincti	(nntext, ;

j; quertjQtype ouvr=, c1)ncti	(norigFn = fy;LE,nfnj=h	init: furyvry.TnctinbytoadCootuseron r

	ceset,esihce yvry.Txon(a
erempleinfoinbyt		}
	}().off(,jvoot )n,on,j being origFn.siol (ruhio,Qiery,
	in ); jQuD;LE,nry.Usn,runctguidssteeoreetjcan	
jQuer( joreborigFnLE,nfn.guids=	origFn.guidsomp(	origFn.guids=/		}
	}.guid++io;	jq}
ubntext, ;

j.eotj(nfn = jQuenction(		}
	}.evoot.ore(guhio,QDLE,s, fn,/ocon, sad", oryn;	jq}) jE = 	ouv:nfn = jQuetDLE,s,	Thd", or,edcon, fnTncti	(nit: fut

joouerDLE,s,	Thd", or,edcon, fn, 1 ) jE = 	off:nfn = jQuetDLE,s,	Thd", or,efnTncti	(: cohent vObjQ ;ed ;inbtype ;ndooich,ondojopt, ry.D

	con rsiondojohent vObjt 
	jseloadetyvry.Tnc atcpuEvente		}
	}.Evoototythent vObjt= ondojohent vObj;ion(		}
	}e ;ndoo.dey gniotarget ).off(,on,jhent vObj.funcsp: c	? hent vObj.origted u+ "."j+ihent vObj.funcsp: c	: hent vObj.origted ,
n(ryhent vObj.Thd", or,
n(ryhent vObj.hent vr
m;	o;	jquntext, ;

j; query uQuerondo, eondosw===eooent( "cnction(ry.etDLE,s-oent( 	[,	Thd", or] )ion(fext, ondo _nrtLE,synctionmpt

jooff(,DLE,,eThd", or,eondos[ tndo ]r);	jque
qunntext, ;

j; queroouQuersad", ory=, cy,
	i	|| ;ndo, eThd", ory=, c"fn = jQu"cnction(ry.etDLE,s	[,	fn] )ion(fnj=htad", or;	 sesad", oryettachEventLE,n

ubuQuerpn ,  cy,
	i	nction(fnj=hnit: fF,
	i; ,n

ubntext, ;

j.eotj(fn = jQuenction(		}
	}.evoot.
jQuereruhio,QDLE,s, fn,/sad", oryn;	jq}) jE = {
trigger:nfn = jQuerDLE,,edconsQuery ntext, ;

j.eotj(fn = jQuenction(		}
	}.evoot.triggererDLE,,edcon,upr
jQ);	jq}) jE = 	triggerH nt vr:nfn = jQuerDLE,,edconsQuery : coy.pr	ett

j
0];inbtype e.pr	nction(or, con		}
	}.evoot.triggererDLE,,edcon,uy.protD{
		v;	 s}rs}	})on.fn ueSimplc	=u/^.[^:#\[\.,]*$/r: r  rootspt,  et/^(?:  roots|pt, (?:Untol|All))/r: rfatcsCo_vextr= 		}
	}.ex/rrmuEve.natcsCo_vext,y.uerrethodstguarante contedroduceoaeu.fn =Eyan wpesistar.letepleteaeu.fn =Eyan
	guarante cU.fn =E= ( secpildroo:Q {
	 jutco_vents:Q {
	 jutnext:  {
	 jutpt, :Q {
	
qeein		}
	}.nn.extend(he	ngnd:nfn = jQuersad", orynction: coi,otytor,w= stosio	relf et;

j,
n(rlenj=htadfootjQuery
n(type ;ndo, eThd", ory!, c"stplet"	) sion,ntext, ;

j.{it:S	etk(r		}
	}	rsad", oryn.filionefn = jQuenction((text, it= erootjQotj {
f jQuery beltype 		}
	}.xon(a
er( tadfs HAN,upr
jQ) ) sion,j/,ntext, tor: jsedQ(W( sel
	jquD;TnonquertjQtext, it= erootjQotj {
f jQuery b		}
	}.ngnd	}sel", or,etadfs HAN,uor,w;;LE,}nlQQoadNatcco	becauser$	}sel", or,eco_vextjQubecaresr$	}co_vextjQ.ngnd	}sel", or )ionret et;

j.{it:S	etk(rlenjtext, 		}
	}.u.fn =e jQuT)	: nitw;;LE,nit.sad", oryett

josad", ory?tt

josad", ory+:, "y+:sad", ory:htad", or;	 sntext, r );j	 = {
hes:nfn = jQuertarget ; = jQ: coi,otyttargetsr= 		}
	}( target, pr
jQ),
n(rlenj=htargetsootjQuery
n(ntext, ;

j.filionefn = jQuenction(text, it= erootjQotj {
f jQuery betype 		}
	}.xon(a
er( uhio,QDargets[i]Q) ) sion,j/ntext, tor: jsedQ
	jquD
	ue) jE = {
not:nfn = jQuersad", orynctionntext, ;

j.{it:S	etk(rwinnow(uhio,QThd", oryomp[]otD{
	) ) jE = {
filion:nfn = jQuersad", orynctionntext, ;

j.{it:S	etk(rwinnow(uhio,QThd", oryomp[]oty,
	i) ) jE = {
is:nfn = jQuersad", orynctionntext, !!winnow(
nmpt

jrs jQuuerIf.pr
jQ
jQa. osi jQual/nif jed
dsel", or,ectach
membvrohipr	ied );nit: fntryan
	leverso $("p:fctio").is("p:laio") wuery:niext, tor:r	,

a	doc wtypemwo "p".E,nn;ndo, eThd", ory=, c"stplet"	rsirnatcsCo_vextery,
	isad", orynrrion(r		}
	}	rsad", orynt:jselerhd", oryomp[]oion(t,
	i io)ftor: jery = {
closy,
:nfn = jQuersad", ors,eco_vextjQu= jQ: co{ur,	// ii=(0,otytlyett

jotor: j,otytor,w= stosio	 osj=hnnatcsCo_vextery,
	isad", ors )	|| ;ndo, eThd", orsy!, c"stplet"	rion(r		}
	}	rsad", ors,eco_vextjompor
jcco_vextjQu:jseledLEfn text, rootjQo {
f jQuery btext, cur =f;

j
i];ocur = j{ur !==ner_vextrocur =fcur.e root

jQ ; = jQutoadAyway/
skipr	vent( " fragm) {

	nbbuQuer{urdmpleted )< 11)rsie osjrion(ry osfiersie{ur)jte-1u:jion(ryoadDuery:oor,anon-y.pr) {
	nteSizzle	jqsed{urdmpleted )=, c1)rsion,j/,		}
	}.ngnd.muEveQsSad", or({ur,osad", ors))s) ti	// tccur =fnit.{it: fcur rei		ep	break jsedQ
	jquD
	uey
n(ntext, ;

j.{it:S	etk(rnit.tor: jstext, 		}
	}.u.fn =e jQuT)	: nitw;;LE = {
ry.De	 rm = {mpleeosi jQu ompan	r.pr) {:wtypin{
ry.the(erEventey )uofir.pr) {
{
iersi:nfn = jQuery.pr )f{,
nb coNoQiery,
	i,:niext, iersir	iee root
n(type !e.pr	nction(or, con(tt

j
0]Ach,Q

j
0].e root

jQ ; ? ;

j.fitio()opt, All()ftor: j	: -1;LE,}nlQQoadiersir	iesad", or
n(type ;ndo, ey.pr	e, c"stplet"	) sion,ntext, 		}
	}.unAion (rQ

j
0], 		}
	}( e.pr	nc;;LE,}nlQQoadLocow.hmpleeosi jQu ompofesa
siotd(r.pr) {ionntext, 		}
	}.unAion ( jQuuerIf.iy:niceed
syx
		}
	} oent( ,elem fctio	r.pr) {:ise jQdionQjquedjq}
	} ? eque
0]A:uy.protDr
jQ);	jy 	
eore:nfn = jQuersel", or,eco_vextjQu= jQ: cosetuerondo, eThd", ory=, c"stplet"	rion(r		}
	}	rsad", or,eco_vextjQu:ion(r		}
	}.makeAion (rThd", orr= jThd", ordmpleted )? [rThd", orr]y:htad", orQ),
n(roree= 		}
	}.merge	iDhiocget();
set on(y.Qntext, ;

j.{it:S	etk(r		}
	}.u.fn =eore)Q);	jy 	
eoreBack:cfn = jQuersad", orynctionntext, ;

j.ore(gThd", ory=,ejQuer?
n(rohioc uevOent( uerohioc uevOent( .filioneThd", or)ion;;LE}j}on(y "onload"sibllet(r{ur,ooirynctiodo ( secur =fcur[ooiry];in} 	init: fcur = j{urdmpleted )!, c1)nn(y.ntext, currL

t		}
	}.eotj({{
e root:nfn = jQuery.pr )f{,jQ: coe root =eon ode root

jQ	/QQntext, e root = je rootdmpleted )!, c1xt, e root :	ery,
	i = 
e roots:nfn = jQuery.pr )f{,jQntext, 		}
	}.oirery.prot"e root

jQ" ) jE = 	e rootsUntol:nfn = jQuery.proti,	untol )f{,jQntext, 		}
	}.oirery.prot"e root

jQ",	untol ) jE = 	next: fn = jQuery.pr )f{,jQntext, sibllet(ry.prot"nextSibllet"i) jE = 	et, :Qfn = jQuery.pr )f{,jQntext, sibllet(ry.prot"et, iousSibllet"i) jE = 	nextAll:nfn = jQuery.pr )f{,jQntext, 		}
	}.oirery.prot"nextSibllet"i) jE = 	et, All:nfn = jQuery.pr )f{,jQntext, 		}
	}.oirery.prot"et, iousSibllet"i) jE = 	nextUntol:nfn = jQuery.proti,	untol )f{,jQntext, 		}
	}.oirery.prot"nextSibllet",	untol ) jE = 	et, Untol:nfn = jQuery.proti,	untol )f{,jQntext, 		}
	}.oirery.prot"et, iousSibllet",	untol ) jE = 	sibllets:nfn = jQuery.pr )f{,jQntext, 		}
	}.sibllet(r(eon ode root

jQ omp{} ).fitioCpild,ey.prion(H = 	cpildroo:Qfn = jQuery.pr )f{,jQntext, 		}
	}.sibllet(requed	itioCpildion(H = 	co_vents:Qfn = jQuery.pr )f{,jQntext, 		}
	}.noQuery (gy.prot" framcyync?ionQjquedco_ventDvent( "Eompjquedco_ventWeted .	vent( " :jsel		}
	}.merge	i[]otjquedcpild

jQs ;
	i  },tsed
	jquervent, fnTncti			}
	}.nn

functQue	sed
	jqueruntol,rsad", orynction: cojQue= 		}
	}.map( uhio,Qfn,/untol ) j
n(type funcjd
	r: d-5ync!, c"Untol"	) sion,sad", oryettatol; quertjQtype Thd", orr= j;ndo, eThd", ory=, c"stplet"	) sion,jQue= 		}
	}.filionersad", or,eor,w;;LE,}nlQQtype t

jotor: jstextnction(ry.RjQuer(duorennio,
nbbuQuer!guarante cU.fn =

functQu) sion,j bee= 		}
	}.u.fn =e jQuT);	jque
ion(ry.Rjvvroleorderr	,

e roots*s( sext,v-derednied
s
nbbuQuerr  rootspt, ery,
	intypyt	) sion,j bee= nit.rjvvrol(;;LE,n}ry,}	
n(ntext, ;

j.{it:S	etk(rnit ;
	i ; })on(		}
	}.extend(heefilion:nfn = jQueryxprotjques,inotQQuery : coy.pr	etjques[ 0 ];	
nbtype notQQuery 	yxpr =i":not("y+:yxpr + ")";ry,}	
n(ntext, jquesotor: js=, c1)rsijquedmpleted )=, c1)?ry b		}
	}.ngnd.muEveQsSad", or(
y.protpxpr ))? [ry.pr	]r:nst :jsel		}
	}.ngnd.muEveQseryxprot		}
	}.grep(tjques,ifn = jQuery.pr )f{,jQn(ntext, jquedmpleted )=, c1;LE,n}));	jy 	
eoir:nfn = jQuery.protoir,	untol )f{,jQ: comuEveQdt= stosio	xur 
	j
	j

oiry];i
.Q	init: fcur = j{urdmpleted )!, c9)rsieuntol 
==etachEventromp{urdmpleted )!, c1)uery		}
	}	rcur r.is(	untol )t	) sion,uQuer{urdmpleted )=, c1))f{,jQn(muEveQd.{it: fcur rei		e}sio	xur 
	cur[oir]; ,n

ubntext, muEveQd;	jy 	
esibllet:nfn = jQuern,ry.pr )f{,jQ: coji=(steifn text, ronronue	e.nextSibllet	) sion,uQuerndmpleted )=, c1)rsinQ!==eon oE)f{,jQn(n.{it: fn );	jque
quer
QQntext, r;LE}j}on(yuerImplct( " mpleidentoccotnn = jQualityr	,

filion andefoty "onload"winnow(ir.pr) {
, qucoototr,inotQQuerytype 		}
	}.uee current qucoototr ) )f{,jQntext, 		}
	}.grep(tjque) {
, fn = jQuery.protitnction(r* jsh;
t -W018	*/

n(ntext, !!qucoototr.sion,
y.proti,ry.pr )f!==enot;	jq}) j	i  {
type qucoototr.mpleted ))f{,jQntext, 		}
	}.grep(tjque) {
, fn = jQuery.pr	nction(or, con(ty.pr	e, cqucoototr ) !==enot;	jq}) j	i  {
type ;ndo, equcoototr =, c"stplet"	) siontype ueSimplcery,
	iqucoototr ) )f{,jQQntext, 		}
	}.filionerqucoototr,ijque) {
, notQQ;ry,}	
n(qucoototr = 		}
	}.filionerqucoototr,ijque) {
 ;
	i  {
ntext, 		}
	}.grep(tjque) {
, fn = jQuery.pr	nctionor, con(t		}
	}.unAion (ry.protqucoototr ) >=Qren !==enot;	j}), 

 "onload"cndow.SafeFragm) {(r	vent( " nctio: colotjue	eoQuery srdp
	t( "|"Q),
n(safeFragd
	nvent( "ocndow.Dvent( "Fragm) {() j	itype TafeFragocndow.E.pr) {Ed
	jse	init: flotjotor: jsQuery bTafeFragocndow.E.pr) {(,on,jlotjo{op(),on,v;	 s}rs}	Qntext, safeFragrL

t.fn noQuery s =i"abbr|ar.lcle|asidn|audio|bdi|canvas|dcon|dconlotj|ch	eils|figcaptoad|figure|fooion|"Q+	 s"header|hgroup|mark|me	 r|nav|output|progt,ss|senload|summary|Dime|vidno e splefven		}
	} = 				}
	}\d+="(?:ery,|\d+)"/gr: rfosh;mcetet eteew RegExp("<(?:" + foQuery s + ")[\\s/>]"ot" ")= yrleadletW {
	sp: c	=u/^\s+/r: rxhtmlTagd
	/<(?! roa|br|col|embvd|hr|img| elem|llek|me	a|  ram)(([\w:]+)[^>]*)\/>/gi,otrtagNtypy=	/<([\w:]+)/r: rtbodyset/<tbody/i,otrhtmlset/<|&#?\w+;/r: rfoInnerhtmlset/<(?:script|style|llek)/i,otmanipuf joad_rctachabloted t= /^(?:ctachbox|rprot)$/i,otueretachrd=oetachrdQuextctachQdioretachrdb= /etachrd\s*(?:[^=]|=\s*.etachrd.)/i,otrscriptted t= /^$|\/(?:java|ecma)script/i,otrscriptted Mashrdb= /^tor:\/(.*)/r: reelenScript =u/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/gr:otuerWet/ d
dto closy mplsy mag
	ntet, root XHTMLo(#13200)iowrapMapE= ( seop{jQu:n[ 1ot"<sad",  multiplc='multiplc'>"ot"</sad", >"tQ,
n(legend:n[ 1ot"<totldset>"ot"</totldset>"tQ,
n( roa:n[ 1ot"<map>"ot"</map>"tQ,
n(  ram:n[ 1ot"<oent( >"ot"</oent( >"tQ,
n(thead:n[ 1ot"<woad">"ot"</woad">"tQ,
n(tr:n[ 2ot"<woad"><tbody>"ot"</wbody></woad">"tQ,
n(col:n[ 2ot"<woad"><tbody></wbody><colgroup>"ot"</colgroup></woad">"tQ,
n(td:n[ 3ot"<woad"><tbody><tr>"ot"</wr></wbody></woad">"tQ,

,joadIE6-8jcan'trsaricQ z
ollek, script, style,eorEanyohtml5 (NoScope) mag
,
,joadun vsd
wrapperwe	yx
div wtypenon-breaklet	:h cactvrs:e	yfro {Eof itd jQ_a

	con:n		}
	}.t, rootjhtmlSaricQ z
o? [r0ot""ot""	]r:ns 1ot"X<div>"ot"</div>"  ]jE = 	safeFragm) { 
	cndow.SafeFragm) {(r	vent( " n= 	fragm) {Di  etsafeFragm) {.sioendCpild(	nvent( "ocndow.E.pr) {("div")Q);	
wrapMap.op{group etwrapMap.op{jQu;
wrapMap.tbodysetwrapMap.tfooisetwrapMap.colgroupsetwrapMap.captoadsetwrapMap.thead;
wrapMap.thsetwrapMap.tdein		}
	}.nn.extend(he	text: fn = jQuerjquer))f{,jQntext, 		}
	}.accesr( uhio,Qfn = jQuerjquer))f{,jQQntext, vquery=, ctachEventrrion(r		}
	}.text(upr
jQ) :ion(r;

j.e

	c().sioend(n(tt

j
0]Ach,Q

j
0].ownerDvent( "Eomp	vent( " r.cndow.Text

jQerjquer))f;;LE,}, ery,,ejquer,Qiery,
	inotor: jsQ;	jy 	
eoioend:nfn = jQuenctionntext, ;

j.domManip,
iery,
	in, fn = jQuery.pr	nction(type t

jompleted )=, c1)ompor
jcmpleted )=, c11)ompor
jcmpleted )=, c9 ) sion,j: cooarget etmanipuf joadtarget,
uhio,Qy.prion(Hlyttarget.sioendCpild(	y.prion(HlyD
	ue) jE = {
xt,dofd:nfn = jQuenctionntext, ;

j.domManip,
iery,
	in, fn = jQuery.pr	nction(type t

jompleted )=, c1)ompor
jcmpleted )=, c11)ompor
jcmpleted )=, c9 ) sion,j: cooarget etmanipuf joadtarget,
uhio,Qy.prion(Hlyttarget.insartBetexe	}y.protDarget.	itioCpildion(HlyD
	ue) jE = {
betexe:nfn = jQuenctionntext, ;

j.domManip,
iery,
	in, fn = jQuery.pr	nction(type t

joe root

jQ ; = jQutt

joe root

jQ.insartBetexe	}y.protDr
jQ);	jqyD
	ue) jE = {
	fion:nfn = jQuenctionntext, ;

j.domManip,
iery,
	in, fn = jQuery.pr	nction(type t

joe root

jQ ; = jQutt

joe root

jQ.insartBetexe	}y.protDr
j.nextSibllet	);	jqyD
	ue) jE = {
oadkeepDatat
jQ	,

iy.ernalsuserouct--do notQ	vent( "	QntQuer:nfn = jQuersel", or,ekeepDatatQuery : coy.pr,ionQjquesd
	sad", ory? 		}
	}.filionersad", or,epr
jQ) :t;

j,
n(rit= eryfn text, ro(y.pr	etjques[i]) ! cjQue {
f jQuer
nbbuQuer!keepDatatrsijquedmpleted )=, c1)nctinbyt		}
	}.eelenData( getAon,
y.pr ) )n( se

tjQQtype jquede root

jQ ; = jQuttype keepDatatrsi		}
	}.xon(a
er( jquedownerDvent( ",ry.pr )f) sion,j/setGlobalEjqu( getAon,
y.pr,:,script" ) )n( se(W( seljquede root

jQ.
jQuerCpild(	y.prion(HlyD
	ue	
n(ntext, ;

j jE = {
e

	c:nfn = jQuenction: coc.pr,ionQit= eryfn text, ro(y.pr	et;

j
i]) ! cjQue {
f jQueron(ry.RjQuer(r.pr) {:n
jQs ( sext,v) {:	emoryaelekstjQQtype jquedmpleted )=, c1)nctinbyt		}
	}.eelenData( getAon,
y.pr,	y,
	i	nT);	jque
ion(ry.RjQuer(anyoreerinleten
jQsion(	init: fequed	itioCpildioctinbytequedrjQuerCpild(	y.pr.	itioCpildion(HlyD

	QuuerIf.pr
jQ
jQa.sad", ,rynsureympatQitddidp
ay/
r

	ce(#12336)
	QuuerSchEven: IE<9rsi	type jquedop{jQustrsi		}
	}.noQuery (gy.prot"sad", ;ync) sion,jjquedop{jQusotor: js= ery.QQD
	ue	
n(ntext, ;

j jE = {
clouv:nfn = jQuetdconAneEvoots,edeepDataAneEvootsc) siondconAneEvootsj=hnataAneEvootsj== jQuerrty,
	i	:hnataAneEvootsry.QdeepDataAneEvootsc=edeepDataAneEvootsc== jQuerrtnataAneEvootsj:edeepDataAneEvootsn(y.Qntext, ;

j.map(  "onload"()f{,jQQntext, 		}
	}.clouv,
uhio,QdconAneEvoots,edeepDataAneEvootsc);	jq}) j	 = {
html: fn = jQuerjquer))f{,jQntext, 		}
	}.accesr( uhio,Qfn = jQuerjquer))f{,jQQ: coy.pr	ett

j
0] omp{} juto	ii=(0,otyttlyett

jotor: j;
tjQQtype vquery=, ctachEventr)f{,jQn(ntext, jquedmpleted )=, c1jrion(ryjquedinnerHTMLdrjp
ar: dplefven		}
	}ot""	) :ion(r	tachEventLE,nd}E
	QuuerSee _versecan	t, coa shvencutb( se

	c: jQuinnerHTMLion(type tndo, evquery=, c"stplet"	rsi!rfoInnerhtmlery,
	ijquer))frsion,j(n		}
	}.t, rootjhtmlSaricQ z
oueryrfosh;mcetetery,
	ijquer))f))frsion,j(n		}
	}.t, rootjleadletW {
	sp: c	ueryrleadletW {
	sp: cery,
	ijquer))f)frsion,j!wrapMap[uerrtagNtyp.exec	ijquer))fomp[""ot""] )[1].toLg usCaol(;tQu) siion,j: uery=rjquer.rjp
ar: dpxhtmlTagot"<$1></$2>"	n;		// ytryjsionQQetext,rootjQo {
f jQuery bon(ry.RjQuer(r.pr) {:n
jQs ( sext,v) {:	emoryaelekstjQQ(ryjque	et;

j
i]ccon{	n,jQQ(rytype jquedmpleted )=, c1)nctinbytbyt		}
	}.eelenData( getAon,
y.pr,	y,
	i	nT);	jqun(ryjquedinnerHTMLy=rjquer;	jqun(rW( sel g 
QQ(ryjque	et0;i	//QuuerIf. jorebinnerHTMLythlowspan	rxceptjQu,	usn,lem fall_verhrethod	// tDncaEve(e) ( L,nu
irsi	type jque ; = jQutt

joe

	c().sioend(njquer))ry.QQD
	ue, ery,,ejquer,Qiery,
	inotor: jsQ;	jy 	
erjp
ar:With:nfn = jQuenction: c
	QuuerSnapshv" mpleDOM inncasn,.domManip sweeponsareyping nifevanto etoritsEfragm) {
	Quargsw= 		}
	}.map( uhio,Qfn = jQuery.pr )f{,jQn(ntext, [ jquedmextSibllet, jquede root

jQ ];LE,n}),ionQit= eryfn uerM, co	}
	chang)s,/jjp
aroretretedco_vextjr.pr) {:wtypempleeew co_vent
utt

jodomManip,
iery,
	in, fn = jQuery.pr	nction(.fn nextr= argso{
f j],otytte root =eargso{
f j];
tjQQtype e root ; = jQutoadDuery: jQumplernapshv" nextr_veit has Querdo(#13810)lQQ buQuernextrrsinextee root

jQ !==ee root ; = jQut	nextr= Dr
j.nextSiblletn( se(W( sel		}
	}( tr
jQ).
jQuere);	jqune rootdinsartBetexe	}y.protnextr)ry.QQD
	uoadAyiowneew co_vent	nteinclutiijque) {
 pletempleco_vextjyan
	l}otD{
		v;	
QuuerFexce	
jQueal _vemplrejwastno few co_vent	(e.g., pleter

	ceiery,
	in),jQntext, i ? ;

juerohioc
jQuere);	jy 	
eoh	ete:cfn = jQuersad", orynctionntext, ;

j.
jQuerersad", or,ep{
		v;	 y 	
eoomManip:cfn = jQuerargs,eeore_ver,QiyiowIy.ersenload )f{,
nb coFf jtesian	vfasjQd{aion stjQargsw= erre_le_ca
.siol (r[]otiers	n;		//.fn 	itio,:n
jQ,	hesScriptj,
n(rscriptj,:	oc,Efragm) {,	// ii=(0,otytlyett

jotor: j,otytset et;

j,
n(riNoClouvr= l - 1,
n,j: uery=rargso0],
n(riee currenw= 		}
	}.uee current jquer))ry
nb coWejcan'trclouv

jQ fragm) {
ympatQxon(a
etctachQd, innWebKit
n(type iee currenwuery( l < c1)ompondo, evquery!, c"stplet"	omp		}
	}.t, rootjyhachClouvrueryretachrd.ry,
	ijquer))f)f) sion,ntext, ;

j.eotj(fn = jQuediersir) sion,j: corelf etset.eqediersir);lQQ buQueriee currenw; = jQut	argso0] 
	jquer.sion,
uhio,Qiersi,etadfjhtml() )n( se(W( seltadfjdomManip,
iers,eeore_ver,QiyiowIy.ersenload );LE,n});LE,}nlQQtype erd
	jselfragm) { 
			}
	}.buildFragm) {(riers,e;

j
 0 ]downerDvent( ",ry,
	i, !iyiowIy.ersenload ch,Q

j );LE,nfctio	= fragm) {.	itioCpild;
tjQQtype fragm) {.cpild

jQsotor: js=, c1)nction((tragm) { 
	fctio;L,nu
irsi	type fctio	nction((scriptjw= 		}
	}.map( getAon,
fragm) {,:,script" ),iatch, eScript )n( se(hesScriptj etscriptjotor: j;
tjQQnry.Usn,mpleoriginalstragm) { 	,

the(laioeitpr	
eryead ompofesfctio	becauserit can	end uptjQQnry.beoretr

	ierwe	lerry )ly inncarta
etsitua{jQust(#8070). seletext, rootjQo {
f jQuery bQunode	= fragm) {;		// Hltype iy!, ciNoClouvrnctinbytbynode	= 		}
	}.clouv,
n
jQ,	 {
	 tD{
		v;	
QujQQnry.Keepiorferoocesdto clofntrycriptj textf jQcojQs ornijQu	jQQ(rytype hesScriptj nctinbytbyt		}
	}.merge	iscriptj,:getAon,
n
jQ,	,script" ) )n( se((rW( sel g 
QQ(ryeore_ver.sion,
uhio
i],:n
jQ,	i )n( se(W(
Q(rytype hesScriptj nctinbytbdoc etscriptj[tscriptjotor: j - 1 ]downerDvent( ";	
QujQQry.Rjenoad",scriptj
ytbyt		}
	}.map( scriptj,:jQs oreScript )n(
QujQQry.Ejquuow.hexecutoad",scriptj
osi ctio		vent( " insartjQu	jQQ(rtext, it= erootjQhesScriptj {
f jQuery bon(node	= scriptj[tHANn ioy(rytype rscriptted ery,
	in
jQ.tndo uer""f)frsion,jjjj!		}
	}._dataern
jQ,	,globalEjqu;yncch,		}
	}.xon(a
er( 	oc,En
jQ ; ) ti	// tcnbtype nojQ.trc nctinbytbytQry.Hodo ajaxQ
jQavaiload"...inbytbytQ		}
	}._evalUrle nojQ.trc n;	jqun(ry}nction( selebytQ		}
	}.globalEjqu( 	in
jQ.textjompn
jQ.textCo_vent	ompn
jQ.innerHTMLyuer""f).rjp
ar: dpeelenScriptot""	) n;	jqun(ry}( se((rW( sel g  se(W(
Q(ryuerFix #11809:oAvoid leaklet		emoryion((tragm) { 
	fctio e	ery,
	i s

	ue	
n(ntext, ;

j jE j}on(yuerSchEven: IE<8
uerM,nipuf joete ablos requcttToa tbody
 "onload"manipuf joadtarget,
y.protco_vent	nctinntext, 		}
	}.noQuery (gy.prot" ablo"f)frsion		}
	}.noQuery (gco_ventdmpleted )=, c1jrtco_vent	:gco_ventdfitioCpild,e"tryync?i
ryjquedgetE.pr) {sByTagNtyp("tbody")
0] om	i sjquedsioendCpild(	y.prdownerDvent( "ocndow.E.pr) {("tbody")	) :iony.pr	vd", coRjp
ar:/jQs orepofestndo  jtributp oryscriptijque) {
 pextsafeeDOM manipuf joad
 "onload"atch, eScriptery.pr	nctioy.prdQndow= (		}
	}.ngnd. jtr(gy.prot" ndo"en !==enure)Q+ "/"y+:y.prdQndo;
(ntext, jque, 

 "onload"jQs oreScriptery.pr	nctio: comuEvee= nscriptted Mashrd.exec	iy.prdQndown;	juQuermuEve nctinby.prdQndow= muEve[1];in} ction( seequedrjQuerAjtributp(" ndo";
	i  (ntext, jque, 


uerM,rkcscriptj
asthavoreb(lndodyib encejquuow.dy "onload"setGlobalEjqu( jques,iorfE.pr) {s	nctio: coc.pr,ionit= ery text, ro(y.pr	etjques[i]) ! cjQue {
f jQuernb		}
	}._dataery.prot"globalEjqu;, !nifE.pr) {s	omp		}
	}._dataernifE.pr) {s
i],:,globalEjqu;ync;
	i  }(y "onload"clofnCopyEvoot	}src, jQs.Tncti	/uQuerdestdmpleted )!, c1)uery		}
	}.hesData( trc ncnctionntext,
	i  {
.fn DLE,,ei, l,ionoldDatad
			}
	}._dataertrc n,
n(curDatad
			}
	}._dataerdest, oldDatadn,
n(evootsc=eoldData.evoots j	itype evootsc) siondey peucurData.hent v;
n(curData.evootsc=e{}ryfn text, ondo _nrevootsc) sionrtext, it= e, l etovoots[ tndo ]otor: j;ootjQo {
f jQuery bQ		}
	}.evoot.ore(gdest, DLE,,eevoots[ tndo ][tHANion(HlyD
	ue	i  {
ry.m, co	}
	clofntrpublicedconsoent( 	a,copyrpletempleoriginal
,uQuer{urData.dconsQuery {urData.dcons= 		}
	}.extend(p{} r{urData.dconsQ
	i  }(y "onload"fixClouv

jQIssuQsersrc, jQs.Tncti	.fn noQuery , ,,edcon;:otuerWetdo notQne contedo an	yping textnon-E.pr) {s	/uQuerdestdmpleted )!, c1)nctionntext,
	i  {
mpleNtypy=rdestdmpleNtyp.toLg usCaol(;;:otuerIE6-8jcopieToevootscbound via a
	eteEvoot wpesi jorebclouv

jQ.	/uQuer!		}
	}.t, rootjnoClouvEvoot rsidest

		}
	}.eern,

 ]e) siondcond
			}
	}._dataerdest )n(
Qutext, o _nrdata.evootscQuery b		}
	}.rjQuerEvoot(gdest, ,,edcon.hent vr);	 s}

QQry.Evry.edconsgetsrorferooced	
eryead ompcopied _vempleeern,

 getsrcopied tooiondestdrjQuerAjtributp(
		}
	}.eern,

 ;
	i  {
oadIEoblanksgco_vents wpesiclouorebscriptj,:( setriesdto ejquuow. fewly-yan oext
btype nojQNtypy===eoscript" rsidest.textj!==esrc.DextjQu= jQatch, eScripterdest ).vextr= src.Dext;ionnts oreScripterdest )n(
QuerIE6-10 imxt.derly	clouvsgcpildroo ompoent( 	jque) {
  jorebclassid.
QuerIE10 thlowspNoModifennioadAyiowedErr,

if.  root ig ury,,e#12132.
n
nctiontype nojQNtypy===eooent( "cnctionuQuerdestde root

jQ ; = jQudestdoutprHTMLy=rsrc.outprHTML;	 s}

QQry.Thctipa j sioear
  navoidoad",textIE9. Wpesiclouoreban	oent( ioQry.r.pr) {:nn	IE9,elem outprHTMLystrniegy abuer
ig usedsuffeni) {.rsiuerIvempletrc has innerHTMLy( setfesa
sjoenijQun,oeg use,
,joadcopyrmpletrc.innerHTMLyis( s	}
	destdinnerHTMLde#10324ionuQuer		}
	}.t, rootjhtml5Clouvrrsieetrc.innerHTMLych,!		}
	}.trim(destdinnerHTML)f)f) sion,destdinnerHTMLy=rsrc.innerHTML;	 s}

Q
nctiontype nojQNtypy===eo elem;ych,manipuf joad_rctachabloted ery,
	isrc.DLE,r, ) sionuerIE6-8jfeilsonteder is	o	}
	chachrdbstatepompa	clofntrctachboxionuerext.prot	button. Wor	i, IE6-7jfeilonteged
d	}
	clofntrr.pr) {ionuera	chachrdbsioearaccerimpofesa

	conChachrdbjquer)igototalsojyan
iondestda

	conChachrdb=rdestdetachrdb= src.etachrdry
nb coIE6-7jget co_f jQdb( seend upjyanjoete fesjquer)ompa	clofnt
,joadctachbox/.prot	button
ntean r

	cestplet	
eryead omp"Qu"ionuQuerdestdvquery!, csrc.jquer))f{,jQQdestdvquery csrc.jquer;	 s}

QuerIE6-8jfeilsontentext, ;

dsel", yve ptoads( s	}
	de
	con sel", yv
Querstateplpesiclouorebop{jQus
n
nctiontype nojQNtypy===eoop jQu"cnctiondestda

	conSel", yve=rdestdsel", yve=rTrc.d

	conSel", yv;

QuerIE6-8jfeilsonteyan ofesd

	conVquery( s	}
	lerry )ejquerplpesotuerelouorebomplrtDLE,s	of ielem totlds
Q
nctiontype nojQNtypy===eo elem;yompn
jQNtypy===eoDext roa"cnctiondestda

	conVquery csrc.a

	conVquer
	i  }(y		}
	}.eotj({{
sioendTo: "sioend",{
xt,dofdTo: "xt,dofd",{
insartBetexe:Q"betexe",{
insartAfion:n"	fion e spjp
ar:All:n"rjp
ar:With" },tsed
	jquervent, originalsncti			}
	}.nn

functQue	sed
	jquersad", orynction: cojques,	// ii=(0,otytor,w= stosio	insartr= 		}
	}( tad", orQ),
n(rlaioe= insartotor: j - 1LEfn text, rootj=(laio {
f jQuery bjquesd
	iy===elaioe? ;

juerohiocclouv,D{
	);ry b		}
	}( insart[i]Q)[ originals]( jques )n(
QujuerM
jQt, blowsuesycan:siol 
		}
	} collenloadj
astaion s,	butEoldIEonatcspa	cget()
Qujerre_{it:.siol (rjQu, jquesoget()r);	 s}

QQntext, ;

j.{it:S	etk(rnit ;
	i ; })on( "onload"getAon,
co_vextotDag	nctio: coc.pro,Qy.pr,ionit= e,fn teund erondo, eco_vextdgetE.pr) {sByTagNtyp !==nerre_d {
achEvente?eco_vextdgetE.pr) {sByTagNtyp(tDag	uer"*"	) :ion(ondo, eco_vextdq}
	}Sad", orAon !==nerre_d {
achEvente?eco_vextdq}
	}Sad", orAon(tDag	uer"*"	) :ion(tachEventLE	/uQuer!teund Query text, teund er[]otjquesw= er_vextdcpild

jQs omp{r_vextro(y.pr	etjques[i]) ! cjQue {
f jQuernb/uQuer!Dag	uer		}
	}.noQuery (gy.protDag	ncnction((teund.{it: fy.prion(HlyDnction( sele		}
	}.merge	iteund, getAon,
y.pr,	Dag	ncnn(HlyD
	ue	i  {
ntext, ;agd
==etachEventromp;agdrsi		}
	}.noQuery (gco_vextotDag	nc?
el		}
	}.merge	i[eco_vextj]otyeund Qu:fn teund, 


uerUserwe	ybuildFragm) {,	fixespofesa

	conChachrdbtused
tyy "onload"fixD

	conChachrdery.pr	nctiouQuermunipuf joad_rctachabloted ery,
	iy.prdQndown nctinby.prda

	conChachrdb=ry.prdetachrdryi  }(y		}
	}.extend(he	clouv:nfn = jQuety.pr,	dconAneEvoots,edeepDataAneEvootsc) sion: codestE.pr) {s,:n
jQ,	clouv,ei, srcE.pr) {s,sio	inPage	= 		}
	}.con(a
er( jquedownerDvent( ",ry.pr );	
nbtype 		}
	}.t, rootjhtml5Clouvruer		}
	}.isXMLDve(y.pr)oueryrfosh;mcetetery,
	i"<"y+:y.prdn
jQNtypy+ ">;ync) sion,clouvr= y.prdelouv

jQ(tD{
		v;	
QuuerIE<=8n,oeg use xt.derly	clouvrch	eteQd, unknown r.pr) {:n
jQs
lyDnction( selfragm) {Di dinnerHTMLy=rjquedoutprHTML;	 slfragm) {Di drjQuerCpild(	clouvr= fragm) {Di d	itioCpildion(Hl}nlQQtype (!		}
	}.t, rootjnoClouvEvoot uery		}
	}.t, rootjnoClouvChachrd)frsion,j(jquedmpleted )=, c1)ompjquedmpleted )=, c11t	ch,!		}
	}.isXMLDve(y.pr)o) ti	// uerWetesteQweSizzle plrej	,

eer selaccerroasadj:	t versijseer .com/getall-vs-sizzle/2,jQQdestE.pr) {s	="getAon,
clouvr);	jqusrcE.pr) {s	="getAon,
y.pr );	
nbyuerFix oreeIEoylouorebissuQsionrtext, it= ero(node	= srcE.pr) {s[i]) ! cjQue {++itnction(Qry.EnsureympatQtfesa
sjoenijQunnode	ig usedjQue {Fixesp#9587
Q(rytype destE.pr) {s[i]Q) sionQQetixClouv

jQIssuQsern
jQ,	destE.pr) {s[i]Q)n( se(W( se

	ue	
n(oadCopyrmpleev) {
epletempleoriginals( s	}
	lloenntQtype nconAneEvootsc) sionytype deepDataAneEvootsc) sionqusrcE.pr) {s	="srcE.pr) {s	ompgetAon,
y.pr );		jQQdestE.pr) {s	="destE.pr) {s	ompgetAon,
clouvr);	
QQ(rtext, it= ero(node	= srcE.pr) {s[i]) ! cjQue {
f jQuery bonclofnCopyEvoot	}n
jQ,	destE.pr) {s[i]Q)n( se(W( se
nction( seleclofnCopyEvoot	}y.protclouvr);	jqu

	ue	
n(oadPresueveyscriptijjquuowjQun

jtoryiondestE.pr) {s	="getAon,
clouv,	,script" );
rytype destE.pr) {sotor: jste0 ) sion,setGlobalEjqu( destE.pr) {s,:!inPage	ch,getAon,
y.pr,:,script" ) )n( s}
iondestE.pr) {s	="srcE.pr) {s	="node	= ery,
	
QQry.Rjext, ;

dclofntrye{ionntext, clofn;	 y 	
ebuildFragm) {:nfn = jQuety.prs,eco_vext,bscriptj,:tad", renw; = jQ: coj,uy.protcon(a
er,otyttmpotDag, tbody,twrap,otytlyetjquesotor: j,o
n(Qry.Ensureyatsafeefragm) {
	Qusafee
	cndow.SafeFragm) {(rco_vextjQ,o
n(Qn
jQs = stosio	it= eryfn text, rootjQo {
f jQuery by.pr	etjques[tHANn ionytype y.pr	ompjquei===e0 ) siion(Qry.Add:n
jQs diry )ly
Q(rytype 		}
	}.ted ery.pr	nc===eooent( "cnction(el		}
	}.merge	in
jQs,pjquedmpleted )? [ry.pr	]r:ny.pr );	
nby(oadConvartrnon-htmlsis( sa oextin
jQ
n(ry}nctiontype !nhtmlery,
	ie.pr )f) sion,j/n
jQs.{it: fcr_vextdcndow.Text

jQere.pr )f);	
nby(oadConvartrhtmlsis( sDOM n
jQsion(y}nction( selebtmp eromp omptafedsioendCpild(	cr_vextdcndow.E.pr) {("div")Q);	
	nby(oadDesaricQ z
oarstandard/jjpresun(atjQu	jQQ(r;agd
uerrtagNtyp.exec	ie.pr )fomp[""ot""] )[1].toLg usCaol(;;	jqun(wrapsetwrapMap[tDag	]cconwrapMap._a

	con;	
	nby(ompdinnerHTMLy=rwrap[1]y+:y.prdrjp
ar: dpxhtmlTagot"<$1></$2>"	ny+:wrap[2];	
	nby(oadDescend thlough
wrapperss( s	}
	right co_vent
ut(el	y=rwrap[0Nn ioy(r	init: fj-- nctinbytbytmp eromp.laioCpild;
	 se(W(
Q(ry uerM,nucoly orealeadlet 	in
	sp: c	rjQuerd.bytIE
nbnb/uQuer!		}
	}.t, rootjleadletW {
	sp: c	rsirleadletW {
	sp: cery,
	ie.pr )f) sion,j//n
jQs.{it: fcr_vextdcndow.Text

jQerrleadletW {
	sp: ceexec	ie.pr )
0] ) n;	jqun(W(
Q(ry uerRjQuer(IE'spautoinsartrd.<tbody>epletemoad",tragm) {

	nbb/uQuer!		}
	}.t, rootjtbodys) ti	// tcnuerStplet	wasta <woad">, *may*t/ d
dspurious.<tbody>	// tcnjque	et;agd
==e" ablo"frsi!rtbodyery,
	ie.pr )frion(ryy(ompd	itioCpildi:jion(rycnuerStplet	wasta barey<thead>rext<tfooi>	// tcn	wrap[1]y
==e"<woad">"frsi!rtbodyery,
	ie.pr )frion(ryy(ytmp :ion(ryy(y0;i	//Quel	y=re.pr rsijquedcpild

jQsotor: j;	jqun(r	init: fj-- nctinbytbybtype 		}
	}.noQuery (g(tbodysetjquedcpild

jQs[j])ot" body"yncch,!tbodyecpild

jQsotor: jsnctinbytbytQequedrjQuerCpild(	tbodys);	jqun(ry}( se((rW( sel g ion(el		}
	}.merge	in
jQs,pompdcpild

jQs ;
	
Q(ry uerFix #12392j	,

WebKitb( seIEo> 9
	nby(ompdtextCo_vent	=e""
	
Q(ry uerFix #12392j	,

oldIE ioy(r	init: fompd	itioCpildinctinbytbytmpdrjQuerCpild(	tmpd	itioCpildin;	jqun(W(
Q(ry uerRjQembvrpofestop-lev)ltcon(a
eerr	,

et.der eelenuptjQQnytmp ertafedlaioCpild;
	 seW( se

	ue	
n(oadFix #11356: Celerijque) {
 pletefragm) {
	Qtype tmp Query bTafedrjQuerCpild(	tmpr);	 s}

QQry.Reyan a

	conChachrdbforEanyo.protsn( seetachboxQsionuerabouts( sDLEaioend contempleDOM innIEo6/7t(#8060)lQQuQuer!		}
	}.t, rootjsioendCpachrdbQuery b		}
	}.grep(tgetAon,
n
jQsot" elem;yn,"fixD

	conChachrdion(Hl}nlQQts= ery.Q	init: f(y.pr	etn
jQso{
f j])o) ti	// uer#4087 -rIveoriginn( sea
sjoenijQunjque) {
 arepofessent, ( setf
jQ
j	// uermpatQjque) {, do notQ	v an	ypingionytype tad", renwrsi		}
	}.unAion (ry.prottad", renw; !==n-1)nction((con(inuvers.Q

tjQQxon(a
ere= 		}
	}.con(a
er( jquedownerDvent( ",ry.pr );	
nbQry.Aioendontefragm) {
	Qutmp ergetAon,
tafedsioendCpild(	y.pr ),	,script" );

nbQry.PresueveyscriptijjquuowjQun

jtoryion,uQuer{on(a
ere) sionqusetGlobalEjqu( tmpr);	 sd}E
	QuuerCaptup.hexecutoad"stjQQtype scriptj nctinbytjs= ery.QQQ	init: f(y.pr	ettmp[ jf j])o) tiytbybtype rscriptted ery,
	iy.prdQndowuer""f)fnctinbytbyscriptjo{it: fy.prion(HlyQ(W( sel
	jquD(Hl}nlQQtmp erery,
	
QQntext, safe;jE = {
cllenData:nfn = jQuety.prs,e/*
iy.ernals*eracceptDatatQuery : coy.pr, DLE,,eid,edcon,sio	it= e,sio	in.ernalKeys= 		}
	}.exrn,

osio	xetet et		}
	}.cetetosio	dey peEern,

 = 		}
	}.t, rootjdey peEern,

,otyts.procos= 		}
	}.evoot.s.procoryfn text, ro(y.pr	etjques[i]) ! cjQue {
f jQuer
nbbuQueracceptDatatuer		}
	}.acceptData	ie.pr )f) si
Q(rytdb=ry.pr[ in.ernalKeysNn ioy(dcond
	id{rsicetet[	id{];	
	nbytype ncons) tiytbybtype data.evootscQuery b	n text, ondo _nrdata.evootscQuery b	n Qtype s.proco[ tndo ]r)n( selebytQ		}
	}.evoot.
jQuerery.pr, DLE,	v;	
QujQQnQry.Thcti
jQa.shvencutb( savoid 		}
	}.evoot.
jQuer'spuerrhead	jqun(ry}nction( selebytQ		}
	}.rjQuerEvoot(gy.pr, DLE,,edcon.hent vr);	 sun(ry}( se((rW( sel g ion(eluerRjQuer(xetet ouctr_veit wastnotb(lndodyirjQuerd.byt		}
	}.evoot.
jQueriytbybtype cetet[	id{]s) ti	// tcndey peucetet[	id{];	
	nby,joadIEo,oegtnotb(liownuss( sdey peueern,

 tused
tiesdpleten
jQso
	nby,joadnext,oegtit haer(a rjQuerAjtributp  "onload"ad"Dvent( "En
jQs;
	nby,joadwe m
	c:hent vroreeompofesencasnstjQQ(rytype dey peEern,

 )n( selebytdey peue.pr[ in.ernalKeysNn ( se((rWnctiontype ;ndo, ey.prdrjQuerAjtributp !==nerre_d {
achEvente)n( selebyty.prdrjQuerAjtributp( in.ernalKeys)n ( se((rWnction( selebyty.pr[ in.ernalKeysN e	ery,
	i sel g ion(eljerre_dey pedIdjo{it: fidion(HlyQ(W( sel
	jquD(Hl}nE = {
_evalUrl:nfn = jQueturl )f{,jQntext, 		}
	}.ajax(( selurl:nurl,otyttndo: "GET"osio	dconTndo: "script",
n(rosync:ry,
	i,
n(rglobal:ry,
	i,
n(r"thlows":Q {
	
qq}) j	  })on		}
	}.nn.extend(he	wrapAll:nfn = jQuerhtmlsnctionuQuer		}
	}.uee current htmlsnc) sion,ntext, ;

j.eotj(fn = jQueiQuery bQ		}
	}(uhio).wrapAllt html.sion,uhio,Qincnn(HlyD;;LE,}nlQQtype t

j
0] ) {
QnQry.Thiijque) {
 ( swrapsofestarget areund
QnQ: cowrapset		}
	}( html,,Q

j
0].ownerDvent( "E).eqe0)cclouv,D{
	);r
nbbuQuerQ

j
0].e root

jQ ; ery bQwrapdinsartBetexe	}t

j
0] );	 sd}E
	Quwrapdmap(fn = jQuenction((: coy.pr	ett

jn ( se(	init: fequed	itioCpildirsijqued	itioCpilddmpleted )=, c1)nctinbytby.pr	etjque.	itioCpild;
sel g ion(entext, jque, HlyD;.sioend(npr
jQ);	jq}	
n(ntext, ;

j jE = {
wrapInner:nfn = jQuerhtmlsnctionuQuer		}
	}.uee current htmlsnc) sion,ntext, ;

j.eotj(fn = jQueiQuery bQ		}
	}(uhio).wrapInnert html.sion,uhio,Qincnn(HlyD;;LE,}nlQQntext, ;

j.eotj(fn = jQuenction(: corelf et		}
	}( tr
jQ),ion((con() {s	="sadfjcon() {s();r
nbbuQuercon() {sotor: jsnctinbytcon() {sowrapAllt htmls)n ( seWnction( selesadfjsioend(nhtmls)n jquD(Hl}) jE = {
wrap:nfn = jQuerhtmlsnction.fn uee currenw= 		}
	}.uee current htmls)n ( sntext, ;

j.eotj(fn = jQueiQuery b		}
	}( tr
jQ).wrapAllt uee currenw? html.sion,uhio,Qinc:nhtmls)n jq}) jE = {
unwrap:nfn = jQuenctionntext, ;

j.e root().eotj(fn = jQuenction(uQuer!		}
	}.noQuery (guhio,Q"body"yncQuery bQ		}
	}( tr
jQ).
jp
ar:Withe t

jocpild

jQs ;
	iquD(Hl}).end() j	  })on.fn uframc, getStyles r{urCSSe spalphnd
	/alphn\([^)]*\)/i,otropacityr
	/opacity\s*=\s*([^)]*)/r: reosi jQu = /^(top|right|bottom|left)$/r: uerswsiooad",uQudidp
ay	ig usnleoristar.s:wtypemoad",rxcepte" ablo"ot" ablo-celu;, ori" ablo-captoad": uersee plrej	,

didp
ay	jquerj:	t ves://dev)lsed
.mozilla.org/en-US/docs/CSS/didp
ay: rdidp
ay/wapset/^(usnl| ablo(?!-c[ea]).+)/r: rmargiu = /^margiu/r: rfumdp
	t eteew RegExp( "^("y+:erre_{fum + ")(.*)$"ot" "Q),iorfumusnpx eteew RegExp( "^("y+:erre_{fum + ")(?!px)[a-z%]+$"ot" "Q),iorrelNum eteew RegExp( "^([+-])=("y+:erre_{fum + ")"ot" "Q),iojquedidp
ay	= { BODY:Q"block"  = {
cssShown= { eosi jQu:n"	bsolutp"otvisibility:n"hidden",
didp
ay:Q"block"  = 
cssNselalTrans sel = ( sey p.erSparore: e,fn tentWeight: 400jE = {
cssEern,
 = s "Top"ot"Right"ot"Bottom"ot"Left"tQ,
ncssPrefixesp= s "Webkit"ot"O"ot"Moz"ot"ms"sNn (uerntext, a cssbtused
ty mapperw( sa po() {icoly vood,

etefixedbtused
tyy "onload"vood,
Puseery (gstyle,entypyt	{

Quershvencutbtextnry s mpatQarepnotbvood,

etefixed
btype ntypy
etstyle )f{,jQntext, ntyp;	i  {
oadctach
textvood,

etefixedbnry sio: cocapNtypy=rfuncj:h cAte0)ctoUpperCaol(;t+ funcjd
	r: 1),ionorigNtypy=rfunc,ionit= cssPrefixesotor: j;
tj	init: fi-- nctinbntypy=rcssPrefixes[tHANi+ocapNtyp;
rytype ntypy
etstyle )f{,jQQntext, ntyp;	iue	i  {
ntext, origNtyp; }(y "onload"isHidden(
y.protplsnctiooadisHidden might beeeoreeddplete		}
	}#filion  "onload;iooadinympatQxa	i, r.pr) {:will beesecondeiery,
	i
by.pr	etjq	ompjque;inntext, 		}
	}.css,
y.pr,:,didp
ay"	nc===eousnl" uery		}
	}.con(a
er( jquedownerDvent( ",ry.pr );	}(y "onload"shvwHide(tjque) {
, shvw	nctio: codidp
ay,uy.prothidden,
,j: uers = stosioiersir= e,siotor: js= jque) {
otor: j;
tjtext, rooersirjQotj: j;ooersif jQuery y.pr	etjqueoots[ oersir];inbtype !e.pr.style )f{,jQQcon(inuvers.}

,j: uers[ oersir]d
			}
	}._dataery.pr,:,olddidp
ay"	ners.didp
ay	= e.pr.style.didp
ay;inbtype shvw	nctioQQry.Reyan mpleiefven
didp
ay	of.pr
jQr.pr) {:( selernr_veit 
j	// uerbeorethidden.bytxa	cad corulos extnotion(uQuer!: uers[ oersir]drsididp
ay	===eousnl" Query bQe.pr.style.didp
ay	=e""
	el g ion(uerSe 	jque) {
 	inch haer(b encuerrridden.wtypedidp
ay:QnoenntQooadinyatstyleshee{:( swpatjvvrs	}
	de
	con blowsuetstyle 
j	// uerpextsuch an	r.pr) {ion(uQuere.pr.style.didp
ay	===eo"frsiisHidden(
y.pryncQuery bQ: uers[ oersir]d
			}
	}._dataery.pr,:,olddidp
ay",rcss_a

	conDidp
ay(jquedmpleNtypncnn(HlyD
	uenction( ion(uQuer!: uers[ oersir]dQuery bQhidden.=iisHidden(
y.pryn;	
	nbytype nidp
ay	rsididp
ay	!==eousnl" ueryhidden.nction(el		}
	}._dataery.pr,:,olddidp
ay",rhidden.?ididp
ay	: 		}
	}.css,
y.pr,:,didp
ay"	nc)n( se(W( se

	ue	i  {
oadSan ofesdidp
ay	of.most ompofesjque) {
 inyatsecondeloop{
ry.t savoid mpleco_stany:niflowtjtext, iersir= erooersirjQotj: j;ooersif jQuery y.pr	etjqueoots[ oersir];inbtype !e.pr.style )f{,jQQcon(inuvers.}
nbtype !shvw	ompjquedstyle.didp
ay	===eousnl" uere.pr.style.didp
ay	===eo"fQuery by.pr.style.didp
ay	=eshvw	? : uers[ oersir]duer""f:eousnl";	iue	i  {
ntext, jqueootsrL

t		}
	}.nn.extend(he	css:tsed
	jquervent, jquer))f{,jQntext, 		}
	}.accesr( uhio,Qfn = jQuery.pr,:vent, jquer))f{,jQo: colen,tstyles,ion((mapE= (} juto	ii=(0;r
nbbuQuer		}
	}.ueAion (rntypyt	) sion,jstyles ergetStyles fy.prion(HlyQlenj=hfuncjtor: j;
tjQQntext, rootjQotj {
f jQuery belmap[tfunc[tHANi]d
			}
	}.css,
y.pr,:func[tHAN,ry,
	i, styles )n( se(W(
Q(ryntext, mup
	el g ion(ntext, vquery!, ctachEventrrion(r		}
	}.styleery.pr,:vent, jquer))f:ion(r		}
	}.css,
y.pr,:funcf;;LE,}, eent, jquer,Qiery,
	inotor: js>c1)nn(E = 	shvw:nfn = jQuenctionntext, shvwHide(tuhio,QD{
		v;	 y 	Qhide:nfn = jQuenctionntext, shvwHide(tuhio	v;	 y 	Qtogglr:nfn = jQuerstatepnctionuQuer;ndo, eTtatep===eoboollen"	) sion,ntext, Ttatep?tt

joshvw() :t;

j.hide(;;LE,}nlQQntext, ;

j.eotj(fn = jQuenction(uQuerieHidden(
pr
jQ) ) sion,j		}
	}( tr
jQ).shvw();( seWnction( sele		}
	}( tr
jQ).hide(;;LE,uD(Hl}) jE  })on(		}
	}.extend(heery.Add:
etstyle tused
ty hook
 pextuerrridoete fesa

	con
 uerbehavoextufrgettorebandjyanjoeteatstyle tused
tye	cssHook
:n( seopacity:n( se	get:nfn = jQuety.pr,	computnte)n( seleuQuercomputnte)n( sele uerWetshvuldeiyway/
get a fumbvrp_verhpleteopacity sele : cojQue= {urCSSery.pr,:,opacity"ion(HlyQ(ntext, rQue===eo"f? "1"	: nitn( se(W( se

	ue	i = {
ry.Duery:automatoccoly orea"px"ontemplsleeossibly-unit vsd
tused
ties 
cssNumbvr:n( se"columnCount":Q {
	 jut"fillOpacity":Q {
	 jut"fentWeight":Q {
	 jut"fvenHeight":Q {
	 jut"opacity":Q {
	 jut"order":Q {
	 jut"orphans":Q {
	 jut"widows":Q {
	 jut"zIersi":Q {
	 jut"zoom":Q {
	
q = {
ry.Add:
ettused
tiesdwhosy nry s you.wtshontefix betexe: uersenjoeteextganjoete fesjquer
ncssProp
:n( seoadnexmcQ z
ofloatQxssbtused
tyjut"float":n		}
	}.t, rootjxssFloatQ? "xssFloat"f:eostyleFloat"
q = {
ry.Getbandjyanpofesstyle tused
ty onyatDOM N
jQ
nstyle:nfn = jQuety.pr,	eent, jquer,Qextrns) tiytry.Duery:yanpstyles ads(exti( seeomr) {:n
jQs
lytype !e.pr	ompjquedmpleted )=, c3	ompjquedmpleted )=, c8 uerye.pr.style )f{,jQQntext,
	is}

QQry.M, cosureympatQwe'rejworklet	wtypempleright eent
e : cojQu, DLE,,ehook
 jutoorigNtypy=r		}
	}.cemelCaol(:funcf;,otytstyle = e.pr.style;
tjQntypy=r		}
	}.cssProp
[ origNtypr]duer(r		}
	}.cssProp
[ origNtypr]d="vood,
Puseery (gstyle,eorigNtypr)Q);	
	nry.getsrhook 	,

the(etefixedbvvrojQu	jQuerpeyiowed.bytthe(unetefixedbvvrojQu	jQhook
 =r		}
	}.cssHook


functQuuer		}
	}.cssHook


origNtypr];	
	nry.Chach _vers'rejyanjoeteatjquer
nQtype vquery!, ctachEventr)f{,jQQQndow= ondo, evquer;

nbQry.convartrrelnied
 fumbvrpstplets (+=eext-=)ontentlnied
 fumbvrs. #7345ion(uQuerted )=, c"stplet"	rsi( bee= nrelNum.exec	ijquer))ncQuery bQ: uerd
uerret[1]y+:1)nc*rret[2]y+:parseFloat(			}
	}.css,
y.pr,:func	nc)n( se(oadFixes bug #9237
Q(ryQndow= "fumbvr"
	el g ion(uerM, cosureympatQNaN andefQuer: uers  roory:yan.rSee: #7116ion(uQuervquery=,efQuerompondo	===eouumbvr"frsiisNaN	ijquer))f)f{
Q(ryntext,
	el g ion(uerIf a fumbvrpwastpasserwe	, orea'px'ontemple(rxcepte	,

carta
etCSSttused
ties)ion(uQuerted )=, c"uumbvr"frsi!		}
	}.cssNumbvr[ origNtypr]dQuery bQ: uerd+=e"px"
	el g ion(uerFixesp#8908,rit can	betdone.mor
	lerry )ly byts.proforebs p.er
 inycssHook
,	// uerbutQitdwvuldemeans( sdeEven eight (	,

jvvryttusb.pratoc tused
ty)eidentoccotnn = jQu,
nbbuQuer!		}
	}.t, rootjxelerClouvStylefrsivquery=, c""frsifuncjoersiOf("_vergreund")i===e0 ) sion,jstyle

functQue	"inherit"
	el g ion(uerIf a hook wastprovidnd,	usn,leat jquer,Qomplrwtsee

	c:yanpofess.profordbjquer
nbbuQuer!hook
 uery("yan" inyhook
)fomp(: uerd
uhook
.set,
y.protjquer,Qextrns))y!, ctachEventr)f{,( se(oadWrapperw( sxt,v) {:IEepletemproworetrrr,
s wpesi'injquid'r: uers  rotprovidnd( se(oadFixes bug #5509
	nbytryjsionQQestyle

functQue	jquer;	jqunDncaEve(e) ( L,nu
irsiWnction( seluerIf a hook wastprovidnd
get mpleeon-computnte: uerdpletemplrr
nbbuQuerhook
 rsi"gan" inyhook
	rsi( bee= hook
.get,
y.proty,
	i, extrns))y!, ctachEventr)f{,lyQ(ntext, rQu
	el g ion(uerOmplrwtsee

	c:get mple: uerdpletemplsstyle oent( ioQ,ntext, Ttyle

functQ;	iue	i = {
css:nfn = jQuety.pr,	eent, extrn, styles )ction.fn uumotjqu,ehook
 jutoorigNtypy=r		}
	}.cemelCaol(:funcf;;

QQry.M, cosureympatQwe'rejworklet	wtypempleright eent
e ntypy=r		}
	}.cssProp
[ origNtypr]duer(r		}
	}.cssProp
[ origNtypr]d="vood,
Puseery (ge.pr.style,eorigNtypr)Q);	
	nry.getsrhook 	,

the(etefixedbvvrojQu	jQuerpeyiowed.bytthe(unetefixedbvvrojQu	jQhook
 =r		}
	}.cssHook


functQuuer		}
	}.cssHook


origNtypr];	
	nry.If a hook wastprovidnd
get mplecomputnte: uerdpletemplrr
nbuQuerhook
 rsi"gan" inyhook
	)f{,jQo: le= hook
.get,
y.prot {
	 textrns)
	is}

QQry.Omplrwtse, _vea wayonteget mplecomputnte: uerdexis{
, usn,leat
nQtype vquy=, ctachEventr)f{,jQn: le= {urCSSery.pr,:eent, styles )n( s}

QQryconvartr"nexmcQ"ontecomputnte: uer
nQtype vquy=, c"nexmcQ"orsifunc inycssNselalTrans sel )f{,jQn: le= {ssNselalTrans sel

functQ;	iue	
QQry.Rjext,,.convartoete o fumbvrptypfexcedeorEatqucoototr wastprovidnd
ande: lelook
	fumeric
nQtype extrns=, c""fompjxtrns) tiyt	num etparseFloat(	: le)n( sentext, jxtrns=, cD{
		uer		}
	}.isNumeric(	fum )fr	fum uer0f:evalers.}
nbntext, vqu jE  })on(ry.NOTE:Qwe'er
inclutid mple"wiod,w" inywiod,w.getComputntStyle
uerbecauserjsdeteounnode.js:will break	wtypoutQit.
type wiod,w.getComputntStyles) tiygetStylesue	sed
	jquery.prynctionntext, wiod,w.getComputntStyleery.pr,:eQuer;
	i ; 
	{urCSSue	sed
	jquery.pr,:eent, _computnte)n( se: cowidth, minWidth, maxWidth,
jQQcomputnte= _computnteompgetStyles fy.prio,o
n(Qry.getPused
tyVquer)ig ouctrnatcrdbforE.css,'filion'):nn	IE9,esee #12537
Q(rjQue= {omputnte? {omputnt.getPused
tyVquer(rntypyt	omp{rmputnt

functQu:ctachEvent,otytstyle = e.pr.style;
tjQuQuercomputnte)n( 
nbbuQuerrQue===eo"frsi!		}
	}.con(a
er( jquedownerDvent( ",ry.pr )f) sion,jjQue= 		}
	}.styleery.pr,:ventr);	 sd}E
	QuuerA tributp ntemple"awesare hverhbytDeansEdwards"
	QuuerCprore < 17
andeSafari 5.0 usns "computnte: uer"	
eryead omp" jQdb: uer"	forEmargiu-right
	QuuerSafari 5.1.7 (atQelest)rntext,s
eercun(agej	,

a larger:yanp, evquers,	butEwidtheseemss( sDLEreliabctrpixelj	// uermpcti
jQaga
ert mpleCSSOM draftss.pr:	t versidev.w3.org/csswg/cssom/#resalved-vquers
nbbuQuerrfumusnpxery,
	init ;	rsirmargiuery,
	intypyt	) si( se(oadRjQembvrpofesoriginalsvquers
nbb	widthe= style.width;	jqunminWidthe= style.minWidth;	jqunmaxWidthe= style.maxWidth;	
nby(oadPutdinympleeew : uers nteget aecomputnte: uerdoution,jstyle.minWidthe= style.maxWidthe= style.widthe= nitn( se(jQue= {omputnt.width;	( se(oadRjvartr	}
	chang)dsvquers
nbb	style.widthe= width;	jqunstyle.minWidthe= minWidth;	jqunstyle.maxWidthe= maxWidth;	 se

	ue	
Q(ntext, rQu
	e ; }nctiontype nvent( "onvent( "E.pr) {.{urrootStyles) tiygetStylesue	sed
	jquery.prynctionntext, jquedcurrootStyle
	i ; 
	{urCSSue	sed
	jquery.pr,:eent, _computnte)n( se: coleft, rs,iosLeft,
jQQcomputnte= _computnteompgetStyles fy.prio,oQ(rjQue= {omputnte? {omputnt

functQu:ctachEvent,otytstyle = e.pr.style;
tjQuerAvoid yanjoetere{:( sr

	cestplet	plrr
nbuersodwe duery:de
	con t sauto
bbuQuerrQue==:eQuerrsistylefrsistyle

functQu)f{,jQQntee= style

functQ;	iue	
QQry.Fletemplsawesare hverhbytDeansEdwards
QQry.t versierik.eae.net/archives/2007/07/27/18.54.15/#eomr) {-102291	
	nry.If we'rejnotQ	eallet	wtypea rjgularrpixel fumbvr
/ uerbutQa fumbvrpmpatQhasta weirseendlet, weQne conteconvartrin t spixelj	//uerbutQuse xosi jQu xssb jtributpj,:(s mposy  rotprorootjQuals( s	}
	  root r.pr) {:
eryead	//uerandewejcan'trmlesurepofes  root ieryead becauserit might trigger:ac"stverlet	deyis"ttusb.pr
bbuQuerrfumusnpxery,
	init ;	rsi!reosi jQuery,
	intypyt	) si( seoadRjQembvrpofesoriginalsvquers
nbblefte= style.leftn( sens = e.pr.runtimeStyle
	isensLefte= r
 rsirs.leftn(
by(oadPutdinympleeew : uers nteget aecomputnte: uerdoution,type rsLefte) sion,jjs.leftsetjquedcurrootStyle.leftn( se}otytstyle.leftsetntypy===eofentSize"f? "1em"	: nitn( sentee= style.pixelLefte+e"px"
	
se(oadRjvartr	}
	chang)dsvquers
nbbstyle.leftsetleftn( setype rsLefte) sion,jjs.leftsetrsLeft;	 se

	ue	
Q(ntext, rQue===eo"f? "auto"	: nitn( };	}(y "onload"setPosi jveNumbvr,
y.protjquer,Qsubtcact	nctio: comuEveesue	rfumdp
	t.exec	ijquer));inntext, muEveesu?	//uerGuard/aga
ert tachEventr"subtcact",ry.g., wpesi jnd
a
 inycssHook
	//Math.max( e, muEvees[ 1 ] -pe subtcact	uer0f)	ny+:( muEvees[ 2r]duer"px"o)f:ionjquer;	}(y "onload"augm) {WidthOrHeightety.pr,	eent, extrn, isBorderBox, styles )ctio.fn usetjxtrns=, c( isBorderBoxf? "border"f:eocon() {" )frionry.If web(lndodyihaer(mpleright mlesuret( ",ravoid augm) {atjQu	jQ4f:ionuerOmplrwtseeiniticQ z
o	,

horizon(al extvortoccottused
ties 
	ntypy===eowidth"f? 1 : e,f
Qn: le= 0;
tjtext, roo < 4roo += 2r) tiytry.boypeboxfmodels,rxclutiimargiu,rsodoreait _versewanto t
nQtype extrns=, c"margiu" )f{,jQn: le+
			}
	}.css,
y.pr,:extrns+ cssEern,
[tHAN,r {
	 tstyles )n( s}

QQuQuerieBorderBoxfnctioQQry.border-boxfinclutistpaddlet, so rjQuerait _versewantoco_vent
ut(type extrns=, c"con() {" )fery bQ: u -
			}
	}.css,
y.pr,:"paddlet"s+ cssEern,
[tHAN,r {
	 tstyles )n( sd}E
	QuueratQtfctipoi ",ryxtrnsigototborderdnextmargiu,rsodrjQueraborder
ut(type extrns!, c"margiu" )f{,jQnQ: u -
			}
	}.css,
y.pr,:"border"f+ cssEern,
[tHANe+e"Width",r {
	 tstyles )n( sd}EsiWnction( selueratQtfctipoi ",ryxtrnsigototcon() {,rsodoreapaddlet,jQn: le+
			}
	}.css,
y.pr,:"paddlet"s+ cssEern,
[tHAN,r {
	 tstyles )n( selueratQtfctipoi ",ryxtrnsigototcon() {dnextpaddlet, so oreaborder
ut(type extrns!, c"paddlet"s)f{,jQnQ: u +
			}
	}.css,
y.pr,:"border"f+ cssEern,
[tHANe+e"Width",r {
	 tstyles )n( sd}EsiW	i  {
ntext, vqu j}n( "onload"getWidthOrHeightety.pr,	eent, extrnyt	{

QuerStar.	wtypeoffyanptused
ty, 	inch 
jQrquivqu) {:( smpleborder-boxf: uer
n.fn : uerIeBorderBoxf=Q {
	 jut: le= ntypy===eowidth"f? jquedoffyanWidthe: jquedoffyanHeight jutstyles ergetStyles fy.prioosioieBorderBoxf=Q		}
	}.t, rootjboxSizlet	ch,		}
	}.xss,
y.pr,:"boxSizlet",ry,
	i, styles )p===eoborder-box";

Quersare non-htmlsjque) {
 ntext, tachEventrpextuffyanWidth, so ctach
texteQue/tachEvent
Quersvg -pt ves://bugzilla.mozilla.org/shvw_bug.cgi?id=649285
Qry.M,thML -pt ves://bugzilla.mozilla.org/shvw_bug.cgi?id=491668
Qtype vquy<=e0 uervquy=,:eQuer; tiytry.Foree_verhntecomputntetpesi ncomputntexssbtypnecesraryion: le= {urCSSery.pr,:eent, styles )n( stype vquy<e0 uervquy=,:eQuer; tiytn: le= e.pr.style

functQ;	iue	
QQry.Computnt unit	ig usedpixelj.rStop plrejandentext,.
bbuQuerrfumusnpxery,
	: lnc) sion,ntext, valers.}

,joadwe ne con}
	chachrpextstyle 
nncasn,a blowsuet	inch ntext,s
unreliabcesvquers
nbuerpextgetComputntStylessiu) {ly fallse_verhntemplereliabcese.pr.styleionjquerIeBorderBoxf=QieBorderBoxfrsiee		}
	}.t, rootjboxSizletReliabcesuervquy=,= e.pr.style

functQQ);	
	nry.NexmcQ z
o""otauto, ( sext,  rorpextextrnion: le= parseFloat(	: le)	uer0;	i  {
oad jQumpleactierabox-sizlet		odel t sadd/subtcact	irnifevantostyles{
ntext, (	: le+ionaugm) {WidthOrHeighteion,y.pr,iyt	nunc,ion	extrnyuer(risBorderBoxf? "border"f:eocon() {" ),
n,j: uerIeBorderBox,otytstyles
nb)
	)e+e"px"
	


uerTrys( sdetermven 	}
	de
	con didp
ay	jquer)ompan	r.pr) {i "onload"css_a

	conDidp
ay(pn
jQNtypynctio: codoc etnvent( ",otydidp
ay	= e.prdidp
ay[pn
jQNtypy]LE	/uQuer!didp
ay	) siondidp
ay	= actualDidp
ay(pn
jQNtyp,:	oc	v;	
QuuerIvempletimple wayofeils,ioraddplete
eridejan uframc
bbuQuerdidp
ay	===eousnl" uer!didp
ay	) sion	/y.Usn,mple(lndody-cndow.d uframc
if. ossiblr
nbbuQrtypy=r( uframc
om	i se		}
	}("<uframc
framcborder='0' width='0' height='0'/>")lQQ b.xss,
"xssText",:,didp
ay:block !impoota {" )lQQ ;.sioendToe nveonvent( "E.pr) { );	
nbQry.Ayway/
writn,a eew HTMLyskey pad"so Webkit ( seFirefoxfduery:chokt ouior jQ
nbQdoc et( uframc
0].con() {Wiod,w ueruframc
0].con() {Dvent( "E).dvent( ";	nbQdoc.writn("<!docted )html><html><body>");	nbQdoc.clool(;;:otondidp
ay	= actualDidp
ay(pn
jQNtyp,:	oc	v;	nbbuQrtyp.ch	ete()
	is}

QQry.S orepofeslerry )ede
	con didp
ay
		e.prdidp
ay[pn
jQNtypy] etnidp
ay;in  {
ntext, nidp
ay;i


uerCoreeddONLYdpletewtypid"css_a

	conDidp
ayy "onload"actualDidp
ay(pntyp,:	oc	vctio: coy.pr	et		}
	}( doc.cndow.E.pr) {(intypyt	).sioendToe nveobodys),otydidp
ay	= 		}
	}.xss,
y.pro0],:,didp
ay"	n;
ty.prdrjQuer();inntext, nidp
ay;i


		}
	}.eotj([ "height",:,width"f],Qfn = jQueri,entypyt	{
			}
	}.cssHook


functQu= ( seget:nfn = jQuety.pr,	computnt,Qextrns) tiyteuQuercomputnte)n( selery.carta
etjque) {
 can	haer(die) soad"info _verseinvisibly shvw	ofem selery.hvwjvar,rit m
	c:heer(a currootrdidp
ay	style mpatQwvuldebenhEvtdpletemp
j	// nntext, jquedoffyanWidthe===e0 rsirdidp
ay/wapery,
	i		}
	}.css,
y.pr,:,didp
ay"	nc)frion(ry		}
	}.twap( y.pr,	cssShow,nfn = jQuenction// nntext, getWidthOrHeightety.pr,	eent, extrnytn(HlyQ(})f:ion(r	getWidthOrHeightety.pr,	eent, extrnytn(HlyD
	ue,

QQset:nfn = jQuety.pr,	jquer,Qextrns) tiyt(: cortyles erextrnsch,getStyles fy.prion(Hlyntext, TetPosi jveNumbvr,
y.protjquer,Qextrnsrion(raugm) {WidthOrHeighteion,n,y.pr,iyt	t	nunc,ion	n	extrn,ion(ry		}
	}.t, rootjboxSizlet	ch,		}
	}.xss,
y.pr,:"boxSizlet",ry,
	i, styles )p===eoborder-box",ion(rystyles
nbQ ; : elQQ ;;	iue	i ; })on(uQuer!		}
	}.t, rootjopacityrt	{
			}
	}.cssHook
.opacityr
	( seget:nfn = jQuety.pr,	computnt	) sion	/y.IE usns filion
 pextupacity selntext, rupacityery,
	i(computnt	rsijquedcurrootStyles?tjquedcurrootStyle.filion :re.pr.style.filion)wuer""f)frion(r( 0.01 * parseFloat(	RegExp.$1f)	ny+:""f:ion(r{omputnte? "1"	: ""
	ele,

QQset:nfn = jQuety.pr,	jquers) tiyt(: cortylee= e.pr.style,ion((currootStylesetjquedcurrootStyle,ion((opacityr
			}
	}.isNumeric(	jquers) ? "alphn(opacity="f+ jquers* 100 + ")"	: "",ion((filion = currootStylesrsicurrootStyle.filion ompttyle.filion omp""
	
se(oadIE hasttroubceswtypeopacityr_veit ,oegtnotbheer(
ayoution,ry.Fexceeit bytsanjoete feszoom lev)l
nbbstyle.zoom = 1LEfn ooadifrsenjoeteepacityr( s1, ( senobomplrtfilion
 exis{ -p jtemptontentQuerafilion  jtributp #6652fn ooadifrvquery=, c"",etpesirjQueraiefven
epacityr#12685ion(uQuer(	jquers> c1)ompvquery=, c""f)frsion,jj		}
	}.trim(afiliondrjp
ar: dpalphnot""	) ne===eo"frsion(rystyledrjQuerAjtributp ) si( se(oadSenjoetettyle.filion  o fuy,,eo"fr " " still leeer("filion:"dinymplexssText( se(oaduQu"filion:"distpresun(ratQay,,exelerted )is"atch, ed,ersewantot savoid mp
j	// nuerstyledrjQuerAjtributp is"IE Only,	butEso op  rootly	ig tfctic
jQ pa j...inbytstyledrjQuerAjtributp(u"filion" );

nbQ(oaduQumplrr	ig usafilion rtyleesiolierwe	 a cssbrulo extunyanpiefven
epacity,erse rordoenntQo(uQuervquery=, c""fompcurrootStylesrsi!currootStyle.filion nction// ntext,
	el 	 L,nu
irsi(oadomplrwtse, yanpeew filion vquers
nbbstyle.filion = palphnery,
	ifilion nc?ion((filiondrjp
ar: dpalphnotopacityrt	:ion((filion + " " +topacity;	iue	i ; }

uerTplslehook
	cannotbDLEaddnt untiltDOM ndodyib causermplet, root ry,

uerpextit	ig usedrun untilt	fiontDOM ndody
		}
	}(fn = jQuenctiouQuer!		}
	}.t, rootjreliabceMargiuRight nction		}
	}.cssHook
.margiuRight =n( se	get:nfn = jQuety.pr,	computnte)n( seleuQuercomputnte)n( sele uerWebKitbBug 13343 -pgetComputntStylesntext,s
wroete: uerdporEmargiu-right
	Que uerWork areund.byttempooarilytsanjoeter.pr) {:didp
ay	t siefven-blockion// ntext, 		}
	}.twap( y.pr,	{:,didp
ay":	"infven-block"  = 
	on((curCSSe [ry.pr,c"margiuRight" ]Q)n( se(W( se

	ue;	i  {
oadWebkit bug:pt ves://bugs.webkit.org/shvw_bug.cgi?id=29084
Qry.getComputntStylesntext,s
eercun( wpesis.profordb	,

top/left/bottom/right
	uernamplrtDhan.m, co	}
	cssbmodulo d,dofd ads(fesoffyanpmodulo,erse

	c:chachrpextit hlrr
nuQuer!		}
	}.t, rootjpixelPosi jQu ch,		}
	}.fn.xosi jQu nction		}
	}.eotj( s "top"ot"left"tQ,Qfn = jQueri,etusee)n( sel		}
	}.cssHook


tuseeQu= ( see	get:nfn = jQuety.pr,	computnte)n( seleeuQuercomputnte)n( sele Qcomputnte= {urCSSery.pr,:tusee)n(HlyQ((oaduQu{urCSSuntext,s
eercun(age,ry,
l_verhnteoffyanion// nntext, rfumusnpxery,
	icomputnte)nrion(ryy(		}
	}( y.prio.xosi jQu()

tuseeQu+e"px" :ion(ryy(computntn(HlyQ(}( se(W( se
;	iue;
	i  {})on(uQuer		}
	}.exrr ch,		}
	}.exrr.filion
 t	{
			}
	}.exrr.filion
.hidden.=ised
	jquery.prynction/erSchEven: Oeeray<=e12.12ion/erOeerayrjpor.s:offyanWidthsn( seoffyanHeights  vsd
Dhan.zero ad"somesjque) {

 nntext, jquedoffyanWidthe<=e0 rsijquedoffyanHeighty<=e0 ue( se(!		}
	}.t, rootjreliabceHiddenOffyan
	rsi((e.pr.style rsijquedstyle.didp
ay)uuer		}
	}.css,
y.pr,:,didp
ay"	nnc===eousnl";
	i ; 
			}
	}.exrr.filion
.visibleue	sed
	jquery.prynctionntext, !		}
	}.exrr.filion
.hidden fy.prion(H ; }

uerTplslehook
	 ror jnd
bytanimatp nteeern,
ttused
ties 		}
	}.eotj({{
margiu: "",iopaddlet: "",ioborder:e"Width" },tsed
	jqueretefix,dsuffexyt	{
			}
	}.cssHook


etefixu+esuffexyQu= ( seeern,
:nfn = jQuetjquers) tiyt(: coit= e,sio	eeern,
nte= {e,

QQeluerassuy s a jorele fumbvrptypnotb(estplet
QQelpar.s:= ondo, evquer)=, c"stplet"	? : uer.dp
	t(" "; : [evquer)Nn ( setext, roo < 4roof jQuery beeern,
nt

etefixu+ecssEern,
[tHANe+esuffexyQu=(HlyQ(par.s[tHANeuerpar.s[tHA- 2r]duerpar.s[t0sNn ioyg ion(ntext, eern,
nt;	iue	i ; 
nuQuer!rmargiuery,
	ietefixu) nction		}
	}.cssHook


etefixu+esuffexyQ.set	="satPosi jveNumbvr;j	  })on.fn r20 = /%20/g,iorbrveret	="/\[\]$/r: rCRLF	="/\r?\n/g,iorsubmip.erTLE,s	et/^(?:submip|button|image|resut|file)$/i,otrsubmip.ableue	/^(?: elem|tad", |Dext roa|keygen)/i;
t		}
	}.nn.extend(he	saricQ z
:nfn = jQuenctionntext, 		}
	}.parame t

josaricQ z
Aion ())nn(E = 	saricQ z
Aion :nfn = jQuenctionntext, ;

j.map(fn = jQuension	/y.Can:sd
ttuseHook 	,

"jque) {
"ontefilion ,

addb	,
msjque) {

 no: coy.pr) {s	="		}
	}.puse(guhio,Q"jque) {
"o)n( sentext, j.pr) {s	?"		}
	}.m, cAion (ry.prootscQu: ;

j jEue;jEu.filion(fn = jQuension	: coQndow= o

j.Qndo;ion	/y.Usn,.is(":atch, ed"; so mpatQtotldset[atch, ed]jworks( sentext, o

j.functrsi!		}
	}( tr
jQ).is,
":atch, ed"f)frsion,jrsubmip.ableery,
	io

j.f
jQNtypyncrsi!rsubmip.erTLE,sery,
	iondown rsion,j( t

jocpachrdiuer!munipuf joad_rctachabloted ery,
	iQndown n jEue;jEu.map(fn = jQueri,ey.priosion	: covcos= 		}
	}( tr
jQ).jqu();

nbQntext, valy=,:eQuerrion(reQuer:ion(r		}
	}.ueAion (r: le)	rion(ry		}
	}.map(tjqu,efn = jQuetjquiosion	nbQntext, {	eent:re.pr.eent, jquer:evaldrjp
ar: dpCRLF,Q"\r\u" )f}n(HlyQ(})f:ion(r	{	eent:re.pr.eent, jquer:evaldrjp
ar: dpCRLF,Q"\r\u" )f}n(Hl})oget() jE  })on(rySaricQ z
oantaion )omp	,
msjque) {
eorEatyanp, (rykey/: uers is( sa q}
	}estplet
		}
	}.paramue	sed
	jquera,r {aditjQualsvctio: coetefix,
QQs = stosioaddbe	sed
	jquerkey,	jquers) tiyt(uerIvevquer)ig a	sed
	jqu,einvokt it ( sentext, i{
ejquer
nbb: uerd
u		}
	}.uee current jquers) ? jquer() :tervquery=,efQuer?r""f:ejquer));inQQs[ notor: jsQu= enc
jQURICompsnl {(ikeys)u+e"="f+ enc
jQURICompsnl {(ijquer));inQ}; {
oadSan o{aditjQualsntemrerdporE		}
	} <=e1.3.2rbehavoex.
nuQuero{aditjQuals=, ctachEventr)f{,jQo{aditjQuals= 		}
	}.ajaxSenjoets ch,		}
	}.ajaxSenjoets.o{aditjQual;	i  {
oadIfoantaion )wastpasserwe	, ossuy  mpatQit	ig antaion )omp	,
msjque) {
.
nuQuer		}
	}.ueAion (rae)	uer(ra.jq}
	}ech,!		}
	}.isPlainOent( (rae)	, ) sionuerSaricQ z
o(fes	,
msjque) {

 n		}
	}.eotj( a,nfn = jQuenction/add( o

j.func,,Q

j.jquer));inQ});

nWnction( seuerIvem{aditjQual, enc
jQemple"old"fwayo(mplewayo1.3.2r,

oldvr
/ uerdieait),Qomplrwtseeenc
jQeparam
 nt{ursjvely.inbtext, etefixue	 a nction/buildParam
eretefix,da

etefixu],em{aditjQual, addb;;	iue	i  {
oadRjext, ;

dresuljoetetaricQ zatjQu	jntext, T.joint "&"Q).
jp
ar:( r20,Q"+"o)n(}on( "onload"buildParam
eretefix,dobj,em{aditjQual, addb;ctio: contyp;	
nuQuer		}
	}.ueAion (robj	, ) sionuerSaricQ z
oaion )itpr.
 n		}
	}.eotj( obj,efn = jQueri,evs) tiyteuQuero{aditjQualsuerrbrveretery,
	ietefixu) nctionnQry.Tndow eotjoaion )itpr
asta scalar.inbytadd( etefix,dvs)n ( seWnction( seleuerItpr
ig usn-scalar (aion )or oent( ), enc
jQei{
efumeric oersi.inbytbuildParam
eretefixu+e"["y+:( ondo, evc===eooent( "c?tHA:t""	) +e"]"otv,em{aditjQual, addb;;	iuuD(Hl}) j
Q
nctiontype !o{aditjQualsch,		}
	}.ted erobj	, ===eooent( "cnctionuerSaricQ z
ooent( )itpr.
 ntext, func inyobj	, tion/buildParam
eretefixu+e"["y+:ntypy+ "]"otobj

functQ,em{aditjQual, addb;;	iue	
nWnction( seuerSaricQ z
oscalar itpr.
 nadd( etefix,dobj	, jE  } 		}
	}.eotj( ("blurr	,cusr	,cusiny	,cusoutQloasents z
oscrouerunloaseclick dblclick "e+io"mo jndown mo jnup mo jnQueramo jnuerramo jnuutamo jnen.eramo jnleeer("e+io"chang)ttad",  submipikeydown keypress keyup rrr,
fcr_vexte) u").dp
	t(" ";,Qfn = jQueri,entypyt	{
{
oadHent vr,v) {:bindlet,j		}
	}.nn

functQu= fn = jQuerdcon, fu nctionntext, aery,
	inotor: js>c0	rion(Q

j.quervent, fuy,,edcon, fu nc:ion(Q

j.trigger(:funcf;;
i ; })on(		}
	}.nn.extend(he	huerr:nfn = jQuetfnOvar,rfnOut nctionntext, ;

j.mo jnen.eretfnOvarQ).mo jnleeer(rfnOut uerfnOvarQ);	 y 	
ebi,
:nfn = jQuetted s,rdcon, fu nctionntext, Q

j.querted s,rfuy,,edcon, fu nn(E = 	unbi,
:nfn = jQuetted s,rfu nctionntext, Q

j.qfferted s,rfuy,,efu nn(E = 
tdey gatr:nfn = jQuersed", or,tted s,rdcon, fu nctionntext, Q

j.querted s,rsed", or,tdcon, fu nn(E = 	undey gatr:nfn = jQuersed", or,tted s,rfu nctionoad(:funcsp: c	) ext, sed", or,tted s [,rfu] )lQQntext, aery,
	inotor: js=, c1)? Q

j.qffersed", or,t"**"cQu: ;

j.qfferted s,rsed", or omp"**", fu nn(E  })on.fn{
ry.Duent( "ElocatjQu	jajaxLocPar.s,	jajaxLocatjQu,	jajax_usncrd
u		}
	}.nvw()= 
tajax_rq}
	}e="/\?/r: rhashe= /#.*$/r: r{s	="/([?&])_=[^&]*/r: rheaders	et/^(.*?):[ \t]*([^\r\u]*)\r?$/mg, oadIE leeerg ant\r	chacacton  j EOL{
ry.#7653, #8125, #8152:ElocaottustocolsdetectjQu	jnlocaoPustocolse	/^(?:about|app|app-jtorage|.+-extensoad|file|res|widget):$/r: rnoCo_vent	=e/^(?:GET|HEAD)$/r: rpustocolse	/^\/\//r: rurl =e/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/= {
ry.Keep aecopy ompofesoldQloasemethod
	_loase=,		}
	}.fn.loas= {
r* Prefilion

	s* 1)rTply	 ror jnful	t sietroducrdcustom dconTndos (see ajax/jsonp.js:forEan example)
	s* 2)rTplsle roreoreed:
	s*    - BEFORE
asrlet		,

a transroot
	s*    - AFTEReparametaricQ zatjQu (s.ncons
jQa.stplet	ifrs.puscesrDcons
jQD{
	)
	s* 3)ikeysig tfe dconTndo
	s* 4)o	}
	cuEveoreesymbols"*"ccan	bet jnd
	s* 5)hexecutjQu will star.	wtypetransroot dconTndo ( seTHEN con(inuv down t s"*"ctypneednd
	s*/
	prefilion
e= {e,

Qr* Transroots:bindlet

	s* 1)rkeysig tfe dconTndo
	s* 2)o	}
	cuEveoreesymbols"*"ccan	bet jnd
	s* 3)itad", renwwill star.	wtypetransroot dconTndo ( seTHEN go t s"*"ctypneednd
	s*/
	transroots:= {e,

QrerAvoid eomr) {-puslog	chacitaq}
ncrd(#10098); m
	c:sioeasn,lint ( seevadeicompressjQu	jallTLE,s	et"*/".concuE("*")on(ry.#8138,dIE may	tprowEan exceptrenwwpesiaccesrlet,ueraQtotlddpletewtod,w.locatjQu,uQudvent( "onvma
ethastb encyanitryjsioajaxLocatjQusetlocatjQu.href; }ncaEve( rs) tiy/y.Usn,mplehref  jtributp ompan	A	r.pr) {iouersincrdIE will modif )it gjvenudvent( "olocatjQu	jajaxLocatjQusetdvent( "ocndow.E.pr) {(i"a"o)n( ajaxLocatjQu.href =e""
	eajaxLocatjQusetajaxLocatjQu.href; }

uerSegt( "ElocatjQu is( spar.s
ajaxLocPar.s = purl.exec	iajaxLocatjQu.toLg usCaol(;e)	uer[Nn (uerBasn,"co_stru, or"dporE		}
	}.ajaxPrefilion ( se		}
	}.ajaxTransrooty "onload"addToPrefilion
OrTransroots(gstru, urept	{
{
oaddconTndoExpressjQu)ig optjQuals( sea

	cons t s"*"	jntext, fn = jQuerdconTndoExpressjQu,Qfn = ) si( suQuer;ndo, edconTndoExpressjQu)!, c"stplet"	, tion/fn = =edconTndoExpressjQu;	nbQdconTndoExpressjQu)et"*"
	is}

QQ: codconTndo,sio	it= e,sio	dconTndos =edconTndoExpressjQu.toLg usCaol(;.maEve( erre_rnot	in
	e)	uer[Nn (onuQuer		}
	}.uee current fn = ) ) tiyt(uerFexteotjodconTndo inympledconTndoExpressjQuiyt(	init: f(dconTndo =edconTndos[i++]) nctionnQry.Predofd uQuraq}
stnd( se(type dataTndo
0] ===eo+"cnction(eldconTndo =edconTndojd
	r: :1)ncomp"*"n(HlyQ((stru, ure[odconTndo ]e= stru, ure[odconTndo ]euer[N).unshiftt fn = );

nbQ(oadOmplrwtseesioend( se(Wnction( sele((stru, ure[odconTndo ]e= stru, ure[odconTndo ]euer[N).{it: ffn = );
 se(W( se

	ue(H ; }

uerBasn,ins.prload" "onload"f,

etefilion
e( setransrootsy "onload"ins.prlPrefilion
OrTransroots(gstru, ure, optjQus,soriginalOptjQus,sjqXHR ) si( : coins.prlnte= {e,
QQseerletTransroot et( stru, urep=, cD{ansroots:);

n "onload"ins.prle dataTndoe)n( se: cotad", nt;	iuins.prlnt[odconTndo ]e= D{
	;
 n		}
	}.eotj( stru, ure[odconTndo ]euer[N,Qfn = jQuer_,
etefilionOrFa, ory	) sion	: codconTndoOrTransroote= ptefilionOrFa, ory( optjQus,soriginalOptjQus,sjqXHR );	nbbuQer;ndo, edconTndoOrTransroote=, c"stplet"	rsi!seerletTransroot rsi!ins.prlnt[odconTndoOrTransroote]dQuery bQoptjQus.dconTndos.unshiftt dconTndoOrTransroote);
 se(ins.prle dataTndoOrTransroote);
 se(ntext, f,
	i;( seWnctiontype taerletTransroot )f{,lyQ(ntext, !(otad", nt =edconTndoOrTransroote);
 seD(Hl}) jEyntext, Ted", nt;	i  {
ntext, ins.prle optjQus.dconTndos[t0sN)ncomp!ins.prlnt[o"*"c]drsiins.prle "*"c); }

uerA s.proco extend		,

ajax optjQus
/ermpatQtakns "flat"foptjQus (notb( sDLEdeep extended)
uerFixesp#9887y "onload"ajaxExtend(starget,rsrc	vctio: codeep,rkey,
 ntlatOptjQuss= 		}
	}.ajaxSenjoets.tlatOptjQussomp{};
tjtext, keysinrsrc	vctiobtype src[ keys]y!, ctachEventr)f{,lyQ fflatOptjQus[ keys]y?starget :pe deep uer(deep = {e)	, )[ keys]y= src[ keys];	iue	i  ytype deeee)n( se		}
	}.extend(r {
	 ttarget,rdeeee);	i  {
ntext, targetrL

t		}
	}.nn.loase=,fn = jQueturl,eparam
,reore_verhnctiouQuer;ndo, eurl !, c"stplet"	rsi_loasenctionntext, _loas.sioly(guhio,Qaery,
	ine);	i  {
: cotad", or,trespQuse, DLE,,
lesadfw= o

j,ionoffw= url.oersiOf(" ")on(ouQueroffw>=e0 ) sionsed", or = url.d
	r: :off, url.tor: jsn;	iuurl =eurl.d
	r: :0,roffw);	i  {
uerIveit'g a	sed
	jqu
nuQuer		}
	}.uee current param
 t	) si( soadWe ossuy  mpatQit'so	}
	cure_ver
o	xere_verh= param
;	iuparam
  ctachEvent; {
oadOmplrwtse, buildsa paramettplet
QWnctiontype param
 rsi;ndo, eparam
  ==eooent( "cnctionQndow= "POST";	i  {
uerIvewebheer(jque) {
e( smodif ,.m, co	}
	raq}
st
ytype tadfotor: js>c0	)n( se		}
	}.ajax(( selurl:nurl,o
Q((oaduQu"Qndo" : ciabcesisctachEvent,etpesi"GET"emethod:will bee jnd
	yttndo: DLE,,
le	dconTndo: "html"osio	dcon:eparam
(Hl})odoen(fn = jQuerrespQuseText ) si( seuerSaverrespQuse		,

userinicompy peucere_ver
o		respQuse	=Qaery,
	in;

nbQtadfohtmlersed", or ?

nbQ(oadIf a sed", or wasts.proford,Elocatr(mpleright jque) {
ee	 a dummy div
nbQ(oadExclutiiscriptj t savoid IE 'PermvssjQu)Denord'trrr,
sion(r		}
	}("<div>";.sioend(n		}
	}.parseHTMLerrespQuseText ) ).Evedersed", or nc:i
nbQ(oadOmplrwtseeusermplefQuerresulj,lyQ(ntspQuseText );

nb})ocompy pe(reore_verhrsifn = jQuerjqXHR, Ttatu
	)f{,jQotadfoeotj( eore_ver,trespQuseeuer[rjqXHR.ntspQuseText, Ttatu
,sjqXHR ]s)n jq}) jE  {
ntext, t

j j}n (uerAttotjoa bunch)omp	n = jQu,o	,

hent let	eomrQu)AJAXr,v) {s 		}
	}.eotj( s "ajaxStar."ot"ajaxStop"ot"ajaxCompy pe"ot"ajaxErr,
"ot"ajaxSuccesr"ot"ajaxSend"tQ,Qfn = jQueri,eQndown{,j		}
	}.nn

tndo ]e= fn = jQuetfniosionntext, Q

j.querted , fu nn(E ; })on(		}
	}.extend(he
Qry.Coun.era	,

holdoete fesfumbvrpompactieraq}
	ies 
actier: e,f
Qry.Last-Modifordbheader(xetet texteext raq}
st
ylastModiford: {e,
Qetag: {e,

QajaxSenjoets:n( seurl:najaxLocatjQu,	jttndo: "GET"osioisLocal:nnlocaoPustocolery,
	iajaxLocPar.s[ 1 ] ),otyglobal:r {
	 jutpuscesrDcon:r {
	 jutosync:r {
	 jutcon() {Tndo: "siolicatjQu/x-www-	,
m-urlenc
jQd;	chacset=UTF-8"osio/*	jttimnuut: e,fn dcon:efuy,,
e	dconTndo: fuy,,
e	usereent:rfuy,,
e	password:rfuy,,
e	xetet:rfuy,,
e	thlows:ry,
	i,
n(m{aditjQual:ry,
	i,
n(headers: {e,
Q	*/

nbacceptj:n( se	"*": allTLE,s,otyttext: "text/plain"osio	html: "text/html"osio	xml: "siolicatjQu/xml,,Qext/xml"osio	json: "siolicatjQu/json,,Qext/javascript"
ele,

QQcon() {s:n( se	xml: /xml/osio	html: /html/osio	json: /json/
ele,

QQntspQuseFotlds:n( se	xml: "ntspQuseXML",otyttext: "ntspQuseText"osio	json: "ntspQuseJSON"
ele,

QQry.Dconsconvarton

	
ry.Keysts,  ratr(souxcee(,
fcuEveoree"*")s( sea
sjoeatjQu ted s wtypea jorele sp: c
QQconvarton
: si( seuerConvartranyypidte o text( se"* text": Stplet,o
Q((oadText  o htmls,D{
	e= nocD{ans	,
matjQu)lQQ "text html":Q {
	 j
Q((oadEjqueatr(mexti(g a	json eerressjQuiyt("text json":n		}
	}.parseJSON j
Q((oadParse(mexti(g xmliyt("text xml":Q		}
	}.parseXML
ele,

QQry.Fextup jQu,ompatQshvuldototbLEdeep extended:ionueryou.can:sd
tyouxtuwndcustom up jQu,oplrr	if
//uerandewpesiyou.cndow. oneompatQshvuldototbL
//uerdeep extended (see ajaxExtend)
 ntlatOptjQus:n( se	url:n {
	 jut	cr_vext:Q {
	
que	i = {
ry.Cndow.g a	sereefledg)dssenjoets oent( )is( starget{
ry.wtypeboypeajaxSenjoets andjyanjoetsQtotlds.{
uerIvetarget ig omip.ed,erritns is( sajaxSenjoets.
QajaxSenup:nfn = jQuertarget,rsanjoetsQnctionntext, sanjoetsQ?j
Q((oadBuildoeteatsenjoets oent( 
Q((ajaxExtend(sajaxExtend(starget,r		}
	}.ajaxSenjoets ),rsanjoetsQnc:j
Q((oadExtendoeteajaxSenjoets
Q((ajaxExtend(s		}
	}.ajaxSenjoets ttarget nn(E = 
tajaxPrefilion:"addToPrefilion
OrTransroots(getefilion
e),	jajaxTransroot:"addToPrefilion
OrTransroots(gD{ansroots:)= {
ry.Ma
etmethod
	ajax:,fn = jQueturl,eup jQu,o) si( soadI eurl ig antoent( ,etimuf je(ete-1.5etigeaturr
nbuQuer;ndo, eurl  ==eooent( "cnctionQoptjQus =eurl; se	url  ctachEvent; iue	
QQry.Fexceeup jQu,om sDLEantoent( 
nQoptjQus =eoptjQussomp{};
tj
: cory.Cnoss-nvma
etdetectjQu : cs
Q((par.s,	jQQry.Loop : ciabce	nbbu,	jQQry.URL	wtypoutQanti-xetet paramjut	cetetURL,	jQQry.RespQuseeheaders	aststplet
QQentspQuseHeadersStplet,ojQQry.timnuut
hent e	nbbtimnuutTimnr,o
Q((oadTo knowduQuglobalr,v) {se ror( sDLEdisp:Eveed
	ytfireGlobals,o
Q((D{ansroot,	jQQry.RespQuseeheaders
QQentspQuseHeaders,	jQQry.Cndow.rmplefinalsoptjQussoent( 
Q((ss= 		}
	}.ajaxSenup( {e,eup jQu,o),	jQQry.Core_versfcr_vextjut	cere_verCr_vexty= s.cr_vext ompt,	jQQry.Cr_vext pextglobalr,v) {secticere_verCr_vexty_veit 
jyatDOM f
jQ orE		}
	} collectjQu	jtyglobalEv) {Cr_vexty= s.cr_vext rsieecere_verCr_vextdmpleted )ompcere_verCr_vextdjq}
	}e)rrion(r		}
	}eecere_verCr_vext )f:ion(r		}
	}.,v) {,	jQQry.Defrrreds
QQ	defrrreds= 		}
	}.Defrrred(),
jQQcompy peDefrrreds= 		}
	}.Core_vers("sncrdmemory"),	jQQry.Statu
-d,dofd( "Ecere_vers
nbbstatu
C
jQ = s.statu
C
jQ omp{},	jQQry.Headerso(mply	 rorsun(rareeatQsncr)
QQentq}
stHeaders	et{},	jQQntq}
stHeadersNry s =p{},	jQQry.TplejqXHR Ttate
nbbstatet= e,sio	ry.Def	con abootemesrage
nbbstrAboote= "cance ed",sio	ry.F, coxhr
ut(jqXHR =f{,lyQ(ntadyStatr: e,f
QQ((oadBuildseheaders	hash.ableutypneednd
		e	getRtspQuseHeader:	sed
	jquerkeycnction(el: comuEven(HlyQ(type ttatep===e2cnction(elnuQuer!rtspQuseHeaderscnction(elnentspQuseHeaders =p{};ion(elne	init: f(muEve = pheaders.exec	intspQuseHeadersStplet))ncQuery bQelnentspQuseHeaders[omuEve[1].toLg usCaol(;e]e= muEve[ 2r];ion(elne}
n(elne}
n(elnemuEve = ptspQuseHeaders[okey.toLg usCaol(;e]n(HlyQ(}
Qelnentext, muEvey=,efQuer?reQuer:omuEven(HlyQe,

QQeluerRawestplet
QQelgetAllRtspQuseHeaders:nfn = jQuenctionlnentext, ttatep===e2c?intspQuseHeadersStplet):rfuy,n(HlyQe,

QQeluerCaveesumpleheader
QQelsetRtq}
stHeader:tsed
	jquervent, jquer))f{,jQ(el: colntypy=rfuncjtoLg usCaol(;n(HlyQ(type !statepnctionnnnnntypy=rntq}
stHeadersNry s[olntypy]y=rntq}
stHeadersNry s[olntypy]yompntyp;	bQelnentq}
stHeaders

functQue	jquer;	jqun(}
Qelnentext, ;

j jEuyQe,

QQeluerOerrridestrespQuseecon() {-ted )header
QQeluerrrideMimnTndo: fn = jQuetted e)n( seleeuQuer!statepnctionnnnns.mimnTndo:= ondo;	jqun(}
Qelnentext, ;

j jEuyQe,

QQeluerStatu
-d,dofd( "Ecere_vers
nbbbstatu
C
jQ: fn = jQuetmapE)f{,jQ(el: coc
jQn(HlyQ(type mapE)f{,jQ(el(type ttatep<e2cnction(elnjtext, c
jQein mapE)f{,jQ(el(QQry.Lazy-sd
tmpleeew eore_verhe	 a wayonpatQpresurerg oldQones,jQ(el(QQstatu
C
jQ[ c
jQeQue	[ statu
C
jQ[ c
jQeQ,.m,p[ c
jQeQu];ion(elne}
n(elne}nction( sele(((oadExecutn,mple(ppuseciapeucere_vers,jQ(el(QjqXHR.iyway/(.m,p[ jqXHR.Ttatu
	]Q)n( se(ne}
n(eln}
Qelnentext, ;

j jEuyQe,

QQeluerCance o	}
	raq}
st
yyyyaboot:nfn = jQuerstatusText ) sijQ(el: cofinalTexty= statusText ompttrAbootn(HlyQ(type transroot )f{,lyQ(((D{ansroot.aboot(ofinalTexty);	jqun(}
Qelnedoen(:0,rfinalTexty);	jqun(ntext, ;

j jEuyQejEuy};
tjQuerAttotjodefrrreds
QQdefrrred.pusmiol(:jqXHR )ocompy pe = compy peDefrrred.sd
;
 n	qXHR.Tuccesrs= 	qXHR.doen;
 n	qXHR.rrr,
f= 	qXHR.feil;
tjQuerRnQuerahashechacacton (#7531: andjytplet)pusmotjQu)lQQ/y.Add:pustocolstypnotbprovidnd
(#5866: IE7 
jsueswtypepustocol- vsd
urls)lQQ/y.Hent vry,
	yeurl inymplesenjoets oent( )(#10093:eco_sis() cyswtypeoldQtigeaturr)lQQ/y.We olsoeusermpleurl parameter _veaveilabce	nbs.url  cer(	url ompt.url ompajaxLocatjQusny+:""f).
jp
ar:( rhash,:""f).
jp
ar:( rpustocol,iajaxLocPar.s[ 1 ] +:"//" );

nbry.Ayiastmethod:up jQue o tndo (s
eer.tieret	#12004	nbs.Qndow= optjQus.method:ompoptjQus.ted )omps.method:ompj.Qndo;i
((oadExtcact	dconTndos list
yys.dconTndoss= 		}
	}.trim(as.dconTndocomp"*"f).toLg usCaol(;.maEve( erre_rnot	in
	e)	uer[""];	
	nry.A cnoss-nvma
etraq}
st 
jyinyorderdwpesiwebheer(aepustocol:host:root miomaEve
nbuQuers.cnossDvma
et=,:eQuer; tiytnpar.s = purl.exec	it.url.toLg usCaol(;e) jEuys.cnossDvma
et= !!(spar.s rsion,j( par.s[ 1 ] !, cajaxLocPar.s[ 1 ] uerpar.s[t2 ] !, cajaxLocPar.s[ 2r]due	jqun(( par.s[ 3r]duer(rpar.s[ 1 ]  ==eot ver"f? "80"	: "443"	) ne!, ,lyQ(((	iajaxLocPar.s[ 3r]duer(rajaxLocPar.s[ 1 ]  ==eot ver"f? "80"	: "443"	) ne)lQQ ;; iue	
QQry.Convartrncons
ypnotb(lndodyi(estplet
QQuQuers.nconsrsis.puscesrDconsrsi;ndo, es.ncons!, c"stplet"	, tion/s.ncons= 		}
	}.parame s.ncon, s.o{aditjQuals)
	is}

QQry.Aiolygetefilion

e(ins.prlPrefilion
OrTransroots(getefilion
, s, optjQus,sjqXHR );	
 soadI eraq}
st wastabooterwe	ridejagetefilion, Ttopemplrr
nbuQuerttatep===e2cnction(ntext, 	qXHR
	is}

QQry.Wejcan fireuglobalr,v) {se s:of nowduQuask cont
ytfireGlobals = s.global;	
 soadWuEvey	,

a eew yanp, eraq}
sts
lytype fireGlobals ch,		}
	}.actier++i===e0 ) sion,		}
	}.,v) {.trigger("ajaxStar.")
	is}

QQry.Upeercasermpletndo
	bs.Qndow= s.Qndo.toUpeerCaol(;n(
o	ry.Determven uQuraq}
stthastco_vent
uts.hasCo_vent	=e!rnoCo_ventery,
	is.Qndow;n(
o	ry.Saer(mpleURL	
nncasn,we'rejtoylet	wtypempleIf-Modiford-Sincr
//uerand/,

If-Noen-MuEveyheader(f jer Qu	jtcetetURLw= s.url; 
//uerMorepup jQu,opent let		,

raq}
sts	wtypenotco_vent
utuQuer!s.hasCo_vent	) si( seuerIf ncons
jQaveilabce,esioend ncons o url
	QQuQuers.ncons)f{,lyQ(cetetURLw= 	it.url +
	(rajax_rq}
	}ery,
	icetetURLw) ? "&"	: "?"	) +es.ncons);
QQeluer#9682:irjQueranconsso mpatQit'sonotbuserwe	 anr,v) {uaerretryion	tdey tr(s.ncon;
 seD(( seuerAdd:anti-xetet e	 url iypneednd
		euQuers.cetet ===ey,
	is)f{,lyQ(s.url  cotsery,
	icetetURLw) ?

QQeluuerIvemplrr	ig (lndodyi(e'_' parameter, yanpi{
ejquer
nbbQ(cetetURL.
jp
ar:( r{
, "$1_="f+ ajax_usncrf jQu:

QQeluuerOmplrwtseesdd oneomtempleend( se((cetetURLw+	(rajax_rq}
	}ery,
	icetetURLw) ? "&"	: "?"	) +e"_="f+ ajax_usncrf ;
 seD(Hl}(
o	ry.Set mpleIf-Modiford-Sincrrand/,

If-Noen-MuEveyheader, _veiu,uQModifordb	ode.
bbuQuers.uQModifordb) tiyteuQuer		}
	}.lastModiford[icetetURLw]dQuery bQ	qXHR.TetRtq}
stHeader( "If-Modiford-Sincr",r		}
	}.lastModiford[icetetURLw]dQ;
 seD(HleuQuer		}
	}.etag[icetetURLw]dQuery bQ	qXHR.TetRtq}
stHeader( "If-Noen-MuEve",r		}
	}.etag[icetetURLw]dQ;
 seD(Hl}(
o	ry.Set mplelerry )eheader, _vencons
jQbeoetetant
utuQuers.nconsrsis.hasCo_vent	rsis.con() {Tndos!, cy,
	isompoptjQus.con() {Tndos) sion,	qXHR.TetRtq}
stHeader( "Co_vent-Tndo",is.con() {Tndos)
	is}

QQry.Set mpleAcceptjyheader(	,

the(surerr,td,dofdoeteenympledconTndo
n,	qXHR.TetRtq}
stHeader(ion,"Accept",sio	s.dconTndos[t0sN)rsis.acceptj[ s.dconTndos[0]s]y?,lyQ(s.acceptj[ s.dconTndos[0]s]y+ ( s.dconTndos[t0sN)!, c"*"f? ", " +tallTLE,s	+e"; q=0.01"A:t""	) :,lyQ(s.acceptj[ "*"c]
Q ;; 
QQry.Chachrpextheaders	optjQu
njtext, isinrs.headerscnction(	qXHR.TetRtq}
stHeader( i,rs.headers[tHANe)
	is}

QQry.Ayiowdcustom headers/mimnted s ( seearlygaboot
utuQuers.betexeSend rsiees.betexeSend.cereeecere_verCr_vext,rjqXHR, T	, ===ey,
	isompttatep===e2cnc) tiyt(uerAboote
ypnotbdoen (lndodyi( sentext,ion(ntext, 	qXHR.aboot()
	is}

QQry.abootlet	ig usalonger:accance latjQu	jQstrAboote= "aboot";	
 soadInttauercere_verseenydefrrreds
QQtext, isinr{ Tuccesr:s1, rrr,
:s1, compy pe:s1 }cnction(	qXHR[tHANees[tHANe)
	is}

QQry.Gan o{ansroot
	(D{ansroote= ins.prlPrefilion
OrTransroots(gD{ansroots, s, optjQus,sjqXHR );	
 soadI enocD{ansroot,erse uto-aboot
utuQuer!transroot )f{,lyQdoen(:-1, "No Transroot"o)n( s}nction( seljqXHR.ntadyStatr = 1LEfn ooadSend globalr,v) {(HleuQuerfireGlobals Query bQglobalEv) {Cr_vext.trigger(:"ajaxSend",r[rjqXHR, T	]dQ;
 seD(Hlery.Timnuut
		euQuers.osync)rsis.timnuut
>c0	)n( sebbtimnuutTimnr	="satTimnuut(fn = jQuenctionlne	qXHR.aboot("timnuut");
 se(W,is.timnuut
)n( sd}E
	Qutryjsio	bbstatet= 1;
 se(D{ansroot.send(sntq}
stHeaders,bdoen )n( sd}fcuEve ( rs) tiy	nQry.Propagatr exceptrenwastrrr,
f
ypnotbdoen
lyQ(type ttatep<e2cnction(eldoen(:-1, es);
QQeluerSimplyenteprowEomplrwtse
 se(Wnction( sele(eprowEe jEuyQejEuy} iue	
QQry.Core_verhtextwpesijvaryypidteis"aoen
ly "onload"doen(:Ttatu
,seatjveStatusText,trespQuse
,sheaderscnction(: coisSuccesr, Tuccesr, rrr,
,trespQuse, modiford,io	bbstatusText =seatjveStatusTextLEfn ooadCoreeddoncr
//(type ttatep===e2cnction(entext,
	el D(( seuerStatr is""dsnl" now
	bbstatet= 2LEfn ooadCeler.timnuut
_veit exis{

//(type timnuutTimnr	)f{,lyQ(celertimnuut( timnuutTimnr	)
	el D(( seuerDlrrfrr
ncrdtransroot pextearlyggarbagejcollectjQu	jtyoad(nocm jte

howalongymplejqXHR oent( )will bee jnd)
		(D{ansroote= tachEvent; {
eluerCaveetrespQuseeheaders
QQentspQuseHeadersStplet)=sheaderscomp""
	
se(oadSet ntadyStatr seljqXHR.ntadyStatr = Ttatu
	>c0	r 4 : e;(( seuerDltermven uQuTuccesrful
	QQusSuccesr = Ttatu
	>= 200frsistatu
	< 300sompttatu
  ==e304;(( seuerGet ntspQuseedcon
//(type respQuse
cnction(entspQuse	=QajaxHent vRtspQuses(gs,rjqXHR, respQuse
cn
	el D(( seuerConvartrnocm jte

wpatQ(mpatQway respQuseXXXQtotlds	 roriyway/"sat)
n(entspQuse	=QajaxConvart(gs,rrespQuse, jqXHR, usSuccesr );	
nbQry.IQuTuccesrful,
hent e tndo chainlet
QQeuQuerieSuccesr ) si( se(oadSen mpleIf-Modiford-Sincrrand/,

If-Noen-MuEveyheader, _veiu,uQModifordb	ode.
bbbbuQuers.uQModifordb) tiyte		modifordf= 	qXHR.getRtspQuseHeader("Last-Modiford";n(HlyQ(type modifordb) tiyte					}
	}.lastModiford[icetetURLw]d= modiford;	jqun(}
Qelnemodifordf= 	qXHR.getRtspQuseHeader("etag";n(HlyQ(type modifordb) tiyte					}
	}.etag[icetetURLw]d= modiford;	jqun(}
Qeln}i( se(oad
ypnooco_vent
ut((type ttatu
  ==e204:ompj.Qndo  ==eoHEAD"cnction(elstatusText =s"nocon() {";i( se(oad
ypnot modiford
 se(Wnctiontype ttatu
  ==e304cnction(elstatusText =s"notmodiford";i( se(oadIvewebheer(ncon, y p'seconvartrin
 se(Wnction( sele(statusText =srespQuse.TtatQn(HlyQ(Tuccesrs= respQuse.ncon;
 se		rrr,
f= respQuse.rrr,
n(HlyQ(tsSuccesr = !rrr,
n(HlyQejEuy}nction( seleuerWeQextrn( )rrr,
fpletestatusText seleuertpesinexmcQ z
ostatusText andjytatu
 texteon-aboots,jQ(errr,
f= statusTextLEut((type ttatu
 omp!statusText ) sijQ(elstatusText =s"rrr,
"n(HlyQ(type statu
	< 0b) tiyte			ttatu
  r0;	iqun(}
Qeln}iel D(( seuerSetrncons	,

the(f, coxhrsoent( 
Q((jqXHR.Ttatu
	= status;
Q((jqXHR.Ttatu
Text =s(seatjveStatusTextsompttatu
Text ) +p""
	
se(oadSuccesr/Err,

QQeuQuerieSuccesr ) siQelndefrrred.resolveWitheecere_verCr_vext,r[ Tuccesr, statusText,tjqXHR ]s)n jqy}nction( seledefrrred.rent( Witheecere_verCr_vext,r[ jqXHR, Ttatu
Text,trrr,
f]cn
	el D(( seuerStatu
-d,dofd( "Ecere_vers
nbbjqXHR.Ttatu
C
jQ( statu
C
jQe) jEuystatu
C
jQ = tachEvent; {
eluQuerfireGlobals Query bQglobalEv) {Cr_vext.trigger(:ieSuccesr ?t"ajaxSuccesr"A:t"ajaxErr,
"o	iqun([ jqXHR, T,:ieSuccesr ?tTuccesrs:trrr,
f]cn
	el D(( seuerCompy pe( secompy peDefrrred.fireWitheecere_verCr_vext,r[ jqXHR, Ttatu
TexttQQ);	
	neuQuerfireGlobals Query bQglobalEv) {Cr_vext.trigger(:"ajaxCompy pe"ot[rjqXHR, T	]dQ;
 seQ/y.Hent vrthe(globalrAJAXrcoun.erEut((type !(:--		}
	}.actieru) nctionnQ,		}
	}.,v) {.trigger("ajaxStop");
 se(WjEuy} iue	
QQntext, 	qXHR
	ie,

QgetJSON:,fn = jQueturl,encon, eore_verhnctionntext, 		}
	}.get(turl,encon, eore_ver, "json" nn(E = 
tgetScript:,fn = jQueturl,eeore_verhnctionntext, 		}
	}.get(turl,etachEvent,eeore_ver, "script" nn(E  })on 		}
	}.eotj( s "get", "post"tQ,Qfn = jQueri,emethod:t	{
			}
	}[emethod:]e= fn = jQueturl,encon, eore_ver, ted e)n( seuershiftQaery,
	ine_venconsaery,
	i wastomip.ed
leuQuer		}
	}.uee current ncons)fnctionntndo:= ondo)ompcere_ver;
 sexere_verh= ncon;
 sencons= tachEvent; iue	
QQntext, 		}
	}.ajax(( selurl:nurl,o	jttndo: method,
le	dconTndo: DLE,,
le	dcon:encon,
yQ(Tuccesr:ucere_ver
o	}nn(E ; })on(/*.Hent vs respQuse
c( sad"ajaxsntq}
st:
 * -rfinds(mpleright dconTndoc(mediow.g betw enccon() {-ted )( seex.prlntedconTndo)
 * -rntext,s
mplelerryspQudoeterespQuse
s*/
 "onload"ajaxHent vRtspQuses(gs,rjqXHR, respQuse
cnctio: cofirstDconTndo, ( ,efinalDconTndo, DLE,,
lecon() {sy= s.cr_ven.s,	jQdconTndoss= s.dconTndos; {
oadRjQuera uto dconTndo ( seget con() {-ted )inymplepuscesr
e	inite dataTndos[t0sN)=, c"*"fnctiondconTndos.shiftt)n( stype cts=, ctachEventr)f{,jQ	cty= s.mimnTndo:uer	qXHR.getRtspQuseHeader("Co_vent-Tndo";;	iue	i  {
oadChachr_vers'rejdeallet	wtypea knownccon() {-ted 
stype cts)f{,jQtext, ted )inycon() {sy) tiyteuQuercon() {s

tndo ]ersicon() {s

tndo ]ery,
	ictu) nctionnQdconTndos.unshiftt Qndow;n(onnQbntak;
 seD(Hl}(i  {
oadChachrto see ifiwebheer(aerespQuse		,

mpleex.prlntedconTndo ytype dataTndos[t0sN)
etraspQuse
cnctionfinalDconTndo =edconTndos[t0sNn iWnction( seuerT	} convartibleudconTndos,jQtext, ted )inyrespQuse
cnction(uQuer!dataTndos[t0sN)ompj.convarton


tndo + " " +tdconTndos[0]s]ynctionnQfinalDconTndo =eondo;	jqunbntak;
 seD(Hl(uQuer!firstDconTndoynctionnQfirstDconTndoy=eondo;	jquD(Hl}(iuuerOre

	c:userfirst oen
ly inalDconTndo =e inalDconTndo uerfirstDconTndo;	i  {
uerIvewebfeund.aedconTndo y/y.We od
tmpledconTndo mtemplelist iypneednd
	uerandentext, ;
lelerryspQudoeterespQuse
euQuerfinalDconTndo vctiobtype finalDconTndo !, cdconTndos[t0sN)nc{
nnQdconTndos.unshiftt finalDconTndo v;	iue	inntext, respQuse
[ finalDconTndo ]n(E  }n(/*.Chain convarsjQu,ogjvenu	}
	raq}
ste( setfesoriginalerespQuse
s* Alsoeyan
	teetrespQuseXXXQtotlds	enymplejqXHR inttancr
s*/
 "onload"ajaxConvart(gs,rrespQuse, jqXHR, usSuccesr )ctio: coconv2,pcurroot,oconv, Dmp,
etev,
leconvarton
 =p{},	jQ/erWork wtypea copy ompdconTndoss
nncasn,we ne cono modif )it f,
fcr_varsjQu	jQdconTndoss= s.dconTndos.d
	r: ); {
ry.Cndow.sconvarton
 mapEwtypelg uscasndokeys ytype dataTndos[t1sN)nc{
nntext, c
nvsinrs.convarton
 )f{,jQ	convarton


conv.toLg usCaol(;e]e= j.convarton


c
nvs];	iue	i  {
currootr cdconTndos.shiftt)n(
euerConvartrnteeotjotaq}
ntoco dconTndo y	init: fcurrootr) si( suQuers.ntspQuseFotlds[fcurrootrN)nc{
nnQ	qXHR[ts.ntspQuseFotlds[fcurrootrN)]f= respQuse
	is}

QQry.AiolygmpledconFilion if. rovidnd( suQuer!etevdrsiisSuccesr rsis.dconFilion nction(ntspQuse	=Qs.dconFilion(rrespQuse, s.dconTndoc)
	is}

QQetevd= curroot
	iscurrootr cdconTndos.shiftt)n(
eeuQuercurrootr) si( sQry.Tplre's	enlygworks( sdoduQu{urrootrdconTndo ig usn- utoiyteuQuercurrootr , c"*"fnctiionnQcurrootr cetev; {
eluerConvartrntspQuse	if. revddconTndo ig usn- utos( seaiffon
 pletecurroot jqy}nctiontype prevd!, c"*"frsiprevd!, ccurrootr) si( sQeuerSeek.aediry )econvartonionnQc
nvs= convarton


prevd+ " " +tcurrootrN)ompconvarton


"* " +tcurrootrN;i( se(oadIveusnlbfeund, taersa pairEut((type !c
nvsnctionnQ,text, c
nv2 in convarton
 )f{,iyte			oadIvec
nv2 outpu{
 curroot jqy	jttmps= conv2.dp
	t( " " )n( se(netype tmp[ 1 ]  ==ecurrootr) si( sQe			oadIveprevdcan	betconvartocono accepterwe	put jqy	jtQc
nvs= convarton


prevd+ " " +ttmp[ 0rN)]fue	jqun(jQ	convarton


"* " +ttmp[ 0rN)]n( se(neeuQuerconvsnctionnQ,
eluerCondeuse	aq}ival
ncrdconvarton

	
se(neeuQuerconvs=, cD{er))f{,jQ(el	jtQc
nvs= convarton


c
nv2 N;i( se(,
eluerOmplrwtse, intartrnet e	termediow.edconTndo
n,,,,,,,}nctiontype convarton


c
nv2 Nd!, cD{er))f{,jQ(el	jtQcurrootr ctmp[ 0rN;,jQ(el	jtQdconTndos.unshiftt Qmp[ 1 ] );,jQ(el	jt},jQ(el	jtbntak;
 sel	jt},jQ(el	}
n(eln}
Qeln}i( se(oadAiolygconvarton (
ypnotb(n	aq}ival
ncr)Eut((type c
nvs!, cD{er))f{,
(,
eluerUn vsd
rrr,
s	 roriylg ucono bubbce,ecuEve andentext, ;
lm(HlyQ(type c
nvsrsiss "thlows"s]ynctionnQn(ntspQuse	=Qc
nv(rrespQusey);	jqun(}nction( sele((tryjsio	bbQn(ntspQuse	=Qc
nv(rrespQusey);	jqun(d}fcuEve ( rs) tiy	nQ	bQntext, {	statr: "parsererr,
"otrrr,
:sc
nvs? rs: "No cr_varsjQu plete" +tprevd+ " t s" +tcurrootr};ion(eln}
n(eln}
Qeln}i	seD(Hl}(i  {
ntext, {	statr: "succesr"otdcon:erespQusey ; }
oadInttauerscriptedconTndo
		}
	}.ajaxSenup({
bacceptj:n( sescript:,"Qext/javascript, siolicatjQu/javascript, siolicatjQu/ecmascript, siolicatjQu/x-ecmascript"(E = 	con() {s:n( sescript:,/(?:java|ecma)script/(E = 	convarton
: sit("text script": fn = jQuettext ) sijQ(		}
	}.globalEvalettext );
	bQntext, textLEut}jE  })on(ry.Hent vrcetet's s.proco casn,and global
		}
	}.ajaxPrefilion( "script",Qfn = jQuershnctiouQuers.cetet ===etachEventr)f{,jQs.cetet = f,
	i;( }iouQuers.cnossDvma
et)f{,jQs.Qndow= "GET";,jQs.globalr= f,
	i;( }i})on(ry.Bindjycriptetagbhechrt{ansroot
		}
	}.ajaxTransroot( "script",Qfn = jQuest	{
{
oadTh
jQD{ansrooteenlygdeals	wtypecnoss nvma
etraq}
stsiouQuers.cnossDvma
et)f{,
se: cotcript,
	bQhead etdvent( "ohead uer		}
	}("head")[0]suerdvent( "onvent( "E.pr) {;	
QQntext, {

nbQta,
:nfn = jQuet_,eeore_verhncti
Qelnycripteetdvent( "ocndow.E.pr) {("script");

nbQ(script.osync)= D{
	;
Eut((type s.scriptChacset ) sijQ(elscript.chacset = s.scriptChacset;
 se(Wj
nbQ(script.src	= s.url; 
//jQuerAttotjohent en
 pextauerblowson

	
sescript.onloase=,script.onntadystatrchang)t=nfn = jQuet_,eisAboote)f{,
(,
eluQuerieAbooteomp!script.ntadyStatr omp/loased|compy pe/ery,
	iscript.ntadyStatr ) )f{,iyte			oadHent vrmemory leerhe	 IEiyte			script.onloase=,script.onntadystatrchang)t=nfuy,n(iyte			oadRjQuerathe(script( se(netype script.  rootN
jQe) tiy	nQ	bQscript.  rootN
jQdrjQuerCinide scriptQ)n( se(ne}
iyte			oadDlrrfrr
ncrdthe(script( se(neycripteetfuy,n(iyte			oadCore_verh
ypnotb(boot
ute(netype !isAboote)f{,y	nQ	bQeore_ver( 200, "succesr"Q)n( se(ne}
n(eln}
Qeln}; 
//jQuerCirentv) {:IE6 bugs	wtypebasn,jque) {
e(#2709,and #4378)
bytpr,dofdoet
//jQuerUsn,eatjvetDOM munipuf joad t savoid ouxtnvmMuniprAJAXrtriereryion	thead.intartBetexee script,shead.firstCinidcn
	el D,

QQeaboot:nfn = jQue)f{,y	nQtype script ) sijQ(elscript.onloas(ctachEvent,etrer));inQQ(W( se

	ue;	i  })on.fn oldCore_versf= stosirjsonp ="/(=)\?(?=&|$)|\?\?/on(ry.Def	con jsonp senjoets
		}
	}.ajaxSenup({
bjsonp: "care_ver"o	ijsonpCore_ver:nfn = jQue)f{,y	: cocere_verh= oldCore_vers.pop()	uer(r		}
	}.exrando +e"_"w+	(rajax_usncrf jQu);inQ;

j[ocere_verh]e= D{
	;
 nntext, cere_ver;
 }i})on(ry.Detect,inexmcQ z
oup jQu,oand inttauercere_verseporE	sonp raq}
stsi		}
	}.ajaxPrefilion( "json 	sonp",Qfn = jQuers,soriginalSenjoets tjqXHR ) si( : cocere_verNent, uerrrrit() ,rrespQuseCo_va
enr,oo	jsonProp	= s.	sonp !, cy,
	isrsieerjsonpery,
	is.url )rrion("url" :ion(;ndo, es.ncons=, c"stplet"	rsi!(is.con() {Tndosomp""Q).iersiOf("siolicatjQu/x-www-	,
m-urlenc
jQd"ncrsirjsonpery,
	is.ncons)frsi"ncon"
el)n(
euerHent vriff
mpleex.prlntedcon ted )is "jsonp" orEwebheer(aeparameter to set
ytype jsonProp	ompj.dataTndos[t0sN)=, c"jsonp" ) si( soadGet cere_verhvent, rjQembvrlet)pueexis{iete: uerdassociow.d	wtypein
 scere_verNent	= s.	sonpCere_verh= 		}
	}.uee current s.	sonpCere_verh)rrion(s.	sonpCere_ver() :,lyQs.	sonpCere_ver;	
 soadIntartreore_verhe	 o url orE	,
msdcon
//type jsonProp	, tion/s[ jsonProp	]e= j[ jsonProp	].
jp
ar:( r	sonp, "$1" +tcere_verNent	)n( s}nctiontype s.	sonp !, cy,
	is, tion/s.url +
	(rajax_rq}
	}ery,
	is.url )rr "&"	: "?"	) +es.	sonp +e"="f+ cere_verNent
	is}

QQry.Useedcongconvarton  o retrieer(json afton script executjQu,jQs.convarton

"script json"]e= fn = jQuenction(uQuer!respQuseCo_va
enrdQuery bQ		}
	}.err,
(tcere_verNent	+ " wastnotbeoreed"dQ;
 seD(Hlentext, respQuseCo_va
enr[ 0rN;,jQ};
tjQuerfexceejson dconTndo
n,j.dataTndos[t0sN)= "json";	
 soadInttauercere_ver
eluerrrrit() )= wtod,w[tcere_verNent	N;,jQwtod,w[tcere_verNent	Ne= fn = jQuenction(respQuseCo_va
enrd=Qaery,
	in;
jQ};
tjQuerCelen-up" "onload"(fires afton convarton
)EutjqXHR.iyway/(fn = jQuenction(ry.Restoreppueexis{iete: uerion(wtod,w[tcere_verNent	Ne= uerrrrit() 
	
se(oadSeer(_verha
 pler
//(type t[tcere_verNent	Ne) tiy	nQry.m, cosurepmpatQre-usingympleup jQu,odoesototscrew ypidts	 reund
	
ses.	sonpCere_verh= originalSenjoets.	sonpCere_ver;	
 sseuersaer(mplecere_verhventeporEfu urepuse
 se(oldCore_vers.pit: fcere_verNent	)n( s D(( seuerCauer_veit wasta" "onload"andewebheer(aerespQuse
//(type respQuseCo_va
enrdch,		}
	}.uee current uerrrrit() )) nctionnQuerrrrit() e respQuseCo_va
enr[t0sN)nn( s D(( serespQuseCo_va
enrd=Querrrrit() )= tachEvent; iue;n(
o	ry.Dey gatr to script( sntext, "script";	i  })on.fn xhrCore_vers, xhrS, rootrd,ioxhrIdt= e,siuer#5280:dIntonnet Explorer)will keep conne= jQu,ocQ ve ifiwebdoototabootead"unloasioxhrOnUnloasAboote= wtod,w.ActierXOent( hrsifn = jQue)n( seuerAbooteauerdofdoeteraq}
sts
ly.fn key; iutext, keysinrxhrCore_vers nctionnxhrCore_vers[ keys](ctachEvent,etrer));inQe	i ; 
ry.Fn = jQu,oto cndow. xhrsy "onload"cndow.StandardXHRe)n( stryjsio	ntext, eew wtod,w.XMLHttpRtq}
st() jE ncaEve( rs) t  }n( "onload"cndow.ActierXHRe)n( stryjsio	ntext, eew wtod,w.ActierXOent( ("Micnosoft.XMLHTTP") jE ncaEve( rs) t  }n(/y.Cndow.rmpleraq}
steoent( 
oad(Th
jQiststireeattotjocono ajaxSenjoets text_verward compatjbility)
		}
	}.ajaxSenjoets.xhrs= wtod,w.ActierXOent( h?
Qr* Micnosoft feilocono puseerly
	s* implue) {rmpleXMLHttpRtq}
sthe	 IE7 (caototraq}
stelocaotfiles),	js* soiwebusermpleActierXOent( hwpesiit 
jyaveilabce	ns* AdditjQuallyeXMLHttpRtq}
sthcan	betatch, edhe	 IE7/IE8 so	ns* we ne coacy,
e_ver.
	s*/
	fn = jQuenctionntext, !Q

j.isLocalersicndow.StandardXHRe)nompcndow.ActierXHRe) jE n:siuerFextaueromplrrblowson
,busermplestandardeXMLHttpRtq}
sthoent( 
Qcndow.StandardXHRon(ry.Determven s, root puseerties xhrS, rootrds= 		}
	}.ajaxSenjoets.xhre) j		}
	}.s, root.con
 =p!!xhrS, rootrdsrsiee"wtypCndd
ntocor"QinrxhrS, rootrds) jxhrS, rootrds= 		}
	}.s, root.ajaxs=p!!xhrS, rootrd;n(/y.Cndow.rm{ansrooteif
mpleblowsonhcan	 rovidnb(n	xhr
type xhrS, rootrds) si( 		}
	}.ajaxTransroot(fn = jQuershnctio
ry.Cnoss nvma
etenlygiylg ucouQuTu rootrdsthlougheXMLHttpRtq}
st
//type !s.cnossDvma
etuer		}
	}.s, root.con
 )f{,iyte: cocere_ver;

nbQntext, tionnQta,
:nfn = jQuetheaders,bcompy pe )f{,
(,
eluerGet a eew xhr
ut(te: cohent e, io	iqun(	xhrs= s.xhre) j
(,
eluerOpenu	}
	socket
(,
eluerPasrlet:eQuerusereent, geenrow.g a	login popup"ad"Operae(#2865)
(,
eluQuers.usereente)f{,y	nQ	bxhr.seen	is.Qndo,is.url,rs.osync,rs.usereent,rs.passwordy);	jqun(}nction( sele((xhr.seen	is.Qndo,is.url,rs.osyncy);	jqun(}

(,
eluerAiolygcustom totlds	if. rovidnd( s
eluQuers.xhrFotldse)f{,y	nQ	btext, isinrs.xhrFotldse)f{,y	nQ	b(xhr[tHANe=rs.xhrFotlds[tHANn( se(ne}
n(eln}

(,
eluerOerrride mimn ted )iypneednd
		e	luQuers.mimnTndo:rsixhr.serrrideMimnTndoe)f{,y	nQ	bxhr.serrrideMimnTndoers.mimnTndo:);	jqun(}

(,
eluerX-Raq}
stnd-With)header
QQeliuerFextcnoss-nvma
etraq}
sts,rseeoeteastco_ditjQu
 pextageteflight are
QQeliuerakid t sa jigsaw puzz e, we simplyenjvar yanpi{r( sDLEsure.
QQeliuer(ithcan	iyway/"be yanp,	 a per-raq}
stebasig orr,v)  usingyajaxSenup)
QQeliuerFextsent-nvma
etraq}
sts,rwoototchang)theader(uQualndodyi rovidnd.
		e	luQuer!s.cnossDvma
etrsi!headers["X-Raq}
stnd-With"]ynctionnQn(headers["X-Raq}
stnd-With"]y= "XMLHttpRtq}
st";	jqun(}

(,
eluerNe coanQextrnrm{y/cuEvey	,

cnoss nvma
etraq}
stssinrFirefox 3
(,
eltryjsio	bbQntext, isinrheaderscnction(nQ	bxhr.TetRtq}
stHeader( i,rheaders[tHANe)
	ise(ne}
n(eln}ncaEve( rrrs) t  
(,
eluerDo se setfesraq}
st
yyyy
oadTh
jQmay	ratseesn exceptrenwwpivey
jyac{uaely
yyyy
oadhent edhe	 		}
	}.ajax (soinocD{y/cuEveyplre)
QQelixhr.Tend(s(is.hasCo_vent	rsis.ncons)fompnQuer; j
(,
eluerLis() er
QQelicere_verh= fn = jQuet_,eisAboote)f{,ise(ne: cottatu
,sntspQuseHeaders, Ttatu
Text,trespQuse
n(iyte			oadFirefox thlows exceptrenswwpesiaccesrlet puseerties yte			oadompan	xhrswpesiaenjtworksrrr,
foccurrod yte			oadt ver//helpful.knobs-nocorocom/oersi.php/Component_ntext,ed_feilure_c
jQ:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
QQeliltryjsiion(nQ	boadWusenjvar eoreedoand istabooterw,
fcrmpy pe( se	e	luQuereore_verhrsierieAbooteompxhr.ntadyStatr === 4 ) )f{,iyte			eluerOnlygcoreeddoncr
//(QQelicere_verh= tachEvent; {
el(,
eluerDo notbkeep aspactieraanymorr
//(QQeliuQuerhent e )f{,jQ(el	jtQxhr.snntadystatrchang)t=n		}
	}.nvop;,jQ(el	jtQtype xhrOnUnloasAboote)f{,jQ(el	jtQtdey tr(xhrCore_vers[ hent e N;,jQ(el	jtQ},jQ(el	jt} {
el(,
eluerIveit'g anb(boot
ute(neeluQuerieAboote)f{,jQ(el	jtQuerAboote
t munuaely)iypneednd
		e	l	jtQtype xhr.ntadyStatr !== 4 ) {,jQ(el	jtQtxhr.aboot()
	is(el	jtQ},jQ(el	jt}nction( sele(((serespQuses =p{};ion(elne		ttatu
  rxhr.Ttatus;
Q((e(((serespQuseHeaders =pxhr.getAllRtspQuseHeaderse) j
(,
el	jtQuerWpesiraq}
stlet binaryjncon, IE6-9)will tprowEan exceptren
(,
el	jtQuerad"anyeattemptono access respQuseTextt(#11426)
		e	l	jtQtype ;ndo, exhr.ntbstatet= 1;
 se(D{ansroot.send(sntq}
stHeaders,bdoen )n( sd}fcuEve ( rs) tiy	nQry.Propagatr exceptrenwastrrr,
f
ypnotbdoen
lyQ(type ttatep<e2cnction(eldoen(:-1, es);
QQeluerSimplyenteprowEomplrwtse
 se(Wnction( sele(eprowEe jEuyQejEuy} iue	
QQry.Core_verhtextwpesijvaryypidteis"aoen
ly "onload"doen(:Ttatu
,seatjveStatusText,trespQuse
,sheaderscnction(: coisSuccesr, Tuccesr, rrr,
,trespQuse, modiford,io	bbstatusText =seatjveStatusTextLEfn ooadCoreeddoncr
//(type ttatep===e2cnction(entext,
	el D(( seuerStatr is""dsnl" now
	bbstatet= 2LEfn ooadCeler.timnuut
_veit exis{

//(type timnuutTimnr	)f{,lyQ(celertimnuut( timnuutTimnr	)
	el D(( seuerDlrrfrr
ncrdtransroot pextearlyggarbagejcollectjQu	jtyoad(nocm jte

howalongymplejqXHR oent( )will bee jnd)
		(D{ansroote= tachEvent; {
eluerCaveetrespQuseeheaders
QQentspQuseHeadersStplet)=sheaderscomp""
	
se(oadSet ntadyStatr seljqXHR.ntadyStatr = Ttatu
	>c0	r 4 : e;(( seuerDltermven uQuTuccesrful
	QQusSuccesr = Ttatu
	>= 200frsistatu
	< 300sompttatu
  ==e304;(( seuerGet ntspQuseedcon
//(type respQuse
cnction(entspQuse	=QajaxHent vRtspQuses(gs,rjqXHR, respQuse
cn
	el D(( seuerConvartrnocm jte

wpatQ(mpatQway respQuseXXXQtotlds	 roriyway/"sat)
n(entspQuse	=QajaxConvart(gs,rrespQuse, jqXHR, usSuccesr );	
nbQry.IQuTuccesrful,
hent e tndo chainlet
QQeuQuerieSuccesr ) si( se(oadSen mpleIf-Modiford-Sincrrand/,

If-Noen-MuEveyheader, _veiu,uQModifordb	ode.
bbbbuQuers.uQModifordb) tiyte		modifordf= 	qXHR.getRtspQuseHeader("Last-Modiford";n(HlyQ(type modifordb) tiyte					}
	}.lastModiford[icetetURLw]d= modiford;	jqun(}
Qelnemodifordf= 	qXHR.getRtspQuseHeader("etag";n(HlyQ(type modifordb) tiyte					}
	}.etag[icetetURLw]d= modiford;	jqun(}
Qeln}i( se(oad
ypnooco_vent
ut((type ttatu
  ==e204:ompj.Qndo  ==eoHEAD"cnction(elstatusText =s"nocon() {";i( se(oad
ypnot modiford
 se(Wnctiontype ttatu
  ==e304cnction(elstatusText =s"notmodiford";i( se(oadIvewebheer(ncon, y p'seconvartrin
 se(Wnction( sele(statusText =srespQuse.TtatQn(HlyQ(Tuccesrs= respQuse.ncon;
 se		rrr,
f= respQuse.rrr,
n(HlyQ(tsSuccesr = !rrr,
n(HlyQejEuy}nction( seleuerWeQextrn( )rrr,
fpletestatusText seleuertpesinexmcQ z
ostatusText andjytatu
 texteon-aboots,jQ(errr,
f= statusTextLEut((type ttatu
 omp!statusText ) sijQ(elstatusText =s"rrr,
"n(HlyQ(type statu
	< 0b) tiyte			ttatu
  r0;	iqun(}
Qeln}iel D(( seuerSetrncons	,

the(f, coxhrsoent( 
Q((jqXHR.Ttatu
	= status;
Q((jqXHR.Ttatu
Text =s(seatjveStatusTextsompttatu
Text ) +p""
	
se(oadSuccesr/Err,

QQeuQuerieSuccesr ) siQelndefrrred.resolveWitheecere_verCr_vext,r[ Tuccesr, statusText,tjqXHR ]s)n jqy}nction( seledefrrred.rent( Witheecere_verCr_vext,r[ jqXHR, Ttatu
Text,trrr,
f]cn
	el D(( seuerStatu
-d,dofd( "Ecere_vers
nbbjqXHR.Ttatu
C
jQ( statu
C
jQe) jEuystatu
C
jQ = tachEvent; {
eluQuerfireGlobals Query bQglobalEv) {Cr_vext.trigger(:ieSuccesr ?t"ajaxSuccesr"A:t"ajaxErr,
"o	iqun([ jqXHR, T,:ieSuccesr ?tTuccesrs:trrr,
f]cn
	el D(( seuerCompy pe( secompy peDefrrred.fireWitheecere_verCr_vext,r[ jqXHR, Ttatu
TexttQQ);	
	neuQuerfireGlobals Query bQglobalEv) {Cr_vext.trigger(:"ajaxCompy pe"ot[rjqXHR, T	]dQ;
 seQ/y.Hent vrthe(globalrAJAXrcoun.erEut((type !(:--		}
	}.actieru) nctionnQ,		}
	}.,v) {.trigger("ajaxStop");
 se(WjEuy} iue	
QQntext, 	qXHR
	ie,

QgetJSON:,fn = jQueturl,encon, eore_verhnctionntext, 		}
	}.get(turl,encon, eore_ver, "json" nn(E = 
tgetScript:,fn = jQueturl,eeore_verhnctionntext, 		}
	}.get(turl,etachEvent,eeore_ver, "script" nn(E  })on 		}
	}.eotj( s "get", "post"tQ,Qfn = jQueri,emethod:t	{
			}
	}[emethod:]e= fn = jQueturl,encon, eore_ver, ted e)n( seuershiftQaery,
	ine_venconsaery,
	i wastomip.ed
leuQuer		}
	}.uee current ncons)fnctionntndo:= ondo)ompcere_ver;
 sexere_verh= ncon;
 sencons= tachEvent; iue	
QQntext, 		}
	}.ajax(( selurl:nurl,o	jttndo: method,
le	dconTndo: DLE,,
le	dcon:encon,
yQ(Tuccesr:ucere_ver
o	}nn(E ; })on(/*.Hent vs respQuse
c( sad"ajaxsntq}
st:
 * -rfinds(mpleright dconTndoc(mediow.g betw enccon() {-ted )( seex.prlntedconTndo)
 * -rntext,s
mplelerryspQudoeterespQuse
s*/
 "onload"ajaxHent vRtspQuses(gs,rjqXHR, respQuse
cnctio: cofirstDconTndo, ( ,efinalDconTndo, DLE,,
lecon() {sy= s.cr_ven.s,	jQdconTndoss= s.dconTndos; {
oadRjQuera uto dconTndo ( seget con() {-ted )inymplepuscesr
e	inite dataTndos[t0sN)=, c"*"fnctiondconTndos.shiftt)n( stype cts=, ctachEventr)f{,jQ	cty= s.mimnTndo:uer	qXHR.getRtspQuseHeader("Co_vent-Tndo";;	iue	i  {
oadChachr_vers'rejdeallet	wtypea knownccon() {-ted 
stype cts)f{,jQtext, ted )inycon() {sy) tiyteuQuercon() {s

tndo ]ersicon() {s

tndo ]ery,
	ictu) nctionnQdconTndos.unshiftt Qndow;n(onnQbntak;
 seD(Hl}(i  {
oadChachrto see ifiwebheer(aerespQuse		,

mpleex.prlntedconTndo ytype dataTndos[t0sN)
etraspQuse
cnctionfinalDconTndo =edconTndos[t0sNn iWnction( seuerT	} convartibleudconTndos,jQtext, ted )inyrespQuse
cnction(uQuer!dataTndos[t0sN)ompj.convarton


tndo + " " +tdconTndos[0]s]ynctionnQfinalDconTndo =eondo;	jqunbntak;
 seD(Hl(uQuer!firstDconTndoynctionnQfirstDconTndoy=eondo;	jquD(Hl}(iuuerOre

	c:userfirst oen
ly inalDconTndo =e inalDconTndo uerfirstDconTndo;	i  {
uerIvewebfeund.aedconTndo y/y.We od
tmpledconTndo mtemplelist iypneednd
	uerandentext, ;
lelerryspQudoeterespQuse
euQuerfinalDconTndo vctiobtype finalDconTndo !, cdconTndos[t0sN)nc{
nnQdconTndos.unshiftt finalDconTndo v;	iue	inntext, respQuse
[ finalDconTndo ]n(E  }n(/*.Chain convarsjQu,ogjvenu	}
	raq}
ste( setfesoriginalerespQuse
s* Alsoeyan
	teetrespQuseXXXQtotlds	enymplejqXHR inttancr
s*/
 "onload"ajaxConvart(gs,rrespQuse, jqXHR, usSuccesr )ctio: coconv2,pcurroot,oconv, Dmp,
etev,
leconvarton
 =p{},	jQ/erWork wtypea copy ompdconTndoss
nncasn,we ne cono modif )it f,
fcr_varsjQu	jQdconTndoss= s.dconTndos.d
	r: ); {
ry.Cndow.sconvarton
 mapEwtypelg uscasndokeys ytype dataTndos[t1sN)nc{
nntext, c
nvsinrs.convarton
 )f{,jQ	convarton


conv.toLg usCaol(;e]e= j.convarton


c
nvs];	iue	i  {
currootr cdconTndos.shiftt)n(
euerConvartrnteeotjotaq}
ntoco dconTndo y	init: fcurrootr) si( suQuers.ntspQuseFotlds[fcurrootrN)nc{
nnQ	qXHR[ts.ntspQuseFotlds[fcurrootrN)]f= respQuse
	is}

QQry.AiolygmpledconFilion if. rovidnd( suQuer!etevdrsiisSuccesr rsis.dconFilion nction(ntspQuse	=Qs.dconFilion(rrespQuse, s.dconTndoc)
	is}

QQetevd= curroot
	iscurrootr cdconTndos.shiftt)n(
eeuQuercurrootr) si( sQry.Tplre's	enlygworks( sdoduQu{urrootrdconTndo ig usn- utoiyteuQuercurrootr , c"*"fnctiionnQcurrootr cetev; {
eluerConvartrntspQuse	if. revddconTndo ig usn- utos( seaiffon
 pletecurroot jqy}nctiontype prevd!, c"*"frsiprevd!, ccurrootr) si( sQeuerSeek.aediry )econvartonionnQc
nvs= convarton


prevd+ " " +tcurrootrN)ompconvarton


"* " +tcurrootrN;i( se(oadIveusnlbfeund, taersa pairEut((type !c
nvsnctionnQ,text, c
nv2 in convarton
 )f{,iyte			oadIvec
nv2 outpu{
 curroot jqy	jttmps= conv2.dp
	t( " " )n( se(netype tmp[ 1 ]  ==ecurrootr) si( sQe			oadIveprevdcan	betconvartocono accepterwe	put jqy	jtQc
nvs= convarton


prevd+ " " +ttmp[ 0rN)]fue	jqun(jQ	convarton


"* " +ttmp[ 0rN)]n( se(neeuQuerconvsnctionnQ,
eluerCondeuse	aq}ival
ncrdconvarton

	
se(neeuQuerconvs=, cD{er))f{,jQ(el	jtQc
nvs= convarton


c
nv2 N;i( se(,
eluerOmplrwtse, intartrnet e	termediow.edconTndo
n,,,,,,,}nctiontype convarton


c
nv2 Nd!, cD{er))f{,jQ(el	jtQcurrootr ctmp[ 0rN;,jQ(el	jtQdconTndos.unshiftt Qmp[ 1 ] );,jQ(el	jt},jQ(el	jtbntak;
 sel	jt},jQ(el	}
n(eln}
Qeln}i( se(oadAiolygconvarton (
ypnotb(n	aq}ival
ncr)Eut((type c
nvs!, cD{er))f{,
(,
eluerUn vsd
rrr,
s	 roriylg ucono bubbce,ecuEve andentext, ;
lm(HlyQ(type c
nvsrsiss "thlows"s]ynctionnQn(ntspQuse	=Qc
nv(rrespQusey);	jqun(}nction( sele((tryjsio	bbQn(ntspQuse	=Qc
nv(rrespQusey);	jqun(d}fcuEve ( rs) tiy	nQ	bQntext, {	statr: "parsererr,
"otrrr,
:sc
nvs? rs: "No cr_varsjQu plete" +tprevd+ " t s" +tcurrootr};ion(eln}
n(eln}
Qeln}i	seD(Hl}(i  {
ntext, {	statr: "succesr"otdcon:erespQusey ; }
oadInttauerscriptedconTndo
		}
	}.ajaxSenup({
bacceptj:n( sescript:,"Qext/javascript, siolicatjQu/javascript, siolicatjQu/ecmascript, siolicatjQu/x-ecmascript"(E = 	con() {s:n( sescript:,/(?:java|ecma)script/(E = 	convarton
: sit("text script": fn = jQuettext ) sijQ(		}
	}.globalEvalettext );
	bQntext, textLEut}jE  })on(ry.Hent vrcetet's s.proco casn,and global
		}
	}.ajaxPrefilion( "script",Qfn = jQuershnctiouQuers.cetet ===etachEventr)f{,jQs.cetet = f,
	i;( }iouQuers.cnossDvma
et)f{,jQs.Qndow= "GET";,jQs.globalr= f,
	i;( }i})on(ry.Bindjycriptetagbhechrt{ansroot
		}
	}.ajaxTransroot( "script",Qfn = jQuest	{
{
oadTh
jQD{ansrooteenlygdeals	wtypecnoss nvma
etraq}
stsiouQuers.cnossDvma
et)f{,
se: cotcript,
	bQhead etdvent( "ohead uer		}
	}("head")[0]suerdvent( "onvent( "E.pr) {;	
QQntext, {

nbQta,
:nfn = jQuet_,eeore_verhncti
Qelnycripteetdvent( "ocndow.E.pr) {("script");

nbQ(script.osync)= D{
	;
Eut((type s.scriptChacset ) sijQ(elscript.chacset = s.scriptChacset;
 se(Wj
nbQ(script.src	= s.url; 
//jQuerAttotjohent en
 pextauerblowson

	
sescript.onloase=,script.onntadystatrchang)t=nfn = jQuet_,eisAboote)f{,
(,
eluQuerieAbooteomp!script.ntadyStatr omp/loased|compy pe/ery,
	iscript.ntadyStatr ) )f{,iyte			oadHent vrmemory leerhe	 IEiyte			script.onloase=,script.onntadystatrchang)t=nfuy,n(iyte			oadRjQuerathe(script( se(netype script.  rootN
jQe) tiy	nQ	bQscript.  rootN
jQdrjQuerCinide scriptQ)n( se(ne}
iyte			oadDlrrfrr
ncrdthe(script( se(neycripteetfuy,n(iyte			oadCore_verh
ypnotb(boot
ute(netype !isAboote)f{,y	nQ	bQeore_ver( 200, "succesr"Q)n( se(ne}
n(eln}
Qeln}; 
//jQuerCirentv) {:IE6 bugs	wtypebasn,jque) {
e(#2709,and #4378)
bytpr,dofdoet
//jQuerUsn,eatjvetDOM munipuf joad t savoid ouxtnvmMuniprAJAXrtriereryion	thead.intartBetexee script,shead.firstCinidcn
	el D,

QQeaboot:nfn = jQue)f{,y	nQtype script ) sijQ(elscript.onloas(ctachEvent,etrer));inQQ(W( se

	ue;	i  })on.fn oldCore_versf= stosirjsonp ="/(=)\?(?=&|$)|\?\?/on(ry.Def	con jsonp senjoets
		}
	}.ajaxSenup({
bjsonp: "care_ver"o	ijsonpCore_ver:nfn = jQue)f{,y	: cocere_verh= oldCore_vers.pop()	uer(r		}
	}.exrando +e"_"w+	(rajax_usncrf jQu);inQ;

j[ocere_verh]e= D{
	;
 nntext, cere_ver;
 }i})on(ry.Detect,inexmcQ z
oup jQu,oand inttauercere_verseporE	sonp raq}
stsi		}
	}.ajaxPrefilion( "json 	sonp",Qfn = jQuers,soriginalSenjoets tjqXHR ) si( : cocere_verNent, uerrrrit() ,rrespQuseCo_va
enr,oo	jsonProp	= s.	sonp !, cy,
	isrsieerjsonpery,
	is.url )rrion("url" :ion(;ndo, es.ncons=, c"stplet"	rsi!(is.con() {Tndosomp""Q).iersiOf("siolicatjQu/x-www-	,
m-urlenc
jQd"ncrsirjsonpery,
	is.ncons)frsi"ncon"
el)n(
euerHent vriff
mpleex.prlntedcon ted )is "jsonp" orEwebheer(aeparameter to set
ytype jsonProp	ompj.dataTndos[t0sN)=, c"jsonp" ) si( soadGet cere_verhvent, rjQembvrlet)pueexis{iete: uerdassociow.d	wtypein
 scere_verNent	= s.	sonpCere_verh= 		}
	}.uee current s.	sonpCere_verh)rrion(s.	sonpCere_ver() :,lyQs.	sonpCere_ver;	
 soadIntartreore_verhe	 o url orE	,
msdcon
//type jsonProp	, tion/s[ jsonProp	]e= j[ jsonProp	].
jp
ar:( r	sonp, "$1" +tcere_verNent	)n( s}nctiontype s.	sonp !, cy,
	is, tion/s.url +
	(rajax_rq}
	}ery,
	is.url )rr "&"	: "?"	) +es.	sonp +e"="f+ cere_verNent
	is}

QQry.Useedcongconvarton  o retrieer(json afton script executjQu,jQs.convarton

"script json"]e= fn = jQuenction(uQuer!respQuseCo_va
enrdQuery bQ		}
	}.err,
(tcere_verNent	+ " wastnotbeoreed"dQ;
 seD(Hlentext, respQuseCo_va
enr[ 0rN;,jQ};
tjQuerfexceejson dconTndo
n,j.dataTndos[t0sN)= "json";	
 soadInttauercere_ver
eluerrrrit() )= wtod,w[tcere_verNent	N;,jQwtod,w[tcere_verNent	Ne= fn = jQuenction(respQuseCo_va
enrd=Qaery,
	in;
jQ};
tjQuerCelen-up" "onload"(fires afton convarton
)EutjqXHR.iyway/(fn = jQuenction(ry.Restoreppueexis{iete: uerion(wtod,w[tcere_verNent	Ne= uerrrrit() 
	
se(oadSeer(_verha
 pler
//(type t[tcere_verNent	Ne) tiy	nQry.m, cosurepmpatQre-usingympleup jQu,odoesototscrew ypidts	 reund
	
ses.	sonpCere_verh= originalSenjoets.	sonpCere_ver;	
 sseuersaer(mplecere_verhventeporEfu urepuse
 se(oldCore_vers.pit: fcere_verNent	)n( s D(( seuerCauer_veit wasta" "onload"andewebheer(aerespQuse
//(type respQuseCo_va
enrdch,		}
	}.uee current uerrrrit() )) nctionnQuerrrrit() e respQuseCo_va
enr[t0sN)nn( s D(( serespQuseCo_va
enrd=Querrrrit() )= tachEvent; iue;n(
o	ry.Dey gatr to script( sntext, "script";	i  })on.fn xhrCore_vers, xhrS, rootrd,ioxhrIdt= e,siuer#5280:dIntonnet Explorer)will keep conne= jQu,ocQ ve ifiwebdoototabootead"unloasioxhrOnUnloasAboote= wtod,w.ActierXOent( hrsifn = jQue)n( seuerAbooteauerdofdoeteraq}
sts
ly.fn key; iutext, keysinrxhrCore_vers nctionnxhrCore_vers[ keys](ctachEvent,etrer));inQe	i ; 
ry.Fn = jQu,oto cndow. xhrsy "onload"cndow.StandardXHRe)n( stryjsio	ntext, eew wtod,w.XMLHttpRtq}
st() jE ncaEve( rs) t  }n( "onload"cndow.ActierXHRe)n( stryjsio	ntext, eew wtod,w.ActierXOent( ("Micnosoft.XMLHTTP") jE ncaEve( rs) t  }n(/y.Cndow.rmpleraq}
steoent( 
oad(Th
jQiststireeattotjocono ajaxSenjoets text_verward compatjbility)
		}
	}.ajaxSenjoets.xhrs= wtod,w.ActierXOent( h?
Qr* Micnosoft feilocono puseerly
	s* implue) {rmpleXMLHttpRtq}
sthe	 IE7 (caototraq}
stelocaotfiles),	js* soiwebusermpleActierXOent( hwpesiit 
jyaveilabce	ns* AdditjQuallyeXMLHttpRtq}
sthcan	betatch, edhe	 IE7/IE8 so	ns* we ne coacy,
e_ver.
	s*/
	fn = jQuenctionntext, !Q

j.isLocalersicndow.StandardXHRe)nompcndow.ActierXHRe) jE n:siuerFextaueromplrrblowson
,busermplestandardeXMLHttpRtq}
sthoent( 
Qcndow.StandardXHRon(ry.Determven s, root puseerties xhrS, rootrds= 		}
	}.ajaxSenjoets.xhre) j		}
	}.s, root.con
 =p!!xhrS, rootrdsrsiee"wtypCndd
ntocor"QinrxhrS, rootrds) jxhrS, rootrds= 		}
	}.s, root.ajaxs=p!!xhrS, rootrd;n(/y.Cndow.rm{ansrooteif
mpleblowsonhcan	 rovidnb(n	xhr
type xhrS, rootrds) si( 		}
	}.ajaxTransroot(fn = jQuershnctio
ry.Cnoss nvma
etenlygiylg ucouQuTu rootrdsthlougheXMLHttpRtq}
st
//type !s.cnossDvma
etuer		}
	}.s, root.con
 )f{,iyte: cocere_ver;

nbQntext, tionnQta,
:nfn = jQuetheaders,bcompy pe )f{,
(,
eluerGet a eew xhr
ut(te: cohent e, io	iqun(	xhrs= s.xhre) j
(,
eluerOpenu	}
	socket
(,
eluerPasrlet:eQuerusereent, geenrow.g a	login popup"ad"Operae(#2865)
(,
eluQuers.usereente)f{,y	nQ	bxhr.seen	is.Qndo,is.url,rs.osync,rs.usereent,rs.passwordy);	jqun(}nction( sele((xhr.seen	is.Qndo,is.url,rs.osyncy);	jqun(}

(,
eluerAiolygcustom totlds	if. rovidnd( s
eluQuers.xhrFotldse)f{,y	nQ	btext, isinrs.xhrFotldse)f{,y	nQ	b(xhr[tHANe=rs.xhrFotlds[tHANn( se(ne}
n(eln}

(,
eluerOerrride mimn ted )iypneednd
		e	luQuers.mimnTndo:rsixhr.serrrideMimnTndoe)f{,y	nQ	bxhr.serrrideMimnTndoers.mimnTndo:);	jqun(}

(,
eluerX-Raq}
stnd-With)header
QQeliuerFextcnoss-nvma
etraq}
sts,rseeoeteastco_ditjQu
 pextageteflight are
QQeliuerakid t sa jigsaw puzz e, we simplyenjvar yanpi{r( ercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuercuer