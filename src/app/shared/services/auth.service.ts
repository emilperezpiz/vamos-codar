import { environment } from './../../../environments/environment.prod'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public identifier = environment.identifier
  constructor() {}

  public getToken(): string {
    return localStorage.getItem(`${this.identifier}_token`) ?? ''
  }

  public setToken(token: string): void {
    localStorage.setItem(`${this.identifier}_token`, token)
  }

  public clearToken(): void {
    localStorage.removeItem(`${this.identifier}_token`)
  }
}
