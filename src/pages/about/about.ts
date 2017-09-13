import { Component } from '@angular/core';
import { NavController, PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController, private popoverCtrl: PopoverController) {

  }
  showPopover(ev){
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: ev
    });
  }

}
