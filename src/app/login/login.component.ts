import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { JwtClientService } from '../jwt-client.service';
import { Login } from '../Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Login: Login = {usuario: "", senha: ""}

  response: any;

  constructor(private service: JwtClientService, private route: Router) { }

  ngOnInit() {
    localStorage.removeItem('id_token')
  }

  logar(frm: NgForm){    
    this.getAccessToken(this.Login)    
  }

  
  public getAccessToken(authRequest){
    let resp=this.service.generateToken(authRequest);
    resp.subscribe(data=>{this.accessApi(data),  localStorage.setItem('id_token', data)});   
  }
    
    
  public accessApi(token){
    let resp=this.service.welcome(token);
    resp.subscribe(data=>this.response=data);
    this.route.navigate(['/security'])
  }

}
