import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email!: string
  password!: string

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  submit(){
    const data = {
      email: this.email,
      password: this.password
    }
    this.loginService.login(data).subscribe(() => {
      const token = localStorage.getItem("token")
      if(token){
        this.router.navigate(["pages/characters"])
      }
    })
  }
}
