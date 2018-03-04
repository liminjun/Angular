import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pm-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public pageTitle: string = 'About Page.';
  constructor() { }

  ngOnInit() {
  }

}
