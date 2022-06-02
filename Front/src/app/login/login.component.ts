import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    let user  = document.getElementById("username") as HTMLInputElement;
    let passwd = document.getElementById("password") as HTMLInputElement;
    console.log(user.value, passwd.value)
    var config = {      
      method: 'get',
      url: `http://localhost:5215/User/login/${user.value}/${passwd.value}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    let instance = this;
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      instance.router.navigate([`/perfil/${user.value}/${passwd.value}`]);
    }).catch(function (error) {
      console.log(error);
    });
  }
}
