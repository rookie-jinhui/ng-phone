import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CommonService } from "../services/common.service";

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public list:any={};

  public hasData=false;

  constructor(public ActiveedRoute:ActivatedRoute,public commonService:CommonService) { }

  ngOnInit() {
    this.ActiveedRoute.queryParams.subscribe((result)=>{
      console.log(result)
      this.requestData(result.aid);
    })
  }

  requestData(aid){
    var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
    this.commonService.ajaxGet(api).then((response:any)=>{
      console.log(response);
      this.hasData=true;
      this.list=response.result[0];
    })
  }

}
