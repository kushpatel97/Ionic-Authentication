import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {

  }
  showPopover(ev){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }
}
