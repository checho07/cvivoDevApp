webpackJsonp([6],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings__ = __webpack_require__(598);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsPageModule = (function () {
    function SettingsPageModule() {
    }
    SettingsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__settings__["a" /* SettingsPage */]),
            ],
        })
    ], SettingsPageModule);
    return SettingsPageModule;
}());

//# sourceMappingURL=settings.module.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsPage = (function () {
    function SettingsPage() {
    }
    SettingsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SettingsPage");
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-settings",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo\src\pages\settings\settings.html"*/'<ion-header no-border>\n\n  <ion-navbar align-title="center">\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n    <ion-list-header>Video playback</ion-list-header>\n\n\n\n    <ion-item>\n\n      <p class="item-title">Cellular Data Usage</p>\n\n      <p class="item-subtitle">Automatic (Default data & quality setting)</p>\n\n    </ion-item>\n\n\n\n    <ion-list-header>Notifications</ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-label class="item-title">Accept push notifications</ion-label>\n\n      <ion-checkbox color="netflixRed" checked="true" item-end></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item style="margin-top: -10px;">\n\n      <p class="item-subtitle">Notifications may include newly-</p>\n\n      <p class="item-subtitle">added movies, TV shows, personalised</p>\n\n      <p class="item-subtitle">suggestions or other notices</p>\n\n    </ion-item>\n\n\n\n    <ion-list-header>Downloads</ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-label class="item-title">Smart Downloads</ion-label>\n\n      <ion-checkbox color="netflixRed" checked="false" item-end></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item style="margin-top: -10px;">\n\n      <p class="item-subtitle">Completely episodes will be deleted and</p>\n\n      <p class="item-subtitle">replaced with the next episodes, only</p>\n\n      <p class="item-subtitle">on Wi-Fi</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label class="item-title">Wi-Fi only</ion-label>\n\n      <ion-checkbox color="netflixRed" checked="true" item-end></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p class="item-title">Download Video Quality</p>\n\n      <p class="item-subtitle">Standard</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p class="item-title">Download Location</p>\n\n      <p class="item-subtitle">Internal Storage</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <p class="item-title">Internal Storage</p>\n\n      <p class="item-title" item-end>Default</p>\n\n    </ion-item>\n\n\n\n    <ion-item style="margin-top: -10px;">\n\n      <div class="light-grey-rectangle"></div>\n\n      <div class="red-rectangle"></div>\n\n      <div class="white-rectangle"></div>\n\n    </ion-item>\n\n\n\n    <ion-item style="margin-top: -20px;">\n\n      <ion-row>\n\n        <div class="light-grey-square"></div>\n\n        <p class="used-storage">Used - 10 GB</p>\n\n        <div class="red-square"></div>\n\n        <p class="used-storage">Netflix - 5 GB</p>\n\n        <div class="white-square"></div>\n\n        <p class="used-storage">Free - 15 GB</p>\n\n      </ion-row>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo\src\pages\settings\settings.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ })

});
//# sourceMappingURL=6.js.map