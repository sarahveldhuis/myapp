import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-servico',
  templateUrl: 'servico.html'
})
export class ServicoPage {
  slideOpts = {
    effect: 'flip'
  };

  constructor(public navCtrl: NavController) {

  }

}