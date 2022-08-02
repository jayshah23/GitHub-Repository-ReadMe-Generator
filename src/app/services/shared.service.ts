import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  username: string = "";
  md: any;

  constructor() {
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      headerIds: true
    })
  }

  setUsername(username: string) {
    this.username = username;
    console.log("Set username: ", this.username);
  }

  getUsername() {
    console.log("Get username: ", this.username);
    return this.username;
  }

  parseMarkdown(data) {
    return this.md.parse(data);
  }
}
