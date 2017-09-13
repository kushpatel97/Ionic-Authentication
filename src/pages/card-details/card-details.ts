import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-card-details',
  templateUrl: 'card-details.html',
})
export class CardDetailsPage {
  item;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = navParams.data.item;
  }
  

}
