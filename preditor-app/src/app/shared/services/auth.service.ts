import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const AUTH_TOKEN = 'TOKEN';
const USER_STORAGE_NAME = 'USER_INFO';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
      private http: HttpClient
  ) { }

  isLoggedIn(): boolean {
    const token = localStorage.getItem(AUTH_TOKEN);
    if (token) {
        return true;
    }
    return false;
  }

  setUser(userInfo) {
    localStorage.setItem(USER_STORAGE_NAME, JSON.stringify(userInfo));
  }

  getUser() {
      const userInfo = localStorage.getItem(USER_STORAGE_NAME);
      if (userInfo) {
          return JSON.parse(userInfo);
      }
      return null;
  }

  logIn(model) {
    return new Promise((resolve, reject) => {
        // Usando a api
        // this.http.post('url_login', model).subscribe(response => {
        //     localStorage.setItem(AUTH_TOKEN, response.token);
        //     resolve(true);
        // }, error => {
        //     reject(error);
        // });

        // Static
        if (model.username == 'charles' && model.password == '123456') {
            localStorage.setItem(AUTH_TOKEN, '1234567890');
            resolve(true);
        } else {
            reject(new Error('Login ou senha inválidos'));
        }
    });
  }

  logout() {
    localStorage.removeItem(AUTH_TOKEN);
  }
}
