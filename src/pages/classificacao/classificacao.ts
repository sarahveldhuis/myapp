import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ClassificacaoNewPage } from './../classificacao-new/classificacao-new';

/**
 * Generated class for the ClassificacaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classificacao',
  templateUrl: 'classificacao.html',
})
export class ClassificacaoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  classificacaoNewPage= () => {
    this.navCtrl.push(ClassificacaoNewPage);
  }


}
