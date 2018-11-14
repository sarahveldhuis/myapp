import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { DisciplinaPage } from './../disciplina/disciplina';
import { BoletimService } from './boletim.service';

@Component({
  selector: 'page-boletim',
  templateUrl: 'boletim.html'
})
export class BoletimPage {
  boletim: any;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public boletimService: BoletimService) {

    this.boletim = this.boletimService.getBoletim();
      
  }
  
  disciplinaPage(){
    this.navCtrl.push(DisciplinaPage);
  }

}

