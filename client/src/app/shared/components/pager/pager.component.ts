import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.scss']
})
export class PagerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number; //info recieved from parnt component
  @Input() pageNumber: number;
  @Output() pageChanged = new EventEmitter<number>();  
  //emitting info out from this child component to the parent component

  constructor() { }

  ngOnInit(): void {
  }
  
  onPagerChange(event: any){
    this.pageChanged.emit(event.page);
  }

}
