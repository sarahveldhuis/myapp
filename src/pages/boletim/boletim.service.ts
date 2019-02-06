import { Injectable } from "@angular/core";

@Injectable()
export class BoletimService{

    constructor() {}

    getBoletim(){
        return [{semestre: "2018.2", disciplinas: [
            {
              title: "Cálculo IV",
              notas:[{title: 'VE', icon: 'flag', note: '7.6'},
                     {title: 'VC', icon: 'flag', note: '7.4'},
                     {title: 'VF', icon: 'flag', note: '7.5'},
                     {title: 'Média', icon: 'ribbon', note: '7.5'}]
            },
            {
              title: "Resitência dos Materiais",
              notas: [{title: 'VE', icon: 'flag', note: '6.5'},
                      {title: 'VC', icon: 'flag', note: '6.7'},
                      {title: 'VF', icon: 'flag', note: '6.6'},
                      {title: 'Média', icon: 'ribbon', note: '6.6'}]
            },
            {
              title: "Física",
              notas: [{title: 'VE', icon: 'flag', note: '5.3'},
                      {title: 'VC', icon: 'flag', note: '5.5'},
                      {title: 'VF', icon: 'flag', note: '5.4'},
                      {title: 'Média', icon: 'ribbon', note: '5.4'}]
            },
            {
              title: "Cálculo Numérico",
              notas:[{title: 'VE', icon: 'flag', note: '8.6'},
                     {title: 'VC', icon: 'flag', note: '8.2'},
                     {title: 'VF', icon: 'flag', note: '8.4'},
                     {title: 'Média', icon: 'ribbon', note: '8.4'}]
            }]
            
        }]
    }

}