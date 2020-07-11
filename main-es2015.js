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

/***/ "./src/app/about-us/about-us-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/about-us/about-us-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AboutUsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsRoutingModule", function() { return AboutUsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _aboutus_view_aboutus_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aboutus-view/aboutus-view.component */ "./src/app/about-us/aboutus-view/aboutus-view.component.ts");





const routes = [
    {
        path: '',
        component: _aboutus_view_aboutus_view_component__WEBPACK_IMPORTED_MODULE_2__["AboutusViewComponent"]
    }
];
class AboutUsRoutingModule {
}
AboutUsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutUsRoutingModule });
AboutUsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutUsRoutingModule_Factory(t) { return new (t || AboutUsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutUsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about-us/about-us.module.ts":
/*!*********************************************!*\
  !*** ./src/app/about-us/about-us.module.ts ***!
  \*********************************************/
/*! exports provided: AboutUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsModule", function() { return AboutUsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _about_us_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us-routing.module */ "./src/app/about-us/about-us-routing.module.ts");
/* harmony import */ var _aboutus_view_aboutus_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus-view/aboutus-view.component */ "./src/app/about-us/aboutus-view/aboutus-view.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__);






class AboutUsModule {
}
AboutUsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutUsModule });
AboutUsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutUsModule_Factory(t) { return new (t || AboutUsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _about_us_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutUsRoutingModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutUsModule, { declarations: [_aboutus_view_aboutus_view_component__WEBPACK_IMPORTED_MODULE_3__["AboutusViewComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _about_us_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutUsRoutingModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutUsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_aboutus_view_aboutus_view_component__WEBPACK_IMPORTED_MODULE_3__["AboutusViewComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _about_us_routing_module__WEBPACK_IMPORTED_MODULE_2__["AboutUsRoutingModule"],
                    ngx_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/about-us/aboutus-view/aboutus-view.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/about-us/aboutus-view/aboutus-view.component.ts ***!
  \*****************************************************************/
/*! exports provided: AboutusViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusViewComponent", function() { return AboutusViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function AboutusViewComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AboutusViewComponent_div_27_Template_img_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.open(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const image_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r1.thumb, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", image_r1.caption);
} }
class AboutusViewComponent {
    constructor(lightbox) {
        this.lightbox = lightbox;
        this.albumArr = [];
        this.caption = ['', 'Work Station', 'Waiting Room', 'Reception', 'Reception', 'Conference Room', 'Board Room', 'Meeting Room'];
        for (let i = 1; i <= 7; i++) {
            const src = '../../../assets/gallery' + i + '.jpg';
            const caption = this.caption[i];
            const thumb = '../../../assets/gallery' + i + '.jpg';
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
AboutusViewComponent.ɵfac = function AboutusViewComponent_Factory(t) { return new (t || AboutusViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"])); };
AboutusViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutusViewComponent, selectors: [["app-aboutus-view"]], decls: 53, vars: 1, consts: [[1, "page_banner"], [1, "container"], [1, "aboutus-sec"], [1, "aboutus"], [1, "list-group", "list-group-flush"], [1, "list-group-item"], [1, "row"], ["class", "col-lg-4 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "mission-sec"], [1, "content"], [1, "sec-title"], [1, "sec-desc"], [1, "image"], ["src", "../../../assets/missionone.png", "alt", "About Akuc foundation", 1, "img-fluid"], [1, "vision-sec"], [1, "col-lg-4", "col-md-6", "col-sm-12"], [1, "card", "margin-bottom", "px-2", "py-2"], [1, "img-fluid", 3, "src", "alt", "click"]], template: function AboutusViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Established since 2013, AK Universal Concept (AKUC) was founded to uplift the living standards and create opportunities to improve the earnings of low and average income earners and educating the target group on surrounding risk factors such as :");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Poor health (consuming unhealthy & imbalanced food, exposure to air & water pollution and infections)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Lack of knowledge (ignorance on general knowledge leading to failure in managing one\u2019s life )");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Wealth (insufficient income leading to inadequacy to manage life with ease) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Happiness (unable to live happily with the family due to pressures of the mind and anxiety)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Inadequate leadership skills (lost status as head of the family & integrity in the community to failure in maintaining a happy lifestyle)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "The target group will enjoy a life changing experience when they are constructively assisted in overcoming these factors. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "AKUC aims at benefitting individuals and families at national and universal levels, and practices legality, accountability and practicability to ensure a user friendly approach to its mission and vision goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AboutusViewComponent_div_27_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Our Mission");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "To create community awareness on shaping a better lifestyle in Health, Knowledge, Wealth, Happiness and Leadership ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Our Vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "To Provide an Avenue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "To Enhance Community");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Services Nationalwide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.albumArr);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".page_banner[_ngcontent-%COMP%] {\n  background-image: url('page_banner.jpg');\n  padding: 5rem 0;\n}\n.page_banner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  text-transform: uppercase;\n}\nsection[_ngcontent-%COMP%] {\n  padding: 2.5rem 0;\n}\n.aboutus-sec[_ngcontent-%COMP%]   .aboutus[_ngcontent-%COMP%]   .list-group[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.aboutus-sec[_ngcontent-%COMP%]   .aboutus[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n.mission-sec[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #f8f3e8;\n}\n.mission-sec[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 70%;\n}\n.mission-sec[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30%;\n}\n.mission-sec[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n.mission-sec[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.mission-sec[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\n.mission-sec[_ngcontent-%COMP%]   .sec-desc[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.vision-sec[_ngcontent-%COMP%] {\n  position: relative;\n  background-image: url('aboutus_background.jpg');\n  background-position: center;\n}\n.vision-sec[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #333333;\n  opacity: 0.7;\n  content: \"\";\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  position: relative;\n  color: white;\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sec-desc[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n.vision-sec[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .sec-desc[_ngcontent-%COMP%]   .list-group-item[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border-color: transparent;\n}\n.margin-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXR1cy12aWV3L2Fib3V0dXMtdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHdDQUFBO0VBQ0EsZUFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0EseUJBQUE7QUFFUjtBQUNBO0VBQ0ksaUJBQUE7QUFFSjtBQUdRO0VBQ0ksZUFBQTtBQUFaO0FBRVE7RUFDSSw2QkFBQTtBQUFaO0FBS0E7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0FBRko7QUFHSTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtBQURSO0FBR0k7RUFDSSxxQkFBQTtFQUNBLFVBQUE7QUFEUjtBQUdJO0VBQ0ksa0JBQUE7QUFEUjtBQUdRO0VBQ0ksb0JBQUE7QUFEWjtBQUdZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFEaEI7QUFLSTtFQUNJLGVBQUE7QUFIUjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0FBSko7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFIUjtBQUtJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FBSFI7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFJWTtFQUNJLG9CQUFBO0FBRmhCO0FBSWdCO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFGcEI7QUFNUTtFQUNJLGVBQUE7QUFKWjtBQUtZO0VBQ0ksNkJBQUE7RUFDQSx5QkFBQTtBQUhoQjtBQVNBO0VBQ0ksbUJBQUE7QUFOSiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0LXVzL2Fib3V0dXMtdmlldy9hYm91dHVzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZV9iYW5uZXIge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3BhZ2VfYmFubmVyLmpwZ1wiKTtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgIGgyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5zZWN0aW9uIHtcclxuICAgIHBhZGRpbmc6IDIuNXJlbSAwO1xyXG59XHJcblxyXG4uYWJvdXR1cy1zZWMge1xyXG4gICAgLmFib3V0dXMge1xyXG4gICAgICAgIC5saXN0LWdyb3VwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubGlzdC1ncm91cC1pdGVtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWlzc2lvbi1zZWMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjNlODtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgICAuc2VjLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM0MjtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc2VjLWRlc2Mge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgIH1cclxufVxyXG5cclxuLnZpc2lvbi1zZWMge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Fib3V0dXNfYmFja2dyb3VuZC5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAuc2VjLXRpdGxlIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM0MjtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjLWRlc2Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgICAgIC5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubWFyZ2luLWJvdHRvbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutusViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aboutus-view',
                templateUrl: './aboutus-view.component.html',
                styleUrls: ['./aboutus-view.component.scss']
            }]
    }], function () { return [{ type: ngx_lightbox__WEBPACK_IMPORTED_MODULE_1__["Lightbox"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/content/content.component */ "./src/app/shared/content/content.component.ts");





const routes = [
    {
        path: '',
        component: _shared_content_content_component__WEBPACK_IMPORTED_MODULE_2__["ContentComponent"],
        children: [
            {
                path: '',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./c19checksteps/c19checksteps.module */ "./src/app/c19checksteps/c19checksteps.module.ts")).then(m => m.C19checkstepsModule)
            },
            {
                path: 'register',
                loadChildren: () => __webpack_require__.e(/*! import() | registration-registration-module */ "registration-registration-module").then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "./src/app/registration/registration.module.ts")).then(m => m.RegistrationModule)
            },
            {
                path: 'aboutus',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./about-us/about-us.module */ "./src/app/about-us/about-us.module.ts")).then(m => m.AboutUsModule)
            },
            {
                path: 'team',
                loadChildren: () => __webpack_require__.e(/*! import() | team-team-module */ "team-team-module").then(__webpack_require__.bind(null, /*! ./team/team.module */ "./src/app/team/team.module.ts")).then(m => m.TeamModule)
            },
            {
                path: 'health',
                loadChildren: () => __webpack_require__.e(/*! import() | health-health-module */ "health-health-module").then(__webpack_require__.bind(null, /*! ./health/health.module */ "./src/app/health/health.module.ts")).then(m => m.HealthModule)
            },
            {
                path: 'universalconcept',
                loadChildren: () => __webpack_require__.e(/*! import() | universal-concept-universal-concept-module */ "universal-concept-universal-concept-module").then(__webpack_require__.bind(null, /*! ./universal-concept/universal-concept.module */ "./src/app/universal-concept/universal-concept.module.ts")).then(m => m.UniversalConceptModule)
            }
        ]
    },
    {
        path: '**',
        redirectTo: '',
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor() {
        this.title = 'covid19';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 1, consts: [["bdColor", "rgba(0, 0, 0, 0.8)", "size", "medium", "color", "#fff", "type", "square-loader", 3, "fullScreen"], [2, "color", "white"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _c19checksteps_c19checksteps_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./c19checksteps/c19checksteps.module */ "./src/app/c19checksteps/c19checksteps.module.ts");
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");
/* harmony import */ var _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about-us/about-us.module */ "./src/app/about-us/about-us.module.ts");
/* harmony import */ var _shared_content_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/content/content.component */ "./src/app/shared/content/content.component.ts");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-lightbox */ "./node_modules/ngx-lightbox/__ivy_ngcc__/index.js");
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");


















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        // {
        //   provide: 'SocialAuthServiceConfig',
        //   useValue: {
        //     autoLogin: false,
        //     providers: [
        //       {
        //         id: GoogleLoginProvider.PROVIDER_ID,
        //         provider: new GoogleLoginProvider(
        //           '850826026349-qpc47s0jqbvll0c3lov9abaasit8jd0b.apps.googleusercontent.com'
        //         ),
        //       },
        //       {
        //         id: FacebookLoginProvider.PROVIDER_ID,
        //         provider: new FacebookLoginProvider('clientId'),
        //       }
        //     ],
        //   } as SocialAuthServiceConfig,
        // },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _c19checksteps_c19checksteps_module__WEBPACK_IMPORTED_MODULE_5__["C19checkstepsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"],
            _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_11__["AboutUsModule"],
            ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _c19checksteps_c19checksteps_module__WEBPACK_IMPORTED_MODULE_5__["C19checkstepsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"],
        _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_11__["AboutUsModule"],
        ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _shared_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_content_content_component__WEBPACK_IMPORTED_MODULE_12__["ContentComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _c19checksteps_c19checksteps_module__WEBPACK_IMPORTED_MODULE_5__["C19checkstepsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_10__["YouTubePlayerModule"],
                    _about_us_about_us_module__WEBPACK_IMPORTED_MODULE_11__["AboutUsModule"],
                    ngx_lightbox__WEBPACK_IMPORTED_MODULE_13__["LightboxModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_15__["NgxSpinnerModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
                ],
                providers: [
                    // {
                    //   provide: 'SocialAuthServiceConfig',
                    //   useValue: {
                    //     autoLogin: false,
                    //     providers: [
                    //       {
                    //         id: GoogleLoginProvider.PROVIDER_ID,
                    //         provider: new GoogleLoginProvider(
                    //           '850826026349-qpc47s0jqbvll0c3lov9abaasit8jd0b.apps.googleusercontent.com'
                    //         ),
                    //       },
                    //       {
                    //         id: FacebookLoginProvider.PROVIDER_ID,
                    //         provider: new FacebookLoginProvider('clientId'),
                    //       }
                    //     ],
                    //   } as SocialAuthServiceConfig,
                    // },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/c19checksteps/c19checksteps-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/c19checksteps/c19checksteps-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: C19checkstepsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C19checkstepsRoutingModule", function() { return C19checkstepsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _get_strated_get_strated_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-strated/get-strated.component */ "./src/app/c19checksteps/get-strated/get-strated.component.ts");





const routes = [
    {
        path: '',
        component: _get_strated_get_strated_component__WEBPACK_IMPORTED_MODULE_2__["GetStratedComponent"]
    }
];
class C19checkstepsRoutingModule {
}
C19checkstepsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: C19checkstepsRoutingModule });
C19checkstepsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function C19checkstepsRoutingModule_Factory(t) { return new (t || C19checkstepsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](C19checkstepsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C19checkstepsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/c19checksteps/c19checksteps.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/c19checksteps/c19checksteps.module.ts ***!
  \*******************************************************/
/*! exports provided: C19checkstepsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C19checkstepsModule", function() { return C19checkstepsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _c19checksteps_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./c19checksteps-routing.module */ "./src/app/c19checksteps/c19checksteps-routing.module.ts");
/* harmony import */ var _get_strated_get_strated_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-strated/get-strated.component */ "./src/app/c19checksteps/get-strated/get-strated.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");








