import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  constructor(){}
 
  // constructor(private productService :ProductsService) { }
  // headerText: string =''
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

  ngOinit(): void{
  }

  handleTabClick($event : any,index:number){
    console.log($event)
    for(let tab of this.tabs){
      tab.active = false
    }
    this.tabs[index].active =true;
    console.log(this.tabs[index])
  }
  
}
