import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent {

  @Input() tab : any
    constructor(){}
  

  ngOinit(): void {

  }
}
