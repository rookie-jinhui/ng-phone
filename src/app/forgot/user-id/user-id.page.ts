import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.page.html',
  styleUrls: ['./user-id.page.scss'],
})
export class UserIdPage implements OnInit {

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
