import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  // private apiUrl = 'http://localhost:3000/send-email'; 
  private apiUrl = 'https://moolai-academy-h6ddhtb0gsgsascw.eastus-01.azurewebsites.net/send-email'
  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, contactNumber: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { name, email, contactNumber };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
