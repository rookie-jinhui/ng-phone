import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserIdPageRoutingModule } from './user-id-routing.module';

import { UserIdPage } from './user-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserIdPageRoutingModule
  ],
  declarations: [UserIdPage]
})
export class UserIdPageModule {}
