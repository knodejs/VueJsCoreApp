(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _vue = __webpack_require__(2);
	
	var _vue2 = _interopRequireDefault(_vue);
	
	var _vueRouter = __webpack_require__(3);
	
	var _vueRouter2 = _interopRequireDefault(_vueRouter);
	
	var _routes = __webpack_require__(4);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	__webpack_require__(46);
	
	__webpack_require__(85);
	
	__webpack_require__(91);
	
	__webpack_require__(93);
	
	var _vueMaterial = __webpack_require__(95);
	
	var _vueMaterial2 = _interopRequireDefault(_vueMaterial);
	
	__webpack_require__(96);
	
	var _App = __webpack_require__(98);
	
	var _App2 = _interopRequireDefault(_App);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_vue2.default.use(_vueRouter2.default);
	_vue2.default.use(_vueMaterial2.default);
	
	var router = new _vueRouter2.default({
	  routes: _routes2.default
	});
	
	router.afterEach(function (currentRoute) {
	  var mainContent = document.querySelector('.main-content');
	
	  if (mainContent) {
	    mainContent.scrollTop = 0;
	  }
	});
	
	_vue2.default.material.theme.registerAll({
	  apptheme: {
	    primary: 'teal',
	    accent: 'cyan'
	  }
	});
	
	var YASApp = _vue2.default.component('app', _App2.default);
	
	var app = new YASApp({
	  el: '#app',
	  router: router
	});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("vue");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _shrinkPlace = __webpack_require__(5);
	
	var _shrinkPlace2 = _interopRequireDefault(_shrinkPlace);
	
	var _statsPlace = __webpack_require__(30);
	
	var _statsPlace2 = _interopRequireDefault(_statsPlace);
	
	var _notFound = __webpack_require__(41);
	
	var _notFound2 = _interopRequireDefault(_notFound);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var main = [{
	  path: '/',
	  name: 'landing',
	  component: _shrinkPlace2.default
	}, {
	  path: '/s/:sroute',
	  name: 'statsview',
	  component: _statsPlace2.default
	}, {
	  path: '/home',
	  redirect: '/'
	}];
	
	var error = [{
	  path: '*',
	  name: 'error',
	  component: _notFound2.default
	}];
	
	exports.default = [].concat(main, error);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(6)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(29),
	  /* scopeId */
	  "data-v-2bb3c85e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\layouts\\shrinkPlace.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] shrinkPlace.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("fd0d9418", content, false);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.shrink-layout[data-v-2bb3c85e] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/shrinkPlace.vue?cdc643e6"],"names":[],"mappings":";AA4BA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"shrinkPlace.vue","sourcesContent":["<template>\r\n  <div class=\"shrink-layout\">\r\n    <!--<img src=\"./assets/logo.png\">-->\r\n    <intro></intro>\r\n    <urlShrinkInput></urlShrinkInput>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/Intro'\r\n  import urlShrinkInput from '../components/urlShrinkInput'\r\n  import devCredits from '../components/devCredits'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      urlShrinkInput,\r\n      devCredits\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .shrink-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-top: 60px;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	var listToStyles = __webpack_require__(10)
	
	module.exports = function (parentId, list, isProduction) {
	  if (typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
	    var context = __VUE_SSR_CONTEXT__
	    var styles = context._styles
	
	    if (!styles) {
	      styles = context._styles = {}
	      Object.defineProperty(context, 'styles', {
	        enumberable: true,
	        get : function() {
	          return (
	            context._renderedStyles ||
	            (context._renderedStyles = renderStyles(styles))
	          )
	        }
	      })
	    }
	
	    list = listToStyles(parentId, list)
	    if (isProduction) {
	      addStyleProd(styles, list)
	    } else {
	      addStyleDev(styles, list)
	    }
	  }
	}
	
	// In production, render as few style tags as possible.
	// (mostly because IE9 has a limit on number of style tags)
	function addStyleProd (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      // group style tags by media types.
	      var id = part.media || 'default'
	      var style = styles[id]
	      if (style) {
	        style.ids.push(part.id)
	        style.css += '\n' + part.css
	      } else {
	        styles[id] = {
	          ids: [part.id],
	          css: part.css,
	          media: part.media
	        }
	      }
	    }
	  }
	}
	
	// In dev we use individual style tag for each module for hot-reload
	// and source maps.
	function addStyleDev (styles, list) {
	  for (var i = 0; i < list.length; i++) {
	    var parts = list[i].parts
	    for (var j = 0; j < parts.length; j++) {
	      var part = parts[j]
	      styles[part.id] = {
	        ids: [part.id],
	        css: part.css,
	        media: part.media
	      }
	    }
	  }
	}
	
	function renderStyles (styles) {
	  var css = ''
	  for (var key in styles) {
	    var style = styles[key]
	    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
	        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
	        style.css + '</style>'
	  }
	  return css
	}


/***/ }),
/* 10 */
/***/ (function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Intro = __webpack_require__(13);
	
	var _Intro2 = _interopRequireDefault(_Intro);
	
	var _urlShrinkInput = __webpack_require__(18);
	
	var _urlShrinkInput2 = _interopRequireDefault(_urlShrinkInput);
	
	var _devCredits = __webpack_require__(24);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _Intro2.default,
	    urlShrinkInput: _urlShrinkInput2.default,
	    devCredits: _devCredits2.default
	  }
	};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(14)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(17),
	  /* scopeId */
	  "data-v-04afd38a",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\components\\Intro.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Intro.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(15);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("ec87752a", content, false);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.intro[data-v-04afd38a] {\n  margin-top: 15%;\n}\n.app-title[data-v-04afd38a] {\n  font-size: 4rem;\n  letter-spacing: 0.1rem;\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/Intro.vue?e7143354"],"names":[],"mappings":";AAqBA;EACA,gBAAA;CACA;AAEA;EACA,gBAAA;EACA,uBAAA;EACA,iBAAA;CACA","file":"Intro.vue","sourcesContent":["<template>\r\n  <div class=\"intro\">\r\n    <div class=\"container\">\r\n      <h1 class=\"app-title\">{{ appTitle }}</h1>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  export default {\r\n    name: 'intro',\r\n    data() {\r\n      return {\r\n        appTitle: 'VueJsCoreApp by dotnatcore',\r\n      }\r\n    }\r\n  }\r\n</script>\r\n\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n  .intro {\r\n    margin-top: 15%;\r\n  }\r\n\r\n  .app-title {\r\n    font-size: 4rem;\r\n    letter-spacing: 0.1rem;\r\n    font-weight: 300;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 16 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'intro',
	  data: function data() {
	    return {
	      appTitle: 'VueJsCoreApp by dotnatcore'
	    };
	  }
	};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "intro"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('h1', {
	    staticClass: "app-title"
	  }, [_vm._v(_vm._s(_vm.appTitle))])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(19)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(21),
	  /* template */
	  __webpack_require__(23),
	  /* scopeId */
	  "data-v-73ecda04",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\components\\urlShrinkInput.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] urlShrinkInput.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(20);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("311de5c5", content, false);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"urlShrinkInput.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(22);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  name: 'urlShrinkInput',
	  data: function data() {
	    return {
	      tUrl: '',
	      shrinkEnabled: true,
	      completedAlert: {
	        content: '.',
	        ok: 'Cool'
	      }
	    };
	  },
	
	  methods: {
	    shrinkUrl: function shrinkUrl() {
	      var vm = this;
	      vm.shrinkEnabled = false;
	      vm.completedAlert.content = '<h3>Loading</h3>';
	
	      if (!vm.tUrl) {
	        vm.completedAlert.content = '<h2>Error</h2><p>URL cannot be empty.</p>';
	        vm.$refs.completedDialog.open();
	        vm.shrinkEnabled = true;
	        return;
	      }
	
	      _axios2.default.post('/x/shrink', {
	        url: vm.tUrl
	      }, axiosRequestConfig).then(function (response) {
	        if (response.status === 200) {
	          var shrunkUrlInfo = response.data.shrunkUrl;
	          var shrunkLink = shrunkUrlInfo.shrunkPath;
	          var shrunkLinkUrl = window.document.location.origin + '/r/' + shrunkLink;
	          vm.completedAlert.content = '<h2>Congratulations!</h2><p>Link has been shrunk!</p><code>' + shrunkLinkUrl + '</code>';
	          vm.$refs.completedDialog.open();
	        } else if (response.status === 400) {
	          vm.completedAlert.content = '<h2>Error</h2><p>Please make sure the URL is valid.</p>';
	          vm.$refs.completedDialog.open();
	        } else {
	          vm.completedAlert.content = '<h2>Error</h2><p>Unrecognized response from server.</p>';
	          vm.$refs.completedDialog.open();
	        }
	        vm.shrinkEnabled = true;
	      }).catch(function (error) {
	        if (error) {
	          vm.completedAlert.content = '<h2>Error</h2><p>Error communicating with server.</p>';
	          vm.$refs.completedDialog.open();
	        }
	        vm.shrinkEnabled = true;
	      });
	    }
	  },
	  mounted: function mounted() {}
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = require("axios");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "urlShrinkInput"
	  }, [_c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "eight columns offset-by-two"
	  }, [_c('h4', [_vm._v("Shrink a URL")]), _vm._v(" "), _c('form', {
	    attrs: {
	      "novalidate": ""
	    },
	    on: {
	      "submit": function($event) {
	        $event.stopPropagation();
	        $event.preventDefault();
	        _vm.shrinkUrl($event)
	      }
	    }
	  }, [_c('md-input-container', [_c('label', [_vm._v("Target URL")]), _vm._v(" "), _c('md-input', {
	    attrs: {
	      "type": "url",
	      "placeholder": "http://example.com/"
	    },
	    model: {
	      value: (_vm.tUrl),
	      callback: function($$v) {
	        _vm.tUrl = $$v
	      },
	      expression: "tUrl"
	    }
	  })], 1), _vm._v(" "), _c('input', {
	    staticClass: "invisible",
	    attrs: {
	      "type": "submit"
	    }
	  })], 1), _vm._v(" "), _c('md-button', {
	    staticClass: "space-v md-raised md-primary",
	    attrs: {
	      "disabled": !_vm.shrinkEnabled
	    },
	    on: {
	      "click": _vm.shrinkUrl
	    }
	  }, [_vm._v("Shrink")])], 1)]), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "completedDialog",
	    attrs: {
	      "md-content-html": _vm.completedAlert.content,
	      "md-ok-text": _vm.completedAlert.ok
	    }
	  })], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(25)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(27),
	  /* template */
	  __webpack_require__(28),
	  /* scopeId */
	  "data-v-7a46f412",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\components\\devCredits.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] devCredits.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(26);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("c3c69d9c", content, false);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.devCredits[data-v-7a46f412] {\n  margin: 2%;\n}\nh6.credit-text[data-v-7a46f412] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/devCredits.vue?2f4b0ff5"],"names":[],"mappings":";AAiBA;EACA,WAAA;CACA;AAEA;EACA,iBAAA;CACA","file":"devCredits.vue","sourcesContent":["<template>\r\n  <div class=\"devCredits\">\r\n    <h6 class=\"credit-text\">Made by <a href=\"https://0xfireball.me\" target=\"_blank\">0xFireball</a></h6>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  name: 'devCredits',\r\n  data: function () {\r\n    return {\r\n    }\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n  .devCredits {\r\n    margin: 2%;\r\n  }\r\n  \r\n  h6.credit-text {\r\n    font-weight: 300;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 27 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  name: 'devCredits',
	  data: function data() {
	    return {};
	  }
	};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _vm._m(0)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "devCredits"
	  }, [_c('h6', {
	    staticClass: "credit-text"
	  }, [_vm._v("Made by "), _c('a', {
	    attrs: {
	      "href": "https://0xfireball.me",
	      "target": "_blank"
	    }
	  }, [_vm._v("0xFireball")])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 29 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "shrink-layout"
	  }, [_c('intro'), _vm._v(" "), _c('urlShrinkInput'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(31)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(33),
	  /* template */
	  __webpack_require__(40),
	  /* scopeId */
	  "data-v-2c7ed9b6",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\layouts\\statsPlace.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] statsPlace.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(32);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("6b295a48", content, false);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.stats-layout[data-v-2c7ed9b6] {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/statsPlace.vue?6886ef6d"],"names":[],"mappings":";AA2BA;EACA,oCAAA;EACA,mCAAA;EACA,mBAAA;EACA,eAAA;EACA,iBAAA;CACA","file":"statsPlace.vue","sourcesContent":["<template>\r\n  <div class=\"stats-layout\">\r\n    <intro></intro>\r\n    <statsViewer></statsViewer>\r\n    <devCredits></devCredits>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import Intro from '../components/Intro'\r\n  import statsViewer from '../components/statistics/statsViewer'\r\n  import devCredits from '../components/devCredits'\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n      }\r\n    },\r\n    components: {\r\n      Intro,\r\n      statsViewer,\r\n      devCredits\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n  .stats-layout {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-align: center;\r\n    color: #2c3e50;\r\n    margin-top: 60px;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Intro = __webpack_require__(13);
	
	var _Intro2 = _interopRequireDefault(_Intro);
	
	var _statsViewer = __webpack_require__(34);
	
	var _statsViewer2 = _interopRequireDefault(_statsViewer);
	
	var _devCredits = __webpack_require__(24);
	
	var _devCredits2 = _interopRequireDefault(_devCredits);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _Intro2.default,
	    statsViewer: _statsViewer2.default,
	    devCredits: _devCredits2.default
	  }
	};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(35)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(37),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  "data-v-0d4ee8d7",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\components\\statistics\\statsViewer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] statsViewer.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(36);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("3303b947", content, false);

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n#line-chart[data-v-0d4ee8d7] {\r\n  height: 400px;\n} \r\n", "", {"version":3,"sources":["/./ClientApp/components/statistics/statsViewer.vue?c6bcc160"],"names":[],"mappings":";AA8GA;EACA,cAAA;CACA","file":"statsViewer.vue","sourcesContent":["<template>\r\n  <div class=\"stats-viewer\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"twelve columns\">\r\n          <div class=\"chart-host\">\r\n            <canvas id=\"trafficChart\" width=\"400\" height=\"400\"></canvas>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <md-dialog-alert :md-content-html=\"completedAlert.content\" :md-ok-text=\"completedAlert.ok\" ref=\"completedDialog\">\r\n    </md-dialog-alert>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n\r\n  import axios from 'axios'\r\n  import Chart from 'chart.js'\r\n\r\n  let axiosRequestConfig = {\r\n    validateStatus: function (status) {\r\n      return status >= 200 && status < 500\r\n    }\r\n  }\r\n\r\n  export default {\r\n    data() {\r\n      return {\r\n        stats: {\r\n          data: {},\r\n          options: {\r\n            maintainAspectRatio: false,\r\n            scales: {\r\n              yAxes: [{\r\n                ticks: {\r\n                  stepSize: 1\r\n                }\r\n              }],\r\n              xAxes: [{\r\n                ticks: {\r\n                  stepSize: 1,\r\n                  min: 0,\r\n                  max: 7\r\n                },\r\n                display: true\r\n              }]\r\n            }\r\n          }\r\n        },\r\n        completedAlert: {\r\n          content: '.',\r\n          ok: 'Cool'\r\n        }\r\n      }\r\n    },\r\n    mounted() {\r\n      let vm = this\r\n      // get shrink route\r\n      let shrinkRoute = vm.$route.params.sroute\r\n      // get data from server\r\n      axios.get('/x/stats/' + shrinkRoute,\r\n        axiosRequestConfig)\r\n        .then((response) => {\r\n          if (response.status === 200) {\r\n            // success\r\n            let analyticsBundle = response.data\r\n            // set up charts\r\n            vm.stats.data = {\r\n              labels: ['6d ago', '5d ago', '4d ago', '3d ago', '2d ago', '1d ago', 'today'],\r\n              datasets: [\r\n                {\r\n                  label: 'Daily Traffic (Visits)',\r\n                  backgroundColor: '#f87979',\r\n                  data: analyticsBundle.daySortedEvents.map(e => e.length)\r\n                }\r\n              ]\r\n            }\r\n            // console.log(analyticsBundle.daySortedEvents)\r\n            var ctx = \"trafficChart\"\r\n            var myLineChart = Chart.Line(ctx, {\r\n              data: vm.stats.data,\r\n              options: vm.stats.options\r\n            });\r\n\r\n          } else if (response.status === 400) {\r\n            // bad request\r\n            vm.completedAlert.content = '<h2>Error</h2><p>Please make sure the URL is valid.</p>'\r\n            vm.$refs.completedDialog.open();\r\n          } else {\r\n            // wtf?\r\n            vm.completedAlert.content = '<h2>Error</h2><p>Unrecognized response from server.</p>'\r\n            vm.$refs.completedDialog.open();\r\n          }\r\n          vm.shrinkEnabled = true\r\n        })\r\n        .catch((error) => {\r\n          if (error) {\r\n            // console.log(error)\r\n            vm.completedAlert.content = '<h2>Error</h2><p>Error communicating with server.</p>'\r\n            vm.$refs.completedDialog.open();\r\n          }\r\n          vm.shrinkEnabled = true\r\n        })\r\n    }\r\n  }\r\n</script>\r\n\r\n<style scoped>\r\n#line-chart {\r\n  height: 400px;\r\n} \r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(22);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	var _chart = __webpack_require__(38);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var axiosRequestConfig = {
	  validateStatus: function validateStatus(status) {
	    return status >= 200 && status < 500;
	  }
	};
	
	exports.default = {
	  data: function data() {
	    return {
	      stats: {
	        data: {},
	        options: {
	          maintainAspectRatio: false,
	          scales: {
	            yAxes: [{
	              ticks: {
	                stepSize: 1
	              }
	            }],
	            xAxes: [{
	              ticks: {
	                stepSize: 1,
	                min: 0,
	                max: 7
	              },
	              display: true
	            }]
	          }
	        }
	      },
	      completedAlert: {
	        content: '.',
	        ok: 'Cool'
	      }
	    };
	  },
	  mounted: function mounted() {
	    var vm = this;
	
	    var shrinkRoute = vm.$route.params.sroute;
	
	    _axios2.default.get('/x/stats/' + shrinkRoute, axiosRequestConfig).then(function (response) {
	      if (response.status === 200) {
	        var analyticsBundle = response.data;
	
	        vm.stats.data = {
	          labels: ['6d ago', '5d ago', '4d ago', '3d ago', '2d ago', '1d ago', 'today'],
	          datasets: [{
	            label: 'Daily Traffic (Visits)',
	            backgroundColor: '#f87979',
	            data: analyticsBundle.daySortedEvents.map(function (e) {
	              return e.length;
	            })
	          }]
	        };
	
	        var ctx = "trafficChart";
	        var myLineChart = _chart2.default.Line(ctx, {
	          data: vm.stats.data,
	          options: vm.stats.options
	        });
	      } else if (response.status === 400) {
	        vm.completedAlert.content = '<h2>Error</h2><p>Please make sure the URL is valid.</p>';
	        vm.$refs.completedDialog.open();
	      } else {
	        vm.completedAlert.content = '<h2>Error</h2><p>Unrecognized response from server.</p>';
	        vm.$refs.completedDialog.open();
	      }
	      vm.shrinkEnabled = true;
	    }).catch(function (error) {
	      if (error) {
	        vm.completedAlert.content = '<h2>Error</h2><p>Error communicating with server.</p>';
	        vm.$refs.completedDialog.open();
	      }
	      vm.shrinkEnabled = true;
	    });
	  }
	};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

	module.exports = require("chart.js");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "stats-viewer"
	  }, [_vm._m(0), _vm._v(" "), _c('md-dialog-alert', {
	    ref: "completedDialog",
	    attrs: {
	      "md-content-html": _vm.completedAlert.content,
	      "md-ok-text": _vm.completedAlert.ok
	    }
	  })], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('div', {
	    staticClass: "chart-host"
	  }, [_c('canvas', {
	    attrs: {
	      "id": "trafficChart",
	      "width": "400",
	      "height": "400"
	    }
	  })])])])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 40 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "stats-layout"
	  }, [_c('intro'), _vm._v(" "), _c('statsViewer'), _vm._v(" "), _c('devCredits')], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(42)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(44),
	  /* template */
	  __webpack_require__(45),
	  /* scopeId */
	  "data-v-0b4865ac",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\layouts\\notFound.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] notFound.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("46670fb8", content, false);

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.not-found-content[data-v-0b4865ac] {\n  text-align: center;\n  font-weight: 600;\n}\n", "", {"version":3,"sources":["/./ClientApp/layouts/notFound.vue?2bee1428"],"names":[],"mappings":";AA+BA;EACA,mBAAA;EACA,iBAAA;CACA","file":"notFound.vue","sourcesContent":["<template>\r\n  <div class=\"not-found\">\r\n    <div id=\"app\" class=\"container\">\r\n      <div class=\"row\" id=\"intro-area\">\r\n        <div class=\"twelve columns\">\r\n          <intro></intro>\r\n        </div>\r\n      </div>\r\n      <div class=\"not-found-content\">\r\n        <h1>404. That's an error.</h1>\r\n        <h3>The page you were looking for couldn't be found.</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport Intro from '../components/Intro'\r\n\r\nexport default {\r\n  data () {\r\n    return {\r\n    }\r\n  },\r\n  components: {\r\n    Intro\r\n  }\r\n}\r\n</script>\r\n\r\n<style scoped>\r\n  .not-found-content {\r\n    text-align: center;\r\n    font-weight: 600;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Intro = __webpack_require__(13);
	
	var _Intro2 = _interopRequireDefault(_Intro);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Intro: _Intro2.default
	  }
	};

