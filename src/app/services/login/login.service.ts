import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'http://localhost:8080/api/auth/signin';

  constructor(private http:HttpClient) { }

  login(data){
    return this.http.post<any>(this.url,data);
  }

  isLoggedIn(){
    let token = localStorage.getItem("Authorization");
    if (token) {
      return true;
    }
    return false;
  }

}
