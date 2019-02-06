import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ImeJuniorPage } from './../ime-junior/ime-junior';

@Component({
  selector: 'page-iniciativas',
  templateUrl: 'iniciativas.html',
})
export class IniciativasPage {

  constructor(public navCtrl: NavController) {

  }

  imeJunior = () => {
    this.navCtrl.push(ImeJuniorPage);
  }
}