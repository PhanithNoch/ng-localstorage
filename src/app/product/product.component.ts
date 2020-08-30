import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product = {}; // object 
  lstProducts = [
  ]; // array 
  oldProductLst = [];


  // array[{}]
  constructor() { } // execute 

  ngOnInit() { // formload
    this.oldProductLst = JSON.parse(localStorage.getItem('product')) ;
    console.log(this.oldProductLst);
  }


  onSave(){ //function
if(this.product){
  this.lstProducts = this.oldProductLst;
  this.lstProducts.push(this.product);
  localStorage.setItem('product',JSON.stringify(this.lstProducts));
    console.log(this.product);
    this.product = {};
}
  }

}
