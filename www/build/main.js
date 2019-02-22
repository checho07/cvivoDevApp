webpackJsonp([13],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_UserInfo__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService() {
    }
    UserService.prototype.addUser = function (user) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(user.uid)
                .set({
                name: user.displayName,
                picture: user.photoURL
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsMoviePartOfMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                moviesFollowedSnapshot.forEach(function (doc) {
                    if (doc.id === movieId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addMovieToMyList = function (userId, movie) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movie.movieId)
                .set({
                movieId: movie.movieId,
                name: movie.name,
                picture: movie.picture
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeMovieFromMyList = function (userId, movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .doc(movieId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getIsTvShowPartOfMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    if (doc.id === tvShowId) {
                        resolve({ isPartOfMyList: true });
                    }
                });
                resolve({ isPartOfMyList: false });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.addTvShowToMyList = function (userId, tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShow.tvShowId)
                .set({
                tvShowId: tvShow.tvShowId,
                name: tvShow.name,
                picture: tvShow.picture,
            }, { merge: true })
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.removeTvShowFromMyList = function (userId, tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .doc(tvShowId)
                .delete()
                .then(function () {
                resolve();
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteMovies = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("moviesFollowed")
                .get()
                .then(function (moviesFollowedSnapshot) {
                var favoriteMovies = [];
                moviesFollowedSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_3__data_Movie__["a" /* Movie */]();
                    movie.movieId = doc.id;
                    movie.name = doc.data().name;
                    movie.picture = doc.data().picture;
                    favoriteMovies.push(movie);
                });
                resolve({ favoriteMovies: favoriteMovies });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService.prototype.getFavoriteTvShows = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .collection("tvShowsFollowed")
                .get()
                .then(function (tvShowsFollowedSnapshot) {
                var favoriteTvShows = [];
                tvShowsFollowedSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_4__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    favoriteTvShows.push(tvShow);
                });
                resolve({ favoriteTvShows: favoriteTvShows });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    ;
    UserService.prototype.getUserInfo = function (userId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_2_firebase___default.a.firestore();
            db.collection("users")
                .doc(userId)
                .get()
                .then(function (doc) {
                var userInfo = new __WEBPACK_IMPORTED_MODULE_0__data_UserInfo__["a" /* UserInfo */]();
                userInfo.name = doc.data().name;
                userInfo.email = doc.data().email;
                resolve(userInfo);
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());

//# sourceMappingURL=UserService.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(270);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadService = (function () {
    function DownloadService(transfer, file, platform, storage) {
        var _this = this;
        this.transfer = transfer;
        this.file = file;
        this.platform = platform;
        this.storage = storage;
        this.moviesDownloaded = [];
        this.episodesDownloaded = [];
        this.storageDirectory = "";
        this.movieFileTransfer = this.transfer.create();
        this.episodeFileTransfer = this.transfer.create();
        this.platform.ready().then(function () {
            // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
            if (!_this.platform.is("cordova")) {
                return false;
            }
            if (_this.platform.is("ios")) {
                _this.storageDirectory = file.documentsDirectory;
            }
            else if (_this.platform.is("android")) {
                _this.storageDirectory = file.externalRootDirectory + "ionNetflix/";
            }
            else {
                // exit otherwise, but you could add further types here e.g. Windows
                return false;
            }
        });
    }
    DownloadService.prototype.load = function () {
        // this.storage.clear();
        var _this = this;
        // get all movies and tv shows episodes already stored on device
        this.storage.get("movies").then(function (val) {
            if (val !== null) {
                _this.moviesDownloaded = val;
            }
        });
        this.storage.get("episodes").then(function (val) {
            if (val !== null) {
                _this.episodesDownloaded = val;
                console.log(JSON.stringify(_this.episodesDownloaded));
            }
        });
    };
    DownloadService.prototype.downloadMovie = function (movie) {
        // const promise = new Promise((resolve, reject) => {
        //   this.movieFileTransfer
        //     .download(movie.videoUrl, this.file.dataDirectory + movie.name + ".mp4")
        //     .then(
        //       entry => {
        //         console.log("download complete: " + JSON.stringify(entry.toURL()));
        //         this.moviesDownloaded.push({
        //           movieId: movie.movieId,
        //           name: movie.name,
        //           picture: movie.picture,
        //           detailsPicture: movie.detailsPicture,
        //           downloadUrl: entry.toURL()
        //         });
        //         this.storage.set("movies", this.moviesDownloaded);
        //         resolve({ downloadUrl: entry.toURL() });
        //       },
        //       error => {
        //         console.error(JSON.stringify(error));
        //         reject(error);
        //       }
        //     );
        // });
        // return promise;
    };
    DownloadService.prototype.downloadEpisode = function (episode) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.episodeFileTransfer
                .download(episode.videoUrl, _this.file.dataDirectory + episode.name + ".mp4")
                .then(function (entry) {
                console.log("download complete: " + JSON.stringify(entry.toURL()));
                _this.episodesDownloaded.push({
                    episodeId: episode.episodeId,
                    name: episode.name,
                    picture: episode.picture,
                    downloadUrl: entry.toURL()
                });
                _this.storage.set("episodes", _this.episodesDownloaded);
                resolve({ downloadUrl: entry.toURL() });
            }, function (error) {
                console.error(JSON.stringify(error));
                reject(error);
            });
        });
        return promise;
    };
    DownloadService.prototype.isMovieDownloaded = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.moviesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                    var movie = _this.moviesDownloaded[i];
                    if (movie.movieId == movieId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.isEpisodeDownloaded = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            if (_this.episodesDownloaded.length > 0) {
                var isDownloaded = false;
                for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                    var episode = _this.episodesDownloaded[i];
                    if (episode.episodeId == episodeId) {
                        isDownloaded = true;
                        break;
                    }
                }
                resolve({ isDownloaded: isDownloaded });
            }
            else {
                resolve({ isDownloaded: false });
            }
        });
        return promise;
    };
    DownloadService.prototype.deleteMovie = function (movieId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.moviesDownloaded.length; i++) {
                var movie = _this.moviesDownloaded[i];
                if (movie.movieId == movieId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.moviesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("movies", _this.moviesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService.prototype.deleteEpisode = function (episodeId) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var deleteIndex = -1;
            for (var i = 0; i < _this.episodesDownloaded.length; i++) {
                var movie = _this.episodesDownloaded[i];
                if (movie.episodeId == episodeId) {
                    deleteIndex = i;
                    break;
                }
            }
            if (deleteIndex > -1) {
                _this.episodesDownloaded.splice(deleteIndex, 1);
            }
            _this.storage.set("episodes", _this.episodesDownloaded);
            resolve();
        });
        return promise;
    };
    DownloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], DownloadService);
    return DownloadService;
}());

//# sourceMappingURL=DownloadService.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_ComingSoonService__ = __webpack_require__(262);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingSoonPage = (function () {
    function ComingSoonPage(loadingCtrl, comingSoonService) {
        this.loadingCtrl = loadingCtrl;
        this.comingSoonService = comingSoonService;
        this.loaded = false;
        this.comingSoonList = [];
    }
    ComingSoonPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ComingSoonPage");
        this.getComingSoon();
    };
    ComingSoonPage.prototype.getComingSoon = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Loading Coming Soon..."
        });
        loading.present();
        this.comingSoonService.getComingSoon().then(function (result) {
            _this.comingSoonList = result.comingSoonList;
            _this.loaded = true;
            loading.dismiss();
        });
    };
    ComingSoonPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-coming-soon",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\coming-soon\coming-soon.html"*/'<ion-content padding fullscreen>\n  <ion-list no-lines *ngIf="comingSoonList.length > 0">\n    <ion-item *ngFor="let comingSoon of comingSoonList">\n      <img src="{{ comingSoon.picture }}">\n\n      <ion-row>\n        <ion-col col-8>\n          <p class="item-title">{{ comingSoon.name }}</p>\n        </ion-col>\n\n        <ion-col col-4>\n          <button ion-button clear color="netflixWhite">\n            <ion-icon name=\'md-add\'></ion-icon>\n            <p>My List</p>\n          </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <p class="item-summary line-break">{{ comingSoon.description }}</p>\n      </ion-row>\n\n      <ion-row>\n        <p class="coming-date">{{ comingSoon.releaseDate }}</p>\n      </ion-row>\n\n      <br>\n    </ion-item>\n  </ion-list>\n\n  <ion-row style="margin-top: 50%;" *ngIf="loaded && comingSoonList.length <= 0">\n    <ion-col text-center>\n      <img class="demo-image" src="assets/netflix-icon.png">\n      <p class="demo-message">There are no items yet.</p>\n      <p class="demo-sub-message">Use the Admin Ion Netflix to add your own coming soon items here!</p>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\coming-soon\coming-soon.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__services_ComingSoonService__["a" /* ComingSoonService */]])
    ], ComingSoonPage);
    return ComingSoonPage;
}());

//# sourceMappingURL=coming-soon.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_TvShow__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Category__ = __webpack_require__(511);




