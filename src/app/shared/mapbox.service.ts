import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class MapboxService {

  mapbox = (mapboxgl as typeof mapboxgl);
  map: mapboxgl.Map;
  style = `mapbox://styles/mapbox/streets-v11`;
  // Coordenadas de la localización donde queremos centrar el mapa
  lat = 43.1746;
  lng = -2.4125;
  zoom = 15;


  constructor(private geolocation: Geolocation) {
    // Asignamos el token desde las variables de entorno
    this.mapbox.accessToken = "pk.eyJ1IjoiaW5ub2Jlc29sdXRpb25zIiwiYSI6ImNsNWZyNHpsaDE0djIzZGxsNjR1dGg4ZGkifQ.R7oxxZdLTs11cM1ycREAKw";
  }

  buildMap(container, showMarker = false, titleMarker = "") {
    return new Promise((resolve, reject) => {
      this.geolocation.getCurrentPosition().then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
        this.lat = resp.coords.latitude;
        this.lng = resp.coords.longitude;
        this.map = new mapboxgl.Map({
          container: container,
          style: 'mapbox://styles/mapbox/light-v10',
          zoom: this.zoom,
          center: [this.lng, this.lat],
          attributionControl: false,

          dragPan: false,          //disable drag panning
          dragRotate: false,       //disable drag rotation
          touchZoomRotate: false,
          touchPitch: false,
          scrollZoom: false,
          doubleClickZoom: false,  //disable doubleclick zoom
        });
        this.map.on('load', () => {
          console.log('A load event occurred.');
          if (showMarker) {
            this.addMarker(this.lat, this.lng, titleMarker)
          }
          this.centerMap(this.lat, this.lng);
          resolve(true);
        });
      }).catch((error) => {
        console.log(error);
        reject(error);
      });
    });
    //this.map.addControl(new mapboxgl.NavigationControl());
  }

  centerMap(lat, lng) {
    if (this.map) {
      this.map.flyTo({ center: [lng, lat] });
    }
  }

  addMarker(lat, lng, label) {
    var popup = new mapboxgl.Popup()
      .setText(label)
      .addTo(this.map);

    var latitude = parseFloat(lat).toFixed(5);
    var longitud = parseFloat(lng).toFixed(5);
    const marker2 = new mapboxgl.Marker({ color: 'black', rotation: 45 })
      .setLngLat([parseFloat(longitud), parseFloat(latitude)])
      .addTo(this.map)
      .setPopup(popup);
  }

  drawArea(geoJson) {
    this.showArea(geoJson);
  }

  showArea(geoJson) {
    this.clearMap();
    var data: any = {
      'type': 'geojson',
      'data': {
        'type': 'Feature',
        'geometry': {
          'type': 'Polygon',
          // These coordinates outline Maine.
          'coordinates': [
            geoJson
          ]
        }
      }
    };
    // Add a data source containing GeoJSON data.
    this.map.addSource('maine', data);

    // Add a new layer to visualize the polygon.
    this.map.addLayer({
      'id': 'maine',
      'type': 'fill',
      'source': 'maine', // reference the data source
      'layout': {},
      'paint': {
        'fill-color': '#0080ff', // blue color fill
        'fill-opacity': 0.5
      }
    });
    // Add a black outline around the polygon.
    this.map.addLayer({
      'id': 'outline',
      'type': 'line',
      'source': 'maine',
      'layout': {},
      'paint': {
        'line-color': '#000',
        'line-width': 3
      }
    });
  }

  clearMap() {
    if (this.map.getLayer('outline')) {
      this.map.removeLayer('outline');
    }
    if (this.map.getLayer('maine')) {
      this.map.removeLayer('maine');
    }
    if (this.map.getSource("maine")) {
      this.map.removeSource("maine");
    }
  }
}
