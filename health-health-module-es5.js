function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["health-health-module"], {
  /***/
  "./src/app/health/health-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/health/health-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: HealthRoutingModule */

  /***/
  function srcAppHealthHealthRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthRoutingModule", function () {
      return HealthRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _health_view_health_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./health-view/health-view.component */
    "./src/app/health/health-view/health-view.component.ts");

    var routes = [{
      path: '',
      component: _health_view_health_view_component__WEBPACK_IMPORTED_MODULE_2__["HealthViewComponent"]
    }];

    var HealthRoutingModule = function HealthRoutingModule() {
      _classCallCheck(this, HealthRoutingModule);
    };

    HealthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HealthRoutingModule
    });
    HealthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HealthRoutingModule_Factory(t) {
        return new (t || HealthRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/health/health-view/health-view.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/health/health-view/health-view.component.ts ***!
    \*************************************************************/

  /*! exports provided: HealthViewComponent */

  /***/
  function srcAppHealthHealthViewHealthViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthViewComponent", function () {
      return HealthViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HealthViewComponent = /*#__PURE__*/function () {
      function HealthViewComponent() {
        _classCallCheck(this, HealthViewComponent);

        this.active = 'top';
      }

      _createClass(HealthViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HealthViewComponent;
    }();

    HealthViewComponent.ɵfac = function HealthViewComponent_Factory(t) {
      return new (t || HealthViewComponent)();
    };

    HealthViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HealthViewComponent,
      selectors: [["app-health-view"]],
      decls: 189,
      vars: 0,
      consts: [["id", "top-section"], [1, "page_banner"], [1, "container"], [1, "spices-top"], [1, "row"], [1, "col-md-8", "col-sm-12", "mb-4"], ["src", "../../../assets/spices_3.jpg", "alt", "ak Health center", 1, "img-fluid"], [1, "col-md-4"], [1, "sec-title"], [1, "desc"], [1, "col-md-12", "col-sm-12"], [1, "product"], [1, "col-md-12"], [1, "sec-title", "text-center"], [1, "row", "custom-margin"], [1, "col-md-6", "pb-4"], ["src", "../../../assets/healthcare.jpg", "alt", "", 1, "img-fluid"], [1, "col-md-6"], ["controls", "", 1, "img-fluid"], ["src", "../../../assets/plesure.mp4", "type", "video/mp4"], ["src", "../../../assets/plesure.ogg", "type", "video/ogg"], [1, "col-md-12", "pt-4"], [1, "row", "mx-2"], [1, "list-group", "col-md-6"], [1, "list-group-item"], ["src", "../../../assets/turmeric.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/abtn.mp4", "type", "video/mp4"], ["src", "../../../assets/abtn.ogg", "type", "video/ogg"], ["src", "../../../assets/fenu.jpg", "alt", "", 1, "img-fluid"], ["controls", "", 1, "img-fluid", "py-4"], ["src", "../../../assets/fenu.mp4", "type", "video/mp4"], ["src", "../../../assets/fenu.ogg", "type", "video/ogg"], [1, "pt-4", 2, "font-weight", "bold"], ["src", "../../../assets/moringa.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/moringa.mp4", "type", "video/mp4"], ["src", "../../../assets/moringa.ogg", "type", "video/ogg"]],
      template: function HealthViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AK UNIVERSAL HEALTHCARE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Organic herbs packed for personal consumption, upon request by AKUC members only.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Health Care");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "AK Universal Healthcare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " has appeared at an opportune moment when most of us have turned away from life\u2019s natural state and when illness has taken a toll on our body, mind and soul. It is now an opportunity for us to revert to naturopathy for more effective health management.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "AK Universal Healthcare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " guarantees a peaceful mind via effective health measures by way of natural grass root health remedies. Every member of AK Universal Healthcare will benefit from the range of natural remedy products at affordable rates and enjoy free consultation by Ayurvedic and other health care specialist for his/her personal health management.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "OUR PRODUCTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Pleasure (Nutrition Drink With Fibre)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Pleasure consists of Psyllium herb (Plantago ovate) that is a shrub- like soluble fiber with vegetable and fruit extract used primarily as a gentle bulk forming laxative. When fibre comes in contact with water, it swells and forms a gelatin-like mass that helps transport waste through the intestinal tract. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "video", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "source", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "source", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Therefore, maintaining a healthy intestinal tract is the key to general wellness. Unless you regularly eat whole fruits and vegetables, nuts, and seeds, you may be missing out on the healthiest forms of fiber to help boost your health. A high - fibre diet has many benefits which include:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Weight Loss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Heart Health");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Skin Health ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Stroke");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Irritable Bowel Syndrome (IBS)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Hemorrhoids");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Gallstones and kidney stones");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Blood Sugar Control");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Diverticular Disease");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Relief from constipation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "ABTN (Anti-Body Toxic Neutralizer)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Curcumin is the principal curcuminoid of turmeric of the popular Indian spice turmeric, which is a member of the ginger family(Zingiberaceae). The curcuminoids are natural and responsible for the yellow color of turmeric. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "video", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "source", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "source", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Curcumin is the main active ingredient in ABTN. It has powerful anti-inflammatory effects, is a very strong antioxidant and has antibacterial and antiviral properties. Some of the health benefits of ABTN include:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Stimulates and enhances the immune system");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Preventing and treating Alzheimer\u2019s disease");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Help treat symptoms of Arthritis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Acne(Pimples)/infection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Viral infection");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Inflammatory Bowel Disease");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Alzheimer\u2019s Disease/Dementia/Memory Loss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Diabetes (Type 2)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Boosts levels of the brain hormone BDNF (Brain-Derived Neurotrophic Factor) to fight various degenerative processes in the brain");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Alleviating the symptoms of depression");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Contains powerful anti-inflammatory and antioxidant properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Reduces inflammation and oxidation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Prevention of colon, skin, prostate and breast cancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, "Liver Tonic");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "Wound Healing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, "Weight Loss");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Stomach Upset (Dyspepsia)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "Fenugreek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Although Fenugreek is primarily used as a condiment, it is s traditional herb that has many uses in promoting and balancing health. Most of the health benefits of fenugreek are due to the presence of saponins and fiber that it contains.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "video", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "source", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "source", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " Its seeds contain a gumming substance called mucilage and when mixed with water, mucilage expands and becomes a gelatinous salve for irritated tissues. Some of the health benefit includes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "Libido enhancement for men and women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Improves Digestion");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Controls Blood Sugar Levels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Relief for sore throat, pain and cough");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, "Aid Milk Production In Lactating Women");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Minimizes symptoms of menopause");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Reduces cardiovascular risk");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "Prevents colon cancer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "ul", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Natural breast enlargement");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Improves Skin Problems Inflammation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "Lowers Blood Cholesterol");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Helps in Acid Reflux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Inducing Birth (stimulate uterine contractions)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Reduces menstrual discomfort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "Suppress appetite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "li", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](175, "Aids in treating constipation and diarrhea");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "p", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "NOTE:- Pregnant and lactating women should consult a doctor before taking fenugreek ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Moringa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "video", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "source", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "source", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " Your browser does not support the video tag. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["#top-section[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 56px;\n}\n\n.page_banner[_ngcontent-%COMP%] {\n  background-image: url('about.png');\n  padding-top: 4rem;\n  padding-bottom: 8rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page_banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  color: #1e4356;\n  text-transform: uppercase;\n  font-family: \"Montserrat-Bold\";\n  font-size: 1.65rem;\n}\n\n.page_banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1e4356;\n  margin: 0;\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e1666;\n  font-size: 2rem;\n  padding-bottom: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #3498db;\n  content: \"\";\n  border-radius: 50%;\n}\n\nsection[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: justify;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 0 0;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: #3498db;\n  color: #ffffff;\n  padding: 7.5rem 0;\n  flex: none;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0;\n  padding: 0.75rem 7rem 0.75rem 3rem;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #3498db;\n  background-color: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n}\n\n.product[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n\n.product[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e1666;\n}\n\n.product[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  right: 0;\n}\n\n.product[_ngcontent-%COMP%]   .custom-margin[_ngcontent-%COMP%] {\n  margin: 5rem -15px;\n}\n\n.spices-top[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL2hlYWx0aC12aWV3L2hlYWx0aC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUVJO0VBQ0ksa0JBQUE7QUFDUjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ2hCOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQURSOztBQUdJO0VBQ0kscUJBQUE7QUFEUjs7QUFHUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFEWjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQWhCOztBQUNnQjtFQUNJLGtCQUFBO0FBQ3BCOztBQUVZO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0FBQWhCOztBQUNnQjtFQUNJLGlCQUFBO0FBQ3BCOztBQUdRO0VBQ0ksaUJBQUE7QUFEWjs7QUFNQTtFQUNJLG9CQUFBO0FBSEo7O0FBS1E7RUFDSSxjQUFBO0FBSFo7O0FBSVk7RUFDSSxRQUFBO0FBRmhCOztBQU1FO0VBQ0Usa0JBQUE7QUFKSjs7QUFRQTtFQUNJLGVBQUE7QUFMSiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC9oZWFsdGgtdmlldy9oZWFsdGgtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b3Atc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA1NnB4O1xyXG59XHJcblxyXG4ucGFnZV9iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9hYm91dC5wbmdcIik7XHJcbiAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDhyZW07XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBoMiB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIGNvbG9yOiAjMWU0MzU2O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1Cb2xkJztcclxuICAgIGZvbnQtc2l6ZToxLjY1cmVtO1xyXG4gIH1cclxuICBwIHtcclxuICAgIGNvbG9yOiAjMWU0MzU2O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuc2VjdGlvbiB7XHJcbiAgICAuc2VjLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxZTE2NjY7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZXNjIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgfVxyXG4gICAgLnRhYi1idXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAwIDAgMDtcclxuXHJcbiAgICAgICAgLm5hdi1waWxscyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3LjVyZW0gMDtcclxuICAgICAgICAgICAgZmxleDogbm9uZTtcclxuICAgICAgICAgICAgLm5hdi1saW5rIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW0gN3JlbSAwLjc1cmVtIDNyZW07XHJcbiAgICAgICAgICAgICAgICAudGFiLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIC50YWItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wcm9kdWN0IHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgLnNlYy10aXRsZSB7XHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzFlMTY2NjtcclxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIC5jdXN0b20tbWFyZ2lue1xyXG4gICAgbWFyZ2luOiA1cmVtIC0xNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnNwaWNlcy10b3Age1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-health-view',
          templateUrl: './health-view.component.html',
          styleUrls: ['./health-view.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/health/health.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/health/health.module.ts ***!
    \*****************************************/

  /*! exports provided: HealthModule */

  /***/
  function srcAppHealthHealthModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthModule", function () {
      return HealthModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _health_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./health-routing.module */
    "./src/app/health/health-routing.module.ts");
    /* harmony import */


    var _health_view_health_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./health-view/health-view.component */
    "./src/app/health/health-view/health-view.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");

    var HealthModule = function HealthModule() {
      _classCallCheck(this, HealthModule);
    };

    HealthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HealthModule
    });
    HealthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HealthModule_Factory(t) {
        return new (t || HealthModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HealthModule, {
        declarations: [_health_view_health_view_component__WEBPACK_IMPORTED_MODULE_3__["HealthViewComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_health_view_health_view_component__WEBPACK_IMPORTED_MODULE_3__["HealthViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _health_routing_module__WEBPACK_IMPORTED_MODULE_2__["HealthRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=health-health-module-es5.js.map