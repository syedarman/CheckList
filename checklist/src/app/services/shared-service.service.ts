import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
  emailId: string = "";
  firstName: string = "";
  lastName: string = "";

  isLoggedIn(){
    return this.emailId != null && this.emailId != "";
  }
}
