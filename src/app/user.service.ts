import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private isUserLoggedIn : boolean =false;
  
  constructor() {
     this.isUserLoggedIn=false;
   }
setUserLoggedIn(){
  this.isUserLoggedIn=true;
}
getUserLoggedIN(){
  return this.isUserLoggedIn;
}
setUserLoggedOut(){
  this.isUserLoggedIn=false;
}

}
