import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgRedux, NgReduxModule} from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoDashboardComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
