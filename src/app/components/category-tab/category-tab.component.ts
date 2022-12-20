import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-category-tab',
  templateUrl: './category-tab.component.html',
  styleUrls: ['./category-tab.component.scss']
})
export class CategoryTabComponent implements OnInit {

  @Input() tab : any
  @Output() tabAction :EventEmitter<any> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  getTabAction(){
      this.tabAction.emit(this.tab)
  }
}