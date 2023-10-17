import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  categories: any = [
    { id: 1, name: "Talleres", background: "car-repair.jpg", icon: "car-repair.svg" },
    { id: 1, name: "Car wash", background: "car-wash.jpg", icon: "car-wash.svg" },
    { id: 1, name: "Gasolinera", background: "gas-station.jpg", icon: "gas-station.svg" },
    { id: 1, name: "Pinchazos", background: "tire.jpg", icon: "tire.svg" },
    { id: 1, name: "Aceiteras", background: "tire.jpg", icon: "tire.svg" },
    { id: 1, name: "Baterias", background: "tire.jpg", icon: "tire.svg" },
  ];
  stores: any = [
    { id: 1, name: "AutoCar GT", image: "car-repair.jpg"},
    { id: 1, name: "AutoCar GT", image: "car-wash.jpg"},
    { id: 1, name: "AutoCar GT", image: "gas-station.jpg"},
    { id: 1, name: "AutoCar GT", image: "tire.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
