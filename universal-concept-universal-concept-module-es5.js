function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["universal-concept-universal-concept-module"], {
  /***/
  "./src/app/universal-concept/universal-concept-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/universal-concept/universal-concept-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: UniversalConceptRoutingModule */

  /***/
  function srcAppUniversalConceptUniversalConceptRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniversalConceptRoutingModule", function () {
      return UniversalConceptRoutingModule;
    });
    /* harmony import */


    var _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./universal-concept-view/universal-concept-view.component */
    "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts");
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
      component: _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_0__["UniversalConceptViewComponent"]
    }];

    var UniversalConceptRoutingModule = function UniversalConceptRoutingModule() {
      _classCallCheck(this, UniversalConceptRoutingModule);
    };

    UniversalConceptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UniversalConceptRoutingModule
    });
    UniversalConceptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function UniversalConceptRoutingModule_Factory(t) {
        return new (t || UniversalConceptRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UniversalConceptRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniversalConceptRoutingModule, [{
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
  "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: UniversalConceptViewComponent */

  /***/
  function srcAppUniversalConceptUniversalConceptViewUniversalConceptViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniversalConceptViewComponent", function () {
      return UniversalConceptViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-lightbox */
    "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
    /* harmony import */


    var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function UniversalConceptViewComponent_div_76_Template(rf, ctx) {
      if (rf & 1) {
        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UniversalConceptViewComponent_div_76_Template_img_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

          var i_r2 = ctx.index;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.open(i_r2);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.caption);
      }
    }

    var UniversalConceptViewComponent = /*#__PURE__*/function () {
      function UniversalConceptViewComponent(lightbox) {
        _classCallCheck(this, UniversalConceptViewComponent);

        this.lightbox = lightbox;
        this.albumArr = [];
        this.caption = ['', '2014 Seminar', '2014 Seminar', '2014 Seminar', '2015 Seminar', '2015 Seminar', '2015 Seminar', '2015 Seminar'];

        for (var i = 1; i <= 7; i++) {
          var src = '../../../assets/seminar_' + i + '.jpg';
          var caption = this.caption[i];
          var thumb = '../../../assets/seminar_' + i + '.jpg';
          var album = {
            src: src,
            caption: caption,
            thumb: thumb
          };
          this.albumArr.push(album);
        }
      }

      _createClass(UniversalConceptViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "open",
        value: function open(index) {
          // open lightbox
          this.lightbox.open(this.albumArr, index);
        }
      }, {
        key: "close",
        value: function close() {
          // close lightbox programmatically
          this.lightbox.close();
        }
      }]);

      return UniversalConceptViewComponent;
    }();

    UniversalConceptViewComponent.ɵfac = function UniversalConceptViewComponent_Factory(t) {
      return new (t || UniversalConceptViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]));
    };

    UniversalConceptViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UniversalConceptViewComponent,
      selectors: [["app-universal-concept-view"]],
      decls: 77,
      vars: 1,
      consts: [[1, "page_banner"], [1, "container"], [1, "about"], [1, "desc"], [1, "content"], [1, "emp"], [1, "row"], [1, "col-md-6"], ["src", "../../../assets/training.jpg", "alt", "ak Universal Concept", 1, "img-fluid"], [1, "sec-title"], [1, "join"], [1, "col-12", "quotes"], [1, "highlight"], [1, "mb-4"], [1, "col-md-12", "pt-4"], [1, "my-2", "text-center"], ["routerLink", "/register", 1, "btn", "btn-custom", "mb-2", "mr-2"], [1, "text-center", "mb-0"], ["class", "col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card", "mb-4", "px-2", "py-2"], [1, "img-fluid", 3, "src", "alt", "click"]],
      template: function UniversalConceptViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "AK UNIVERSAL CONCEPT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "The businessman who looketh into the interest of others as his own his business will expand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Life is a war. The Almighty has put us in the war field.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Be Alert! Protect yourself.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Life means, there must be a goal and must be aggressive in achieving it.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "If learning, learned it aggressively.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Even if it is a game, play it aggressively,");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Those who don\u2019t have aim is better to die early As they are useless.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Remember that you are the master.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Do what you feel. Don\u2019t listen to the negative people.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Especially the pessimist. If your target is 10th mile, then aim for 11th mile.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Block the mind of a pessimist in one bang to avoid interrupting your aim.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "THE DIFFERENCE IN EMPLOYMENT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "No racial segregation as we practice universal concept");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "No bias in promotion as we implement performance basis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "No discrimination as we regard all our employees as a team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "No sabotage as we care and love our employees as a family member ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "No hanky-panky business as we are professional");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "WHO SHOULD JOIN US? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "OPTIMIST & IGNORANCE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "WHO SHOULD NOT JOIN US? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "PESSIMIST & LOSER");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "NOBODY PLAN TO FAIL BUT MANY FAIL TO PLAN SO PLAN YOUR LIFE AND LIVE YOUR LIFE AS LIFE IS WHAT ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "WE MAKE IT");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Join Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "so, you are invited to join us to be a realist");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, UniversalConceptViewComponent_div_76_Template, 3, 2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumArr);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: [".page_banner[_ngcontent-%COMP%] {\n  background-image: url('page_banner.jpg');\n  padding: 5rem 0;\n}\n.page_banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n}\n.page_banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  padding: 0;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n}\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding-bottom: 0.5rem;\n}\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\nsection[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n  text-align: justify;\n}\n.about[_ngcontent-%COMP%] {\n  background: url('about-bg.jpg') center top no-repeat fixed;\n  background-size: cover;\n  padding: 60px 0 40px 0;\n  position: relative;\n}\n.about[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background: rgba(255, 255, 255, 0.92);\n  z-index: 9;\n}\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n  text-align: center;\n  color: #d94b38;\n}\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-align: center;\n}\n.btn-custom[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  padding: 15px 45px;\n  background: #d94b38;\n  font-weight: 400;\n  border: none;\n  transition: all 300ms ease;\n  border: 1px solid #d94b38 !important;\n}\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  border: 1px solid #d94b38 !important;\n  color: #d94b38 !important;\n}\n.emp[_ngcontent-%COMP%] {\n  background-color: #f8f3e8;\n}\n.join[_ngcontent-%COMP%] {\n  background-color: #333333;\n  color: white;\n}\n.join[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n  text-align: center;\n}\n.join[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #d55342;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdmVyc2FsLWNvbmNlcHQvdW5pdmVyc2FsLWNvbmNlcHQtdmlldy91bml2ZXJzYWwtY29uY2VwdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7RUFDQSxlQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUFJO0VBQ0ksWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBRVI7QUFDQTtFQUNJLGlCQUFBO0FBRUo7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFEUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQUdaO0FBRlk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUdoQjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQUNSO0FBR0E7RUFDSSwwREFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQUFKO0FBQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EscUNBQUE7RUFDQSxVQUFBO0FBQ1I7QUFDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUNSO0FBQ1k7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ2hCO0FBQ1k7RUFDSSxlQUFBO0FBQ2hCO0FBQ1k7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQ2hCO0FBS0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQUZKO0FBR0k7RUFDSSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EseUJBQUE7QUFEUjtBQUtBO0VBQ0kseUJBQUE7QUFGSjtBQUtBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FBRko7QUFHSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQURSO0FBR0k7RUFDSSxjQUFBO0FBRFIiLCJmaWxlIjoic3JjL2FwcC91bml2ZXJzYWwtY29uY2VwdC91bml2ZXJzYWwtY29uY2VwdC12aWV3L3VuaXZlcnNhbC1jb25jZXB0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BhZ2VfYmFubmVyLmpwZ1wiKTtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcclxuICAgIC5zZWMtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM0MjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hYm91dC1iZy5qcGdcIikgY2VudGVyIHRvcCBuby1yZXBlYXQgZml4ZWQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgcGFkZGluZzogNjBweCAwIDQwcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45Mik7XHJcbiAgICAgICAgei1pbmRleDogOTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAuZGVzYyB7XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZDk0YjM4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmJ0bi1jdXN0b20ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHBhZGRpbmc6IDE1cHggNDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNkOTRiMzg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2U7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZDk0YjM4ICFpbXBvcnRhbnQ7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOTRiMzggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2Q5NGIzOCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZW1wIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGYzZTg7XHJcbn1cclxuXHJcbi5qb2luIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAucXVvdGVzIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDVyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmhpZ2hsaWdodCB7XHJcbiAgICAgICAgY29sb3I6ICNkNTUzNDI7XHJcbiAgICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversalConceptViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-universal-concept-view',
          templateUrl: './universal-concept-view.component.html',
          styleUrls: ['./universal-concept-view.component.scss']
        }]
      }], function () {
        return [{
          type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/universal-concept/universal-concept.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/universal-concept/universal-concept.module.ts ***!
    \***************************************************************/

  /*! exports provided: UniversalConceptModule */

  /***/
  function srcAppUniversalConceptUniversalConceptModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UniversalConceptModule", function () {
      return UniversalConceptModule;
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


    var _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./universal-concept-routing.module */
    "./src/app/universal-concept/universal-concept-routing.module.ts");
    /* harmony import */


    var _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./universal-concept-view/universal-concept-view.component */
    "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts");

    var UniversalConceptModule = function UniversalConceptModule() {
      _classCallCheck(this, UniversalConceptModule);
    };

    UniversalConceptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: UniversalConceptModule
    });
    UniversalConceptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function UniversalConceptModule_Factory(t) {
        return new (t || UniversalConceptModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UniversalConceptModule, {
        declarations: [_universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__["UniversalConceptViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversalConceptModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__["UniversalConceptViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=universal-concept-universal-concept-module-es5.js.map