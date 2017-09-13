import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { PopoverPage } from '../popover/popover';
import { CardDetailsPage } from '../card-details/card-details';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
})
export class CardsPage {

  items: FirebaseListObservable<any[]>;
  services: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private popoverCtrl: PopoverController, private fireData: AngularFireDatabase) {
    this.items = this.fireData.list('cards');
    this.services = this.fireData.list('Services');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardsPage');
  }

  goToCard(item){
    this.navCtrl.push(CardDetailsPage ,{item: item});
  }

  showPopover(ev){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

  // registerForClass() {
  //   this.fireData.database
  // }

}
