import { Component, OnInit } from '@angular/core';
// 在需要用到服务的地方导入服务
import { ComponentService } from "../../service/component.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public domain:string=""
  // 保存数据的数组
  public homeList:any[]=[];
  // 请求首页   数据地址
  public api:string = "api/productlist/"

  // 配置服务
  constructor( public component:ComponentService) { }

  ngOnInit(): void {

    // 通过封装的getHttp方法得到需要的数据
    this.component.getHttp(this.api).then((response:any)=>{
      console.log(response);
      this.homeList = response.result
    })

    // 拿到服务的地址网站
    this.domain=this.component.domain
    
  }




}
