import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetCookiesService } from '../get-cookies.service';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  constructor(private http: HttpClient,
    private getCookieService: GetCookiesService) { }

  sid = 'nothing';
  ngOnInit() {
    this.getCookieService.getCookie().subscribe(
      (res) => {
        console.log(res.cookie);
        this.sid = res.cookie;
      }
    );
  }

}
