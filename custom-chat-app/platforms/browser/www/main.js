(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" #container [ngStyle]=\"containerStyle\">\r\n    <div id=\"header\">\r\n        <img src=\"assets/uc.gif\">\r\n    </div>\r\n    <div class=\"chat-body\" #chat>\r\n        <div *ngFor=\"let m of mesArr\">\r\n            <app-message (liked)=\"onMessageLike($event)\" [messageDoc]=\"m\"></app-message>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"chat-input\">\r\n        <form class=\"chat-form\" (ngSubmit)=\"sendMessage($event, buttonType)\">\r\n            <div style=\"display: flex; flex-direction: row;\">\r\n                <mat-form-field>\r\n                    <input matInput #messageText autocomplete=\"off\">\r\n                </mat-form-field>\r\n                <div style=\"display:flex; flex-direction: column;\">\r\n                    <button id=\"send\" (click)=\"sendMessage($event, 'normal')\" mat-raised-button>send  </button>\r\n                    <button id=\"anon\" (click)=\"sendMessage($event, 'anon')\" mat-raised-button>anon </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginpage/loginpage.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loginpage/loginpage.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form (ngSubmit)=\"login($event)\">\n    <div style=\" margin: auto; width: 80%; \" >\n        <mat-form-field style=\"width: 100%\">\n        email <input matInput #email autocomplete=\"off\">\n      </mat-form-field>\n    </div>\n    <div style=\" margin: auto; width: 80%; \" >\n      <mat-form-field style=\"width: 100%; \">\n        password <input type=\"password\" matInput #password autocomplete=\"off\">\n      </mat-form-field>\n    </div>\n    <br>\n    <div style=\" margin: auto; width: 80%; \" >\n        <button  mat-raised-button >LOG ONLINE  </button>\n    </div>  \n</form>\n\n<br>\n<br>\n<div style=\"margin: auto; width: 80%;\">\n    Don't have an account? <a href=\"https://www.farmersonly.com/?force_reg=1\"> Create one now! </a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"messageData else loading\">\r\n    <div class=\"container\">\r\n        <div class=\"message\">\r\n            <span class=\"name\"> {{messageData.user}}: </span>\r\n            <br> {{messageData.value}}\r\n            <br>\r\n            <div class=\"image-wrapper\" *ngIf=\"imageUrl\">\r\n                <img class=\"message-image\" [src]=\"imageUrl\">\r\n            </div>\r\n            <div class=\"image-wrapper\" *ngIf=\"tweetId\">\r\n                <ngx-tweet [tweetId]=\"tweetId\"></ngx-tweet>\r\n            </div>\r\n            <div class=\"image-wrapper\" *ngIf=\"youtubeId\">\r\n                <youtube-player [width]=\"200\" [height]=\"100\" [videoId]=\"youtubeId\"></youtube-player>\r\n            </div>\r\n\r\n            <span class=\"timestamp\">{{messageData.timestamp | date:'medium'}}</span>\r\n        </div>\r\n        <div class=\"like-container\">\r\n            <div (click)=\"likeMes()\" #likeContainer [ngStyle]=\"{'background-color': heartColor}\">\r\n                <a *ngIf=\"messageData.likeArr\" href=\"#\">\r\n                    <svg class=\"heart\" viewBox=\"0 0 32 29.6\" [ngStyle]=\"{'transform': heartScale}\">\r\n                    <path class=\"heart-drawing\" *ngIf=\"heartVisible\" [ngStyle]=\"{'animation': heartAnimation}\"  d=\"M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2\r\n                    c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z\"/>\r\n                    <text x=\"50%\" y=\"50%\" alignment-baseline=\"middle\" text-anchor=\"middle\" [ngStyle]=\"{'font-size':heartTextScale}\" fill=\"black\">{{messageData.likeArr.length }}</text>\r\n                </svg>\r\n                </a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"like-list\">\r\n        <div *ngFor=\"let u of messageData.likeArr\">\r\n            {{u}} <br>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<ng-template #loading>\r\n    <div class=\"container\">\r\n        <div class=\"message\">\r\n            loading...\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");





