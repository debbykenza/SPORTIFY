import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../core/environments/environment';
import { Supscription } from '../models/supscription';

@Injectable({
  providedIn: 'root',
})
export class SupscriptionsService {
  private apiUrl: string = environment.apiUrl;
  private baseUrl: string = `${this.apiUrl}/admin/supscriptions`;

  constructor(private http: HttpClient) {}

  getAllSupscriptions(): Observable<Supscription[]> {
    return this.http.get<Supscription[]>(`${this.baseUrl}/`);
  }

  addSupscription(supscription: Supscription | any): Observable<Supscription> {
    return this.http.post<Supscription>(`${this.baseUrl}/add`, supscription);
  }

  deleteSupscription(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/supscriptions/delete/${id}`);
  }

  updateSupscription(id: number, supscription: Supscription): Observable<Supscription> {
    return this.http.put<Supscription>(`${this.baseUrl}/${id}`, supscription);
  }

  getSupscriptionById(id: number): Observable<Supscription> {
    return this.http.get<Supscription>(`${this.baseUrl}/${id}`);
  }
}