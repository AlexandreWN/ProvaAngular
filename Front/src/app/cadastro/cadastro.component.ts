import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from "axios";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  submit(){
    let nome  = document.getElementById("name") as HTMLInputElement;
    let idade = document.getElementById("idade") as HTMLInputElement;
    let raca = document.getElementById("raca") as HTMLInputElement;
    let username = document.getElementById("user") as HTMLInputElement;
    let password = document.getElementById("password") as HTMLInputElement;
    let foto = document.getElementById('foto') as HTMLInputElement;
    
    var data = JSON.stringify({
      "nome": nome.value,
      "idade": idade.value,
      "raca": raca.value,
      "login": username.value,
      "password": password.value,
      "foto": foto.value
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:5215/User/register',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    let instance = this;
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(data));
      instance.router.navigate(['/Login']);
    })
  }
}
