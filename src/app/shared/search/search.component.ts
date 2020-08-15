import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { searchConst } from './search.constant'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Input() searchText: string;
  @Output()
  searchEvent: EventEmitter<String> = new EventEmitter<String>();
  searchConst = searchConst;
  ngOnInit() {
  }
  searchData(event) {
    var target = event.target || event.srcElement || event.currentTarget;
    var value = target.value;
    this.searchText = value;
    this.searchEvent.emit(event);

  }
}
