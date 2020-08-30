import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
lstProduct = [];
  product = {}; // object 
  constructor(
    private activateRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit() {
  this.activateRoute.params.subscribe(res=>{
    console.log(res.id);
    let result:any = JSON.parse(localStorage.getItem('product'));
    this.product = result[res.id];
  });
  }

  onUpdate(){
    this.lstProduct.push(this.product);
    localStorage.setItem('product',JSON.stringify(this.lstProduct));
    this.router.navigate(['view-product']);

  }

}
