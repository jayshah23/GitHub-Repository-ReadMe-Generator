import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

    username: string = "";
    github1: boolean = true;
    // github2: boolean;

    constructor(private http: HttpClient,
        private shared: SharedService) { }

    ngOnInit() { }

    gitUser() {
    //     this.username = this.username.trim();
    //     if(this.username != "") {
    //         this.API().subscribe(data => {
    //             console.log("Data: ",data);
    //             this.github1 = true;
                this.shared.setUsername(this.username);
    //         }, error => {
    //             console.log("Error: ",error);
    //             this.github1 = false;
    //         });
    //     }
    }

    // API(): Observable<any> {
    //     return this.http.get("https://api.github.com/users/" + this.username, {
    //         headers: { "Content-Type": "application/json; charset = UTF-8" }
    //     });
    // }
}
