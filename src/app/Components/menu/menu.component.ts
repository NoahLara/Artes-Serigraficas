import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuOptions=[
    {
      option:"Inicio",
      icon:"home",
      link:"home"
    },
    {
      option:"Novedades",
      icon:"new_releases",
      link:"home"
    },
    {
      option:"Categorias",
      icon:"family_restroom",
      link:"home"
    },
    {
      option:"¿Quienes somos?",
      icon:"people",
      link:"home"
    },
    {
      option:"Clientes",
      icon:"star",
      link:"home"
    },
    {
      option:"Contáctanos",
      icon:"location_on",
      link:"home"
    }
  ];


}
