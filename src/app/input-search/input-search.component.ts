import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.css']
})
export class InputSearchComponent implements OnInit {
  @Output() searchText = new EventEmitter();
  @Input() countObj;
  value;

  constructor() {
  }
  sendValue() {
    this.searchText.emit(this.value);
  }
  ngOnInit(): void {
  }
}
