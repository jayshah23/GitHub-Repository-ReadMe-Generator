import { Injectable } from '@angular/core';
import * as marked from 'marked';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  username: string = "";
  md: any;
  code: string = "";

  constructor() {
    this.md = marked;
    this.md.setOptions({
      gfm: true,
      headerIds: true
    })
  }

  setUsername(username: string) {
    this.username = username;
    // console.log("Set username: ", this.username);
  }

  getUsername() {
    // console.log("Get username: ", this.username);
    return this.username;
  }

  setCode(code: string) {
    this.code = code;
    // console.log("Set code: ", this.code);
  }

  getCode() {
    // console.log("Get code: ", this.code);
    return this.code;
  }

  parseMarkdown(data) {
    return this.md.parse(data);
  }
}
