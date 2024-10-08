import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor(private http: HttpClient) { }

  sendMessage(body: any) {
    let headers = {
      headers: new HttpHeaders ({
        'Content-Type': 'application/json'
      })
    }
    return this.http.post("http://localhost:3000/email",body,headers);
  }
}