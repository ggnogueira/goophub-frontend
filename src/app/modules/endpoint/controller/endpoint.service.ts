import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EndpointService {

  constructor(
    private http: HttpClient,
  ) { }

  baseURL = "http://200.137.66.31:8080/search/sparql"

  search(query: string) {
    let params = new HttpParams().set('query', encodeURIComponent(query));
    return this.http.get(this.baseURL, { params: params });
  }
}