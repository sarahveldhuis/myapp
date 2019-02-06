import { Injectable } from "@angular/core";

@Injectable()
export class ClassificacaoNewService{

    constructor() {}

    getClassificacaoNew(){
        return [{
            alunos:[
                {nome: 'Sarah Machado Veldhuis', 
                classif: '1', 
                especialidade: 'COMP', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.72'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '7.00'}]
                },
                {nome: 'Gabriel Vinícius', 
                classif: '2', 
                especialidade: 'COMP', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.40'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '6.976'}]
                },
                {nome: 'Gabriel Vinícius de Souza Silva', 
                classif: '2', 
                especialidade: 'COMP', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.40'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '6.719'}]
                },
                {nome: 'Daniel Martins de Carvaho', 
                classif: '3', 
                especialidade: 'MEC AUTO', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.34'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '6.671'}]
                },
                {nome: 'Ricardo Silveira Mendes', 
                classif: '4', 
                especialidade: 'ELETRICA', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.28'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '6.621'}]
                },
                {nome: 'Gabriel Laurentino Silva Henriques', 
                classif: '5', 
                especialidade: 'COMP', 
                curso:'CFG', 
                carreira: 'ATIVA', 
                notas:[
                    {title: 'MG', note: '8.240'}, 
                    {title: 'MM', note: '0.00'}, 
                    {title: "NCF", note: '7.418'}]
                }
            ]
            }]
        }

    }