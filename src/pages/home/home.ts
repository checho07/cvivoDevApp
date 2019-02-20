import { UserInfo } from './../../data/UserInfo';
import { ChatService } from './../../services/ChatService';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component } from "@angular/core";
import {
  NavController,
  LoadingController,
  Platform,
  AlertController,
  ToastController
} from "ionic-angular";
import {
  StreamingMedia,
  StreamingVideoOptions
} from "@ionic-native/streaming-media";
import { HomeScreenService } from "../../services/HomeScreenService";

import { Helper } from "../../data/Helper";
import { HomeScreenGroupItem } from "../../data/HomeScreenGroupItem";
import { HomeScreenGroup } from "../../data/HomeScreenGroup";
import { Movie } from "../../data/Movie";
import { TvShow } from "../../data/TvShow";
import {  EmbedVideoService } from 'ngx-embed-video';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  homeScreenGroups: HomeScreenGroup[] = [];
  iframe_html: any;
  
  segementHome = 'list';
  chatEnable:boolean = false;
  messages = [];
  nickname = '';
  message = '';

  constructor(
    private navCtrl: NavController,
    private streamingMedia: StreamingMedia,
    private loadingCtrl: LoadingController,
    private homeScreenService: HomeScreenService,
    private platform: Platform,
    private alertCtrl: AlertController,
    private db:AngularFirestore,
    private embedService: EmbedVideoService,
    private alertController: AlertController,
    private chatService : ChatService,
    private toastCtrl: ToastController
  ) {}

  ionViewDidEnter(){ 
      this.gethomeVideo();
      this.getChatSection();
  };

  getChatSection(){
    this.db.collection('Config').valueChanges().subscribe(res=>{
      
      this.chatEnable =res[0]['Vivo']; 

      this.segementHome = this.chatEnable === true ? 'chat' : 'list';
      
      if(this.chatEnable){

        this.chatService.joinChat().then((nickname: UserInfo) => {
          this.nickname = nickname.name;
          this.chatService.getMessages().subscribe(message => {
            this.messages.push(message)
            console.log(message)
          })
        })         
      }else{
        this.chatService.disconnect();
      };  
      
     
    },err => this.showAlert(err,'Error FbConfig')); 
  
  }

   gethomeVideo(){
      const promise = new Promise((resolve,reject)=>{

        this.db.collection('Config').valueChanges().subscribe(res=>{ 
          
         this.iframe_html = this.embedService.embed_vimeo(res[0]['Idvivo'],{
            query:{autoplay:1, loop:1, color:'ffff', portrait: 0},                
            attr: { width:'100%', height: 200 }                 
          });
          resolve({videoConfig: res})
        },err =>{ reject(err)}); 
      })
      return promise;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");

    this.getHomeScreenGroups();
  }

  getHomeScreenGroups() {
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Loading Home..."
    });

    loading.present();

    this.homeScreenService.getHomeScreenGroups().then((result: any) => {
      this.homeScreenGroups = result.homeScreenGroups;

      this.homeScreenGroups.forEach(homeScreenGroup => {
        // Get home screen movies first
        this.homeScreenService
          .getHomeScreenGroupMovies(homeScreenGroup)
          .then((result: any) => {
            result.homeScreenGroupMovies.forEach((movie: Movie) => {
              var movieGroupItem = new HomeScreenGroupItem();

              movieGroupItem.itemId = movie.movieId;
              movieGroupItem.picture = movie.picture;
              movieGroupItem.isMovie = true;

              homeScreenGroup.groupItems.push(movieGroupItem);
            });

            // Then get home screen tv shows
            this.homeScreenService
              .getHomeScreenGroupTvShows(homeScreenGroup)
              .then((result: any) => {
                result.homeScreenGroupTvShows.forEach((tvShow: TvShow) => {
                  var movieGroupItem = new HomeScreenGroupItem();

                  movieGroupItem.itemId = tvShow.tvShowId;
                  movieGroupItem.picture = tvShow.picture;
                  movieGroupItem.isMovie = false;

                  homeScreenGroup.groupItems.push(movieGroupItem);
                });

                // Finally, shuffle them
                homeScreenGroup.groupItems = Helper.shuffle(
                  homeScreenGroup.groupItems
                );
              });
          });
      });

      loading.dismiss();
    });
  }

  goToGroupItemDetails(groupItem: HomeScreenGroupItem) {
    if (groupItem.isMovie) {
      this.navCtrl.push("MovieDetailsPage", { movieId: groupItem.itemId });
    } else {
      this.navCtrl.push("ShowDetailsPage", { tvShowId: groupItem.itemId });
    }
  }

  playVideoTrailer() {
    if (!this.platform.is("cordova")) {
      let alert = this.alertController.create({
        title: "Run on device",
        subTitle: "This feature is only available on a device!",
        buttons: ["Dismiss"]
      });

      alert.present();
      return;
    }

    let options: StreamingVideoOptions = {
      successCallback: () => {
        console.log("Video played");
      },
      errorCallback: e => {
        console.log("Error streaming");
      },
      orientation: "landscape",
      shouldAutoClose: true,
      controls: true
    };

    this.streamingMedia.playVideo(
      "https://firebasestorage.googleapis.com/v0/b/ionnetflix-72e25.appspot.com/o/Watch%20the%20Black%20Lightning%20Trailer.mp4?alt=media&token=3331cd39-f38b-4add-8d83-cec4c213b571",
      options
    );
  };

  sendMessage(){
    this.chatService.sendMessage(this.message)
    this.message = '';
  }

   doRefresh(refresher) {
    this.gethomeVideo().then(res =>{
      console.log(res)
      refresher.complete();
    },err => {
      this.showAlert(err,'Error al cargar')
      refresher.complete();
    }).catch(()=> refresher.complete())

    setTimeout(() => {
      refresher.complete()
    }, 3000);
   
  };

  showToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000      
    });
    toast.present();
  }

  showAlert(message,title){
    let alert = this.alertCtrl.create({
      title:title,
      message:message,
      buttons :[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'btnalert-cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',  
          cssClass: 'btnalert-ok',
          handler: data =>{            
          }
         }
      ]
    }).present();
  };

  

}
