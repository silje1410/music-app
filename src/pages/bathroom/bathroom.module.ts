import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BathroomPage } from './bathroom';

@NgModule({
  declarations: [
    BathroomPage,
  ],
  imports: [
    IonicPageModule.forChild(BathroomPage),
  ],
})
export class BathroomPageModule {}
