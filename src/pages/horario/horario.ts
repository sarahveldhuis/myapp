import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html'
})
export class HorarioPage {
  disciplina1: Array<{title: string, icon: string}>;
  disciplina2: Array<{title: string, icon: string}>;
  disciplina3: Array<{title: string, icon: string}>;
  disciplina4: Array<{title: string, icon: string}>;


  constructor(public navCtrl: NavController) {
    this.disciplina1 = [
      {title: 'Maj Maranhão', icon: 'school'},
      {title: '07:30 - 08:20', icon: 'time'},
      {title: '4014', icon: 'pin'},
    ];

    this.disciplina2 = [
      {title: 'Cel Lima Vaz', icon: 'school'},
      {title: '08:25 - 10:05', icon: 'time'},
      {title: 'anfiteatro', icon: 'pin'},
    ];

    this.disciplina3 = [
      {title: 'Maj Maranhão', icon: 'school'},
      {title: '10:25 - 11:20', icon: 'time'},
      {title: '4013', icon: 'pin'},
    ];

    this.disciplina4 = [
      {title: 'Maj Maranhão', icon: 'school'},
      {title: '11:25 - 12:10', icon: 'time'},
      {title: '4010', icon: 'pin'},
    ];
  }

}