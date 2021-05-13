import { Injectable } from '@angular/core';
// 导入http需要的用到模块
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  // 获取数据的地址网站
  public domain:string = "http://a.itying.com/"
  // 配置http需要的模块
  constructor( public http:HttpClient) { }
  

  // get获取数据?
  getHttp(api:any){
   return new Promise((res,rej)=>{
     this.http.get(this.domain + api).subscribe((response:any)=>{
       res(response)
     })
   })
  }





}
