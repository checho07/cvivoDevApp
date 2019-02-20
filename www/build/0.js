webpackJsonp([0],{

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsPageModule", function() { return NotificationsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__notifications__ = __webpack_require__(596);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NotificationsPageModule = (function () {
    function NotificationsPageModule() {
    }
    NotificationsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__notifications__["a" /* NotificationsPage */]),
            ],
        })
    ], NotificationsPageModule);
    return NotificationsPageModule;
}());

//# sourceMappingURL=notifications.module.js.map

/***/ }),

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__ = __webpack_require__(597);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationsPage = (function () {
    function NotificationsPage() {
        this.notifications = [];
        this.initialiseNotifications();
    }
    NotificationsPage.prototype.initialiseNotifications = function () {
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Play the trailer", "Coming March 5", "assets/imgs/american dream.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("The Hurt Locker", "Now on Netflix for you", "assets/imgs/hurt-locker.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("John Wick: Chapter 2", "New arrival", "assets/imgs/notifications-image1.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Left Behind", "New arrival", "assets/imgs/left-behind.png", true));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Vampire Academy", "New arrival", "assets/imgs/vampire-academy.png", true));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Standup for Dummies", "New arrival", "assets/imgs/standup-for-dummies.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Damnation", "New arrival", "assets/imgs/damnation-notification.png", true));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Almost Banned", "New arrival", "assets/imgs/almost-banned.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Hay gente asi", "New arrival", "assets/imgs/hay-dente-asi.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Riase el Show", "New arrival", "assets/imgs/riase-el-show.png", true));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Great America", "New arrival", "assets/imgs/great-america.png", true));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Especial de Standup", "New arrival", "assets/imgs/especial-de-standup.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Weeds", "New arrival", "assets/imgs/weeds.png", false));
        this.notifications.push(new __WEBPACK_IMPORTED_MODULE_1__data_NotificationItem__["a" /* NotificationItem */]("Equanimity", "New arrival", "assets/imgs/equanimity.png", true));
    };
    NotificationsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad NotificationsPage");
    };
    NotificationsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-notifications",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo\src\pages\notifications\notifications.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Notifications</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n\n    <ion-item *ngFor="let notification of notifications">\n\n      <span [class.hidden]="!notification.isNew" class="dot" item-start></span>\n\n\n\n      <img src="{{ notification.picture }}">\n\n\n\n      <div item-end>\n\n        <p class="new-arrival">{{ notification.description }}</p>\n\n        <p class="title">{{ notification.title }}</p>\n\n        <p class="date">{{ notification.dateTime }}</p>\n\n      </div>\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo\src\pages\notifications\notifications.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsPage);
    return NotificationsPage;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationItem; });
var NotificationItem = (function () {
    function NotificationItem(title, description, picture, isNew) {
        this.title = title;
        this.description = description;
        this.dateTime = "15 Feb.";
        this.picture = picture;
        this.isNew = isNew;
    }
    return NotificationItem;
}());

//# sourceMappingURL=NotificationItem.js.map

/***/ })

});
//# sourceMappingURL=0.js.map