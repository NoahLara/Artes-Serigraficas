import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Features=[
    {
      url:"../../../assets/confeccion-01.svg",
      feature:"Confeccionamos"
    },
    {
      url:"../../../assets/camisa-02.svg",
      feature:"Tallamos"
    },
    {
      url:"../../../assets/serigrafiar-03.svg",
      feature:"Estampamos"
    },
    {
      url:"../../../assets/camisas-04.svg",
      feature:"Preparamos"
    },
    {
      url:"../../../assets/entregar-05.svg",
      feature:"Entregamos"
    },
  ]

}
