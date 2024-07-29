import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DallEService {
  private apiUrl = 'https://api.openai.com/v1/images/generations';
  private apiKey = ' ';

  constructor(private http: HttpClient) {}

  generateImage(prompt: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const body = {
      prompt: prompt,
      n: 1,
      size: "256x256"
    };

    return this.http.post(this.apiUrl, body, { headers });
  }
}