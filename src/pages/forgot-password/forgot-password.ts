import { LoadingController } from 'ionic-angular';
import { AuthService } from './../../services/AuthService';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

  email:string ="";
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private authService: AuthService,
              private loadingCtrl:LoadingController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

/**
 * Funciom para restablecer contraseña de usuario mediante firebase, se enviara un email al correo ingresado.
 * @param email correo ingresado al cual se enviara el correo con instrucciones.
 */
  resetPassword(email){    
    var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Cargando..."
    });

    loading.present();
    this.authService.forgotPassword(email).then(()=>{
       loading.dismiss();
      this.email = '';
      this.navCtrl.setRoot('SignInPage');
    }).catch(()=>{
      loading.dismiss();
    });
  }

}
