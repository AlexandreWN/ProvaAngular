import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from "axios";
import { Dados } from './Dados';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  dados : Dados | undefined
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    let username = routeParams.get('username');
    let password = routeParams.get('password');
    var config = {      
      method: 'get',
      url: `http://localhost:5215/User/dados/${username}/${password}`,
      headers: { 
        'Content-Type': 'application/json'
      }
    };
    let instance = this;
    axios(config)
    .then(function (response) {
      instance.dados = response.data;
      console.log(JSON.stringify(response.data));
    }).catch(function (error) {
      console.log(error);
    });
  }

  perfil(){
  }

}
