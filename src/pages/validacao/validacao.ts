import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from './../home/home';

/**
 * Generated class for the ValidacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-validacao',
  templateUrl: 'validacao.html',
})
export class ValidacaoPage {


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  homePage(){
    this.navCtrl.setRoot(HomePage);
  }

}
