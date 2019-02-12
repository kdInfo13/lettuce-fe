(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layout-layout-module"],{

/***/ "./src/app/_service/model.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_service/model.service.ts ***!
  \*******************************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModelService = /** @class */ (function () {
    function ModelService() {
        this.modals = [];
    }
    ModelService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModelService.prototype.remove = function (id) {
        // remove modal from array of active modals
        this.modals = this.modals.filter(function (x) { return x.id !== id; });
    };
    ModelService.prototype.open = function (id) {
        // open modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.open();
    };
    ModelService.prototype.close = function (id) {
        // close modal specified by id
        var modal = this.modals.filter(function (x) { return x.id === id; })[0];
        modal.close();
    };
    ModelService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ModelService);
    return ModelService;
}());



/***/ }),

/***/ "./src/app/layout/common/footer/footer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layout/common/footer/footer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the footer */\nfooter {\n    background-color: #777;\n    height: 65px;\n    color: white;\n  \n}\n.footer-left {\n    float: left;\n    position: relative;\n      margin: 20px;\n}\n.footer-right {\n    float: right;\n    position: relative;\n      margin: 20px;\n}\n"

/***/ }),

/***/ "./src/app/layout/common/footer/footer.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/common/footer/footer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"footer-left\">Left footer</div>\n  <div class=\"footer-right\">Right footer</div>\n</footer>"

/***/ }),

/***/ "./src/app/layout/common/footer/footer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/common/footer/footer.component.ts ***!
  \**********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/common/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/common/header/header.component.css":
/*!***********************************************************!*\
  !*** ./src/app/layout/common/header/header.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  overflow: hidden;\n  background-color: #f1f1f1;\n  padding: 20px 10px;\n}\n\n.header a {\n  float: left;\n  color: black;\n  text-align: center;\n  padding: 12px;\n  text-decoration: none;\n  font-size: 18px; \n  line-height: 20px;\n  border-radius: 4px;\n}\n\n.header a.logo {\n  font-size: 25px;\n  font-weight: bold;\n}\n\n.header a:hover {\n  background-color: #ddd;\n  color: black;\n}\n\n.header a.active {\n  background-color: dodgerblue;\n  color: white;\n}\n\n.header-right {\n  float: right;\n  position: relative;\n    right: 5%;\n}\n\n.header-left {\n    left: 15%;\n    position: relative;\n}\n\n@media screen and (max-width: 500px) {\n  .header a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n  .header-right {\n    float: none;\n  }\n}"

/***/ }),

/***/ "./src/app/layout/common/header/header.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/common/header/header.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <a href=\"#default\" class=\"logo\">CompanyLogo</a>\n  <div class=\"header-left\">\n    <a class=\"active\" href=\"home\">Home</a>\n    <a href=\"#about\">About</a>\n    <a href=\"contact\">Contact</a>\n  </div>\n    <div class=\"header-right\">\n     \n      <a class=\"\" [routerLink]=\"['/login']\">Login</a>\n      <a class=\"\" [routerLink]=\"['/register']\">Register</a>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/layout/common/header/header.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/common/header/header.component.ts ***!
  \**********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_service/model.service */ "./src/app/_service/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalService) {
        this.modalService = modalService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    HeaderComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/common/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_service_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/layout/layout-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LayoutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutRoutingModule", function() { return LayoutRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/layout/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layout/pages/register/register.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/layout/pages/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '', component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'home' },
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
            { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"] },
            { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"] }
        ]
    }
];
var LayoutRoutingModule = /** @class */ (function () {
    function LayoutRoutingModule() {
    }
    LayoutRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], LayoutRoutingModule);
    return LayoutRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout-routing.module */ "./src/app/layout/layout-routing.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/header/header.component */ "./src/app/layout/common/header/header.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/footer/footer.component */ "./src/app/layout/common/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/layout/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/layout/pages/login/login.component.ts");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/register/register.component */ "./src/app/layout/pages/register/register.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/layout/pages/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_routing_module__WEBPACK_IMPORTED_MODULE_3__["LayoutRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            ],
            declarations: [
                _layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"],
                _common_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
            ]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/pages/contact/contact.component.css":
