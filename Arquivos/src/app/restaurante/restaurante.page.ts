import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.page.html',
  styleUrls: ['./restaurante.page.scss'],
})
export class RestaurantePage implements OnInit {

  total:any;
  couvert:any=3.00.toFixed(2);
  pessoas:any=1;
  taxa:any=0.00.toFixed(2);
  totalPagar:any=0.00.toFixed(2);
  pagarUnit:any=0.00.toFixed(2);

  constructor() { }

  ngOnInit() {
  }

  calcular(){
    this.taxa = (this.total*0.10).toFixed(2);
    this.totalPagar = ((parseFloat(this.total))+(parseFloat(this.taxa))+(parseFloat(this.couvert))).toFixed(2);
    this.pagarUnit = (this.totalPagar/this.pessoas).toFixed(2);
  }

}