import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImeJuniorPage } from './ime-junior';

@NgModule({
  declarations: [
    ImeJuniorPage,
  ],
  imports: [
    IonicPageModule.forChild(ImeJuniorPage),
  ],
})
export class ImeJuniorPageModule {}