const routes = [
    { path: 'loginpage', component: _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_3__["LoginpageComponent"] },
    { path: '', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_4__["ChatComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");



let AppComponent = class AppComponent {
    constructor(meta) {
        this.meta = meta;
        this.meta.addTags([
            { 'http-equiv': 'cache-control', 'content': 'no-cache, must-revalidate, post-check=0, pre-check=0' },
            { 'http-equiv': 'expires', 'content': '0' },
            { 'pragma': 'cache-control', 'content': 'no-cache' }
        ]);
        //(<any>window).cordova.platformId = 1;
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/es2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loginpage/loginpage.component */ "./src/app/loginpage/loginpage.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_tweet__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-tweet */ "./node_modules/ngx-tweet/fesm2015/ngx-tweet.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/esm2015/youtube-player.js");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
            _loginpage_loginpage_component__WEBPACK_IMPORTED_MODULE_14__["LoginpageComponent"],
            _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_12__["AngularFireAuthModule"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_11__["AngularFireStorageModule"],
            ngx_tweet__WEBPACK_IMPORTED_MODULE_17__["NgxTweetModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_18__["YouTubePlayerModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/chat/chat.component.css":
/*!*****************************************!*\
  !*** ./src/app/chat/chat.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    background-color: black;\r\n}\r\n\r\n.container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    overflow: hidden;\r\n    \r\n    margin: auto;\r\n    background-color: lightgray;\r\n}\r\n\r\n.chat-body {\r\n    flex: 1 1 100vh;\r\n    display: flex;\r\n    flex-direction: column-reverse;\r\n    overflow-y: scroll;\r\n    background-color: gray;\r\n    border-radius: 15px;\r\n}\r\n\r\n.chat-input {\r\n    width: 90%;\r\n    margin: auto;\r\n}\r\n\r\n.chat-form mat-form-field {\r\n    width: 75%;\r\n    background-color: darkgray;\r\n    border-radius: 5px;\r\n    padding-left: 1%;\r\n    padding-right: 1%;\r\n    margin-top: 1%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.chat-form button {\r\n    width: 1em;\r\n    margin-left: 1%;\r\n    margin-top: 5%;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n#header {\r\n    width: 100%;\r\n    /* Starting position */\r\n    transform: translateX(100%);\r\n    /* Apply animation to this element */\r\n    animation: example1 15s linear infinite;\r\n}\r\n\r\n/* Move it (define the animation) */\r\n\r\n@keyframes example1 {\r\n    0% {\r\n        /* Firefox bug fix */\r\n        /* Firefox bug fix */\r\n        transform: translateX(100%);\r\n    }\r\n    100% {\r\n        /* Firefox bug fix */\r\n        /* Firefox bug fix */\r\n        transform: translateX(-100%);\r\n    }\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 10px;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n    background: #f1f1f1;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background: #888;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background: #555;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBR3RCLDJCQUEyQjtJQUMzQixvQ0FBb0M7SUFHcEMsdUNBQXVDO0FBQzNDOztBQUdBLG1DQUFtQzs7QUFvQm5DO0lBQ0k7UUFFSSxvQkFBb0I7UUFFcEIsb0JBQW9CO1FBQ3BCLDJCQUEyQjtJQUMvQjtJQUNBO1FBRUksb0JBQW9CO1FBRXBCLG9CQUFvQjtRQUNwQiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFHQSxVQUFVOztBQUVUO0lBQ0csbUJBQW1CO0FBQ3ZCOztBQUdBLFdBQVc7O0FBRVY7SUFDRyxnQkFBZ0I7QUFDcEI7O0FBR0Esb0JBQW9COztBQUVuQjtJQUNHLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLmNoYXQtYm9keSB7XHJcbiAgICBmbGV4OiAxIDEgMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWlucHV0IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5jaGF0LWZvcm0gbWF0LWZvcm0tZmllbGQge1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gICAgbWFyZ2luLXRvcDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLmNoYXQtZm9ybSBidXR0b24ge1xyXG4gICAgd2lkdGg6IDFlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIFN0YXJ0aW5nIHBvc2l0aW9uICovXHJcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgLyogQXBwbHkgYW5pbWF0aW9uIHRvIHRoaXMgZWxlbWVudCAqL1xyXG4gICAgLW1vei1hbmltYXRpb246IGV4YW1wbGUxIDE1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZXhhbXBsZTEgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogZXhhbXBsZTEgMTVzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5cclxuXHJcbi8qIE1vdmUgaXQgKGRlZmluZSB0aGUgYW5pbWF0aW9uKSAqL1xyXG5cclxuQC1tb3ota2V5ZnJhbWVzIGV4YW1wbGUxIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGV4YW1wbGUxIHtcclxuICAgIDAlIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBleGFtcGxlMSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTAwJSk7XHJcbiAgICAgICAgLyogRmlyZWZveCBidWcgZml4ICovXHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgICAgIC8qIEZpcmVmb3ggYnVnIGZpeCAqL1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMDAlKTtcclxuICAgICAgICAvKiBGaXJlZm94IGJ1ZyBmaXggKi9cclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgfVxyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLyogVHJhY2sgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbn1cclxuXHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuXHJcbiA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messagedb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messagedb.service */ "./src/app/messagedb.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-cordova/plugin/geolocation */ "./node_modules/angular-cordova/plugin/geolocation.ts");







let ChatComponent = class ChatComponent {
    constructor(mesService, auth, router, geo) {
        this.mesService = mesService;
        this.auth = auth;
        this.router = router;
        this.geo = geo;
        this.mesArr = [];
        this.messageNum = 0;
        this.pageSize = 10;
        this.containerStyle = { "height": window.innerHeight + "px" };
        if (this.auth.auth.currentUser === null) {
            this.router.navigate(['/loginpage']);
        }
        else {
            this.email = this.auth.auth.currentUser.email;
            this.messages = mesService.getRecentMessages(this.pageSize);
            this.messageNum = this.pageSize;
            this.messages.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(data => {
                console.log(data);
                this.mesArr = data.docs;
            });
            this.mesSub = mesService.getMessageUpdates().subscribe(data => {
                console.log(data);
                if (data[0].type === 'added') {
                    console.log("new message: " + data[0].payload.doc.id);
                    this.mesArr.unshift(data[0].payload.doc);
                    this.messageNum++;
                }
            });
        }
        geo.getCurrentPosition().subscribe(location => { console.log(location); });
    }
    ngOnInit() {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(tag);
    }
    ngAfterViewInit() {
        window.addEventListener("resize", () => {
            this.containerStyle = { "height": window.innerHeight + "px" };
        });
        this.chatContainer.nativeElement.addEventListener("scroll", () => {
            if (this.chatContainer.nativeElement.scrollTop == 0 && this.mesArr.length == this.messageNum) {
                this.messageNum += this.pageSize;
                this.mesService.getPageAfter(this.pageSize, this.mesArr[this.mesArr.length - 1]).subscribe((data) => {
                    console.log(this.messageNum);
                    this.mesArr = this.mesArr.concat(data.docs);
                });
                console.log("SCROLL");
            }
        });
    }
    ngOnDestroy() {
        if (this.mesSub)
            this.mesSub.unsubscribe();
    }
    sendMessage(event, buttonType) {
        console.log(event);
        console.log(buttonType);
        if (this.messageText.nativeElement.value && this.messageText.nativeElement.value !== '') {
            this.mesService.sendMessage({ user: buttonType === "normal" ? this.email : "[anon]", value: this.messageText.nativeElement.value });
            this.messageText.nativeElement.value = "";
        }
        this.messageText.nativeElement.focus();
        event.stopPropagation();
    }
    onMessageLike(messageObj) {
        this.mesService.likeMessage(messageObj, this.email);
        if (this.messageText.nativeElement.value) {
            this.messageText.nativeElement.focus();
        }
    }
    scrollToBottom() {
        try {
            this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
        }
        catch (err) { }
    }
};
ChatComponent.ctorParameters = () => [
    { type: _messagedb_service__WEBPACK_IMPORTED_MODULE_2__["MessagedbService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('messageText', { static: false })
], ChatComponent.prototype, "messageText", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chat', { static: false })
], ChatComponent.prototype, "chatContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('container', { static: false })
], ChatComponent.prototype, "container", void 0);
ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-chat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./chat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/chat/chat.component.html")).default,
        providers: [
            angular_cordova_plugin_geolocation__WEBPACK_IMPORTED_MODULE_6__["GeolocationService"]
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./chat.component.css */ "./src/app/chat/chat.component.css")).default]
    })
], ChatComponent);