var CategoriesService = (function () {
    function CategoriesService() {
    }
    CategoriesService.prototype.getCategories = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .get()
                .then(function (categoriesSnapshot) {
                var categories = [];
                categoriesSnapshot.forEach(function (doc) {
                    var category = new __WEBPACK_IMPORTED_MODULE_3__data_Category__["a" /* Category */](doc.data().name);
                    category.categoryId = doc.id;
                    categories.push(category);
                });
                resolve({ categories: categories });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryMovies = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("movies")
                .get()
                .then(function (categoryMoviesSnapshot) {
                var categoryMovies = [];
                categoryMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.categoryMovieId = doc.id;
                    // movie.movieId = doc.data().movieId;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    categoryMovies.push(movie);
                });
                resolve({ categoryMovies: categoryMovies });
            });
        });
        return promise;
    };
    CategoriesService.prototype.getCategoryTvShows = function (category) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_0_firebase___default.a.firestore();
            db.collection("categories")
                .doc(category.categoryId)
                .collection("tvShows")
                .get()
                .then(function (categoryTvShowsSnapshot) {
                var categoryTvShows = [];
                categoryTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_1__data_TvShow__["a" /* TvShow */]();
                    tvShow.categoryTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    categoryTvShows.push(tvShow);
                });
                resolve({ categoryTvShows: categoryTvShows });
            });
        });
        return promise;
    };
    return CategoriesService;
}());

//# sourceMappingURL=CategoriesService.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_Movie__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MoviesService = (function () {
    function MoviesService() {
    }
    MoviesService.prototype.getMovie = function (movieId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .doc(movieId)
                .get()
                .then(function (doc) {
                var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                // movie.movieId = doc.id;
                // movie.name = doc.data().name;
                // movie.picture = doc.data().picture;
                // movie.detailsPicture = doc.data().detailsPicture;
                // movie.releaseYear = doc.data().releaseYear;
                // movie.rating = doc.data().rating;
                // movie.description = doc.data().description;
                // movie.videoUrl = doc.data().videoUrl;
                resolve({ movie: movie });
            });
        });
        return promise;
    };
    MoviesService.prototype.getAllMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.movieId = doc.id;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.detailsPicture = doc.data().detailsPicture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService.prototype.getRecentlyAddedMovies = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("movies")
                .limit(12)
                .orderBy("addedAt", "desc")
                .get()
                .then(function (moviesSnapshot) {
                var movies = [];
                moviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_2__data_Movie__["a" /* Movie */]();
                    // movie.movieId = doc.id;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.detailsPicture = doc.data().detailsPicture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    movies.push(movie);
                });
                resolve({ movies: movies });
            });
        });
        return promise;
    };
    MoviesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MoviesService);
    return MoviesService;
}());

//# sourceMappingURL=MoviesService.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_AuthService__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = (function () {
    function ProfilePage(navCtrl, app, loadingCtrl, zone, authService) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.authService = authService;
        this.userName = "";
        this.userPicture = "";
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProfilePage");
    };
    ProfilePage.prototype.goToUsers = function () {
        this.navCtrl.push("UsersPage");
    };
    ProfilePage.prototype.goToNotifications = function () {
        this.navCtrl.push("NotificationsPage");
    };
    ProfilePage.prototype.goToMyList = function () {
        this.navCtrl.push("MylistPage");
    };
    ProfilePage.prototype.goToSettings = function () {
        this.navCtrl.push("SettingsPage");
    };
    ProfilePage.prototype.signOut = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Logging out..."
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
            __WEBPACK_IMPORTED_MODULE_3_firebase___default.a
                .auth()
                .signOut()
                .then(function () {
                _this.zone.run(function () {
                    _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_2__sign_in_sign_in__["a" /* SignInPage */]);
                });
            });
        }, 500);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-profile",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\profile\profile.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <ion-row (click)="goToUsers()">\n        <ion-col *ngIf="userPicture == null" text-center col-2>\n          <img src="assets/imgs/netflix-avatar.png">\n        </ion-col>\n\n        <ion-avatar *ngIf="userPicture != null" text-center col-2>\n          <img class="round-image" src="{{userPicture}}">\n        </ion-avatar>\n\n        <ion-col col-8>\n          <p *ngIf="userName == null">Mr John Doe</p>\n          <p *ngIf="userName != null">{{userName}}</p>\n        </ion-col>\n\n        <ion-col text-center col-2>\n          <ion-icon name="md-repeat" item-end></ion-icon>\n        </ion-col>\n      </ion-row>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list class="top-menu-list">\n    <ion-item (click)="goToNotifications()">\n      <ion-icon name="md-notifications" item-start></ion-icon>\n      <p>Notifications</p>\n    </ion-item>\n\n    <ion-item (click)="goToMyList()">\n      <ion-icon name="md-checkmark" item-start></ion-icon>\n      <p>My List</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-list no-lines class="user-menu-list">\n    <ion-item (click)="goToSettings()">\n      <p>App Settings</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Account</p>\n    </ion-item>\n\n    <ion-item>\n      <p>About</p>\n    </ion-item>\n\n    <ion-item>\n      <p>Help</p>\n    </ion-item>\n\n    <ion-item (click)="signOut()">\n      <p>Sign Out</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_4__services_AuthService__["a" /* AuthService */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_TvShowsService__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = (function () {
    function SearchPage(navCtrl, categoriesService, moviesService, tvShowsService) {
        this.navCtrl = navCtrl;
        this.categoriesService = categoriesService;
        this.moviesService = moviesService;
        this.tvShowsService = tvShowsService;
        this.categories = [];
        this.loaded = false;
        this.isSearching = false;
        this.searchDone = false;
        this.searchValue = "";
        this.searchItems = [];
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SearchPage");
        this.listenForSearchInput(500);
        this.getCategories();
    };
    SearchPage.prototype.listenForSearchInput = function (timeoutTime) {
        var _this = this;
        var searchInput = (document.getElementById("searchInput"));
        var timeout = null;
        searchInput.onkeyup = function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                _this.search(_this.searchValue);
            }, timeoutTime);
        };
    };
    SearchPage.prototype.search = function (searchValue) {
        var _this = this;
        this.isSearching = true;
        if (searchValue !== "" && searchValue.length >= 3) {
            this.searchItems = [];
            // Search movies first
            this.moviesService.getAllMovies().then(function (result) {
                result.movies.forEach(function (movie) {
                    if (movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                        var searchItem = new __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__["a" /* SearchItem */]();
                        searchItem.itemId = movie.movieId;
                        searchItem.name = movie.name;
                        searchItem.picture = movie.picture;
                        searchItem.isMovie = true;
                        _this.searchItems.push(searchItem);
                    }
                });
                // Then search tv shows
                _this.tvShowsService.getAllTvShows().then(function (result) {
                    result.tvShows.forEach(function (tvShow) {
                        if (tvShow.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1) {
                            var searchItem = new __WEBPACK_IMPORTED_MODULE_5__data_SearchItem__["a" /* SearchItem */]();
                            searchItem.itemId = tvShow.tvShowId;
                            searchItem.name = tvShow.name;
                            searchItem.picture = tvShow.picture;
                            searchItem.isMovie = false;
                            _this.searchItems.push(searchItem);
                        }
                    });
                    _this.searchDone = true;
                });
            });
        }
        else if (searchValue === "") {
            this.clearSearch();
        }
    };
    SearchPage.prototype.onClear = function (event) {
        this.clearSearch();
    };
    SearchPage.prototype.clearSearch = function () {
        this.isSearching = false;
        this.searchDone = false;
        this.searchItems = [];
    };
    SearchPage.prototype.goToSearchItem = function (searchItem) {
        if (searchItem.isMovie) {
            this.navCtrl.push("MovieDetailsPage", { movieId: searchItem.itemId });
        }
        else {
            this.navCtrl.push("ShowDetailsPage", { tvShowId: searchItem.itemId });
        }
    };
    SearchPage.prototype.getCategories = function () {
        var _this = this;
        this.categoriesService.getCategories().then(function (result) {
            _this.categories = result.categories;
            _this.loaded = true;
        });
    };
    SearchPage.prototype.openCategory = function (category) {
        this.navCtrl.push("GridListPage", { category: category });
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-search",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\search\search.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-row>\n      <ion-col col-10>\n        <ion-searchbar id="searchInput" [(ngModel)]="searchValue" placeholder="Search" (ionClear)="onClear($event)"></ion-searchbar>\n      </ion-col>\n\n      <ion-col col-2 text-center>\n        <button ion-button clear item-end>\n          <ion-icon name="md-mic"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row *ngIf="!loaded || (isSearching && !searchDone)">\n    <ion-col text-center>\n      <br>\n      <ion-spinner color="netflixRed"></ion-spinner>\n    </ion-col>\n  </ion-row>\n\n  <ion-list *ngIf="loaded && !isSearching" no-lines>\n    <ion-item ion-item *ngFor="let category of categories" (click)="openCategory(category)" clear text-center>\n      {{category.name}}\n    </ion-item>\n  </ion-list>\n\n  <ion-row *ngIf="isSearching && searchItems.length > 0" style="padding-left: 0px;">\n    <ion-col col-4 *ngFor="let searchItem of searchItems">\n      <img src="{{searchItem.picture}}" (click)="goToSearchItem(searchItem)" style="width:100%">\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="isSearching && searchDone && searchItems.length <= 0">\n    <ion-col text-center>\n      <img class="demo-image" src="assets/netflix-icon.png">\n      <p class="demo-message">No results.</p>\n    </ion-col>\n  </ion-row>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_CategoriesService__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_3__services_MoviesService__["a" /* MoviesService */],
            __WEBPACK_IMPORTED_MODULE_4__services_TvShowsService__["a" /* TvShowsService */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShowsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_TvShow__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Season__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_Episode__ = __webpack_require__(556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TvShowsService = (function () {
    function TvShowsService() {
    }
    TvShowsService.prototype.getAllTvShows = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .orderBy("addedAt", "desc")
                .get()
                .then(function (tvShowsSnapshot) {
                var tvShows = [];
                tvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                    tvShow.tvShowId = doc.id;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.detailsPicture = doc.data().detailsPicture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    tvShows.push(tvShow);
                });
                resolve({ tvShows: tvShows });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getTvShow = function (tvShowId) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShowId)
                .get()
                .then(function (doc) {
                var tvShow = new __WEBPACK_IMPORTED_MODULE_2__data_TvShow__["a" /* TvShow */]();
                tvShow.tvShowId = doc.id;
                tvShow.name = doc.data().name;
                tvShow.picture = doc.data().picture;
                tvShow.detailsPicture = doc.data().detailsPicture;
                tvShow.releaseYear = doc.data().releaseYear;
                tvShow.rating = doc.data().rating;
                tvShow.description = doc.data().description;
                resolve({ tvShow: tvShow });
            });
        });
        return promise;
    };
    TvShowsService.prototype.getSeasons = function (tvShow) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (tvShowSeasonsSnapshot) {
                var tvShowSeasons = [];
                tvShowSeasonsSnapshot.forEach(function (doc) {
                    var season = new __WEBPACK_IMPORTED_MODULE_3__data_Season__["a" /* Season */]();
                    season.seasonId = doc.id;
                    season.name = doc.data().name;
                    season.tvShowId = doc.data().tvShowId;
                    season.tvShowName = doc.data().tvShowName;
                    tvShowSeasons.push(season);
                });
                resolve({ tvShowSeasons: tvShowSeasons });
            })
                .catch(function (error) {
                reject(error);
            });
        });
        return promise;
    };
    TvShowsService.prototype.getEpisodes = function (tvShow, season) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("tvShows")
                .doc(tvShow.tvShowId)
                .collection("seasons")
                .doc(season.seasonId)
                .collection("episodes")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (episodesSnapshot) {
                var seasonEpisodes = [];
                episodesSnapshot.forEach(function (doc) {
                    var episode = new __WEBPACK_IMPORTED_MODULE_4__data_Episode__["a" /* Episode */]();
                    episode.episodeId = doc.id;
                    episode.name = doc.data().name;
                    episode.description = doc.data().description;
                    episode.picture = doc.data().picture;
                    episode.seasonId = doc.data().seasonId;
                    episode.seasonName = doc.data().seasonName;
                    episode.tvShowId = doc.data().tvShowId;
                    episode.tvShowName = doc.data().tvShowName;
                    episode.videoUrl = doc.data().videoUrl;
                    seasonEpisodes.push(episode);
                });
                resolve({ seasonEpisodes: seasonEpisodes });
            });
        });
        return promise;
    };
    TvShowsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TvShowsService);
    return TvShowsService;
}());

