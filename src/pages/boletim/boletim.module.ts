import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoletimPage } from './boletim';

import { BoletimService } from './boletim.service';

@NgModule({
  declarations: [
    BoletimPage,
  ],
  imports: [
    IonicPageModule.forChild(BoletimPage),
  ],
  providers:[
    BoletimService
  ],
})
export class BoletimPageModule {}
