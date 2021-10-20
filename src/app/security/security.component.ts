import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { JwtClientService } from '../jwt-client.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  response: any;
  token = localStorage.getItem('id_token')

  constructor(private service: JwtClientService, private route: Router) {        
    if(!this.token){   
        route.navigate(['\login'])
        throw "Usuario não logado"
    }
   }

  ngOnInit() { 
    this.accessApi(this.token)
  }

  public accessApi(token) {
    let resp = this.service.welcome(token);
    resp.subscribe(data => this.response = data);
  }
}
