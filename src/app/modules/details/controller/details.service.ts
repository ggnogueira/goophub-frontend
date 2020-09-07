import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  constructor(
    private http: HttpClient,
  ) { }

  baseURL = "http://200.137.66.31:8080/search"

  searchEntities(query: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.baseURL}/querygoal`, { "query": query });
  }
}