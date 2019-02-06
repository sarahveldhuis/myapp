import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ClassificacaoNewPage } from './classificacao-new';
import { ClassificacaoNewService } from './classificacao-new.service';

@NgModule({
  declarations: [
    ClassificacaoNewPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassificacaoNewPage),
  ],
  providers:[
    ClassificacaoNewService
  ],
})
export class ClassificacaoNewPageModule {}