import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
// 引入需要的配置的路由组件
import { HomeComponent } from './component/home/home.component';
import { ParticularsComponent } from './component/particulars/particulars.component';
// 配置路由
const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'particulars/:id',component:ParticularsComponent},
  {path:'**',redirectTo:'/home'}
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
