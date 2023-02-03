import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  username = "";
  password = "";
  errormessage = "";

  constructor(private auth : AuthService,private router:Router){}

  ngOnInit():void{}

  login(){
    if(this.username.trim().length === 0){
      this.errormessage = "Username is required";
    }else if(this.password.trim().length === 0){
      this.errormessage = "Password is required";
    }else{
      this.errormessage = ""
      let res = this.auth.login(this.username,this.password);
      if(res===200){
        this.router.navigate(['home'])
      }else{
        this.errormessage = "Invalid Credentials"
      }
    }
  }

}
