import { VimeoService } from './../../services/VimeoService';
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
import { Observable, config } from 'rxjs';
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
  private event;

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
    private toastCtrl: ToastController,
    private VimeoService: VimeoService
  ) {

  }
  
  ionViewDidEnter(){ 
    this.getChatSection();
      
      
     
  };

  

  getHomeGroups(){
    this.VimeoService.getHomeScreenGroups().subscribe(res=>{
       
      this.homeScreenGroups = []
       
      let collection:any = res
      collection.forEach(element => {          
        let homeGropuModel = new HomeScreenGroup();
        homeGropuModel.name = element.name;
        homeGropuModel.groupId = element.metadata.connections.videos.uri;
        homeGropuModel.groupItems = [];
        this.homeScreenGroups.push(homeGropuModel)   
       });
      this.homeScreenGroups.forEach(element => {
        this.VimeoService.getHomeScreenGroupsVideos(element).subscribe(result=>{
          let videos:any = result
          console.log(result)
         
          videos.data.forEach(item => {
             let video = new HomeScreenGroupItem();
            video.name = item.name;
            video.picture = item.pictures.sizes[6].link_with_play_button;
            video.description = item.description;
            video.detailsPicture = item.pictures.sizes[3].link;
            video.movieId = item.uri.split('/')[2];

            element.groupItems.push(video)

          });
     
         
        })
      });   
    })
  }


 /**
  * Funcion para que el usuario al oprimir ENTER pueda enviar un mensaje
  * @param key codigo de la tecla presionada
  */
  keyPress(key){
    if( key === 13){
      this.sendMessage()
    }
  };

  /**
   * Funcion que sirve para obtener los mensajes de BD cuando el usuario cierra la aplicacion 
   */
  loadMessges(){
    if(this.messages.length === 0 )
    {
        this.db.collection('Config').valueChanges().subscribe(res=>{
          this.event = res[0]['chatEvent'];
          if(res[0]['Vivo'])
          {
            var docref = this.db.collection('chats').doc(this.event).collection('chatLog',ref => ref.orderBy('created'));         
            docref.get().subscribe(res =>{
            res.forEach(res=> this.messages.push(res.data()))
            })
          }      
      })
     }
  };

  /**
   * Funcion que se ejecuta cuando se activa la seccion del chat, al mismo tiempo
   * realiza la conexion con SOCKET.io, y llama la funcion getMessages() para obtener los mensajes del Socket
   */
  getChatSection(){
    
    this.db.collection('Config').valueChanges().subscribe(res=>{
      
      this.chatEnable =res[0]['Vivo']; 
      this.event = res[0]['chatEvent'];
      this.segementHome = this.chatEnable === true ? 'chat' : 'list';
      
      if(this.chatEnable)
      {
       
        if(this.nickname === '')
        {
         
          this.chatService.joinChat().then((nickname: UserInfo) => {                
            this.nickname = nickname.name;         
          })
          this.chatService.getMessages().subscribe(message => {  
            this.messages.push(message)  
           this.db.collection('chats').doc(this.event).collection('chatLog').doc('chatLog'+message['created']).set(message)     
            
          });
        }
               
      }else{
        console.log('disconetedchat')
        this.chatService.disconnect();
        this.nickname = '';
        this.messages = [];
      };        
     
    },err => this.showAlert(err,'Error FbConfig'));  
  };

  /**
   * Funcion que realiza consulta a BD para obtener ID del evento, para luego obtener el IFRAME
   * seguro para efectuar el INNERHTML en el DOM.
   */
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

  /**
   * Funcion que se ejecuta automaticamnete cuando la vista termina de cargar.
   */
  ionViewDidLoad() {
    console.log("ionViewDidLoad HomePage");
    // this.getHomeScreenGroups();
    
  var loading = this.loadingCtrl.create({
    spinner: "bubbles",
    content: "Registrando..."
  });
  loading.present();
  this.gethomeVideo().then(()=>{
    this.loadMessges();         
    this.getHomeGroups()
    setTimeout(() => {
     
      loading.dismiss();
    }, 2000);
  
  },err=>{
    loading.dismiss();
    this.showAlert(err,'Error de conexion')
  }); 
    
  }

/**
 * Funcion que envia un mensaje por meido de SOCKET.IO
 */
  sendMessage(){  
    this.chatService.sendMessage(this.message)   
 
    this.message = '';
  }

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

 
/**
 * Funcion que se ejecuta al hacer swipe down en la pantalla
 * para recargar el video 
 * @param refresher 
 */
   doRefresh(refresher) {  
      
    this.getHomeGroups()
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

  /**
   * Funcion para mostrar un toaster con cualuiqer mensaje
   * @param msg mensaje para mostrar en el toaster
   */
  showToast(msg){
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000      
    });
    toast.present();
  };

  /**
   * Funcion para mostrar una alerta personalizada
   * @param message mensaje para mostrar en el body de la alerta
   * @param title  titulo para mostrar en el encabezado de la alerta
   */
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
