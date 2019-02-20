webpackJsonp([7],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(593);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MovieDetailsPageModule = (function () {
    function MovieDetailsPageModule() {
    }
    MovieDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__movie_details__["a" /* MovieDetailsPage */]),
            ],
        })
    ], MovieDetailsPageModule);
    return MovieDetailsPageModule;
}());

//# sourceMappingURL=movie-details.module.js.map

/***/ }),

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__data_Helper__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MovieDetailsPage = (function () {
    function MovieDetailsPage(navCtrl, navParams, streamingMedia, moviesService, userService, authService, downloadService, toastController, alertController, platform) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.moviesService = moviesService;
        this.userService = userService;
        this.authService = authService;
        this.downloadService = downloadService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
        this.userId = "";
        this.movieId = "";
        this.recentlyAddedMovies = [];
        this.loaded = false;
        this.isPartOfMyList = false;
        this.isDownloading = false;
        this.isDownloaded = false;
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.movieId = this.navParams.get("movieId");
        if (this.movieId == undefined) {
            this.movieId = "";
        }
        else {
            this.downloadService
                .isMovieDownloaded(this.movieId)
                .then(function (result) {
                _this.isDownloaded = result.isDownloaded;
            });
        }
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MovieDetailsPage");
        this.getMovie();
        this.getRecentlyAddedMovies();
    };
    MovieDetailsPage.prototype.getMovie = function () {
        var _this = this;
        this.moviesService.getMovie(this.movieId).then(function (result) {
            _this.movie = result.movie;
            _this.title = _this.movie.name;
            _this.detailsPicture = _this.movie.detailsPicture;
            _this.releaseYear = _this.movie.releaseYear.toString();
            _this.rating = _this.movie.rating;
            _this.description = _this.movie.description;
            _this.getIsPartOfMyList();
        });
    };
    MovieDetailsPage.prototype.getRecentlyAddedMovies = function () {
        var _this = this;
        this.moviesService.getRecentlyAddedMovies().then(function (result) {
            _this.recentlyAddedMovies = __WEBPACK_IMPORTED_MODULE_6__data_Helper__["a" /* Helper */].shuffle(result.movies);
            _this.loaded = true;
        });
    };
    MovieDetailsPage.prototype.getIsPartOfMyList = function () {
        var _this = this;
        this.userService
            .getIsMoviePartOfMyList(this.userId, this.movieId)
            .then(function (result) {
            _this.isPartOfMyList = result.isPartOfMyList;
        });
    };
    MovieDetailsPage.prototype.addToMyList = function () {
        var _this = this;
        this.userService
            .addMovieToMyList(this.userId, this.movie)
            .then(function (result) {
            _this.isPartOfMyList = true;
            _this.showPartOfMyListToast(true);
        });
    };
    MovieDetailsPage.prototype.removeFromMyList = function () {
        var _this = this;
        this.userService
            .removeMovieFromMyList(this.userId, this.movieId)
            .then(function (result) {
            _this.isPartOfMyList = false;
            _this.showPartOfMyListToast(false);
        });
    };
    MovieDetailsPage.prototype.showPartOfMyListToast = function (added) {
        var toast = this.toastController.create({
            message: added ? "Added to My List" : "Removed from My List",
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    MovieDetailsPage.prototype.goToMovie = function (movie) {
        this.navCtrl.push("MovieDetailsPage", { movieId: movie.movieId });
    };
    MovieDetailsPage.prototype.playMovie = function () {
        if (!this.platform.is("cordova")) {
            var alert_1 = this.alertController.create({
                title: "Run on device",
                subTitle: "This feature is only available on a device!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        if (this.movie.videoUrl === "") {
            var alert_2 = this.alertController.create({
                title: "This movie has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the movie and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_2.present();
            return;
        }
        var options = {
            successCallback: function () {
                console.log("Video played");
            },
            errorCallback: function (e) {
                console.log("Error streaming");
            },
            orientation: "landscape",
            shouldAutoClose: true,
            controls: true
        };
        this.streamingMedia.playVideo(this.movie.videoUrl, options);
    };
    MovieDetailsPage.prototype.downloadMovie = function () {
        var _this = this;
        // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
        if (!this.platform.is("cordova")) {
            this.showDownloadOnDeviceOnlyToast();
            return false;
        }
        if (this.movie.videoUrl === "") {
            var alert_3 = this.alertController.create({
                title: "This movie has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the movie and download it here!",
                buttons: ["Dismiss"]
            });
            alert_3.present();
            return;
        }
        this.isDownloading = true;
        this.downloadService.movieFileTransfer.onProgress(function (event) {
            var progress = Math.round((event.loaded / event.total) * 100);
            document.getElementById("progressText").innerText = progress + "%";
        });
        this.downloadService.downloadMovie(this.movie).then(function (result) {
            _this.showDownloadToast(_this.movie.name);
            _this.isDownloading = false;
            _this.isDownloaded = true;
        }, function (error) {
            _this.isDownloading = false;
        });
    };
    MovieDetailsPage.prototype.showDownloadOnDeviceOnlyToast = function () {
        var toast = this.toastController.create({
            message: 'You can only download on a device!',
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    MovieDetailsPage.prototype.showDownloadToast = function (movieName) {
        var toast = this.toastController.create({
            message: 'Movie "' + movieName + '" successfully downloaded!',
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-movie-details",template:/*ion-inline-start:"C:\Users\PC\Desktop\cvivo\src\pages\movie-details\movie-details.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="logo-rss" item-end></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="md-share" item-end></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen padding>\n\n  <img class="details-picture" src="{{detailsPicture}}">\n\n\n\n  <button (click)="playMovie()" class="play-movie" ion-button icon-only clear>\n\n    <ion-icon name="md-play" item-end></ion-icon>\n\n  </button>\n\n\n\n  <p class="title">{{title}}</p>\n\n\n\n  <ion-row class="movie-details-row">\n\n    <p class="match-percentage">99% Match</p>\n\n    <p>{{releaseYear}}</p>\n\n    <p>{{rating}}</p>\n\n    <p>2h 2m</p>\n\n  </ion-row>\n\n\n\n  <ion-row class="movie-summary-row">\n\n    <p>{{description}}</p>\n\n  </ion-row>\n\n\n\n  <ion-row class="list-like-download-row">\n\n    <ion-col text-center col-3>\n\n      <button *ngIf="!isPartOfMyList" (click)="addToMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n\n\n      <button class="isPartOfMyList" *ngIf="isPartOfMyList" (click)="removeFromMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-checkmark"></ion-icon>\n\n      </button>\n\n\n\n      <p>My List</p>\n\n    </ion-col>\n\n\n\n    <ion-col text-center col-3>\n\n      <button ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-thumbs-up"></ion-icon>\n\n      </button>\n\n\n\n      <p>Rate</p>\n\n    </ion-col>\n\n\n\n    <ion-col text-center col-3>\n\n      <div *ngIf="!isDownloading && !isDownloaded">\n\n        <button (click)="downloadMovie()" ion-button icon-only clear color="netflixWhite">\n\n          <ion-icon name="md-download"></ion-icon>\n\n        </button>\n\n\n\n        <p>Download</p>\n\n      </div>\n\n\n\n      <div *ngIf="isDownloading && !isDownloaded">\n\n        <ion-spinner style="width: 35px; height: 35px;" color="netflixRed"></ion-spinner>\n\n        <p id="progressText">{{progress}}</p>\n\n      </div>\n\n\n\n      <div *ngIf="isDownloaded">\n\n        <button class="downloaded" ion-button icon-only clear>\n\n          <ion-icon name="md-checkmark"></ion-icon>\n\n        </button>\n\n\n\n        <p class="downloaded">Downloaded</p>\n\n      </div>\n\n    </ion-col>\n\n\n\n    <ion-col col-25></ion-col>\n\n  </ion-row>\n\n\n\n  <p class="more-like-this-title">More like this</p>\n\n\n\n  <ion-row *ngIf="!loaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="loaded" style="padding-left: 0px;">\n\n    <ion-col col-4 *ngFor="let movie of recentlyAddedMovies">\n\n      <img (click)="goToMovie(movie)" src="{{movie.picture}}" style="width:100%">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\PC\Desktop\cvivo\src\pages\movie-details\movie-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_5__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map