//# sourceMappingURL=TvShowsService.js.map

/***/ }),

/***/ 216:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 216;

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VimeoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VimeoService = (function () {
    function VimeoService(http) {
        this.http = http;
        this.apiurl = 'https://cvivovimeoapi.herokuapp.com';
        this.vimeoURl = "https://api.vimeo.com";
    }
    VimeoService.prototype.getHomeScreenGroups = function () {
        this.options = {
            headers: this.headersParams
        };
        return this.http.get(this.apiurl + '/albums');
    };
    ;
    VimeoService.prototype.getHomeScreenGroupsVideos = function (hohomeScreenGroup) {
        this.headersParams =
            {
                "Authorization": "Bearer bd5793a910a407ac9960e68a947d320a",
                "Content-Type": "application/json",
                "Accept": "application/vnd.vimeo.*+json;version=3.4",
            };
        this.options = {
            headers: this.headersParams
        };
        return this.http.get(this.vimeoURl + "/me" + hohomeScreenGroup.groupId, this.options);
    };
    VimeoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["HttpClient"]])
    ], VimeoService);
    return VimeoService;
}());

//# sourceMappingURL=VimeoService.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_password__ = __webpack_require__(339);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPasswordPageModule = (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot_password__["a" /* ForgotPasswordPage */]),
            ],
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());

//# sourceMappingURL=forgot-password.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/coming-soon/coming-soon.module": [
		577,
		12
	],
	"../pages/downloads/downloads.module": [
		578,
		11
	],
	"../pages/forgot-password/forgot-password.module": [
		220
	],
	"../pages/grid-list/grid-list.module": [
		579,
		0
	],
	"../pages/horizontal-list/horizontal-list.module": [
		580,
		8
	],
	"../pages/movie-details/movie-details.module": [
		581,
		3
	],
	"../pages/mylist/mylist.module": [
		582,
		2
	],
	"../pages/notifications/notifications.module": [
		583,
		1
	],
	"../pages/profile/profile.module": [
		584,
		10
	],
	"../pages/search/search.module": [
		585,
		9
	],
	"../pages/settings/settings.module": [
		586,
		7
	],
	"../pages/show-details/show-details.module": [
		587,
		6
	],
	"../pages/sign-in/sign-in.module": [
		296
	],
	"../pages/sign-up/sign-up.module": [
		297
	],
	"../pages/users/users.module": [
		588,
		5
	],
	"../pages/video-playback/video-playback.module": [
		589,
		4
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 261;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__ = __webpack_require__(499);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComingSoonService = (function () {
    function ComingSoonService() {
    }
    ComingSoonService.prototype.getComingSoon = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("comingSoon")
                .orderBy("addedAt", "asc")
                .get()
                .then(function (comingSoonSnapshot) {
                var comingSoonList = [];
                comingSoonSnapshot.forEach(function (doc) {
                    var comingSoon = new __WEBPACK_IMPORTED_MODULE_2__data_ComingSoon__["a" /* ComingSoon */]();
                    comingSoon.comingSoonId = doc.id;
                    comingSoon.name = doc.data().name;
                    comingSoon.picture = doc.data().picture;
                    comingSoon.description = doc.data().description;
                    comingSoon.releaseDate = doc.data().releaseDate;
                    comingSoonList.push(comingSoon);
                });
                resolve({ comingSoonList: comingSoonList });
            });
        });
        return promise;
    };
    ComingSoonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ComingSoonService);
    return ComingSoonService;
}());

