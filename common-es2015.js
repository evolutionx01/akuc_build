(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/auth/jwt.service.ts":
/*!*************************************!*\
  !*** ./src/app/auth/jwt.service.ts ***!
  \*************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/angular-jwt */ "./node_modules/@auth0/angular-jwt/__ivy_ngcc__/fesm2015/auth0-angular-jwt.js");



class JwtService {
    constructor() { }
    setToken(token) {
        sessionStorage.setItem('token', JSON.stringify(token));
        return true;
    }
    getToken() {
        const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelperService"]();
        const token = JSON.parse(sessionStorage.getItem('token'));
        const decodedToken = helper.decodeToken(token);
        return decodedToken;
    }
    getRawToken() {
        return sessionStorage.getItem('token');
    }
}
JwtService.ɵfac = function JwtService_Factory(t) { return new (t || JwtService)(); };
JwtService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JwtService, factory: JwtService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JwtService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/service/api-service.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/service/api-service.service.ts ***!
  \*******************************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../auth/jwt.service */ "./src/app/auth/jwt.service.ts");








class ApiServiceService {
    constructor(http, jwtService) {
        this.http = http;
        this.jwtService = jwtService;
    }
    setHeaders() {
        const token = this.jwtService.getRawToken();
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json',
                // tslint:disable-next-line: object-literal-key-quotes
                'Authorization': 'Bearer ' + token
            })
        };
        return httpOptions;
    }
    //   private setPostHeaders() {
    //     const token = this.jwtService.getRawToken();
    //     const httpOptions = {
    //       headers: new HttpHeaders({
    //        // 'Content-Type': "application/json",
    //         'Authorization': 'Bearer '+token
    //       })
    //     };
    //     return httpOptions;
    //   }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // client-side or network error occurred.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(`${JSON.stringify(error.error.error)}`);
    }
    get(pathUrl) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}${pathUrl}`, this.setHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // tslint:disable-next-line: ban-types
    post(postUrl, body) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}${postUrl}`, JSON.stringify(body), this.setHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    delete(delUrl) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}${delUrl}`, this.setHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    // tslint:disable-next-line: ban-types
    put(putUrl, body) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl}${putUrl}`, JSON.stringify(body), this.setHeaders())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
ApiServiceService.ɵfac = function ApiServiceService_Factory(t) { return new (t || ApiServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"])); };
ApiServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiServiceService, factory: ApiServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _auth_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map