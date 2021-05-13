import { Component, OnInit } from '@angular/core';

// 导入获取地址传值的模块
import { ActivatedRoute } from "@angular/router";

// 导入服务器 ComponentService
import { ComponentService } from "../../service/component.service";

@Component({
  selector: 'app-particulars',
  templateUrl: './particulars.component.html',
  styleUrls: ['./particulars.component.scss']
})
export class ParticularsComponent implements OnInit {

  public domain:string=""
  // 保存数据的数组
  public particularsList:any[]=[];
  // 请求详情页   数据地址
  public api:string = "api/productcontent?id="

  // 配置获取地址传值的模块   配置服务器ComponentService
  constructor( public router:ActivatedRoute, public component:ComponentService) { }

  ngOnInit(): void {

    console.log(this.router);
    this.router.params.subscribe((response)=>{
      console.log(response);
      // 调用 得到数据
      this.requestContent(response.id)

    })
    
    // 拿到服务的地址网站
    this.domain = this.component.domain

  }


  // 再次封装  通过封装的getHttp方法得到需要的数据
  requestContent(id:any){
    this.api = this.api+id
    this.component.getHttp(this.api).then((res:any)=>{
      console.log(res);
      this.particularsList = res.result
    })


  }

}