class C19checkstepsModule {
}
C19checkstepsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: C19checkstepsModule });
C19checkstepsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function C19checkstepsModule_Factory(t) { return new (t || C19checkstepsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _c19checksteps_routing_module__WEBPACK_IMPORTED_MODULE_2__["C19checkstepsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
            _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](C19checkstepsModule, { declarations: [_get_strated_get_strated_component__WEBPACK_IMPORTED_MODULE_3__["GetStratedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _c19checksteps_routing_module__WEBPACK_IMPORTED_MODULE_2__["C19checkstepsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C19checkstepsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_get_strated_get_strated_component__WEBPACK_IMPORTED_MODULE_3__["GetStratedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _c19checksteps_routing_module__WEBPACK_IMPORTED_MODULE_2__["C19checkstepsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _angular_youtube_player__WEBPACK_IMPORTED_MODULE_6__["YouTubePlayerModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/c19checksteps/get-strated/get-strated.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/c19checksteps/get-strated/get-strated.component.ts ***!
  \********************************************************************/
/*! exports provided: GetStratedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStratedComponent", function() { return GetStratedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/youtube-player */ "./node_modules/@angular/youtube-player/__ivy_ngcc__/fesm2015/youtube-player.js");







function GetStratedComponent_ngb_carousel_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to AK Universal Concept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Unity is Our Aim, Benevolence is Our Business");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r3.images[0], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GetStratedComponent_ngb_carousel_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Commitment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Individual Commitment to a Group Effort.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.images[1], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GetStratedComponent_ngb_carousel_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Teamwork");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Teamwork Means that We Share A Common Goal.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r5.images[2], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GetStratedComponent_ngb_carousel_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Communication");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We Recognize Our Representative As The Backbone of Our Organization.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r6.images[3], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GetStratedComponent_ngb_carousel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetStratedComponent_ngb_carousel_1_ng_template_1_Template, 7, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GetStratedComponent_ngb_carousel_1_ng_template_2_Template, 7, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GetStratedComponent_ngb_carousel_1_ng_template_3_Template, 7, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GetStratedComponent_ngb_carousel_1_ng_template_4_Template, 7, 1, "ng-template", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GetStratedComponent_ng_template_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetStratedComponent_ng_template_64_Template_button_click_0_listener() { const d_r8 = ctx.dismiss; return d_r8("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "youtube-player", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class GetStratedComponent {
    constructor(router, config, modalService) {
        this.router = router;
        this.modalService = modalService;
        this.images = [1, 2, 3, 4].map(n => `../../../assets/bg_` + n + `.jpg`);
        config.backdrop = 'static';
        config.keyboard = false;
        config.centered = true;
        config.size = 'xl';
        config.windowClass = 'youtube_modal';
    }
    ngOnInit() { }
    open(content) {
        this.modalService.open(content);
    }
    register() {
        this.router.navigate(['/register']);
    }
    redirect(data) {
        if (data === 'health') {
            this.router.navigate(['/health']);
        }
        else if (data === 'concept') {
            this.router.navigate(['/universalconcept']);
        }
    }
}
GetStratedComponent.ɵfac = function GetStratedComponent_Factory(t) { return new (t || GetStratedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"])); };
GetStratedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GetStratedComponent, selectors: [["app-get-strated"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]])], decls: 77, vars: 1, consts: [[4, "ngIf"], [1, "foundation"], [1, "container-fluid"], [1, "row"], [1, "card", "col-lg-4", "col-md-4", "col-xs-12"], [1, "card-header"], [1, "card-body"], [1, "what-we-do"], [1, "container"], [1, "sec-title", "text-center"], [1, "row", "our_concept"], [1, "col", "mx-1", "col-xs-12"], [1, "card"], [1, "card-body", 3, "click"], ["alt", "ak universal concept", "src", "../../../assets/logo.png"], ["alt", "ak universal healthcare", "src", "../../../assets/logo_HC.png"], [1, "about-us"], [1, "col-lg-6", "col-md-12", "col-sm-12", "no-gutter"], [1, "youtube_video"], ["alt", "akuc youtube video", "src", "../../../assets/aboutus.jpg", 1, "img-fluid"], [3, "click"], ["aria-hidden", "true", 1, "fa", "fa-play"], [1, "col-lg-6", "col-md-12", "col-sm-12", "foundation_title"], [1, "sec-title"], [1, "desc"], ["routerLink", "/aboutus", 1, "btn", "btn-custom", "mb-2", "mr-2"], ["href", "https://www.facebook.com/ak.uc.58958", "target", "_blank", 1, "btn", "btn-custom", "mb-2", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://twitter.com/AKUniversalCon1", "target", "_blank", 1, "btn", "btn-custom", "mb-2", "mr-2"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["href", "https://www.youtube.com/channel/UCHhCrtsU0oUznZEKyG0-6DQ", "target", "_blank", 1, "btn", "btn-custom", "mb-2"], ["aria-hidden", "true", 1, "fa", "fa-youtube"], ["class", "youtube_model"], ["content", ""], [1, "register"], [1, "register-title"], [1, "register-text"], [1, "register-btn"], [1, "btn", "btn-custom", 3, "click"], ["ngbSlide", ""], [1, "picsum-img-wrapper"], ["alt", "akuc foundation welcome note", 1, "img-fluid", 3, "src"], [1, "carousel-caption"], ["alt", "akuc foundation commitment", 1, "img-fluid", 3, "src"], ["alt", "akuc foundation teamwork", 1, "img-fluid", 3, "src"], ["alt", "akuc foundation communication", 1, "img-fluid", 3, "src"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body", "text-center"], ["videoId", "82MDlSf48vY", "suggestedQuality", "highres"]], template: function GetStratedComponent_Template(rf, ctx) { if (rf & 1) {
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GetStratedComponent_ngb_carousel_1_Template, 5, 0, "ngb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "COMMITMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Individual commitment to a group effort - that is what makes a team work, a company work, a society work. A civilization work. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "TEAM WORK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Teamwork means that we share a common goal. Regardless of our differences, we strike shoulder to shoulder, confident in one another\u2019s faith, trust and commitment. In the end, teamwork can be summed up in five short words --\u2018We believe in each other\u2019. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "COMMUNICATION");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " We recognize our leaders as the backbone of our organization because in business today success depends on giving customers what they want which takes us to the very basis of good communication. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "What We do");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetStratedComponent_Template_div_click_34_listener() { return ctx.redirect("concept"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetStratedComponent_Template_div_click_38_listener() { return ctx.redirect("health"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "figure");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetStratedComponent_Template_span_click_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](65); return ctx.open(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Welcome to our AKUC Foundation Since 2013");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "AK Universal Concept (AKUC) was founded to uplift the living standards and create opportunities to improve the earnings of low and average income earners and educating the target group on surrounding risk factors");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Read More");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "a", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, GetStratedComponent_ng_template_64_Template, 5, 0, "ng-template", 32, 33, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "section", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "JOIN US");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Get the advantages of AKUC by becoming a Member. We have quality products at lowest prize to avail the offers become a member.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GetStratedComponent_Template_button_click_75_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Register Now");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"], _angular_youtube_player__WEBPACK_IMPORTED_MODULE_4__["YouTubePlayer"]], styles: [".no-gutter[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.foundation[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n\n.foundation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]::before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  content: \"\";\n  background-color: #d94b38;\n  transition: all 300ms ease;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3n+2)::before {\n  background-color: #333333;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3n+3)::before {\n  background-color: #ffc75a;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover:before {\n  opacity: 0.8;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3n+3)   .card-header[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:nth-child(3n+3)   .card-body[_ngcontent-%COMP%] {\n  color: black;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: none;\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding: 95px 40px 70px;\n  background-image: url('image.jpg');\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fefefe;\n  margin-bottom: 20px;\n  border: none;\n  background: none;\n  padding: 0;\n}\n\n.foundation[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 0;\n  position: relative;\n  font-size: 16px;\n  line-height: 26px;\n  color: #fefefe;\n  font-weight: 400;\n}\n\n.what-we-do[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  position: relative;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding-bottom: 1rem;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .our_concept[_ngcontent-%COMP%] {\n  padding: 2.5rem 0 0 0;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  text-align: center;\n  transition: all 300ms ease;\n  cursor: pointer;\n}\n\n.what-we-do[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]:hover {\n  background-image: url('header_banner.png');\n  box-shadow: 0 6px 13px rgba(214, 214, 214, 0.75);\n}\n\n.about-us[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  position: relative;\n  background-color: #f8f3e8;\n}\n\n.about-us[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: justify;\n}\n\n.about-us[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%] {\n  padding-top: 3rem;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  padding: 2rem 0;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  padding-bottom: 1rem;\n  padding-right: 3rem;\n}\n\n.about-us[_ngcontent-%COMP%]   .foundation_title[_ngcontent-%COMP%]   .sec-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]:before {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  margin: 0 auto;\n  display: inline-block;\n  height: 3px;\n  width: 75px;\n  background-color: #d55342;\n  content: \"\";\n  border-radius: 50%;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 80px;\n  width: 80px;\n  text-align: center;\n  line-height: 80px;\n  font-size: 20px;\n  color: #333333;\n  margin-left: -40px;\n  margin-top: -40px;\n  padding-left: 5px;\n  background-color: rgba(255, 255, 255, 0.85);\n  border-radius: 50%;\n  transition: all 300ms ease;\n}\n\n.about-us[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n  background-color: #d94b38;\n  color: #fefefe;\n}\n\n.no-margin[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.btn-custom[_ngcontent-%COMP%] {\n  position: relative;\n  font-size: 16px;\n  line-height: 22px;\n  color: #ffffff;\n  padding: 15px 45px;\n  background: #d94b38;\n  font-weight: 400;\n  border: none;\n  transition: all 300ms ease;\n  border: 1px solid #d94b38 !important;\n}\n\n.btn-custom[_ngcontent-%COMP%]:hover {\n  background-color: transparent !important;\n  border: 1px solid #d94b38 !important;\n  color: #d94b38 !important;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  bottom: 60px;\n}\n\n.carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.register[_ngcontent-%COMP%] {\n  padding: 5rem 0;\n  background-image: url('register.jpg');\n  position: relative;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n}\n\n.register[_ngcontent-%COMP%]:before {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #333333;\n  opacity: 0.9;\n  content: \"\";\n}\n\n.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fefefe;\n  text-align: center;\n}\n\n.register[_ngcontent-%COMP%]   .register-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n.register[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fefefe;\n  text-align: center;\n}\n\n.register[_ngcontent-%COMP%]   .register-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 5rem;\n}\n\n.register[_ngcontent-%COMP%]   .register-btn[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    bottom: 10px;\n  }\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 15px;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .carousel-caption[_ngcontent-%COMP%] {\n    bottom: 10px;\n  }\n  .carousel-caption[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n  .carousel-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n  }\n\n  .carousel-indicators[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    width: 15px;\n    background-color: red;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzE5Y2hlY2tzdGVwcy9nZXQtc3RyYXRlZC9nZXQtc3RyYXRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7QUFDSjs7QUFFSTtFQUNJLGtCQUFBO0FBQ1I7O0FBQ0k7RUFDSSxtQkFBQTtBQUNSOztBQUNJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFDUjs7QUFDSTtFQUNJLHlCQUFBO0FBQ1I7O0FBQ0k7RUFDSSx5QkFBQTtBQUNSOztBQUNJO0VBQ0ksWUFBQTtBQUNSOztBQUVJO0VBQ0ksWUFBQTtBQUFSOztBQUVJO0VBQ0ksWUFBQTtBQUFSOztBQUdJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtBQURSOztBQUtRO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FBSFo7O0FBS1E7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFIWjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUxKOztBQU9JO0VBQ0ksa0JBQUE7QUFMUjs7QUFPUTtFQUNJLG9CQUFBO0FBTFo7O0FBT1k7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFMaEI7O0FBU0k7RUFDSSxxQkFBQTtBQVBSOztBQVVRO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUFSWjs7QUFTWTtFQUNJLDBDQUFBO0VBQ0EsZ0RBQUE7QUFQaEI7O0FBYUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVZKOztBQVdJO0VBQ0ksbUJBQUE7QUFUUjs7QUFXSTtFQUNJLFNBQUE7QUFUUjs7QUFXSTtFQUNJLGlCQUFBO0FBVFI7O0FBV1E7RUFDSSxlQUFBO0FBVFo7O0FBV1E7RUFDSSxrQkFBQTtBQVRaOztBQVdZO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBVGhCOztBQVVnQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBVHBCOztBQWVJO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLDJDQUFBO0VBS0Esa0JBQUE7RUFDQSwwQkFBQTtBQWJSOztBQWNRO0VBQ0kseUJBQUE7RUFDQSxjQUFBO0FBWlo7O0FBaUJBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUFkSjs7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtBQWRKOztBQWVJO0VBQ0ksd0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FBYlI7O0FBZ0JBO0VBQ0ksWUFBQTtBQWJKOztBQWNJO0VBQ0kseUJBQUE7QUFaUjs7QUFnQkE7RUFDSSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQWJKOztBQWNJO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVpSOztBQWVJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFiUjs7QUFjUTtFQUNJLHFCQUFBO0FBWlo7O0FBZ0JJO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFkUjs7QUFlUTtFQUNJLGVBQUE7QUFiWjs7QUFnQkk7RUFDSSxrQkFBQTtBQWRSOztBQWlCQTtFQUNJO0lBQ0ksWUFBQTtFQWROO0VBZU07SUFDSSxlQUFBO0VBYlY7RUFlTTtJQUNJLGNBQUE7RUFiVjs7RUFpQk07SUFDSSxXQUFBO0VBZFY7QUFDRjs7QUFpQkE7RUFDSTtJQUNJLFlBQUE7RUFmTjtFQWdCTTtJQUNJLGtCQUFBO0VBZFY7RUFnQk07SUFDSSxrQkFBQTtFQWRWOztFQW1CTTtJQUNJLFdBQUE7SUFDQSxxQkFBQTtFQWhCVjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYzE5Y2hlY2tzdGVwcy9nZXQtc3RyYXRlZC9nZXQtc3RyYXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uby1ndXR0ZXIge1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG4uZm91bmRhdGlvbiB7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuICAgIC5jYXJkOjpiZWZvcmUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk0YjM4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLmNhcmQ6bnRoLWNoaWxkKDNuICsgMik6OmJlZm9yZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcclxuICAgIH1cclxuICAgIC5jYXJkOm50aC1jaGlsZCgzbiArIDMpOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmM3NWE7XHJcbiAgICB9XHJcbiAgICAuY2FyZDpob3ZlcjpiZWZvcmUge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZDpudGgtY2hpbGQoM24gKyAzKSAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuICAgIC5jYXJkOm50aC1jaGlsZCgzbiArIDMpIC5jYXJkLWJvZHkge1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDk1cHggNDBweCA3MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1hZ2UuanBnKTtcclxuICAgICAgICAvLyAmOm50aC1jaGlsZCgzbiArIDIpIHtcclxuICAgICAgICAvLyAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9waWMxLmpwZyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtYm9keSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ud2hhdC13ZS1kbyB7XHJcbiAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvL2JhY2tncm91bmQtY29sb3I6ICNmOGYzZTg7XHJcbiAgICAuc2VjLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcblxyXG4gICAgICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDc1cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU1MzQyO1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vdXJfY29uY2VwdCB7XHJcbiAgICAgICAgcGFkZGluZzogMi41cmVtIDAgMCAwO1xyXG4gICAgfVxyXG4gICAgLmNhcmQge1xyXG4gICAgICAgIC5jYXJkLWJvZHkge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hlYWRlcl9iYW5uZXIucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA2cHggMTNweCByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuNzUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXQtdXMge1xyXG4gICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjNlODtcclxuICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcbiAgICBmaWd1cmUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICAgIC5mb3VuZGF0aW9uX3RpdGxlIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuXHJcbiAgICAgICAgLmRlc2Mge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWMtdGl0bGUge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogM3JlbTtcclxuICAgICAgICAgICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzVweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDU1MzQyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODUpO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NGIzODtcclxuICAgICAgICAgICAgY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubm8tbWFyZ2luIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5idG4tY3VzdG9tIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDQ1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDk0YjM4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q5NGIzOCAhaW1wb3J0YW50O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDk0YjM4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgY29sb3I6ICNkOTRiMzggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICBib3R0b206IDYwcHg7XHJcbiAgICBoMSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIH1cclxufVxyXG5cclxuLnJlZ2lzdGVyIHtcclxuICAgIHBhZGRpbmc6IDVyZW0gMDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9yZWdpc3Rlci5qcGdcIik7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgICAgb3BhY2l0eTogMC45O1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLXRpdGxlIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgY29sb3I6ICNmZWZlZmU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItdGV4dCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGNvbG9yOiAjZmVmZWZlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCA1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5yZWdpc3Rlci1idG4ge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gICAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgICAgIGJvdHRvbTogMTBweDtcclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcclxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcclxuICAgICAgICBib3R0b206IDEwcHg7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbmRpY2F0b3JzIHtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetStratedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'app-get-strated',
                templateUrl: './get-strated.component.html',
                styleUrls: ['./get-strated.component.scss'],
                providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModalConfig"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbModal"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/content/content.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/content/content.component.ts ***!
  \*****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "./src/app/shared/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "./src/app/shared/footer/footer.component.ts");





class ContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(); };
ContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["app-content"]], decls: 4, vars: 0, template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content',
                templateUrl: './content.component.html',
                styleUrls: ['./content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 38, vars: 0, consts: [[1, "footer-content"], [1, "container"], [1, "row"], [1, "col-md-2"], [1, "logo-part"], ["src", "../../../assets/logo.png", "alt", "akuc footer logo", 1, "logo-footer", "mb-4"], [1, "col-md-5"], ["href", "#", 1, "btn-footer"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [2, "margin-right", "1rem"], ["aria-hidden", "true", 1, "fa", "fa-phone"], ["aria-hidden", "true", 1, "fa", "fa-fax"], [1, "social"], ["href", "https://www.facebook.com/ak.uc.58958", "target", "_blank", 1, "btn-social"], ["aria-hidden", "true", 1, "fa", "fa-facebook"], ["href", "https://twitter.com/AKUniversalCon1", "target", "_blank", 1, "btn-social"], ["aria-hidden", "true", 1, "fa", "fa-twitter"], ["href", "https://www.youtube.com/channel/UCHhCrtsU0oUznZEKyG0-6DQ", "target", "_blank", 1, "btn-social"], ["aria-hidden", "true", 1, "fa", "fa-youtube"], [1, "copyrights"], [1, "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " About Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "AKUC is a platform to fulfill and establish the nation's dream of achieving a desired lifestyle. AKUC offers you the opportunity to help materialize that dream with your services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reach Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Suite 33-01, 33rd Floor, Menara Keck Seng 203, Jalan Bukit Bintang, 55100 Kuala Lumpur.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " 03 \u2013 2149 9309");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " 03 \u2013 2116 5999");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Copyright AKUC Foundation \u00A9 2013. All Rights Reserved");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-footer[_ngcontent-%COMP%] {\n  color: white;\n}\n.page-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white;\n}\n.font-small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\nfooter[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n}\n.footer-content[_ngcontent-%COMP%] {\n  font-size: 13px;\n  padding: 2.5rem 0;\n}\nfooter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  position: relative;\n}\nfooter[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]:after {\n  position: absolute;\n  content: \"\";\n  background: grey;\n  width: 12%;\n  height: 1px;\n  left: 0;\n  bottom: -20px;\n}\n.btn-footer[_ngcontent-%COMP%] {\n  color: #122740;\n  text-decoration: none;\n  border: 1px solid;\n  border-radius: 15px;\n  font-size: 13px;\n  padding: 7px 30px;\n  line-height: 47px;\n  transition: 0.3s;\n}\n.btn-footer[_ngcontent-%COMP%]:hover {\n  background-color: #d94b38;\n  color: #fff;\n  text-decoration: none;\n}\n.social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 0.25rem 2rem;\n  margin-right: 1rem;\n}\n.social[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%] {\n  color: #122740;\n  text-decoration: none;\n  border: 1px solid;\n  border-radius: 15px;\n  font-size: 24px;\n  line-height: 47px;\n  transition: 0.3s;\n}\n.social[_ngcontent-%COMP%]   .btn-social[_ngcontent-%COMP%]:hover {\n  background-color: #d94b38;\n  color: #fff;\n  text-decoration: none;\n}\n.copyrights[_ngcontent-%COMP%] {\n  background-color: #122740;\n  color: #fff;\n  padding: 1rem 0;\n  font-size: 12px;\n}\n.copyrights[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLFlBQUE7QUFFUjtBQUVBO0VBQ0ksZUFBQTtBQUNKO0FBQ0E7RUFDSSx5QkFBQTtBQUVKO0FBQ0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUFFSjtBQUNBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtBQUVKO0FBQUE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7QUFHSjtBQURBO0VBQ0ksY0FBQTtFQUVBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFHSjtBQUZJO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFJUjtBQUNJO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtBQUVSO0FBQUk7RUFDSSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUVBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFDUjtBQUFRO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QUFFWjtBQUVBO0VBQ0kseUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFDSjtBQUFJO0VBQ0ksU0FBQTtBQUVSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1mb290ZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYSB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9udC1zbWFsbCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XHJcbn1cclxuXHJcbi5mb290ZXItY29udGVudCB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW0gMDtcclxufVxyXG5cclxuZm9vdGVyIGg2IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuZm9vdGVyIGg2OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbn1cclxuLmJ0bi1mb290ZXIge1xyXG4gICAgY29sb3I6ICMxMjI3NDA7XHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgcGFkZGluZzogN3B4IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDdweDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk0YjM4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5cclxuLnNvY2lhbCB7XHJcbiAgICBhIHtcclxuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDJyZW07XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmJ0bi1zb2NpYWwge1xyXG4gICAgICAgIGNvbG9yOiAjMTIyNzQwO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuXHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ3cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NGIzODtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmNvcHlyaWdodHMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjc0MDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() {
    }
    ngOnInit() {
        this.array = [
            { name: 'a' }
        ];
    }
    onclick() {
        this.array.forEach(element => {
            console.log(element);
        });
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 34, vars: 4, consts: [[1, "top_header"], [1, "container"], [1, "menu_banner"], [1, "logo_container"], ["src", "../../../assets/logo.png", "alt", "akuc foundation logo"], [1, "container-lg", "container-md-fluid", "app_menu"], [1, "menu_container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-blue"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarNavDropdown", "aria-controls", "navbarNavDropdown", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarNavDropdown", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], [1, "sr-only"], ["routerLink", "/aboutus", "routerLinkActive", "active", 1, "nav-link", 3, "routerLinkActiveOptions"], ["routerLink", "/register", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/team", "routerLinkActive", "active", 1, "nav-link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "info@akucfoundation.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "|");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "014 \u2013 664 1314");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "(current)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Team");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: ["header[_ngcontent-%COMP%] {\n  color: white;\n}\nheader[_ngcontent-%COMP%]   .top_header[_ngcontent-%COMP%] {\n  background-color: #122740;\n  padding: 0.25rem 0;\n}\nheader[_ngcontent-%COMP%]   .top_header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%] {\n  background-image: url('header_banner.png');\n  padding-bottom: 1.5rem;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%]   .logo_container[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%]   .logo_container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 7rem;\n  margin: 0 auto;\n  text-align: center;\n  display: block;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%]   .app_menu[_ngcontent-%COMP%] {\n  position: relative;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%]   .app_menu[_ngcontent-%COMP%]   .menu_container[_ngcontent-%COMP%] {\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  max-width: 1170px;\n}\nheader[_ngcontent-%COMP%]   .menu_banner[_ngcontent-%COMP%]   .app_menu[_ngcontent-%COMP%]   .menu_container[_ngcontent-%COMP%]   .bg-blue[_ngcontent-%COMP%] {\n  background-color: #122740;\n}\n.navbar[_ngcontent-%COMP%] {\n  padding: 0rem 2.5rem;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  padding: 1rem 1rem;\n}\n.navbar[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background-color: #d55342;\n}\n@media (max-width: 991.98px) {\n  .menu_banner[_ngcontent-%COMP%] {\n    padding-bottom: 0 !important;\n  }\n\n  .menu_container[_ngcontent-%COMP%] {\n    position: relative !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0FBQ0o7QUFBSTtFQUNJLHlCQUFBO0VBQ0Esa0JBQUE7QUFFUjtBQURRO0VBQ0ksbUJBQUE7QUFHWjtBQUFJO0VBQ0ksMENBQUE7RUFDQSxzQkFBQTtBQUVSO0FBRFE7RUFDSSxpQkFBQTtBQUdaO0FBRlk7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUloQjtBQURRO0VBQ0ksa0JBQUE7QUFHWjtBQUZZO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFIZ0I7RUFDSSx5QkFBQTtBQUtwQjtBQUVBO0VBQ0ksb0JBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUFJO0VBQ0kseUJBQUE7QUFFUjtBQUVBO0VBQ0k7SUFDSSw0QkFBQTtFQUNOOztFQUNFO0lBQ0ksNkJBQUE7RUFFTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgLnRvcF9oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjI3NDA7XHJcbiAgICAgICAgcGFkZGluZzogMC4yNXJlbSAwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tZW51X2Jhbm5lciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2hlYWRlcl9iYW5uZXIucG5nXCIpO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XHJcbiAgICAgICAgLmxvZ29fY29udGFpbmVyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDA7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogN3JlbTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmFwcF9tZW51IHtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAubWVudV9jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAuYmctYmx1ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMjc0MDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgICBwYWRkaW5nOiAwcmVtIDIuNXJlbTtcclxuICAgIC5uYXYtbGluayB7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbSAxcmVtO1xyXG4gICAgfVxyXG4gICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q1NTM0MjtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgICAubWVudV9iYW5uZXIge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubWVudV9jb250YWluZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, null); })();


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiUrl: 'http://localhost:3333/api/'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\AKUC\akucBackend\nextjs\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map