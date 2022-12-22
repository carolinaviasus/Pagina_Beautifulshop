import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productService :ProductsService) { }
  headerText: string =''
  tabs : any =[{
    id :1,
    name:'Bolsos',
    active :false
  },
  {
    id :2,
    name:'Maletas',
    active :false
  },

  
]
  products : any = []
  tempProducts : any =[]
  ngOnInit(): void {

    this.productService.getProducts('products').subscribe((data :any)=> {
      console.log(data)
      this.products = data;
      this.tempProducts =[...data];

    }, (err: any) =>{
      console.log(err)
    })
  }

  handleTabClick($event : any,index :number){
    console.log($event)
    for(let tab of this.tabs){
      tab.active = false
    }
    this.tabs[index].active =true;
    this.headerText = $event.name

    this.products = this.tempProducts.filter( (product:any ) => product.category.toLowerCase().includes($event.name.toLowerCase()))
    
  }

}