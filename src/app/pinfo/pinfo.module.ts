import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PinfoPageRoutingModule } from './pinfo-routing.module';

import { PinfoPage } from './pinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PinfoPageRoutingModule
  ],
  declarations: [PinfoPage]
})
export class PinfoPageModule {}
