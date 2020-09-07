import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(
    private http: HttpClient,
  ) { }

  baseURL = "http://200.137.66.31:8080/upload"

  atomicUpload(formData: FormData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseURL+"/atomicupload", formData, { headers });
  }

  complexUpload(formData: FormData) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    return this.http.post(this.baseURL+"/complexupload", formData, { headers });
  }


  complexSearch(goal: string) {
    return this.http.get(`${this.baseURL}search/query=query${goal}`);
  }
}
