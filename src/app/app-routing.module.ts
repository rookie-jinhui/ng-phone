import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'button',
    loadChildren: () => import('./button/button.module').then( m => m.ButtonPageModule)
  },
  {
    path: 'pinfo',
    loadChildren: () => import('./pinfo/pinfo.module').then( m => m.PinfoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'newsinfo',
    loadChildren: () => import('./newsinfo/newsinfo.module').then( m => m.NewsinfoPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'registerstep1',
    loadChildren: () => import('./register/registerstep1/registerstep1.module').then( m => m.Registerstep1PageModule)
  },
  {
    path: 'registerstep2',
    loadChildren: () => import('./register/registerstep2/registerstep2.module').then( m => m.Registerstep2PageModule)
  },
  {
    path: 'registerstep3',
    loadChildren: () => import('./register/registerstep3/registerstep3.module').then( m => m.Registerstep3PageModule)
  },
  {
    path: 'user-id',
    loadChildren: () => import('./forgot/user-id/user-id.module').then( m => m.UserIdPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./forgot/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'tips',
    loadChildren: () => import('./tips/tips.module').then( m => m.TipsPageModule)
  },
  {
    path: 'as-main',
    loadChildren: () => import('./accountSetting/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'as-userId',
    loadChildren: () => import('./accountSetting/user-id/user-id.module').then( m => m.UserIDPageModule)
  },
  {
    path: 'as-password',
    loadChildren: () => import('./accountSetting/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'as-tips',
    loadChildren: () => import('./accountSetting/tips/tips.module').then( m => m.TipsPageModule)
  },  {
    path: 'general',
    loadChildren: () => import('./general/general.module').then( m => m.GeneralPageModule)
  }




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
