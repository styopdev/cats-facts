import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { FactModel } from '../models/fact.model';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class FactService {
  constructor(private http: HttpClient) {}

  getCats() {
    let params = new HttpParams();
    params = params.append('amount', '10');

    return this.http.get(`${environment.baseUrl}/facts/random`, { params });
  }
}