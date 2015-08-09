/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict"

	var Gacha = __webpack_require__(1);

	var PastRecord  = __webpack_require__(2);

	var Master = __webpack_require__(3);

	var rateOneData  = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	var master      = new Master(rateOneData);
	master.appendData(["A","B","C"], 5);

	var app = new Vue({
	    el: '#app',
	    data: {
	        gacha: new Gacha(master.getGachaItems()),
	        record: new PastRecord(master.getAllData()),
	        item: "Item",
	        history: "History",
	        rest: "Rest Items"
	    },
	    created: function() {
	        this.rest = this.record.rest();
	    },
	    methods: {
	        draw: function() {
	            var item        = this.gacha.draw();
	            this.item       = item;
	            this.record.appendResult(item);
	            this.rest       = this.record.rest();
	            this.history    = this.record.history();
	        }
	    }
	});


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = function(master) {
	    this.master = master;
	    this.draw   = function () {
	        var idx = getRamdomIndex(this.master.length);
	        return this.master[idx];
	    };

	    var getRamdomIndex = function (max) {
	        return Math.floor(Math.random() * max);
	    };
	};


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function(master) {
	    this.master = master;
	    this.past   = [];

	    this.appendResult = function(item) {
	        this.past.push(item);
	    }

	    this.history = function() {
	        var self = this;
	        return {
	            toString: function() {
	                return self.past.join(",");
	            }
	        };
	    };

	    this.rest = function() {
	        var self = this;
	        return {
	            toString: function() {
	                return self.master.filter(function(item) {
	                    return self.past.indexOf(item) == -1;
	                });
	            }
	        };
	    };
	};


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(rateOneItems) {
	    var master = rateOneItems;
	    var gachaItems = rateOneItems;

	    this.appendData = function(data, rate) {
	        master = master.concat(data);
	        gachaItems = gachaItems.map(function(i) {
	            return arrayPad(i, rate);
	        }).reduce(function(mapedArray, retArray) {
	            return retArray.concat(mapedArray);
	        }).concat(data);
	    };

	    this.getAllData = function() {
	        return master;
	    };

	    this.getGachaItems = function() {
	        return gachaItems;
	    };

	    var arrayPad = function(val, n) {
	        var arrayPadIter = function(val, n, acc) {
	            if( n <= 0 )
	                return acc;
	            else {
	                acc.push(val);
	                return arrayPadIter(val, n - 1 ,acc);
	            }
	        };
	        return arrayPadIter(val, n, []);
	    };
	};


/***/ }
/******/ ]);