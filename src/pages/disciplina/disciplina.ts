import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DisciplinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-disciplina',
  templateUrl: 'disciplina.html',
})
export class DisciplinaPage {

  disciplina1: Array<{title: string, icon: string}>;
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.disciplina1 = [
      {title: 'MAJ MARANHÃO', icon: 'school'},
      {title: '07:30 - 08:20', icon: 'time'},
      {title: '4014', icon: 'pin'},
      {title: '50.8 HORAS', icon: 'heart'},
      {title: '3 PONTOS DE FALTA', icon: 'alert'},
      {title: '89% DE PRESENÇA', icon: 'stats'},
      {title: '70 AULAS PREVISTAS', icon: 'bookmarks'}
    ];
  }

}
