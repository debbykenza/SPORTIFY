import { Injectable } from '@angular/core';
import { environment } from '../../../core/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pack } from '../models/pack';

@Injectable({
  providedIn: 'root',
})
export class PacksService {
  private apiUrl: string = environment.apiUrl;
  private baseUrl: string = `${this.apiUrl}/admin/packs`;

  constructor(private http: HttpClient) {}

  getAllPacks(): Observable<Pack[]> {
    return this.http.get<Pack[]>(`${this.baseUrl}/`);
  }

  addPack(pack: Pack): Observable<Pack> {
    return this.http.post<Pack>(`${this.baseUrl}/add`, pack);
  }

  deletePack(id: number): Observable<any> {
    return this.http.delete(`http://localhost:8080/admin/packs/delete/${id}`);
  }

  updatePack(id: number, pack: any): Observable<any> {
    return this.http.put(`http://localhost:8080/admin/packs/updte/${id}`, pack);
  }

  getPackById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }
}
