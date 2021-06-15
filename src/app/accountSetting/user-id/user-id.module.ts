import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserIDPageRoutingModule } from './user-id-routing.module';

import { UserIDPage } from './user-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserIDPageRoutingModule
  ],
  declarations: [UserIDPage]
})
export class UserIDPageModule {}
