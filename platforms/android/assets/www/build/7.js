webpackJsonp([7],{

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieDetailsPageModule", function() { return MovieDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__movie_details__ = __webpack_require__(594);
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

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MovieDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_DownloadService__ = __webpack_require__(104);
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
    function MovieDetailsPage(navCtrl, navParams, streamingMedia, moviesService, userService, downloadService, toastController, alertController, platform, vimeoService, authService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.moviesService = moviesService;
        this.userService = userService;
        this.downloadService = downloadService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.platform = platform;
        this.vimeoService = vimeoService;
        this.authService = authService;
        this.userId = "";
        this.movieId = "";
        this.urlPathVideo = "";
        this.recentlyAddedMovies = [];
        this.loaded = false;
        this.isPartOfMyList = false;
        this.isDownloading = false;
        this.isDownloaded = false;
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.movie = this.navParams.get("movieId");
        // if (this.movieId == undefined) {
        //   this.movieId = "";
        // } else {
        //   this.downloadService
        //     .isMovieDownloaded(this.movieId)
        //     .then((result: any) => {
        //       this.isDownloaded = result.isDownloaded;
        //     });
        // }
    }
    MovieDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MovieDetailsPage");
        this.getMovie();
        this.getRecentlyAddedMovies();
    };
    MovieDetailsPage.prototype.getMovie = function () {
        this.title = this.movie.name;
        this.detailsPicture = this.movie.detailsPicture;
        this.description = this.movie.description;
        this.urlPathVideo = this.movie.picture;
        this.movieId = this.movie.movieId;
        this.getIsPartOfMyList();
    };
    MovieDetailsPage.prototype.getRecentlyAddedMovies = function () {
        var _this = this;
        this.vimeoService.getAllVideos().subscribe(function (result) {
            var videos = result;
            videos.forEach(function (item) {
                var video = new __WEBPACK_IMPORTED_MODULE_0__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                video.name = item.name;
                video.picture = item.files[2].link;
                video.description = item.description;
                video.detailsPicture = item.pictures.sizes[3].link;
                video.movieId = item.uri.split('/')[2];
                _this.recentlyAddedMovies.push(video);
                //  this.recentlyAddedMovies = Helper.shuffle(result.movies);
            });
            _this.loaded = true;
        });
        // this.moviesService.getRecentlyAddedMovies().then((result: any) => {
        //   this.recentlyAddedMovies = Helper.shuffle(result.movies);
        // 
        // });
    };
    MovieDetailsPage.prototype.getIsPartOfMyList = function () {
        var _this = this;
        console.log('test');
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
            message: added ? "Agregado a mi lista" : "Removido de mi lista",
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    MovieDetailsPage.prototype.goToMovie = function (movie) {
        this.navCtrl.push("MovieDetailsPage", { movieId: movie });
    };
    MovieDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-movie-details",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\movie-details\movie-details.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <!-- <ion-buttons right>\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="logo-rss" item-end></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="md-share" item-end></ion-icon>\n\n      </button>\n\n    </ion-buttons> -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen padding>\n\n\n\n    <video [src]=urlPathVideo [autoplay]=false width="100%"  height="200px;" controls controlsList="nodownload" poster="https://i.vimeocdn.com/portrait/30313759_300x300"></video>\n\n   \n\n  <!-- <img class="details-picture" src="{{detailsPicture}}"> -->\n\n\n\n  <!-- <button (click)="playMovie()" class="play-movie" ion-button icon-only clear>\n\n    <ion-icon name="md-play" item-end></ion-icon>\n\n  </button> -->\n\n\n\n  <p class="title">{{title}}</p>\n\n\n\n  <ion-row class="movie-details-row">\n\n    <!-- <p class="match-percentage">99% Match</p> -->\n\n    <p>2019</p>\n\n    <!-- <p>25</p> -->\n\n    <!-- <p>2h 2m</p> -->\n\n  </ion-row>\n\n\n\n  <ion-row class="movie-summary-row">\n\n    <p>{{description}}</p>\n\n  </ion-row>\n\n\n\n  <ion-row class="list-like-download-row">\n\n    <ion-col text-center col-3>\n\n      <button *ngIf="!isPartOfMyList" (click)="addToMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n\n\n      <button class="isPartOfMyList" *ngIf="isPartOfMyList" (click)="removeFromMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-checkmark"></ion-icon>\n\n      </button>\n\n\n\n      <p>Mi lista</p>\n\n    </ion-col>\n\n\n\n    <!-- <ion-col text-center col-3>\n\n      <button ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-thumbs-up"></ion-icon>\n\n      </button>\n\n\n\n      <p>Rate</p>\n\n    </ion-col> -->\n\n\n\n    <!-- <ion-col text-center col-3>\n\n      <div *ngIf="!isDownloading && !isDownloaded">\n\n        <button (click)="downloadMovie()" ion-button icon-only clear color="netflixWhite">\n\n          <ion-icon name="md-download"></ion-icon>\n\n        </button>\n\n\n\n        <p>Download</p>\n\n      </div>\n\n\n\n      <div *ngIf="isDownloading && !isDownloaded">\n\n        <ion-spinner style="width: 35px; height: 35px;" color="netflixRed"></ion-spinner>\n\n        <p id="progressText">{{progress}}</p>\n\n      </div>\n\n\n\n      <div *ngIf="isDownloaded">\n\n        <button class="downloaded" ion-button icon-only clear>\n\n          <ion-icon name="md-checkmark"></ion-icon>\n\n        </button>\n\n\n\n        <p class="downloaded">Downloaded</p>\n\n      </div>\n\n    </ion-col> -->\n\n\n\n    <ion-col col-25></ion-col>\n\n  </ion-row>\n\n\n\n  <p class="more-like-this-title">Mas como este</p>\n\n\n\n  <ion-row *ngIf="!loaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="loaded" style="padding-left: 0px;">\n\n    <ion-col col-4 *ngFor="let movie of recentlyAddedMovies">\n\n      <img (click)="goToMovie(movie)" src="{{movie.detailsPicture}}" style="width:100%">\n\n    </ion-col>\n\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\movie-details\movie-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_5__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_8__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1__services_VimeoService__["a" /* VimeoService */],
            __WEBPACK_IMPORTED_MODULE_7__services_AuthService__["a" /* AuthService */]])
    ], MovieDetailsPage);
    return MovieDetailsPage;
}());

// showDownloadOnDeviceOnlyToast() {
//   let toast = this.toastController.create({
//     message: 'You can only download on a device!',
//     duration: 2000,
//     position: "bottom"
//   });
//   toast.present();
// }
// showDownloadToast(movieName: string) {
//   let toast = this.toastController.create({
//     message: 'Movie "' + movieName + '" successfully downloaded!',
//     duration: 2000,
//     position: "bottom"
//   });
//   toast.present();
// }
//# sourceMappingURL=movie-details.js.map

/***/ })

});
//# sourceMappingURL=7.js.map