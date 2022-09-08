import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogado = false

  constructor() { }

  ngOnInit() {
    const token = localStorage.getItem("token")
    if(token?.length){
      this.isLogado = true
    }
  }

}
