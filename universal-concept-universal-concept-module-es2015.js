(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["universal-concept-universal-concept-module"],{

/***/ "./src/app/universal-concept/universal-concept-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/universal-concept/universal-concept-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: UniversalConceptRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalConceptRoutingModule", function() { return UniversalConceptRoutingModule; });
/* harmony import */ var _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./universal-concept-view/universal-concept-view.component */ "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





const routes = [
    {
        path: '',
        component: _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_0__["UniversalConceptViewComponent"]
    }
];
class UniversalConceptRoutingModule {
}
UniversalConceptRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: UniversalConceptRoutingModule });
UniversalConceptRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function UniversalConceptRoutingModule_Factory(t) { return new (t || UniversalConceptRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UniversalConceptRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UniversalConceptRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: UniversalConceptViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalConceptViewComponent", function() { return UniversalConceptViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function UniversalConceptViewComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UniversalConceptViewComponent_div_74_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.open(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.caption);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](image_r1.caption);
} }
class UniversalConceptViewComponent {
    constructor(lightbox) {
        this.lightbox = lightbox;
        this.albumArr = [];
        this.caption = ['', 'Natural Treatment For Healthcare Free of Charge', 'Quality education centre for members’ Children', 'Meditation and Yoga Classes', 'Recreational Centre', 'AKUC Guest House for members vacation/relaxation/recreation with playground and swimming  pool', 'Swimming Pool', 'Nursing Home', 'Free Welfare Service', 'Self Defence Classes'];
        for (let i = 1; i <= 9; i++) {
            const src = '../../../assets/akuc' + i + '.jpg';
            const caption = this.caption[i];
            const thumb = '../../../assets/akuc' + i + '.jpg';
            const album = {
                src,
                caption,
                thumb
            };
            this.albumArr.push(album);
        }
    }
    ngOnInit() {
    }
    open(index) {
        // open lightbox
        this.lightbox.open(this.albumArr, index);
    }
    close() {
        // close lightbox programmatically
        this.lightbox.close();
    }
}
UniversalConceptViewComponent.ɵfac = function UniversalConceptViewComponent_Factory(t) { return new (t || UniversalConceptViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"])); };
UniversalConceptViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UniversalConceptViewComponent, selectors: [["app-universal-concept-view"]], decls: 75, vars: 1, consts: [["id", "top-section"], [1, "page_banner"], [1, "container"], [1, "about-us"], [1, "row"], [1, "col-lg-6", "col-md-12", "col-sm-12", "no-gutter"], ["src", "../../../assets/training.jpg", "alt", "ak Universal Concept", 1, "img-fluid"], [1, "col-lg-6", "col-md-12", "col-sm-12", "foundation_title"], [1, "sec-title"], [1, "desc"], [1, "about"], [1, "content"], [1, "container", "join"], [1, "col-12", "quotes"], [1, "highlight"], [1, "mb-4"], [1, "col-md-6"], ["src", "../../../assets/seo-traffic-img.png", 1, "img-fluid"], [1, "col-md-6", "pt-4"], [1, "my-2", "py-4"], ["routerLink", "/register", 1, "btn", "btn-custom", "mb-2", "mr-2"], [1, "mb-0"], [1, "row", "gallery"], [1, "col-md-12"], ["class", "col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card", "mb-4", "px-2", "py-2"], [1, "img-fluid", 3, "src", "alt", "click"]], template: function UniversalConceptViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "AK UNIVERSAL CONCEPT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AKUC is a platform to fulfill and establish the nation's dream of achieving a desired lifestyle. AKUC offers you the opportunity to help materialize that dream with your services.");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "How do we lay our foundation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Many think that opening a business outlet and start operating is the way of business but may fail to realize that they are taking high risk by doing it because they are not sure whether they will have customers they wish. it is simply like making the building without a proper fountation. we have to do the solid piling as foundation before making the building. Likewise we have to recurit our customers to let our business live forever");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "The businessman who looketh into the interest of others as his own his business will expand");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Life is a war. The Almighty has put us in the war field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Be Alert! Protect yourself.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Life means, there must be a goal and must be aggressive in achieving it.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "If learning, learned it aggressively.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Even if it is a game, play it aggressively,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Those who don\u2019t have aim is better to die early As they are useless.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Remember that you are the master.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Do what you feel. Don\u2019t listen to the negative people.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Especially the pessimist. If your target is 10th mile, then aim for 11th mile.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Block the mind of a pessimist in one bang to avoid interrupting your aim.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "WHO SHOULD JOIN US? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "OPTIMIST & IGNORANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "WHO SHOULD NOT JOIN US? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "PESSIMIST & LOSER");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Expecting the world to treat us fairly is a little like expecting a bull not to attack us because we are vegetarians ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nobody plan to fail but many fail to plan so plan your life and live your life as life is what, we make it");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Join Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "you are invited to join us to be a realist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Every AKUC members and their families are able to enjoy privileges offered by AK Universal Foundation by providing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](74, UniversalConceptViewComponent_div_74_Template, 5, 3, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumArr);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["#top-section[_ngcontent-%COMP%] {\n  position: relative;\n  margin-top: 56px;\n}\n\n.page_banner[_ngcontent-%COMP%] {\n  background-image: url('about.png');\n  padding-top: 6rem;\n  padding-bottom: 9rem;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.page_banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n}\n\n.page_banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: white;\n  margin: 0;\n  padding: 0;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding-bottom: 0.5rem;\n}\n\nsection[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\n\nsection[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 1.5rem 0;\n  text-align: justify;\n}\n\n.about[_ngcontent-%COMP%] {\n  padding-top: 2rem;\n  padding-bottom: 10rem;\n  background-image: url(https://m7n5e4p3.stackpathcdn.com/wp-content/uploads/2020/04/home-fifteen-back.png);\n  background-position: -139px 0;\n  background-repeat: no-repeat;\n  background-size: auto;\n}\n\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n}\n\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n  text-align: center;\n  color: #021057;\n}\n\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.about[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  text-align: center;\n}\n\n.gallery[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 0.5rem;\n  color: #333333;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  padding: 15px 45px;\n  background: #d94b38;\n  font-weight: 400;\n  border: none;\n  transition: all 300ms ease;\n  border: 1px solid #d94b38 !important;\n}\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  border: 1px solid #d94b38 !important;\n  color: #d94b38 !important;\n}\n\n.emp[_ngcontent-%COMP%] {\n  background-color: #f8f3e8;\n}\n\n.join[_ngcontent-%COMP%] {\n  color: #333333;\n}\n\n.join[_ngcontent-%COMP%]   .quotes[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n  padding-bottom: 5rem;\n  text-align: center;\n}\n\n.join[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%] {\n  color: #d55342;\n}\n\n.about-us[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  position: relative;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%] {\n  padding: 3rem 2rem;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n  color: #6a7c92;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  padding-bottom: 1rem;\n  padding-right: 3rem;\n  color: #021057;\n  letter-spacing: -0.6px;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #3498db;\n  content: \"\";\n  border-radius: 50%;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 80px;\n  width: 80px;\n  text-align: center;\n  line-height: 80px;\n  font-size: 20px;\n  color: #333333;\n  margin-left: -40px;\n  margin-top: -40px;\n  padding-left: 5px;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 50%;\n  transition: all 300ms ease;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #d94b38;\n  color: #fefefe;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  padding: 15px 45px;\n  background: #3498db;\n  font-weight: 400;\n  border: none;\n  transition: all 300ms ease;\n  border: 1px solid #3498db !important;\n}\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  border: 1px solid #3498db !important;\n  color: #3498db !important;\n  box-shadow: 0 6px 13px rgba(214, 214, 214, 0.75);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5pdmVyc2FsLWNvbmNlcHQvdW5pdmVyc2FsLWNvbmNlcHQtdmlldy91bml2ZXJzYWwtY29uY2VwdC12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0NBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBRUo7O0FBREk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFHUjs7QUFESTtFQUNJLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUdSOztBQUNJO0VBQ0ksa0JBQUE7QUFFUjs7QUFBUTtFQUNJLGVBQUE7RUFDQSxzQkFBQTtBQUVaOztBQURZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUVBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFaEI7O0FBRUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FBQVI7O0FBSUE7RUFDSSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUdBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EscUJBQUE7QUFESjs7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQUFSOztBQUVZO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUFoQjs7QUFFWTtFQUNJLGVBQUE7QUFBaEI7O0FBRVk7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FBQWhCOztBQU9JO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0FBSlI7O0FBeUJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUF0Qko7O0FBdUJJO0VBQ0ksd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBckJSOztBQXlCQTtFQUNJLHlCQUFBO0FBdEJKOztBQXlCQTtFQUNJLGNBQUE7QUF0Qko7O0FBd0JJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUF0QlI7O0FBd0JJO0VBQ0ksY0FBQTtBQXRCUjs7QUEwQkE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUF2Qko7O0FBd0JJO0VBQ0ksa0JBQUE7QUF0QlI7O0FBd0JRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUF0Qlo7O0FBd0JRO0VBQ0ksa0JBQUE7QUF0Qlo7O0FBd0JZO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7QUF0QmhCOztBQXVCZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXRCcEI7O0FBNEJJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBS0Esa0JBQUE7RUFDQSwwQkFBQTtBQTFCUjs7QUEyQlE7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUF6Qlo7O0FBOEJBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUEzQko7O0FBNEJJO0VBQ0ksd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0RBQUE7QUExQlIiLCJmaWxlIjoic3JjL2FwcC91bml2ZXJzYWwtY29uY2VwdC91bml2ZXJzYWwtY29uY2VwdC12aWV3L3VuaXZlcnNhbC1jb25jZXB0LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdG9wLXNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNTZweDtcclxufVxyXG4ucGFnZV9iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fib3V0LnBuZ1wiKTtcclxuICAgIHBhZGRpbmctdG9wOiA2cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDlyZW07XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5zZWN0aW9uIHtcclxuICAgIC5zZWMtdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgaDIge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM0MjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuZGVzYyB7XHJcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxufVxyXG5cclxuLmFib3V0IHtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcmVtO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vbTduNWU0cDMuc3RhY2twYXRoY2RuLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wNC9ob21lLWZpZnRlZW4tYmFjay5wbmcpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTEzOXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvO1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgIC5kZXNjIHtcclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA1cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjEwNTc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZ2FsbGVyeSB7XHJcbiAgICBwIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuYWJvdXQge1xyXG4vLyAgICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fib3V0LWJnLmpwZ1wiKSBjZW50ZXIgdG9wIG5vLXJlcGVhdCBmaXhlZDtcclxuLy8gICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbi8vICAgICBwYWRkaW5nOiA2MHB4IDAgNDBweCAwO1xyXG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4vLyAgICAgJjo6YmVmb3JlIHtcclxuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICAgICAgICBsZWZ0OiAwO1xyXG4vLyAgICAgICAgIHJpZ2h0OiAwO1xyXG4vLyAgICAgICAgIHRvcDogMDtcclxuLy8gICAgICAgICBib3R0b206IDA7XHJcbi8vICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkyKTtcclxuLy8gICAgICAgICB6LWluZGV4OiA5O1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4uYnRuLWN1c3RvbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Q5NGIzODtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOTRiMzggIWltcG9ydGFudDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5NGIzOCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZDk0YjM4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lbXAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjNlODtcclxufVxyXG5cclxuLmpvaW4ge1xyXG4gICAgY29sb3I6ICMzMzMzMzM7XHJcblxyXG4gICAgLnF1b3RlcyB7XHJcbiAgICAgICAgcGFkZGluZzogMCA1cmVtO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIC5oaWdobGlnaHQge1xyXG4gICAgICAgIGNvbG9yOiAjZDU1MzQyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXQtdXMge1xyXG4gICAgcGFkZGluZzogMi41cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLmZvdW5kYXRpb25fdGl0bGUge1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW0gMnJlbTtcclxuXHJcbiAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNmE3YzkyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMjEwNTc7XHJcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogODBweDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk0YjM4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZlZmVmZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzM0OThkYiAhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMzQ5OGRiICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICMzNDk4ZGIgIWltcG9ydGFudDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDZweCAxM3B4IHJnYmEoMjE0LCAyMTQsIDIxNCwgMC43NSk7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversalConceptViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-universal-concept-view',
                templateUrl: './universal-concept-view.component.html',
                styleUrls: ['./universal-concept-view.component.scss']
            }]
    }], function () { return [{ type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"] }]; }, null); })();


/***/ }),

/***/ "./src/app/universal-concept/universal-concept.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/universal-concept/universal-concept.module.ts ***!
  \***************************************************************/
/*! exports provided: UniversalConceptModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniversalConceptModule", function() { return UniversalConceptModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./universal-concept-routing.module */ "./src/app/universal-concept/universal-concept-routing.module.ts");
/* harmony import */ var _universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./universal-concept-view/universal-concept-view.component */ "./src/app/universal-concept/universal-concept-view/universal-concept-view.component.ts");





class UniversalConceptModule {
}
UniversalConceptModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UniversalConceptModule });
UniversalConceptModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UniversalConceptModule_Factory(t) { return new (t || UniversalConceptModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UniversalConceptModule, { declarations: [_universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__["UniversalConceptViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UniversalConceptModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_universal_concept_view_universal_concept_view_component__WEBPACK_IMPORTED_MODULE_3__["UniversalConceptViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _universal_concept_routing_module__WEBPACK_IMPORTED_MODULE_2__["UniversalConceptRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=universal-concept-universal-concept-module-es2015.js.map