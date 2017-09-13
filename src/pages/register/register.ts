import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  
  title: string;
  subTitle: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private fireAuth: AngularFireAuth) {
  }

  showAlert(heading: string, message: string) {
    let alert = this.alertCtrl.create({
      title: heading,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }


  signUp(email: string, password: string, confirmPassword: string){
    if (email != null && password != null && confirmPassword != null){
      if (password == confirmPassword){
      this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
      this.navCtrl.push(LoginPage);
      }
      else{
        this.title = 'Invalid Passwords';
        this.subTitle = 'Passwords don\'t match. Try again.';
        this.showAlert(this.title, this.subTitle);
      }
    }
    else {
      this.title = 'Empty Fields';
      this.subTitle = 'Please fill in all fields';      
      this.showAlert(this.title, this. subTitle);
    }

  }

  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
