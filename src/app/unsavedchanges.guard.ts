import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AboutuserComponent } from './aboutuser/aboutuser.component';

@Injectable({
  providedIn: 'root'
})

export class UnsavedchangesGuard implements CanDeactivate<AboutuserComponent> {
  constructor() { }
  canDeactivate(adduser: AboutuserComponent) {
    if(adduser.userName.dirty){
    
      return window.confirm("please save changes before leaving")
    }
          return true
    
  }

}
