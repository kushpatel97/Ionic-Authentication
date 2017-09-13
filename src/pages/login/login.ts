import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private fireAuth: AngularFireAuth) {

  }

  login(email: string, password: string) {
    const result = this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    if (result){
      this.navCtrl.setRoot(TabsPage);
    }
  }

  goToRegister() {
    this.navCtrl.push(RegisterPage);
  }

}
