import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  username='admin';
  password='admin';
  isvalid='';

  constructor(private routes:Router){

  }
  validateUser():void{
    if(this.username=="admin" && this.password=='admin'){
      this.isvalid="authorised user"
      this.routes.navigateByUrl("/display");

    }
     else{
        this.isvalid= "Not Authorised";
        this.routes.navigateByUrl("/register");
      }
  }
}

