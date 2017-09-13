import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';

@IonicPage()
@Component({
  selector: 'page-popover',
  templateUrl: 'popover.html',
})
export class PopoverPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private fireAuth: AngularFireAuth
  ) {}

  logOut() {
    this.fireAuth.auth.signOut();
    this.navCtrl.push(LoginPage);
  }



}
