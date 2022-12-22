import { Component, Input, OnInit } from '@angular/core';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{
  @Input() product :any ;
  constructor(){}
  // constructor(private router : Router) { }

  ngOnInit(): void {
  }
  // productView(id : number){
  //   this.router.navigateByUrl(`product-view/${id}`)
  // }
}
