/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var memoryGame = {
    tileCount: 20, //number of tiles
    tileOnRow: 5, //tiles in row
    divBoard: null, //board
    divScore: null, //result
    tiles: [], //shuffled tiles
    tilesChecked: [], //checked tiles
    moveCount: 0, //number of moves
    tilesImg: [//tiles images
    'images/tile1.png', 'images/tile2.png', 'images/tile3.png', 'images/tile4.png', 'images/tile5.png', 'images/tile6.png', 'images/tile7.png', 'images/tile8.png', 'images/tile9.png', 'images/tile10.png'],

    canGet: true, //able to click tile
    tilePairs: 0,

    tileClick: function tileClick(e) {
        if (this.canGet) {

            if (!this.tilesChecked[0] || this.tilesChecked[0].dataset.index !== e.target.dataset.index) {
                this.tilesChecked.push(e.target);
                e.target.style.backgroundImage = 'url(' + this.tilesImg[e.target.dataset.cardType] + ')';
            }

            if (this.tilesChecked.length === 2) {
                this.canGet = false;

                if (this.tilesChecked[0].dataset.cardType === this.tilesChecked[1].dataset.cardType) {
                    setTimeout(this.deleteTiles.bind(this), 500);
                } else {
                    setTimeout(this.resetTiles.bind(this), 500);
                }

                this.moveCount++;
                this.divScore.innerText = this.moveCount;
            }
        }
    },

    deleteTiles: function deleteTiles() {
        this.tilesChecked[0].remove();
        this.tilesChecked[1].remove();

        this.canGet = true;
        this.tilesChecked = [];

        this.tilePairs++;
        if (this.tilePairs >= this.tileCount / 2) {
            alert('Game Over! You needed ' + this.moveCount + ' moves !');
        }
    },

    resetTiles: function resetTiles() {
        this.tilesChecked[0].style.backgroundImage = 'url(images/question.png)';
        this.tilesChecked[1].style.backgroundImage = 'url(images/question.png)';

        this.tilesChecked = [];
        this.canGet = true;
    },

    startGame: function startGame() {

        this.divBoard = document.querySelector('.game-board');
        this.divBoard.innerText = '';

        this.divScore = document.querySelector('.game-score');
        this.divScore.innerText = 0;

        this.tiles = [];
        this.tilesChecked = [];
        this.moveCount = 0;
        this.canGet = true;
        this.tilePairs = 0;

        for (var i = 0; i < this.tileCount; i++) {
            this.tiles.push(Math.floor(i / 2));
        }

        //shuffle tiles
        for (var _i = this.tileCount - 1; _i > 0; _i--) {
            var swap = Math.floor(Math.random() * _i);
            var temp = this.tiles[_i];
            this.tiles[_i] = this.tiles[swap];
            this.tiles[swap] = temp;
        }

        for (var _i2 = 0; _i2 < this.tileCount; _i2++) {
            var tile = document.createElement('div');
            tile.classList.add("game-tile");
            this.divBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[_i2];
            tile.dataset.index = _i2;

            tile.style.left = 5 + (tile.offsetWidth + 10) * (_i2 % this.tileOnRow) + 'px';
            tile.style.top = 5 + (tile.offsetHeight + 10) * Math.floor(_i2 / this.tileOnRow) + 'px';

            tile.addEventListener('click', this.tileClick.bind(this));
        }
    }
};

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.game-start').addEventListener('click', function () {
        memoryGame.startGame();
    });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(6)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
		var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/sass-loader/lib/loader.js!./style.scss");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\n.game {\n  display: flex;\n  flex-direction: column;\n  font-family: 'Gloria Hallelujah', cursive; }\n\n.game-board {\n  margin: 15px auto;\n  position: relative;\n  background: #cdc5ff;\n  width: 780px;\n  height: 625px;\n  border: 2px solid #937100;\n  border-radius: 5px; }\n\n.game-tile {\n  position: absolute;\n  width: 145px;\n  height: 145px;\n  background: #434343 url(" + escape(__webpack_require__(5)) + ") center center no-repeat; }\n\n.game-score {\n  text-align: center;\n  font-size: 25px;\n  font-family: 'Gloria Hallelujah', cursive; }\n\nbutton {\n  align-self: center;\n  width: 25%;\n  margin-top: 10px;\n  font-family: 'Gloria Hallelujah', cursive;\n  border-radius: 5px;\n  outline: none;\n  background-color: #434343;\n  color: #cdc5ff; }\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(7);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 7 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);