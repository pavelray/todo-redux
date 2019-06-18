import { IAppState } from './../store';
import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import { ADD, DONE } from '../action';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @select() todos;
  @select() completed;
  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  addTodo(name) {
    if (!name.value) { return; }

    this.ngRedux.dispatch({type: ADD, name: name.value});

    name.value = '';
  }

  completedTodo(todo) {
    this.ngRedux.dispatch({type: DONE, name: todo.name});
  }

}
