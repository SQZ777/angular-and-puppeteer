import { Component, OnInit } from '@angular/core';
import * as puppeteer from 'puppeteer';
import { GetCookiesService } from './get-cookies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'my-crawler';

  ngOnInit(): void {
  }
}
