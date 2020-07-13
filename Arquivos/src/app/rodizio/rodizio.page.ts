import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rodizio',
  templateUrl: './rodizio.page.html',
  styleUrls: ['./rodizio.page.scss'],
})
export class RodizioPage implements OnInit {
placa :any ='';
dia :any='';
final_placa :any='';

  constructor() { }

  ngOnInit() {
  }

  verificar(){
    this.final_placa= this.placa.charAt(this.placa.length-1)
    if(this.final_placa=='1'|| this.final_placa=='2'){
      this.dia="Segunda-Feira"
    }else if(this.final_placa=='3'|| this.final_placa=='4'){
      this.dia="Terça-feira"
    }else if(this.final_placa=='5'|| this.final_placa=='6'){
      this.dia="Quarta-feira"
    }else if(this.final_placa=='7'|| this.final_placa=='8'){
      this.dia="Quinta-feira"
    }else if(this.final_placa=='9'|| this.final_placa=='0'){
      this.dia="Sexta-feira"
    }else{
      this.dia="Placa Inválida"
    }
  }
}
