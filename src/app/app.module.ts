import { VimeoService } from './../services/VimeoService';
import { ForgotPasswordPageModule } from './../pages/forgot-password/forgot-password.module';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SearchPage } from '../pages/search/search';
import { ComingSoonPage } from '../pages/coming-soon/coming-soon';
import { DownloadsPage } from '../pages/downloads/downloads';
import { ProfilePage } from '../pages/profile/profile';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { SignInPage } from '../pages/sign-in/sign-in';
import { ForgotPasswordPage } from './../pages/forgot-password/forgot-password';

import { SignInPageModule } from '../pages/sign-in/sign-in.module';
import { SignUpPageModule } from '../pages/sign-up/sign-up.module';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StreamingMedia } from '@ionic-native/streaming-media';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { TwitterConnect } from '@ionic-native/twitter-connect';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from "@ionic-native/file";
import { IonicStorageModule } from '@ionic/storage';

import firebase from "firebase";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from "angularfire2/auth";

import { AuthService } from '../services/AuthService';
import { ComingSoonService } from '../services/ComingSoonService';
import { HomeScreenService } from '../services/HomeScreenService';
import { MoviesService } from '../services/MoviesService';
import { TvShowsService } from '../services/TvShowsService';
import { CategoriesService } from '../services/CategoriesService';
import { UserService } from '../services/UserService';
import { DownloadService } from '../services/DownloadService';
import { EmbedVideo } from 'ngx-embed-video';
import { HttpClientModule } from '@angular/common/http';
import { SQLite } from '@ionic-native/sqlite';
import { SocketIoModule,SocketIoConfig} from 'ng-socket-io';
import { ChatService} from '../services/ChatService';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyA16S38r7aWz0FJBlZf5c3RVyyPYOkaXY0",
  authDomain: "cvivo-84315.firebaseapp.com",
  databaseURL: "https://cvivo-84315.firebaseio.com",
  projectId: "cvivo-84315",
  storageBucket: "cvivo-84315.appspot.com",
  messagingSenderId: "818528881307",
  timestampsInSnapshots: true
};
const config: SocketIoConfig = {url:'https://chatcvivotest.herokuapp.com/',options:{}};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SearchPage,
    ComingSoonPage,
    DownloadsPage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    EmbedVideo.forRoot(),
    SocketIoModule.forRoot(config),
    IonicModule.forRoot(MyApp, {
      tabsHideOnSubPages: true
    }),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SignInPageModule,
    SignUpPageModule,
    ForgotPasswordPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SearchPage,
    ComingSoonPage,
    DownloadsPage,
    ProfilePage,
    TabsPage,
    SignUpPage,
    SignInPage,
    ForgotPasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    StreamingMedia,
    AuthService,
    ComingSoonService,
    HomeScreenService,
    MoviesService,
    TvShowsService,
    CategoriesService,
    UserService,
    DownloadService,
    ChatService,
    Facebook,
    GooglePlus,
    TwitterConnect,
    FileTransfer,     
    File,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    VimeoService,

  ]
})
export class AppModule {}
