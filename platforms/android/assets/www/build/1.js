webpackJsonp([1],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MylistPageModule", function() { return MylistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mylist__ = __webpack_require__(594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MylistPageModule = (function () {
    function MylistPageModule() {
    }
    MylistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mylist__["a" /* MylistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mylist__["a" /* MylistPage */]),
            ],
        })
    ], MylistPageModule);
    return MylistPageModule;
}());

//# sourceMappingURL=mylist.module.js.map

/***/ }),

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MylistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_MyListItem__ = __webpack_require__(595);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MylistPage = (function () {
    function MylistPage(navCtrl, userService, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.authService = authService;
        this.userId = "";
        this.myListItems = [];
        this.loaded = false;
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
        });
    }
    MylistPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter MylistPage");
        this.getMoviesAndShowsFromMyList();
    };
    MylistPage.prototype.getMoviesAndShowsFromMyList = function () {
        var _this = this;
        this.myListItems = [];
        this.loaded = false;
        // Get movies from my list first
        this.userService.getFavoriteMovies(this.userId).then(function (result) {
            result.favoriteMovies.forEach(function (movie) {
                var myListItem = new __WEBPACK_IMPORTED_MODULE_4__data_MyListItem__["a" /* MyListItem */]();
                myListItem.itemId = movie.movieId;
                myListItem.picture = movie.picture;
                myListItem.isMovie = true;
                _this.myListItems.push(myListItem);
            });
            // Then get tv shows from my list
            _this.userService.getFavoriteTvShows(_this.userId).then(function (result) {
                result.favoriteTvShows.forEach(function (tvShow) {
                    var myListItem = new __WEBPACK_IMPORTED_MODULE_4__data_MyListItem__["a" /* MyListItem */]();
                    myListItem.itemId = tvShow.tvShowId;
                    myListItem.picture = tvShow.picture;
                    myListItem.isMovie = false;
                    _this.myListItems.push(myListItem);
                });
                _this.loaded = true;
            });
        });
    };
    MylistPage.prototype.goToMyListItem = function (myListItem) {
        if (myListItem.isMovie) {
            this.navCtrl.push("MovieDetailsPage", { movieId: myListItem.itemId });
        }
        else {
            this.navCtrl.push("ShowDetailsPage", { tvShowId: myListItem.itemId });
        }
    };
    MylistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-mylist",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\mylist\mylist.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>My List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-content padding>\n\n    <ion-row *ngIf="loaded && myListItems.length <= 0" class="movies-shows-row">\n\n      <ion-col text-center>\n\n        <button ion-button clear color="netflixWhite">\n\n          <ion-icon name=\'ios-checkmark-circle\'></ion-icon>\n\n        </button>\n\n\n\n        <p>Movies and TV show that you add to your list appear here.</p>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="loaded && myListItems.length <= 0" class="find-downloads-row">\n\n      <ion-col text-center>\n\n        <button ion-button icon-start color="netflixWhite">\n\n          FIND SOMETHING TO WATCH\n\n        </button>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="!loaded">\n\n      <ion-col text-center>\n\n        <br>\n\n        <ion-spinner color="netflixRed"></ion-spinner>\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n    <ion-row *ngIf="loaded && myListItems.length > 0" style="padding-left: 0px;">\n\n      <ion-col col-4 *ngFor="let myListItem of myListItems">\n\n        <img src="{{myListItem.picture}}" (click)="goToMyListItem(myListItem)" style="width:100%">\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-content>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\mylist\mylist.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* AuthService */]])
    ], MylistPage);
    return MylistPage;
}());

//# sourceMappingURL=mylist.js.map

/***/ }),

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyListItem; });
var MyListItem = (function () {
    function MyListItem() {
    }
    return MyListItem;
}());

//# sourceMappingURL=MyListItem.js.map

/***/ })

});
//# sourceMappingURL=1.js.map