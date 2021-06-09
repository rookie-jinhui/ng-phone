import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PinfoPage } from './pinfo.page';

const routes: Routes = [
  {
    path: '',
    component: PinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PinfoPageRoutingModule {}
