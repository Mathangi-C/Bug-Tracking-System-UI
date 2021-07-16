import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  private baseUrl = 'http://localhost:8082/bug';

  constructor(private http: HttpClient) { }

  getBug(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/id/${id}`);
  }

  createBug(bug: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, bug);
  }

  updateBug(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteBug(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getBugList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }
 
}