//# sourceMappingURL=ComingSoonService.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_ChatService__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_HomeScreenService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroupItem__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_HomeScreenGroup__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, streamingMedia, loadingCtrl, homeScreenService, platform, alertCtrl, db, embedService, alertController, chatService, toastCtrl, VimeoService) {
        this.navCtrl = navCtrl;
        this.streamingMedia = streamingMedia;
        this.loadingCtrl = loadingCtrl;
        this.homeScreenService = homeScreenService;
        this.platform = platform;
        this.alertCtrl = alertCtrl;
        this.db = db;
        this.embedService = embedService;
        this.alertController = alertController;
        this.chatService = chatService;
        this.toastCtrl = toastCtrl;
        this.VimeoService = VimeoService;
        this.homeScreenGroups = [];
        this.segementHome = 'list';
        this.chatEnable = false;
        this.messages = [];
        this.nickname = '';
        this.message = '';
    }
    HomePage.prototype.ionViewDidEnter = function () {
        this.getChatSection();
    };
    ;
    HomePage.prototype.getHomeGroups = function () {
        var _this = this;
        this.VimeoService.getHomeScreenGroups().subscribe(function (res) {
            _this.homeScreenGroups = [];
            var collection = res;
            collection.forEach(function (element) {
                var homeGropuModel = new __WEBPACK_IMPORTED_MODULE_8__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                homeGropuModel.name = element.name;
                homeGropuModel.groupId = element.metadata.connections.videos.uri;
                homeGropuModel.groupItems = [];
                _this.homeScreenGroups.push(homeGropuModel);
            });
            _this.homeScreenGroups.forEach(function (element) {
                _this.VimeoService.getHomeScreenGroupsVideos(element).subscribe(function (result) {
                    var videos = result;
                    console.log(result);
                    videos.data.forEach(function (item) {
                        var video = new __WEBPACK_IMPORTED_MODULE_7__data_HomeScreenGroupItem__["a" /* HomeScreenGroupItem */]();
                        video.name = item.name;
                        video.picture = item.pictures.sizes[6].link_with_play_button;
                        video.description = item.description;
                        video.detailsPicture = item.pictures.sizes[3].link;
                        video.movieId = item.uri.split('/')[2];
                        element.groupItems.push(video);
                    });
                });
            });
        });
    };
    /**
     * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
     * @param key codigo de la tecla presionada
     */
    HomePage.prototype.keyPress = function (key) {
        if (key === 13) {
            this.sendMessage();
        }
    };
    ;
    /**
     * Funcion que sirve para obtener los mensajes de BD cuando el usuario cierra la aplicacion
     */
    HomePage.prototype.loadMessges = function () {
        var _this = this;
        if (this.messages.length === 0) {
            this.db.collection('Config').valueChanges().subscribe(function (res) {
                _this.event = res[0]['chatEvent'];
                if (res[0]['Vivo']) {
                    var docref = _this.db.collection('chats').doc(_this.event).collection('chatLog', function (ref) { return ref.orderBy('created'); });
                    docref.get().subscribe(function (res) {
                        res.forEach(function (res) { return _this.messages.push(res.data()); });
                    });
                }
            });
        }
    };
    ;
    /**
     * Funcion que se ejecuta cuando se activa la seccion del chat, al mismo tiempo
     * realiza la conexion con SOCKET.io, y llama la funcion getMessages() para obtener los mensajes del Socket
     */
    HomePage.prototype.getChatSection = function () {
        var _this = this;
        this.db.collection('Config').valueChanges().subscribe(function (res) {
            _this.chatEnable = res[0]['Vivo'];
            _this.event = res[0]['chatEvent'];
            _this.segementHome = _this.chatEnable === true ? 'chat' : 'list';
            if (_this.chatEnable) {
                if (_this.nickname === '') {
                    _this.chatService.joinChat().then(function (nickname) {
                        _this.nickname = nickname.name;
                    });
                    _this.chatService.getMessages().subscribe(function (message) {
                        _this.messages.push(message);
                        _this.db.collection('chats').doc(_this.event).collection('chatLog').doc('chatLog' + message['created']).set(message);
                    });
                }
            }
            else {
                console.log('disconetedchat');
                _this.chatService.disconnect();
                _this.nickname = '';
                _this.messages = [];
            }
            ;
        }, function (err) { return _this.showAlert(err, 'Error FbConfig'); });
    };
    ;
    /**
     * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
     * seguro para efectuar el INNERHTML en el DOM.
     */
    HomePage.prototype.gethomeVideo = function () {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            _this.db.collection('Config').valueChanges().subscribe(function (res) {
                _this.iframe_html = _this.embedService.embed_vimeo(res[0]['Idvivo'], {
                    query: { autoplay: 1, loop: 1, color: 'ffff', portrait: 0 },
                    attr: { width: '100%', height: 200 }
                });
                resolve({ videoConfig: res });
            }, function (err) { reject(err); });
        });
        return promise;
    };
    /**
     * Funcion que se ejecuta automaticamnete cuando la vista termina de cargar.
     */
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log("ionViewDidLoad HomePage");
        // this.getHomeScreenGroups();
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Registrando..."
        });
        loading.present();
        this.gethomeVideo().then(function () {
            _this.loadMessges();
            _this.getHomeGroups();
            setTimeout(function () {
                loading.dismiss();
            }, 2000);
        }, function (err) {
            loading.dismiss();
            _this.showAlert(err, 'Error de conexion');
        });
    };
    /**
     * Funcion que envia un mensaje por meido de SOCKET.IO
     */
    HomePage.prototype.sendMessage = function () {
        this.chatService.sendMessage(this.message);
        this.message = '';
    };
    // getHomeScreenGroups() {
    //   var loading = this.loadingCtrl.create({
    //     spinner: "bubbles",
    //     content: "Loading Home..."
    //   });
    //   loading.present();
    //   this.homeScreenService.getHomeScreenGroups().then((result: any) => {
    //     this.homeScreenGroups = result.homeScreenGroups;
    //     this.homeScreenGroups.forEach(homeScreenGroup => {
    //       // Get home screen movies first
    //       this.homeScreenService
    //         .getHomeScreenGroupMovies(homeScreenGroup)
    //         .then((result: any) => {
    //           result.homeScreenGroupMovies.forEach((movie: Movie) => {
    //             var movieGroupItem = new HomeScreenGroupItem();
    //             movieGroupItem.itemId = movie.movieId;
    //             movieGroupItem.picture = movie.picture;
    //             movieGroupItem.isMovie = true;
    //             homeScreenGroup.groupItems.push(movieGroupItem);
    //           });
    //           // Then get home screen tv shows
    //           this.homeScreenService
    //             .getHomeScreenGroupTvShows(homeScreenGroup)
    //             .then((result: any) => {
    //               result.homeScreenGroupTvShows.forEach((tvShow: TvShow) => {
    //                 var movieGroupItem = new HomeScreenGroupItem();
    //                 movieGroupItem.itemId = tvShow.tvShowId;
    //                 movieGroupItem.picture = tvShow.picture;
    //                 movieGroupItem.isMovie = false;
    //                 homeScreenGroup.groupItems.push(movieGroupItem);
    //               });
    //               // Finally, shuffle them
    //               homeScreenGroup.groupItems = Helper.shuffle(
    //                 homeScreenGroup.groupItems
    //               );
    //             });
    //         });
    //     });
    //     loading.dismiss();
    //   });
    // }
    // goToGroupItemDetails(groupItem: HomeScreenGroupItem) {
    //   if (groupItem.isMovie) {
    //     this.navCtrl.push("MovieDetailsPage", { movieId: groupItem.itemId });
    //   } else {
    //     this.navCtrl.push("ShowDetailsPage", { tvShowId: groupItem.itemId });
    //   }
    // }
    HomePage.prototype.playVideoTrailer = function () {
        if (!this.platform.is("cordova")) {
            var alert_1 = this.alertController.create({
                title: "Run on device",
                subTitle: "This feature is only available on a device!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
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
        this.streamingMedia.playVideo("https://firebasestorage.googleapis.com/v0/b/ionnetflix-72e25.appspot.com/o/Watch%20the%20Black%20Lightning%20Trailer.mp4?alt=media&token=3331cd39-f38b-4add-8d83-cec4c213b571", options);
    };
    ;
    /**
     * Funcion que se ejecuta al hacer swipe down en la pantalla
     * para recargar el video
     * @param refresher
     */
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.getHomeGroups();
        this.gethomeVideo().then(function (res) {
            console.log(res);
            refresher.complete();
        }, function (err) {
            _this.showAlert(err, 'Error al cargar');
            refresher.complete();
        }).catch(function () { return refresher.complete(); });
        setTimeout(function () {
            refresher.complete();
        }, 3000);
    };
    ;
    /**
     * Funcion para mostrar un toaster con cualuiqer mensaje
     * @param msg mensaje para mostrar en el toaster
     */
    HomePage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ;
    /**
     * Funcion para mostrar una alerta personalizada
     * @param message mensaje para mostrar en el body de la alerta
     * @param title  titulo para mostrar en el encabezado de la alerta
     */
    HomePage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-home",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\home\home.html"*/'<ion-header no-border>\n\n  <ion-navbar align-title="center" transparent >\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n   \n\n  </ion-navbar>\n\n \n\n</ion-header>\n\n\n\n<ion-content class="list-avatar-page"  padding #pageContent>\n\n   \n\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n\n        <ion-refresher-content \n\n         pullingIcon="refresh-circle"\n\n         refreshingSpinner="bubbles">\n\n          </ion-refresher-content>\n\n        </ion-refresher>\n\n\n\n\n\n   \n\n     \n\n    <ion-grid>\n\n        <!-- Row 2 Scrollable list -->\n\n        <ion-row>\n\n          <ion-col>\n\n              <div [innerHtml]="iframe_html" ></div>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-segment [(ngModel)]="segementHome" color="netflixRed">\n\n                    <ion-segment-button value="list">\n\n                      <ion-icon name="list"></ion-icon>\n\n                    </ion-segment-button>\n\n                    <ion-segment-button value="chat" [disabled]=\'!chatEnable\'>\n\n                      <ion-icon name="chatbubbles"></ion-icon>\n\n                    </ion-segment-button>\n\n                  </ion-segment>\n\n            </ion-col>\n\n          </ion-row>\n\n        <ion-row  *ngIf="chatEnable && segementHome == \'chat\'">\n\n          <ion-col>\n\n               \n\n              <ion-scroll  scrollY="true" class="test">            \n\n                  <ion-list *ngFor="let message of messages ">\n\n                     <ion-item no-lines>\n\n                        <ion-avatar item-start>\n\n                          <img src="assets/imgs/netflix-avatar.png">\n\n                        </ion-avatar>\n\n                        <h3>{{message.from}}</h3>\n\n                        <p>{{message.text}}</p>\n\n                        <ion-note item-end>{{message.created | date:\' h:mm\' }}</ion-note>\n\n                      </ion-item>\n\n                    </ion-list>   \n\n                  </ion-scroll> \n\n              \n\n             \n\n          </ion-col>\n\n        </ion-row>\n\n    \n\n      </ion-grid>\n\n      \n\n    \n\n    <ion-list   *ngIf="segementHome == \'list\'" >\n\n      <div *ngFor="let homeScreenGroup of homeScreenGroups"  >\n\n        <div class="item-title">{{homeScreenGroup.name}}</div>\n\n\n\n        <ion-scroll scrollX="true" scroll-avatar>\n\n          <ion-list>\n\n            <ion-col  class="scroll-item" *ngFor="let groupItem of homeScreenGroup.groupItems"  >\n\n              <img src="{{groupItem.detailsPicture}}" (click)="goToGroupItemDetails(groupItem)" />\n\n            </ion-col>           \n\n          </ion-list>\n\n        </ion-scroll>\n\n      </div>    \n\n    </ion-list>\n\n\n\n    <br>\n\n    <br>\n\n  \n\n\n\n</ion-content>    \n\n<ion-footer  [hidden]="segementHome !== \'chat\'" >\n\n    <ion-toolbar>   \n\n        <ion-item>    \n\n            <ion-input [(ngModel)]="message" type="text" placeholder="mensaje"  (keypress)="keyPress($event.keyCode)"></ion-input>\n\n       </ion-item>       \n\n   \n\n       <ion-buttons end>\n\n         <button ion-button icon-right color="netflixRed" (click)="sendMessage()">          \n\n           <ion-icon name="send"></ion-icon>\n\n         </button>\n\n \n\n       </ion-buttons>\n\n              \n\n     </ion-toolbar>\n\n </ion-footer>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_streaming_media__["a" /* StreamingMedia */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_6__services_HomeScreenService__["a" /* HomeScreenService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_embed_video__["EmbedVideoService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1__services_ChatService__["a" /* ChatService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__["a" /* VimeoService */]])
    ], HomePage);
    return HomePage;
    var _a;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChatService = (function () {
    function ChatService(socket, afAuth, UserService, alertCtrl, toastCtrl) {
        this.socket = socket;
        this.afAuth = afAuth;
        this.UserService = UserService;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
    }
    ;
    ChatService.prototype.joinChat = function () {
        var _this = this;
        this.socket.connect();
        var promise = new Promise(function (resolve, reject) {
            _this.afAuth.authState.subscribe(function (user) {
                if (user) {
                    _this.uid = user.uid;
                    _this.UserService.getUserInfo(_this.uid).then(function (userInfo) {
                        _this.socket.emit('set-nickname', userInfo.name);
                        resolve(userInfo.name);
                    }, function (err) {
                        reject(err);
                        _this.showAlert(err, 'Error userInfo');
                    });
                }
                else {
                    _this.uid = null;
                }
            });
        });
        return promise;
    };
    ;
    ChatService.prototype.getUsers = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.on('users-changed', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ;
    ChatService.prototype.sendMessage = function (message) {
        this.socket.emit('add-message', { text: message });
        // this.message = '';
    };
    ;
    ChatService.prototype.getMessages = function () {
        var _this = this;
        var observable = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                observer.next(data);
            });
        });
        return observable;
    };
    ;
    ChatService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    ChatService.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000
        });
        toast.present();
    };
    ChatService.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    ChatService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ng_socket_io__["Socket"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_2__UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ChatService);
    return ChatService;
}());

