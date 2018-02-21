import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoductosPage } from './poductos';

@NgModule({
  declarations: [
    PoductosPage,
  ],
  imports: [
    IonicPageModule.forChild(PoductosPage),
  ],
})
export class PoductosPageModule {}
