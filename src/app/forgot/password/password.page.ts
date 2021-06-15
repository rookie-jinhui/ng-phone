import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public userId:any={
    title:'Forgot Password',
    img:'./assets/icon/warning2x.png',
    no:'',
    emailType:'',
    mobileNumber:''
  }

  constructor() { }

  ngOnInit() {
  }

}
