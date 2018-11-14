import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ValidacaoPage } from './../pages/validacao/validacao';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CalendarioPage } from '../pages/calendario/calendario';
import { BoletimPage } from '../pages/boletim/boletim';
import { ClassificacaoPage } from '../pages/classificacao/classificacao';
import { HorarioPage } from '../pages/horario/horario';
import { MensagensPage } from '../pages/mensagens/mensagens';
import { ServicoPage } from '../pages/servico/servico';
import { IniciativasPage } from '../pages/iniciativas/iniciativas';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  selectedItem: any;
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ValidacaoPage;

  pages: Array<{title: string, icon: string, notif: number, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', icon: 'home', notif: 2, component: HomePage },
      { title: 'Calendário', icon: 'calendar', notif: 2, component: CalendarioPage },
      { title: 'Horário', icon: 'clock', notif: 2, component: HorarioPage },
      { title: 'Boletim', icon: 'school', notif: 0, component: BoletimPage },
      { title: 'Classificação', icon: 'ribbon', notif: 2, component: ClassificacaoPage },
      { title: 'Serviço', icon: 'person', notif: 2, component: ServicoPage },
      { title: 'Rancho', icon: 'restaurant', notif: 1, component: ListPage },
      { title: 'Iniciativas', icon: 'bulb', notif: 2, component: IniciativasPage },
      { title: 'Mensagens', icon: 'chatbubbles', notif: 2, component: MensagensPage },
      { title: 'Configurações', icon: 'settings', notif: 2, component: ConfiguracoesPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
