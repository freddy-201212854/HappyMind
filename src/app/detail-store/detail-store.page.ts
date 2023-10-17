import { Component, OnInit } from '@angular/core';
import { MapboxService } from '../shared/mapbox.service';

@Component({
  selector: 'app-detail-store',
  templateUrl: './detail-store.page.html',
  styleUrls: ['./detail-store.page.scss'],
})
export class DetailStorePage implements OnInit {

  constructor(private mapbox: MapboxService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.mapbox.buildMap("location-store", true, "Autocar GT").then(data => {
      console.log(data)
    }).catch(error => {
      console.log(error)
    })
  }
}
