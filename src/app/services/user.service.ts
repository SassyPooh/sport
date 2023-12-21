import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
userUrl:string="http://localhost:3000/users";
  constructor(private httpClient:HttpClient) { }
  login(obj:any){
    return this.httpClient.post<{msg:string,token:string}>(this.userUrl + '/login',obj);
  }
  signUp(obj:any,img:File){
    let formData = new FormData();
    formData.append('firstName',obj.firstName);
    formData.append('lastemailtName',obj.lastemailtName);
    formData.append('email',obj.email);
    formData.append('password',obj.password);
    formData.append('role',obj.role);
    formData.append('img',img);
    return this.httpClient.post<{msg:any}>(this.userUrl +'/signup',formData);
  }
  profileEdit(obj:any){
    return this.httpClient.put(obj,this.userUrl);
  }
  allUsers(obj:any){
    return this.httpClient.get(this.userUrl);
  }
}
