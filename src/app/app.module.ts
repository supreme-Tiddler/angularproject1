import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// 导入 http需要的模块
import { HttpClientModule,HttpClientJsonpModule } from "@angular/common/http";
// 导入服务ComponentService
import { ComponentService } from './service/component.service';
// 创建两个需要的组件
import { HomeComponent } from './component/home/home.component';
import { ParticularsComponent } from './component/particulars/particulars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParticularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // 配置http需要的模块
    HttpClientModule,
    HttpClientJsonpModule
  ],
  // 配置服务
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
