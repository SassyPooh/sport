import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
Connecteduser:any={}
loginForm!:any;
error:any;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit(): void {
  }
login(){
  this.userService.login(this.Connecteduser).subscribe((data)=>{
    console.log("login result:",data.msg,"token:",data.token);
    if (data.token) {
      // save token in session storage
      sessionStorage.setItem("token",data.token);
      let user: any = this.decodeToken(data.token)
      console.log('decoded token',user);
      
      if (this.Connecteduser.role == 'admin') {
        this.router.navigate(['/dashboard']);
      }else{
        this.router.navigate(['/']);
      }
    }else{
      // can be changed with a static message for security
      this.error = data.msg
    }
    
  });
}
decodeToken(token:string){
  return jwt_decode(token);
}
}
