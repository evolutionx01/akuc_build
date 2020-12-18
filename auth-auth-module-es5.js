function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"], {
  /***/
  "./src/app/auth/admin-sign-in/admin-sign-in.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/auth/admin-sign-in/admin-sign-in.component.ts ***!
    \***************************************************************/

  /*! exports provided: AdminSignInComponent */

  /***/
  function srcAppAuthAdminSignInAdminSignInComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSignInComponent", function () {
      return AdminSignInComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _admin_sign_in_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-sign-in.service */
    "./src/app/auth/admin-sign-in/admin-sign-in.service.ts");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _jwt_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../jwt.service */
    "./src/app/auth/jwt.service.ts");

    var AdminSignInComponent = /*#__PURE__*/function () {
      function AdminSignInComponent(router, formBuilder, apiService, spinner, jwtService) {
        _classCallCheck(this, AdminSignInComponent);

        this.router = router;
        this.formBuilder = formBuilder;
        this.apiService = apiService;
        this.spinner = spinner;
        this.jwtService = jwtService;
      }

      _createClass(AdminSignInComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          sessionStorage.clear();
          this.buildLoginForm();
        }
      }, {
        key: "buildLoginForm",
        value: function buildLoginForm() {
          this.loginForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "onLogin",
        value: function onLogin() {
          var _this = this;

          console.log(this.loginForm.value);
          this.spinner.show();
          this.apiService.loginAdmin(this.loginForm.value).subscribe(function (data) {
            _this.adminDetails(data);
          }, function (error) {
            _this.spinner.hide();

            console.log(error);
          });
        }
      }, {
        key: "adminDetails",
        value: function adminDetails(data) {
          this.spinner.hide();
          console.log(data);

          if (data.statusCode === 200) {
            // this.jwtService.setToken()
            sessionStorage.setItem('token', data.token);
            this.router.navigate(['/admin']);
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return AdminSignInComponent;
    }();

    AdminSignInComponent.ɵfac = function AdminSignInComponent_Factory(t) {
      return new (t || AdminSignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["AdminSignInService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]));
    };

    AdminSignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AdminSignInComponent,
      selectors: [["app-admin-sign-in"]],
      decls: 19,
      vars: 1,
      consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-xl-10", "col-lg-12", "col-md-9"], [1, "card", "o-hidden", "border-0", "shadow-lg", "my-5"], [1, "card-body", "p-0"], [1, "row"], [1, "col-lg-6", "d-none", "d-lg-block", "bg-login-image"], [1, "col-lg-6"], [1, "login-box"], [1, "text-center"], ["src", "../../../assets/logo.png", "alt", "akuc foundation", 1, "mb-4"], [1, "user", 3, "formGroup"], [1, "form-group"], ["type", "email", "formControlName", "email", "id", "exampleInputEmail", "aria-describedby", "emailHelp", "placeholder", "Enter Email Address...", 1, "form-control", "form-control-user"], ["type", "password", "formControlName", "password", "id", "exampleInputPassword", "placeholder", "Password", 1, "form-control", "form-control-user"], [1, "btn", "btn-primary", "btn-user", "btn-block", 3, "click"]],
      template: function AdminSignInComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminSignInComponent_Template_button_click_17_listener() {
            return ctx.onLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Login ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".bg-login-image[_ngcontent-%COMP%] {\n  background: url('spices_3.jpg');\n  background-position: center;\n  background-size: cover;\n}\n\n.login-box[_ngcontent-%COMP%] {\n  padding: 7.5rem 2.5rem;\n}\n\nsection[_ngcontent-%COMP%] {\n  background: #007bff;\n  background: linear-gradient(to right, #0062e6, #33aeff);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1zaWduLWluL2FkbWluLXNpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtFQUNBLHVEQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2FkbWluLXNpZ24taW4vYWRtaW4tc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZy1sb2dpbi1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc3BpY2VzXzMuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgICBwYWRkaW5nOiA3LjVyZW0gMi41cmVtO1xyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDdiZmY7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMDYyZTYsICMzM2FlZmYpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-admin-sign-in',
          templateUrl: './admin-sign-in.component.html',
          styleUrls: ['./admin-sign-in.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _admin_sign_in_service__WEBPACK_IMPORTED_MODULE_3__["AdminSignInService"]
        }, {
          type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
        }, {
          type: _jwt_service__WEBPACK_IMPORTED_MODULE_5__["JwtService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/admin-sign-in/admin-sign-in.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/auth/admin-sign-in/admin-sign-in.service.ts ***!
    \*************************************************************/

  /*! exports provided: AdminSignInService */

  /***/
  function srcAppAuthAdminSignInAdminSignInServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminSignInService", function () {
      return AdminSignInService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_service_api_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/service/api-service.service */
    "./src/app/shared/service/api-service.service.ts");

    var AdminSignInService = /*#__PURE__*/function () {
      function AdminSignInService(apiService) {
        _classCallCheck(this, AdminSignInService);

        this.apiService = apiService;
      }

      _createClass(AdminSignInService, [{
        key: "loginAdmin",
        value: function loginAdmin(postParams) {
          return this.apiService.post('auth', postParams);
        }
      }]);

      return AdminSignInService;
    }();

    AdminSignInService.ɵfac = function AdminSignInService_Factory(t) {
      return new (t || AdminSignInService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](src_app_shared_service_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"]));
    };

    AdminSignInService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AdminSignInService,
      factory: AdminSignInService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminSignInService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: src_app_shared_service_api_service_service__WEBPACK_IMPORTED_MODULE_1__["ApiServiceService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/auth/auth-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: AuthRoutingModule */

  /***/
  function srcAppAuthAuthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
      return AuthRoutingModule;
    });
    /* harmony import */


    var _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admin-sign-in/admin-sign-in.component */
    "./src/app/auth/admin-sign-in/admin-sign-in.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_0__["AdminSignInComponent"]
    }];

    var AuthRoutingModule = function AuthRoutingModule() {
      _classCallCheck(this, AuthRoutingModule);
    };

    AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AuthRoutingModule
    });
    AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AuthRoutingModule_Factory(t) {
        return new (t || AuthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth/auth.module.ts":
  /*!*************************************!*\
    !*** ./src/app/auth/auth.module.ts ***!
    \*************************************/

  /*! exports provided: AuthModule */

  /***/
  function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
      return AuthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth-routing.module */
    "./src/app/auth/auth-routing.module.ts");
    /* harmony import */


    var _admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./admin-sign-in/admin-sign-in.component */
    "./src/app/auth/admin-sign-in/admin-sign-in.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AuthModule = function AuthModule() {
      _classCallCheck(this, AuthModule);
    };

    AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
    AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AuthModule_Factory(t) {
        return new (t || AuthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
        declarations: [_admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["AdminSignInComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_admin_sign_in_admin_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["AdminSignInComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=auth-auth-module-es5.js.map