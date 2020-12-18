function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/auth/jwt.service.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/jwt.service.ts ***!
    \*************************************/

  /*! exports provided: JwtService */

  /***/
  function srcAppAuthJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtService", function () {
      return JwtService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @auth0/angular-jwt */
    "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");

    var JwtService = /*#__PURE__*/function () {
      function JwtService() {
        _classCallCheck(this, JwtService);
      }

      _createClass(JwtService, [{
        key: "setToken",
        value: function setToken(token) {
          sessionStorage.setItem('token', JSON.stringify(token));
          return true;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          var helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
          var token = JSON.parse(sessionStorage.getItem('token'));
          var decodedToken = helper.decodeToken(token);
          return decodedToken;
        }
      }, {
        key: "getRawToken",
        value: function getRawToken() {
          return sessionStorage.getItem('token');
        }
      }]);

      return JwtService;
    }();

    JwtService.ɵfac = function JwtService_Factory(t) {
      return new (t || JwtService)();
    };

    JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JwtService,
      factory: JwtService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/service/api-service.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/service/api-service.service.ts ***!
    \*******************************************************/

  /*! exports provided: ApiServiceService */

  /***/
  function srcAppSharedServiceApiServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiServiceService", function () {
      return ApiServiceService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../auth/jwt.service */
    "./src/app/auth/jwt.service.ts");

    var ApiServiceService = /*#__PURE__*/function () {
      function ApiServiceService(http, jwtService) {
        _classCallCheck(this, ApiServiceService);

        this.http = http;
        this.jwtService = jwtService;
      }

      _createClass(ApiServiceService, [{
        key: "setHeaders",
        value: function setHeaders() {
          var token = this.jwtService.getRawToken();
          var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
              'Content-Type': 'application/json',
              // tslint:disable-next-line: object-literal-key-quotes
              'Authorization': 'Bearer ' + token
            })
          };
          return httpOptions;
        } //   private setPostHeaders() {
        //     const token = this.jwtService.getRawToken();
        //     const httpOptions = {
        //       headers: new HttpHeaders({
        //        // 'Content-Type': "application/json",
        //         'Authorization': 'Bearer '+token
        //       })
        //     };
        //     return httpOptions;
        //   }

      }, {
        key: "handleError",
        value: function handleError(error) {
          if (error.error instanceof ErrorEvent) {
            // client-side or network error occurred.
            console.error('An error occurred:', error.error.message);
          } else {
            // The backend returned an unsuccessful response code.
            console.error("Backend returned code ".concat(error.status, ", ") + "body was: ".concat(error.error));
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])("".concat(JSON.stringify(error.error.error)));
        }
      }, {
        key: "get",
        value: function get(pathUrl) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl).concat(pathUrl), this.setHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        } // tslint:disable-next-line: ban-types

      }, {
        key: "post",
        value: function post(postUrl, body) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl).concat(postUrl), JSON.stringify(body), this.setHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }, {
        key: "delete",
        value: function _delete(delUrl) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl).concat(delUrl), this.setHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        } // tslint:disable-next-line: ban-types

      }, {
        key: "put",
        value: function put(putUrl, body) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl).concat(putUrl), JSON.stringify(body), this.setHeaders()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
        }
      }]);

      return ApiServiceService;
    }();

    ApiServiceService.ɵfac = function ApiServiceService_Factory(t) {
      return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]));
    };

    ApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiServiceService,
      factory: ApiServiceService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }, {
          type: _auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map