//# sourceMappingURL=ChatService.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_Movie__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_TvShow__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeScreenService = (function () {
    function HomeScreenService() {
    }
    HomeScreenService.prototype.getHomeScreenGroups = function () {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .get()
                .then(function (homeScreenGroupsSnapshot) {
                var homeScreenGroups = [];
                homeScreenGroupsSnapshot.forEach(function (doc) {
                    var group = new __WEBPACK_IMPORTED_MODULE_2__data_HomeScreenGroup__["a" /* HomeScreenGroup */]();
                    group.groupId = doc.id;
                    group.name = doc.data().name;
                    homeScreenGroups.push(group);
                });
                resolve({ homeScreenGroups: homeScreenGroups });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupMovies = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("movies")
                .get()
                .then(function (homeScreenGroupsMoviesSnapshot) {
                var homeScreenGroupMovies = [];
                homeScreenGroupsMoviesSnapshot.forEach(function (doc) {
                    var movie = new __WEBPACK_IMPORTED_MODULE_3__data_Movie__["a" /* Movie */]();
                    // movie.homeScreenGroupMovieId = doc.id;
                    // movie.movieId = doc.data().movieId;
                    // movie.name = doc.data().name;
                    // movie.picture = doc.data().picture;
                    // movie.releaseYear = doc.data().releaseYear;
                    // movie.rating = doc.data().rating;
                    // movie.description = doc.data().description;
                    // movie.videoUrl = doc.data().videoUrl;
                    homeScreenGroupMovies.push(movie);
                });
                resolve({ homeScreenGroupMovies: homeScreenGroupMovies });
            });
        });
        return promise;
    };
    HomeScreenService.prototype.getHomeScreenGroupTvShows = function (homeScreenGroup) {
        var promise = new Promise(function (resolve, reject) {
            var db = __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.firestore();
            db.collection("homeScreenGroups")
                .doc(homeScreenGroup.groupId)
                .collection("tvShows")
                .get()
                .then(function (homeScreenGroupTvShowsSnapshot) {
                var homeScreenGroupTvShows = [];
                homeScreenGroupTvShowsSnapshot.forEach(function (doc) {
                    var tvShow = new __WEBPACK_IMPORTED_MODULE_4__data_TvShow__["a" /* TvShow */]();
                    tvShow.homeScreenGroupTvShowId = doc.id;
                    tvShow.tvShowId = doc.data().tvShowId;
                    tvShow.name = doc.data().name;
                    tvShow.picture = doc.data().picture;
                    tvShow.releaseYear = doc.data().releaseYear;
                    tvShow.rating = doc.data().rating;
                    tvShow.description = doc.data().description;
                    homeScreenGroupTvShows.push(tvShow);
                });
                resolve({ homeScreenGroupTvShows: homeScreenGroupTvShows });
            });
        });
        return promise;
    };
    HomeScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], HomeScreenService);
    return HomeScreenService;
}());

//# sourceMappingURL=HomeScreenService.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroup; });
var HomeScreenGroup = (function () {
    function HomeScreenGroup() {
        this.groupItems = [];
    }
    return HomeScreenGroup;
}());

//# sourceMappingURL=HomeScreenGroup.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInPageModule", function() { return SignInPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_in__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignInPageModule = (function () {
    function SignInPageModule() {
    }
    SignInPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_in__["a" /* SignInPage */]),
            ],
        })
    ], SignInPageModule);
    return SignInPageModule;
}());

//# sourceMappingURL=sign-in.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(298);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ }),

