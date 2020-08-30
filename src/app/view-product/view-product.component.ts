import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
lstProducts = [];
  constructor(
    private router:Router
  ) { }

  ngOnInit() { 
    this.lstProducts =JSON.parse(localStorage.getItem('product'));
  }

  onDelete(id){
    console.log(id);
   let results:any =  this.lstProducts.slice(id);
   
   localStorage.setItem('product',JSON.stringify(results));
   this.lstProducts = results;
   
    
  }

  onUpdate(id:any){
    console.log(id);
    this.router.navigate(['update-product',id]);
  }

}
