import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-id',
  templateUrl: './user-id.page.html',
  styleUrls: ['./user-id.page.scss'],
})
export class UserIDPage implements OnInit {

  public userId:any={
    img:'./assets/icon/success2x.png'
  }

  constructor() { }

  ngOnInit() {
  }

}