/***/ 298:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var SignUpPage = (function () {
    function SignUpPage(navCtrl, alertCtrl, afAuth, afs, sqlite, loadingCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.afs = afs;
        this.sqlite = sqlite;
        this.loadingCtrl = loadingCtrl;
        this.formBuilder = formBuilder;
        this.signUpSegment = "cancel";
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.errors = { correo: false, confirmPass: false, minLength: false };
        var emailPattern = "^[a-zA-Z0-9._%+-]+@cun.edu.co";
        this.signUpForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: ["", [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].pattern(emailPattern)]],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password2: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        }, { validator: this.checkPasswords });
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignUpPage");
    };
    SignUpPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    SignUpPage.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.password2.value;
        return pass === confirmPass ? true : { notSame: true };
    };
    SignUpPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    SignUpPage.prototype.signIn = function () {
        this.navCtrl.push("SignInPage");
    };
    /**
     * Funcion para crear un registro de nuevo usuario en firebase,
     * dentro de esta funcion se encuentran subfunciones para realizar el regstro
     */
    SignUpPage.prototype.signUp = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var user, loading;
            return __generator(this, function (_a) {
                user = this.signUpForm.value;
                loading = this.loadingCtrl.create({
                    spinner: "bubbles",
                    content: "Registrando..."
                });
                loading.present();
                try {
                    /**
                     * funcion de angularFirebase para crear un nuevo usuario con email / password
                     */
                    this.afAuth.auth
                        .createUserWithEmailAndPassword(user.email, user.password)
                        .then(function (userResult) {
                        loading.dismiss();
                        var email = user.email;
                        var name = user.name;
                        var uid = userResult.user.uid;
                        var newUser = userResult.additionalUserInfo.isNewUser;
                        /**
                         * Funcion para crear documento en firebase
                         * con los datos del nuevo usuario (nombre, email, uid).
                         */
                        _this.afs.collection('users')
                            .doc(uid).set({ email: email, name: name, uid: uid })
                            .then(function (fsRes) {
                            console.log(fsRes);
                            if (newUser) {
                                _this.navCtrl.insert(0, __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                                _this.navCtrl.popToRoot();
                            }
                        }, function (err) {
                            loading.dismiss();
                            _this.showAlert(err, 'Error AFST');
                        });
                    }, function (err) {
                        loading.dismiss();
                        switch (err.code) {
                            case 'auth/invalid-email':
                                _this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co', 'Correo Invalido');
                                break;
                            case 'auth/email-already-in-use':
                                _this.showAlert('Este correo ya se encuentra registrado', 'Correo en uso');
                                break;
                            case 'auth/operation-not-allowed':
                                _this.showAlert('Este usuario se encuetra inactivo. ', 'Usuario inactivo');
                                break;
                            case 'auth/weak-password':
                                _this.showAlert('Esta contraseña no cumple con los requerimientos de seguridad  . ', 'Contraseña Insegura');
                                break;
                            default:
                                break;
                        }
                    });
                }
                catch (err) {
                    this.showAlert(err, 'Error FnSgup');
                }
                return [2 /*return*/];
            });
        });
    };
    ;
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-sign-up",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\sign-up\sign-up.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      <img src="assets/imgs/netflix-logo.png">\n\n    </ion-title>\n\n\n\n    <ion-buttons right>\n\n      <button class="navbar-button" ion-button clear (click)="signIn()">INICIAR SESIÓN</button>\n\n      <button class="navbar-button" ion-button clear>AYUDA</button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="image">\n\n    <img src="assets/imgs/netflix-signup.png">\n\n  </div>\n\n\n\n  <ion-row style="margin-top: -60px;">\n\n    <ion-col text-center>\n\n      <p class="title">See what\'s next.</p>\n\n      <p class="subtitle">WATCH ANYWHERE. CANCEL AT ANY TIME.</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <br>\n\n  <form [formGroup]="signUpForm"  (ngSubmit)="signUp()" padding >\n\n  <ion-row>\n\n    <p class="sign-up-title"> Registro</p>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Nombre completo</ion-label>\n\n        <ion-input type="text" formControlName="name" required  ></ion-input>\n\n      \n\n      </ion-item>  \n\n  \n\n      <ion-item>\n\n          <ion-label floating>Correo</ion-label>\n\n          <ion-input type="email" formControlName="email" [email]="true" required  ></ion-input>\n\n        \n\n        </ion-item>     \n\n        <ion-item>\n\n          <ion-label floating>Contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password" required [minlength]=6></ion-input>\n\n          <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n\n        </ion-item>\n\n        <ion-item>\n\n          <ion-label floating>Confirmar contraseña</ion-label>\n\n          <ion-input [type]="passwordType" clearOnEdit="false" formControlName="password2"  required></ion-input>\n\n         \n\n        </ion-item>\n\n    \n\n        <button class="signup-button" color="netflixRed" ion-button round  full  [disabled]=!signUpForm.valid>REGISTRARSE</button>\n\n       <br>\n\n        <div style="color: #CA5F45" \n\n          class="alert alert-danger">\n\n         <div *ngIf="signUpForm.hasError(\'notSame\')">\n\n            *Las contraseñas no coinciden.\n\n        </div>\n\n        <div *ngIf="signUpForm.controls[\'email\'].hasError(\'pattern\')">\n\n           * Tu correo tiene que tener el siguiente formato ejemplo@cun.edu.co\n\n        </div>       \n\n        <div  *ngIf="signUpForm.controls[\'password\'].hasError(\'minlength\')">\n\n           * la contraseña debe tener minimo 6 caracteres\n\n        </div>\n\n      </div>\n\n    \n\n  \n\n   </ion-row>\n\n  </form>\n\n  <br>\n\n  <p class="questions">Questions? Phone 1800 071 578</p>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Help Centre</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Terms of Use</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <ion-row>\n\n    <ion-col col-6>\n\n      <p class="footer-text">Privacy</p>\n\n    </ion-col>\n\n\n\n    <ion-col col-6>\n\n      <p class="footer-text">Cookie Preferences</p>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n  <p class="footer-text">Netflix Australia</p>\n\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\sign-up\sign-up.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(navCtrl, navParams, authService, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authService = authService;
        this.loadingCtrl = loadingCtrl;
        this.email = "";
    }
    ForgotPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPasswordPage');
    };
    /**
     * Funciom para restablecer contraseña de usuario mediante firebase, se enviara un email al correo ingresado.
     * @param email correo ingresado al cual se enviara el correo con instrucciones.
     */
    ForgotPasswordPage.prototype.resetPassword = function (email) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: "bubbles",
            content: "Cargando..."
        });
        loading.present();
        this.authService.forgotPassword(email).then(function () {
            loading.dismiss();
            _this.email = '';
            _this.navCtrl.setRoot('SignInPage');
        }).catch(function () {
            loading.dismiss();
        });
    };
    ForgotPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'page-forgot-password',template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\forgot-password\forgot-password.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/imgs/netflix-logo.png">\n    </ion-title>\n\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll" text-center >\n    <div class="image">\n        <img src="assets/imgs/contraseña.png">\n      </div>\n    <ion-row padding> \n     <p class=\'forgot-pass-title\'>¿Olvidaste tu contraseña?</p>\n    <p>Por favor ingresa el correo que usaste al momento del registro para obtener las instrucciones de restablecimiento de contraseña</p>\n       <ion-item>\n        <ion-label floating>Ingresa tu correo</ion-label>\n        <ion-input type="text" [(ngModel)]="email"></ion-input>\n      </ion-item>\n      <button ion-button round full (click)="resetPassword(email)">Enviar</button>\n    </ion-row>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\forgot-password\forgot-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* LoadingController */]])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());

