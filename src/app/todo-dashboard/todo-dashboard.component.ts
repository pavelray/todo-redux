import { CLEAR_TODOS } from './../action';
import { Component, OnInit } from '@angular/core';
import { select, NgRedux } from '@angular-redux/store';
import { IAppState } from '../store';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select() todos;
  @select() completed;
  @select() lastUpdated;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }

  ngOnInit() {
  }

}
