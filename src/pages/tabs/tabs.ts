
import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CardsPage } from '../cards/cards';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CardsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
