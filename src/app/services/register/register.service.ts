import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url = 'http://localhost:8080/api/auth/signup';

  constructor(private http:HttpClient) { }

  register(data){
    return this.http.post(this.url,data);
  } 
}
