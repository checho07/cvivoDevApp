webpackJsonp([5],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowDetailsPageModule", function() { return ShowDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__show_details__ = __webpack_require__(599);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShowDetailsPageModule = (function () {
    function ShowDetailsPageModule() {
    }
    ShowDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__show_details__["a" /* ShowDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__show_details__["a" /* ShowDetailsPage */]),
            ],
        })
    ], ShowDetailsPageModule);
    return ShowDetailsPageModule;
}());

//# sourceMappingURL=show-details.module.js.map

/***/ }),

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_TvShowsService__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_DownloadService__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowDetailsPage = (function () {
    function ShowDetailsPage(navParams, streamingMedia, tvShowsService, userService, authService, toastController, alertController, downloadService, platform) {
        var _this = this;
        this.navParams = navParams;
        this.streamingMedia = streamingMedia;
        this.tvShowsService = tvShowsService;
        this.userService = userService;
        this.authService = authService;
        this.toastController = toastController;
        this.alertController = alertController;
        this.downloadService = downloadService;
        this.platform = platform;
        this.userId = "";
        this.tvShowId = "";
        this.tvShowSeasons = [];
        this.seasonEpisodes = [];
        this.seasonsLoaded = false;
        this.episodesLoaded = false;
        this.isPartOfMyList = false;
        this.authService.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
        });
        this.tvShowId = this.navParams.get("tvShowId");
        if (this.tvShowId == undefined) {
            this.tvShowId = "";
        }
    }
    ShowDetailsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ShowDetailsPage");
        this.getTvShow();
        this.getIsPartOfMyList();
    };
    ShowDetailsPage.prototype.getTvShow = function () {
        var _this = this;
        this.tvShowsService.getTvShow(this.tvShowId).then(function (result) {
            _this.tvShow = result.tvShow;
            _this.title = _this.tvShow.name;
            _this.detailsPicture = _this.tvShow.detailsPicture;
            _this.releaseYear = _this.tvShow.releaseYear.toString();
            _this.rating = _this.tvShow.rating;
            _this.description = _this.tvShow.description;
            _this.tvShowsService.getSeasons(_this.tvShow).then(function (result) {
                _this.tvShowSeasons = result.tvShowSeasons;
                _this.seasonsLoaded = true;
                if (_this.tvShowSeasons.length > 0) {
                    _this.selectedSeason = _this.tvShowSeasons[0].name;
                    _this.tvShowsService
                        .getEpisodes(_this.tvShow, _this.tvShowSeasons[0])
                        .then(function (result) {
                        _this.seasonEpisodes = result.seasonEpisodes;
                        _this.seasonEpisodes.forEach(function (episode) {
                            _this.downloadService
                                .isEpisodeDownloaded(episode.episodeId)
                                .then(function (result) {
                                episode.isDownloaded = result.isDownloaded;
                            });
                        });
                        _this.episodesLoaded = true;
                    });
                }
                else {
                    _this.episodesLoaded = true;
                }
            });
        });
    };
    ShowDetailsPage.prototype.getIsPartOfMyList = function () {
        var _this = this;
        this.userService
            .getIsTvShowPartOfMyList(this.userId, this.tvShowId)
            .then(function (result) {
            _this.isPartOfMyList = result.isPartOfMyList;
        });
    };
    ShowDetailsPage.prototype.addToMyList = function () {
        var _this = this;
        this.userService
            .addTvShowToMyList(this.userId, this.tvShow)
            .then(function (result) {
            _this.isPartOfMyList = true;
            _this.showPartOfMyListToast(true);
        });
    };
    ShowDetailsPage.prototype.removeFromMyList = function () {
        var _this = this;
        this.userService
            .removeTvShowFromMyList(this.userId, this.tvShowId)
            .then(function (result) {
            _this.isPartOfMyList = false;
            _this.showPartOfMyListToast(false);
        });
    };
    ShowDetailsPage.prototype.showPartOfMyListToast = function (added) {
        var toast = this.toastController.create({
            message: added ? "Added to My List" : "Removed from My List",
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    ShowDetailsPage.prototype.playEpisode = function (episode) {
        if (!this.platform.is("cordova")) {
            var alert_1 = this.alertController.create({
                title: "Run on device",
                subTitle: "This feature is only available on a device!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
            return;
        }
        if (episode.videoUrl === "") {
            var alert_2 = this.alertController.create({
                title: "This episode has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add your own episode and watch it here!",
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
        this.streamingMedia.playVideo(episode.videoUrl, options);
    };
    ShowDetailsPage.prototype.seasonChanged = function (event) {
        var _this = this;
        this.episodesLoaded = false;
        var season = this.tvShowSeasons.find(function (x) { return x.name === event; });
        if (season) {
            this.tvShowsService
                .getEpisodes(this.tvShow, season)
                .then(function (result) {
                _this.seasonEpisodes = result.seasonEpisodes;
                _this.episodesLoaded = true;
            });
        }
    };
    ShowDetailsPage.prototype.downloadEpisode = function (episode) {
        var _this = this;
        if (!this.platform.is("cordova")) {
            var alert_3 = this.alertController.create({
                title: "Run on device",
                subTitle: "This feature is only available on a device!",
                buttons: ["Dismiss"]
            });
            alert_3.present();
            return;
        }
        if (episode.videoUrl === "") {
            var alert_4 = this.alertController.create({
                title: "This episode has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add your own episode and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_4.present();
            return;
        }
        episode.isDownloading = true;
        this.downloadService.episodeFileTransfer.onProgress(function (event) {
            var progress = Math.round((event.loaded / event.total) * 100);
            episode.downloadProgress = progress;
        });
        this.downloadService.downloadEpisode(episode).then(function (result) {
            _this.showDownloadToast(episode.name);
            episode.isDownloading = false;
            episode.isDownloaded = true;
        }, function (error) {
            episode.isDownloading = false;
        });
    };
    ShowDetailsPage.prototype.showDownloadToast = function (episodeName) {
        var toast = this.toastController.create({
            message: 'Episode "' + episodeName + '" successfully downloaded!',
            duration: 2000,
            position: "bottom"
        });
        toast.present();
    };
    ShowDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-show-details",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\show-details\show-details.html"*/'<ion-header no-border>\n\n  <ion-navbar transparent>\n\n    <ion-buttons right>\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="logo-rss" item-end></ion-icon>\n\n      </button>\n\n\n\n      <button ion-button icon-only color="netflixWhite">\n\n        <ion-icon name="md-share" item-end></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content fullscreen padding>\n\n  <img class="details-picture" src="{{detailsPicture}}">\n\n\n\n  <p class="title">{{title}}</p>\n\n\n\n  <ion-row class="movie-details-row">\n\n    <p>{{releaseYear}}</p>\n\n    <p>{{rating}}</p>\n\n    <p>{{tvShowSeasons.length}} seasons</p>\n\n  </ion-row>\n\n\n\n  <ion-row class="movie-summary-row">\n\n    <p>{{description}}</p>\n\n  </ion-row>\n\n\n\n  <ion-row class="list-like-download-row">\n\n    <ion-col text-center col-3>\n\n      <button *ngIf="!isPartOfMyList" (click)="addToMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-add"></ion-icon>\n\n      </button>\n\n\n\n      <button class="isPartOfMyList" *ngIf="isPartOfMyList" (click)="removeFromMyList()" ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-checkmark"></ion-icon>\n\n      </button>\n\n\n\n      <p>My List</p>\n\n    </ion-col>\n\n\n\n    <ion-col text-center col-3>\n\n      <button ion-button icon-only clear color="netflixWhite">\n\n        <ion-icon name="md-thumbs-up"></ion-icon>\n\n      </button>\n\n\n\n      <p>Rate</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!seasonsLoaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="!episodesLoaded">\n\n    <ion-col text-center>\n\n      <br>\n\n      <ion-spinner color="netflixRed"></ion-spinner>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="tvShowSeasons.length > 0">\n\n    <ion-select title="Pick a season" [(ngModel)]="selectedSeason" (ngModelChange)="seasonChanged($event)">\n\n      <ion-option *ngFor="let season of tvShowSeasons">{{season.name}}</ion-option>\n\n    </ion-select>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="seasonsLoaded && tvShowSeasons.length <= 0">\n\n    <ion-col text-center>\n\n      <img class="demo-image" src="assets/netflix-icon.png">\n\n      <p class="demo-message">There are no seasons yet.</p>\n\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own seasons here!</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row *ngIf="episodesLoaded && seasonEpisodes.length <= 0">\n\n    <ion-col text-center>\n\n      <img class="demo-image" src="assets/netflix-icon.png">\n\n      <p class="demo-message">There are no episodes yet.</p>\n\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own episodes here!</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-list no-lines *ngIf="episodesLoaded">\n\n    <div *ngFor="let episode of seasonEpisodes">\n\n      <ion-item>\n\n        <img (click)="playEpisode(episode)" item-start src="{{episode.picture}}">\n\n\n\n        <ion-col>\n\n          <p class="episode-title">{{episode.name}}</p>\n\n          <p class="episode-duration">1h 21m</p>\n\n        </ion-col>\n\n\n\n        <button item-end *ngIf="!episode.isDownloading && !episode.isDownloaded" (click)="downloadEpisode(episode)" ion-button icon-only clear\n\n          color="netflixWhite">\n\n          <ion-icon name="md-download"></ion-icon>\n\n        </button>\n\n\n\n        <div item-end *ngIf="episode.isDownloading && !episode.isDownloaded">\n\n          <ion-spinner style="width: 35px; height: 35px;" color="netflixRed"></ion-spinner>\n\n          <p>{{episode.downloadProgress}}</p>\n\n        </div>\n\n\n\n        <button item-end class="downloaded" *ngIf="episode.isDownloaded" ion-button icon-only clear color="netflixWhite">\n\n          <ion-icon name="md-checkmark"></ion-icon>\n\n        </button>\n\n      </ion-item>\n\n\n\n      <ion-item style="margin-top: -20px;">\n\n        <ion-row>\n\n          <p class="line-break">{{episode.description}}</p>\n\n        </ion-row>\n\n      </ion-item>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\show-details\show-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_3__services_TvShowsService__["a" /* TvShowsService */],
            __WEBPACK_IMPORTED_MODULE_5__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
    ], ShowDetailsPage);
    return ShowDetailsPage;
}());

//# sourceMappingURL=show-details.js.map

/***/ })

});
//# sourceMappingURL=5.js.map