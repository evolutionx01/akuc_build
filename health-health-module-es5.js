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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function HealthViewComponent_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pleasure (Nutrition Drink With Fibre)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pleasure consists of Psyllium herb (Plantago ovate) that is a shrub- like soluble fiber with vegetable and fruit extract used primarily as a gentle bulk forming laxative. When fibre comes in contact with water, it swells and forms a gelatin-like mass that helps transport waste through the intestinal tract. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Therefore, maintaining a healthy intestinal tract is the key to general wellness. Unless you regularly eat whole fruits and vegetables, nuts, and seeds, you may be missing out on the healthiest forms of fiber to help boost your health. A high - fibre diet has many benefits which include:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Weight Loss");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Heart Health");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Skin Health ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Stroke");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Irritable Bowel Syndrome (IBS)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Hemorrhoids");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gallstones and kidney stones");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Blood Sugar Control");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Diverticular Disease");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Relief from constipation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HealthViewComponent_ng_template_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ABTN (Anti-Body Toxic Neutralizer)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Curcumin is the principal curcuminoid of turmeric of the popular Indian spice turmeric, which is a member of the ginger family(Zingiberaceae). The curcuminoids are natural and responsible for the yellow color of turmeric. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Curcumin is the main active ingredient in ABTN. It has powerful anti-inflammatory effects, is a very strong antioxidant and has antibacterial and antiviral properties. Some of the health benefits of ABTN include:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Stimulates and enhances the immune system");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Preventing and treating Alzheimer\u2019s disease");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Help treat symptoms of Arthritis");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Acne(Pimples)/infection ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Viral infection");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Inflammatory Bowel Disease");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Alzheimer\u2019s Disease/Dementia/Memory Loss");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Diabetes (Type 2)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Boosts levels of the brain hormone BDNF (Brain-Derived Neurotrophic Factor) to fight various degenerative processes in the brain");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Alleviating the symptoms of depression");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Contains powerful anti-inflammatory and antioxidant properties");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Reduces inflammation and oxidation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Prevention of colon, skin, prostate and breast cancer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Liver Tonic");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Wound Healing");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Weight Loss");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Stomach Upset (Dyspepsia)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HealthViewComponent_ng_template_50_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Fenugreek");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Although Fenugreek is primarily used as a condiment, it is s traditional herb that has many uses in promoting and balancing health. Most of the health benefits of fenugreek are due to the presence of saponins and fiber that it contains.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "video", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "source", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "source", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Its seeds contain a gumming substance called mucilage and when mixed with water, mucilage expands and becomes a gelatinous salve for irritated tissues. Some of the health benefit includes:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Libido enhancement for men and women");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Improves Digestion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Controls Blood Sugar Levels");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Relief for sore throat, pain and cough");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Aid Milk Production In Lactating Women");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Minimizes symptoms of menopause");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Reduces cardiovascular risk");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Prevents colon cancer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Natural breast enlargement");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Improves Skin Problems Inflammation");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Lowers Blood Cholesterol");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Helps in Acid Reflux");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Inducing Birth (stimulate uterine contractions)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Reduces menstrual discomfort");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Suppress appetite");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Aids in treating constipation and diarrhea");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "NOTE:- Pregnant and lactating women should consult a doctor before taking fenugreek ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HealthViewComponent_ng_template_56_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Moringa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "video", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "source", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "source", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Your browser does not support the video tag. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

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
      decls: 58,
      vars: 2,
      consts: [["id", "top-section"], [1, "page_banner"], [1, "container"], [1, "spices-top"], [1, "row"], [1, "col-md-8"], ["src", "../../../assets/spices_3.jpg", "alt", "ak Health center", 1, "img-fluid"], [1, "col-md-4"], [1, "sec-title"], [1, "desc"], [1, "product"], [1, "container-fluid", "no-gutter"], [1, "sec-title", "text-center"], [1, "d-flex", "tab-button"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", 3, "activeId", "activeIdChange"], ["nav", "ngbNav"], ["ngbNavItem", "top"], ["ngbNavLink", ""], ["aria-hidden", "true", 1, "fa", "fa-arrow-right"], [1, "tab-name", "pl-4"], ["ngbNavContent", ""], ["ngbNavItem", "middle"], ["ngbNavItem", "bottom"], ["ngbNavItem", "lower"], [1, "px-4", "content", 3, "ngbNavOutlet"], [1, "col-md-6"], ["src", "../../../assets/healthcare.jpg", "alt", "", 1, "img-fluid"], ["controls", "", 1, "img-fluid", "py-4"], ["src", "../../../assets/plesure.mp4", "type", "video/mp4"], ["src", "../../../assets/plesure.ogg", "type", "video/ogg"], [1, "col-md-12", "pt-4"], [1, "row", "mx-2"], [1, "list-group", "col-md-6"], [1, "list-group-item"], ["src", "../../../assets/turmeric.jpg", "alt", "", 1, "img-fluid"], ["controls", "", "autoplay", "", 1, "img-fluid", "py-4"], ["src", "../../../assets/abtn.mp4", "type", "video/mp4"], ["src", "../../../assets/abtn.ogg", "type", "video/ogg"], ["src", "../../../assets/fenu.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/fenu.mp4", "type", "video/mp4"], ["src", "../../../assets/fenu.ogg", "type", "video/ogg"], [1, "pt-4", 2, "font-weight", "bold"], ["src", "../../../assets/moringa.jpg", "alt", "", 1, "img-fluid"], ["src", "../../../assets/moringa.mp4", "type", "video/mp4"], ["src", "../../../assets/moringa.ogg", "type", "video/ogg"]],
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AK Universal Healthcare");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " guarantees a peaceful mind via effective health measures by way of natural grass root health remedies. Every member of AK Universal Healthcare will benefit from the range of natural remedy products at affordable rates and enjoy free consultation by Ayurvedic and other health care specialist for his/her personal health management.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "OUR PRODUCTS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "ul", 14, 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("activeIdChange", function HealthViewComponent_Template_ul_activeIdChange_31_listener($event) {
            return ctx.active = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Pleasure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, HealthViewComponent_ng_template_38_Template, 38, 0, "ng-template", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "ABTN");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, HealthViewComponent_ng_template_44_Template, 52, 0, "ng-template", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Fenugreek");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, HealthViewComponent_ng_template_50_Template, 52, 0, "ng-template", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "i", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Moringa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, HealthViewComponent_ng_template_56_Template, 10, 0, "ng-template", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("activeId", ctx.active);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbNavOutlet", _r0);
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNav"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavItem"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavContent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavOutlet"]],
      styles: ["#top-section[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 56px;\n}\n\n.page_banner[_ngcontent-%COMP%] {\n  background-image: url('about.png');\n  padding-top: 4rem;\n  padding-bottom: 8rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page_banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  color: #1e4356;\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.65rem;\n}\n\n.page_banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #1e4356;\n  margin: 0;\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e1666;\n  font-size: 2rem;\n  padding-bottom: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #3498db;\n  content: \"\";\n  border-radius: 50%;\n}\n\nsection[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: justify;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 0 0;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%] {\n  opacity: 1;\n  background-color: #3498db;\n  color: #ffffff;\n  padding: 7.5rem 0;\n  flex: none;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #fff;\n  border-radius: 0;\n  padding: 0.75rem 7rem 0.75rem 3rem;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: #3498db;\n  background-color: #fff;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .tab-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\nsection[_ngcontent-%COMP%]   .tab-button[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n}\n\n.product[_ngcontent-%COMP%] {\n  padding-bottom: 5rem;\n}\n\n.product[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #1e1666;\n}\n\n.product[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  right: 0;\n}\n\n.spices-top[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoL2hlYWx0aC12aWV3L2hlYWx0aC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0Usa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFBRTtFQUNFLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUVKOztBQUVJO0VBQ0ksa0JBQUE7QUFDUjs7QUFDUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFDWjs7QUFBWTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ2hCOztBQUdJO0VBQ0ksaUJBQUE7RUFDQSxtQkFBQTtBQURSOztBQUdJO0VBQ0kscUJBQUE7QUFEUjs7QUFHUTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7QUFEWjs7QUFFWTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtDQUFBO0FBQWhCOztBQUNnQjtFQUNJLGtCQUFBO0FBQ3BCOztBQUVZO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0FBQWhCOztBQUNnQjtFQUNJLGlCQUFBO0FBQ3BCOztBQUdRO0VBQ0ksaUJBQUE7QUFEWjs7QUFNQTtFQUNJLG9CQUFBO0FBSEo7O0FBS1E7RUFDSSxjQUFBO0FBSFo7O0FBSVk7RUFDSSxRQUFBO0FBRmhCOztBQVFBO0VBQ0ksZUFBQTtBQUxKIiwiZmlsZSI6InNyYy9hcHAvaGVhbHRoL2hlYWx0aC12aWV3L2hlYWx0aC12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3RvcC1zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDU2cHg7XHJcbn1cclxuXHJcbi5wYWdlX2Jhbm5lciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fib3V0LnBuZ1wiKTtcclxuICBwYWRkaW5nLXRvcDogNHJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHJlbTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGgyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgY29sb3I6ICMxZTQzNTY7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6MS42NXJlbTtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBjb2xvcjogIzFlNDM1NjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbnNlY3Rpb24ge1xyXG4gICAgLnNlYy10aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMWUxNjY2O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIC50YWItYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMCAwIDA7XHJcblxyXG4gICAgICAgIC5uYXYtcGlsbHMge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogNy41cmVtIDA7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDdyZW0gMC43NXJlbSAzcmVtO1xyXG4gICAgICAgICAgICAgICAgLnRhYi1uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM0OThkYjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAudGFiLW5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50IHtcclxuICAgICAgICAgICAgcGFkZGluZzogMi41cmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXJlbTtcclxuICAgIC5zZWMtdGl0bGUge1xyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6ICMxZTE2NjY7XHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNwaWNlcy10b3Age1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG59XHJcbiJdfQ== */"]
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
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
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

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