/***/ }),

/***/ "./src/app/loginpage/loginpage.component.css":
/*!***************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2lucGFnZS9sb2dpbnBhZ2UuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/loginpage/loginpage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/loginpage/loginpage.component.ts ***!
  \**************************************************/
/*! exports provided: LoginpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginpageComponent", function() { return LoginpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginpageComponent = class LoginpageComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    ngOnInit() {
    }
    login(event) {
        let user = event.target.elements[0].value;
        let pw = event.target.elements[1].value;
        this.auth.auth.signInWithEmailAndPassword(user, pw).then(cred => {
            this.router.navigate(['']);
        }).catch(err => {
            console.log(err);
        });
    }
};
LoginpageComponent.ctorParameters = () => [
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginpageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loginpage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./loginpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loginpage/loginpage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./loginpage.component.css */ "./src/app/loginpage/loginpage.component.css")).default]
    })
], LoginpageComponent);



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n    display: flex;\r\n    margin: 7px 14px 7px 14px;\r\n    background-color: honeydew;\r\n    border-radius: 15px;\r\n    width: 90%;\r\n}\r\n\r\n.message {\r\n    flex: 1;\r\n    margin: 6px;\r\n    width: 75%;\r\n    overflow-wrap: break-word;\r\n}\r\n\r\n.name {\r\n    font-weight: bold;\r\n}\r\n\r\n.timestamp {\r\n    font-size: 12px;\r\n}\r\n\r\n.like-container {\r\n    flex-basis: 20px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n.like-container div {\r\n    text-align: center;\r\n    font-weight: bold;\r\n    width: 50px;\r\n    height: 50px;\r\n    background-color: hotpink;\r\n    margin: 5px;\r\n    border-radius: 15px;\r\n    line-height: 50px;\r\n}\r\n\r\nsvg {\r\n    overflow: visible;\r\n}\r\n\r\n.like-container a {\r\n    color: black;\r\n    text-decoration: none;\r\n}\r\n\r\n.like-list {\r\n    font-size: 12px;\r\n    margin: 0px 20px 0px 20px;\r\n    color: hotpink;\r\n    text-align: right;\r\n}\r\n\r\n.image-wrapper {\r\n    width: 100%;\r\n}\r\n\r\n.message-image {\r\n    width: inherit;\r\n}\r\n\r\n.heart {\r\n    fill: red;\r\n    position: clip;\r\n    top: 5px;\r\n    margin-top: 2px;\r\n    width: 50px;\r\n    overflow: visible;\r\n}\r\n\r\n.heart-drawing {\r\n    fill: red;\r\n    top: 5px;\r\n    width: 50px;\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        transform: scale(1);\r\n        transform-origin: 50% 50%;\r\n    }\r\n    50% {\r\n        transform: scale(1.3);\r\n        transform-origin: 50% 50%;\r\n    }\r\n    100% {\r\n        transform: scale(1);\r\n        transform-origin: 50% 50%;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixtQkFBbUI7SUFDbkIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksT0FBTztJQUNQLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxjQUFjO0lBQ2QsUUFBUTtJQUNSLGVBQWU7SUFDZixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQix5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQix5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luOiA3cHggMTRweCA3cHggMTRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5tZXNzYWdlIHtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG59XHJcblxyXG4ubmFtZSB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRpbWVzdGFtcCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5saWtlLWNvbnRhaW5lciB7XHJcbiAgICBmbGV4LWJhc2lzOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpa2UtY29udGFpbmVyIGRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaG90cGluaztcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5zdmcge1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5saWtlLWNvbnRhaW5lciBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmxpa2UtbGlzdCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBtYXJnaW46IDBweCAyMHB4IDBweCAyMHB4O1xyXG4gICAgY29sb3I6IGhvdHBpbms7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmltYWdlLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLWltYWdlIHtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4uaGVhcnQge1xyXG4gICAgZmlsbDogcmVkO1xyXG4gICAgcG9zaXRpb246IGNsaXA7XHJcbiAgICB0b3A6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbn1cclxuXHJcbi5oZWFydC1kcmF3aW5nIHtcclxuICAgIGZpbGw6IHJlZDtcclxuICAgIHRvcDogNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _messagedb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../messagedb.service */ "./src/app/messagedb.service.ts");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/es2015/index.js");




let MessageComponent = class MessageComponent {
    constructor(mesService, auth) {
        this.mesService = mesService;
        this.auth = auth;
        this.imageVisible = false;
        this.heartVisible = false;
        this.heartColor = "hotpink";
        this.heartAnimation = "none";
        this.heartScale = "scale(1)";
        this.heartTextScale = "1";
        this.liked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.messageSub = this.mesService.getMessageData(this.messageDoc.id).subscribe(data => {
            this.messageData = data;
            let words = this.messageData.value.split(" ");
            for (let i = 0; i < words.length; i++) {
                //url check
                this.url_parser(words[i]);
                //image check
                if (words[i].match(/\.(jpeg|jpg|gif|png)$/) != null) {
                    this.imageUrl = words[i];
                }
                //youtube check
                let yt = this.youtube_parser(words[i]);
                if (yt)
                    this.youtubeId = yt;
                //twitter check
                let t = this.twitter_parser(words[i]);
                if (t)
                    this.tweetId = t;
            }
            this.updateHeart();
        });
    }
    url_parser(url) {
        var regExp = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/;
        var match = url.match(regExp);
        if (match) {
            return match[0];
        }
        else {
            return undefined;
        }
    }
    youtube_parser(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
        var match = url.match(regExp);
        if (match && match[7]) {
            return match[7];
        }
        else {
            return undefined;
        }
    }
    twitter_parser(url) {
        var match = url.match(/.*twitter.com\/.*\/status\/([0-9]+)/);
        if (match && match[1]) {
            return match[1].trim();
        }
        else {
            return undefined;
        }
    }
    likeMes() {
        this.messageData.docid = this.messageDoc.id;
        this.liked.emit(this.messageData);
        this.updateHeart();
    }
    updateHeart() {
        this.heartVisible = this.messageData.likeArr.includes(this.auth.auth.currentUser.email);
        this.heartColor = this.heartVisible ? "transparent" : "hotpink";
        this.heartAnimation = this.heartVisible ? "pulse 1s ease" : "none";
        var minSize = 5;
        var numLikes = Math.max(minSize, this.messageData.likeArr.length + minSize);
        var scale = .125;
        this.heartScale = "scale(" + numLikes * scale + ")";
        var unscaledTextSize = 16;
        this.heartTextScale = (16 * 1 / (scale * numLikes)) + "px";
    }
    ngOnDestroy() {
        this.messageSub.unsubscribe();
    }
};
MessageComponent.ctorParameters = () => [
    { type: _messagedb_service__WEBPACK_IMPORTED_MODULE_2__["MessagedbService"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('likeContainer', { static: false })
], MessageComponent.prototype, "likeContainer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], MessageComponent.prototype, "messageDoc", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], MessageComponent.prototype, "liked", void 0);
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")).default]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/messagedb.service.ts":
/*!**************************************!*\
  !*** ./src/app/messagedb.service.ts ***!
  \**************************************/
/*! exports provided: MessagedbService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagedbService", function() { return MessagedbService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");






let MessagedbService = class MessagedbService {
    constructor(db, http) {
        this.db = db;
        this.http = http;
        this.canLike = true;
    }
    getRecentMessages(num) {
        return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(num)).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
    getPageAfter(limit, startDoc) {
        return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").startAfter(startDoc).limit(limit)).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
    getMessageUpdates() {
        return this.db.collection('messages', ref => ref.orderBy("timestamp", "desc").limit(1)).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1));
    }
    sendMessage(mes) {
        let docid = mes.user + Date.now();
        let req = { "messageObj": mes, "docid": docid };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].messageUrl, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(resp => console.log(resp));
        // mes["likeArr"] = [];
        // mes["timestamp"] = Date.now();
        // this.db.collection('messages').add(mes);
    }
    likeMessage(messageObj, user) {
        let req = { "messageObj": messageObj, "user": user };
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].likeUrl, req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(resp => { console.log(resp); });
        // if(messageObj.likeArr.includes(user)) {
        //   this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayRemove(user)});
        // } else {
        //   this.db.collection('messages').doc(messageObj.docid).update({"likeArr": firebase.firestore.FieldValue.arrayUnion(user)});
        // }
    }
    getMessageData(doc) {
        return this.db.collection('messages').doc(doc).valueChanges();
    }
};
MessagedbService.ctorParameters = () => [
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
MessagedbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessagedbService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCJ9Qjkhi5CX1g__lCVd35_kZbFHY1s944",
        authDomain: "custom-chat-7ac90.firebaseapp.com",
        databaseURL: "https://custom-chat-7ac90.firebaseio.com",
        projectId: "custom-chat-7ac90",
        storageBucket: "custom-chat-7ac90.appspot.com",
        messagingSenderId: "1088343649781",
        appId: "1:1088343649781:web:429b122bf3cc6e1ac104bc",
        measurementId: "G-0Y35NE71X9"
    },
    messageUrl: "https://us-central1-custom-chat-7ac90.cloudfunctions.net/sendMessage",
    likeUrl: "https://us-central1-custom-chat-7ac90.cloudfunctions.net/likeMessage"
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jbm91\custom-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map