import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ClassificacaoNewService } from './classificacao-new.service';

@Component({
  templateUrl: "classificacao-new.html",
})
export class ClassificacaoNewPage {

  public classificacao: any;

  constructor(public navCtrl: NavController, public classificacaoNewService: ClassificacaoNewService) {

    this.classificacao = this.classificacaoNewService.getClassificacaoNew();

  }

}