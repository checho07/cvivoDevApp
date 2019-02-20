import { TabsPage } from './../tabs/tabs';
import { Component, SimpleChanges, Input} from "@angular/core";
import {
  IonicPage,
  NavController,
  AlertController,
  LoadingController
} from "ionic-angular";
import { AuthService } from "../../services/AuthService";
import { AngularFireAuth } from "angularfire2/auth";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SQLite, SQLiteObject  } from "@ionic-native/sqlite";
import { AngularFirestore } from 'angularfire2/firestore';


export interface user {
  name:string;
  email:string;
  password: string;
}

@IonicPage()
@Component({
  selector: "page-sign-up",
  templateUrl: "sign-up.html"
})
export class SignUpPage   {

  signUpSegment: string = "cancel";
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  public signUpForm : FormGroup;
  errors = {correo:false,confirmPass:false,minLength:false}

  constructor(
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth,
    public afs : AngularFirestore,
    private sqlite: SQLite,
    private loadingCtrl: LoadingController,
    private formBuilder: FormBuilder,
    
  ) {
    let emailPattern = "^[a-zA-Z0-9._%+-]+@cun.edu.co";

    this.signUpForm = this.formBuilder.group({
      name:['',Validators.required],
      email:["",[Validators.required, Validators.pattern(emailPattern)]],
      password: ['', Validators.required],
      password2: ['', Validators.required]
    },{validator:this.checkPasswords});

   
    
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignUpPage");
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


  checkPasswords(group: FormGroup) { 
  let pass = group.controls.password.value;
  let confirmPass = group.controls.password2.value;

    return pass === confirmPass ? true : { notSame: true }     
  }

  hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }

  signIn() {
    this.navCtrl.push("SignInPage");
  }
 
/**
 * Funcion para crear un registro de nuevo usuario en firebase, 
 * dentro de esta funcion se encuentran subfunciones para realizar el regstro
 */
  async signUp(){

    let user:user = this.signUpForm.value;

  var loading = this.loadingCtrl.create({
      spinner: "bubbles",
      content: "Registrando..."
    });
    loading.present();
  
    try{

      /**
       * funcion de angularFirebase para crear un nuevo usuario con email / password 
       */      
      this.afAuth.auth   
      .createUserWithEmailAndPassword( user.email, user.password)
        .then(userResult =>{
          loading.dismiss();
          let email = user.email;
          let name = user.name;
          let uid = userResult.user.uid;
          let newUser = userResult.additionalUserInfo.isNewUser;

          /**
           * Funcion para crear documento en firebase 
           * con los datos del nuevo usuario (nombre, email, uid).
           */
          this.afs.collection('users')
          .doc(uid).set({email,name,uid})
          .then(fsRes=>{
            console.log(fsRes)
            if(newUser){
              this.navCtrl.insert(0,TabsPage);
              this.navCtrl.popToRoot();
            }
          },err =>{
            loading.dismiss();
            this.showAlert(err,'Error AFST')
          })
        
        },err =>{
          loading.dismiss();
          switch (err.code) {
            case 'auth/invalid-email':
            this.showAlert('Revisa el formato del correo ejemplo@cun.edu.co','Correo Invalido')
            break;
              case 'auth/email-already-in-use':
              this.showAlert('Este correo ya se encuentra registrado','Correo en uso')
              break;
             case 'auth/operation-not-allowed':
              this.showAlert('Este usuario se encuetra inactivo. ','Usuario inactivo')
              break;
            case 'auth/weak-password':
              this.showAlert('Esta contraseña no cumple con los requerimientos de seguridad  . ','Contraseña Insegura')
              break;        
            default:
              break;
          }
         })

    }catch(err){
      this.showAlert(err,'Error FnSgup');
    }
    
  };



 
}


