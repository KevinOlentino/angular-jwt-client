import { Component, OnInit } from '@angular/core';
import { JwtClientService } from '../jwt-client.service';
import { Login } from '../Login';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html'
})
export class SecurityComponent implements OnInit {

  authRequest: Login = {
    usuario: "fulano",
    senha: "senha"
  };

  response: any;

  constructor(private service: JwtClientService) { }

  ngOnInit() {
    this.getAccessToken(this.authRequest);
  }

  public getAccessToken(authRequest) {
    let resp = this.service.generateToken(authRequest);
    resp.subscribe(data => this.accessApi(data));
  }


  public accessApi(token) {
    let resp = this.service.welcome(token);
    resp.subscribe(data => this.response = data);
  }
}