//# sourceMappingURL=forgot-password.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_DownloadService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__ = __webpack_require__(510);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DownloadsPage = (function () {
    function DownloadsPage(downloadService, alertCtrl, streamingMedia) {
        this.downloadService = downloadService;
        this.alertCtrl = alertCtrl;
        this.streamingMedia = streamingMedia;
        this.downloadType = "movies";
        this.hasAnyDownloads = false;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
    }
    DownloadsPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DownloadsPage");
    };
    DownloadsPage.prototype.ionViewDidEnter = function () {
        console.log("ionViewDidEnter DownloadsPage");
        this.loadDownloads();
    };
    DownloadsPage.prototype.loadDownloads = function () {
        var _this = this;
        this.movieDownloadItems = [];
        this.episodesDownloadItems = [];
        this.hasAnyDownloads =
            this.downloadService.moviesDownloaded.length > 0 ||
                this.downloadService.episodesDownloaded.length > 0;
        this.downloadService.moviesDownloaded.forEach(function (movie) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = movie.movieId;
            downloadItem.name = movie.name;
            downloadItem.picture = movie.picture;
            downloadItem.isMovie = true;
            downloadItem.downloadUrl = movie.downloadUrl;
            _this.movieDownloadItems.push(downloadItem);
        });
        this.downloadService.episodesDownloaded.forEach(function (episode) {
            var downloadItem = new __WEBPACK_IMPORTED_MODULE_4__data_DownloadItem__["a" /* DownloadItem */]();
            downloadItem.itemId = episode.episodeId;
            downloadItem.name = episode.name;
            downloadItem.picture = episode.picture;
            downloadItem.isMovie = false;
            downloadItem.downloadUrl = episode.downloadUrl;
            _this.episodesDownloadItems.push(downloadItem);
        });
    };
    DownloadsPage.prototype.goToAvailableDownloads = function () {
        // this.navCtrl.push("HorizontalListPage", { title: "Available Downloads" });
    };
    DownloadsPage.prototype.playMovie = function (movieDownloadItem) {
        if (movieDownloadItem.downloadUrl === "") {
            var alert_1 = this.alertCtrl.create({
                title: "This movie has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the movie and watch it here!",
                buttons: ["Dismiss"]
            });
            alert_1.present();
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
        this.streamingMedia.playVideo(movieDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.playEpisode = function (episodeDownloadItem) {
        if (episodeDownloadItem.downloadUrl === "") {
            var alert_2 = this.alertCtrl.create({
                title: "This episode has not yet been uploaded!",
                subTitle: "Use the Admin Ion Netflix to add the episode and watch it here!",
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
        this.streamingMedia.playVideo(episodeDownloadItem.downloadUrl, options);
    };
    DownloadsPage.prototype.deleteMovie = function (movieDownloadItem) {
        this.presentMovieDeleteConfirm(movieDownloadItem);
    };
    DownloadsPage.prototype.presentMovieDeleteConfirm = function (movieDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded movie.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteMovie(movieDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.movieDownloadItems.indexOf(movieDownloadItem);
                            if (index > -1) {
                                _this.movieDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage.prototype.deleteEpisode = function (episodesDownloadItems) {
        this.presentEpisodeDeleteConfirm(episodesDownloadItems);
    };
    DownloadsPage.prototype.presentEpisodeDeleteConfirm = function (episodeDownloadItem) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Delete downloaded episode.",
            message: "Do you want to delete this download?",
            buttons: [
                {
                    text: "No",
                    role: "cancel",
                    handler: function () {
                        console.log("Cancel clicked");
                    }
                },
                {
                    text: "Yes",
                    handler: function () {
                        console.log("Yes clicked");
                        _this.downloadService
                            .deleteEpisode(episodeDownloadItem.itemId)
                            .then(function (result) {
                            var index = _this.episodesDownloadItems.indexOf(episodeDownloadItem);
                            if (index > -1) {
                                _this.episodesDownloadItems.splice(index, 1);
                            }
                            _this.hasAnyDownloads =
                                _this.downloadService.moviesDownloaded.length > 0 ||
                                    _this.downloadService.episodesDownloaded.length > 0;
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DownloadsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-downloads",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\downloads\downloads.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>My Downloads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-row class="smart-downloads-row">\n    <ion-col col-10>\n      <ion-row>\n        <p class="item-title">Smart Downloads</p>\n      </ion-row>\n      <ion-row>\n        <p class="item-sub-title">Completed episodes will be deleted and replaced with the next episodes, only on Wi-Fi.</p>\n      </ion-row>\n    </ion-col>\n\n    <ion-col col-2>\n      <ion-toggle checked="false" color="netflixRed"></ion-toggle>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="!hasAnyDownloads" class="movies-shows-row">\n    <ion-col text-center>\n      <button ion-button clear color="netflixWhite">\n        <ion-icon name=\'md-download\'></ion-icon>\n      </button>\n\n      <p>Movies and TV show that you download appear here.</p>\n    </ion-col>\n  </ion-row>\n\n  <ion-row *ngIf="!hasAnyDownloads" class="find-downloads-row">\n    <ion-col text-center>\n      <button ion-button icon-start color="netflixWhite" (click)="goToAvailableDownloads()">\n        FIND SOMETHING TO DOWNLOAD\n      </button>\n    </ion-col>\n  </ion-row>\n\n  <div *ngIf="hasAnyDownloads">\n    <div padding>\n      <ion-segment color="netflixRed" [(ngModel)]="downloadType">\n        <ion-segment-button value="movies">\n          Movies\n        </ion-segment-button>\n\n        <ion-segment-button value="tvShows">\n          Tv Shows\n        </ion-segment-button>\n      </ion-segment>\n    </div>\n\n    <div [ngSwitch]="downloadType">\n      <div *ngSwitchCase="\'movies\'">\n        <ion-list>\n          <ion-item *ngFor="let movieDownloadItem of movieDownloadItems">\n            <img item-start src="{{movieDownloadItem.picture}}">\n\n            <ion-row>\n              <ion-col text-center>\n                <p class="ellipsis">{{movieDownloadItem.name}}</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col text-center>\n                <button (click)="playMovie(movieDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-play"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col text-center>\n                <button (click)="deleteMovie(movieDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </div>\n\n      <div *ngSwitchCase="\'tvShows\'">\n        <ion-list>\n          <ion-item *ngFor="let episodesDownloadItem of episodesDownloadItems">\n            <img item-start src="{{episodesDownloadItem.picture}}">\n\n            <ion-row>\n              <ion-col text-center>\n                <p class="ellipsis">{{episodesDownloadItem.name}}</p>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n              <ion-col text-center>\n                <button (click)="playEpisode(episodesDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-play"></ion-icon>\n                </button>\n              </ion-col>\n\n              <ion-col text-center>\n                <button (click)="deleteEpisode(episodesDownloadItem)" ion-button icon-only clear>\n                  <ion-icon name="md-trash"></ion-icon>\n                </button>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n        </ion-list>\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\downloads\downloads.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_streaming_media__["a" /* StreamingMedia */]])
    ], DownloadsPage);
    return DownloadsPage;
}());

//# sourceMappingURL=downloads.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_forgot_password_forgot_password_module__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_search_search__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_coming_soon_coming_soon__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_downloads_downloads__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sign_in_sign_in__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_forgot_password_forgot_password__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_sign_in_sign_in_module__ = __webpack_require__(296);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up_module__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_streaming_media__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_plus__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_twitter_connect__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_storage__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_ComingSoonService__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_HomeScreenService__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_MoviesService__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_TvShowsService__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_CategoriesService__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_DownloadService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_embed_video__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_ngx_embed_video___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_ngx_embed_video__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_common_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_sqlite__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng_socket_io__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ng_socket_io___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_ng_socket_io__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__services_ChatService__ = __webpack_require__(276);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyA16S38r7aWz0FJBlZf5c3RVyyPYOkaXY0",
    authDomain: "cvivo-84315.firebaseapp.com",
    databaseURL: "https://cvivo-84315.firebaseio.com",
    projectId: "cvivo-84315",
    storageBucket: "cvivo-84315.appspot.com",
    messagingSenderId: "818528881307",
    timestampsInSnapshots: true
};
var config = { url: 'https://chatcvivotest.herokuapp.com/', options: {} };
__WEBPACK_IMPORTED_MODULE_26_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_39__angular_common_http__["HttpClientModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_38_ngx_embed_video__["EmbedVideo"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_41_ng_socket_io__["SocketIoModule"].forRoot(config),
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: true
                }, {
                    links: [
                        { loadChildren: '../pages/coming-soon/coming-soon.module#ComingSoonPageModule', name: 'ComingSoonPage', segment: 'coming-soon', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/downloads/downloads.module#DownloadsPageModule', name: 'DownloadsPage', segment: 'downloads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/grid-list/grid-list.module#GridListPageModule', name: 'GridListPage', segment: 'grid-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/horizontal-list/horizontal-list.module#HorizontalListPageModule', name: 'HorizontalListPage', segment: 'horizontal-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/movie-details/movie-details.module#MovieDetailsPageModule', name: 'MovieDetailsPage', segment: 'movie-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mylist/mylist.module#MylistPageModule', name: 'MylistPage', segment: 'mylist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule', name: 'NotificationsPage', segment: 'notifications', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-details/show-details.module#ShowDetailsPageModule', name: 'ShowDetailsPage', segment: 'show-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/users/users.module#UsersPageModule', name: 'UsersPage', segment: 'users', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/video-playback/video-playback.module#VideoPlaybackPageModule', name: 'VideoPlaybackPage', segment: 'video-playback', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_25__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_28_angularfire2_firestore__["AngularFirestoreModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_sign_in_sign_in_module__["SignInPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_sign_up_sign_up_module__["SignUpPageModule"],
                __WEBPACK_IMPORTED_MODULE_1__pages_forgot_password_forgot_password_module__["ForgotPasswordPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_coming_soon_coming_soon__["a" /* ComingSoonPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_downloads_downloads__["a" /* DownloadsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_sign_in_sign_in__["a" /* SignInPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_forgot_password_forgot_password__["a" /* ForgotPasswordPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_streaming_media__["a" /* StreamingMedia */],
                __WEBPACK_IMPORTED_MODULE_30__services_AuthService__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_31__services_ComingSoonService__["a" /* ComingSoonService */],
                __WEBPACK_IMPORTED_MODULE_32__services_HomeScreenService__["a" /* HomeScreenService */],
                __WEBPACK_IMPORTED_MODULE_33__services_MoviesService__["a" /* MoviesService */],
                __WEBPACK_IMPORTED_MODULE_34__services_TvShowsService__["a" /* TvShowsService */],
                __WEBPACK_IMPORTED_MODULE_35__services_CategoriesService__["a" /* CategoriesService */],
                __WEBPACK_IMPORTED_MODULE_36__services_UserService__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_37__services_DownloadService__["a" /* DownloadService */],
                __WEBPACK_IMPORTED_MODULE_42__services_ChatService__["a" /* ChatService */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_twitter_connect__["a" /* TwitterConnect */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_0__services_VimeoService__["a" /* VimeoService */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComingSoon; });
var ComingSoon = (function () {
    function ComingSoon() {
    }
    return ComingSoon;
}());

//# sourceMappingURL=ComingSoon.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DownloadItem; });
var DownloadItem = (function () {
    function DownloadItem() {
    }
    return DownloadItem;
}());

//# sourceMappingURL=DownloadItem.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(name, picture) {
        this.name = name;
        this.picture = picture;
    }
    return Category;
}());

//# sourceMappingURL=Category.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfo; });
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

//# sourceMappingURL=UserInfo.js.map

/***/ }),

/***/ 547:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 554:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeScreenGroupItem; });
var HomeScreenGroupItem = (function () {
    function HomeScreenGroupItem() {
    }
    return HomeScreenGroupItem;
}());

//# sourceMappingURL=HomeScreenGroupItem.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Season; });
var Season = (function () {
    function Season() {
    }
    return Season;
}());

//# sourceMappingURL=Season.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Episode; });
var Episode = (function () {
    function Episode() {
    }
    return Episode;
}());

//# sourceMappingURL=Episode.js.map

/***/ }),

/***/ 557:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItem; });
var SearchItem = (function () {
    function SearchItem() {
    }
    return SearchItem;
}());

//# sourceMappingURL=SearchItem.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_first__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AuthService = (function () {
    function AuthService(alertCtrl, afAuth, platform, fb, googlePlus, twitter) {
        var _this = this;
        this.alertCtrl = alertCtrl;
        this.afAuth = afAuth;
        this.platform = platform;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.twitter = twitter;
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.uid = user.uid;
            }
            else {
                _this.uid = null;
            }
        });
    }
    AuthService.prototype.signInWithFacebookPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.fb
                .login(["email"])
                .then(function (res) {
                var facebookCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider.credential(res.authResponse.accessToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(facebookCredential)
                    .then(function (res) { }, function (err) {
                    console.error("Error: ", err);
                    throw err;
                });
            })
                .catch(function (error) {
                throw error;
            });
        }
        else {
            return this.signInWithFacebookWeb();
        }
    };
    AuthService.prototype.signInWithFacebookWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].FacebookAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGooglePlugin = function () {
        if (this.platform.is("cordova")) {
            return this.googlePlus
                .login({
                webClientId: "818528881307-mhakvit2ptfdo37bc7lrmotifrjr5cj3.apps.googleusercontent.com",
                offline: true
            })
                .then(function (res) {
                var googleCredential = __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider.credential(res.idToken);
                __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]()
                    .signInWithCredential(googleCredential)
                    .then(function (response) {
                    console.log("Firebase success: " + JSON.stringify(response));
                });
            }, function (err) {
                console.error("Error: ", err);
                throw err;
            });
        }
        else {
            return this.signInWithGoogleWeb();
        }
    };
    AuthService.prototype.signInWithGoogleWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GoogleAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithTwitterPlugin = function () {
        if (this.platform.is("cordova")) {
            return this.twitter.login().then(function (result) {
                console.log("Successful login!");
                console.log(result);
            }, function (error) {
                console.error("Error logging in");
                console.error(error);
                throw error;
            });
        }
        else {
            return this.signInWithTwitterWeb();
        }
    };
    AuthService.prototype.signInWithTwitterWeb = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].TwitterAuthProvider())
            .then(function (res) { }, function (err) {
            console.error("Error: ", err);
            throw err;
        });
    };
    AuthService.prototype.signInWithGithub = function () {
        return this.afAuth.auth
            .signInWithPopup(new __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"].GithubAuthProvider())
            .then(function (res) { });
    };
    AuthService.prototype.registerUser = function (email, password) {
        return this.afAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (res) {
            return res;
        })
            .catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signIn = function (email, password) {
        return this.afAuth.auth
            .signInWithEmailAndPassword(email, password).then(function (res) {
            return res;
        }).catch(function (error) {
            throw error;
        });
    };
    AuthService.prototype.signOut = function () {
        __WEBPACK_IMPORTED_MODULE_2_firebase__["auth"]().signOut();
    };
    AuthService.prototype.forgotPassword = function (email) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_firebase__["app"]()
            .auth()
            .sendPasswordResetEmail(email)
            .then(function (s) {
            var alert = _this.alertCtrl.create({
                title: "Contraseña restablecida",
                subTitle: "Revisa el correo para cambiar tu contraseña.",
                buttons: ["Entendido"]
            });
            alert.present();
        })
            .catch(function (error) {
            var errorTxt = '';
            switch (error.code) {
                case 'auth/invalid-email':
                    errorTxt = 'El correo no tiene el formato correcto.';
                    break;
                case 'auth/user-not-found':
                    errorTxt = 'Este usuario no existe en nuestros registros.';
                    break;
                default:
                    break;
            }
            var alert = _this.alertCtrl.create({
                title: "Error",
                subTitle: errorTxt,
                buttons: [
                    {
                        text: 'Cerrar',
                        role: 'cancel',
                        cssClass: 'btnalert-cancel',
                        handler: function (data) {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        cssClass: 'btnalert-ok',
                        handler: function (data) {
                        }
                    }
                ]
            });
            alert.present();
            throw error;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_twitter_connect__["a" /* TwitterConnect */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=AuthService.js.map

/***/ }),

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_AuthService__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_UserService__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__ = __webpack_require__(93);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, authService, userService, downloadService, zone) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.authService = authService;
        this.userService = userService;
        this.downloadService = downloadService;
        this.zone = zone;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_sign_in_sign_in__["a" /* SignInPage */];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
        this.downloadService.load();
        this.authService.afAuth.authState.subscribe(function (user) {
            console.log(user);
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                // this.userService.addUser(user);
                _this.zone.run(function () {
                    _this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_tabs_tabs__["a" /* TabsPage */];
                });
            }
        }, function (error) {
            console.error(JSON.stringify(error));
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_6__services_UserService__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_7__services_DownloadService__["a" /* DownloadService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TvShow; });
var TvShow = (function () {
    function TvShow() {
    }
    return TvShow;
}());

//# sourceMappingURL=TvShow.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Movie; });
var Movie = (function () {
    function Movie() {
    }
    return Movie;
}());

//# sourceMappingURL=Movie.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tabs_tabs__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_AuthService__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var SignInPage = (function () {
    function SignInPage(navCtrl, viewCtrl, loadingCtrl, authService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.passwordType = 'password';
        this.passwordIcon = 'eye-off';
        this.loginData = { email: "", password: "" };
    }
    SignInPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SignInPage");
    };
    /**
     * Funcion para intercabiar el tipo de input de las contraseñas, para poder revelar y ocultar la  contraseña.
     */
    SignInPage.prototype.hideShowPassword = function () {
        this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
        this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
    };
    ;
    /**
     * Funcion para realizar el inicio de sesion en firebase auth, se utiliza el metodo signIn() de authService, retorna resolve o reject.
     */
    SignInPage.prototype.signIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var loading;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadingCtrl.create({
                            spinner: "bubbles",
                            content: "Logging in..."
                        });
                        loading.present();
                        return [4 /*yield*/, this.authService
                                .signIn(this.loginData.email, this.loginData.password)
                                .then(function (x) {
                                loading.dismiss();
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__tabs_tabs__["a" /* TabsPage */]);
                            }, function (error) {
                                loading.dismiss();
                                loading.dismiss();
                                switch (error.code) {
                                    case 'auth/invalid-email':
                                        _this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co', 'Correo Invalido');
                                        break;
                                    case 'auth/user-disabled':
                                        _this.showAlert('Este usuario esta suspendido.', 'Usuario deshabilitado');
                                        break;
                                    case 'auth/user-not-found':
                                        _this.showAlert('No encontramos este usuario en nuestros registros. ', 'Usuario no existe');
                                        break;
                                    case 'auth/wrong-password':
                                        _this.showAlert('La contraseña escrita es incorrecta  . ', 'Contraseña incorrecta');
                                        break;
                                    default:
                                        break;
                                }
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    /**
     * Funcion para ir a la pagina de registro
     */
    SignInPage.prototype.goToSignUp = function () {
        if (this.navCtrl.canGoBack()) {
            this.viewCtrl.dismiss();
        }
        else {
            this.navCtrl.push("SignUpPage");
        }
    };
    /**
     * Funcion para incluir en el stack de navegacion la pagina de recuperar contraseña
     */
    SignInPage.prototype.openForgotPass = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    SignInPage.prototype.showAlert = function (message, title) {
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'btnalert-cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ok',
                    cssClass: 'btnalert-ok',
                    handler: function (data) {
                    }
                }
            ]
        }).present();
    };
    ;
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-sign-in",template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\sign-in\sign-in.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      <img src="assets/imgs/netflix-logo.png">\n    </ion-title>\n\n    <ion-buttons right>\n      <button class="help" ion-button clear>HELP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="no-scroll" text-center padding>\n\n    \n  <ion-row>\n    <p class="sign-in-title">Inicio de sesión</p>\n\n    <ion-item>\n      <ion-label floating>Correo</ion-label>\n      <ion-input type="text" [(ngModel)]="loginData.email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label floating>Contraseña</ion-label>\n      <ion-input  [type]="passwordType" clearOnEdit="false" [(ngModel)]="loginData.password"></ion-input>\n      <ion-icon item-end [name]="passwordIcon" class="passwordIcon" (tap)=\'hideShowPassword()\' color="netflixRed"></ion-icon>\n    </ion-item>\n\n    <button color="netflixRed" ion-button round full (click)="signIn()">Iniciar sesión</button>\n  </ion-row>  \n\n  <ion-row style="height: 20%; margin-top: 15%;">\n    <ion-col>\n      <p (click)="openForgotPass()">¿Olvidaste tu contraseña?</p>\n      <p (click)="goToSignUp()">¿Nuevo en Cvivo?\n        <strong>Registrate ahora.</strong>\n      </p>\n    </ion-col>\n  </ion-row>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\sign-in\sign-in.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__services_AuthService__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__coming_soon_coming_soon__["a" /* ComingSoonPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\tabs\tabs.html"*/'<ion-tabs color="netflixBlack">\n  <ion-tab [root]="tab1Root" tabTitle="Inicio" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Buscar" tabIcon="md-search"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Parrilla" tabIcon="md-laptop"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Perfil" tabIcon="md-person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"C:\Users\CUN\Desktop\OTT_CEBIAC\ionNetflixMobile\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[343]);
//# sourceMappingURL=main.js.map