/***/ }),
/* 45 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found"
	  }, [_c('div', {
	    staticClass: "container",
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('div', {
	    staticClass: "row",
	    attrs: {
	      "id": "intro-area"
	    }
	  }, [_c('div', {
	    staticClass: "twelve columns"
	  }, [_c('intro')], 1)]), _vm._v(" "), _vm._m(0)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "not-found-content"
	  }, [_c('h1', [_vm._v("404. That's an error.")]), _vm._v(" "), _c('h3', [_vm._v("The page you were looking for couldn't be found.")])])
	}]}
	module.exports.render._withStripped = true

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(47);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(84)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./global.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./global.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/* roboto-100 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin'), local('Roboto-Thin'), url(" + __webpack_require__(48) + ") format('woff2'), \r\n    url(" + __webpack_require__(49) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-100italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 100;\r\n    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'), url(" + __webpack_require__(50) + ") format('woff2'), \r\n    url(" + __webpack_require__(51) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Roboto Light'), local('Roboto-Light'), url(" + __webpack_require__(52) + ") format('woff2'), \r\n    url(" + __webpack_require__(53) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-300italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 300;\r\n    src: local('Roboto Light Italic'), local('Roboto-LightItalic'), url(" + __webpack_require__(54) + ") format('woff2'), \r\n    url(" + __webpack_require__(55) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Roboto'), local('Roboto-Regular'), url(" + __webpack_require__(56) + ") format('woff2'), \r\n    url(" + __webpack_require__(57) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 400;\r\n    src: local('Roboto Italic'), local('Roboto-Italic'), url(" + __webpack_require__(58) + ") format('woff2'), \r\n    url(" + __webpack_require__(59) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium'), local('Roboto-Medium'), url(" + __webpack_require__(60) + ") format('woff2'), \r\n    url(" + __webpack_require__(61) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-500italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 500;\r\n    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'), url(" + __webpack_require__(62) + ") format('woff2'), \r\n    url(" + __webpack_require__(63) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold'), local('Roboto-Bold'), url(" + __webpack_require__(64) + ") format('woff2'), \r\n    url(" + __webpack_require__(65) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-700italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 700;\r\n    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'), url(" + __webpack_require__(66) + ") format('woff2'), \r\n    url(" + __webpack_require__(67) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900italic - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: italic;\r\n    font-weight: 900;\r\n    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'), url(" + __webpack_require__(68) + ") format('woff2'), \r\n    url(" + __webpack_require__(69) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* roboto-900 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Roboto';\r\n    font-style: normal;\r\n    font-weight: 900;\r\n    src: local('Roboto Black'), local('Roboto-Black'), url(" + __webpack_require__(70) + ") format('woff2'), \r\n    url(" + __webpack_require__(71) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-300 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 300;\r\n    src: local('Raleway Light'), local('Raleway-Light'), url(" + __webpack_require__(72) + ") format('woff2'), \r\n    url(" + __webpack_require__(73) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-regular - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: local('Raleway'), local('Raleway-Regular'), url(" + __webpack_require__(74) + ") format('woff2'), \r\n    url(" + __webpack_require__(75) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-500 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 500;\r\n    src: local('Raleway Medium'), local('Raleway-Medium'), url(" + __webpack_require__(76) + ") format('woff2'), \r\n    url(" + __webpack_require__(77) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-600 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 600;\r\n    src: local('Raleway SemiBold'), local('Raleway-SemiBold'), url(" + __webpack_require__(78) + ") format('woff2'), \r\n    url(" + __webpack_require__(79) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-700 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    src: local('Raleway Bold'), local('Raleway-Bold'), url(" + __webpack_require__(80) + ") format('woff2'), \r\n    url(" + __webpack_require__(81) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n\r\n/* raleway-800 - latin */\r\n\r\n@font-face {\r\n    font-family: 'Raleway';\r\n    font-style: normal;\r\n    font-weight: 800;\r\n    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'), url(" + __webpack_require__(82) + ") format('woff2'), \r\n    url(" + __webpack_require__(83) + ") format('woff');\r\n    /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\nbody {\r\n    background-color: #fafafa;\r\n}", ""]);
	
	// exports


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.8ce5988.woff2";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100.654cb4d.woff";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.acee0ea.woff2";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-100italic.42de898.woff";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.16ddb15.woff2";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300.ecce92d.woff";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.3ddb748.woff2";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-300italic.4d08dae.woff";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.7e367be.woff2";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-regular.16e1d93.woff";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.984ae37.woff2";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-italic.1e65e7e.woff";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.bb474f1.woff2";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500.57af64f.woff";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.9e7beee.woff2";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-500italic.b670694.woff";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.0d7e71f.woff2";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700.525d5b4.woff";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.7394ca9.woff2";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-700italic.ad0e74f.woff";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.4faec83.woff2";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900italic.3b9590e.woff";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.f4e8dc5.woff2";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/roboto-v15-latin-900.de984c0.woff";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.e746e03.woff2";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-300.78dd5ab.woff";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.9106435.woff2";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-regular.290ee38.woff";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.e5a3212.woff2";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-500.81e9558.woff";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.cd90392.woff2";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-600.a4b6f17.woff";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.06f1c86.woff2";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-700.c864d84.woff";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.041a4b8.woff2";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/raleway-v11-latin-800.2a3a9cf.woff";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(84)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./material-icons.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./material-icons.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "@font-face {\r\n    font-family: 'Material Icons';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    src: url(" + __webpack_require__(87) + ");\r\n    /* For IE6-8 */\r\n    src: local('Material Icons'), local('MaterialIcons-Regular'), url(" + __webpack_require__(88) + ") format('woff2'), url(" + __webpack_require__(89) + ") format('woff'), url(" + __webpack_require__(90) + ") format('truetype');\r\n}\r\n\r\n.material-icons {\r\n    font-family: 'Material Icons';\r\n    font-weight: normal;\r\n    font-style: normal;\r\n    font-size: 24px;\r\n    /* Preferred icon size */\r\n    display: inline-block;\r\n    line-height: 1;\r\n    text-transform: none;\r\n    letter-spacing: normal;\r\n    word-wrap: normal;\r\n    white-space: nowrap;\r\n    direction: ltr;\r\n    /* Support for all WebKit browsers. */\r\n    -webkit-font-smoothing: antialiased;\r\n    /* Support for Safari and Chrome. */\r\n    text-rendering: optimizeLegibility;\r\n    /* Support for Firefox. */\r\n    -moz-osx-font-smoothing: grayscale;\r\n    /* Support for IE. */\r\n    font-feature-settings: 'liga';\r\n}", ""]);
	
	// exports


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.e79bfd8.eot";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.570eb83.woff2";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.012cf6a.woff";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/fonts/MaterialIcons-Regular.a37b0c0.ttf";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(92);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(84)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./normalize.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./normalize.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*! normalize.css v3.0.2 | MIT License | git.io/normalize */\r\n\r\n/**\r\n * 1. Set default font family to sans-serif.\r\n * 2. Prevent iOS text size adjust after orientation change, without disabling\r\n *    user zoom.\r\n */\r\n\r\nhtml {\r\n  font-family: sans-serif; /* 1 */\r\n  -ms-text-size-adjust: 100%; /* 2 */\r\n  -webkit-text-size-adjust: 100%; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default margin.\r\n */\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n/* HTML5 display definitions\r\n   ========================================================================== */\r\n\r\n/**\r\n * Correct `block` display not defined for any HTML5 element in IE 8/9.\r\n * Correct `block` display not defined for `details` or `summary` in IE 10/11\r\n * and Firefox.\r\n * Correct `block` display not defined for `main` in IE 11.\r\n */\r\n\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmain,\r\nmenu,\r\nnav,\r\nsection,\r\nsummary {\r\n  display: block;\r\n}\r\n\r\n/**\r\n * 1. Correct `inline-block` display not defined in IE 8/9.\r\n * 2. Normalize vertical alignment of `progress` in Chrome, Firefox, and Opera.\r\n */\r\n\r\naudio,\r\ncanvas,\r\nprogress,\r\nvideo {\r\n  display: inline-block; /* 1 */\r\n  vertical-align: baseline; /* 2 */\r\n}\r\n\r\n/**\r\n * Prevent modern browsers from displaying `audio` without controls.\r\n * Remove excess height in iOS 5 devices.\r\n */\r\n\r\naudio:not([controls]) {\r\n  display: none;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Address `[hidden]` styling not present in IE 8/9/10.\r\n * Hide the `template` element in IE 8/9/11, Safari, and Firefox < 22.\r\n */\r\n\r\n[hidden],\r\ntemplate {\r\n  display: none;\r\n}\r\n\r\n/* Links\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove the gray background color from active links in IE 10.\r\n */\r\n\r\na {\r\n  background-color: transparent;\r\n}\r\n\r\n/**\r\n * Improve readability when focused and also mouse hovered in all browsers.\r\n */\r\n\r\na:active,\r\na:hover {\r\n  outline: 0;\r\n}\r\n\r\n/* Text-level semantics\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address styling not present in IE 8/9/10/11, Safari, and Chrome.\r\n */\r\n\r\nabbr[title] {\r\n  border-bottom: 1px dotted;\r\n}\r\n\r\n/**\r\n * Address style set to `bolder` in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nb,\r\nstrong {\r\n  font-weight: bold;\r\n}\r\n\r\n/**\r\n * Address styling not present in Safari and Chrome.\r\n */\r\n\r\ndfn {\r\n  font-style: italic;\r\n}\r\n\r\n/**\r\n * Address variable `h1` font-size and margin within `section` and `article`\r\n * contexts in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nh1 {\r\n  font-size: 2em;\r\n  margin: 0.67em 0;\r\n}\r\n\r\n/**\r\n * Address styling not present in IE 8/9.\r\n */\r\n\r\nmark {\r\n  background: #ff0;\r\n  color: #000;\r\n}\r\n\r\n/**\r\n * Address inconsistent and variable font size in all browsers.\r\n */\r\n\r\nsmall {\r\n  font-size: 80%;\r\n}\r\n\r\n/**\r\n * Prevent `sub` and `sup` affecting `line-height` in all browsers.\r\n */\r\n\r\nsub,\r\nsup {\r\n  font-size: 75%;\r\n  line-height: 0;\r\n  position: relative;\r\n  vertical-align: baseline;\r\n}\r\n\r\nsup {\r\n  top: -0.5em;\r\n}\r\n\r\nsub {\r\n  bottom: -0.25em;\r\n}\r\n\r\n/* Embedded content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove border when inside `a` element in IE 8/9/10.\r\n */\r\n\r\nimg {\r\n  border: 0;\r\n}\r\n\r\n/**\r\n * Correct overflow not hidden in IE 9/10/11.\r\n */\r\n\r\nsvg:not(:root) {\r\n  overflow: hidden;\r\n}\r\n\r\n/* Grouping content\r\n   ========================================================================== */\r\n\r\n/**\r\n * Address margin not present in IE 8/9 and Safari.\r\n */\r\n\r\nfigure {\r\n  margin: 1em 40px;\r\n}\r\n\r\n/**\r\n * Address differences between Firefox and other browsers.\r\n */\r\n\r\nhr {\r\n  -moz-box-sizing: content-box;\r\n  box-sizing: content-box;\r\n  height: 0;\r\n}\r\n\r\n/**\r\n * Contain overflow in all browsers.\r\n */\r\n\r\npre {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Address odd `em`-unit font size rendering in all browsers.\r\n */\r\n\r\ncode,\r\nkbd,\r\npre,\r\nsamp {\r\n  font-family: monospace, monospace;\r\n  font-size: 1em;\r\n}\r\n\r\n/* Forms\r\n   ========================================================================== */\r\n\r\n/**\r\n * Known limitation: by default, Chrome and Safari on OS X allow very limited\r\n * styling of `select`, unless a `border` property is set.\r\n */\r\n\r\n/**\r\n * 1. Correct color not being inherited.\r\n *    Known issue: affects color of disabled elements.\r\n * 2. Correct font properties not being inherited.\r\n * 3. Address margins set differently in Firefox 4+, Safari, and Chrome.\r\n */\r\n\r\nbutton,\r\ninput,\r\noptgroup,\r\nselect,\r\ntextarea {\r\n  color: inherit; /* 1 */\r\n  font: inherit; /* 2 */\r\n  margin: 0; /* 3 */\r\n}\r\n\r\n/**\r\n * Address `overflow` set to `hidden` in IE 8/9/10/11.\r\n */\r\n\r\nbutton {\r\n  overflow: visible;\r\n}\r\n\r\n/**\r\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\r\n * All other form control elements do not inherit `text-transform` values.\r\n * Correct `button` style inheritance in Firefox, IE 8/9/10/11, and Opera.\r\n * Correct `select` style inheritance in Firefox.\r\n */\r\n\r\nbutton,\r\nselect {\r\n  text-transform: none;\r\n}\r\n\r\n/**\r\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native `audio`\r\n *    and `video` controls.\r\n * 2. Correct inability to style clickable `input` types in iOS.\r\n * 3. Improve usability and consistency of cursor style between image-type\r\n *    `input` and others.\r\n */\r\n\r\nbutton,\r\nhtml input[type=\"button\"], /* 1 */\r\ninput[type=\"reset\"],\r\ninput[type=\"submit\"] {\r\n  -webkit-appearance: button; /* 2 */\r\n  cursor: pointer; /* 3 */\r\n}\r\n\r\n/**\r\n * Re-set default cursor for disabled elements.\r\n */\r\n\r\nbutton[disabled],\r\nhtml input[disabled] {\r\n  cursor: default;\r\n}\r\n\r\n/**\r\n * Remove inner padding and border in Firefox 4+.\r\n */\r\n\r\nbutton::-moz-focus-inner,\r\ninput::-moz-focus-inner {\r\n  border: 0;\r\n  padding: 0;\r\n}\r\n\r\n/**\r\n * Address Firefox 4+ setting `line-height` on `input` using `!important` in\r\n * the UA stylesheet.\r\n */\r\n\r\ninput {\r\n  line-height: normal;\r\n}\r\n\r\n/**\r\n * It's recommended that you don't attempt to style these elements.\r\n * Firefox's implementation doesn't respect box-sizing, padding, or width.\r\n *\r\n * 1. Address box sizing set to `content-box` in IE 8/9/10.\r\n * 2. Remove excess padding in IE 8/9/10.\r\n */\r\n\r\ninput[type=\"checkbox\"],\r\ninput[type=\"radio\"] {\r\n  box-sizing: border-box; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Fix the cursor style for Chrome's increment/decrement buttons. For certain\r\n * `font-size` values of the `input`, it causes the cursor style of the\r\n * decrement button to change from `default` to `text`.\r\n */\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  height: auto;\r\n}\r\n\r\n/**\r\n * 1. Address `appearance` set to `searchfield` in Safari and Chrome.\r\n * 2. Address `box-sizing` set to `border-box` in Safari and Chrome\r\n *    (include `-moz` to future-proof).\r\n */\r\n\r\ninput[type=\"search\"] {\r\n  -webkit-appearance: textfield; /* 1 */\r\n  -moz-box-sizing: content-box;\r\n  -webkit-box-sizing: content-box; /* 2 */\r\n  box-sizing: content-box;\r\n}\r\n\r\n/**\r\n * Remove inner padding and search cancel button in Safari and Chrome on OS X.\r\n * Safari (but not Chrome) clips the cancel button when the search input has\r\n * padding (and `textfield` appearance).\r\n */\r\n\r\ninput[type=\"search\"]::-webkit-search-cancel-button,\r\ninput[type=\"search\"]::-webkit-search-decoration {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/**\r\n * Define consistent border, margin, and padding.\r\n */\r\n\r\nfieldset {\r\n  border: 1px solid #c0c0c0;\r\n  margin: 0 2px;\r\n  padding: 0.35em 0.625em 0.75em;\r\n}\r\n\r\n/**\r\n * 1. Correct `color` not being inherited in IE 8/9/10/11.\r\n * 2. Remove padding so people aren't caught out if they zero out fieldsets.\r\n */\r\n\r\nlegend {\r\n  border: 0; /* 1 */\r\n  padding: 0; /* 2 */\r\n}\r\n\r\n/**\r\n * Remove default vertical scrollbar in IE 8/9/10/11.\r\n */\r\n\r\ntextarea {\r\n  overflow: auto;\r\n}\r\n\r\n/**\r\n * Don't inherit the `font-weight` (applied by a rule above).\r\n * NOTE: the default cannot safely be changed in Chrome and Safari on OS X.\r\n */\r\n\r\noptgroup {\r\n  font-weight: bold;\r\n}\r\n\r\n/* Tables\r\n   ========================================================================== */\r\n\r\n/**\r\n * Remove most spacing between table cells.\r\n */\r\n\r\ntable {\r\n  border-collapse: collapse;\r\n  border-spacing: 0;\r\n}\r\n\r\ntd,\r\nth {\r\n  padding: 0;\r\n}", ""]);
	
	// exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(94);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(84)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!./ffskeleton.css", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!./ffskeleton.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "/*\r\n* Skeleton V2.0.4\r\n* Copyright 2014, Dave Gamache\r\n* www.getskeleton.com\r\n* Free to use under the MIT license.\r\n* http://www.opensource.org/licenses/mit-license.php\r\n* 12/29/2014\r\n*/\r\n\r\n\r\n/* Table of contents\r\n––––––––––––––––––––––––––––––––––––––––––––––––––\r\n- Grid\r\n- Base Styles\r\n- Typography\r\n- Links\r\n- Buttons\r\n- Forms\r\n- Lists\r\n- Code\r\n- Tables\r\n- Spacing\r\n- Utilities\r\n- Clearing\r\n- Media Queries\r\n*/\r\n\r\n\r\n/* Grid\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.container {\r\n  position: relative;\r\n  width: 100%;\r\n  max-width: 960px;\r\n  margin: 0 auto;\r\n  padding: 0 20px;\r\n  box-sizing: border-box; }\r\n.column,\r\n.columns {\r\n  width: 100%;\r\n  float: left;\r\n  box-sizing: border-box; }\r\n\r\n/* For devices larger than 400px */\r\n@media (min-width: 400px) {\r\n  .container {\r\n    width: 85%;\r\n    padding: 0; }\r\n}\r\n\r\n/* For devices larger than 550px */\r\n@media (min-width: 550px) {\r\n  .container {\r\n    width: 80%; }\r\n  .column,\r\n  .columns {\r\n    margin-left: 4%; }\r\n  .column:first-child,\r\n  .columns:first-child {\r\n    margin-left: 0; }\r\n\r\n  .one.column,\r\n  .one.columns                    { width: 4.66666666667%; }\r\n  .two.columns                    { width: 13.3333333333%; }\r\n  .three.columns                  { width: 22%;            }\r\n  .four.columns                   { width: 30.6666666667%; }\r\n  .five.columns                   { width: 39.3333333333%; }\r\n  .six.columns                    { width: 48%;            }\r\n  .seven.columns                  { width: 56.6666666667%; }\r\n  .eight.columns                  { width: 65.3333333333%; }\r\n  .nine.columns                   { width: 74.0%;          }\r\n  .ten.columns                    { width: 82.6666666667%; }\r\n  .eleven.columns                 { width: 91.3333333333%; }\r\n  .twelve.columns                 { width: 100%; margin-left: 0; }\r\n\r\n  .one-third.column               { width: 30.6666666667%; }\r\n  .two-thirds.column              { width: 65.3333333333%; }\r\n\r\n  .one-half.column                { width: 48%; }\r\n\r\n  /* Offsets */\r\n  .offset-by-one.column,\r\n  .offset-by-one.columns          { margin-left: 8.66666666667%; }\r\n  .offset-by-two.column,\r\n  .offset-by-two.columns          { margin-left: 17.3333333333%; }\r\n  .offset-by-three.column,\r\n  .offset-by-three.columns        { margin-left: 26%;            }\r\n  .offset-by-four.column,\r\n  .offset-by-four.columns         { margin-left: 34.6666666667%; }\r\n  .offset-by-five.column,\r\n  .offset-by-five.columns         { margin-left: 43.3333333333%; }\r\n  .offset-by-six.column,\r\n  .offset-by-six.columns          { margin-left: 52%;            }\r\n  .offset-by-seven.column,\r\n  .offset-by-seven.columns        { margin-left: 60.6666666667%; }\r\n  .offset-by-eight.column,\r\n  .offset-by-eight.columns        { margin-left: 69.3333333333%; }\r\n  .offset-by-nine.column,\r\n  .offset-by-nine.columns         { margin-left: 78.0%;          }\r\n  .offset-by-ten.column,\r\n  .offset-by-ten.columns          { margin-left: 86.6666666667%; }\r\n  .offset-by-eleven.column,\r\n  .offset-by-eleven.columns       { margin-left: 95.3333333333%; }\r\n\r\n  .offset-by-one-third.column,\r\n  .offset-by-one-third.columns    { margin-left: 34.6666666667%; }\r\n  .offset-by-two-thirds.column,\r\n  .offset-by-two-thirds.columns   { margin-left: 69.3333333333%; }\r\n\r\n  .offset-by-one-half.column,\r\n  .offset-by-one-half.columns     { margin-left: 52%; }\r\n\r\n}\r\n\r\n\r\n/* Base Styles\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/* NOTE\r\nhtml is set to 62.5% so that all the REM measurements throughout Skeleton\r\nare based on 10px sizing. So basically 1.5rem = 15px :) */\r\nhtml {\r\n  font-size: 62.5%; }\r\nbody {\r\n  font-size: 1.5em; /* currently ems cause chrome bug misinterpreting rems on body element */\r\n  line-height: 1.6;\r\n  font-weight: 400;\r\n  font-family: \"Raleway\", \"HelveticaNeue\", \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n  color: #222; }\r\n\r\n\r\n/* Typography\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nh1, h2, h3, h4, h5, h6 {\r\n  margin-top: 0;\r\n  margin-bottom: 2rem;\r\n  font-weight: 300; }\r\nh1 { font-size: 4.0rem; line-height: 1.2;  letter-spacing: -.1rem;}\r\nh2 { font-size: 3.6rem; line-height: 1.25; letter-spacing: -.1rem; }\r\nh3 { font-size: 3.0rem; line-height: 1.3;  letter-spacing: -.1rem; }\r\nh4 { font-size: 2.4rem; line-height: 1.35; letter-spacing: -.08rem; }\r\nh5 { font-size: 1.8rem; line-height: 1.5;  letter-spacing: -.05rem; }\r\nh6 { font-size: 1.5rem; line-height: 1.6;  letter-spacing: 0; }\r\n\r\n/* Larger than phablet */\r\n@media (min-width: 550px) {\r\n  h1 { font-size: 5.0rem; }\r\n  h2 { font-size: 4.2rem; }\r\n  h3 { font-size: 3.6rem; }\r\n  h4 { font-size: 3.0rem; }\r\n  h5 { font-size: 2.4rem; }\r\n  h6 { font-size: 1.5rem; }\r\n}\r\n\r\np {\r\n  margin-top: 0; }\r\n\r\n\r\n/* Links\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\na {\r\n  color: #1EAEDB; }\r\na:hover {\r\n  color: #0FA0CE; }\r\n\r\n\r\n/* Lists\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nul {\r\n  list-style: circle inside; }\r\nol {\r\n  list-style: decimal inside; }\r\nol, ul {\r\n  padding-left: 0;\r\n  margin-top: 0; }\r\nul ul,\r\nul ol,\r\nol ol,\r\nol ul {\r\n  margin: 1.5rem 0 1.5rem 3rem;\r\n  font-size: 90%; }\r\nli {\r\n  margin-bottom: 1rem; }\r\n\r\n\r\n/* Code\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\ncode {\r\n  padding: .2rem .5rem;\r\n  margin: 0 .2rem;\r\n  font-size: 90%;\r\n  white-space: nowrap;\r\n  background: #F1F1F1;\r\n  border: 1px solid #E1E1E1;\r\n  border-radius: 4px; }\r\npre > code {\r\n  display: block;\r\n  padding: 1rem 1.5rem;\r\n  white-space: pre; }\r\n\r\n\r\n/* Tables\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nth,\r\ntd {\r\n  padding: 12px 15px;\r\n  text-align: left;\r\n  border-bottom: 1px solid #E1E1E1; }\r\nth:first-child,\r\ntd:first-child {\r\n  padding-left: 0; }\r\nth:last-child,\r\ntd:last-child {\r\n  padding-right: 0; }\r\n\r\n\r\n/* Spacing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nbutton,\r\n.button {\r\n  margin-bottom: 1rem; }\r\ninput,\r\ntextarea,\r\nselect,\r\nfieldset {\r\n  margin-bottom: 1.5rem; }\r\npre,\r\nblockquote,\r\ndl,\r\nfigure,\r\ntable,\r\np,\r\nul,\r\nol,\r\nform {\r\n  margin-bottom: 2.5rem; }\r\n\r\n\r\n/* Utilities\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n.u-full-width {\r\n  width: 100%;\r\n  box-sizing: border-box; }\r\n.u-max-full-width {\r\n  max-width: 100%;\r\n  box-sizing: border-box; }\r\n.u-pull-right {\r\n  float: right; }\r\n.u-pull-left {\r\n  float: left; }\r\n\r\n\r\n/* Misc\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\nhr {\r\n  margin-top: 3rem;\r\n  margin-bottom: 3.5rem;\r\n  border-width: 0;\r\n  border-top: 1px solid #E1E1E1; }\r\n\r\n\r\n/* Clearing\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n\r\n/* Self Clearing Goodness */\r\n.container:after,\r\n.row:after,\r\n.u-cf {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both; }\r\n\r\n\r\n/* Media Queries\r\n–––––––––––––––––––––––––––––––––––––––––––––––––– */\r\n/*\r\nNote: The best way to structure the use of media queries is to create the queries\r\nnear the relevant code. For example, if you wanted to change the styles for buttons\r\non small devices, paste the mobile query code up in the buttons section and style it\r\nthere.\r\n*/\r\n\r\n\r\n/* Larger than mobile */\r\n@media (min-width: 400px) {}\r\n\r\n/* Larger than phablet (also point when grid becomes active) */\r\n@media (min-width: 550px) {}\r\n\r\n/* Larger than tablet */\r\n@media (min-width: 750px) {}\r\n\r\n/* Larger than desktop */\r\n@media (min-width: 1000px) {}\r\n\r\n/* Larger than Desktop HD */\r\n@media (min-width: 1200px) {}\r\n", ""]);
	
	// exports


/***/ }),
/* 95 */
/***/ (function(module, exports) {

	module.exports = require("vue-material");

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(97);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(84)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../css-loader/index.js!./vue-material.css", function() {
				var newContent = require("!!../../css-loader/index.js!./vue-material.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, ".md-avatar{width:40px;min-width:40px;height:40px;min-height:40px;margin:auto;display:inline-block;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;border-radius:40px;vertical-align:middle}.md-avatar.md-large{width:64px;min-width:64px;height:64px;min-height:64px;border-radius:64px}.md-avatar.md-large .md-icon{width:40px;min-width:40px;height:40px;min-height:40px;font-size:40px;line-height:40px}.md-avatar.md-avatar-icon{background-color:rgba(0,0,0,.38)}.md-avatar.md-avatar-icon .md-icon{color:#fff}.md-avatar .md-icon{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-avatar img{width:100%;height:100%;display:block}.md-avatar .md-ink-ripple{border-radius:50%}.md-avatar .md-ink-ripple .md-ripple.md-active{animation-duration:.9s}.md-avatar-tooltip.md-tooltip-top{margin-top:-8px}.md-avatar-tooltip.md-tooltip-right{margin-left:8px}.md-avatar-tooltip.md-tooltip-bottom{margin-top:8px}.md-avatar-tooltip.md-tooltip-left{margin-left:-8px}.md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);transform:translateZ(0);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-backdrop.md-active{opacity:1;pointer-events:auto}.md-backdrop.md-transparent{background:none}.md-bottom-bar{width:100%;min-width:100%;height:56px;-ms-flex-pack:center;justify-content:center;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-bottom-bar,.md-bottom-bar-item{position:relative;display:-ms-flexbox;display:flex}.md-bottom-bar-item{max-width:168px;min-width:80px;height:100%;padding:8px 12px 10px;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1;cursor:pointer;border:none;background:transparent;transform:translateZ(0);color:currentColor;font-family:inherit;font-size:14px;line-height:1em;text-decoration:none}.md-bottom-bar-item.md-active{padding-top:6px}.md-bottom-bar-item.md-active .md-text{transform:scale(1) translateZ(0)}.md-bottom-bar-item.md-active .md-icon,.md-bottom-bar-item.md-active .md-text{color:currentColor}.md-bottom-bar.md-shift .md-bottom-bar-item{min-width:56px;max-width:96px;position:static;-ms-flex:1 1 32px;flex:1 1 32px;transition:.4s cubic-bezier(.25,.8,.25,1);transition-property:flex,min-width,max-width;transition-property:flex,min-width,max-width,-ms-flex}.md-bottom-bar.md-shift .md-bottom-bar-item .md-icon{transform:translate3d(0,8px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item .md-text{opacity:0;transform:scale(1) translate3d(0,6px,0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active{min-width:96px;max-width:168px;-ms-flex:1 1 72px;flex:1 1 72px}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon,.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{opacity:1}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-icon{transform:scale(1) translateZ(0)}.md-bottom-bar.md-shift .md-bottom-bar-item.md-active .md-text{transform:scale(1) translate3d(0,2px,0)}.md-bottom-bar-item .md-text{transform:scale(.8571) translateY(2px);transition:all .4s cubic-bezier(.25,.8,.25,1),color .08s linear,opacity .08s linear}.md-bottom-bar-item .md-icon{transition:all .4s cubic-bezier(.25,.8,.25,1),color .08s linear}.md-button{min-width:88px;min-height:36px;margin:6px 8px;padding:0 16px;display:inline-block;position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;background:none;border:0;border-radius:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);color:currentColor;font-family:inherit;font-size:14px;font-style:inherit;font-variant:inherit;font-weight:500;letter-spacing:inherit;line-height:36px;text-align:center;text-transform:uppercase;text-decoration:none;vertical-align:top;white-space:nowrap}.md-button,.md-button:focus{outline:none}.md-button::-moz-focus-inner{border:0}.md-button:hover:not([disabled]):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button:hover:not([disabled]).md-raised{background-color:rgba(0,0,0,.12)}.md-button:active:not([disabled]){background-color:hsla(0,0%,60%,.4)}.md-button.md-raised:not([disabled]){box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-button.md-dense{min-height:32px;line-height:32px;font-size:13px}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{margin-top:1px;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.md-button.md-icon-button{width:40px;min-width:40px;height:40px;margin:0 6px;padding:8px;border-radius:50%;line-height:24px}.md-button.md-icon-button:not([disabled]):hover{background:none}.md-button.md-icon-button.md-dense{width:32px;min-width:32px;height:32px;min-height:32px;padding:4px;line-height:32px}.md-button.md-icon-button .md-ink-ripple{border-radius:50%}.md-button.md-icon-button .md-ink-ripple .md-ripple{top:0!important;right:0!important;bottom:0!important;left:0!important}.md-button.md-icon-button .md-ripple.md-active{animation-duration:.9s}.md-button.md-fab{width:56px;height:56px;min-width:0;overflow:hidden;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);border-radius:56px;line-height:56px;background-clip:padding-box;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-property:background-color,box-shadow,transform}.md-button.md-fab:focus,.md-button.md-fab:hover{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-button.md-fab.md-fab-top-left{position:absolute;top:16px;left:16px}.md-button.md-fab.md-fab-top-center{position:absolute;top:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-top-right{position:absolute;top:16px;right:16px}.md-button.md-fab.md-fab-bottom-left{position:absolute;bottom:16px;left:16px}.md-button.md-fab.md-fab-bottom-center{position:absolute;bottom:16px;left:50%;transform:translateX(-50%)}.md-button.md-fab.md-fab-bottom-right{position:absolute;right:16px;bottom:16px}.md-button.md-fab.md-mini{width:40px;height:40px;line-height:40px}.md-button.md-fab .md-ink-ripple{border-radius:56px}.md-button[disabled]{color:rgba(0,0,0,.26);cursor:default}.md-button[disabled].md-fab,.md-button[disabled].md-raised{background-color:rgba(0,0,0,.12)}.md-button[disabled].md-fab{box-shadow:none}.md-button:after{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-button .md-ink-ripple{border-radius:2px;background-clip:padding-box;overflow:hidden}.md-button.md-fab .md-icon,.md-button.md-icon-button .md-icon{display:block}.md-button-tooltip.md-tooltip-top{margin-top:-8px}.md-button-tooltip.md-tooltip-right{margin-left:8px}.md-button-tooltip.md-tooltip-bottom{margin-top:8px}.md-button-tooltip.md-tooltip-left{margin-left:-8px}.md-button-toggle{width:auto;display:-ms-flexbox;display:flex}.md-button-toggle>.md-button{margin:0;overflow:hidden;border-width:1px 0 1px 1px;border-radius:0;text-align:center;text-overflow:ellipsis;white-space:nowrap}.md-button-toggle>.md-button:first-child{border-radius:2px 0 0 2px}.md-button-toggle>.md-button:last-child{border-right-width:1px;border-radius:0 2px 2px 0}.md-button-toggle>.md-button:not([disabled]){color:rgba(0,0,0,.54)}.md-button-toggle>.md-button:not([disabled]):hover:not(.md-toggle):not(.md-raised){background-color:hsla(0,0%,60%,.2);text-decoration:none}.md-button-toggle>.md-button .md-ink-ripple{border-radius:2px}.md-card{overflow:auto;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;z-index:1;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-card.md-with-hover{cursor:pointer;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:box-shadow}.md-card.md-with-hover:hover{z-index:2;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-card .md-card-media{position:relative}.md-card .md-card-media.md-16-9{overflow:hidden}.md-card .md-card-media.md-16-9:before{width:100%;padding-top:56.25%;display:block;content:\" \"}.md-card .md-card-media.md-16-9 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-4-3{overflow:hidden}.md-card .md-card-media.md-4-3:before{width:100%;padding-top:75%;display:block;content:\" \"}.md-card .md-card-media.md-4-3 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media.md-1-1{overflow:hidden}.md-card .md-card-media.md-1-1:before{width:100%;padding-top:100%;display:block;content:\" \"}.md-card .md-card-media.md-1-1 img{position:absolute;top:50%;right:0;left:0;transform:translateY(-50%)}.md-card .md-card-media+.md-card-header{padding-top:24px}.md-card .md-card-media+.md-card-content:last-child{padding-bottom:16px}.md-card .md-card-media img{width:100%}.md-card .md-card-header{padding:16px}.md-card .md-card-header:first-child>.md-card-header-text>.md-title:first-child,.md-card .md-card-header:first-child>.md-title:first-child{margin-top:8px}.md-card .md-card-header:last-child{margin-bottom:8px}.md-card .md-card-header.md-card-header-flex{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-header+.md-card-content{padding-top:0}.md-card .md-card-header+.md-card-actions:not(:last-child){padding:0 8px}.md-card .md-card-header .md-avatar{margin-right:16px;float:left}.md-card .md-card-header .md-avatar~.md-title{font-size:14px}.md-card .md-card-header .md-avatar~.md-subhead,.md-card .md-card-header .md-avatar~.md-title{font-weight:500;line-height:20px}.md-card .md-card-header .md-button{margin:0}.md-card .md-card-header .md-button:last-child{margin-right:-4px}.md-card .md-card-header .md-button+.md-button{margin-left:8px}.md-card .md-card-header .md-card-header-text{-ms-flex:1;flex:1}.md-card .md-card-header .md-card-media{width:80px;-ms-flex:0 0 80px;flex:0 0 80px;height:80px;margin-left:16px}.md-card .md-card-header .md-card-media.md-medium{width:120px;-ms-flex:0 0 120px;flex:0 0 120px;height:120px}.md-card .md-card-header .md-card-media.md-big{width:160px;-ms-flex:0 0 160px;flex:0 0 160px;height:160px}.md-card .md-subhead,.md-card .md-subheading,.md-card .md-title{margin:0;font-weight:400}.md-card .md-subhead{opacity:.54;font-size:14px;letter-spacing:.01em;line-height:20px}.md-card .md-subhead+.md-title{margin-top:4px}.md-card .md-title{font-size:24px;letter-spacing:0;line-height:32px}.md-card .md-card-media-actions{padding:16px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.md-card .md-card-media-actions .md-card-media{max-width:240px;max-height:240px;-ms-flex:1;flex:1}.md-card .md-card-media-actions .md-card-actions{margin-left:16px;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center}.md-card .md-card-media-actions .md-card-actions .md-button+.md-button{margin:8px 0 0}.md-card .md-card-content{padding:16px;font-size:14px;line-height:22px}.md-card .md-card-content:last-child{padding-bottom:24px}.md-card .md-card-actions{padding:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-align:center;align-items:center}.md-card .md-card-actions .md-button{margin:0}.md-card .md-card-actions .md-button:first-child{margin-left:0}.md-card .md-card-actions .md-button:last-child{margin-right:0}.md-card .md-card-actions .md-button+.md-button{margin-left:4px}.md-card .md-card-area,.md-card>.md-card-area:not(:last-child){position:relative}.md-card>.md-card-area:not(:last-child):after{height:1px;position:absolute;bottom:0;content:\" \"}.md-card>.md-card-area:not(:last-child):not(.md-inset):after{right:0;left:0}.md-card>.md-card-area:not(:last-child).md-inset:after{right:16px;left:16px}.md-card .md-card-media-cover{position:relative;color:#fff}.md-card .md-card-media-cover.md-text-scrim .md-card-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:1}.md-card .md-card-media-cover .md-card-area{position:absolute;right:0;bottom:0;left:0;z-index:2}.md-card .md-card-media-cover .md-card-header+.md-card-actions{padding-top:0}.md-card .md-card-media-cover .md-subhead{opacity:1}.md-card .md-card-expand{overflow:hidden}.md-card .md-card-expand.md-active [md-expand-trigger]{transform:rotate(180deg) translate3D(0,0,0)}.md-card .md-card-expand.md-active .md-card-content{margin-top:0!important;opacity:1}.md-card .md-card-expand .md-card-actions{padding-top:0;position:relative;z-index:2}.md-card .md-card-expand [md-expand-trigger]{transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:transform}.md-card .md-card-expand .md-card-content{padding-top:4px;position:relative;z-index:1;opacity:0;transform:translate3D(0,0,0);transition:all .4s cubic-bezier(.25,.8,.25,1);will-change:margin}.md-checkbox{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-checkbox .md-checkbox-container{width:20px;height:20px;position:relative;border-radius:2px;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-checkbox .md-checkbox-container:focus{outline:none}.md-checkbox .md-checkbox-container:before{width:48px;height:48px;position:absolute;top:50%;left:50%;border-radius:50%;transform:translate(-50%,-50%);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container:after{width:6px;height:13px;position:absolute;top:0;left:5px;border:2px solid #fff;border-top:0;border-left:0;opacity:0;transform:rotate(45deg) scale3D(.15,.15,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-checkbox .md-checkbox-container input{position:absolute;left:-999em}.md-checkbox .md-checkbox-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-checkbox .md-checkbox-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-checkbox .md-checkbox-label{height:20px;padding-left:8px;line-height:20px}.md-checkbox.md-checked .md-checkbox-container:after{opacity:1;transform:rotate(45deg) scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-ink-ripple{pointer-events:none;overflow:hidden;position:absolute;top:0;right:0;bottom:0;left:0;-webkit-mask-image:radial-gradient(circle,#fff 100%,#000 0);mask-image:radial-gradient(circle,#fff 100%,#000 0);transition:all .3s cubic-bezier(.55,0,.55,.2)}.md-ripple{position:absolute;transform:scale(0);background-color:currentColor;opacity:.26;border-radius:50%}.md-ripple.md-active{animation:ripple 1s cubic-bezier(.25,.8,.25,1)}@keyframes ripple{to{transform:scale(1.5);opacity:0}}.md-dialog-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;pointer-events:none;position:fixed;top:0;right:0;bottom:0;left:0;z-index:108}.md-dialog-container.md-active{pointer-events:auto}.md-dialog-container.md-active .md-dialog{opacity:1!important;transform:scale(1)!important;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:opacity,transform}.md-dialog-backdrop{position:fixed;z-index:109}.md-dialog{min-width:280px;max-width:80%;max-height:80%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;overflow:hidden;position:relative;z-index:110;outline:none;border-radius:2px;opacity:0;box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12);transform:scale(.9,.85);transform-origin:center center;transition:opacity .4s cubic-bezier(.25,.8,.25,1),transform .4s cubic-bezier(.25,.8,.25,1) .05s;will-change:opacity,transform}.md-dialog.md-reference{transform-origin:top center}.md-dialog.md-transition-off{transition:none!important}.md-dialog p{margin:0}.md-dialog-title{margin-bottom:20px;padding:24px 24px 0}.md-dialog-content{padding:0 24px 24px;-ms-flex:1;flex:1;overflow:auto;position:relative;background:linear-gradient(180deg,#fff 0,#fff 1px,transparent 0),linear-gradient(0deg,#fff 0,#fff 3px,transparent 0),linear-gradient(180deg,rgba(0,0,0,.12) 0,rgba(0,0,0,.12) 1px,transparent 0),linear-gradient(0deg,rgba(0,0,0,.2) 1px,rgba(0,0,0,.2) 2px,transparent 0);background-attachment:local,local,scroll,scroll}.md-dialog-content:first-child{padding-top:24px}.md-dialog-content p:first-child:not(:only-child){margin-top:0}.md-dialog-content p:last-child:not(:only-child){margin-bottom:0}.md-dialog-body{margin:0 -24px;padding:0 24px;overflow:auto}.md-dialog-actions{min-height:52px;padding:8px 8px 8px 24px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;position:relative}.md-dialog-actions:before{height:1px;position:absolute;top:-1px;right:0;left:0;background-color:#fff;content:\" \"}.md-dialog-actions .md-button{min-width:64px;margin:0;padding:0 8px}.md-dialog-actions .md-button+.md-button{margin-left:8px}.md-divider{height:1px;margin:0;padding:0;display:block;border:0;background-color:rgba(0,0,0,.12)}.md-divider.md-inset{margin-left:72px}.md-icon{width:24px;min-width:24px;height:24px;min-height:24px;margin:auto;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center;fill:currentColor;vertical-align:middle}.md-input-container{min-height:48px;margin:4px 0 24px;padding-top:16px;position:relative}.md-input-container:after{height:1px;right:0;bottom:0;background-color:rgba(0,0,0,.12);content:\" \"}.md-input-container:after,.md-input-container label{position:absolute;left:0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-input-container label{top:23px;pointer-events:none;transition-duration:.3s;color:rgba(0,0,0,.54);font-size:16px;line-height:20px}.md-input-container input,.md-input-container textarea{width:100%;height:32px;padding:0;display:block;border:none;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:font-size;color:rgba(0,0,0,.54);font-family:inherit;font-size:1px;line-height:32px}.md-input-container input:focus,.md-input-container textarea:focus{outline:none}.md-input-container input::-webkit-input-placeholder,.md-input-container textarea::-webkit-input-placeholder{color:rgba(0,0,0,.54);font-size:16px;text-shadow:none;-webkit-text-fill-color:initial}.md-input-container textarea{min-height:32px;max-height:230px;padding:5px 0;resize:none;line-height:1.3em}.md-input-container .md-error{height:20px;display:block!important;position:absolute;opacity:0;transform:translate3d(0,-8px,0);transition:all .3s cubic-bezier(.55,0,.55,.2);font-size:12px}.md-input-container .md-count{height:20px;position:absolute;right:0;font-size:12px}.md-input-container.md-input-placeholder label{pointer-events:auto;top:10px;opacity:0;font-size:12px}.md-input-container.md-input-placeholder input,.md-input-container.md-input-placeholder textarea{font-size:16px}.md-input-container.md-has-value label,.md-input-container.md-input-focused label{pointer-events:auto;top:0;opacity:1;font-size:12px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea,.md-input-container.md-input-focused input,.md-input-container.md-input-focused textarea{font-size:16px}.md-input-container.md-has-value input,.md-input-container.md-has-value textarea{color:rgba(0,0,0,.87)}.md-input-container.md-input-inline label{pointer-events:none}.md-input-container.md-input-inline.md-input-focused label{top:23px;font-size:16px}.md-input-container.md-input-inline.md-has-value label{opacity:0}.md-input-container.md-input-disabled:after{background:0 100% repeat-x;background-image:linear-gradient(90deg,rgba(0,0,0,.38) 0,rgba(0,0,0,.38) 33%,transparent 0);background-size:4px 1px}.md-input-container.md-input-disabled input,.md-input-container.md-input-disabled label,.md-input-container.md-input-disabled textarea{color:rgba(0,0,0,.38)}.md-input-container.md-has-password.md-input-focused .md-toggle-password{color:rgba(0,0,0,.54)}.md-input-container.md-has-password .md-toggle-password{margin:0;position:absolute;right:0;bottom:-2px;color:rgba(0,0,0,.38)}.md-input-container.md-has-password .md-toggle-password .md-ink-ripple{color:rgba(0,0,0,.87)}.md-input-container.md-input-invalid .md-error{opacity:1;transform:translateZ(0)}.md-input-container.md-input-required label:after{position:absolute;top:2px;right:0;transform:translateX(calc(100% + 2px));content:\"*\";font-size:12px;line-height:1em;vertical-align:top}.md-input-container.md-has-select:hover .md-select:not(.md-disabled):after{color:rgba(0,0,0,.87)}.md-list{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;position:relative;list-style:none}.md-list.md-dense{padding:4px 0}.md-list.md-dense .md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list.md-dense .md-list-item .md-list-item-container{min-height:40px;font-size:13px}.md-list.md-dense .md-list-item .md-list-item-container .md-avatar:first-child{margin-right:24px}.md-list.md-dense .md-avatar{width:32px;min-width:32px;height:32px;min-height:32px}.md-list.md-dense .md-list-item-expand{min-height:40px}.md-list.md-double-line.md-dense .md-list-item .md-list-item-container{min-height:60px}.md-list.md-double-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-double-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-double-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-double-line .md-list-item .md-list-item-container{min-height:72px}.md-list.md-triple-line.md-dense .md-list-item .md-list-item-container{min-height:76px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar{width:36px;min-width:36px;height:36px;min-height:36px}.md-list.md-triple-line.md-dense .md-list-item .md-avatar:first-child{margin-right:20px}.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(1),.md-list.md-triple-line.md-dense .md-list-text-container>:nth-child(2){font-size:13px}.md-list.md-triple-line .md-list-item .md-list-item-container{min-height:88px}.md-list.md-triple-line .md-avatar{margin:0}.md-list.md-triple-line .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-list .md-subheader.md-inset{padding-left:72px}.md-list>.md-subheader:first-of-type{margin-top:-8px}.md-list-item{height:auto;position:relative}.md-list-item.md-inset .md-list-item-container{padding-left:72px}.md-list-item .md-list-item-holder{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;-ms-flex:1;flex:1}.md-list-item .md-list-item-holder>.md-ink-ripple{border-radius:0}.md-list-item .md-list-item-holder>.md-icon:first-child{margin-right:32px}.md-list-item .md-list-item-holder .md-avatar:first-child{margin-right:16px}.md-list-item .md-list-item-holder .md-list-action{margin:0 -2px 0 0}.md-list-item .md-list-item-holder .md-list-action:nth-child(3){margin:0 -2px 0 16px}.md-list-item .md-list-item-container{width:100%;min-height:48px;margin:0;padding:0 16px;position:relative;border-radius:0;font-size:16px;font-weight:400;text-align:left;text-transform:none}.md-list-item .md-divider{position:absolute;bottom:0;right:0;left:0}.md-list-item .md-avatar,.md-list-item .md-icon{margin:0}.md-list-item .md-avatar:first-of-type+*,.md-list-item .md-icon:first-of-type+*{-ms-flex:1 1 auto;flex:1 1 auto}.md-list-item .md-avatar{margin-top:8px;margin-bottom:8px}.md-list-item .md-icon{color:rgba(0,0,0,.54)}.md-list-item-expand{min-height:48px;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow:hidden}.md-list-item-expand:after,.md-list-item-expand:before{height:1px;position:absolute;right:0;left:0;z-index:3;transition:all .4s cubic-bezier(.25,.8,.25,1);content:\" \"}.md-list-item-expand:before{top:0}.md-list-item-expand:after{bottom:0}.md-list-item-expand.md-active{position:relative}.md-list-item-expand.md-active:after,.md-list-item-expand.md-active:before{background-color:rgba(0,0,0,.12)}.md-list-item-expand.md-active:first-of-type:before,.md-list-item-expand.md-active:last-of-type:after{background:none}.md-list-item-expand.md-active>.md-list-item-container .md-list-expand-indicator{transform:rotate(180deg) translate3D(0,0,0)}.md-list-item-expand.md-active>.md-list-expand{margin-bottom:0!important}.md-list-item-expand>.md-list-item-container>.md-list-item-holder{position:relative;z-index:2}.md-list-item-expand .md-expansion-indicator,.md-list-item-expand .md-icon,.md-list-item-expand .md-list-item-container{transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-list-item-expand .md-list-expand{position:relative;z-index:1;transform:translate3D(0,0,0);will-change:margin-bottom;transition:all .5s cubic-bezier(.35,0,.25,1)}.md-list-item-expand .md-list-expand.md-transition-off{transition:none}.md-list-item-expand .md-list-expand .md-list{padding:0}.md-list-text-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column;-ms-flex:1;flex:1;overflow:hidden;line-height:1.25em;text-overflow:ellipsis;white-space:normal}.md-list-text-container>:nth-child(1){font-size:16px}.md-list-text-container>:nth-child(2),.md-list-text-container>:nth-child(3){margin:0;color:rgba(0,0,0,.54);font-size:14px}.md-list-text-container>:nth-child(2):not(:last-child){color:rgba(0,0,0,.87)}.md-menu{display:inline-block}.md-menu-content{width:168px;min-width:84px;max-width:392px;min-height:64px;max-height:calc(100vh - 32px);overflow-x:hidden;overflow-y:auto;position:absolute;z-index:120;transform:scale(.9,.85) translateZ(0);background-color:#fff;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .25s cubic-bezier(.55,0,.55,.2),margin .2s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .25s;will-change:transform,opacity,width;color:rgba(33,33,33,.87)}.md-menu-content.md-direction-bottom-right{margin-top:-20px;margin-left:-8px;transform-origin:top left}.md-menu-content.md-direction-bottom-right.md-active{margin-top:-11px}.md-menu-content.md-direction-bottom-left{margin-top:-20px;margin-left:8px;transform-origin:top right}.md-menu-content.md-direction-bottom-left.md-active{margin-top:-11px}.md-menu-content.md-direction-top-right{margin-top:20px;margin-left:-8px;transform-origin:bottom left}.md-menu-content.md-direction-top-right.md-active{margin-top:11px}.md-menu-content.md-direction-top-left{margin-top:20px;margin-left:8px;transform-origin:bottom right}.md-menu-content.md-direction-top-left.md-active{margin-top:11px}.md-menu-content.md-align-trigger{margin:0}.md-menu-content.md-size-1{width:84px}.md-menu-content.md-size-2{width:112px}.md-menu-content.md-size-3{width:168px}.md-menu-content.md-size-4{width:224px}.md-menu-content.md-size-5{width:280px}.md-menu-content.md-size-6{width:336px}.md-menu-content.md-size-7{width:392px}.md-menu-content.md-active{pointer-events:auto;opacity:1;transform:scale(1) translateZ(0);transition:width .4s cubic-bezier(.25,.8,.25,1),opacity .35s cubic-bezier(.25,.8,.25,1),transform .25s cubic-bezier(.25,.8,.25,1) .05s}.md-menu-content.md-active .md-list{opacity:1;transition:opacity .2s cubic-bezier(.25,.8,.25,1) .15s}.md-menu-content .md-list{opacity:0;transition:opacity .2s cubic-bezier(.25,.8,.25,1)}.md-menu-item{cursor:pointer;font-size:16px;line-height:1.2em}.md-menu-item.md-highlighted .md-button:not([disabled]),.md-menu-item:focus .md-button:not([disabled]),.md-menu-item:hover .md-button:not([disabled]){background-color:rgba(0,0,0,.12)}.md-menu-item[disabled]{cursor:default;color:rgba(0,0,0,.38)}.md-menu-item .md-list-item-holder{overflow:hidden;text-overflow:ellipsis}.md-radio{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-radio .md-radio-container{width:20px;height:20px;position:relative;border-radius:50%;border:2px solid rgba(0,0,0,.54);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-radio .md-radio-container:after{position:absolute;top:3px;right:3px;bottom:3px;left:3px;border-radius:50%;opacity:0;transform:scale3D(.38,.38,1);transition:all .3s cubic-bezier(.55,0,.55,.2);content:\" \"}.md-radio .md-radio-container input{position:absolute;left:-999em}.md-radio .md-radio-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-radio .md-radio-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-radio .md-radio-label{height:20px;padding-left:8px;line-height:20px}.md-radio.md-checked .md-radio-container:after{opacity:1;transform:scale3D(1,1,1);transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-select{width:100%;min-width:128px;height:32px;position:relative}.md-select:focus{outline:none}.md-select:after{margin-top:2px;position:absolute;top:50%;right:0;transform:translateY(-50%) scaleY(.45) scaleX(.85);transition:all .08s linear;color:rgba(0,0,0,.54);content:\"\\25BC\"}.md-select.md-active .md-select-menu{top:-8px;pointer-events:auto;opacity:1;transform:translateY(-8px) scale3D(1,1,1);transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s;transition-property:opacity,transform,top}.md-select.md-active .md-select-menu>*{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.15s;transition-delay:.1s}.md-select.md-disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;user-drag:none}.md-select.md-disabled:after{color:rgba(0,0,0,.38)}.md-select select{position:absolute;left:-999em}.md-select .md-menu,.md-select .md-select-value{width:100%;height:32px;display:block;position:relative}.md-select .md-select-value{padding-right:24px;cursor:pointer;overflow:hidden;z-index:2;font-size:16px;line-height:33px;text-overflow:ellipsis;white-space:nowrap}.md-select .md-select-menu{min-width:156px;max-width:100%;min-height:48px;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:stretch;justify-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;pointer-events:none;position:absolute;top:-16px;left:-16px;z-index:7;background-color:#fff;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);opacity:0;transform:scale3D(.85,.7,1);transition:opacity .25s cubic-bezier(.55,0,.55,.2),top .25s cubic-bezier(.55,0,.55,.2),transform 0s cubic-bezier(.55,0,.55,.2) .25s;color:rgba(33,33,33,.87)}.md-select .md-select-menu>*{opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.25s}.md-select .md-select-menu-container{margin:0;padding:8px 0;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:stretch;justify-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;overflow-x:hidden;overflow-y:auto}.md-select .md-subheader{color:hsla(0,0%,46%,.87);text-transform:uppercase}.md-select .md-subheader:first-child{margin-top:-8px}.md-select-content{width:auto;max-height:256px}.md-select-content.md-direction-bottom-right{margin-top:-15px;margin-left:-16px}.md-select-content .md-menu-item .md-list-item-holder{overflow:visible;-ms-flex-pack:start;justify-content:flex-start}.md-select-content.md-multiple .md-checkbox{margin:0}.md-select-content.md-multiple .md-checkbox-label{padding-left:16px;cursor:pointer}.md-sidenav.md-left .md-sidenav-content{left:0;transform:translate3D(-100%,0,0)}.md-sidenav.md-right .md-sidenav-content{right:0;transform:translate3D(100%,0,0)}.md-sidenav.md-fixed .md-sidenav-backdrop,.md-sidenav.md-fixed .md-sidenav-content{position:fixed}.md-sidenav .md-sidenav-content{width:304px;position:absolute;top:0;bottom:0;z-index:100;pointer-events:none;overflow:auto;-webkit-overflow-scrolling:touch;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-property:transform;will-change:transform}.md-sidenav .md-backdrop{position:absolute;top:0;right:0;bottom:0;left:0;z-index:99;pointer-events:none;background-color:rgba(0,0,0,.54);opacity:0;transition:all .5s cubic-bezier(.35,0,.25,1);transition-property:opacity;will-change:opacity}.md-sidenav.md-active .md-sidenav-content{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12);pointer-events:auto;transform:translate3D(0,0,0)}.md-sidenav.md-active .md-sidenav-backdrop{opacity:1;pointer-events:auto}.md-subheader{min-height:48px;padding:0 16px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-flow:row wrap;flex-flow:row wrap;color:rgba(0,0,0,.54);font-size:14px;font-weight:500}.md-switch{width:auto;margin:16px 8px 16px 0;display:-ms-inline-flexbox;display:inline-flex;position:relative}.md-switch .md-switch-container{width:34px;height:14px;position:relative;border-radius:14px;transition:all .4s cubic-bezier(.25,.8,.25,1);background-color:rgba(0,0,0,.38)}.md-switch .md-switch-container .md-switch-thumb{width:20px;height:20px;position:absolute;top:50%;left:0;background-color:#fafafa;border-radius:50%;box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12);transition:all .08s linear}.md-switch .md-switch-container input{position:absolute;left:-999em}.md-switch .md-switch-container .md-ink-ripple{top:-16px;right:-16px;bottom:-16px;left:-16px;border-radius:50%;color:rgba(0,0,0,.54)}.md-switch .md-switch-container .md-ink-ripple .md-ripple{width:48px!important;height:48px!important;top:0!important;right:0!important;bottom:0!important;left:0!important}.md-switch .md-switch-container .md-switch-holder{width:40px;height:40px;margin:0;padding:0;position:absolute;top:50%;left:50%;z-index:2;background:none;border:none;transform:translate(-50%,-50%)}.md-switch .md-switch-container .md-switch-holder:focus{outline:none}.md-switch .md-switch-label{height:14px;padding-left:8px;line-height:14px}.md-switch.md-dragging .md-switch-thumb{cursor:-webkit-grabbing;cursor:grabbing}.md-switch.md-disabled .md-switch-thumb{cursor:default}.md-table{display:-ms-flexbox;display:flex;-ms-flex-flow:column wrap;flex-flow:column wrap;overflow-x:auto}.md-table.md-transition-off .md-checkbox .md-checkbox-container,.md-table.md-transition-off .md-checkbox .md-checkbox-container:after,.md-table.md-transition-off .md-table-cell{transition:none!important}.md-table table{width:100%;border-spacing:0;border-collapse:collapse;overflow:hidden}.md-table tbody .md-table-row{border-top:1px solid #e0e0e0}.md-table tbody .md-table-row.md-selected .md-table-cell{background-color:#f5f5f5}.md-table tbody .md-table-row:hover .md-table-cell{background-color:#eee}.md-table .md-table-head{padding:0;position:relative;color:rgba(0,0,0,.54);font-size:12px;line-height:16px;text-align:left}.md-table .md-table-head:last-child .md-table-head-container .md-table-head-text{padding-right:24px}.md-table .md-table-head.md-numeric{text-align:right}.md-table .md-table-head .md-icon{width:16px;min-width:16px;height:16px;min-height:16px;font-size:16px;color:rgba(0,0,0,.54)}.md-table .md-table-head .md-icon:not(.md-sortable-icon){margin:0 4px}.md-table .md-table-head .md-icon:first-child{margin-left:0}.md-table .md-table-head .md-icon:last-child{margin-right:0}.md-table .md-table-head-container{height:56px;padding:14px 0;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-table .md-table-head-text{height:28px;padding-right:32px;padding-left:24px;display:inline-block;position:relative;overflow:hidden;line-height:28px;text-overflow:ellipsis;white-space:nowrap}.md-table .md-sortable{cursor:pointer}.md-table .md-sortable:first-of-type .md-sortable-icon{left:auto;right:10px}.md-table .md-sortable.md-sorted,.md-table .md-sortable:hover{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted .md-sortable-icon,.md-table .md-sortable:hover .md-sortable-icon{opacity:1}.md-table .md-sortable.md-sorted .md-sortable-icon{color:rgba(0,0,0,.87)}.md-table .md-sortable.md-sorted-descending .md-sortable-icon{transform:translateY(-50%) rotate(180deg)}.md-table .md-sortable .md-sortable-icon{position:absolute;top:50%;left:2px;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translateY(-50%);opacity:0;color:rgba(0,0,0,.38)}.md-table .md-sortable .md-ink-ripple{color:rgba(0,0,0,.87)}.md-table .md-table-cell{height:48px;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);color:rgba(0,0,0,.87);font-size:13px;line-height:18px}.md-table .md-table-cell:last-child .md-table-cell-container{padding-right:24px}.md-table .md-table-cell.md-numeric{text-align:right}.md-table .md-table-cell.md-numeric .md-table-cell-container{-ms-flex-pack:end;justify-content:flex-end}.md-table .md-table-cell.md-has-action .md-table-cell-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.md-table .md-table-cell .md-table-cell-container{padding:6px 32px 6px 24px}.md-table .md-table-cell .md-button{width:36px;min-width:36px;height:36px;min-height:36px}.md-table .md-table-cell .md-button:last-child{margin:0 -10px 0 0}.md-table .md-table-cell .md-button .md-icon{width:18px;min-width:18px;height:18px;min-height:18px;margin:0;color:rgba(0,0,0,.54);font-size:18px}.md-table .md-table-selection{width:60px;position:relative;vertical-align:middle}.md-table .md-table-selection+.md-table-cell .md-table-cell-container,.md-table .md-table-selection+.md-table-head .md-table-head-container .md-table-head-text{padding-left:8px}.md-table .md-table-selection .md-table-cell-container{padding-right:16px;padding-left:24px}.md-table .md-table-selection .md-checkbox{margin:0}.md-table .md-table-selection .md-checkbox-container{width:18px;height:18px;margin-top:1px}.md-table .md-table-selection .md-checkbox-container:after{top:-1px;left:4px}.md-table .md-select{min-width:84px}.md-table .md-option,.md-table .md-select-value{font-size:13px}.md-table-edit-trigger{display:inline-block;cursor:pointer;color:rgba(0,0,0,.38)}.md-table-edit-trigger.md-edited{color:rgba(0,0,0,.87)}.md-table-dialog{max-height:0;margin:0;padding:0 24px 2px;position:absolute;top:0;right:0;left:24px;z-index:60;overflow:hidden;pointer-events:none;border-radius:2px;box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);background-color:#fff;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1),max-height 0s .5s;transition-duration:.3s;transform:translate3D(0,-8px,0)}.md-table-dialog.md-active{max-height:400px;pointer-events:auto;transform:translate3D(#000);opacity:1;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-dialog.md-large{padding:12px 24px 2px}.md-table-dialog .md-input-container{margin-top:0;margin-bottom:16px}.md-table-dialog .md-input-container.md-input-placeholder input{font-size:13px}.md-table-dialog .md-input-container.md-input-placeholder input::-webkit-input-placeholder{font-size:13px}.md-table-dialog .md-char-counter{font-size:13.5px;color:rgba(0,0,0,.54)}.md-table-dialog .md-button{min-width:64px}.md-table-card{overflow:visible}.md-table-card .md-toolbar{padding-left:16px;background-color:#fff}.md-table-card .md-title{-ms-flex:1;flex:1;font-size:20px}.md-table-card .md-table-pagination{height:56px;display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;border-top:1px solid #e0e0e0;color:rgba(0,0,0,.54);font-size:12px}.md-table-card .md-table-pagination .md-table-pagination-previous{margin-right:2px;margin-left:18px}.md-table-card .md-table-pagination .md-select{width:auto;min-width:36px;margin:0 32px}.md-table-card .md-table-pagination .md-select:after{margin-top:0}.md-table-card .md-table-pagination .md-select .md-select-value{padding:0;border:none;font-size:13px}.md-table-card .md-table-pagination .md-button:not([disabled]){color:rgba(0,0,0,.87)}.md-table-card .md-table-pagination .md-button[disabled] .md-icon{color:rgba(0,0,0,.26)}.md-pagination-select.md-direction-bottom-right{margin-top:-16px}.md-pagination-select .md-list-item-holder{font-size:13px}.md-table-alternate-header{position:absolute;top:0;right:0;left:0;z-index:10;pointer-events:none;opacity:0;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s}.md-table-alternate-header.md-active{pointer-events:auto;opacity:1;transform:translate3D(#000)}.md-table-alternate-header .md-counter{margin-left:8px;-ms-flex:1;flex:1}.md-tabs{width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;position:relative}.md-tabs.md-transition-off *{transition:none!important}.md-tabs.md-dynamic-height .md-tabs-content{transition:height .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation{height:48px;min-height:48px;position:relative;z-index:1;display:-ms-flexbox;display:flex;transition:all .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label{min-height:72px}.md-tabs .md-tabs-navigation.md-has-icon.md-has-label .md-icon{margin-bottom:10px}.md-tabs .md-tabs-navigation.md-centered{-ms-flex-pack:center;justify-content:center}.md-tabs .md-tabs-navigation.md-fixed .md-tab-header{-ms-flex:1;flex:1}.md-tabs .md-tabs-navigation.md-right{-ms-flex-pack:end;justify-content:flex-end}.md-tabs .md-tab-header{min-width:72px;max-width:264px;margin:0;padding:0 12px;display:inline-block;position:relative;cursor:pointer;border:0;background:none;transition:all .4s cubic-bezier(.25,.8,.25,1);font-family:inherit;font-size:14px;font-weight:500;text-transform:uppercase}.md-tabs .md-tab-header.md-disabled{cursor:default;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-drag:none}.md-tabs .md-tab-header-container{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.md-tabs .md-tab-header-container .md-icon{margin:0}.md-tabs .md-tab-indicator{height:2px;position:absolute;bottom:0;left:0;transform:translate3D(0,0,0)}.md-tabs .md-tab-indicator.md-transition-off{transition:none!important}.md-tabs .md-tab-indicator.md-to-right{transition:all .4s cubic-bezier(.25,.8,.25,1),left .3s cubic-bezier(.35,0,.25,1),right .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tab-indicator.md-to-left{transition:all .4s cubic-bezier(.25,.8,.25,1),right .3s cubic-bezier(.35,0,.25,1),left .15s cubic-bezier(.35,0,.25,1)}.md-tabs .md-tabs-content{width:100%;height:0;position:relative;overflow:hidden}.md-tabs .md-tabs-wrapper{width:9999em;position:absolute;top:0;right:0;bottom:0;left:0;transform:translateZ(0);transition:transform .4s cubic-bezier(.25,.8,.25,1)}.md-tabs .md-tab{padding:16px;position:absolute;top:0;left:0;right:0}.md-toolbar{min-height:64px;padding:0 8px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-line-pack:center;align-content:center;-ms-flex-flow:row wrap;flex-flow:row wrap;position:relative;transition:all .4s cubic-bezier(.25,.8,.25,1);transform:translate3D(0,0,0)}.md-toolbar.md-dense{min-height:48px}.md-toolbar.md-dense.md-medium{min-height:72px}.md-toolbar.md-dense.md-large{min-height:96px}.md-toolbar.md-dense .md-toolbar-container{height:48px}.md-toolbar.md-medium{min-height:88px}.md-toolbar.md-medium .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-large{min-height:128px;-ms-flex-line-pack:inherit;align-content:inherit}.md-toolbar.md-large .md-toolbar-container:nth-child(2) .md-title:first-child{margin-left:56px}.md-toolbar.md-account-header{min-height:164px}.md-toolbar.md-account-header .md-ink-ripple{color:#fff}.md-toolbar.md-account-header .md-list-item-container:hover:not([disabled]){background-color:hsla(0,0%,100%,.12)}.md-toolbar.md-account-header .md-avatar-list{margin:16px 0 8px}.md-toolbar.md-account-header .md-avatar-list .md-list-item-container{-ms-flex-align:start;align-items:flex-start}.md-toolbar.md-account-header .md-avatar-list .md-avatar+.md-avatar{margin-left:16px}.md-toolbar .md-toolbar-container{width:100%;height:64px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-item-align:start;align-self:flex-start}.md-toolbar .md-toolbar-container>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar .md-toolbar-container>.md-button+.md-button{margin-left:0}.md-toolbar>.md-button:first-child{margin-left:0;margin-right:16px}.md-toolbar>.md-button+.md-button{margin-left:0}.md-toolbar .md-button:hover:not([disabled]):not(.md-raised):not(.md-icon-button):not(.md-fab){background-color:hsla(0,0%,100%,.1)}.md-toolbar .md-title{margin:0;font-size:20px;font-weight:400}.md-toolbar .md-title:first-child{margin-left:8px}.md-toolbar .md-list{padding:0;margin:0 -8px;-ms-flex:1;flex:1}.md-tooltip{height:20px;padding:0 8px;position:fixed;z-index:200;pointer-events:none;background-color:rgba(97,97,97,.87);border-radius:2px;opacity:0;transform-origin:center top;transition:all .4s cubic-bezier(.25,.8,.25,1);transition-duration:.3s;transition-delay:0s;color:#fff;font-family:Roboto,Lato,sans-serif;font-size:10px;line-height:20px;text-transform:none;white-space:nowrap}.md-tooltip.md-active{opacity:1;transition:all .3s cubic-bezier(.55,0,.55,.2);transition-duration:.3s}.md-tooltip:not(.md-active){transition-delay:0s!important}.md-tooltip.md-transition-off{transition:none!important}.md-tooltip.md-tooltip-top{margin-top:-14px;transform:translate(-50%,8px)}.md-tooltip.md-tooltip-top.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-right{margin-left:14px;transform:translate(-8px,50%)}.md-tooltip.md-tooltip-right.md-active{transform:translateY(50%)}.md-tooltip.md-tooltip-bottom{margin-top:14px;transform:translate(-50%,-8px)}.md-tooltip.md-tooltip-bottom.md-active{transform:translate(-50%)}.md-tooltip.md-tooltip-left{margin-left:-14px;transform:translate(8px,50%)}.md-tooltip.md-tooltip-left.md-active{transform:translateY(50%)}.md-whiteframe{position:relative;z-index:1}.md-whiteframe-1dp{box-shadow:0 1px 3px rgba(0,0,0,.2),0 1px 1px rgba(0,0,0,.14),0 2px 1px -1px rgba(0,0,0,.12)}.md-whiteframe-2dp{box-shadow:0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12)}.md-whiteframe-3dp{box-shadow:0 1px 8px rgba(0,0,0,.2),0 3px 4px rgba(0,0,0,.14),0 3px 3px -2px rgba(0,0,0,.12)}.md-whiteframe-4dp{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px rgba(0,0,0,.14),0 1px 10px rgba(0,0,0,.12)}.md-whiteframe-5dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px rgba(0,0,0,.14),0 1px 14px rgba(0,0,0,.12)}.md-whiteframe-6dp{box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px rgba(0,0,0,.14),0 1px 18px rgba(0,0,0,.12)}.md-whiteframe-7dp{box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}.md-whiteframe-8dp{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.md-whiteframe-9dp{box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}.md-whiteframe-10dp{box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}.md-whiteframe-11dp{box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}.md-whiteframe-12dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}.md-whiteframe-13dp{box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}.md-whiteframe-14dp{box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}.md-whiteframe-15dp{box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}.md-whiteframe-16dp{box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}.md-whiteframe-17dp{box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}.md-whiteframe-18dp{box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}.md-whiteframe-19dp{box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}.md-whiteframe-20dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}.md-whiteframe-21dp{box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}.md-whiteframe-22dp{box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}.md-whiteframe-23dp{box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}.md-whiteframe-24dp{box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}", ""]);
	
	// exports


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(99)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(101),
	  /* template */
	  __webpack_require__(107),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\App.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] App.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(100);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("69ada08f", content, false);

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\nbody {\n  background: #f7f7f7;\n}\n.invisible {\n  display: none;\n}\n.space-v {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n", "", {"version":3,"sources":["/./ClientApp/App.vue?ad386f08"],"names":[],"mappings":";AAwBA;EACA,oBAAA;CACA;AAEA;EACA,cAAA;CACA;AAEA;EACA,eAAA;EACA,kBAAA;CACA","file":"App.vue","sourcesContent":["<template>\r\n  <div v-md-theme=\"'apptheme'\">\r\n    <toolbar></toolbar>\r\n\r\n    <transition name=\"md-router\">\r\n      <router-view></router-view>\r\n    </transition>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport Toolbar from './components/Toolbar'\r\nexport default {\r\n  data () {\r\n    return {\r\n    }\r\n  },\r\n  components: {\r\n    Toolbar\r\n  }\r\n}\r\n</script>\r\n\r\n<style>\r\n  body {\r\n    background: #f7f7f7;\r\n  }\r\n  \r\n  .invisible {\r\n    display: none;\r\n  }\r\n  \r\n  .space-v {\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n  }\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _Toolbar = __webpack_require__(102);
	
	var _Toolbar2 = _interopRequireDefault(_Toolbar);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  data: function data() {
	    return {};
	  },
	
	  components: {
	    Toolbar: _Toolbar2.default
	  }
	};

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(103)
	
	var Component = __webpack_require__(11)(
	  /* script */
	  __webpack_require__(105),
	  /* template */
	  __webpack_require__(106),
	  /* scopeId */
	  "data-v-4486cf99",
	  /* cssModules */
	  null
	)
	Component.options.__file = "E:\\Web2.0\\VueJsCoreApp\\VueJsCoreApp\\ClientApp\\components\\Toolbar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Toolbar.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(104);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(9)("4ad6f99c", content, false);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(8)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toolbar-content[data-v-4486cf99] {\n}\n", "", {"version":3,"sources":["/./ClientApp/components/Toolbar.vue?1577fab0"],"names":[],"mappings":";AA2HA;CAAA","file":"Toolbar.vue","sourcesContent":["<template>\r\n  <div class=\"toolbar\">\r\n    <md-toolbar>\r\n      <md-button class=\"md-icon-button\" @click=\"toggleLeftSidenav\">\r\n        <md-icon>menu</md-icon>\r\n      </md-button>\r\n\r\n      <h2 class=\"md-title\" style=\"flex: 1\">{{ appName }}</h2>\r\n\r\n      <md-button class=\"md-icon-button\" v-on:click=\"visitGitHub\">\r\n        <md-icon>favorite</md-icon>\r\n      </md-button>\r\n    </md-toolbar>\r\n    <md-sidenav class=\"md-left\" ref=\"leftSidenav\">\r\n      <md-toolbar class=\"md-large\">\r\n        <div class=\"md-toolbar-container\">\r\n          <h2 class=\"md-title\">{{ appName }}</h2>\r\n        </div>\r\n      </md-toolbar>\r\n      <!--\r\n      <div class=\"container toolbar-content\">\r\n        <h3>GitHub</h3>\r\n        <p>Star {{ appName }} on GitHub!</p>\r\n        <md-button class=\"md-raised md-accent\" @click=\"visitGitHub\">Star</md-button>\r\n      </div>\r\n      -->\r\n      <div class=\"toolbar-content\">\r\n        <!--\r\n        <div class=\"row\">\r\n          <div class=\"twelve columns\">\r\n            \r\n          </div>\r\n        </div>\r\n        -->\r\n        <div class=\"sidebar-links\">\r\n          <md-list class=\"md-dense\">\r\n            <md-list-item>\r\n              <router-link exact to=\"/\">Home</router-link>\r\n            </md-list-item>\r\n\r\n            <md-list-item v-if=\"isLoggedIn\">\r\n              <router-link exact to=\"/files\">Files</router-link>\r\n            </md-list-item>\r\n\r\n            <md-list-item>\r\n              <router-link exact to=\"/about\">About</router-link>\r\n            </md-list-item>\r\n\r\n            <md-list-item>\r\n              <span>Support</span>\r\n\r\n              <md-list-expand>\r\n                <md-list>\r\n                  <md-list-item class=\"md-inset\" href=\"https://github.com/0xFireball/VueJsCoreApp\">\r\n                    GitHub\r\n                  </md-list-item>\r\n\r\n                  <md-list-item class=\"md-inset\" href=\"https://github.com/0xFireball\">\r\n                    Donate\r\n                  </md-list-item>\r\n                </md-list>\r\n              </md-list-expand>\r\n            </md-list-item>\r\n          </md-list>\r\n        </div>\r\n      </div>\r\n    </md-sidenav>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nimport axios from 'axios'\r\n\r\nexport default {\r\n  name: 'toolbar',\r\n  data () {\r\n    return {\r\n      appName: 'VueJsCoreApp',\r\n      isLoggedIn: false\r\n    }\r\n  },\r\n  methods: {\r\n    visitGitHub: function () {\r\n      window.open('https://github.com/0xFireball/VueJsCoreApp')\r\n    },\r\n    toggleLeftSidenav: function () {\r\n      this.$refs.leftSidenav.toggle()\r\n    },\r\n    updateLoggedInStatus: function () {\r\n      let vm = this\r\n      let axiosConf = {\r\n        validateStatus: function (status) {\r\n          return status >= 200 && status < 500\r\n        }\r\n      }\r\n      // axios.get('/checkauth', axiosConf)\r\n      // .then((response) => {\r\n      //   if (response.status === 200) {\r\n      //     vm.isLoggedIn = true\r\n      //   } else if (response.status === 401 || response.status === 404) {\r\n      //     vm.isLoggedIn = false\r\n      //   }\r\n      // })\r\n      // .catch(function (error) {\r\n      //   if (error) {\r\n      //     vm.isLoggedIn = false\r\n      //   }\r\n      // })\r\n    }\r\n  },\r\n  created () {\r\n    // this.updateLoggedInStatus()\r\n    // then register hook\r\n    this.$router.beforeEach((to, from, next) => {\r\n      // this.updateLoggedInStatus()\r\n      next()\r\n    })\r\n  }\r\n}\r\n</script>\r\n\r\n<!-- Add \"scoped\" attribute to limit CSS to this component only -->\r\n<style scoped>\r\n  .toolbar-content {}\r\n</style>"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _axios = __webpack_require__(22);
	
	var _axios2 = _interopRequireDefault(_axios);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  name: 'toolbar',
	  data: function data() {
	    return {
	      appName: 'VueJsCoreApp',
	      isLoggedIn: false
	    };
	  },
	
	  methods: {
	    visitGitHub: function visitGitHub() {
	      window.open('https://github.com/0xFireball/VueJsCoreApp');
	    },
	    toggleLeftSidenav: function toggleLeftSidenav() {
	      this.$refs.leftSidenav.toggle();
	    },
	    updateLoggedInStatus: function updateLoggedInStatus() {
	      var vm = this;
	      var axiosConf = {
	        validateStatus: function validateStatus(status) {
	          return status >= 200 && status < 500;
	        }
	      };
	    }
	  },
	  created: function created() {
	    this.$router.beforeEach(function (to, from, next) {
	      next();
	    });
	  }
	};

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "toolbar"
	  }, [_c('md-toolbar', [_c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.toggleLeftSidenav
	    }
	  }, [_c('md-icon', [_vm._v("menu")])], 1), _vm._v(" "), _c('h2', {
	    staticClass: "md-title",
	    staticStyle: {
	      "flex": "1"
	    }
	  }, [_vm._v(_vm._s(_vm.appName))]), _vm._v(" "), _c('md-button', {
	    staticClass: "md-icon-button",
	    on: {
	      "click": _vm.visitGitHub
	    }
	  }, [_c('md-icon', [_vm._v("favorite")])], 1)], 1), _vm._v(" "), _c('md-sidenav', {
	    ref: "leftSidenav",
	    staticClass: "md-left"
	  }, [_c('md-toolbar', {
	    staticClass: "md-large"
	  }, [_c('div', {
	    staticClass: "md-toolbar-container"
	  }, [_c('h2', {
	    staticClass: "md-title"
	  }, [_vm._v(_vm._s(_vm.appName))])])]), _vm._v(" "), _c('div', {
	    staticClass: "toolbar-content"
	  }, [_c('div', {
	    staticClass: "sidebar-links"
	  }, [_c('md-list', {
	    staticClass: "md-dense"
	  }, [_c('md-list-item', [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/"
	    }
	  }, [_vm._v("Home")])], 1), _vm._v(" "), (_vm.isLoggedIn) ? _c('md-list-item', [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/files"
	    }
	  }, [_vm._v("Files")])], 1) : _vm._e(), _vm._v(" "), _c('md-list-item', [_c('router-link', {
	    attrs: {
	      "exact": "",
	      "to": "/about"
	    }
	  }, [_vm._v("About")])], 1), _vm._v(" "), _c('md-list-item', [_c('span', [_vm._v("Support")]), _vm._v(" "), _c('md-list-expand', [_c('md-list', [_c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "href": "https://github.com/0xFireball/VueJsCoreApp"
	    }
	  }, [_vm._v("\n                  GitHub\n                ")]), _vm._v(" "), _c('md-list-item', {
	    staticClass: "md-inset",
	    attrs: {
	      "href": "https://github.com/0xFireball"
	    }
	  }, [_vm._v("\n                  Donate\n                ")])], 1)], 1)], 1)], 1)], 1)])], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    directives: [{
	      name: "md-theme",
	      rawName: "v-md-theme",
	      value: ('apptheme'),
	      expression: "'apptheme'"
	    }]
	  }, [_c('toolbar'), _vm._v(" "), _c('transition', {
	    attrs: {
	      "name": "md-router"
	    }
	  }, [_c('router-view')], 1)], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ])));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2E5YmJjNjY1YWY2ZTNlYzgzODMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL21haW4uanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLXJvdXRlclwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvc2hyaW5rUGxhY2UudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZT81NjBhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZT85OTY3Iiwid2VicGFjazovLy8uL34vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzIiwid2VicGFjazovLy8uL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2xpc3RUb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyLmpzIiwid2VicGFjazovLy9zaHJpbmtQbGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW50cm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0ludHJvLnZ1ZT8xZjBmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0ludHJvLnZ1ZT9iZWRkIiwid2VicGFjazovLy9JbnRyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW50cm8udnVlPzhmYmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdXJsU2hyaW5rSW5wdXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3VybFNocmlua0lucHV0LnZ1ZT8yZDNmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3VybFNocmlua0lucHV0LnZ1ZT8zOWIyIiwid2VicGFjazovLy91cmxTaHJpbmtJbnB1dC52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy91cmxTaHJpbmtJbnB1dC52dWU/MDVkYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9kZXZDcmVkaXRzLnZ1ZT80ZDU3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlPzNmYmQiLCJ3ZWJwYWNrOi8vL2RldkNyZWRpdHMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlP2YyZDciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvc2hyaW5rUGxhY2UudnVlPzU3N2MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvc3RhdHNQbGFjZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvc3RhdHNQbGFjZS52dWU/NjRiYiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9zdGF0c1BsYWNlLnZ1ZT8zYjViIiwid2VicGFjazovLy9zdGF0c1BsYWNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRzVmlld2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRzVmlld2VyLnZ1ZT9mOTBhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3N0YXRpc3RpY3Mvc3RhdHNWaWV3ZXIudnVlPzU5OTEiLCJ3ZWJwYWNrOi8vL3N0YXRzVmlld2VyLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFydC5qc1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3N0YXRpc3RpY3Mvc3RhdHNWaWV3ZXIudnVlP2ViNmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvc3RhdHNQbGFjZS52dWU/M2Q3MCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlP2UzNmEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlP2NmNzMiLCJ3ZWJwYWNrOi8vL25vdEZvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWU/OTU5MCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzPzI3MzQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmYiLCJ3ZWJwYWNrOi8vLy4vfi9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcz84NjUxIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL21hdGVyaWFsLWljb25zLmNzcyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci50dGYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvbm9ybWFsaXplLmNzcz9jODQ4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3M/MjBhYSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtbWF0ZXJpYWxcIiIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3M/YTdmZSIsIndlYnBhY2s6Ly8vLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3MiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL0FwcC52dWU/YWEyZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT9lZTQzIiwid2VicGFjazovLy9BcHAudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1Rvb2xiYXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL1Rvb2xiYXIudnVlP2MwM2YiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvVG9vbGJhci52dWU/ODZkNCIsIndlYnBhY2s6Ly8vVG9vbGJhci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvVG9vbGJhci52dWU/ZTVhMiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvQXBwLnZ1ZT8xOTg5Il0sIm5hbWVzIjpbInVzZSIsInJvdXRlciIsInJvdXRlcyIsImFmdGVyRWFjaCIsImN1cnJlbnRSb3V0ZSIsIm1haW5Db250ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic2Nyb2xsVG9wIiwibWF0ZXJpYWwiLCJ0aGVtZSIsInJlZ2lzdGVyQWxsIiwiYXBwdGhlbWUiLCJwcmltYXJ5IiwiYWNjZW50IiwiWUFTQXBwIiwiY29tcG9uZW50IiwiYXBwIiwiZWwiLCJtYWluIiwicGF0aCIsIm5hbWUiLCJyZWRpcmVjdCIsImVycm9yIiwiY29uY2F0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtB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O0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSCxFQUFDO0FBQ0QsMkM7Ozs7OztBQzVEQSxpQkFBZ0IsbUJBQW1CLGFBQWEsMEJBQTBCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNILEVBQUM7QUFDRCwyQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgY2E5YmJjNjY1YWY2ZTNlYzgzODMiLCIvLyBUaGUgVnVlIGJ1aWxkIHZlcnNpb24gdG8gbG9hZCB3aXRoIHRoZSBgaW1wb3J0YCBjb21tYW5kXHJcbi8vIChydW50aW1lLW9ubHkgb3Igc3RhbmRhbG9uZSkgaGFzIGJlZW4gc2V0IGluIHdlYnBhY2suYmFzZS5jb25mIHdpdGggYW4gYWxpYXMuXHJcbmltcG9ydCBWdWUgZnJvbSAndnVlJ1xyXG4vLyBpbXBvcnQgQXBwIGZyb20gJy4vQXBwJ1xyXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3Z1ZS1yb3V0ZXInXHJcblxyXG4vLyBSb3V0ZXNcclxuaW1wb3J0IHJvdXRlcyBmcm9tICcuL3JvdXRlcydcclxuXHJcbi8vIFN0eWxlcy9mb250c1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9nbG9iYWwuY3NzJ1xyXG5pbXBvcnQgJy4vYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3MnXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3MnXHJcbmltcG9ydCAnLi9hc3NldHMvc3R5bGVzL2Zmc2tlbGV0b24uY3NzJ1xyXG5cclxuLy8gbWF0ZXJpYWxcclxuaW1wb3J0IFZ1ZU1hdGVyaWFsIGZyb20gJ3Z1ZS1tYXRlcmlhbCdcclxuaW1wb3J0ICd2dWUtbWF0ZXJpYWwvZGlzdC92dWUtbWF0ZXJpYWwuY3NzJ1xyXG5cclxuLy8gcGx1Z2luc1xyXG5WdWUudXNlKFZ1ZVJvdXRlcilcclxuVnVlLnVzZShWdWVNYXRlcmlhbClcclxuXHJcbi8vIHJvdXRlciBjb25maWdcclxuXHJcbmxldCByb3V0ZXIgPSBuZXcgVnVlUm91dGVyKHtcclxuICByb3V0ZXNcclxufSlcclxuXHJcbnJvdXRlci5hZnRlckVhY2goKGN1cnJlbnRSb3V0ZSkgPT4ge1xyXG4gIGxldCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQnKVxyXG5cclxuICBpZiAobWFpbkNvbnRlbnQpIHtcclxuICAgIG1haW5Db250ZW50LnNjcm9sbFRvcCA9IDBcclxuICB9XHJcbn0pXHJcblxyXG5WdWUubWF0ZXJpYWwudGhlbWUucmVnaXN0ZXJBbGwoe1xyXG4gIGFwcHRoZW1lOiB7XHJcbiAgICBwcmltYXJ5OiAndGVhbCcsXHJcbiAgICBhY2NlbnQ6ICdjeWFuJ1xyXG4gIH1cclxufSlcclxuXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcblxyXG5sZXQgWUFTQXBwID0gVnVlLmNvbXBvbmVudCgnYXBwJywgQXBwKVxyXG5cclxuLyogZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMgKi9cclxuY29uc3QgYXBwID0gbmV3IFlBU0FwcCh7XHJcbiAgZWw6ICcjYXBwJyxcclxuICByb3V0ZXJcclxufSlcclxuXHJcbi8vIC8qIGVzbGludC1kaXNhYmxlIG5vLW5ldyAqL1xyXG4vLyBuZXcgVnVlKHtcclxuLy8gICBlbDogJyNhcHAnLFxyXG4vLyAgIHRlbXBsYXRlOiAnPEFwcCAvPicsXHJcbi8vICAgY29tcG9uZW50czogeyBBcHAgfVxyXG4vLyB9KVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvbWFpbi5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZVwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1yb3V0ZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtcm91dGVyXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcbmltcG9ydCBTaHJpbmtQbGFjZSBmcm9tICcuL2xheW91dHMvc2hyaW5rUGxhY2UnXHJcbmltcG9ydCBTdGF0c1BsYWNlIGZyb20gJy4vbGF5b3V0cy9zdGF0c1BsYWNlJ1xyXG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9sYXlvdXRzL25vdEZvdW5kJ1xyXG5cclxuY29uc3QgbWFpbiA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBuYW1lOiAnbGFuZGluZycsXHJcbiAgICBjb21wb25lbnQ6IFNocmlua1BsYWNlXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnL3MvOnNyb3V0ZScsXHJcbiAgICBuYW1lOiAnc3RhdHN2aWV3JyxcclxuICAgIGNvbXBvbmVudDogU3RhdHNQbGFjZVxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy9ob21lJyxcclxuICAgIHJlZGlyZWN0OiAnLydcclxuICB9XHJcbl1cclxuXHJcbmNvbnN0IGVycm9yID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcqJyxcclxuICAgIG5hbWU6ICdlcnJvcicsXHJcbiAgICBjb21wb25lbnQ6IE5vdEZvdW5kXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBbXS5jb25jYXQobWFpbiwgZXJyb3IpXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9yb3V0ZXMuanMiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTJiYjNjODVlJnNjb3BlZD10cnVlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc2hyaW5rUGxhY2UudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3Nocmlua1BsYWNlLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yYmIzYzg1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc2hyaW5rUGxhY2UudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTJiYjNjODVlXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFxXZWIyLjBcXFxcVnVlSnNDb3JlQXBwXFxcXFZ1ZUpzQ29yZUFwcFxcXFxDbGllbnRBcHBcXFxcbGF5b3V0c1xcXFxzaHJpbmtQbGFjZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzaHJpbmtQbGFjZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmJiM2M4NWUmc2NvcGVkPXRydWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9zaHJpbmtQbGFjZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiZmQwZDk0MThcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYmIzYzg1ZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uc2hyaW5rLWxheW91dFtkYXRhLXYtMmJiM2M4NWVdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZT9jZGM2NDNlNlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNEJBO0VBQ0Esb0NBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcInNocmlua1BsYWNlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJzaHJpbmstbGF5b3V0XFxcIj5cXHJcXG4gICAgPCEtLTxpbWcgc3JjPVxcXCIuL2Fzc2V0cy9sb2dvLnBuZ1xcXCI+LS0+XFxyXFxuICAgIDxpbnRybz48L2ludHJvPlxcclxcbiAgICA8dXJsU2hyaW5rSW5wdXQ+PC91cmxTaHJpbmtJbnB1dD5cXHJcXG4gICAgPGRldkNyZWRpdHM+PC9kZXZDcmVkaXRzPlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm8nXFxyXFxuICBpbXBvcnQgdXJsU2hyaW5rSW5wdXQgZnJvbSAnLi4vY29tcG9uZW50cy91cmxTaHJpbmtJbnB1dCdcXHJcXG4gIGltcG9ydCBkZXZDcmVkaXRzIGZyb20gJy4uL2NvbXBvbmVudHMvZGV2Q3JlZGl0cydcXHJcXG5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgIEludHJvLFxcclxcbiAgICAgIHVybFNocmlua0lucHV0LFxcclxcbiAgICAgIGRldkNyZWRpdHNcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcblxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuc2hyaW5rLWxheW91dCB7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYmIzYzg1ZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBsaXN0VG9TdHlsZXMgPSByZXF1aXJlKCcuL2xpc3RUb1N0eWxlcycpXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHBhcmVudElkLCBsaXN0LCBpc1Byb2R1Y3Rpb24pIHtcbiAgaWYgKHR5cGVvZiBfX1ZVRV9TU1JfQ09OVEVYVF9fICE9PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBjb250ZXh0ID0gX19WVUVfU1NSX0NPTlRFWFRfX1xuICAgIHZhciBzdHlsZXMgPSBjb250ZXh0Ll9zdHlsZXNcblxuICAgIGlmICghc3R5bGVzKSB7XG4gICAgICBzdHlsZXMgPSBjb250ZXh0Ll9zdHlsZXMgPSB7fVxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGNvbnRleHQsICdzdHlsZXMnLCB7XG4gICAgICAgIGVudW1iZXJhYmxlOiB0cnVlLFxuICAgICAgICBnZXQgOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgY29udGV4dC5fcmVuZGVyZWRTdHlsZXMgfHxcbiAgICAgICAgICAgIChjb250ZXh0Ll9yZW5kZXJlZFN0eWxlcyA9IHJlbmRlclN0eWxlcyhzdHlsZXMpKVxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBsaXN0ID0gbGlzdFRvU3R5bGVzKHBhcmVudElkLCBsaXN0KVxuICAgIGlmIChpc1Byb2R1Y3Rpb24pIHtcbiAgICAgIGFkZFN0eWxlUHJvZChzdHlsZXMsIGxpc3QpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFkZFN0eWxlRGV2KHN0eWxlcywgbGlzdClcbiAgICB9XG4gIH1cbn1cblxuLy8gSW4gcHJvZHVjdGlvbiwgcmVuZGVyIGFzIGZldyBzdHlsZSB0YWdzIGFzIHBvc3NpYmxlLlxuLy8gKG1vc3RseSBiZWNhdXNlIElFOSBoYXMgYSBsaW1pdCBvbiBudW1iZXIgb2Ygc3R5bGUgdGFncylcbmZ1bmN0aW9uIGFkZFN0eWxlUHJvZCAoc3R5bGVzLCBsaXN0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBwYXJ0cyA9IGxpc3RbaV0ucGFydHNcbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICB2YXIgcGFydCA9IHBhcnRzW2pdXG4gICAgICAvLyBncm91cCBzdHlsZSB0YWdzIGJ5IG1lZGlhIHR5cGVzLlxuICAgICAgdmFyIGlkID0gcGFydC5tZWRpYSB8fCAnZGVmYXVsdCdcbiAgICAgIHZhciBzdHlsZSA9IHN0eWxlc1tpZF1cbiAgICAgIGlmIChzdHlsZSkge1xuICAgICAgICBzdHlsZS5pZHMucHVzaChwYXJ0LmlkKVxuICAgICAgICBzdHlsZS5jc3MgKz0gJ1xcbicgKyBwYXJ0LmNzc1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3R5bGVzW2lkXSA9IHtcbiAgICAgICAgICBpZHM6IFtwYXJ0LmlkXSxcbiAgICAgICAgICBjc3M6IHBhcnQuY3NzLFxuICAgICAgICAgIG1lZGlhOiBwYXJ0Lm1lZGlhXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gSW4gZGV2IHdlIHVzZSBpbmRpdmlkdWFsIHN0eWxlIHRhZyBmb3IgZWFjaCBtb2R1bGUgZm9yIGhvdC1yZWxvYWRcbi8vIGFuZCBzb3VyY2UgbWFwcy5cbmZ1bmN0aW9uIGFkZFN0eWxlRGV2IChzdHlsZXMsIGxpc3QpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhcnRzID0gbGlzdFtpXS5wYXJ0c1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgIHZhciBwYXJ0ID0gcGFydHNbal1cbiAgICAgIHN0eWxlc1twYXJ0LmlkXSA9IHtcbiAgICAgICAgaWRzOiBbcGFydC5pZF0sXG4gICAgICAgIGNzczogcGFydC5jc3MsXG4gICAgICAgIG1lZGlhOiBwYXJ0Lm1lZGlhXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbmRlclN0eWxlcyAoc3R5bGVzKSB7XG4gIHZhciBjc3MgPSAnJ1xuICBmb3IgKHZhciBrZXkgaW4gc3R5bGVzKSB7XG4gICAgdmFyIHN0eWxlID0gc3R5bGVzW2tleV1cbiAgICBjc3MgKz0gJzxzdHlsZSBkYXRhLXZ1ZS1zc3ItaWQ9XCInICsgc3R5bGUuaWRzLmpvaW4oJyAnKSArICdcIicgK1xuICAgICAgICAoc3R5bGUubWVkaWEgPyAoICcgbWVkaWE9XCInICsgc3R5bGUubWVkaWEgKyAnXCInICkgOiAnJykgKyAnPicgK1xuICAgICAgICBzdHlsZS5jc3MgKyAnPC9zdHlsZT4nXG4gIH1cbiAgcmV0dXJuIGNzc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyoqXG4gKiBUcmFuc2xhdGVzIHRoZSBsaXN0IGZvcm1hdCBwcm9kdWNlZCBieSBjc3MtbG9hZGVyIGludG8gc29tZXRoaW5nXG4gKiBlYXNpZXIgdG8gbWFuaXB1bGF0ZS5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBsaXN0VG9TdHlsZXMgKHBhcmVudElkLCBsaXN0KSB7XG4gIHZhciBzdHlsZXMgPSBbXVxuICB2YXIgbmV3U3R5bGVzID0ge31cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldXG4gICAgdmFyIGlkID0gaXRlbVswXVxuICAgIHZhciBjc3MgPSBpdGVtWzFdXG4gICAgdmFyIG1lZGlhID0gaXRlbVsyXVxuICAgIHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdXG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBpZDogcGFyZW50SWQgKyAnOicgKyBpLFxuICAgICAgY3NzOiBjc3MsXG4gICAgICBtZWRpYTogbWVkaWEsXG4gICAgICBzb3VyY2VNYXA6IHNvdXJjZU1hcFxuICAgIH1cbiAgICBpZiAoIW5ld1N0eWxlc1tpZF0pIHtcbiAgICAgIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7IGlkOiBpZCwgcGFydHM6IFtwYXJ0XSB9KVxuICAgIH0gZWxzZSB7XG4gICAgICBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydClcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHN0eWxlc1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyL2xpYi9saXN0VG9TdHlsZXMuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgcmF3U2NyaXB0RXhwb3J0cyxcbiAgY29tcGlsZWRUZW1wbGF0ZSxcbiAgc2NvcGVJZCxcbiAgY3NzTW9kdWxlc1xuKSB7XG4gIHZhciBlc01vZHVsZVxuICB2YXIgc2NyaXB0RXhwb3J0cyA9IHJhd1NjcmlwdEV4cG9ydHMgPSByYXdTY3JpcHRFeHBvcnRzIHx8IHt9XG5cbiAgLy8gRVM2IG1vZHVsZXMgaW50ZXJvcFxuICB2YXIgdHlwZSA9IHR5cGVvZiByYXdTY3JpcHRFeHBvcnRzLmRlZmF1bHRcbiAgaWYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBlc01vZHVsZSA9IHJhd1NjcmlwdEV4cG9ydHNcbiAgICBzY3JpcHRFeHBvcnRzID0gcmF3U2NyaXB0RXhwb3J0cy5kZWZhdWx0XG4gIH1cblxuICAvLyBWdWUuZXh0ZW5kIGNvbnN0cnVjdG9yIGV4cG9ydCBpbnRlcm9wXG4gIHZhciBvcHRpb25zID0gdHlwZW9mIHNjcmlwdEV4cG9ydHMgPT09ICdmdW5jdGlvbidcbiAgICA/IHNjcmlwdEV4cG9ydHMub3B0aW9uc1xuICAgIDogc2NyaXB0RXhwb3J0c1xuXG4gIC8vIHJlbmRlciBmdW5jdGlvbnNcbiAgaWYgKGNvbXBpbGVkVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IGNvbXBpbGVkVGVtcGxhdGUucmVuZGVyXG4gICAgb3B0aW9ucy5zdGF0aWNSZW5kZXJGbnMgPSBjb21waWxlZFRlbXBsYXRlLnN0YXRpY1JlbmRlckZuc1xuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gc2NvcGVJZFxuICB9XG5cbiAgLy8gaW5qZWN0IGNzc01vZHVsZXNcbiAgaWYgKGNzc01vZHVsZXMpIHtcbiAgICB2YXIgY29tcHV0ZWQgPSBvcHRpb25zLmNvbXB1dGVkIHx8IChvcHRpb25zLmNvbXB1dGVkID0ge30pXG4gICAgT2JqZWN0LmtleXMoY3NzTW9kdWxlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICB2YXIgbW9kdWxlID0gY3NzTW9kdWxlc1trZXldXG4gICAgICBjb21wdXRlZFtrZXldID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbW9kdWxlIH1cbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBlc01vZHVsZTogZXNNb2R1bGUsXG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplci5qc1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaHJpbmstbGF5b3V0XCI+XHJcbiAgICA8IS0tPGltZyBzcmM9XCIuL2Fzc2V0cy9sb2dvLnBuZ1wiPi0tPlxyXG4gICAgPGludHJvPjwvaW50cm8+XHJcbiAgICA8dXJsU2hyaW5rSW5wdXQ+PC91cmxTaHJpbmtJbnB1dD5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm8nXHJcbiAgaW1wb3J0IHVybFNocmlua0lucHV0IGZyb20gJy4uL2NvbXBvbmVudHMvdXJsU2hyaW5rSW5wdXQnXHJcbiAgaW1wb3J0IGRldkNyZWRpdHMgZnJvbSAnLi4vY29tcG9uZW50cy9kZXZDcmVkaXRzJ1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJbnRybyxcclxuICAgICAgdXJsU2hyaW5rSW5wdXQsXHJcbiAgICAgIGRldkNyZWRpdHNcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuc2hyaW5rLWxheW91dCB7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzJjM2U1MDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzaHJpbmtQbGFjZS52dWU/Y2RjNjQzZTYiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTA0YWZkMzhhJnNjb3BlZD10cnVlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW50cm8udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ludHJvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wNGFmZDM4YSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW50cm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTA0YWZkMzhhXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFxXZWIyLjBcXFxcVnVlSnNDb3JlQXBwXFxcXFZ1ZUpzQ29yZUFwcFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxJbnRyby52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBJbnRyby52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL0ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA0YWZkMzhhJnNjb3BlZD10cnVlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vSW50cm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcImVjODc3NTJhXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDRhZmQzOGEmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9JbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pbnRyb1tkYXRhLXYtMDRhZmQzOGFdIHtcXG4gIG1hcmdpbi10b3A6IDE1JTtcXG59XFxuLmFwcC10aXRsZVtkYXRhLXYtMDRhZmQzOGFdIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvSW50cm8udnVlP2U3MTQzMzU0XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFxQkE7RUFDQSxnQkFBQTtDQUNBO0FBRUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiSW50cm8udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImludHJvXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8aDEgY2xhc3M9XFxcImFwcC10aXRsZVxcXCI+e3sgYXBwVGl0bGUgfX08L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbmFtZTogJ2ludHJvJyxcXHJcXG4gICAgZGF0YSgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgYXBwVGl0bGU6ICdWdWVKc0NvcmVBcHAgYnkgZG90bmF0Y29yZScsXFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPCEtLSBBZGQgXFxcInNjb3BlZFxcXCIgYXR0cmlidXRlIHRvIGxpbWl0IENTUyB0byB0aGlzIGNvbXBvbmVudCBvbmx5IC0tPlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICAuaW50cm8ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxNSU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYXBwLXRpdGxlIHtcXHJcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wNGFmZDM4YSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL0ludHJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJpbnRyb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8aDEgY2xhc3M9XCJhcHAtdGl0bGVcIj57eyBhcHBUaXRsZSB9fTwvaDE+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2ludHJvJyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXBwVGl0bGU6ICdWdWVKc0NvcmVBcHAgYnkgZG90bmF0Y29yZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPCEtLSBBZGQgXCJzY29wZWRcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmludHJvIHtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICB9XHJcblxyXG4gIC5hcHAtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gSW50cm8udnVlP2U3MTQzMzU0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaW50cm9cIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2gxJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImFwcC10aXRsZVwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBUaXRsZSkpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTA0YWZkMzhhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9JbnRyby52dWVcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzNlY2RhMDQmc2NvcGVkPXRydWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91cmxTaHJpbmtJbnB1dC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXJsU2hyaW5rSW5wdXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTczZWNkYTA0IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91cmxTaHJpbmtJbnB1dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNzNlY2RhMDRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXFdlYjIuMFxcXFxWdWVKc0NvcmVBcHBcXFxcVnVlSnNDb3JlQXBwXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHVybFNocmlua0lucHV0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHVybFNocmlua0lucHV0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdXJsU2hyaW5rSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzNlY2RhMDQmc2NvcGVkPXRydWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91cmxTaHJpbmtJbnB1dC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMzExZGU1YzVcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03M2VjZGEwNCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3VybFNocmlua0lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInVybFNocmlua0lucHV0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03M2VjZGEwNCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3VybFNocmlua0lucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJ1cmxTaHJpbmtJbnB1dFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVpZ2h0IGNvbHVtbnMgb2Zmc2V0LWJ5LXR3b1wiPlxyXG4gICAgICAgICAgPGg0PlNocmluayBhIFVSTDwvaDQ+XHJcbiAgICAgICAgICA8Zm9ybSBub3ZhbGlkYXRlIEBzdWJtaXQuc3RvcC5wcmV2ZW50PVwic2hyaW5rVXJsXCI+XHJcbiAgICAgICAgICAgIDxtZC1pbnB1dC1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgPGxhYmVsPlRhcmdldCBVUkw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxtZC1pbnB1dCB0eXBlPVwidXJsXCIgcGxhY2Vob2xkZXI9XCJodHRwOi8vZXhhbXBsZS5jb20vXCIgdi1tb2RlbD1cInRVcmxcIj48L21kLWlucHV0PlxyXG4gICAgICAgICAgICA8L21kLWlucHV0LWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiBjbGFzcz1cImludmlzaWJsZVwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVwic3BhY2UtdiBtZC1yYWlzZWQgbWQtcHJpbWFyeVwiIDpkaXNhYmxlZD1cIiFzaHJpbmtFbmFibGVkXCIgdi1vbjpjbGljaz1cInNocmlua1VybFwiPlNocmluazwvbWQtYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxtZC1kaWFsb2ctYWxlcnQgOm1kLWNvbnRlbnQtaHRtbD1cImNvbXBsZXRlZEFsZXJ0LmNvbnRlbnRcIiA6bWQtb2stdGV4dD1cImNvbXBsZXRlZEFsZXJ0Lm9rXCIgcmVmPVwiY29tcGxldGVkRGlhbG9nXCI+XHJcbiAgICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5sZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiAndXJsU2hyaW5rSW5wdXQnLFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdFVybDogJycsXHJcbiAgICAgIHNocmlua0VuYWJsZWQ6IHRydWUsXHJcbiAgICAgIGNvbXBsZXRlZEFsZXJ0OiB7XHJcbiAgICAgICAgY29udGVudDogJy4nLFxyXG4gICAgICAgIG9rOiAnQ29vbCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2hyaW5rVXJsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIHNocmluayB0aGUgdXJsXHJcbiAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgdm0uc2hyaW5rRW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgIHZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQgPSAnPGgzPkxvYWRpbmc8L2gzPidcclxuXHJcbiAgICAgIC8vIGJhc2ljIHZhbGlkYXRlXHJcbiAgICAgIGlmICghdm0udFVybCkge1xyXG4gICAgICAgIHZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQgPSAnPGgyPkVycm9yPC9oMj48cD5VUkwgY2Fubm90IGJlIGVtcHR5LjwvcD4nXHJcbiAgICAgICAgdm0uJHJlZnMuY29tcGxldGVkRGlhbG9nLm9wZW4oKTtcclxuICAgICAgICB2bS5zaHJpbmtFbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcblxyXG4gICAgICBheGlvcy5wb3N0KCcveC9zaHJpbmsnLCB7XHJcbiAgICAgICAgdXJsOiB2bS50VXJsXHJcbiAgICAgIH0sIGF4aW9zUmVxdWVzdENvbmZpZylcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAvLyBzdWNjZXNzXHJcbiAgICAgICAgICAgIGxldCBzaHJ1bmtVcmxJbmZvID0gcmVzcG9uc2UuZGF0YS5zaHJ1bmtVcmxcclxuICAgICAgICAgICAgbGV0IHNocnVua0xpbmsgPSBzaHJ1bmtVcmxJbmZvLnNocnVua1BhdGhcclxuICAgICAgICAgICAgbGV0IHNocnVua0xpbmtVcmwgPSB3aW5kb3cuZG9jdW1lbnQubG9jYXRpb24ub3JpZ2luICsgJy9yLycgKyBzaHJ1bmtMaW5rXHJcbiAgICAgICAgICAgIHZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQgPSAnPGgyPkNvbmdyYXR1bGF0aW9ucyE8L2gyPjxwPkxpbmsgaGFzIGJlZW4gc2hydW5rITwvcD48Y29kZT4nIFxyXG4gICAgICAgICAgICAgICsgc2hydW5rTGlua1VybFxyXG4gICAgICAgICAgICAgICsgJzwvY29kZT4nXHJcbiAgICAgICAgICAgIHZtLiRyZWZzLmNvbXBsZXRlZERpYWxvZy5vcGVuKCk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICAgIC8vIGJhZCByZXF1ZXN0XHJcbiAgICAgICAgICAgIHZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQgPSAnPGgyPkVycm9yPC9oMj48cD5QbGVhc2UgbWFrZSBzdXJlIHRoZSBVUkwgaXMgdmFsaWQuPC9wPidcclxuICAgICAgICAgICAgdm0uJHJlZnMuY29tcGxldGVkRGlhbG9nLm9wZW4oKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHd0Zj9cclxuICAgICAgICAgICAgdm0uY29tcGxldGVkQWxlcnQuY29udGVudCA9ICc8aDI+RXJyb3I8L2gyPjxwPlVucmVjb2duaXplZCByZXNwb25zZSBmcm9tIHNlcnZlci48L3A+J1xyXG4gICAgICAgICAgICB2bS4kcmVmcy5jb21wbGV0ZWREaWFsb2cub3BlbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdm0uc2hyaW5rRW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgdm0uY29tcGxldGVkQWxlcnQuY29udGVudCA9ICc8aDI+RXJyb3I8L2gyPjxwPkVycm9yIGNvbW11bmljYXRpbmcgd2l0aCBzZXJ2ZXIuPC9wPidcclxuICAgICAgICAgICAgdm0uJHJlZnMuY29tcGxldGVkRGlhbG9nLm9wZW4oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHZtLnNocmlua0VuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdXJsU2hyaW5rSW5wdXQudnVlPzY2YTRjZTE3IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJheGlvc1wiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ1cmxTaHJpbmtJbnB1dFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVpZ2h0IGNvbHVtbnMgb2Zmc2V0LWJ5LXR3b1wiXG4gIH0sIFtfYygnaDQnLCBbX3ZtLl92KFwiU2hyaW5rIGEgVVJMXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdmb3JtJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcIm5vdmFsaWRhdGVcIjogXCJcIlxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwic3VibWl0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdm0uc2hyaW5rVXJsKCRldmVudClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnbWQtaW5wdXQtY29udGFpbmVyJywgW19jKCdsYWJlbCcsIFtfdm0uX3YoXCJUYXJnZXQgVVJMXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1pbnB1dCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwidXJsXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiaHR0cDovL2V4YW1wbGUuY29tL1wiXG4gICAgfSxcbiAgICBtb2RlbDoge1xuICAgICAgdmFsdWU6IChfdm0udFVybCksXG4gICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgIF92bS50VXJsID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJ0VXJsXCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdpbnB1dCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpbnZpc2libGVcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwic3VibWl0XCJcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1idXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3BhY2UtdiBtZC1yYWlzZWQgbWQtcHJpbWFyeVwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImRpc2FibGVkXCI6ICFfdm0uc2hyaW5rRW5hYmxlZFxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnNocmlua1VybFxuICAgIH1cbiAgfSwgW192bS5fdihcIlNocmlua1wiKV0pXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWRpYWxvZy1hbGVydCcsIHtcbiAgICByZWY6IFwiY29tcGxldGVkRGlhbG9nXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwibWQtY29udGVudC1odG1sXCI6IF92bS5jb21wbGV0ZWRBbGVydC5jb250ZW50LFxuICAgICAgXCJtZC1vay10ZXh0XCI6IF92bS5jb21wbGV0ZWRBbGVydC5va1xuICAgIH1cbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTczZWNkYTA0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy91cmxTaHJpbmtJbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtN2E0NmY0MTImc2NvcGVkPXRydWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03YTQ2ZjQxMiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vZGV2Q3JlZGl0cy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtN2E0NmY0MTJcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkU6XFxcXFdlYjIuMFxcXFxWdWVKc0NvcmVBcHBcXFxcVnVlSnNDb3JlQXBwXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGRldkNyZWRpdHMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gZGV2Q3JlZGl0cy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2RldkNyZWRpdHMudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2E0NmY0MTImc2NvcGVkPXRydWUhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9kZXZDcmVkaXRzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJjM2M2OWQ5Y1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhNDZmNDEyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kZXZDcmVkaXRzW2RhdGEtdi03YTQ2ZjQxMl0ge1xcbiAgbWFyZ2luOiAyJTtcXG59XFxuaDYuY3JlZGl0LXRleHRbZGF0YS12LTdhNDZmNDEyXSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWU/MmY0YjBmZjVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWlCQTtFQUNBLFdBQUE7Q0FDQTtBQUVBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiZGV2Q3JlZGl0cy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiZGV2Q3JlZGl0c1xcXCI+XFxyXFxuICAgIDxoNiBjbGFzcz1cXFwiY3JlZGl0LXRleHRcXFwiPk1hZGUgYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly8weGZpcmViYWxsLm1lXFxcIiB0YXJnZXQ9XFxcIl9ibGFua1xcXCI+MHhGaXJlYmFsbDwvYT48L2g2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gIG5hbWU6ICdkZXZDcmVkaXRzJyxcXHJcXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmRldkNyZWRpdHMge1xcclxcbiAgICBtYXJnaW46IDIlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICBoNi5jcmVkaXQtdGV4dCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdhNDZmNDEyJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZGV2Q3JlZGl0c1wiPlxyXG4gICAgPGg2IGNsYXNzPVwiY3JlZGl0LXRleHRcIj5NYWRlIGJ5IDxhIGhyZWY9XCJodHRwczovLzB4ZmlyZWJhbGwubWVcIiB0YXJnZXQ9XCJfYmxhbmtcIj4weEZpcmViYWxsPC9hPjwvaDY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ2RldkNyZWRpdHMnLFxyXG4gIGRhdGE6IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAuZGV2Q3JlZGl0cyB7XHJcbiAgICBtYXJnaW46IDIlO1xyXG4gIH1cclxuICBcclxuICBoNi5jcmVkaXQtdGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZGV2Q3JlZGl0cy52dWU/MmY0YjBmZjUiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX3ZtLl9tKDApXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJkZXZDcmVkaXRzXCJcbiAgfSwgW19jKCdoNicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjcmVkaXQtdGV4dFwiXG4gIH0sIFtfdm0uX3YoXCJNYWRlIGJ5IFwiKSwgX2MoJ2EnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaHJlZlwiOiBcImh0dHBzOi8vMHhmaXJlYmFsbC5tZVwiLFxuICAgICAgXCJ0YXJnZXRcIjogXCJfYmxhbmtcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIjB4RmlyZWJhbGxcIildKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03YTQ2ZjQxMiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvZGV2Q3JlZGl0cy52dWVcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInNocmluay1sYXlvdXRcIlxuICB9LCBbX2MoJ2ludHJvJyksIF92bS5fdihcIiBcIiksIF9jKCd1cmxTaHJpbmtJbnB1dCcpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGV2Q3JlZGl0cycpXSwgMSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMmJiM2M4NWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3Nocmlua1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yYzdlZDliNiZzY29wZWQ9dHJ1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3N0YXRzUGxhY2UudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3N0YXRzUGxhY2UudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTJjN2VkOWI2IS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9zdGF0c1BsYWNlLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0yYzdlZDliNlwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcV2ViMi4wXFxcXFZ1ZUpzQ29yZUFwcFxcXFxWdWVKc0NvcmVBcHBcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcc3RhdHNQbGFjZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBzdGF0c1BsYWNlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2xheW91dHMvc3RhdHNQbGFjZS52dWVcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzdlZDliNiZzY29wZWQ9dHJ1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3N0YXRzUGxhY2UudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjZiMjk1YTQ4XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMmM3ZWQ5YjYmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9zdGF0c1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnN0YXRzLWxheW91dFtkYXRhLXYtMmM3ZWQ5YjZdIHtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgbWFyZ2luLXRvcDogNjBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9sYXlvdXRzL3N0YXRzUGxhY2UudnVlPzY4ODZlZjZkXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUEyQkE7RUFDQSxvQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwic3RhdHNQbGFjZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3RhdHMtbGF5b3V0XFxcIj5cXHJcXG4gICAgPGludHJvPjwvaW50cm8+XFxyXFxuICAgIDxzdGF0c1ZpZXdlcj48L3N0YXRzVmlld2VyPlxcclxcbiAgICA8ZGV2Q3JlZGl0cz48L2RldkNyZWRpdHM+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgSW50cm8gZnJvbSAnLi4vY29tcG9uZW50cy9JbnRybydcXHJcXG4gIGltcG9ydCBzdGF0c1ZpZXdlciBmcm9tICcuLi9jb21wb25lbnRzL3N0YXRpc3RpY3Mvc3RhdHNWaWV3ZXInXFxyXFxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXFxyXFxuXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIGRhdGEoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICBJbnRybyxcXHJcXG4gICAgICBzdGF0c1ZpZXdlcixcXHJcXG4gICAgICBkZXZDcmVkaXRzXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLnN0YXRzLWxheW91dCB7XFxyXFxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcclxcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGNvbG9yOiAjMmMzZTUwO1xcclxcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yYzdlZDliNiZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL3N0YXRzUGxhY2UudnVlXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInN0YXRzLWxheW91dFwiPlxyXG4gICAgPGludHJvPjwvaW50cm8+XHJcbiAgICA8c3RhdHNWaWV3ZXI+PC9zdGF0c1ZpZXdlcj5cclxuICAgIDxkZXZDcmVkaXRzPjwvZGV2Q3JlZGl0cz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm8nXHJcbiAgaW1wb3J0IHN0YXRzVmlld2VyIGZyb20gJy4uL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0c1ZpZXdlcidcclxuICBpbXBvcnQgZGV2Q3JlZGl0cyBmcm9tICcuLi9jb21wb25lbnRzL2RldkNyZWRpdHMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIEludHJvLFxyXG4gICAgICBzdGF0c1ZpZXdlcixcclxuICAgICAgZGV2Q3JlZGl0c1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5zdGF0cy1sYXlvdXQge1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMyYzNlNTA7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RhdHNQbGFjZS52dWU/Njg4NmVmNmQiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTBkNGVlOGQ3JnNjb3BlZD10cnVlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vc3RhdHNWaWV3ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3N0YXRzVmlld2VyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0wZDRlZThkNyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vc3RhdHNWaWV3ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTBkNGVlOGQ3XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFxXZWIyLjBcXFxcVnVlSnNDb3JlQXBwXFxcXFZ1ZUpzQ29yZUFwcFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxzdGF0aXN0aWNzXFxcXHN0YXRzVmlld2VyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHN0YXRzVmlld2VyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0c1ZpZXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wZDRlZThkNyZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3N0YXRzVmlld2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIzMzAzYjk0N1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTBkNGVlOGQ3JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0c1ZpZXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNsaW5lLWNoYXJ0W2RhdGEtdi0wZDRlZThkN10ge1xcclxcbiAgaGVpZ2h0OiA0MDBweDtcXG59IFxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRzVmlld2VyLnZ1ZT9jNmJjYzE2MFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOEdBO0VBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJzdGF0c1ZpZXdlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwic3RhdHMtdmlld2VyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY29udGFpbmVyXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdlbHZlIGNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjaGFydC1ob3N0XFxcIj5cXHJcXG4gICAgICAgICAgICA8Y2FudmFzIGlkPVxcXCJ0cmFmZmljQ2hhcnRcXFwiIHdpZHRoPVxcXCI0MDBcXFwiIGhlaWdodD1cXFwiNDAwXFxcIj48L2NhbnZhcz5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxtZC1kaWFsb2ctYWxlcnQgOm1kLWNvbnRlbnQtaHRtbD1cXFwiY29tcGxldGVkQWxlcnQuY29udGVudFxcXCIgOm1kLW9rLXRleHQ9XFxcImNvbXBsZXRlZEFsZXJ0Lm9rXFxcIiByZWY9XFxcImNvbXBsZXRlZERpYWxvZ1xcXCI+XFxyXFxuICAgIDwvbWQtZGlhbG9nLWFsZXJ0PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcblxcclxcbiAgaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xcclxcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xcclxcblxcclxcbiAgbGV0IGF4aW9zUmVxdWVzdENvbmZpZyA9IHtcXHJcXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcXHJcXG4gICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBkYXRhKCkge1xcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICBzdGF0czoge1xcclxcbiAgICAgICAgICBkYXRhOiB7fSxcXHJcXG4gICAgICAgICAgb3B0aW9uczoge1xcclxcbiAgICAgICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxcclxcbiAgICAgICAgICAgIHNjYWxlczoge1xcclxcbiAgICAgICAgICAgICAgeUF4ZXM6IFt7XFxyXFxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XFxyXFxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDFcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgICAgfV0sXFxyXFxuICAgICAgICAgICAgICB4QXhlczogW3tcXHJcXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcXHJcXG4gICAgICAgICAgICAgICAgICBzdGVwU2l6ZTogMSxcXHJcXG4gICAgICAgICAgICAgICAgICBtaW46IDAsXFxyXFxuICAgICAgICAgICAgICAgICAgbWF4OiA3XFxyXFxuICAgICAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcXHJcXG4gICAgICAgICAgICAgIH1dXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgY29tcGxldGVkQWxlcnQ6IHtcXHJcXG4gICAgICAgICAgY29udGVudDogJy4nLFxcclxcbiAgICAgICAgICBvazogJ0Nvb2wnXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtb3VudGVkKCkge1xcclxcbiAgICAgIGxldCB2bSA9IHRoaXNcXHJcXG4gICAgICAvLyBnZXQgc2hyaW5rIHJvdXRlXFxyXFxuICAgICAgbGV0IHNocmlua1JvdXRlID0gdm0uJHJvdXRlLnBhcmFtcy5zcm91dGVcXHJcXG4gICAgICAvLyBnZXQgZGF0YSBmcm9tIHNlcnZlclxcclxcbiAgICAgIGF4aW9zLmdldCgnL3gvc3RhdHMvJyArIHNocmlua1JvdXRlLFxcclxcbiAgICAgICAgYXhpb3NSZXF1ZXN0Q29uZmlnKVxcclxcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xcclxcbiAgICAgICAgICAgIC8vIHN1Y2Nlc3NcXHJcXG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNzQnVuZGxlID0gcmVzcG9uc2UuZGF0YVxcclxcbiAgICAgICAgICAgIC8vIHNldCB1cCBjaGFydHNcXHJcXG4gICAgICAgICAgICB2bS5zdGF0cy5kYXRhID0ge1xcclxcbiAgICAgICAgICAgICAgbGFiZWxzOiBbJzZkIGFnbycsICc1ZCBhZ28nLCAnNGQgYWdvJywgJzNkIGFnbycsICcyZCBhZ28nLCAnMWQgYWdvJywgJ3RvZGF5J10sXFxyXFxuICAgICAgICAgICAgICBkYXRhc2V0czogW1xcclxcbiAgICAgICAgICAgICAgICB7XFxyXFxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYWlseSBUcmFmZmljIChWaXNpdHMpJyxcXHJcXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjg3OTc5JyxcXHJcXG4gICAgICAgICAgICAgICAgICBkYXRhOiBhbmFseXRpY3NCdW5kbGUuZGF5U29ydGVkRXZlbnRzLm1hcChlID0+IGUubGVuZ3RoKVxcclxcbiAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICBdXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFuYWx5dGljc0J1bmRsZS5kYXlTb3J0ZWRFdmVudHMpXFxyXFxuICAgICAgICAgICAgdmFyIGN0eCA9IFxcXCJ0cmFmZmljQ2hhcnRcXFwiXFxyXFxuICAgICAgICAgICAgdmFyIG15TGluZUNoYXJ0ID0gQ2hhcnQuTGluZShjdHgsIHtcXHJcXG4gICAgICAgICAgICAgIGRhdGE6IHZtLnN0YXRzLmRhdGEsXFxyXFxuICAgICAgICAgICAgICBvcHRpb25zOiB2bS5zdGF0cy5vcHRpb25zXFxyXFxuICAgICAgICAgICAgfSk7XFxyXFxuXFxyXFxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcXHJcXG4gICAgICAgICAgICAvLyBiYWQgcmVxdWVzdFxcclxcbiAgICAgICAgICAgIHZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQgPSAnPGgyPkVycm9yPC9oMj48cD5QbGVhc2UgbWFrZSBzdXJlIHRoZSBVUkwgaXMgdmFsaWQuPC9wPidcXHJcXG4gICAgICAgICAgICB2bS4kcmVmcy5jb21wbGV0ZWREaWFsb2cub3BlbigpO1xcclxcbiAgICAgICAgICB9IGVsc2Uge1xcclxcbiAgICAgICAgICAgIC8vIHd0Zj9cXHJcXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRBbGVydC5jb250ZW50ID0gJzxoMj5FcnJvcjwvaDI+PHA+VW5yZWNvZ25pemVkIHJlc3BvbnNlIGZyb20gc2VydmVyLjwvcD4nXFxyXFxuICAgICAgICAgICAgdm0uJHJlZnMuY29tcGxldGVkRGlhbG9nLm9wZW4oKTtcXHJcXG4gICAgICAgICAgfVxcclxcbiAgICAgICAgICB2bS5zaHJpbmtFbmFibGVkID0gdHJ1ZVxcclxcbiAgICAgICAgfSlcXHJcXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcXHJcXG4gICAgICAgICAgaWYgKGVycm9yKSB7XFxyXFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IpXFxyXFxuICAgICAgICAgICAgdm0uY29tcGxldGVkQWxlcnQuY29udGVudCA9ICc8aDI+RXJyb3I8L2gyPjxwPkVycm9yIGNvbW11bmljYXRpbmcgd2l0aCBzZXJ2ZXIuPC9wPidcXHJcXG4gICAgICAgICAgICB2bS4kcmVmcy5jb21wbGV0ZWREaWFsb2cub3BlbigpO1xcclxcbiAgICAgICAgICB9XFxyXFxuICAgICAgICAgIHZtLnNocmlua0VuYWJsZWQgPSB0cnVlXFxyXFxuICAgICAgICB9KVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4jbGluZS1jaGFydCB7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn0gXFxyXFxuPC9zdHlsZT5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTBkNGVlOGQ3JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvc3RhdGlzdGljcy9zdGF0c1ZpZXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwic3RhdHMtdmlld2VyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHdlbHZlIGNvbHVtbnNcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGFydC1ob3N0XCI+XHJcbiAgICAgICAgICAgIDxjYW52YXMgaWQ9XCJ0cmFmZmljQ2hhcnRcIiB3aWR0aD1cIjQwMFwiIGhlaWdodD1cIjQwMFwiPjwvY2FudmFzPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8bWQtZGlhbG9nLWFsZXJ0IDptZC1jb250ZW50LWh0bWw9XCJjb21wbGV0ZWRBbGVydC5jb250ZW50XCIgOm1kLW9rLXRleHQ9XCJjb21wbGV0ZWRBbGVydC5va1wiIHJlZj1cImNvbXBsZXRlZERpYWxvZ1wiPlxyXG4gICAgPC9tZC1kaWFsb2ctYWxlcnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG5cclxuICBsZXQgYXhpb3NSZXF1ZXN0Q29uZmlnID0ge1xyXG4gICAgdmFsaWRhdGVTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgcmV0dXJuIHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgNTAwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXRzOiB7XHJcbiAgICAgICAgICBkYXRhOiB7fSxcclxuICAgICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgICAgbWFpbnRhaW5Bc3BlY3RSYXRpbzogZmFsc2UsXHJcbiAgICAgICAgICAgIHNjYWxlczoge1xyXG4gICAgICAgICAgICAgIHlBeGVzOiBbe1xyXG4gICAgICAgICAgICAgICAgdGlja3M6IHtcclxuICAgICAgICAgICAgICAgICAgc3RlcFNpemU6IDFcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgICB4QXhlczogW3tcclxuICAgICAgICAgICAgICAgIHRpY2tzOiB7XHJcbiAgICAgICAgICAgICAgICAgIHN0ZXBTaXplOiAxLFxyXG4gICAgICAgICAgICAgICAgICBtaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgIG1heDogN1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRydWVcclxuICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb21wbGV0ZWRBbGVydDoge1xyXG4gICAgICAgICAgY29udGVudDogJy4nLFxyXG4gICAgICAgICAgb2s6ICdDb29sJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgLy8gZ2V0IHNocmluayByb3V0ZVxyXG4gICAgICBsZXQgc2hyaW5rUm91dGUgPSB2bS4kcm91dGUucGFyYW1zLnNyb3V0ZVxyXG4gICAgICAvLyBnZXQgZGF0YSBmcm9tIHNlcnZlclxyXG4gICAgICBheGlvcy5nZXQoJy94L3N0YXRzLycgKyBzaHJpbmtSb3V0ZSxcclxuICAgICAgICBheGlvc1JlcXVlc3RDb25maWcpXHJcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgLy8gc3VjY2Vzc1xyXG4gICAgICAgICAgICBsZXQgYW5hbHl0aWNzQnVuZGxlID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgICAvLyBzZXQgdXAgY2hhcnRzXHJcbiAgICAgICAgICAgIHZtLnN0YXRzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgbGFiZWxzOiBbJzZkIGFnbycsICc1ZCBhZ28nLCAnNGQgYWdvJywgJzNkIGFnbycsICcyZCBhZ28nLCAnMWQgYWdvJywgJ3RvZGF5J10sXHJcbiAgICAgICAgICAgICAgZGF0YXNldHM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYWlseSBUcmFmZmljIChWaXNpdHMpJyxcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2Y4Nzk3OScsXHJcbiAgICAgICAgICAgICAgICAgIGRhdGE6IGFuYWx5dGljc0J1bmRsZS5kYXlTb3J0ZWRFdmVudHMubWFwKGUgPT4gZS5sZW5ndGgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGFuYWx5dGljc0J1bmRsZS5kYXlTb3J0ZWRFdmVudHMpXHJcbiAgICAgICAgICAgIHZhciBjdHggPSBcInRyYWZmaWNDaGFydFwiXHJcbiAgICAgICAgICAgIHZhciBteUxpbmVDaGFydCA9IENoYXJ0LkxpbmUoY3R4LCB7XHJcbiAgICAgICAgICAgICAgZGF0YTogdm0uc3RhdHMuZGF0YSxcclxuICAgICAgICAgICAgICBvcHRpb25zOiB2bS5zdGF0cy5vcHRpb25zXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApIHtcclxuICAgICAgICAgICAgLy8gYmFkIHJlcXVlc3RcclxuICAgICAgICAgICAgdm0uY29tcGxldGVkQWxlcnQuY29udGVudCA9ICc8aDI+RXJyb3I8L2gyPjxwPlBsZWFzZSBtYWtlIHN1cmUgdGhlIFVSTCBpcyB2YWxpZC48L3A+J1xyXG4gICAgICAgICAgICB2bS4kcmVmcy5jb21wbGV0ZWREaWFsb2cub3BlbigpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gd3RmP1xyXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRBbGVydC5jb250ZW50ID0gJzxoMj5FcnJvcjwvaDI+PHA+VW5yZWNvZ25pemVkIHJlc3BvbnNlIGZyb20gc2VydmVyLjwvcD4nXHJcbiAgICAgICAgICAgIHZtLiRyZWZzLmNvbXBsZXRlZERpYWxvZy5vcGVuKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB2bS5zaHJpbmtFbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgICAgICAgICB2bS5jb21wbGV0ZWRBbGVydC5jb250ZW50ID0gJzxoMj5FcnJvcjwvaDI+PHA+RXJyb3IgY29tbXVuaWNhdGluZyB3aXRoIHNlcnZlci48L3A+J1xyXG4gICAgICAgICAgICB2bS4kcmVmcy5jb21wbGV0ZWREaWFsb2cub3BlbigpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdm0uc2hyaW5rRW5hYmxlZCA9IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4jbGluZS1jaGFydCB7XHJcbiAgaGVpZ2h0OiA0MDBweDtcclxufSBcclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3RhdHNWaWV3ZXIudnVlP2M2YmNjMTYwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhcnQuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFydC5qc1wiXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGF0cy12aWV3ZXJcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtZGlhbG9nLWFsZXJ0Jywge1xuICAgIHJlZjogXCJjb21wbGV0ZWREaWFsb2dcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJtZC1jb250ZW50LWh0bWxcIjogX3ZtLmNvbXBsZXRlZEFsZXJ0LmNvbnRlbnQsXG4gICAgICBcIm1kLW9rLXRleHRcIjogX3ZtLmNvbXBsZXRlZEFsZXJ0Lm9rXG4gICAgfVxuICB9KV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0d2VsdmUgY29sdW1uc1wiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNoYXJ0LWhvc3RcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInRyYWZmaWNDaGFydFwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjQwMFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCI0MDBcIlxuICAgIH1cbiAgfSldKV0pXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBkNGVlOGQ3IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9zdGF0aXN0aWNzL3N0YXRzVmlld2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwic3RhdHMtbGF5b3V0XCJcbiAgfSwgW19jKCdpbnRybycpLCBfdm0uX3YoXCIgXCIpLCBfYygnc3RhdHNWaWV3ZXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RldkNyZWRpdHMnKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTJjN2VkOWI2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9zdGF0c1BsYWNlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wYjQ4NjVhYyZzY29wZWQ9dHJ1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ub3RGb3VuZC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMGI0ODY1YWMhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0wYjQ4NjVhY1wiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcV2ViMi4wXFxcXFZ1ZUpzQ29yZUFwcFxcXFxWdWVKc0NvcmVBcHBcXFxcQ2xpZW50QXBwXFxcXGxheW91dHNcXFxcbm90Rm91bmQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbm90Rm91bmQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wYjQ4NjVhYyZzY29wZWQ9dHJ1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL25vdEZvdW5kLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI0NjY3MGZiOFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTBiNDg2NWFjJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubm90LWZvdW5kLWNvbnRlbnRbZGF0YS12LTBiNDg2NWFjXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2xheW91dHMvbm90Rm91bmQudnVlPzJiZWUxNDI4XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErQkE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIm5vdEZvdW5kLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJub3QtZm91bmRcXFwiPlxcclxcbiAgICA8ZGl2IGlkPVxcXCJhcHBcXFwiIGNsYXNzPVxcXCJjb250YWluZXJcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCIgaWQ9XFxcImludHJvLWFyZWFcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidHdlbHZlIGNvbHVtbnNcXFwiPlxcclxcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcIm5vdC1mb3VuZC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxcclxcbiAgICAgICAgPGgzPlRoZSBwYWdlIHlvdSB3ZXJlIGxvb2tpbmcgZm9yIGNvdWxkbid0IGJlIGZvdW5kLjwvaDM+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBJbnRybyBmcm9tICcuLi9jb21wb25lbnRzL0ludHJvJ1xcclxcblxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gIGRhdGEgKCkge1xcclxcbiAgICByZXR1cm4ge1xcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgY29tcG9uZW50czoge1xcclxcbiAgICBJbnRyb1xcclxcbiAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLm5vdC1mb3VuZC1jb250ZW50IHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wYjQ4NjVhYyZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9sYXlvdXRzL25vdEZvdW5kLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJub3QtZm91bmRcIj5cclxuICAgIDxkaXYgaWQ9XCJhcHBcIiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCIgaWQ9XCJpbnRyby1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInR3ZWx2ZSBjb2x1bW5zXCI+XHJcbiAgICAgICAgICA8aW50cm8+PC9pbnRybz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub3QtZm91bmQtY29udGVudFwiPlxyXG4gICAgICAgIDxoMT40MDQuIFRoYXQncyBhbiBlcnJvci48L2gxPlxyXG4gICAgICAgIDxoMz5UaGUgcGFnZSB5b3Ugd2VyZSBsb29raW5nIGZvciBjb3VsZG4ndCBiZSBmb3VuZC48L2gzPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEludHJvIGZyb20gJy4uL2NvbXBvbmVudHMvSW50cm8nXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgSW50cm9cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5ub3QtZm91bmQtY29udGVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuPC9zdHlsZT5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbm90Rm91bmQudnVlPzJiZWUxNDI4IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhcHBcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJpbnRyby1hcmVhXCJcbiAgICB9XG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInR3ZWx2ZSBjb2x1bW5zXCJcbiAgfSwgW19jKCdpbnRybycpXSwgMSldKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibm90LWZvdW5kLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2gxJywgW192bS5fdihcIjQwNC4gVGhhdCdzIGFuIGVycm9yLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDMnLCBbX3ZtLl92KFwiVGhlIHBhZ2UgeW91IHdlcmUgbG9va2luZyBmb3IgY291bGRuJ3QgYmUgZm91bmQuXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTBiNDg2NWFjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvbGF5b3V0cy9ub3RGb3VuZC52dWVcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9nbG9iYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2dsb2JhbC5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogcm9ib3RvLTEwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gVGhpbicpLCBsb2NhbCgnUm9ib3RvLVRoaW4nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by0xMDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIFRoaW4gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tVGhpbkl0YWxpYycpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQnKSwgbG9jYWwoJ1JvYm90by1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLTMwMGl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gTGlnaHQgSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tTGlnaHRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by1yZWd1bGFyIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90bycpLCBsb2NhbCgnUm9ib3RvLVJlZ3VsYXInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcm9ib3RvLWl0YWxpYyAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXHJcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSb2JvdG8gSXRhbGljJyksIGxvY2FsKCdSb2JvdG8tSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBNZWRpdW0nKSwgbG9jYWwoJ1JvYm90by1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by01MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIE1lZGl1bSBJdGFsaWMnKSwgbG9jYWwoJ1JvYm90by1NZWRpdW1JdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJvbGQnKSwgbG9jYWwoJ1JvYm90by1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tNzAwaXRhbGljIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCb2xkIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJvbGRJdGFsaWMnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJvYm90by05MDBpdGFsaWMgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUm9ib3RvIEJsYWNrIEl0YWxpYycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrSXRhbGljJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByb2JvdG8tOTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JvYm90byBCbGFjaycpLCBsb2NhbCgnUm9ib3RvLUJsYWNrJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LTMwMCAtIGxhdGluICovXFxyXFxuXFxyXFxuQGZvbnQtZmFjZSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUmFsZXdheSc7XFxyXFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gICAgc3JjOiBsb2NhbCgnUmFsZXdheSBMaWdodCcpLCBsb2NhbCgnUmFsZXdheS1MaWdodCcpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tMzAwLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgXFxyXFxuICAgIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYnKTtcXHJcXG4gICAgLyogQ2hyb21lIDYrLCBGaXJlZm94IDMuNissIElFIDkrLCBTYWZhcmkgNS4xKyAqL1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiByYWxld2F5LXJlZ3VsYXIgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXknKSwgbG9jYWwoJ1JhbGV3YXktUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktNTAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IE1lZGl1bScpLCBsb2NhbCgnUmFsZXdheS1NZWRpdW0nKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNTAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS02MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgU2VtaUJvbGQnKSwgbG9jYWwoJ1JhbGV3YXktU2VtaUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTYwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogcmFsZXdheS03MDAgLSBsYXRpbiAqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ1JhbGV3YXknO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIHNyYzogbG9jYWwoJ1JhbGV3YXkgQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1Cb2xkJyksIHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9yYWxld2F5LXYxMS1sYXRpbi03MDAud29mZjJcIikgKyBcIikgZm9ybWF0KCd3b2ZmMicpLCBcXHJcXG4gICAgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpO1xcclxcbiAgICAvKiBDaHJvbWUgNissIEZpcmVmb3ggMy42KywgSUUgOSssIFNhZmFyaSA1LjErICovXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIHJhbGV3YXktODAwIC0gbGF0aW4gKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5JztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogODAwO1xcclxcbiAgICBzcmM6IGxvY2FsKCdSYWxld2F5IEV4dHJhQm9sZCcpLCBsb2NhbCgnUmFsZXdheS1FeHRyYUJvbGQnKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmMlwiKSArIFwiKSBmb3JtYXQoJ3dvZmYyJyksIFxcclxcbiAgICB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvcmFsZXdheS12MTEtbGF0aW4tODAwLndvZmZcIikgKyBcIikgZm9ybWF0KCd3b2ZmJyk7XFxyXFxuICAgIC8qIENocm9tZSA2KywgRmlyZWZveCAzLjYrLCBJRSA5KywgU2FmYXJpIDUuMSsgKi9cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYWZhZmE7XFxyXFxufVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyIS4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZ2xvYmFsLmNzc1xuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwLjhjZTU5ODgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMC42NTRjYjRkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMTAwaXRhbGljLmFjZWUwZWEud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTEwMGl0YWxpYy40MmRlODk4LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0xMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwLjE2ZGRiMTUud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMC5lY2NlOTJkLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDAud29mZlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tMzAwaXRhbGljLjNkZGI3NDgud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZjJcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTMwMGl0YWxpYy40ZDA4ZGFlLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi0zMDBpdGFsaWMud29mZlxuLy8gbW9kdWxlIGlkID0gNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci43ZTM2N2JlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gNTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tcmVndWxhci4xNmUxZDkzLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLWl0YWxpYy45ODRhZTM3LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi1pdGFsaWMuMWU2NWU3ZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4taXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMC5iYjQ3NGYxLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDAuNTdhZjY0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTUwMGl0YWxpYy45ZTdiZWVlLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi01MDBpdGFsaWMuYjY3MDY5NC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMC4wZDdlNzFmLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDAuNTI1ZDViNC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTcwMGl0YWxpYy43Mzk0Y2E5LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi03MDBpdGFsaWMuYWQwZTc0Zi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tNzAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMGl0YWxpYy40ZmFlYzgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDBpdGFsaWMuM2I5NTkwZS53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwaXRhbGljLndvZmZcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yb2JvdG8tdjE1LWxhdGluLTkwMC5mNGU4ZGM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcm9ib3RvLXYxNS1sYXRpbi05MDAuZGU5ODRjMC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JvYm90by12MTUtbGF0aW4tOTAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuZTc0NmUwMy53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi0zMDAuNzhkZDVhYi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTMwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tcmVndWxhci45MTA2NDM1LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLXJlZ3VsYXIud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLjI5MGVlMzgud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi1yZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuZTVhMzIxMi53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi01MDAuODFlOTU1OC53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTUwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmNkOTAzOTIud29mZjJcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLndvZmYyXG4vLyBtb2R1bGUgaWQgPSA3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNjAwLmE0YjZmMTcud29mZlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi02MDAud29mZlxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC4wNmYxYzg2LndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTcwMC5jODY0ZDg0LndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvcmFsZXdheS12MTEtbGF0aW4tNzAwLndvZmZcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMDQxYTRiOC53b2ZmMlwiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAud29mZjJcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9yYWxld2F5LXYxMS1sYXRpbi04MDAuMmEzYTljZi53b2ZmXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL3JhbGV3YXktdjExLWxhdGluLTgwMC53b2ZmXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xudmFyIHN0eWxlc0luRG9tID0ge30sXG5cdG1lbW9pemUgPSBmdW5jdGlvbihmbikge1xuXHRcdHZhciBtZW1vO1xuXHRcdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdFx0cmV0dXJuIG1lbW87XG5cdFx0fTtcblx0fSxcblx0aXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIC9tc2llIFs2LTldXFxiLy50ZXN0KHNlbGYubmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcblx0fSksXG5cdGdldEhlYWRFbGVtZW50ID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdO1xuXHR9KSxcblx0c2luZ2xldG9uRWxlbWVudCA9IG51bGwsXG5cdHNpbmdsZXRvbkNvdW50ZXIgPSAwLFxuXHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIDxoZWFkPi5cblx0aWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcInVuZGVmaW5lZFwiKSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QpO1xuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oKTtcblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyhsaXN0KSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKVxuXHRcdFx0c3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlXG5cdFx0XHRuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCkge1xuXHR2YXIgaGVhZCA9IGdldEhlYWRFbGVtZW50KCk7XG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wW3N0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBoZWFkLmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZihsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0aGVhZC5pbnNlcnRCZWZvcmUoc3R5bGVFbGVtZW50LCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0XHR9XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AucHVzaChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcuIE11c3QgYmUgJ3RvcCcgb3IgJ2JvdHRvbScuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcblx0c3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcblx0dmFyIGlkeCA9IHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGVFbGVtZW50KTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXHRzdHlsZUVsZW1lbnQudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlRWxlbWVudCk7XG5cdHJldHVybiBzdHlsZUVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIGxpbmtFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cdGxpbmtFbGVtZW50LnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGlua0VsZW1lbnQpO1xuXHRyZXR1cm4gbGlua0VsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVFbGVtZW50LCB1cGRhdGUsIHJlbW92ZTtcblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblx0XHRzdHlsZUVsZW1lbnQgPSBzaW5nbGV0b25FbGVtZW50IHx8IChzaW5nbGV0b25FbGVtZW50ID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50LCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cdH0gZWxzZSBpZihvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZUVsZW1lbnQpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG5cdFx0XHRpZihzdHlsZUVsZW1lbnQuaHJlZilcblx0XHRcdFx0VVJMLnJldm9rZU9iamVjdFVSTChzdHlsZUVsZW1lbnQuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZUVsZW1lbnQgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuXHRcdGlmKG5ld09iaikge1xuXHRcdFx0aWYobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKVxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlRWxlbWVudCwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGVFbGVtZW50LmNoaWxkTm9kZXM7XG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGVFbGVtZW50Lmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZUVsZW1lbnQsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuXHRcdH1cblx0XHRzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayhsaW5rRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHRpZihzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rRWxlbWVudC5ocmVmO1xuXG5cdGxpbmtFbGVtZW50LmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYylcblx0XHRVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1xuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbWF0ZXJpYWwtaWNvbnMuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL21hdGVyaWFsLWljb25zLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcclxcbiAgICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcXHJcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBzcmM6IHVybChcIiArIHJlcXVpcmUoXCIuLi9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90XCIpICsgXCIpO1xcclxcbiAgICAvKiBGb3IgSUU2LTggKi9cXHJcXG4gICAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSwgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYyXCIpICsgXCIpIGZvcm1hdCgnd29mZjInKSwgdXJsKFwiICsgcmVxdWlyZShcIi4uL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmXCIpICsgXCIpIGZvcm1hdCgnd29mZicpLCB1cmwoXCIgKyByZXF1aXJlKFwiLi4vZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlwiKSArIFwiKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxyXFxufVxcclxcblxcclxcbi5tYXRlcmlhbC1pY29ucyB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xcclxcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXHJcXG4gICAgd29yZC13cmFwOiBub3JtYWw7XFxyXFxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICAgIGRpcmVjdGlvbjogbHRyO1xcclxcbiAgICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xcclxcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gICAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxyXFxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxyXFxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxuICAgIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xcclxcbiAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXHJcXG59XCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9tYXRlcmlhbC1pY29ucy5jc3Ncbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuZTc5YmZkOC5lb3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLmVvdFxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci41NzBlYjgzLndvZmYyXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMlxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL01hdGVyaWFsSWNvbnMtUmVndWxhci4wMTJjZjZhLndvZmZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmZcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9NYXRlcmlhbEljb25zLVJlZ3VsYXIuYTM3YjBjMC50dGZcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9hc3NldHMvZm9udHMvTWF0ZXJpYWxJY29ucy1SZWd1bGFyLnR0ZlxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9hZGRTdHlsZXMuanNcIikoY29udGVudCwge30pO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG5cdC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdGlmKCFjb250ZW50LmxvY2Fscykge1xuXHRcdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL25vcm1hbGl6ZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vbm9ybWFsaXplLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9ub3JtYWxpemUuY3NzXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiEgbm9ybWFsaXplLmNzcyB2My4wLjIgfCBNSVQgTGljZW5zZSB8IGdpdC5pby9ub3JtYWxpemUgKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBTZXQgZGVmYXVsdCBmb250IGZhbWlseSB0byBzYW5zLXNlcmlmLlxcclxcbiAqIDIuIFByZXZlbnQgaU9TIHRleHQgc2l6ZSBhZGp1c3QgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlLCB3aXRob3V0IGRpc2FibGluZ1xcclxcbiAqICAgIHVzZXIgem9vbS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5odG1sIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmOyAvKiAxICovXFxyXFxuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IG1hcmdpbi5cXHJcXG4gKi9cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogSFRNTDUgZGlzcGxheSBkZWZpbml0aW9uc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQ29ycmVjdCBgYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgZm9yIGFueSBIVE1MNSBlbGVtZW50IGluIElFIDgvOS5cXHJcXG4gKiBDb3JyZWN0IGBibG9ja2AgZGlzcGxheSBub3QgZGVmaW5lZCBmb3IgYGRldGFpbHNgIG9yIGBzdW1tYXJ5YCBpbiBJRSAxMC8xMVxcclxcbiAqIGFuZCBGaXJlZm94LlxcclxcbiAqIENvcnJlY3QgYGJsb2NrYCBkaXNwbGF5IG5vdCBkZWZpbmVkIGZvciBgbWFpbmAgaW4gSUUgMTEuXFxyXFxuICovXFxyXFxuXFxyXFxuYXJ0aWNsZSxcXHJcXG5hc2lkZSxcXHJcXG5kZXRhaWxzLFxcclxcbmZpZ2NhcHRpb24sXFxyXFxuZmlndXJlLFxcclxcbmZvb3RlcixcXHJcXG5oZWFkZXIsXFxyXFxuaGdyb3VwLFxcclxcbm1haW4sXFxyXFxubWVudSxcXHJcXG5uYXYsXFxyXFxuc2VjdGlvbixcXHJcXG5zdW1tYXJ5IHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBDb3JyZWN0IGBpbmxpbmUtYmxvY2tgIGRpc3BsYXkgbm90IGRlZmluZWQgaW4gSUUgOC85LlxcclxcbiAqIDIuIE5vcm1hbGl6ZSB2ZXJ0aWNhbCBhbGlnbm1lbnQgb2YgYHByb2dyZXNzYCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hdWRpbyxcXHJcXG5jYW52YXMsXFxyXFxucHJvZ3Jlc3MsXFxyXFxudmlkZW8ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAvKiAxICovXFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IC8qIDIgKi9cXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUHJldmVudCBtb2Rlcm4gYnJvd3NlcnMgZnJvbSBkaXNwbGF5aW5nIGBhdWRpb2Agd2l0aG91dCBjb250cm9scy5cXHJcXG4gKiBSZW1vdmUgZXhjZXNzIGhlaWdodCBpbiBpT1MgNSBkZXZpY2VzLlxcclxcbiAqL1xcclxcblxcclxcbmF1ZGlvOm5vdChbY29udHJvbHNdKSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBbaGlkZGVuXWAgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkvMTAuXFxyXFxuICogSGlkZSB0aGUgYHRlbXBsYXRlYCBlbGVtZW50IGluIElFIDgvOS8xMSwgU2FmYXJpLCBhbmQgRmlyZWZveCA8IDIyLlxcclxcbiAqL1xcclxcblxcclxcbltoaWRkZW5dLFxcclxcbnRlbXBsYXRlIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIExpbmtzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBjb2xvciBmcm9tIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBJbXByb3ZlIHJlYWRhYmlsaXR5IHdoZW4gZm9jdXNlZCBhbmQgYWxzbyBtb3VzZSBob3ZlcmVkIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5hOmFjdGl2ZSxcXHJcXG5hOmhvdmVyIHtcXHJcXG4gIG91dGxpbmU6IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gSUUgOC85LzEwLzExLCBTYWZhcmksIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuYWJiclt0aXRsZV0ge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRvdHRlZDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBzdHlsZSBzZXQgdG8gYGJvbGRlcmAgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmIsXFxyXFxuc3Ryb25nIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIHN0eWxpbmcgbm90IHByZXNlbnQgaW4gU2FmYXJpIGFuZCBDaHJvbWUuXFxyXFxuICovXFxyXFxuXFxyXFxuZGZuIHtcXHJcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyB2YXJpYWJsZSBgaDFgIGZvbnQtc2l6ZSBhbmQgbWFyZ2luIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYFxcclxcbiAqIGNvbnRleHRzIGluIEZpcmVmb3ggNCssIFNhZmFyaSwgYW5kIENocm9tZS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICBmb250LXNpemU6IDJlbTtcXHJcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgc3R5bGluZyBub3QgcHJlc2VudCBpbiBJRSA4LzkuXFxyXFxuICovXFxyXFxuXFxyXFxubWFyayB7XFxyXFxuICBiYWNrZ3JvdW5kOiAjZmYwO1xcclxcbiAgY29sb3I6ICMwMDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGFuZCB2YXJpYWJsZSBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcclxcbiAqL1xcclxcblxcclxcbnNtYWxsIHtcXHJcXG4gIGZvbnQtc2l6ZTogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBhZmZlY3RpbmcgYGxpbmUtaGVpZ2h0YCBpbiBhbGwgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuc3ViLFxcclxcbnN1cCB7XFxyXFxuICBmb250LXNpemU6IDc1JTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbn1cXHJcXG5cXHJcXG5zdXAge1xcclxcbiAgdG9wOiAtMC41ZW07XFxyXFxufVxcclxcblxcclxcbnN1YiB7XFxyXFxuICBib3R0b206IC0wLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBib3JkZXIgd2hlbiBpbnNpZGUgYGFgIGVsZW1lbnQgaW4gSUUgOC85LzEwLlxcclxcbiAqL1xcclxcblxcclxcbmltZyB7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIENvcnJlY3Qgb3ZlcmZsb3cgbm90IGhpZGRlbiBpbiBJRSA5LzEwLzExLlxcclxcbiAqL1xcclxcblxcclxcbnN2Zzpub3QoOnJvb3QpIHtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgbWFyZ2luIG5vdCBwcmVzZW50IGluIElFIDgvOSBhbmQgU2FmYXJpLlxcclxcbiAqL1xcclxcblxcclxcbmZpZ3VyZSB7XFxyXFxuICBtYXJnaW46IDFlbSA0MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGRpZmZlcmVuY2VzIGJldHdlZW4gRmlyZWZveCBhbmQgb3RoZXIgYnJvd3NlcnMuXFxyXFxuICovXFxyXFxuXFxyXFxuaHIge1xcclxcbiAgLW1vei1ib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xcclxcbiAgaGVpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBDb250YWluIG92ZXJmbG93IGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5wcmUge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3Mgb2RkIGBlbWAtdW5pdCBmb250IHNpemUgcmVuZGVyaW5nIGluIGFsbCBicm93c2Vycy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5jb2RlLFxcclxcbmtiZCxcXHJcXG5wcmUsXFxyXFxuc2FtcCB7XFxyXFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XFxyXFxuICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9ybXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIEtub3duIGxpbWl0YXRpb246IGJ5IGRlZmF1bHQsIENocm9tZSBhbmQgU2FmYXJpIG9uIE9TIFggYWxsb3cgdmVyeSBsaW1pdGVkXFxyXFxuICogc3R5bGluZyBvZiBgc2VsZWN0YCwgdW5sZXNzIGEgYGJvcmRlcmAgcHJvcGVydHkgaXMgc2V0LlxcclxcbiAqL1xcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIENvcnJlY3QgY29sb3Igbm90IGJlaW5nIGluaGVyaXRlZC5cXHJcXG4gKiAgICBLbm93biBpc3N1ZTogYWZmZWN0cyBjb2xvciBvZiBkaXNhYmxlZCBlbGVtZW50cy5cXHJcXG4gKiAyLiBDb3JyZWN0IGZvbnQgcHJvcGVydGllcyBub3QgYmVpbmcgaW5oZXJpdGVkLlxcclxcbiAqIDMuIEFkZHJlc3MgbWFyZ2lucyBzZXQgZGlmZmVyZW50bHkgaW4gRmlyZWZveCA0KywgU2FmYXJpLCBhbmQgQ2hyb21lLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5pbnB1dCxcXHJcXG5vcHRncm91cCxcXHJcXG5zZWxlY3QsXFxyXFxudGV4dGFyZWEge1xcclxcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXHJcXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXHJcXG4gIG1hcmdpbjogMDsgLyogMyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBBZGRyZXNzIGBvdmVyZmxvd2Agc2V0IHRvIGBoaWRkZW5gIGluIElFIDgvOS8xMC8xMS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b24ge1xcclxcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEFkZHJlc3MgaW5jb25zaXN0ZW50IGB0ZXh0LXRyYW5zZm9ybWAgaW5oZXJpdGFuY2UgZm9yIGBidXR0b25gIGFuZCBgc2VsZWN0YC5cXHJcXG4gKiBBbGwgb3RoZXIgZm9ybSBjb250cm9sIGVsZW1lbnRzIGRvIG5vdCBpbmhlcml0IGB0ZXh0LXRyYW5zZm9ybWAgdmFsdWVzLlxcclxcbiAqIENvcnJlY3QgYGJ1dHRvbmAgc3R5bGUgaW5oZXJpdGFuY2UgaW4gRmlyZWZveCwgSUUgOC85LzEwLzExLCBhbmQgT3BlcmEuXFxyXFxuICogQ29ycmVjdCBgc2VsZWN0YCBzdHlsZSBpbmhlcml0YW5jZSBpbiBGaXJlZm94LlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5zZWxlY3Qge1xcclxcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIDEuIEF2b2lkIHRoZSBXZWJLaXQgYnVnIGluIEFuZHJvaWQgNC4wLiogd2hlcmUgKDIpIGRlc3Ryb3lzIG5hdGl2ZSBgYXVkaW9gXFxyXFxuICogICAgYW5kIGB2aWRlb2AgY29udHJvbHMuXFxyXFxuICogMi4gQ29ycmVjdCBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIGBpbnB1dGAgdHlwZXMgaW4gaU9TLlxcclxcbiAqIDMuIEltcHJvdmUgdXNhYmlsaXR5IGFuZCBjb25zaXN0ZW5jeSBvZiBjdXJzb3Igc3R5bGUgYmV0d2VlbiBpbWFnZS10eXBlXFxyXFxuICogICAgYGlucHV0YCBhbmQgb3RoZXJzLlxcclxcbiAqL1xcclxcblxcclxcbmJ1dHRvbixcXHJcXG5odG1sIGlucHV0W3R5cGU9XFxcImJ1dHRvblxcXCJdLCAvKiAxICovXFxyXFxuaW5wdXRbdHlwZT1cXFwicmVzZXRcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMiAqL1xcclxcbiAgY3Vyc29yOiBwb2ludGVyOyAvKiAzICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlLXNldCBkZWZhdWx0IGN1cnNvciBmb3IgZGlzYWJsZWQgZWxlbWVudHMuXFxyXFxuICovXFxyXFxuXFxyXFxuYnV0dG9uW2Rpc2FibGVkXSxcXHJcXG5odG1sIGlucHV0W2Rpc2FibGVkXSB7XFxyXFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBpbm5lciBwYWRkaW5nIGFuZCBib3JkZXIgaW4gRmlyZWZveCA0Ky5cXHJcXG4gKi9cXHJcXG5cXHJcXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxyXFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogQWRkcmVzcyBGaXJlZm94IDQrIHNldHRpbmcgYGxpbmUtaGVpZ2h0YCBvbiBgaW5wdXRgIHVzaW5nIGAhaW1wb3J0YW50YCBpblxcclxcbiAqIHRoZSBVQSBzdHlsZXNoZWV0LlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0IHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEl0J3MgcmVjb21tZW5kZWQgdGhhdCB5b3UgZG9uJ3QgYXR0ZW1wdCB0byBzdHlsZSB0aGVzZSBlbGVtZW50cy5cXHJcXG4gKiBGaXJlZm94J3MgaW1wbGVtZW50YXRpb24gZG9lc24ndCByZXNwZWN0IGJveC1zaXppbmcsIHBhZGRpbmcsIG9yIHdpZHRoLlxcclxcbiAqXFxyXFxuICogMS4gQWRkcmVzcyBib3ggc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgIGluIElFIDgvOS8xMC5cXHJcXG4gKiAyLiBSZW1vdmUgZXhjZXNzIHBhZGRpbmcgaW4gSUUgOC85LzEwLlxcclxcbiAqL1xcclxcblxcclxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIEZpeCB0aGUgY3Vyc29yIHN0eWxlIGZvciBDaHJvbWUncyBpbmNyZW1lbnQvZGVjcmVtZW50IGJ1dHRvbnMuIEZvciBjZXJ0YWluXFxyXFxuICogYGZvbnQtc2l6ZWAgdmFsdWVzIG9mIHRoZSBgaW5wdXRgLCBpdCBjYXVzZXMgdGhlIGN1cnNvciBzdHlsZSBvZiB0aGVcXHJcXG4gKiBkZWNyZW1lbnQgYnV0dG9uIHRvIGNoYW5nZSBmcm9tIGBkZWZhdWx0YCB0byBgdGV4dGAuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxyXFxuaW5wdXRbdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiAxLiBBZGRyZXNzIGBhcHBlYXJhbmNlYCBzZXQgdG8gYHNlYXJjaGZpZWxkYCBpbiBTYWZhcmkgYW5kIENocm9tZS5cXHJcXG4gKiAyLiBBZGRyZXNzIGBib3gtc2l6aW5nYCBzZXQgdG8gYGJvcmRlci1ib3hgIGluIFNhZmFyaSBhbmQgQ2hyb21lXFxyXFxuICogICAgKGluY2x1ZGUgYC1tb3pgIHRvIGZ1dHVyZS1wcm9vZikuXFxyXFxuICovXFxyXFxuXFxyXFxuaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXHJcXG4gIC1tb3otYm94LXNpemluZzogY29udGVudC1ib3g7XFxyXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAyICovXFxyXFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogUmVtb3ZlIGlubmVyIHBhZGRpbmcgYW5kIHNlYXJjaCBjYW5jZWwgYnV0dG9uIGluIFNhZmFyaSBhbmQgQ2hyb21lIG9uIE9TIFguXFxyXFxuICogU2FmYXJpIChidXQgbm90IENocm9tZSkgY2xpcHMgdGhlIGNhbmNlbCBidXR0b24gd2hlbiB0aGUgc2VhcmNoIGlucHV0IGhhc1xcclxcbiAqIHBhZGRpbmcgKGFuZCBgdGV4dGZpZWxkYCBhcHBlYXJhbmNlKS5cXHJcXG4gKi9cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixcXHJcXG5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERlZmluZSBjb25zaXN0ZW50IGJvcmRlciwgbWFyZ2luLCBhbmQgcGFkZGluZy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5maWVsZHNldCB7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjYzBjMGMwO1xcclxcbiAgbWFyZ2luOiAwIDJweDtcXHJcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjYyNWVtIDAuNzVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqXFxyXFxuICogMS4gQ29ycmVjdCBgY29sb3JgIG5vdCBiZWluZyBpbmhlcml0ZWQgaW4gSUUgOC85LzEwLzExLlxcclxcbiAqIDIuIFJlbW92ZSBwYWRkaW5nIHNvIHBlb3BsZSBhcmVuJ3QgY2F1Z2h0IG91dCBpZiB0aGV5IHplcm8gb3V0IGZpZWxkc2V0cy5cXHJcXG4gKi9cXHJcXG5cXHJcXG5sZWdlbmQge1xcclxcbiAgYm9yZGVyOiAwOyAvKiAxICovXFxyXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIFJlbW92ZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSA4LzkvMTAvMTEuXFxyXFxuICovXFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxufVxcclxcblxcclxcbi8qKlxcclxcbiAqIERvbid0IGluaGVyaXQgdGhlIGBmb250LXdlaWdodGAgKGFwcGxpZWQgYnkgYSBydWxlIGFib3ZlKS5cXHJcXG4gKiBOT1RFOiB0aGUgZGVmYXVsdCBjYW5ub3Qgc2FmZWx5IGJlIGNoYW5nZWQgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gT1MgWC5cXHJcXG4gKi9cXHJcXG5cXHJcXG5vcHRncm91cCB7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLyogVGFibGVzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4vKipcXHJcXG4gKiBSZW1vdmUgbW9zdCBzcGFjaW5nIGJldHdlZW4gdGFibGUgY2VsbHMuXFxyXFxuICovXFxyXFxuXFxyXFxudGFibGUge1xcclxcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXHJcXG4gIGJvcmRlci1zcGFjaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG50ZCxcXHJcXG50aCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL0NsaWVudEFwcC9hc3NldHMvc3R5bGVzL25vcm1hbGl6ZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuL2Zmc2tlbGV0b24uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4vZmZza2VsZXRvbi5jc3NcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2Fzc2V0cy9zdHlsZXMvZmZza2VsZXRvbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxyXFxuKiBTa2VsZXRvbiBWMi4wLjRcXHJcXG4qIENvcHlyaWdodCAyMDE0LCBEYXZlIEdhbWFjaGVcXHJcXG4qIHd3dy5nZXRza2VsZXRvbi5jb21cXHJcXG4qIEZyZWUgdG8gdXNlIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cXHJcXG4qIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXFxyXFxuKiAxMi8yOS8yMDE0XFxyXFxuKi9cXHJcXG5cXHJcXG5cXHJcXG4vKiBUYWJsZSBvZiBjb250ZW50c1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1xcclxcbi0gR3JpZFxcclxcbi0gQmFzZSBTdHlsZXNcXHJcXG4tIFR5cG9ncmFwaHlcXHJcXG4tIExpbmtzXFxyXFxuLSBCdXR0b25zXFxyXFxuLSBGb3Jtc1xcclxcbi0gTGlzdHNcXHJcXG4tIENvZGVcXHJcXG4tIFRhYmxlc1xcclxcbi0gU3BhY2luZ1xcclxcbi0gVXRpbGl0aWVzXFxyXFxuLSBDbGVhcmluZ1xcclxcbi0gTWVkaWEgUXVlcmllc1xcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuLyogR3JpZFxcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbi5jb250YWluZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBtYXgtd2lkdGg6IDk2MHB4O1xcclxcbiAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLmNvbHVtbixcXHJcXG4uY29sdW1ucyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcblxcclxcbi8qIEZvciBkZXZpY2VzIGxhcmdlciB0aGFuIDQwMHB4ICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxyXFxuICAuY29udGFpbmVyIHtcXHJcXG4gICAgd2lkdGg6IDg1JTtcXHJcXG4gICAgcGFkZGluZzogMDsgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBGb3IgZGV2aWNlcyBsYXJnZXIgdGhhbiA1NTBweCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge1xcclxcbiAgLmNvbnRhaW5lciB7XFxyXFxuICAgIHdpZHRoOiA4MCU7IH1cXHJcXG4gIC5jb2x1bW4sXFxyXFxuICAuY29sdW1ucyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA0JTsgfVxcclxcbiAgLmNvbHVtbjpmaXJzdC1jaGlsZCxcXHJcXG4gIC5jb2x1bW5zOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cXHJcXG5cXHJcXG4gIC5vbmUuY29sdW1uLFxcclxcbiAgLm9uZS5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0LjY2NjY2NjY2NjY3JTsgfVxcclxcbiAgLnR3by5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMy4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLnRocmVlLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAyMiU7ICAgICAgICAgICAgfVxcclxcbiAgLmZvdXIuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLmZpdmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiAzOS4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLnNpeC5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7ICAgICAgICAgICAgfVxcclxcbiAgLnNldmVuLmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA1Ni42NjY2NjY2NjY3JTsgfVxcclxcbiAgLmVpZ2h0LmNvbHVtbnMgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLm5pbmUuY29sdW1ucyAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA3NC4wJTsgICAgICAgICAgfVxcclxcbiAgLnRlbi5jb2x1bW5zICAgICAgICAgICAgICAgICAgICB7IHdpZHRoOiA4Mi42NjY2NjY2NjY3JTsgfVxcclxcbiAgLmVsZXZlbi5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiA5MS4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLnR3ZWx2ZS5jb2x1bW5zICAgICAgICAgICAgICAgICB7IHdpZHRoOiAxMDAlOyBtYXJnaW4tbGVmdDogMDsgfVxcclxcblxcclxcbiAgLm9uZS10aGlyZC5jb2x1bW4gICAgICAgICAgICAgICB7IHdpZHRoOiAzMC42NjY2NjY2NjY3JTsgfVxcclxcbiAgLnR3by10aGlyZHMuY29sdW1uICAgICAgICAgICAgICB7IHdpZHRoOiA2NS4zMzMzMzMzMzMzJTsgfVxcclxcblxcclxcbiAgLm9uZS1oYWxmLmNvbHVtbiAgICAgICAgICAgICAgICB7IHdpZHRoOiA0OCU7IH1cXHJcXG5cXHJcXG4gIC8qIE9mZnNldHMgKi9cXHJcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktb25lLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogOC42NjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktdHdvLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogMTcuMzMzMzMzMzMzMyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktdGhyZWUuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS10aHJlZS5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiAyNiU7ICAgICAgICAgICAgfVxcclxcbiAgLm9mZnNldC1ieS1mb3VyLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktZm91ci5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktZml2ZS5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LWZpdmUuY29sdW1ucyAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDQzLjMzMzMzMzMzMzMlOyB9XFxyXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXNpeC5jb2x1bW5zICAgICAgICAgIHsgbWFyZ2luLWxlZnQ6IDUyJTsgICAgICAgICAgICB9XFxyXFxuICAub2Zmc2V0LWJ5LXNldmVuLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktc2V2ZW4uY29sdW1ucyAgICAgICAgeyBtYXJnaW4tbGVmdDogNjAuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktZWlnaHQuY29sdW1uLFxcclxcbiAgLm9mZnNldC1ieS1laWdodC5jb2x1bW5zICAgICAgICB7IG1hcmdpbi1sZWZ0OiA2OS4zMzMzMzMzMzMzJTsgfVxcclxcbiAgLm9mZnNldC1ieS1uaW5lLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktbmluZS5jb2x1bW5zICAgICAgICAgeyBtYXJnaW4tbGVmdDogNzguMCU7ICAgICAgICAgIH1cXHJcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktdGVuLmNvbHVtbnMgICAgICAgICAgeyBtYXJnaW4tbGVmdDogODYuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktZWxldmVuLmNvbHVtbnMgICAgICAgeyBtYXJnaW4tbGVmdDogOTUuMzMzMzMzMzMzMyU7IH1cXHJcXG5cXHJcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktb25lLXRoaXJkLmNvbHVtbnMgICAgeyBtYXJnaW4tbGVmdDogMzQuNjY2NjY2NjY2NyU7IH1cXHJcXG4gIC5vZmZzZXQtYnktdHdvLXRoaXJkcy5jb2x1bW4sXFxyXFxuICAub2Zmc2V0LWJ5LXR3by10aGlyZHMuY29sdW1ucyAgIHsgbWFyZ2luLWxlZnQ6IDY5LjMzMzMzMzMzMzMlOyB9XFxyXFxuXFxyXFxuICAub2Zmc2V0LWJ5LW9uZS1oYWxmLmNvbHVtbixcXHJcXG4gIC5vZmZzZXQtYnktb25lLWhhbGYuY29sdW1ucyAgICAgeyBtYXJnaW4tbGVmdDogNTIlOyB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIEJhc2UgU3R5bGVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLyogTk9URVxcclxcbmh0bWwgaXMgc2V0IHRvIDYyLjUlIHNvIHRoYXQgYWxsIHRoZSBSRU0gbWVhc3VyZW1lbnRzIHRocm91Z2hvdXQgU2tlbGV0b25cXHJcXG5hcmUgYmFzZWQgb24gMTBweCBzaXppbmcuIFNvIGJhc2ljYWxseSAxLjVyZW0gPSAxNXB4IDopICovXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlOyB9XFxyXFxuYm9keSB7XFxyXFxuICBmb250LXNpemU6IDEuNWVtOyAvKiBjdXJyZW50bHkgZW1zIGNhdXNlIGNocm9tZSBidWcgbWlzaW50ZXJwcmV0aW5nIHJlbXMgb24gYm9keSBlbGVtZW50ICovXFxyXFxuICBsaW5lLWhlaWdodDogMS42O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUmFsZXdheVxcXCIsIFxcXCJIZWx2ZXRpY2FOZXVlXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gIGNvbG9yOiAjMjIyOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVHlwb2dyYXBoeVxcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xcclxcbiAgbWFyZ2luLXRvcDogMDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDJyZW07XFxyXFxuICBmb250LXdlaWdodDogMzAwOyB9XFxyXFxuaDEgeyBmb250LXNpemU6IDQuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMjsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07fVxcclxcbmgyIHsgZm9udC1zaXplOiAzLjZyZW07IGxpbmUtaGVpZ2h0OiAxLjI1OyBsZXR0ZXItc3BhY2luZzogLS4xcmVtOyB9XFxyXFxuaDMgeyBmb250LXNpemU6IDMuMHJlbTsgbGluZS1oZWlnaHQ6IDEuMzsgIGxldHRlci1zcGFjaW5nOiAtLjFyZW07IH1cXHJcXG5oNCB7IGZvbnQtc2l6ZTogMi40cmVtOyBsaW5lLWhlaWdodDogMS4zNTsgbGV0dGVyLXNwYWNpbmc6IC0uMDhyZW07IH1cXHJcXG5oNSB7IGZvbnQtc2l6ZTogMS44cmVtOyBsaW5lLWhlaWdodDogMS41OyAgbGV0dGVyLXNwYWNpbmc6IC0uMDVyZW07IH1cXHJcXG5oNiB7IGZvbnQtc2l6ZTogMS41cmVtOyBsaW5lLWhlaWdodDogMS42OyAgbGV0dGVyLXNwYWNpbmc6IDA7IH1cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiBwaGFibGV0ICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MHB4KSB7XFxyXFxuICBoMSB7IGZvbnQtc2l6ZTogNS4wcmVtOyB9XFxyXFxuICBoMiB7IGZvbnQtc2l6ZTogNC4ycmVtOyB9XFxyXFxuICBoMyB7IGZvbnQtc2l6ZTogMy42cmVtOyB9XFxyXFxuICBoNCB7IGZvbnQtc2l6ZTogMy4wcmVtOyB9XFxyXFxuICBoNSB7IGZvbnQtc2l6ZTogMi40cmVtOyB9XFxyXFxuICBoNiB7IGZvbnQtc2l6ZTogMS41cmVtOyB9XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgbWFyZ2luLXRvcDogMDsgfVxcclxcblxcclxcblxcclxcbi8qIExpbmtzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuYSB7XFxyXFxuICBjb2xvcjogIzFFQUVEQjsgfVxcclxcbmE6aG92ZXIge1xcclxcbiAgY29sb3I6ICMwRkEwQ0U7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBMaXN0c1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZSBpbnNpZGU7IH1cXHJcXG5vbCB7XFxyXFxuICBsaXN0LXN0eWxlOiBkZWNpbWFsIGluc2lkZTsgfVxcclxcbm9sLCB1bCB7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxyXFxuICBtYXJnaW4tdG9wOiAwOyB9XFxyXFxudWwgdWwsXFxyXFxudWwgb2wsXFxyXFxub2wgb2wsXFxyXFxub2wgdWwge1xcclxcbiAgbWFyZ2luOiAxLjVyZW0gMCAxLjVyZW0gM3JlbTtcXHJcXG4gIGZvbnQtc2l6ZTogOTAlOyB9XFxyXFxubGkge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcclxcblxcclxcblxcclxcbi8qIENvZGVcXHJcXG7igJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJPigJMgKi9cXHJcXG5jb2RlIHtcXHJcXG4gIHBhZGRpbmc6IC4ycmVtIC41cmVtO1xcclxcbiAgbWFyZ2luOiAwIC4ycmVtO1xcclxcbiAgZm9udC1zaXplOiA5MCU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgYmFja2dyb3VuZDogI0YxRjFGMTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNFMUUxRTE7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7IH1cXHJcXG5wcmUgPiBjb2RlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XFxyXFxuICB3aGl0ZS1zcGFjZTogcHJlOyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogVGFibGVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxudGgsXFxyXFxudGQge1xcclxcbiAgcGFkZGluZzogMTJweCAxNXB4O1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRTFFMUUxOyB9XFxyXFxudGg6Zmlyc3QtY2hpbGQsXFxyXFxudGQ6Zmlyc3QtY2hpbGQge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAwOyB9XFxyXFxudGg6bGFzdC1jaGlsZCxcXHJcXG50ZDpsYXN0LWNoaWxkIHtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDA7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBTcGFjaW5nXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuYnV0dG9uLFxcclxcbi5idXR0b24ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTsgfVxcclxcbmlucHV0LFxcclxcbnRleHRhcmVhLFxcclxcbnNlbGVjdCxcXHJcXG5maWVsZHNldCB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07IH1cXHJcXG5wcmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5maWd1cmUsXFxyXFxudGFibGUsXFxyXFxucCxcXHJcXG51bCxcXHJcXG5vbCxcXHJcXG5mb3JtIHtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTsgfVxcclxcblxcclxcblxcclxcbi8qIFV0aWxpdGllc1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbi51LWZ1bGwtd2lkdGgge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxyXFxuLnUtbWF4LWZ1bGwtd2lkdGgge1xcclxcbiAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcclxcbi51LXB1bGwtcmlnaHQge1xcclxcbiAgZmxvYXQ6IHJpZ2h0OyB9XFxyXFxuLnUtcHVsbC1sZWZ0IHtcXHJcXG4gIGZsb2F0OiBsZWZ0OyB9XFxyXFxuXFxyXFxuXFxyXFxuLyogTWlzY1xcclxcbuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyAqL1xcclxcbmhyIHtcXHJcXG4gIG1hcmdpbi10b3A6IDNyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAzLjVyZW07XFxyXFxuICBib3JkZXItd2lkdGg6IDA7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI0UxRTFFMTsgfVxcclxcblxcclxcblxcclxcbi8qIENsZWFyaW5nXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuXFxyXFxuLyogU2VsZiBDbGVhcmluZyBHb29kbmVzcyAqL1xcclxcbi5jb250YWluZXI6YWZ0ZXIsXFxyXFxuLnJvdzphZnRlcixcXHJcXG4udS1jZiB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIGRpc3BsYXk6IHRhYmxlO1xcclxcbiAgY2xlYXI6IGJvdGg7IH1cXHJcXG5cXHJcXG5cXHJcXG4vKiBNZWRpYSBRdWVyaWVzXFxyXFxu4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCT4oCTICovXFxyXFxuLypcXHJcXG5Ob3RlOiBUaGUgYmVzdCB3YXkgdG8gc3RydWN0dXJlIHRoZSB1c2Ugb2YgbWVkaWEgcXVlcmllcyBpcyB0byBjcmVhdGUgdGhlIHF1ZXJpZXNcXHJcXG5uZWFyIHRoZSByZWxldmFudCBjb2RlLiBGb3IgZXhhbXBsZSwgaWYgeW91IHdhbnRlZCB0byBjaGFuZ2UgdGhlIHN0eWxlcyBmb3IgYnV0dG9uc1xcclxcbm9uIHNtYWxsIGRldmljZXMsIHBhc3RlIHRoZSBtb2JpbGUgcXVlcnkgY29kZSB1cCBpbiB0aGUgYnV0dG9ucyBzZWN0aW9uIGFuZCBzdHlsZSBpdFxcclxcbnRoZXJlLlxcclxcbiovXFxyXFxuXFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gbW9iaWxlICovXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7fVxcclxcblxcclxcbi8qIExhcmdlciB0aGFuIHBoYWJsZXQgKGFsc28gcG9pbnQgd2hlbiBncmlkIGJlY29tZXMgYWN0aXZlKSAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTBweCkge31cXHJcXG5cXHJcXG4vKiBMYXJnZXIgdGhhbiB0YWJsZXQgKi9cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzUwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gZGVza3RvcCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHt9XFxyXFxuXFxyXFxuLyogTGFyZ2VyIHRoYW4gRGVza3RvcCBIRCAqL1xcclxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHt9XFxyXFxuXCIsIFwiXCJdKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXIhLi9DbGllbnRBcHAvYXNzZXRzL3N0eWxlcy9mZnNrZWxldG9uLmNzc1xuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLW1hdGVyaWFsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLW1hdGVyaWFsXCJcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vc3R5bGUtbG9hZGVyL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCB7fSk7XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcblx0Ly8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0aWYoIWNvbnRlbnQubG9jYWxzKSB7XG5cdFx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi92dWUtbWF0ZXJpYWwuY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzIS4vdnVlLW1hdGVyaWFsLmNzc1wiKTtcblx0XHRcdGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuXHRcdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHRcdH0pO1xuXHR9XG5cdC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3Ncblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1tYXRlcmlhbC9kaXN0L3Z1ZS1tYXRlcmlhbC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1kLWF2YXRhcnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDttYXJnaW46YXV0bztkaXNwbGF5OmlubGluZS1ibG9jaztvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6NDBweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9Lm1kLWF2YXRhci5tZC1sYXJnZXt3aWR0aDo2NHB4O21pbi13aWR0aDo2NHB4O2hlaWdodDo2NHB4O21pbi1oZWlnaHQ6NjRweDtib3JkZXItcmFkaXVzOjY0cHh9Lm1kLWF2YXRhci5tZC1sYXJnZSAubWQtaWNvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21pbi1oZWlnaHQ6NDBweDtmb250LXNpemU6NDBweDtsaW5lLWhlaWdodDo0MHB4fS5tZC1hdmF0YXIubWQtYXZhdGFyLWljb257YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLWF2YXRhci5tZC1hdmF0YXItaWNvbiAubWQtaWNvbntjb2xvcjojZmZmfS5tZC1hdmF0YXIgLm1kLWljb257cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLWF2YXRhciBpbWd7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtkaXNwbGF5OmJsb2NrfS5tZC1hdmF0YXIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1MCV9Lm1kLWF2YXRhciAubWQtaW5rLXJpcHBsZSAubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb24tZHVyYXRpb246LjlzfS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLXRvcHttYXJnaW4tdG9wOi04cHh9Lm1kLWF2YXRhci10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHR7bWFyZ2luLWxlZnQ6OHB4fS5tZC1hdmF0YXItdG9vbHRpcC5tZC10b29sdGlwLWJvdHRvbXttYXJnaW4tdG9wOjhweH0ubWQtYXZhdGFyLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0e21hcmdpbi1sZWZ0Oi04cHh9Lm1kLWJhY2tkcm9we3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3otaW5kZXg6OTk7cG9pbnRlci1ldmVudHM6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjU0KTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWJhY2tkcm9wLm1kLWFjdGl2ZXtvcGFjaXR5OjE7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtYmFja2Ryb3AubWQtdHJhbnNwYXJlbnR7YmFja2dyb3VuZDpub25lfS5tZC1ib3R0b20tYmFye3dpZHRoOjEwMCU7bWluLXdpZHRoOjEwMCU7aGVpZ2h0OjU2cHg7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtib3gtc2hhZG93OjAgNXB4IDVweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOHB4IDEwcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNHB4IDJweCByZ2JhKDAsMCwwLC4xMik7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1ib3R0b20tYmFyLC5tZC1ib3R0b20tYmFyLWl0ZW17cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJvdHRvbS1iYXItaXRlbXttYXgtd2lkdGg6MTY4cHg7bWluLXdpZHRoOjgwcHg7aGVpZ2h0OjEwMCU7cGFkZGluZzo4cHggMTJweCAxMHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpqdXN0aWZ5O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOy1tcy1mbGV4OjE7ZmxleDoxO2N1cnNvcjpwb2ludGVyO2JvcmRlcjpub25lO2JhY2tncm91bmQ6dHJhbnNwYXJlbnQ7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7Y29sb3I6Y3VycmVudENvbG9yO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MWVtO3RleHQtZGVjb3JhdGlvbjpub25lfS5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZle3BhZGRpbmctdG9wOjZweH0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlWigwKX0ubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtaWNvbiwubWQtYm90dG9tLWJhci1pdGVtLm1kLWFjdGl2ZSAubWQtdGV4dHtjb2xvcjpjdXJyZW50Q29sb3J9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbXttaW4td2lkdGg6NTZweDttYXgtd2lkdGg6OTZweDtwb3NpdGlvbjpzdGF0aWM7LW1zLWZsZXg6MSAxIDMycHg7ZmxleDoxIDEgMzJweDt0cmFuc2l0aW9uOi40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aDt0cmFuc2l0aW9uLXByb3BlcnR5OmZsZXgsbWluLXdpZHRoLG1heC13aWR0aCwtbXMtZmxleH0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC1pY29ue3RyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDhweCwwKX0ubWQtYm90dG9tLWJhci5tZC1zaGlmdCAubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlM2QoMCw2cHgsMCl9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmV7bWluLXdpZHRoOjk2cHg7bWF4LXdpZHRoOjE2OHB4Oy1tcy1mbGV4OjEgMSA3MnB4O2ZsZXg6MSAxIDcycHh9Lm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLWljb24sLm1kLWJvdHRvbS1iYXIubWQtc2hpZnQgLm1kLWJvdHRvbS1iYXItaXRlbS5tZC1hY3RpdmUgLm1kLXRleHR7b3BhY2l0eToxfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC1pY29ue3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApfS5tZC1ib3R0b20tYmFyLm1kLXNoaWZ0IC5tZC1ib3R0b20tYmFyLWl0ZW0ubWQtYWN0aXZlIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGUzZCgwLDJweCwwKX0ubWQtYm90dG9tLWJhci1pdGVtIC5tZC10ZXh0e3RyYW5zZm9ybTpzY2FsZSguODU3MSkgdHJhbnNsYXRlWSgycHgpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxjb2xvciAuMDhzIGxpbmVhcixvcGFjaXR5IC4wOHMgbGluZWFyfS5tZC1ib3R0b20tYmFyLWl0ZW0gLm1kLWljb257dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLGNvbG9yIC4wOHMgbGluZWFyfS5tZC1idXR0b257bWluLXdpZHRoOjg4cHg7bWluLWhlaWdodDozNnB4O21hcmdpbjo2cHggOHB4O3BhZGRpbmc6MCAxNnB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93OmhpZGRlbjstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZDpub25lO2JvcmRlcjowO2JvcmRlci1yYWRpdXM6MnB4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpjdXJyZW50Q29sb3I7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTRweDtmb250LXN0eWxlOmluaGVyaXQ7Zm9udC12YXJpYW50OmluaGVyaXQ7Zm9udC13ZWlnaHQ6NTAwO2xldHRlci1zcGFjaW5nOmluaGVyaXQ7bGluZS1oZWlnaHQ6MzZweDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dmVydGljYWwtYWxpZ246dG9wO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtYnV0dG9uLC5tZC1idXR0b246Zm9jdXN7b3V0bGluZTpub25lfS5tZC1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b246YWN0aXZlOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSw2MCUsLjQpfS5tZC1idXR0b24ubWQtcmFpc2VkOm5vdChbZGlzYWJsZWRdKXtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtYnV0dG9uLm1kLWRlbnNle21pbi1oZWlnaHQ6MzJweDtsaW5lLWhlaWdodDozMnB4O2ZvbnQtc2l6ZToxM3B4fS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbnt3aWR0aDo0MHB4O21pbi13aWR0aDo0MHB4O2hlaWdodDo0MHB4O21hcmdpbjowIDZweDtwYWRkaW5nOjhweDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDoyNHB4fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVye2JhY2tncm91bmQ6bm9uZX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uLm1kLWRlbnNle3dpZHRoOjMycHg7bWluLXdpZHRoOjMycHg7aGVpZ2h0OjMycHg7bWluLWhlaWdodDozMnB4O3BhZGRpbmc6NHB4O2xpbmUtaGVpZ2h0OjMycHh9Lm1kLWJ1dHRvbi5tZC1pY29uLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjUwJX0ubWQtYnV0dG9uLm1kLWljb24tYnV0dG9uIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLXJpcHBsZS5tZC1hY3RpdmV7YW5pbWF0aW9uLWR1cmF0aW9uOi45c30ubWQtYnV0dG9uLm1kLWZhYnt3aWR0aDo1NnB4O2hlaWdodDo1NnB4O21pbi13aWR0aDowO292ZXJmbG93OmhpZGRlbjtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtib3JkZXItcmFkaXVzOjU2cHg7bGluZS1oZWlnaHQ6NTZweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7dHJhbnNpdGlvbjphbGwgLjNzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpO3RyYW5zaXRpb24tcHJvcGVydHk6YmFja2dyb3VuZC1jb2xvcixib3gtc2hhZG93LHRyYW5zZm9ybX0ubWQtYnV0dG9uLm1kLWZhYjpmb2N1cywubWQtYnV0dG9uLm1kLWZhYjpob3Zlcntib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLXRvcC1sZWZ0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNnB4O2xlZnQ6MTZweH0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLWNlbnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTZweDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItdG9wLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxNnB4O3JpZ2h0OjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtZmFiLWJvdHRvbS1sZWZ0e3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbToxNnB4O2xlZnQ6MTZweH0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItYm90dG9tLWNlbnRlcntwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MTZweDtsZWZ0OjUwJTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX0ubWQtYnV0dG9uLm1kLWZhYi5tZC1mYWItYm90dG9tLXJpZ2h0e3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjE2cHg7Ym90dG9tOjE2cHh9Lm1kLWJ1dHRvbi5tZC1mYWIubWQtbWluaXt3aWR0aDo0MHB4O2hlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjQwcHh9Lm1kLWJ1dHRvbi5tZC1mYWIgLm1kLWluay1yaXBwbGV7Ym9yZGVyLXJhZGl1czo1NnB4fS5tZC1idXR0b25bZGlzYWJsZWRde2NvbG9yOnJnYmEoMCwwLDAsLjI2KTtjdXJzb3I6ZGVmYXVsdH0ubWQtYnV0dG9uW2Rpc2FibGVkXS5tZC1mYWIsLm1kLWJ1dHRvbltkaXNhYmxlZF0ubWQtcmFpc2Vke2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1idXR0b25bZGlzYWJsZWRdLm1kLWZhYntib3gtc2hhZG93Om5vbmV9Lm1kLWJ1dHRvbjphZnRlcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjJweDtiYWNrZ3JvdW5kLWNsaXA6cGFkZGluZy1ib3g7b3ZlcmZsb3c6aGlkZGVufS5tZC1idXR0b24ubWQtZmFiIC5tZC1pY29uLC5tZC1idXR0b24ubWQtaWNvbi1idXR0b24gLm1kLWljb257ZGlzcGxheTpibG9ja30ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC10b3B7bWFyZ2luLXRvcDotOHB4fS5tZC1idXR0b24tdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0e21hcmdpbi1sZWZ0OjhweH0ubWQtYnV0dG9uLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b217bWFyZ2luLXRvcDo4cHh9Lm1kLWJ1dHRvbi10b29sdGlwLm1kLXRvb2x0aXAtbGVmdHttYXJnaW4tbGVmdDotOHB4fS5tZC1idXR0b24tdG9nZ2xle3dpZHRoOmF1dG87ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXh9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbnttYXJnaW46MDtvdmVyZmxvdzpoaWRkZW47Ym9yZGVyLXdpZHRoOjFweCAwIDFweCAxcHg7Ym9yZGVyLXJhZGl1czowO3RleHQtYWxpZ246Y2VudGVyO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7d2hpdGUtc3BhY2U6bm93cmFwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7Ym9yZGVyLXJhZGl1czoycHggMCAwIDJweH0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOmxhc3QtY2hpbGR7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweDtib3JkZXItcmFkaXVzOjAgMnB4IDJweCAwfS5tZC1idXR0b24tdG9nZ2xlPi5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2NvbG9yOnJnYmEoMCwwLDAsLjU0KX0ubWQtYnV0dG9uLXRvZ2dsZT4ubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3Zlcjpub3QoLm1kLXRvZ2dsZSk6bm90KC5tZC1yYWlzZWQpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDYwJSwuMik7dGV4dC1kZWNvcmF0aW9uOm5vbmV9Lm1kLWJ1dHRvbi10b2dnbGU+Lm1kLWJ1dHRvbiAubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjJweH0ubWQtY2FyZHtvdmVyZmxvdzphdXRvO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWRpcmVjdGlvbjpjb2x1bW47ZmxleC1kaXJlY3Rpb246Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtY2FyZC5tZC13aXRoLWhvdmVye2N1cnNvcjpwb2ludGVyO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLXByb3BlcnR5OmJveC1zaGFkb3d9Lm1kLWNhcmQubWQtd2l0aC1ob3Zlcjpob3Zlcnt6LWluZGV4OjI7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhe3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTl7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTE2LTk6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6NTYuMjUlO2Rpc3BsYXk6YmxvY2s7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMTYtOSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTN7b3ZlcmZsb3c6aGlkZGVufS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTQtMzpiZWZvcmV7d2lkdGg6MTAwJTtwYWRkaW5nLXRvcDo3NSU7ZGlzcGxheTpibG9jaztjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC00LTMgaW1ne3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7cmlnaHQ6MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEubWQtMS0xe292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS5tZC0xLTE6YmVmb3Jle3dpZHRoOjEwMCU7cGFkZGluZy10b3A6MTAwJTtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLm1kLTEtMSBpbWd7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtyaWdodDowO2xlZnQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1oZWFkZXJ7cGFkZGluZy10b3A6MjRweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSsubWQtY2FyZC1jb250ZW50Omxhc3QtY2hpbGR7cGFkZGluZy1ib3R0b206MTZweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYSBpbWd7d2lkdGg6MTAwJX0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXJ7cGFkZGluZzoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlcjpmaXJzdC1jaGlsZD4ubWQtY2FyZC1oZWFkZXItdGV4dD4ubWQtdGl0bGU6Zmlyc3QtY2hpbGQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyOmZpcnN0LWNoaWxkPi5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXI6bGFzdC1jaGlsZHttYXJnaW4tYm90dG9tOjhweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIubWQtY2FyZC1oZWFkZXItZmxleHtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWNvbnRlbnR7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIrLm1kLWNhcmQtYWN0aW9uczpub3QoOmxhc3QtY2hpbGQpe3BhZGRpbmc6MCA4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ7bWFyZ2luLXJpZ2h0OjE2cHg7ZmxvYXQ6bGVmdH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWF2YXRhcn4ubWQtdGl0bGV7Zm9udC1zaXplOjE0cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXN1YmhlYWQsLm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1hdmF0YXJ+Lm1kLXRpdGxle2ZvbnQtd2VpZ2h0OjUwMDtsaW5lLWhlaWdodDoyMHB4fS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luLXJpZ2h0Oi00cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDo4cHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLWhlYWRlci10ZXh0ey1tcy1mbGV4OjE7ZmxleDoxfS5tZC1jYXJkIC5tZC1jYXJkLWhlYWRlciAubWQtY2FyZC1tZWRpYXt3aWR0aDo4MHB4Oy1tcy1mbGV4OjAgMCA4MHB4O2ZsZXg6MCAwIDgwcHg7aGVpZ2h0OjgwcHg7bWFyZ2luLWxlZnQ6MTZweH0ubWQtY2FyZCAubWQtY2FyZC1oZWFkZXIgLm1kLWNhcmQtbWVkaWEubWQtbWVkaXVte3dpZHRoOjEyMHB4Oy1tcy1mbGV4OjAgMCAxMjBweDtmbGV4OjAgMCAxMjBweDtoZWlnaHQ6MTIwcHh9Lm1kLWNhcmQgLm1kLWNhcmQtaGVhZGVyIC5tZC1jYXJkLW1lZGlhLm1kLWJpZ3t3aWR0aDoxNjBweDstbXMtZmxleDowIDAgMTYwcHg7ZmxleDowIDAgMTYwcHg7aGVpZ2h0OjE2MHB4fS5tZC1jYXJkIC5tZC1zdWJoZWFkLC5tZC1jYXJkIC5tZC1zdWJoZWFkaW5nLC5tZC1jYXJkIC5tZC10aXRsZXttYXJnaW46MDtmb250LXdlaWdodDo0MDB9Lm1kLWNhcmQgLm1kLXN1YmhlYWR7b3BhY2l0eTouNTQ7Zm9udC1zaXplOjE0cHg7bGV0dGVyLXNwYWNpbmc6LjAxZW07bGluZS1oZWlnaHQ6MjBweH0ubWQtY2FyZCAubWQtc3ViaGVhZCsubWQtdGl0bGV7bWFyZ2luLXRvcDo0cHh9Lm1kLWNhcmQgLm1kLXRpdGxle2ZvbnQtc2l6ZToyNHB4O2xldHRlci1zcGFjaW5nOjA7bGluZS1oZWlnaHQ6MzJweH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25ze3BhZGRpbmc6MTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1tZWRpYXttYXgtd2lkdGg6MjQwcHg7bWF4LWhlaWdodDoyNDBweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1hY3Rpb25zIC5tZC1jYXJkLWFjdGlvbnN7bWFyZ2luLWxlZnQ6MTZweDstbXMtZmxleC1kaXJlY3Rpb246Y29sdW1uO2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjstbXMtZmxleC1wYWNrOnN0YXJ0O2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtYWN0aW9ucyAubWQtY2FyZC1hY3Rpb25zIC5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW46OHB4IDAgMH0ubWQtY2FyZCAubWQtY2FyZC1jb250ZW50e3BhZGRpbmc6MTZweDtmb250LXNpemU6MTRweDtsaW5lLWhlaWdodDoyMnB4fS5tZC1jYXJkIC5tZC1jYXJkLWNvbnRlbnQ6bGFzdC1jaGlsZHtwYWRkaW5nLWJvdHRvbToyNHB4fS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZzo4cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXJ9Lm1kLWNhcmQgLm1kLWNhcmQtYWN0aW9ucyAubWQtYnV0dG9ue21hcmdpbjowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC1jYXJkIC5tZC1jYXJkLWFjdGlvbnMgLm1kLWJ1dHRvbisubWQtYnV0dG9ue21hcmdpbi1sZWZ0OjRweH0ubWQtY2FyZCAubWQtY2FyZC1hcmVhLC5tZC1jYXJkPi5tZC1jYXJkLWFyZWE6bm90KDpsYXN0LWNoaWxkKXtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6YWZ0ZXJ7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2FyZD4ubWQtY2FyZC1hcmVhOm5vdCg6bGFzdC1jaGlsZCk6bm90KC5tZC1pbnNldCk6YWZ0ZXJ7cmlnaHQ6MDtsZWZ0OjB9Lm1kLWNhcmQ+Lm1kLWNhcmQtYXJlYTpub3QoOmxhc3QtY2hpbGQpLm1kLWluc2V0OmFmdGVye3JpZ2h0OjE2cHg7bGVmdDoxNnB4fS5tZC1jYXJkIC5tZC1jYXJkLW1lZGlhLWNvdmVye3Bvc2l0aW9uOnJlbGF0aXZlO2NvbG9yOiNmZmZ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIubWQtdGV4dC1zY3JpbSAubWQtY2FyZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjF9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtYXJlYXtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtbWVkaWEtY292ZXIgLm1kLWNhcmQtaGVhZGVyKy5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MH0ubWQtY2FyZCAubWQtY2FyZC1tZWRpYS1jb3ZlciAubWQtc3ViaGVhZHtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5ke292ZXJmbG93OmhpZGRlbn0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpIHRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQubWQtYWN0aXZlIC5tZC1jYXJkLWNvbnRlbnR7bWFyZ2luLXRvcDowIWltcG9ydGFudDtvcGFjaXR5OjF9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIC5tZC1jYXJkLWFjdGlvbnN7cGFkZGluZy10b3A6MDtwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjJ9Lm1kLWNhcmQgLm1kLWNhcmQtZXhwYW5kIFttZC1leHBhbmQtdHJpZ2dlcl17dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3dpbGwtY2hhbmdlOnRyYW5zZm9ybX0ubWQtY2FyZCAubWQtY2FyZC1leHBhbmQgLm1kLWNhcmQtY29udGVudHtwYWRkaW5nLXRvcDo0cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt3aWxsLWNoYW5nZTptYXJnaW59Lm1kLWNoZWNrYm94e3dpZHRoOmF1dG87bWFyZ2luOjE2cHggOHB4IDE2cHggMDtkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4O3Bvc2l0aW9uOnJlbGF0aXZlfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czoycHg7Ym9yZGVyOjJweCBzb2xpZCByZ2JhKDAsMCwwLC41NCk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjpiZWZvcmV7d2lkdGg6NDhweDtoZWlnaHQ6NDhweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO2JvcmRlci1yYWRpdXM6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2l0aW9uOmFsbCAuM3MgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWNoZWNrYm94IC5tZC1jaGVja2JveC1jb250YWluZXI6YWZ0ZXJ7d2lkdGg6NnB4O2hlaWdodDoxM3B4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6NXB4O2JvcmRlcjoycHggc29saWQgI2ZmZjtib3JkZXItdG9wOjA7Ym9yZGVyLWxlZnQ6MDtvcGFjaXR5OjA7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZykgc2NhbGUzRCguMTUsLjE1LDEpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWxhYmVse2hlaWdodDoyMHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MjBweH0ubWQtY2hlY2tib3gubWQtY2hlY2tlZCAubWQtY2hlY2tib3gtY29udGFpbmVyOmFmdGVye29wYWNpdHk6MTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKSBzY2FsZTNEKDEsMSwxKTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWluay1yaXBwbGV7cG9pbnRlci1ldmVudHM6bm9uZTtvdmVyZmxvdzpoaWRkZW47cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7LXdlYmtpdC1tYXNrLWltYWdlOnJhZGlhbC1ncmFkaWVudChjaXJjbGUsI2ZmZiAxMDAlLCMwMDAgMCk7bWFzay1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCNmZmYgMTAwJSwjMDAwIDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKX0ubWQtcmlwcGxle3Bvc2l0aW9uOmFic29sdXRlO3RyYW5zZm9ybTpzY2FsZSgwKTtiYWNrZ3JvdW5kLWNvbG9yOmN1cnJlbnRDb2xvcjtvcGFjaXR5Oi4yNjtib3JkZXItcmFkaXVzOjUwJX0ubWQtcmlwcGxlLm1kLWFjdGl2ZXthbmltYXRpb246cmlwcGxlIDFzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfUBrZXlmcmFtZXMgcmlwcGxle3Rve3RyYW5zZm9ybTpzY2FsZSgxLjUpO29wYWNpdHk6MH19Lm1kLWRpYWxvZy1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjpmaXhlZDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4OjEwOH0ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmV7cG9pbnRlci1ldmVudHM6YXV0b30ubWQtZGlhbG9nLWNvbnRhaW5lci5tZC1hY3RpdmUgLm1kLWRpYWxvZ3tvcGFjaXR5OjEhaW1wb3J0YW50O3RyYW5zZm9ybTpzY2FsZSgxKSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy1iYWNrZHJvcHtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwOX0ubWQtZGlhbG9ne21pbi13aWR0aDoyODBweDttYXgtd2lkdGg6ODAlO21heC1oZWlnaHQ6ODAlO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uO2ZsZXgtZmxvdzpjb2x1bW47b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTEwO291dGxpbmU6bm9uZTtib3JkZXItcmFkaXVzOjJweDtvcGFjaXR5OjA7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKTt0cmFuc2Zvcm06c2NhbGUoLjksLjg1KTt0cmFuc2Zvcm0tb3JpZ2luOmNlbnRlciBjZW50ZXI7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4wNXM7d2lsbC1jaGFuZ2U6b3BhY2l0eSx0cmFuc2Zvcm19Lm1kLWRpYWxvZy5tZC1yZWZlcmVuY2V7dHJhbnNmb3JtLW9yaWdpbjp0b3AgY2VudGVyfS5tZC1kaWFsb2cubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtZGlhbG9nIHB7bWFyZ2luOjB9Lm1kLWRpYWxvZy10aXRsZXttYXJnaW4tYm90dG9tOjIwcHg7cGFkZGluZzoyNHB4IDI0cHggMH0ubWQtZGlhbG9nLWNvbnRlbnR7cGFkZGluZzowIDI0cHggMjRweDstbXMtZmxleDoxO2ZsZXg6MTtvdmVyZmxvdzphdXRvO3Bvc2l0aW9uOnJlbGF0aXZlO2JhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywjZmZmIDAsI2ZmZiAxcHgsdHJhbnNwYXJlbnQgMCksbGluZWFyLWdyYWRpZW50KDBkZWcsI2ZmZiAwLCNmZmYgM3B4LHRyYW5zcGFyZW50IDApLGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSgwLDAsMCwuMTIpIDAscmdiYSgwLDAsMCwuMTIpIDFweCx0cmFuc3BhcmVudCAwKSxsaW5lYXItZ3JhZGllbnQoMGRlZyxyZ2JhKDAsMCwwLC4yKSAxcHgscmdiYSgwLDAsMCwuMikgMnB4LHRyYW5zcGFyZW50IDApO2JhY2tncm91bmQtYXR0YWNobWVudDpsb2NhbCxsb2NhbCxzY3JvbGwsc2Nyb2xsfS5tZC1kaWFsb2ctY29udGVudDpmaXJzdC1jaGlsZHtwYWRkaW5nLXRvcDoyNHB4fS5tZC1kaWFsb2ctY29udGVudCBwOmZpcnN0LWNoaWxkOm5vdCg6b25seS1jaGlsZCl7bWFyZ2luLXRvcDowfS5tZC1kaWFsb2ctY29udGVudCBwOmxhc3QtY2hpbGQ6bm90KDpvbmx5LWNoaWxkKXttYXJnaW4tYm90dG9tOjB9Lm1kLWRpYWxvZy1ib2R5e21hcmdpbjowIC0yNHB4O3BhZGRpbmc6MCAyNHB4O292ZXJmbG93OmF1dG99Lm1kLWRpYWxvZy1hY3Rpb25ze21pbi1oZWlnaHQ6NTJweDtwYWRkaW5nOjhweCA4cHggOHB4IDI0cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWRpYWxvZy1hY3Rpb25zOmJlZm9yZXtoZWlnaHQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMXB4O3JpZ2h0OjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6I2ZmZjtjb250ZW50OlxcXCIgXFxcIn0ubWQtZGlhbG9nLWFjdGlvbnMgLm1kLWJ1dHRvbnttaW4td2lkdGg6NjRweDttYXJnaW46MDtwYWRkaW5nOjAgOHB4fS5tZC1kaWFsb2ctYWN0aW9ucyAubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6OHB4fS5tZC1kaXZpZGVye2hlaWdodDoxcHg7bWFyZ2luOjA7cGFkZGluZzowO2Rpc3BsYXk6YmxvY2s7Ym9yZGVyOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWRpdmlkZXIubWQtaW5zZXR7bWFyZ2luLWxlZnQ6NzJweH0ubWQtaWNvbnt3aWR0aDoyNHB4O21pbi13aWR0aDoyNHB4O2hlaWdodDoyNHB4O21pbi1oZWlnaHQ6MjRweDttYXJnaW46YXV0bztkaXNwbGF5Oi1tcy1pbmxpbmUtZmxleGJveDtkaXNwbGF5OmlubGluZS1mbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7ZmlsbDpjdXJyZW50Q29sb3I7dmVydGljYWwtYWxpZ246bWlkZGxlfS5tZC1pbnB1dC1jb250YWluZXJ7bWluLWhlaWdodDo0OHB4O21hcmdpbjo0cHggMCAyNHB4O3BhZGRpbmctdG9wOjE2cHg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlcntoZWlnaHQ6MXB4O3JpZ2h0OjA7Ym90dG9tOjA7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMik7Y29udGVudDpcXFwiIFxcXCJ9Lm1kLWlucHV0LWNvbnRhaW5lcjphZnRlciwubWQtaW5wdXQtY29udGFpbmVyIGxhYmVse3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWlucHV0LWNvbnRhaW5lciBsYWJlbHt0b3A6MjNweDtwb2ludGVyLWV2ZW50czpub25lO3RyYW5zaXRpb24tZHVyYXRpb246LjNzO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDtsaW5lLWhlaWdodDoyMHB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O3BhZGRpbmc6MDtkaXNwbGF5OmJsb2NrO2JvcmRlcjpub25lO2JhY2tncm91bmQ6bm9uZTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTpmb250LXNpemU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFweDtsaW5lLWhlaWdodDozMnB4fS5tZC1pbnB1dC1jb250YWluZXIgaW5wdXQ6Zm9jdXMsLm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYTpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLWlucHV0LWNvbnRhaW5lciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwubWQtaW5wdXQtY29udGFpbmVyIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTZweDt0ZXh0LXNoYWRvdzpub25lOy13ZWJraXQtdGV4dC1maWxsLWNvbG9yOmluaXRpYWx9Lm1kLWlucHV0LWNvbnRhaW5lciB0ZXh0YXJlYXttaW4taGVpZ2h0OjMycHg7bWF4LWhlaWdodDoyMzBweDtwYWRkaW5nOjVweCAwO3Jlc2l6ZTpub25lO2xpbmUtaGVpZ2h0OjEuM2VtfS5tZC1pbnB1dC1jb250YWluZXIgLm1kLWVycm9ye2hlaWdodDoyMHB4O2Rpc3BsYXk6YmxvY2shaW1wb3J0YW50O3Bvc2l0aW9uOmFic29sdXRlO29wYWNpdHk6MDt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwtOHB4LDApO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyIC5tZC1jb3VudHtoZWlnaHQ6MjBweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2ZvbnQtc2l6ZToxMnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtcGxhY2Vob2xkZXIgbGFiZWx7cG9pbnRlci1ldmVudHM6YXV0bzt0b3A6MTBweDtvcGFjaXR5OjA7Zm9udC1zaXplOjEycHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZm9jdXNlZCBsYWJlbHtwb2ludGVyLWV2ZW50czphdXRvO3RvcDowO29wYWNpdHk6MTtmb250LXNpemU6MTJweH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy12YWx1ZSB0ZXh0YXJlYSwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWZvY3VzZWQgaW5wdXQsLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1mb2N1c2VkIHRleHRhcmVhe2ZvbnQtc2l6ZToxNnB4fS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIGlucHV0LC5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXZhbHVlIHRleHRhcmVhe2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWlubGluZSBsYWJlbHtwb2ludGVyLWV2ZW50czpub25lfS5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtaW5saW5lLm1kLWlucHV0LWZvY3VzZWQgbGFiZWx7dG9wOjIzcHg7Zm9udC1zaXplOjE2cHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1pbmxpbmUubWQtaGFzLXZhbHVlIGxhYmVse29wYWNpdHk6MH0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkOmFmdGVye2JhY2tncm91bmQ6MCAxMDAlIHJlcGVhdC14O2JhY2tncm91bmQtaW1hZ2U6bGluZWFyLWdyYWRpZW50KDkwZGVnLHJnYmEoMCwwLDAsLjM4KSAwLHJnYmEoMCwwLDAsLjM4KSAzMyUsdHJhbnNwYXJlbnQgMCk7YmFja2dyb3VuZC1zaXplOjRweCAxcHh9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1kaXNhYmxlZCBpbnB1dCwubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWRpc2FibGVkIGxhYmVsLC5tZC1pbnB1dC1jb250YWluZXIubWQtaW5wdXQtZGlzYWJsZWQgdGV4dGFyZWF7Y29sb3I6cmdiYSgwLDAsMCwuMzgpfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXBhc3N3b3JkLm1kLWlucHV0LWZvY3VzZWQgLm1kLXRvZ2dsZS1wYXNzd29yZHtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWlucHV0LWNvbnRhaW5lci5tZC1oYXMtcGFzc3dvcmQgLm1kLXRvZ2dsZS1wYXNzd29yZHttYXJnaW46MDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTotMnB4O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWhhcy1wYXNzd29yZCAubWQtdG9nZ2xlLXBhc3N3b3JkIC5tZC1pbmstcmlwcGxle2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LWludmFsaWQgLm1kLWVycm9ye29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlWigwKX0ubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXJlcXVpcmVkIGxhYmVsOmFmdGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDoycHg7cmlnaHQ6MDt0cmFuc2Zvcm06dHJhbnNsYXRlWChjYWxjKDEwMCUgKyAycHgpKTtjb250ZW50OlxcXCIqXFxcIjtmb250LXNpemU6MTJweDtsaW5lLWhlaWdodDoxZW07dmVydGljYWwtYWxpZ246dG9wfS5tZC1pbnB1dC1jb250YWluZXIubWQtaGFzLXNlbGVjdDpob3ZlciAubWQtc2VsZWN0Om5vdCgubWQtZGlzYWJsZWQpOmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtbGlzdHttYXJnaW46MDtwYWRkaW5nOjhweCAwO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uO3Bvc2l0aW9uOnJlbGF0aXZlO2xpc3Qtc3R5bGU6bm9uZX0ubWQtbGlzdC5tZC1kZW5zZXtwYWRkaW5nOjRweCAwfS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0ubWQtaW5zZXQgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7cGFkZGluZy1sZWZ0OjcycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnttaW4taGVpZ2h0OjQwcHg7Zm9udC1zaXplOjEzcHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtYXZhdGFyOmZpcnN0LWNoaWxke21hcmdpbi1yaWdodDoyNHB4fS5tZC1saXN0Lm1kLWRlbnNlIC5tZC1hdmF0YXJ7d2lkdGg6MzJweDttaW4td2lkdGg6MzJweDtoZWlnaHQ6MzJweDttaW4taGVpZ2h0OjMycHh9Lm1kLWxpc3QubWQtZGVuc2UgLm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo2MHB4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9Lm1kLWxpc3QubWQtZG91YmxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgxKSwubWQtbGlzdC5tZC1kb3VibGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLWRvdWJsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3MnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo3NnB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lLm1kLWRlbnNlIC5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcnt3aWR0aDozNnB4O21pbi13aWR0aDozNnB4O2hlaWdodDozNnB4O21pbi1oZWlnaHQ6MzZweH0ubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjIwcHh9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUubWQtZGVuc2UgLm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgxKSwubWQtbGlzdC5tZC10cmlwbGUtbGluZS5tZC1kZW5zZSAubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpe2ZvbnQtc2l6ZToxM3B4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7bWluLWhlaWdodDo4OHB4fS5tZC1saXN0Lm1kLXRyaXBsZS1saW5lIC5tZC1hdmF0YXJ7bWFyZ2luOjB9Lm1kLWxpc3QubWQtdHJpcGxlLWxpbmUgLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7LW1zLWZsZXgtYWxpZ246c3RhcnQ7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0ubWQtbGlzdCAubWQtc3ViaGVhZGVyLm1kLWluc2V0e3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0Pi5tZC1zdWJoZWFkZXI6Zmlyc3Qtb2YtdHlwZXttYXJnaW4tdG9wOi04cHh9Lm1kLWxpc3QtaXRlbXtoZWlnaHQ6YXV0bztwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtbGlzdC1pdGVtLm1kLWluc2V0IC5tZC1saXN0LWl0ZW0tY29udGFpbmVye3BhZGRpbmctbGVmdDo3MnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1ob2xkZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpyb3cgbm93cmFwO2ZsZXgtZmxvdzpyb3c7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47LW1zLWZsZXg6MTtmbGV4OjF9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcj4ubWQtaW5rLXJpcHBsZXtib3JkZXItcmFkaXVzOjB9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcj4ubWQtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tcmlnaHQ6MzJweH0ubWQtbGlzdC1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVyIC5tZC1hdmF0YXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb257bWFyZ2luOjAgLTJweCAwIDB9Lm1kLWxpc3QtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlciAubWQtbGlzdC1hY3Rpb246bnRoLWNoaWxkKDMpe21hcmdpbjowIC0ycHggMCAxNnB4fS5tZC1saXN0LWl0ZW0gLm1kLWxpc3QtaXRlbS1jb250YWluZXJ7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQ4cHg7bWFyZ2luOjA7cGFkZGluZzowIDE2cHg7cG9zaXRpb246cmVsYXRpdmU7Ym9yZGVyLXJhZGl1czowO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0OjQwMDt0ZXh0LWFsaWduOmxlZnQ7dGV4dC10cmFuc2Zvcm06bm9uZX0ubWQtbGlzdC1pdGVtIC5tZC1kaXZpZGVye3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowO3JpZ2h0OjA7bGVmdDowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhciwubWQtbGlzdC1pdGVtIC5tZC1pY29ue21hcmdpbjowfS5tZC1saXN0LWl0ZW0gLm1kLWF2YXRhcjpmaXJzdC1vZi10eXBlKyosLm1kLWxpc3QtaXRlbSAubWQtaWNvbjpmaXJzdC1vZi10eXBlKyp7LW1zLWZsZXg6MSAxIGF1dG87ZmxleDoxIDEgYXV0b30ubWQtbGlzdC1pdGVtIC5tZC1hdmF0YXJ7bWFyZ2luLXRvcDo4cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm1kLWxpc3QtaXRlbSAubWQtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLWxpc3QtaXRlbS1leHBhbmR7bWluLWhlaWdodDo0OHB4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIHdyYXA7ZmxleC1mbG93OmNvbHVtbiB3cmFwO292ZXJmbG93OmhpZGRlbn0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlciwubWQtbGlzdC1pdGVtLWV4cGFuZDpiZWZvcmV7aGVpZ2h0OjFweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2xlZnQ6MDt6LWluZGV4OjM7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2NvbnRlbnQ6XFxcIiBcXFwifS5tZC1saXN0LWl0ZW0tZXhwYW5kOmJlZm9yZXt0b3A6MH0ubWQtbGlzdC1pdGVtLWV4cGFuZDphZnRlcntib3R0b206MH0ubWQtbGlzdC1pdGVtLWV4cGFuZC5tZC1hY3RpdmV7cG9zaXRpb246cmVsYXRpdmV9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmFmdGVyLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpiZWZvcmV7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4xMil9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlOmZpcnN0LW9mLXR5cGU6YmVmb3JlLC5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZTpsYXN0LW9mLXR5cGU6YWZ0ZXJ7YmFja2dyb3VuZDpub25lfS5tZC1saXN0LWl0ZW0tZXhwYW5kLm1kLWFjdGl2ZT4ubWQtbGlzdC1pdGVtLWNvbnRhaW5lciAubWQtbGlzdC1leHBhbmQtaW5kaWNhdG9ye3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKSB0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLWxpc3QtaXRlbS1leHBhbmQubWQtYWN0aXZlPi5tZC1saXN0LWV4cGFuZHttYXJnaW4tYm90dG9tOjAhaW1wb3J0YW50fS5tZC1saXN0LWl0ZW0tZXhwYW5kPi5tZC1saXN0LWl0ZW0tY29udGFpbmVyPi5tZC1saXN0LWl0ZW0taG9sZGVye3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6Mn0ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtZXhwYW5zaW9uLWluZGljYXRvciwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtaWNvbiwubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5ke3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoMCwwLDApO3dpbGwtY2hhbmdlOm1hcmdpbi1ib3R0b207dHJhbnNpdGlvbjphbGwgLjVzIGN1YmljLWJlemllciguMzUsMCwuMjUsMSl9Lm1kLWxpc3QtaXRlbS1leHBhbmQgLm1kLWxpc3QtZXhwYW5kLm1kLXRyYW5zaXRpb24tb2Zme3RyYW5zaXRpb246bm9uZX0ubWQtbGlzdC1pdGVtLWV4cGFuZCAubWQtbGlzdC1leHBhbmQgLm1kLWxpc3R7cGFkZGluZzowfS5tZC1saXN0LXRleHQtY29udGFpbmVye2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWZsb3c6Y29sdW1uIG5vd3JhcDtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4OjE7ZmxleDoxO292ZXJmbG93OmhpZGRlbjtsaW5lLWhlaWdodDoxLjI1ZW07dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3JtYWx9Lm1kLWxpc3QtdGV4dC1jb250YWluZXI+Om50aC1jaGlsZCgxKXtmb250LXNpemU6MTZweH0ubWQtbGlzdC10ZXh0LWNvbnRhaW5lcj46bnRoLWNoaWxkKDIpLC5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMyl7bWFyZ2luOjA7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxNHB4fS5tZC1saXN0LXRleHQtY29udGFpbmVyPjpudGgtY2hpbGQoMik6bm90KDpsYXN0LWNoaWxkKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLW1lbnV7ZGlzcGxheTppbmxpbmUtYmxvY2t9Lm1kLW1lbnUtY29udGVudHt3aWR0aDoxNjhweDttaW4td2lkdGg6ODRweDttYXgtd2lkdGg6MzkycHg7bWluLWhlaWdodDo2NHB4O21heC1oZWlnaHQ6Y2FsYygxMDB2aCAtIDMycHgpO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0bztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjEyMDt0cmFuc2Zvcm06c2NhbGUoLjksLjg1KSB0cmFuc2xhdGVaKDApO2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjJweDtib3gtc2hhZG93OjAgMXB4IDVweCByZ2JhKDAsMCwwLC4yKSwwIDJweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjEyKTtvcGFjaXR5OjA7dHJhbnNpdGlvbjp3aWR0aCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksb3BhY2l0eSAuMjVzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpLG1hcmdpbiAuMnMgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpIC4yNXM7d2lsbC1jaGFuZ2U6dHJhbnNmb3JtLG9wYWNpdHksd2lkdGg7Y29sb3I6cmdiYSgzMywzMywzMywuODcpfS5tZC1tZW51LWNvbnRlbnQubWQtZGlyZWN0aW9uLWJvdHRvbS1yaWdodHttYXJnaW4tdG9wOi0yMHB4O21hcmdpbi1sZWZ0Oi04cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgbGVmdH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnR7bWFyZ2luLXRvcDotMjBweDttYXJnaW4tbGVmdDo4cHg7dHJhbnNmb3JtLW9yaWdpbjp0b3AgcmlnaHR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tYm90dG9tLWxlZnQubWQtYWN0aXZle21hcmdpbi10b3A6LTExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0e21hcmdpbi10b3A6MjBweDttYXJnaW4tbGVmdDotOHB4O3RyYW5zZm9ybS1vcmlnaW46Ym90dG9tIGxlZnR9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLXJpZ2h0Lm1kLWFjdGl2ZXttYXJnaW4tdG9wOjExcHh9Lm1kLW1lbnUtY29udGVudC5tZC1kaXJlY3Rpb24tdG9wLWxlZnR7bWFyZ2luLXRvcDoyMHB4O21hcmdpbi1sZWZ0OjhweDt0cmFuc2Zvcm0tb3JpZ2luOmJvdHRvbSByaWdodH0ubWQtbWVudS1jb250ZW50Lm1kLWRpcmVjdGlvbi10b3AtbGVmdC5tZC1hY3RpdmV7bWFyZ2luLXRvcDoxMXB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWxpZ24tdHJpZ2dlcnttYXJnaW46MH0ubWQtbWVudS1jb250ZW50Lm1kLXNpemUtMXt3aWR0aDo4NHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ye3dpZHRoOjExMnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS0ze3dpZHRoOjE2OHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS00e3dpZHRoOjIyNHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS01e3dpZHRoOjI4MHB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS02e3dpZHRoOjMzNnB4fS5tZC1tZW51LWNvbnRlbnQubWQtc2l6ZS03e3dpZHRoOjM5MnB4fS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZle3BvaW50ZXItZXZlbnRzOmF1dG87b3BhY2l0eToxO3RyYW5zZm9ybTpzY2FsZSgxKSB0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246d2lkdGggLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpLG9wYWNpdHkgLjM1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSx0cmFuc2Zvcm0gLjI1cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSAuMDVzfS5tZC1tZW51LWNvbnRlbnQubWQtYWN0aXZlIC5tZC1saXN0e29wYWNpdHk6MTt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpIC4xNXN9Lm1kLW1lbnUtY29udGVudCAubWQtbGlzdHtvcGFjaXR5OjA7dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtbWVudS1pdGVte2N1cnNvcjpwb2ludGVyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjEuMmVtfS5tZC1tZW51LWl0ZW0ubWQtaGlnaGxpZ2h0ZWQgLm1kLWJ1dHRvbjpub3QoW2Rpc2FibGVkXSksLm1kLW1lbnUtaXRlbTpmb2N1cyAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwubWQtbWVudS1pdGVtOmhvdmVyIC5tZC1idXR0b246bm90KFtkaXNhYmxlZF0pe2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMTIpfS5tZC1tZW51LWl0ZW1bZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0O2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtbWVudS1pdGVtIC5tZC1saXN0LWl0ZW0taG9sZGVye292ZXJmbG93OmhpZGRlbjt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5tZC1yYWRpb3t3aWR0aDphdXRvO21hcmdpbjoxNnB4IDhweCAxNnB4IDA7ZGlzcGxheTotbXMtaW5saW5lLWZsZXhib3g7ZGlzcGxheTppbmxpbmUtZmxleDtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lcnt3aWR0aDoyMHB4O2hlaWdodDoyMHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlcjoycHggc29saWQgcmdiYSgwLDAsMCwuNTQpO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lcjphZnRlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6M3B4O3JpZ2h0OjNweDtib3R0b206M3B4O2xlZnQ6M3B4O2JvcmRlci1yYWRpdXM6NTAlO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCguMzgsLjM4LDEpO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTtjb250ZW50OlxcXCIgXFxcIn0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciBpbnB1dHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtcmFkaW8gLm1kLXJhZGlvLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1yYWRpbyAubWQtcmFkaW8tY29udGFpbmVyIC5tZC1pbmstcmlwcGxlIC5tZC1yaXBwbGV7d2lkdGg6NDhweCFpbXBvcnRhbnQ7aGVpZ2h0OjQ4cHghaW1wb3J0YW50O3RvcDowIWltcG9ydGFudDtyaWdodDowIWltcG9ydGFudDtib3R0b206MCFpbXBvcnRhbnQ7bGVmdDowIWltcG9ydGFudH0ubWQtcmFkaW8gLm1kLXJhZGlvLWxhYmVse2hlaWdodDoyMHB4O3BhZGRpbmctbGVmdDo4cHg7bGluZS1oZWlnaHQ6MjBweH0ubWQtcmFkaW8ubWQtY2hlY2tlZCAubWQtcmFkaW8tY29udGFpbmVyOmFmdGVye29wYWNpdHk6MTt0cmFuc2Zvcm06c2NhbGUzRCgxLDEsMSk7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC1zZWxlY3R7d2lkdGg6MTAwJTttaW4td2lkdGg6MTI4cHg7aGVpZ2h0OjMycHg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmV9Lm1kLXNlbGVjdDphZnRlcnttYXJnaW4tdG9wOjJweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO3JpZ2h0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSkgc2NhbGVZKC40NSkgc2NhbGVYKC44NSk7dHJhbnNpdGlvbjphbGwgLjA4cyBsaW5lYXI7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2NvbnRlbnQ6XFxcIlxcXFwyNUJDXFxcIn0ubWQtc2VsZWN0Lm1kLWFjdGl2ZSAubWQtc2VsZWN0LW1lbnV7dG9wOi04cHg7cG9pbnRlci1ldmVudHM6YXV0bztvcGFjaXR5OjE7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLThweCkgc2NhbGUzRCgxLDEsMSk7dHJhbnNmb3JtLW9yaWdpbjpjZW50ZXIgdG9wO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4yNXM7dHJhbnNpdGlvbi1wcm9wZXJ0eTpvcGFjaXR5LHRyYW5zZm9ybSx0b3B9Lm1kLXNlbGVjdC5tZC1hY3RpdmUgLm1kLXNlbGVjdC1tZW51Pip7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4xNXM7dHJhbnNpdGlvbi1kZWxheTouMXN9Lm1kLXNlbGVjdC5tZC1kaXNhYmxlZHtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTt1c2VyLWRyYWc6bm9uZX0ubWQtc2VsZWN0Lm1kLWRpc2FibGVkOmFmdGVye2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtc2VsZWN0IHNlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi05OTllbX0ubWQtc2VsZWN0IC5tZC1tZW51LC5tZC1zZWxlY3QgLm1kLXNlbGVjdC12YWx1ZXt3aWR0aDoxMDAlO2hlaWdodDozMnB4O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVle3BhZGRpbmctcmlnaHQ6MjRweDtjdXJzb3I6cG9pbnRlcjtvdmVyZmxvdzpoaWRkZW47ei1pbmRleDoyO2ZvbnQtc2l6ZToxNnB4O2xpbmUtaGVpZ2h0OjMzcHg7dGV4dC1vdmVyZmxvdzplbGxpcHNpczt3aGl0ZS1zcGFjZTpub3dyYXB9Lm1kLXNlbGVjdCAubWQtc2VsZWN0LW1lbnV7bWluLXdpZHRoOjE1NnB4O21heC13aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDhweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6c3RyZXRjaDstbXMtZmxleC1saW5lLXBhY2s6c3RyZXRjaDthbGlnbi1jb250ZW50OnN0cmV0Y2g7cG9pbnRlci1ldmVudHM6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6LTE2cHg7bGVmdDotMTZweDt6LWluZGV4Ojc7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1yYWRpdXM6MnB4O2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpO29wYWNpdHk6MDt0cmFuc2Zvcm06c2NhbGUzRCguODUsLjcsMSk7dHJhbnNpdGlvbjpvcGFjaXR5IC4yNXMgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksdG9wIC4yNXMgY3ViaWMtYmV6aWVyKC41NSwwLC41NSwuMiksdHJhbnNmb3JtIDBzIGN1YmljLWJlemllciguNTUsMCwuNTUsLjIpIC4yNXM7Y29sb3I6cmdiYSgzMywzMywzMywuODcpfS5tZC1zZWxlY3QgLm1kLXNlbGVjdC1tZW51Pip7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4yNXN9Lm1kLXNlbGVjdCAubWQtc2VsZWN0LW1lbnUtY29udGFpbmVye21hcmdpbjowO3BhZGRpbmc6OHB4IDA7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjstbXMtZmxleC1wYWNrOnN0cmV0Y2g7anVzdGlmeS1jb250ZW50OnN0cmV0Y2g7LW1zLWZsZXgtbGluZS1wYWNrOnN0cmV0Y2g7YWxpZ24tY29udGVudDpzdHJldGNoO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6YXV0b30ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXJ7Y29sb3I6aHNsYSgwLDAlLDQ2JSwuODcpO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWQtc2VsZWN0IC5tZC1zdWJoZWFkZXI6Zmlyc3QtY2hpbGR7bWFyZ2luLXRvcDotOHB4fS5tZC1zZWxlY3QtY29udGVudHt3aWR0aDphdXRvO21heC1oZWlnaHQ6MjU2cHh9Lm1kLXNlbGVjdC1jb250ZW50Lm1kLWRpcmVjdGlvbi1ib3R0b20tcmlnaHR7bWFyZ2luLXRvcDotMTVweDttYXJnaW4tbGVmdDotMTZweH0ubWQtc2VsZWN0LWNvbnRlbnQgLm1kLW1lbnUtaXRlbSAubWQtbGlzdC1pdGVtLWhvbGRlcntvdmVyZmxvdzp2aXNpYmxlOy1tcy1mbGV4LXBhY2s6c3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9Lm1kLXNlbGVjdC1jb250ZW50Lm1kLW11bHRpcGxlIC5tZC1jaGVja2JveHttYXJnaW46MH0ubWQtc2VsZWN0LWNvbnRlbnQubWQtbXVsdGlwbGUgLm1kLWNoZWNrYm94LWxhYmVse3BhZGRpbmctbGVmdDoxNnB4O2N1cnNvcjpwb2ludGVyfS5tZC1zaWRlbmF2Lm1kLWxlZnQgLm1kLXNpZGVuYXYtY29udGVudHtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKC0xMDAlLDAsMCl9Lm1kLXNpZGVuYXYubWQtcmlnaHQgLm1kLXNpZGVuYXYtY29udGVudHtyaWdodDowO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgxMDAlLDAsMCl9Lm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtYmFja2Ryb3AsLm1kLXNpZGVuYXYubWQtZml4ZWQgLm1kLXNpZGVuYXYtY29udGVudHtwb3NpdGlvbjpmaXhlZH0ubWQtc2lkZW5hdiAubWQtc2lkZW5hdi1jb250ZW50e3dpZHRoOjMwNHB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO3otaW5kZXg6MTAwO3BvaW50ZXItZXZlbnRzOm5vbmU7b3ZlcmZsb3c6YXV0bzstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1wcm9wZXJ0eTp0cmFuc2Zvcm07d2lsbC1jaGFuZ2U6dHJhbnNmb3JtfS5tZC1zaWRlbmF2IC5tZC1iYWNrZHJvcHtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDt6LWluZGV4Ojk5O3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC41NCk7b3BhY2l0eTowO3RyYW5zaXRpb246YWxsIC41cyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpO3RyYW5zaXRpb24tcHJvcGVydHk6b3BhY2l0eTt3aWxsLWNoYW5nZTpvcGFjaXR5fS5tZC1zaWRlbmF2Lm1kLWFjdGl2ZSAubWQtc2lkZW5hdi1jb250ZW50e2JveC1zaGFkb3c6MCA4cHggMTBweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTZweCAyNHB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzBweCA1cHggcmdiYSgwLDAsMCwuMTIpO3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtc2lkZW5hdi5tZC1hY3RpdmUgLm1kLXNpZGVuYXYtYmFja2Ryb3B7b3BhY2l0eToxO3BvaW50ZXItZXZlbnRzOmF1dG99Lm1kLXN1YmhlYWRlcnttaW4taGVpZ2h0OjQ4cHg7cGFkZGluZzowIDE2cHg7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1mbG93OnJvdyB3cmFwO2ZsZXgtZmxvdzpyb3cgd3JhcDtjb2xvcjpyZ2JhKDAsMCwwLC41NCk7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwfS5tZC1zd2l0Y2h7d2lkdGg6YXV0bzttYXJnaW46MTZweCA4cHggMTZweCAwO2Rpc3BsYXk6LW1zLWlubGluZS1mbGV4Ym94O2Rpc3BsYXk6aW5saW5lLWZsZXg7cG9zaXRpb246cmVsYXRpdmV9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lcnt3aWR0aDozNHB4O2hlaWdodDoxNHB4O3Bvc2l0aW9uOnJlbGF0aXZlO2JvcmRlci1yYWRpdXM6MTRweDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtc3dpdGNoLXRodW1ie3dpZHRoOjIwcHg7aGVpZ2h0OjIwcHg7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojZmFmYWZhO2JvcmRlci1yYWRpdXM6NTAlO2JveC1zaGFkb3c6MCAxcHggM3B4IHJnYmEoMCwwLDAsLjIpLDAgMXB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAycHggMXB4IC0xcHggcmdiYSgwLDAsMCwuMTIpO3RyYW5zaXRpb246YWxsIC4wOHMgbGluZWFyfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgaW5wdXR7cG9zaXRpb246YWJzb2x1dGU7bGVmdDotOTk5ZW19Lm1kLXN3aXRjaCAubWQtc3dpdGNoLWNvbnRhaW5lciAubWQtaW5rLXJpcHBsZXt0b3A6LTE2cHg7cmlnaHQ6LTE2cHg7Ym90dG9tOi0xNnB4O2xlZnQ6LTE2cHg7Ym9yZGVyLXJhZGl1czo1MCU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpfS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLWluay1yaXBwbGUgLm1kLXJpcHBsZXt3aWR0aDo0OHB4IWltcG9ydGFudDtoZWlnaHQ6NDhweCFpbXBvcnRhbnQ7dG9wOjAhaW1wb3J0YW50O3JpZ2h0OjAhaW1wb3J0YW50O2JvdHRvbTowIWltcG9ydGFudDtsZWZ0OjAhaW1wb3J0YW50fS5tZC1zd2l0Y2ggLm1kLXN3aXRjaC1jb250YWluZXIgLm1kLXN3aXRjaC1ob2xkZXJ7d2lkdGg6NDBweDtoZWlnaHQ6NDBweDttYXJnaW46MDtwYWRkaW5nOjA7cG9zaXRpb246YWJzb2x1dGU7dG9wOjUwJTtsZWZ0OjUwJTt6LWluZGV4OjI7YmFja2dyb3VuZDpub25lO2JvcmRlcjpub25lO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtY29udGFpbmVyIC5tZC1zd2l0Y2gtaG9sZGVyOmZvY3Vze291dGxpbmU6bm9uZX0ubWQtc3dpdGNoIC5tZC1zd2l0Y2gtbGFiZWx7aGVpZ2h0OjE0cHg7cGFkZGluZy1sZWZ0OjhweDtsaW5lLWhlaWdodDoxNHB4fS5tZC1zd2l0Y2gubWQtZHJhZ2dpbmcgLm1kLXN3aXRjaC10aHVtYntjdXJzb3I6LXdlYmtpdC1ncmFiYmluZztjdXJzb3I6Z3JhYmJpbmd9Lm1kLXN3aXRjaC5tZC1kaXNhYmxlZCAubWQtc3dpdGNoLXRodW1ie2N1cnNvcjpkZWZhdWx0fS5tZC10YWJsZXtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbiB3cmFwO2ZsZXgtZmxvdzpjb2x1bW4gd3JhcDtvdmVyZmxvdy14OmF1dG99Lm1kLXRhYmxlLm1kLXRyYW5zaXRpb24tb2ZmIC5tZC1jaGVja2JveCAubWQtY2hlY2tib3gtY29udGFpbmVyLC5tZC10YWJsZS5tZC10cmFuc2l0aW9uLW9mZiAubWQtY2hlY2tib3ggLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlciwubWQtdGFibGUubWQtdHJhbnNpdGlvbi1vZmYgLm1kLXRhYmxlLWNlbGx7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdGFibGUgdGFibGV7d2lkdGg6MTAwJTtib3JkZXItc3BhY2luZzowO2JvcmRlci1jb2xsYXBzZTpjb2xsYXBzZTtvdmVyZmxvdzpoaWRkZW59Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3d7Ym9yZGVyLXRvcDoxcHggc29saWQgI2UwZTBlMH0ubWQtdGFibGUgdGJvZHkgLm1kLXRhYmxlLXJvdy5tZC1zZWxlY3RlZCAubWQtdGFibGUtY2VsbHtiYWNrZ3JvdW5kLWNvbG9yOiNmNWY1ZjV9Lm1kLXRhYmxlIHRib2R5IC5tZC10YWJsZS1yb3c6aG92ZXIgLm1kLXRhYmxlLWNlbGx7YmFja2dyb3VuZC1jb2xvcjojZWVlfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZHtwYWRkaW5nOjA7cG9zaXRpb246cmVsYXRpdmU7Y29sb3I6cmdiYSgwLDAsMCwuNTQpO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1hbGlnbjpsZWZ0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZDpsYXN0LWNoaWxkIC5tZC10YWJsZS1oZWFkLWNvbnRhaW5lciAubWQtdGFibGUtaGVhZC10ZXh0e3BhZGRpbmctcmlnaHQ6MjRweH0ubWQtdGFibGUgLm1kLXRhYmxlLWhlYWQubWQtbnVtZXJpY3t0ZXh0LWFsaWduOnJpZ2h0fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbnt3aWR0aDoxNnB4O21pbi13aWR0aDoxNnB4O2hlaWdodDoxNnB4O21pbi1oZWlnaHQ6MTZweDtmb250LXNpemU6MTZweDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXRhYmxlIC5tZC10YWJsZS1oZWFkIC5tZC1pY29uOm5vdCgubWQtc29ydGFibGUtaWNvbil7bWFyZ2luOjAgNHB4fS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZCAubWQtaWNvbjpsYXN0LWNoaWxke21hcmdpbi1yaWdodDowfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC1jb250YWluZXJ7aGVpZ2h0OjU2cHg7cGFkZGluZzoxNHB4IDA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpfS5tZC10YWJsZSAubWQtdGFibGUtaGVhZC10ZXh0e2hlaWdodDoyOHB4O3BhZGRpbmctcmlnaHQ6MzJweDtwYWRkaW5nLWxlZnQ6MjRweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdzpoaWRkZW47bGluZS1oZWlnaHQ6MjhweDt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtdGFibGUgLm1kLXNvcnRhYmxle2N1cnNvcjpwb2ludGVyfS5tZC10YWJsZSAubWQtc29ydGFibGU6Zmlyc3Qtb2YtdHlwZSAubWQtc29ydGFibGUtaWNvbntsZWZ0OmF1dG87cmlnaHQ6MTBweH0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVye2NvbG9yOnJnYmEoMCwwLDAsLjg3KX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbiwubWQtdGFibGUgLm1kLXNvcnRhYmxlOmhvdmVyIC5tZC1zb3J0YWJsZS1pY29ue29wYWNpdHk6MX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlLm1kLXNvcnRlZCAubWQtc29ydGFibGUtaWNvbntjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZS5tZC1zb3J0ZWQtZGVzY2VuZGluZyAubWQtc29ydGFibGUtaWNvbnt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKSByb3RhdGUoMTgwZGVnKX0ubWQtdGFibGUgLm1kLXNvcnRhYmxlIC5tZC1zb3J0YWJsZS1pY29ue3Bvc2l0aW9uOmFic29sdXRlO3RvcDo1MCU7bGVmdDoycHg7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO29wYWNpdHk6MDtjb2xvcjpyZ2JhKDAsMCwwLC4zOCl9Lm1kLXRhYmxlIC5tZC1zb3J0YWJsZSAubWQtaW5rLXJpcHBsZXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxse2hlaWdodDo0OHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKTtjb2xvcjpyZ2JhKDAsMCwwLC44Nyk7Zm9udC1zaXplOjEzcHg7bGluZS1oZWlnaHQ6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGw6bGFzdC1jaGlsZCAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbC5tZC1udW1lcmlje3RleHQtYWxpZ246cmlnaHR9Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsLm1kLW51bWVyaWMgLm1kLXRhYmxlLWNlbGwtY29udGFpbmVyey1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0ubWQtdGFibGUgLm1kLXRhYmxlLWNlbGwubWQtaGFzLWFjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjstbXMtZmxleC1wYWNrOmp1c3RpZnk7anVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW59Lm1kLXRhYmxlIC5tZC10YWJsZS1jZWxsIC5tZC10YWJsZS1jZWxsLWNvbnRhaW5lcntwYWRkaW5nOjZweCAzMnB4IDZweCAyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9ue3dpZHRoOjM2cHg7bWluLXdpZHRoOjM2cHg7aGVpZ2h0OjM2cHg7bWluLWhlaWdodDozNnB4fS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uOmxhc3QtY2hpbGR7bWFyZ2luOjAgLTEwcHggMCAwfS5tZC10YWJsZSAubWQtdGFibGUtY2VsbCAubWQtYnV0dG9uIC5tZC1pY29ue3dpZHRoOjE4cHg7bWluLXdpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWluLWhlaWdodDoxOHB4O21hcmdpbjowO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MThweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbnt3aWR0aDo2MHB4O3Bvc2l0aW9uOnJlbGF0aXZlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbisubWQtdGFibGUtY2VsbCAubWQtdGFibGUtY2VsbC1jb250YWluZXIsLm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24rLm1kLXRhYmxlLWhlYWQgLm1kLXRhYmxlLWhlYWQtY29udGFpbmVyIC5tZC10YWJsZS1oZWFkLXRleHR7cGFkZGluZy1sZWZ0OjhweH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtdGFibGUtY2VsbC1jb250YWluZXJ7cGFkZGluZy1yaWdodDoxNnB4O3BhZGRpbmctbGVmdDoyNHB4fS5tZC10YWJsZSAubWQtdGFibGUtc2VsZWN0aW9uIC5tZC1jaGVja2JveHttYXJnaW46MH0ubWQtdGFibGUgLm1kLXRhYmxlLXNlbGVjdGlvbiAubWQtY2hlY2tib3gtY29udGFpbmVye3dpZHRoOjE4cHg7aGVpZ2h0OjE4cHg7bWFyZ2luLXRvcDoxcHh9Lm1kLXRhYmxlIC5tZC10YWJsZS1zZWxlY3Rpb24gLm1kLWNoZWNrYm94LWNvbnRhaW5lcjphZnRlcnt0b3A6LTFweDtsZWZ0OjRweH0ubWQtdGFibGUgLm1kLXNlbGVjdHttaW4td2lkdGg6ODRweH0ubWQtdGFibGUgLm1kLW9wdGlvbiwubWQtdGFibGUgLm1kLXNlbGVjdC12YWx1ZXtmb250LXNpemU6MTNweH0ubWQtdGFibGUtZWRpdC10cmlnZ2Vye2Rpc3BsYXk6aW5saW5lLWJsb2NrO2N1cnNvcjpwb2ludGVyO2NvbG9yOnJnYmEoMCwwLDAsLjM4KX0ubWQtdGFibGUtZWRpdC10cmlnZ2VyLm1kLWVkaXRlZHtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlLWRpYWxvZ3ttYXgtaGVpZ2h0OjA7bWFyZ2luOjA7cGFkZGluZzowIDI0cHggMnB4O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDoyNHB4O3otaW5kZXg6NjA7b3ZlcmZsb3c6aGlkZGVuO3BvaW50ZXItZXZlbnRzOm5vbmU7Ym9yZGVyLXJhZGl1czoycHg7Ym94LXNoYWRvdzowIDFweCA1cHggcmdiYSgwLDAsMCwuMiksMCAycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLC4xMik7YmFja2dyb3VuZC1jb2xvcjojZmZmO29wYWNpdHk6MDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSksbWF4LWhlaWdodCAwcyAuNXM7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsLThweCwwKX0ubWQtdGFibGUtZGlhbG9nLm1kLWFjdGl2ZXttYXgtaGVpZ2h0OjQwMHB4O3BvaW50ZXItZXZlbnRzOmF1dG87dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKCMwMDApO29wYWNpdHk6MTt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3N9Lm1kLXRhYmxlLWRpYWxvZy5tZC1sYXJnZXtwYWRkaW5nOjEycHggMjRweCAycHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVye21hcmdpbi10b3A6MDttYXJnaW4tYm90dG9tOjE2cHh9Lm1kLXRhYmxlLWRpYWxvZyAubWQtaW5wdXQtY29udGFpbmVyLm1kLWlucHV0LXBsYWNlaG9sZGVyIGlucHV0e2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1kaWFsb2cgLm1kLWlucHV0LWNvbnRhaW5lci5tZC1pbnB1dC1wbGFjZWhvbGRlciBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntmb250LXNpemU6MTNweH0ubWQtdGFibGUtZGlhbG9nIC5tZC1jaGFyLWNvdW50ZXJ7Zm9udC1zaXplOjEzLjVweDtjb2xvcjpyZ2JhKDAsMCwwLC41NCl9Lm1kLXRhYmxlLWRpYWxvZyAubWQtYnV0dG9ue21pbi13aWR0aDo2NHB4fS5tZC10YWJsZS1jYXJke292ZXJmbG93OnZpc2libGV9Lm1kLXRhYmxlLWNhcmQgLm1kLXRvb2xiYXJ7cGFkZGluZy1sZWZ0OjE2cHg7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5tZC10YWJsZS1jYXJkIC5tZC10aXRsZXstbXMtZmxleDoxO2ZsZXg6MTtmb250LXNpemU6MjBweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbntoZWlnaHQ6NTZweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleDoxO2ZsZXg6MTstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LXBhY2s6ZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZDtib3JkZXItdG9wOjFweCBzb2xpZCAjZTBlMGUwO2NvbG9yOnJnYmEoMCwwLDAsLjU0KTtmb250LXNpemU6MTJweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtdGFibGUtcGFnaW5hdGlvbi1wcmV2aW91c3ttYXJnaW4tcmlnaHQ6MnB4O21hcmdpbi1sZWZ0OjE4cHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdHt3aWR0aDphdXRvO21pbi13aWR0aDozNnB4O21hcmdpbjowIDMycHh9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdDphZnRlcnttYXJnaW4tdG9wOjB9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLXNlbGVjdCAubWQtc2VsZWN0LXZhbHVle3BhZGRpbmc6MDtib3JkZXI6bm9uZTtmb250LXNpemU6MTNweH0ubWQtdGFibGUtY2FyZCAubWQtdGFibGUtcGFnaW5hdGlvbiAubWQtYnV0dG9uOm5vdChbZGlzYWJsZWRdKXtjb2xvcjpyZ2JhKDAsMCwwLC44Nyl9Lm1kLXRhYmxlLWNhcmQgLm1kLXRhYmxlLXBhZ2luYXRpb24gLm1kLWJ1dHRvbltkaXNhYmxlZF0gLm1kLWljb257Y29sb3I6cmdiYSgwLDAsMCwuMjYpfS5tZC1wYWdpbmF0aW9uLXNlbGVjdC5tZC1kaXJlY3Rpb24tYm90dG9tLXJpZ2h0e21hcmdpbi10b3A6LTE2cHh9Lm1kLXBhZ2luYXRpb24tc2VsZWN0IC5tZC1saXN0LWl0ZW0taG9sZGVye2ZvbnQtc2l6ZToxM3B4fS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7bGVmdDowO3otaW5kZXg6MTA7cG9pbnRlci1ldmVudHM6bm9uZTtvcGFjaXR5OjA7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zaXRpb24tZHVyYXRpb246LjNzfS5tZC10YWJsZS1hbHRlcm5hdGUtaGVhZGVyLm1kLWFjdGl2ZXtwb2ludGVyLWV2ZW50czphdXRvO29wYWNpdHk6MTt0cmFuc2Zvcm06dHJhbnNsYXRlM0QoIzAwMCl9Lm1kLXRhYmxlLWFsdGVybmF0ZS1oZWFkZXIgLm1kLWNvdW50ZXJ7bWFyZ2luLWxlZnQ6OHB4Oy1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJze3dpZHRoOjEwMCU7ZGlzcGxheTotbXMtZmxleGJveDtkaXNwbGF5OmZsZXg7LW1zLWZsZXgtZmxvdzpjb2x1bW47ZmxleC1mbG93OmNvbHVtbjtwb3NpdGlvbjpyZWxhdGl2ZX0ubWQtdGFicy5tZC10cmFuc2l0aW9uLW9mZiAqe3RyYW5zaXRpb246bm9uZSFpbXBvcnRhbnR9Lm1kLXRhYnMubWQtZHluYW1pYy1oZWlnaHQgLm1kLXRhYnMtY29udGVudHt0cmFuc2l0aW9uOmhlaWdodCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSl9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbntoZWlnaHQ6NDhweDttaW4taGVpZ2h0OjQ4cHg7cG9zaXRpb246cmVsYXRpdmU7ei1pbmRleDoxO2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4O3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWhhcy1pY29uLm1kLWhhcy1sYWJlbHttaW4taGVpZ2h0OjcycHh9Lm1kLXRhYnMgLm1kLXRhYnMtbmF2aWdhdGlvbi5tZC1oYXMtaWNvbi5tZC1oYXMtbGFiZWwgLm1kLWljb257bWFyZ2luLWJvdHRvbToxMHB4fS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtY2VudGVyZWR7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0ubWQtdGFicyAubWQtdGFicy1uYXZpZ2F0aW9uLm1kLWZpeGVkIC5tZC10YWItaGVhZGVyey1tcy1mbGV4OjE7ZmxleDoxfS5tZC10YWJzIC5tZC10YWJzLW5hdmlnYXRpb24ubWQtcmlnaHR7LW1zLWZsZXgtcGFjazplbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5tZC10YWJzIC5tZC10YWItaGVhZGVye21pbi13aWR0aDo3MnB4O21heC13aWR0aDoyNjRweDttYXJnaW46MDtwYWRkaW5nOjAgMTJweDtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjtib3JkZXI6MDtiYWNrZ3JvdW5kOm5vbmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7Zm9udC13ZWlnaHQ6NTAwO3RleHQtdHJhbnNmb3JtOnVwcGVyY2FzZX0ubWQtdGFicyAubWQtdGFiLWhlYWRlci5tZC1kaXNhYmxlZHtjdXJzb3I6ZGVmYXVsdDtwb2ludGVyLWV2ZW50czpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItZHJhZzpub25lfS5tZC10YWJzIC5tZC10YWItaGVhZGVyLWNvbnRhaW5lcntkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1mbG93OmNvbHVtbjtmbGV4LWZsb3c6Y29sdW1uOy1tcy1mbGV4LXBhY2s6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7LW1zLWZsZXgtYWxpZ246Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcn0ubWQtdGFicyAubWQtdGFiLWhlYWRlci1jb250YWluZXIgLm1kLWljb257bWFyZ2luOjB9Lm1kLXRhYnMgLm1kLXRhYi1pbmRpY2F0b3J7aGVpZ2h0OjJweDtwb3NpdGlvbjphYnNvbHV0ZTtib3R0b206MDtsZWZ0OjA7dHJhbnNmb3JtOnRyYW5zbGF0ZTNEKDAsMCwwKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10cmFuc2l0aW9uLW9mZnt0cmFuc2l0aW9uOm5vbmUhaW1wb3J0YW50fS5tZC10YWJzIC5tZC10YWItaW5kaWNhdG9yLm1kLXRvLXJpZ2h0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxsZWZ0IC4zcyBjdWJpYy1iZXppZXIoLjM1LDAsLjI1LDEpLHJpZ2h0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFiLWluZGljYXRvci5tZC10by1sZWZ0e3RyYW5zaXRpb246YWxsIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKSxyaWdodCAuM3MgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKSxsZWZ0IC4xNXMgY3ViaWMtYmV6aWVyKC4zNSwwLC4yNSwxKX0ubWQtdGFicyAubWQtdGFicy1jb250ZW50e3dpZHRoOjEwMCU7aGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7b3ZlcmZsb3c6aGlkZGVufS5tZC10YWJzIC5tZC10YWJzLXdyYXBwZXJ7d2lkdGg6OTk5OWVtO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDowO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zaXRpb246dHJhbnNmb3JtIC40cyBjdWJpYy1iZXppZXIoLjI1LC44LC4yNSwxKX0ubWQtdGFicyAubWQtdGFie3BhZGRpbmc6MTZweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MDtsZWZ0OjA7cmlnaHQ6MH0ubWQtdG9vbGJhcnttaW4taGVpZ2h0OjY0cHg7cGFkZGluZzowIDhweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWxpbmUtcGFjazpjZW50ZXI7YWxpZ24tY29udGVudDpjZW50ZXI7LW1zLWZsZXgtZmxvdzpyb3cgd3JhcDtmbGV4LWZsb3c6cm93IHdyYXA7cG9zaXRpb246cmVsYXRpdmU7dHJhbnNpdGlvbjphbGwgLjRzIGN1YmljLWJlemllciguMjUsLjgsLjI1LDEpO3RyYW5zZm9ybTp0cmFuc2xhdGUzRCgwLDAsMCl9Lm1kLXRvb2xiYXIubWQtZGVuc2V7bWluLWhlaWdodDo0OHB4fS5tZC10b29sYmFyLm1kLWRlbnNlLm1kLW1lZGl1bXttaW4taGVpZ2h0OjcycHh9Lm1kLXRvb2xiYXIubWQtZGVuc2UubWQtbGFyZ2V7bWluLWhlaWdodDo5NnB4fS5tZC10b29sYmFyLm1kLWRlbnNlIC5tZC10b29sYmFyLWNvbnRhaW5lcntoZWlnaHQ6NDhweH0ubWQtdG9vbGJhci5tZC1tZWRpdW17bWluLWhlaWdodDo4OHB4fS5tZC10b29sYmFyLm1kLW1lZGl1bSAubWQtdG9vbGJhci1jb250YWluZXI6bnRoLWNoaWxkKDIpIC5tZC10aXRsZTpmaXJzdC1jaGlsZHttYXJnaW4tbGVmdDo1NnB4fS5tZC10b29sYmFyLm1kLWxhcmdle21pbi1oZWlnaHQ6MTI4cHg7LW1zLWZsZXgtbGluZS1wYWNrOmluaGVyaXQ7YWxpZ24tY29udGVudDppbmhlcml0fS5tZC10b29sYmFyLm1kLWxhcmdlIC5tZC10b29sYmFyLWNvbnRhaW5lcjpudGgtY2hpbGQoMikgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjU2cHh9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXJ7bWluLWhlaWdodDoxNjRweH0ubWQtdG9vbGJhci5tZC1hY2NvdW50LWhlYWRlciAubWQtaW5rLXJpcHBsZXtjb2xvcjojZmZmfS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVyOm5vdChbZGlzYWJsZWRdKXtiYWNrZ3JvdW5kLWNvbG9yOmhzbGEoMCwwJSwxMDAlLC4xMil9Lm1kLXRvb2xiYXIubWQtYWNjb3VudC1oZWFkZXIgLm1kLWF2YXRhci1saXN0e21hcmdpbjoxNnB4IDAgOHB4fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtbGlzdC1pdGVtLWNvbnRhaW5lcnstbXMtZmxleC1hbGlnbjpzdGFydDthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5tZC10b29sYmFyLm1kLWFjY291bnQtaGVhZGVyIC5tZC1hdmF0YXItbGlzdCAubWQtYXZhdGFyKy5tZC1hdmF0YXJ7bWFyZ2luLWxlZnQ6MTZweH0ubWQtdG9vbGJhciAubWQtdG9vbGJhci1jb250YWluZXJ7d2lkdGg6MTAwJTtoZWlnaHQ6NjRweDtkaXNwbGF5Oi1tcy1mbGV4Ym94O2Rpc3BsYXk6ZmxleDstbXMtZmxleC1hbGlnbjpjZW50ZXI7YWxpZ24taXRlbXM6Y2VudGVyOy1tcy1mbGV4LWl0ZW0tYWxpZ246c3RhcnQ7YWxpZ24tc2VsZjpmbGV4LXN0YXJ0fS5tZC10b29sYmFyIC5tZC10b29sYmFyLWNvbnRhaW5lcj4ubWQtYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjA7bWFyZ2luLXJpZ2h0OjE2cHh9Lm1kLXRvb2xiYXIgLm1kLXRvb2xiYXItY29udGFpbmVyPi5tZC1idXR0b24rLm1kLWJ1dHRvbnttYXJnaW4tbGVmdDowfS5tZC10b29sYmFyPi5tZC1idXR0b246Zmlyc3QtY2hpbGR7bWFyZ2luLWxlZnQ6MDttYXJnaW4tcmlnaHQ6MTZweH0ubWQtdG9vbGJhcj4ubWQtYnV0dG9uKy5tZC1idXR0b257bWFyZ2luLWxlZnQ6MH0ubWQtdG9vbGJhciAubWQtYnV0dG9uOmhvdmVyOm5vdChbZGlzYWJsZWRdKTpub3QoLm1kLXJhaXNlZCk6bm90KC5tZC1pY29uLWJ1dHRvbik6bm90KC5tZC1mYWIpe2JhY2tncm91bmQtY29sb3I6aHNsYSgwLDAlLDEwMCUsLjEpfS5tZC10b29sYmFyIC5tZC10aXRsZXttYXJnaW46MDtmb250LXNpemU6MjBweDtmb250LXdlaWdodDo0MDB9Lm1kLXRvb2xiYXIgLm1kLXRpdGxlOmZpcnN0LWNoaWxke21hcmdpbi1sZWZ0OjhweH0ubWQtdG9vbGJhciAubWQtbGlzdHtwYWRkaW5nOjA7bWFyZ2luOjAgLThweDstbXMtZmxleDoxO2ZsZXg6MX0ubWQtdG9vbHRpcHtoZWlnaHQ6MjBweDtwYWRkaW5nOjAgOHB4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MjAwO3BvaW50ZXItZXZlbnRzOm5vbmU7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDk3LDk3LDk3LC44Nyk7Ym9yZGVyLXJhZGl1czoycHg7b3BhY2l0eTowO3RyYW5zZm9ybS1vcmlnaW46Y2VudGVyIHRvcDt0cmFuc2l0aW9uOmFsbCAuNHMgY3ViaWMtYmV6aWVyKC4yNSwuOCwuMjUsMSk7dHJhbnNpdGlvbi1kdXJhdGlvbjouM3M7dHJhbnNpdGlvbi1kZWxheTowcztjb2xvcjojZmZmO2ZvbnQtZmFtaWx5OlJvYm90byxMYXRvLHNhbnMtc2VyaWY7Zm9udC1zaXplOjEwcHg7bGluZS1oZWlnaHQ6MjBweDt0ZXh0LXRyYW5zZm9ybTpub25lO3doaXRlLXNwYWNlOm5vd3JhcH0ubWQtdG9vbHRpcC5tZC1hY3RpdmV7b3BhY2l0eToxO3RyYW5zaXRpb246YWxsIC4zcyBjdWJpYy1iZXppZXIoLjU1LDAsLjU1LC4yKTt0cmFuc2l0aW9uLWR1cmF0aW9uOi4zc30ubWQtdG9vbHRpcDpub3QoLm1kLWFjdGl2ZSl7dHJhbnNpdGlvbi1kZWxheTowcyFpbXBvcnRhbnR9Lm1kLXRvb2x0aXAubWQtdHJhbnNpdGlvbi1vZmZ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXRvcHttYXJnaW4tdG9wOi0xNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSw4cHgpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtdG9wLm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtcmlnaHR7bWFyZ2luLWxlZnQ6MTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC04cHgsNTAlKX0ubWQtdG9vbHRpcC5tZC10b29sdGlwLXJpZ2h0Lm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpfS5tZC10b29sdGlwLm1kLXRvb2x0aXAtYm90dG9te21hcmdpbi10b3A6MTRweDt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLThweCl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1ib3R0b20ubWQtYWN0aXZle3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0e21hcmdpbi1sZWZ0Oi0xNHB4O3RyYW5zZm9ybTp0cmFuc2xhdGUoOHB4LDUwJSl9Lm1kLXRvb2x0aXAubWQtdG9vbHRpcC1sZWZ0Lm1kLWFjdGl2ZXt0cmFuc2Zvcm06dHJhbnNsYXRlWSg1MCUpfS5tZC13aGl0ZWZyYW1le3Bvc2l0aW9uOnJlbGF0aXZlO3otaW5kZXg6MX0ubWQtd2hpdGVmcmFtZS0xZHB7Ym94LXNoYWRvdzowIDFweCAzcHggcmdiYSgwLDAsMCwuMiksMCAxcHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDJweCAxcHggLTFweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMmRwe2JveC1zaGFkb3c6MCAxcHggNXB4IHJnYmEoMCwwLDAsLjIpLDAgMnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMXB4IC0ycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTNkcHtib3gtc2hhZG93OjAgMXB4IDhweCByZ2JhKDAsMCwwLC4yKSwwIDNweCA0cHggcmdiYSgwLDAsMCwuMTQpLDAgM3B4IDNweCAtMnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS00ZHB7Ym94LXNoYWRvdzowIDJweCA0cHggLTFweCByZ2JhKDAsMCwwLC4yKSwwIDRweCA1cHggcmdiYSgwLDAsMCwuMTQpLDAgMXB4IDEwcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTVkcHtib3gtc2hhZG93OjAgM3B4IDVweCAtMXB4IHJnYmEoMCwwLDAsLjIpLDAgNXB4IDhweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMTRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtNmRwe2JveC1zaGFkb3c6MCAzcHggNXB4IC0xcHggcmdiYSgwLDAsMCwuMiksMCA2cHggMTBweCByZ2JhKDAsMCwwLC4xNCksMCAxcHggMThweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtN2Rwe2JveC1zaGFkb3c6MCA0cHggNXB4IC0ycHggcmdiYSgwLDAsMCwuMiksMCA3cHggMTBweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgMnB4IDE2cHggMXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS04ZHB7Ym94LXNoYWRvdzowIDVweCA1cHggLTNweCByZ2JhKDAsMCwwLC4yKSwwIDhweCAxMHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCAzcHggMTRweCAycHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTlkcHtib3gtc2hhZG93OjAgNXB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgOXB4IDEycHggMXB4IHJnYmEoMCwwLDAsLjE0KSwwIDNweCAxNnB4IDJweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTBkcHtib3gtc2hhZG93OjAgNnB4IDZweCAtM3B4IHJnYmEoMCwwLDAsLjIpLDAgMTBweCAxNHB4IDFweCByZ2JhKDAsMCwwLC4xNCksMCA0cHggMThweCAzcHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTExZHB7Ym94LXNoYWRvdzowIDZweCA3cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDExcHggMTVweCAxcHggcmdiYSgwLDAsMCwuMTQpLDAgNHB4IDIwcHggM3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xMmRwe2JveC1zaGFkb3c6MCA3cHggOHB4IC00cHggcmdiYSgwLDAsMCwuMiksMCAxMnB4IDE3cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDVweCAyMnB4IDRweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTNkcHtib3gtc2hhZG93OjAgN3B4IDhweCAtNHB4IHJnYmEoMCwwLDAsLjIpLDAgMTNweCAxOXB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA1cHggMjRweCA0cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE0ZHB7Ym94LXNoYWRvdzowIDdweCA5cHggLTRweCByZ2JhKDAsMCwwLC4yKSwwIDE0cHggMjFweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNXB4IDI2cHggNHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xNWRwe2JveC1zaGFkb3c6MCA4cHggOXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxNXB4IDIycHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDZweCAyOHB4IDVweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTZkcHtib3gtc2hhZG93OjAgOHB4IDEwcHggLTVweCByZ2JhKDAsMCwwLC4yKSwwIDE2cHggMjRweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgNnB4IDMwcHggNXB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0xN2Rwe2JveC1zaGFkb3c6MCA4cHggMTFweCAtNXB4IHJnYmEoMCwwLDAsLjIpLDAgMTdweCAyNnB4IDJweCByZ2JhKDAsMCwwLC4xNCksMCA2cHggMzJweCA1cHggcmdiYSgwLDAsMCwuMTIpfS5tZC13aGl0ZWZyYW1lLTE4ZHB7Ym94LXNoYWRvdzowIDlweCAxMXB4IC01cHggcmdiYSgwLDAsMCwuMiksMCAxOHB4IDI4cHggMnB4IHJnYmEoMCwwLDAsLjE0KSwwIDdweCAzNHB4IDZweCByZ2JhKDAsMCwwLC4xMil9Lm1kLXdoaXRlZnJhbWUtMTlkcHtib3gtc2hhZG93OjAgOXB4IDEycHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDE5cHggMjlweCAycHggcmdiYSgwLDAsMCwuMTQpLDAgN3B4IDM2cHggNnB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMGRwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIwcHggMzFweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDM4cHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMWRwe2JveC1zaGFkb3c6MCAxMHB4IDEzcHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIxcHggMzNweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQwcHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yMmRwe2JveC1zaGFkb3c6MCAxMHB4IDE0cHggLTZweCByZ2JhKDAsMCwwLC4yKSwwIDIycHggMzVweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOHB4IDQycHggN3B4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yM2Rwe2JveC1zaGFkb3c6MCAxMXB4IDE0cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDIzcHggMzZweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ0cHggOHB4IHJnYmEoMCwwLDAsLjEyKX0ubWQtd2hpdGVmcmFtZS0yNGRwe2JveC1zaGFkb3c6MCAxMXB4IDE1cHggLTdweCByZ2JhKDAsMCwwLC4yKSwwIDI0cHggMzhweCAzcHggcmdiYSgwLDAsMCwuMTQpLDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwwLDAsLjEyKX1cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlciEuL34vdnVlLW1hdGVyaWFsL2Rpc3QvdnVlLW1hdGVyaWFsLmNzc1xuLy8gbW9kdWxlIGlkID0gOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xOTRmNWQ0YyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FwcC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xOTRmNWQ0YyEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQXBwLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRTpcXFxcV2ViMi4wXFxcXFZ1ZUpzQ29yZUFwcFxcXFxWdWVKc0NvcmVBcHBcXFxcQ2xpZW50QXBwXFxcXEFwcC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBBcHAudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE5NGY1ZDRjIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQXBwLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI2OWFkYTA4ZlwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTE5NGY1ZDRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL0FwcC52dWVcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmJvZHkge1xcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXG59XFxuLmludmlzaWJsZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uc3BhY2UtdiB7XFxuICBtYXJnaW4tdG9wOiA1JTtcXG4gIG1hcmdpbi1ib3R0b206IDUlO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL0FwcC52dWU/YWQzODZmMDhcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdCQTtFQUNBLG9CQUFBO0NBQ0E7QUFFQTtFQUNBLGNBQUE7Q0FDQTtBQUVBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0NBQ0FcIixcImZpbGVcIjpcIkFwcC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiB2LW1kLXRoZW1lPVxcXCInYXBwdGhlbWUnXFxcIj5cXHJcXG4gICAgPHRvb2xiYXI+PC90b29sYmFyPlxcclxcblxcclxcbiAgICA8dHJhbnNpdGlvbiBuYW1lPVxcXCJtZC1yb3V0ZXJcXFwiPlxcclxcbiAgICAgIDxyb3V0ZXItdmlldz48L3JvdXRlci12aWV3PlxcclxcbiAgICA8L3RyYW5zaXRpb24+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IFRvb2xiYXIgZnJvbSAnLi9jb21wb25lbnRzL1Rvb2xiYXInXFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgZGF0YSAoKSB7XFxyXFxuICAgIHJldHVybiB7XFxyXFxuICAgIH1cXHJcXG4gIH0sXFxyXFxuICBjb21wb25lbnRzOiB7XFxyXFxuICAgIFRvb2xiYXJcXHJcXG4gIH1cXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuXFxyXFxuPHN0eWxlPlxcclxcbiAgYm9keSB7XFxyXFxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5pbnZpc2libGUge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuc3BhY2UtdiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUlO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTk0ZjVkNGMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtbWQtdGhlbWU9XCInYXBwdGhlbWUnXCI+XHJcbiAgICA8dG9vbGJhcj48L3Rvb2xiYXI+XHJcblxyXG4gICAgPHRyYW5zaXRpb24gbmFtZT1cIm1kLXJvdXRlclwiPlxyXG4gICAgICA8cm91dGVyLXZpZXc+PC9yb3V0ZXItdmlldz5cclxuICAgIDwvdHJhbnNpdGlvbj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUb29sYmFyIGZyb20gJy4vY29tcG9uZW50cy9Ub29sYmFyJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgVG9vbGJhclxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbnZpc2libGUge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLnNwYWNlLXYge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICB9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEFwcC52dWU/YWQzODZmMDgiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ0ODZjZjk5JnNjb3BlZD10cnVlIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVG9vbGJhci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVG9vbGJhci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDQ4NmNmOTkhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Rvb2xiYXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTQ0ODZjZjk5XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJFOlxcXFxXZWIyLjBcXFxcVnVlSnNDb3JlQXBwXFxcXFZ1ZUpzQ29yZUFwcFxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxUb29sYmFyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIFRvb2xiYXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ub29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NDg2Y2Y5OSZzY29wZWQ9dHJ1ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Rvb2xiYXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjRhZDZmOTljXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDQ4NmNmOTkmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ub29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50b29sYmFyLWNvbnRlbnRbZGF0YS12LTQ0ODZjZjk5XSB7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ub29sYmFyLnZ1ZT8xNTc3ZmFiMFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBMkhBO0NBQUFcIixcImZpbGVcIjpcIlRvb2xiYXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcInRvb2xiYXJcXFwiPlxcclxcbiAgICA8bWQtdG9vbGJhcj5cXHJcXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1pY29uLWJ1dHRvblxcXCIgQGNsaWNrPVxcXCJ0b2dnbGVMZWZ0U2lkZW5hdlxcXCI+XFxyXFxuICAgICAgICA8bWQtaWNvbj5tZW51PC9tZC1pY29uPlxcclxcbiAgICAgIDwvbWQtYnV0dG9uPlxcclxcblxcclxcbiAgICAgIDxoMiBjbGFzcz1cXFwibWQtdGl0bGVcXFwiIHN0eWxlPVxcXCJmbGV4OiAxXFxcIj57eyBhcHBOYW1lIH19PC9oMj5cXHJcXG5cXHJcXG4gICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1pY29uLWJ1dHRvblxcXCIgdi1vbjpjbGljaz1cXFwidmlzaXRHaXRIdWJcXFwiPlxcclxcbiAgICAgICAgPG1kLWljb24+ZmF2b3JpdGU8L21kLWljb24+XFxyXFxuICAgICAgPC9tZC1idXR0b24+XFxyXFxuICAgIDwvbWQtdG9vbGJhcj5cXHJcXG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XFxcIm1kLWxlZnRcXFwiIHJlZj1cXFwibGVmdFNpZGVuYXZcXFwiPlxcclxcbiAgICAgIDxtZC10b29sYmFyIGNsYXNzPVxcXCJtZC1sYXJnZVxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtZC10b29sYmFyLWNvbnRhaW5lclxcXCI+XFxyXFxuICAgICAgICAgIDxoMiBjbGFzcz1cXFwibWQtdGl0bGVcXFwiPnt7IGFwcE5hbWUgfX08L2gyPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9tZC10b29sYmFyPlxcclxcbiAgICAgIDwhLS1cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJjb250YWluZXIgdG9vbGJhci1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDxoMz5HaXRIdWI8L2gzPlxcclxcbiAgICAgICAgPHA+U3RhciB7eyBhcHBOYW1lIH19IG9uIEdpdEh1YiE8L3A+XFxyXFxuICAgICAgICA8bWQtYnV0dG9uIGNsYXNzPVxcXCJtZC1yYWlzZWQgbWQtYWNjZW50XFxcIiBAY2xpY2s9XFxcInZpc2l0R2l0SHViXFxcIj5TdGFyPC9tZC1idXR0b24+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgLS0+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwidG9vbGJhci1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgIDwhLS1cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInR3ZWx2ZSBjb2x1bW5zXFxcIj5cXHJcXG4gICAgICAgICAgICBcXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIC0tPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic2lkZWJhci1saW5rc1xcXCI+XFxyXFxuICAgICAgICAgIDxtZC1saXN0IGNsYXNzPVxcXCJtZC1kZW5zZVxcXCI+XFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cXFwiL1xcXCI+SG9tZTwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSB2LWlmPVxcXCJpc0xvZ2dlZEluXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cXFwiL2ZpbGVzXFxcIj5GaWxlczwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgIDxyb3V0ZXItbGluayBleGFjdCB0bz1cXFwiL2Fib3V0XFxcIj5BYm91dDwvcm91dGVyLWxpbms+XFxyXFxuICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cXHJcXG4gICAgICAgICAgICAgIDxzcGFuPlN1cHBvcnQ8L3NwYW4+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XFxyXFxuICAgICAgICAgICAgICAgIDxtZC1saXN0PlxcclxcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XFxcIm1kLWluc2V0XFxcIiBocmVmPVxcXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9WdWVKc0NvcmVBcHBcXFwiPlxcclxcbiAgICAgICAgICAgICAgICAgICAgR2l0SHViXFxyXFxuICAgICAgICAgICAgICAgICAgPC9tZC1saXN0LWl0ZW0+XFxyXFxuXFxyXFxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cXFwibWQtaW5zZXRcXFwiIGhyZWY9XFxcImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxcclxcbiAgICAgICAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxcclxcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxcclxcbiAgICAgICAgICA8L21kLWxpc3Q+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9tZC1zaWRlbmF2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcXHJcXG5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICBuYW1lOiAndG9vbGJhcicsXFxyXFxuICBkYXRhICgpIHtcXHJcXG4gICAgcmV0dXJuIHtcXHJcXG4gICAgICBhcHBOYW1lOiAnVnVlSnNDb3JlQXBwJyxcXHJcXG4gICAgICBpc0xvZ2dlZEluOiBmYWxzZVxcclxcbiAgICB9XFxyXFxuICB9LFxcclxcbiAgbWV0aG9kczoge1xcclxcbiAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9WdWVKc0NvcmVBcHAnKVxcclxcbiAgICB9LFxcclxcbiAgICB0b2dnbGVMZWZ0U2lkZW5hdjogZnVuY3Rpb24gKCkge1xcclxcbiAgICAgIHRoaXMuJHJlZnMubGVmdFNpZGVuYXYudG9nZ2xlKClcXHJcXG4gICAgfSxcXHJcXG4gICAgdXBkYXRlTG9nZ2VkSW5TdGF0dXM6IGZ1bmN0aW9uICgpIHtcXHJcXG4gICAgICBsZXQgdm0gPSB0aGlzXFxyXFxuICAgICAgbGV0IGF4aW9zQ29uZiA9IHtcXHJcXG4gICAgICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XFxyXFxuICAgICAgICAgIHJldHVybiBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDUwMFxcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgICAvLyBheGlvcy5nZXQoJy9jaGVja2F1dGgnLCBheGlvc0NvbmYpXFxyXFxuICAgICAgLy8gLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxyXFxuICAgICAgLy8gICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcXHJcXG4gICAgICAvLyAgICAgdm0uaXNMb2dnZWRJbiA9IHRydWVcXHJcXG4gICAgICAvLyAgIH0gZWxzZSBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDEgfHwgcmVzcG9uc2Uuc3RhdHVzID09PSA0MDQpIHtcXHJcXG4gICAgICAvLyAgICAgdm0uaXNMb2dnZWRJbiA9IGZhbHNlXFxyXFxuICAgICAgLy8gICB9XFxyXFxuICAgICAgLy8gfSlcXHJcXG4gICAgICAvLyAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XFxyXFxuICAgICAgLy8gICBpZiAoZXJyb3IpIHtcXHJcXG4gICAgICAvLyAgICAgdm0uaXNMb2dnZWRJbiA9IGZhbHNlXFxyXFxuICAgICAgLy8gICB9XFxyXFxuICAgICAgLy8gfSlcXHJcXG4gICAgfVxcclxcbiAgfSxcXHJcXG4gIGNyZWF0ZWQgKCkge1xcclxcbiAgICAvLyB0aGlzLnVwZGF0ZUxvZ2dlZEluU3RhdHVzKClcXHJcXG4gICAgLy8gdGhlbiByZWdpc3RlciBob29rXFxyXFxuICAgIHRoaXMuJHJvdXRlci5iZWZvcmVFYWNoKCh0bywgZnJvbSwgbmV4dCkgPT4ge1xcclxcbiAgICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxcclxcbiAgICAgIG5leHQoKVxcclxcbiAgICB9KVxcclxcbiAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG5cXHJcXG48IS0tIEFkZCBcXFwic2NvcGVkXFxcIiBhdHRyaWJ1dGUgdG8gbGltaXQgQ1NTIHRvIHRoaXMgY29tcG9uZW50IG9ubHkgLS0+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC50b29sYmFyLWNvbnRlbnQge31cXHJcXG48L3N0eWxlPlwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDQ4NmNmOTkmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9Ub29sYmFyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgPG1kLXRvb2xiYXI+XHJcbiAgICAgIDxtZC1idXR0b24gY2xhc3M9XCJtZC1pY29uLWJ1dHRvblwiIEBjbGljaz1cInRvZ2dsZUxlZnRTaWRlbmF2XCI+XHJcbiAgICAgICAgPG1kLWljb24+bWVudTwvbWQtaWNvbj5cclxuICAgICAgPC9tZC1idXR0b24+XHJcblxyXG4gICAgICA8aDIgY2xhc3M9XCJtZC10aXRsZVwiIHN0eWxlPVwiZmxleDogMVwiPnt7IGFwcE5hbWUgfX08L2gyPlxyXG5cclxuICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLWljb24tYnV0dG9uXCIgdi1vbjpjbGljaz1cInZpc2l0R2l0SHViXCI+XHJcbiAgICAgICAgPG1kLWljb24+ZmF2b3JpdGU8L21kLWljb24+XHJcbiAgICAgIDwvbWQtYnV0dG9uPlxyXG4gICAgPC9tZC10b29sYmFyPlxyXG4gICAgPG1kLXNpZGVuYXYgY2xhc3M9XCJtZC1sZWZ0XCIgcmVmPVwibGVmdFNpZGVuYXZcIj5cclxuICAgICAgPG1kLXRvb2xiYXIgY2xhc3M9XCJtZC1sYXJnZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtZC10b29sYmFyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGgyIGNsYXNzPVwibWQtdGl0bGVcIj57eyBhcHBOYW1lIH19PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tZC10b29sYmFyPlxyXG4gICAgICA8IS0tXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgdG9vbGJhci1jb250ZW50XCI+XHJcbiAgICAgICAgPGgzPkdpdEh1YjwvaDM+XHJcbiAgICAgICAgPHA+U3RhciB7eyBhcHBOYW1lIH19IG9uIEdpdEh1YiE8L3A+XHJcbiAgICAgICAgPG1kLWJ1dHRvbiBjbGFzcz1cIm1kLXJhaXNlZCBtZC1hY2NlbnRcIiBAY2xpY2s9XCJ2aXNpdEdpdEh1YlwiPlN0YXI8L21kLWJ1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIC0tPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhci1jb250ZW50XCI+XHJcbiAgICAgICAgPCEtLVxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0d2VsdmUgY29sdW1uc1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIC0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlYmFyLWxpbmtzXCI+XHJcbiAgICAgICAgICA8bWQtbGlzdCBjbGFzcz1cIm1kLWRlbnNlXCI+XHJcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0+XHJcbiAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGV4YWN0IHRvPVwiL1wiPkhvbWU8L3JvdXRlci1saW5rPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuXHJcbiAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gdi1pZj1cImlzTG9nZ2VkSW5cIj5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvZmlsZXNcIj5GaWxlczwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG5cclxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgZXhhY3QgdG89XCIvYWJvdXRcIj5BYm91dDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgICAgIDwvbWQtbGlzdC1pdGVtPlxyXG5cclxuICAgICAgICAgICAgPG1kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICA8c3Bhbj5TdXBwb3J0PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICA8bWQtbGlzdC1leHBhbmQ+XHJcbiAgICAgICAgICAgICAgICA8bWQtbGlzdD5cclxuICAgICAgICAgICAgICAgICAgPG1kLWxpc3QtaXRlbSBjbGFzcz1cIm1kLWluc2V0XCIgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS8weEZpcmViYWxsL1Z1ZUpzQ29yZUFwcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEdpdEh1YlxyXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuXHJcbiAgICAgICAgICAgICAgICAgIDxtZC1saXN0LWl0ZW0gY2xhc3M9XCJtZC1pbnNldFwiIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERvbmF0ZVxyXG4gICAgICAgICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICAgICAgICA8L21kLWxpc3QtZXhwYW5kPlxyXG4gICAgICAgICAgICA8L21kLWxpc3QtaXRlbT5cclxuICAgICAgICAgIDwvbWQtbGlzdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21kLXNpZGVuYXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogJ3Rvb2xiYXInLFxyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgYXBwTmFtZTogJ1Z1ZUpzQ29yZUFwcCcsXHJcbiAgICAgIGlzTG9nZ2VkSW46IGZhbHNlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICB2aXNpdEdpdEh1YjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9naXRodWIuY29tLzB4RmlyZWJhbGwvVnVlSnNDb3JlQXBwJylcclxuICAgIH0sXHJcbiAgICB0b2dnbGVMZWZ0U2lkZW5hdjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRyZWZzLmxlZnRTaWRlbmF2LnRvZ2dsZSgpXHJcbiAgICB9LFxyXG4gICAgdXBkYXRlTG9nZ2VkSW5TdGF0dXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICBsZXQgYXhpb3NDb25mID0ge1xyXG4gICAgICAgIHZhbGlkYXRlU3RhdHVzOiBmdW5jdGlvbiAoc3RhdHVzKSB7XHJcbiAgICAgICAgICByZXR1cm4gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCA1MDBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gYXhpb3MuZ2V0KCcvY2hlY2thdXRoJywgYXhpb3NDb25mKVxyXG4gICAgICAvLyAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgLy8gICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgLy8gICAgIHZtLmlzTG9nZ2VkSW4gPSB0cnVlXHJcbiAgICAgIC8vICAgfSBlbHNlIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDQwMSB8fCByZXNwb25zZS5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAvLyAgICAgdm0uaXNMb2dnZWRJbiA9IGZhbHNlXHJcbiAgICAgIC8vICAgfVxyXG4gICAgICAvLyB9KVxyXG4gICAgICAvLyAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgIC8vICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIC8vICAgICB2bS5pc0xvZ2dlZEluID0gZmFsc2VcclxuICAgICAgLy8gICB9XHJcbiAgICAgIC8vIH0pXHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkICgpIHtcclxuICAgIC8vIHRoaXMudXBkYXRlTG9nZ2VkSW5TdGF0dXMoKVxyXG4gICAgLy8gdGhlbiByZWdpc3RlciBob29rXHJcbiAgICB0aGlzLiRyb3V0ZXIuYmVmb3JlRWFjaCgodG8sIGZyb20sIG5leHQpID0+IHtcclxuICAgICAgLy8gdGhpcy51cGRhdGVMb2dnZWRJblN0YXR1cygpXHJcbiAgICAgIG5leHQoKVxyXG4gICAgfSlcclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48IS0tIEFkZCBcInNjb3BlZFwiIGF0dHJpYnV0ZSB0byBsaW1pdCBDU1MgdG8gdGhpcyBjb21wb25lbnQgb25seSAtLT5cclxuPHN0eWxlIHNjb3BlZD5cclxuICAudG9vbGJhci1jb250ZW50IHt9XHJcbjwvc3R5bGU+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIFRvb2xiYXIudnVlPzE1NzdmYWIwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiXG4gIH0sIFtfYygnbWQtdG9vbGJhcicsIFtfYygnbWQtYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWljb24tYnV0dG9uXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogX3ZtLnRvZ2dsZUxlZnRTaWRlbmF2XG4gICAgfVxuICB9LCBbX2MoJ21kLWljb24nLCBbX3ZtLl92KFwibWVudVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdoMicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC10aXRsZVwiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImZsZXhcIjogXCIxXCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5hcHBOYW1lKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWJ1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pY29uLWJ1dHRvblwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS52aXNpdEdpdEh1YlxuICAgIH1cbiAgfSwgW19jKCdtZC1pY29uJywgW192bS5fdihcImZhdm9yaXRlXCIpXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtc2lkZW5hdicsIHtcbiAgICByZWY6IFwibGVmdFNpZGVuYXZcIixcbiAgICBzdGF0aWNDbGFzczogXCJtZC1sZWZ0XCJcbiAgfSwgW19jKCdtZC10b29sYmFyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWxhcmdlXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWQtdG9vbGJhci1jb250YWluZXJcIlxuICB9LCBbX2MoJ2gyJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLXRpdGxlXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLmFwcE5hbWUpKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzaWRlYmFyLWxpbmtzXCJcbiAgfSwgW19jKCdtZC1saXN0Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kLWRlbnNlXCJcbiAgfSwgW19jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiSG9tZVwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIChfdm0uaXNMb2dnZWRJbikgPyBfYygnbWQtbGlzdC1pdGVtJywgW19jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJleGFjdFwiOiBcIlwiLFxuICAgICAgXCJ0b1wiOiBcIi9maWxlc1wiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiRmlsZXNcIildKV0sIDEpIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ3JvdXRlci1saW5rJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImV4YWN0XCI6IFwiXCIsXG4gICAgICBcInRvXCI6IFwiL2Fib3V0XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJBYm91dFwiKV0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdtZC1saXN0LWl0ZW0nLCBbX2MoJ3NwYW4nLCBbX3ZtLl92KFwiU3VwcG9ydFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbWQtbGlzdC1leHBhbmQnLCBbX2MoJ21kLWxpc3QnLCBbX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbC9WdWVKc0NvcmVBcHBcIlxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgIEdpdEh1YlxcbiAgICAgICAgICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ21kLWxpc3QtaXRlbScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZC1pbnNldFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImhyZWZcIjogXCJodHRwczovL2dpdGh1Yi5jb20vMHhGaXJlYmFsbFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgRG9uYXRlXFxuICAgICAgICAgICAgICAgIFwiKV0pXSwgMSldLCAxKV0sIDEpXSwgMSldLCAxKV0pXSwgMSldLCAxKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NDg2Y2Y5OSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvVG9vbGJhci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtZC10aGVtZVwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1kLXRoZW1lXCIsXG4gICAgICB2YWx1ZTogKCdhcHB0aGVtZScpLFxuICAgICAgZXhwcmVzc2lvbjogXCInYXBwdGhlbWUnXCJcbiAgICB9XVxuICB9LCBbX2MoJ3Rvb2xiYXInKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3RyYW5zaXRpb24nLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwibmFtZVwiOiBcIm1kLXJvdXRlclwiXG4gICAgfVxuICB9LCBbX2MoJ3JvdXRlci12aWV3JyldLCAxKV0sIDEpXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTE5NGY1ZDRjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvQXBwLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=