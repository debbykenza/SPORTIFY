import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { UserStorageService } from '../../storage/user-storage.service';

const basicUrl = 'http://localhost:8080';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private userStorageService: UserStorageService
  ) {}

  login(loginRequest: any) : any{
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify(loginRequest);
    return this.http
      .post(basicUrl + '/login', body, { headers, observe: 'response' })
      .pipe(
        map((response: any) => {
          console.log(response);
          const token = response.body['token'];
          if (token) {
            this.userStorageService.saveToken(token);
          }
          return response;
        })
      );
  }
}
