import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  //declaracion de variables
  horas: number;
  precio: number;
  sueldoBruto: number = 0;
  sueldoAplicable: number = 0;
  exceso: number = 0;
  porcentaje: number = 0;
  sueldoLiquido: number = 0;
  descuentoISSS: number = 0;
  descuentoAFP: number = 0;
  descuentoRenta: number = 0;

  Total(){
    //Sueldo bruto
    this.sueldoBruto = this.horas * this.precio;
    this.descuentoAFP = this.sueldoBruto * 0.07;
    //Descuenta de ISS 
    if (this.sueldoBruto > 1000) {
     this.descuentoISSS = 30.00;
    }else{
      this.descuentoISSS = this.sueldoBruto * 0.03;
    }
    
    //Sueldo aplicable
    this.sueldoAplicable = this.sueldoBruto - this.descuentoAFP - this.descuentoISSS;
    //Exepcion si el sueldo es mayor a 472 y es menor a 895.24
      if (this.sueldoAplicable > 472 && this.sueldoAplicable <= 895.24) {
      //sacamos el exceso
      this.exceso = this.sueldoAplicable - 472;
      //sacamos el porcentaje
      this.porcentaje = this.exceso * 0.10;
      //sacamos el descuento de la renta
      this.descuentoRenta = this.porcentaje + 17.67;
      //sacmos el sueldo liquido
      this.sueldoLiquido = this.sueldoAplicable - this.descuentoRenta;
    }
    //Exepcion si el sueldo es igual o mayor a 895.24 y menor o igual a 2038.10
    else if (this.sueldoAplicable > 895.24 && this.sueldoAplicable <= 2038.10) {
      //Sacamos el exceso del sueldo aplicable
      this.exceso = this.sueldoAplicable - 895.24;
      //Sacamos el porcentaje 
      this.porcentaje = this.exceso * 0.20;
      //Sacamos el descuento de la renta 
      this.descuentoRenta = this.porcentaje + 60;
      //Sacamos el sueldo liquido
      this.sueldoLiquido = this.sueldoAplicable - this.descuentoRenta;    
    }

    //Excepcion si el sueldo bruto es mayor a 2038.10 
    else if (this.sueldoAplicable > 2038.10) {
      //Sacamos el exceso del sueldo aplicable 
      this.exceso = this.sueldoAplicable - 2038.10;
      //Sacamos el porcentaje 
      this.porcentaje = this.exceso * 0.30;
      //Sacamos el descuento de la renta
      this.descuentoRenta = this.porcentaje + 288.57;
      //Sacamos el sueldo liquido
      this.sueldoLiquido = this.sueldoAplicable - this.descuentoRenta; 
    }
    //Si el sueldo aplicable es igual o menor a 472
    else if (this.sueldoAplicable <= 472) {
      //no aplica a renta 
      this.descuentoRenta = 0;
      this.sueldoLiquido = this.sueldoAplicable;

      
    }
  }

  constructor() {}

}
