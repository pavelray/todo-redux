import { ADD, DELETE, DONE, CLEAR_TODOS } from './action';
import { tassign } from 'tassign';
export interface IAppState {
 todos: any[];
 completed: any[];
 lastUpdated: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  completed: [],
  lastUpdated: null
};

export function rootReducer(state: IAppState, action): IAppState {
  switch (action.type) {
    case ADD:
      const newTodo = {id: state.todos.length + 1, name: action.name};
      return Object.assign({}, state,
      {
        todos: state.todos.concat(newTodo),
        lastUpdated: new Date()
      });

    case DONE:
        const complete = {id: state.completed.length + 1, name: action.name};
        let index = state.todos.findIndex(el => el.name === action.name);

        return Object.assign({}, state,
        {
          todo: state.todos.splice(index, 1),
          completed: state.completed.concat(complete),
          lastUpdated: new Date()
        });

    case DELETE:
      index = state.todos.findIndex(el => el.name === action.name);
      return Object.assign({}, state,
        {
          todo: state.todos.splice(index, 1),
          lastUpdated: new Date()
        });
    case CLEAR_TODOS:
      return tassign(state, {
         todos: [],
         completed: [],
         lastUpdated: new Date()
       });
  }
  return state;
}
