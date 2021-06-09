import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//引入路由配置文件
import { AppRoutingModule } from './app-routing.module';
// 引入根组件
import { AppComponent } from './app.component';

//引入http请求数据的模块
import { HttpClientModule } from "@angular/common/http";
//引入服务
import { CommonService } from "./services/common.service";


@NgModule({
  declarations: [AppComponent],
  entryComponents: [], //配置不会在模板中使用的组件
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule], //引入的模块 以来的模块
  providers: [CommonService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }], //配置服务
  bootstrap: [AppComponent],
})
export class AppModule {}
