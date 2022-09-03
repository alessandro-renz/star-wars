import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {
  @Output() clickPrevious = new EventEmitter()
  @Output() clickNext = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitPrevious() {
    this.clickPrevious.emit()
  }

  emitNext() {
    this.clickNext.emit()
  }
}
