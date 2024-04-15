import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, Users} from "../../../shared/models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8080/api/user'
  //private baseUrl = `${environment.database}v1/user`
  constructor(private httpClient: HttpClient) { }

  post(user: User) {
    return this.httpClient.post<User>(`${this.baseUrl}`, user);
  }
  patch(name: string){
    return this.httpClient.patch<User>(`${this.baseUrl}`, name);
  }
  delete(name: string) {
    return this.httpClient.delete<User>(`${this.baseUrl}/${name}`);
  }
  getAll() {
    return this.httpClient.get<Users>(`${this.baseUrl}`)
  }
  getByName(name: string) {
    return this.httpClient.get<Users>(`${this.baseUrl}/${name}`)
  }
}
