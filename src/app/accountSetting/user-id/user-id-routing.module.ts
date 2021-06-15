import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserIDPage } from './user-id.page';

const routes: Routes = [
  {
    path: '',
    component: UserIDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserIDPageRoutingModule {}
