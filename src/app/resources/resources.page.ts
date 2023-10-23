import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.page.html',
  styleUrls: ['./resources.page.scss'],
})
export class ResourcesPage implements OnInit {
  cleanSupportURL: any;
  sanitizer: DomSanitizer;
  url: string = "https://www.youtube.com/embed/qXec5WH_Lec?si=mkOHt-28oa2oeYz0";

  constructor(sanitizer: DomSanitizer) {
    this.sanitizer = sanitizer;
    this.cleanSupportURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
  }

  ngOnInit() {
  }

}
