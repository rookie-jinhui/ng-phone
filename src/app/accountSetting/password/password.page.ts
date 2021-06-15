import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public userId:any={
    img:'./assets/icon/success2x.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
