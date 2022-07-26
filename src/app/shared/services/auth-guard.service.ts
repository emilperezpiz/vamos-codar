import { CommonService } from './common.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(
    public serviceAuth: AuthService,
    public serviceCommon: CommonService
  ) {}

  canActivate(): boolean {
    if (this.serviceAuth.getToken() !== '') {
      return true;
    }
    this.serviceCommon.navigate('');
    return false;
  }
}
