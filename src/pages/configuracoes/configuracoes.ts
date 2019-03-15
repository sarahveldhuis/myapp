import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SenhaPage } from '../senha/senha';
import { InfoPage } from '../info/info';


@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  lista1: any[] = [
    {icon:"key", title: "SENHA"},

  ];
  lista2: any[] = [
    {icon: "person", title: "INFORMAÇÕES PESSOAIS"}
  ];
  constructor(public navCtrl: NavController) {

  }
  Senha(){
    this.navCtrl.push(SenhaPage);

  }
  Info(){
    this.navCtrl.push(InfoPage);

  }
}
