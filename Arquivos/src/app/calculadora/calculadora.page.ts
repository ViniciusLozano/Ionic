import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  n1 : any = "0";
  n2 : any = "0";
  r : any = "0";
  res: any = "";

  constructor() { }

  ngOnInit() {
  }

  soma(){
    this.r = this.n1 + this.n2;
    this.res = "acerto mizeravi!";
  }

  sub(){
    this.r = this.n1 - this.n2;
    this.res = "acerto mizeravi!";
  }

  mult(){
    this.r = this.n1 * this.n2;
    this.res = "acerto mizeravi!";
  }

  div(){
    this.r = this.n1 / this.n2;
    this.res = "acerto mizeravi!";
  }

}
