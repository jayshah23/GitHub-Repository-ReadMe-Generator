import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  username: string = "jayshah23";

  constructor() { }

  setUsername(username: string) {
    this.username = username;
    console.log("Set username: ", this.username);
  }

  getUsername() {
    console.log("Get username: ", this.username);
    return this.username;
  }
}
