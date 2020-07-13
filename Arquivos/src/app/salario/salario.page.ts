import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage implements OnInit {

  salario: any ="";
  salarionovo: any=0;
  porcentagem: any='10';
  


  constructor() { }

  ngOnInit() {
  }

  calcular(){
    if(this.porcentagem =='10'){
      this.salarionovo=this.salario*1.10
    } else if(this.porcentagem=='30'){
      this.salarionovo=this.salario* 1.30
    }else{
      this.salarionovo=this.salario* 1.50
    }
  }

}
