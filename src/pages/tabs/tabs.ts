import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NoticiasPage, PoductosPage } from '../../pages/routes';
import {HomePage} from "../home/home";

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  tab1: any = HomePage;
  tab2: any = NoticiasPage;
  tab3: any = PoductosPage;


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
