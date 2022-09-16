import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetserviceService {

  apiURL = environment.service;

  constructor(private http: HttpClient) { }

  GraficaGuias() {
    let b = this.http.get(this.apiURL);
    return b;
  }

}
