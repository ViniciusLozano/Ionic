import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.page.html',
  styleUrls: ['./compras.page.scss'],
})
export class ComprasPage implements OnInit {

  total : any = '0';
  arroz : boolean = false;
  leite : boolean = false;
  carne : boolean = false;
  feijao : boolean = false;
  refri: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  calcular(){
    this.total=0;
    if(this.arroz==true) {
      this.total+= 2.90
    }
    if (this.leite==true){
      this.total+= 4.50
    }
    if (this.carne==true){
      this.total+= 17.50
    }
    if(this.feijao==true){
      this.total+= 3.40
    }
    if(this.refri==true){
      this.total+= 5.00
    }
  }

}