import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoatService {
  private apiUrl = 'http://localhost:3000/api/goats';

  constructor(private http: HttpClient) { }

  addGoat(goatData: any): Observable<any> {
    return this.http.post(this.apiUrl, goatData);
  }
}