/*!************************************************************!*\
  !*** ./src/app/layout/pages/contact/contact.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/pages/contact/contact.component.html":
/*!*************************************************************!*\
  !*** ./src/app/layout/pages/contact/contact.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"register-form\">\n    <form [formGroup]=\"contactForm\">\n\n      <div class=\"form-group\">\n        <label for=\"name\" class=\"cols-sm-6 control-label\">Your Name</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Enter your Name\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Enter your Email\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Phone\" class=\"cols-sm-2 control-label\">Phone Number</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"phone\" id=\"phone\" placeholder=\"Enter your Phone Number\" />\n          </div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"message\" class=\"cols-sm-2 control-label\">Message</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n           <textarea rows=\"5\" cols=\"50\" class=\"form-control\" name=\"message\" placeholder=\"Message\"></textarea>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group \">\n        <button type=\"button\" (click)=\"onContact()\" class=\"btn btn-primary btn-lg btn-block login-button\">Contact Us</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/pages/contact/contact.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/layout/pages/contact/contact.component.ts ***!
  \***********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = /** @class */ (function () {
    function ContactComponent(http) {
        this.http = http;
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.onContact = function () {
        var _this = this;
        this.http.post('http://127.0.0.1:8000/api/contact', this.contactForm.value)
            .subscribe(function (data) {
            console.log(data);
            _this.contactForm.reset();
        }, function (error) {
        });
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/layout/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/layout/pages/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/layout/pages/home/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/layout/pages/home/home.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "article {\n    float: left;\n    padding: 20px;\n    width: 70%;\n    height: auto; /* only for demonstration, should be removed */\n    left: 15%;\n    position: relative;\n}\n\n/* Clear floats after the columns */\n\nsection:after {\n    content: \"\";\n    display: table;\n    clear: both;\n}\n\n.container {\n    height: 479px;\n    max-height: 650px;\n}"

/***/ }),

/***/ "./src/app/layout/pages/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/pages/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<section>\n  <article>\n    <h1>London</h1>\n    <p>London is the capital city of England. It is the most populous city in the United Kingdom, with a metropolitan\n      area of over 13 million inhabitants.</p>\n    <p>Standing on the River Thames, London has been a major settlement for two millennia, its history going back to its\n      founding by the Romans, who named it Londinium.</p>\n  </article>\n</section>\n</div>"

/***/ }),

/***/ "./src/app/layout/pages/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/pages/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/layout/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/layout/pages/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/pages/login/login.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/pages/login/login.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/pages/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/pages/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"register-form\">\n    <form [formGroup]=\"loginForm\">\n      <div class=\"form-group\">\n        <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n            <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Enter your Email\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n        <div class=\"cols-sm-10\">\n          <div class=\"input-group\">\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"Enter your Password\" />\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group \">\n        <button type=\"button\" (click)=\"onLogin()\" class=\"btn btn-primary btn-lg btn-block login-button\">login</button>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/pages/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/pages/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(http) {
        this.http = http;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogin = function () {
        var _this = this;
        this.http.post('http://127.0.0.1:8000/api/login', this.loginForm.value)
            .subscribe(function (data) {
            _this.loginForm.reset();
        }, function (error) {
        });
        console.log(this.loginForm.value);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/layout/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/layout/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/layout/pages/register/register.component.css":
/*!**************************************************************!*\
  !*** ./src/app/layout/pages/register/register.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1.title { \n\tfont-size: 50px;\n\tfont-family: 'Passion One', cursive; \n\tfont-weight: 400; \n}\n\nhr{\n\twidth: 10%;\n\tcolor: #fff;\n}\n\n.form-group{\n\tmargin-bottom: 15px;\n}\n\nlabel{\n\tmargin-bottom: 15px;\n}\n\ninput,\ninput::-webkit-input-placeholder {\n    font-size: 11px;\n    padding-top: 3px;\n}\n\n.register-form {\n    height: 464px;\n}\n\nform.form-horizontal {\n    margin-top: 15px;\n}\n\n.main-login{\n \tbackground-color: #fff;\n    /* shadows and rounded borders */\n    border-radius: 2px;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n\n}\n\n.main-center{\n \tmargin-top: 30px;\n \tmargin: 0 auto;\n \tmax-width: 330px;\n    padding: 40px 40px;\n\n}\n\n.login-button{\n\tmargin-top: 5px;\n}\n\n.login-register{\n\tfont-size: 11px;\n\ttext-align: center;\n}\n"

/***/ }),

/***/ "./src/app/layout/pages/register/register.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/pages/register/register.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"register-form\">\n      <form  [formGroup]=\"registerForm\">\n\n        <div class=\"form-group\">\n          <label for=\"name\" class=\"cols-sm-6 control-label\">Your Name</label>\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Enter your Name\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\n              <input type=\"text\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Enter your Email\" />\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\n          <div class=\"cols-sm-10\">\n            <div class=\"input-group\">\n              <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"password\" placeholder=\"Enter your Password\" />\n            </div>\n          </div>\n        </div>\n            <div class=\"form-group\">\n              <label for=\"file\" class=\"cols-sm-2 control-label\">File upload</label>\n              <div class=\"cols-sm-10\">\n                <div class=\"input-group\">\n                  <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\n                  <input type=\"file\" (change)=\"userPhoto($event)\" class=\"form-control\" formControlName=\"photo\" id=\"photo\" placeholder=\"Enter your Password\" />\n                </div>\n              </div>\n            </div>\n\n        <div class=\"form-group \">\n          <button type=\"button\" (click)=\"onRegister()\" class=\"btn btn-primary btn-lg btn-block login-button\">Register</button>\n        </div>\n      </form>\n    </div>\n    </div>\n\n"

/***/ }),

/***/ "./src/app/layout/pages/register/register.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/pages/register/register.component.ts ***!
  \*************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'http://127.0.0.1:8000/api/upload';
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(http) {
        this.http = http;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            photo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.userPhoto = function (e) {
        // this.registerForm.append()
        console.log(e.target.files[0]);
        this.fileData = e.target.files[0];
    };
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var formData = new FormData();
        formData.append('form-data', this.registerForm.value);
        formData.append('uploaded-file', this.fileData);
        this.http.post('http://127.0.0.1:8000/api/register', formData)
            .subscribe(function (data) {
            console.log(data['message']);
            _this.message = data;
            _this.registerForm.reset();
        }, function (error) {
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/layout/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/layout/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=layout-layout-module.js.map