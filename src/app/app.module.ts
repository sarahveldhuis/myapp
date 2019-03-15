import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { ValidacaoPage } from './../pages/validacao/validacao';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { BoletimPage } from '../pages/boletim/boletim';
import { ConfiguracoesPage } from './../pages/configuracoes/configuracoes';
import { IniciativasPage } from './../pages/iniciativas/iniciativas';
import { MensagensPage } from './../pages/mensagens/mensagens';
import { HorarioPage } from './../pages/horario/horario';
import { ClassificacaoPage } from './../pages/classificacao/classificacao';
import { ClassificacaoNewPage } from './../pages/classificacao-new/classificacao-new';
import { CalendarioPage } from './../pages/calendario/calendario';
import { DisciplinaPage } from './../pages/disciplina/disciplina';
import { Calendar } from '@ionic-native/calendar';
import { ImeJuniorPage } from './../pages/ime-junior/ime-junior';
import { SenhaPage } from '../pages/senha/senha';
import { InfoPage } from '../pages/info/info';


import { BoletimService } from './../pages/boletim/boletim.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicoPage } from '../pages/servico/servico';

@NgModule({
  declarations: [
    MyApp,
    ValidacaoPage,
    HomePage,
    ListPage,
    CalendarioPage, 
    BoletimPage,
    ClassificacaoPage,
    ClassificacaoNewPage,
    HorarioPage,
    MensagensPage,
    ServicoPage,
    IniciativasPage, 
    ConfiguracoesPage,
    DisciplinaPage,
    ImeJuniorPage,
    SenhaPage,
    InfoPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ValidacaoPage,
    HomePage,
    ListPage,
    CalendarioPage,
    BoletimPage, 
    ClassificacaoPage,
    ClassificacaoNewPage,
    HorarioPage,
    MensagensPage,
    ServicoPage,
    IniciativasPage, 
    ConfiguracoesPage,
    DisciplinaPage,
    ImeJuniorPage,
    SenhaPage,
    InfoPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Calendar,
    BoletimService,
  ]
})
export class AppModule {}
