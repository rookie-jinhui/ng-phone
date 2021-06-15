import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerstep1',
  templateUrl: './registerstep1.page.html',
  styleUrls: ['./registerstep1.page.scss'],
})
export class Registerstep1Page implements OnInit {

  public userId:any={
    title:'Forgot User ID',
    img:'./assets/icon/warning2x.png',
    no:'',
    emailType:'',
    mobileNumber:''
  }
  constructor() { }

  ngOnInit() {
  }

}
