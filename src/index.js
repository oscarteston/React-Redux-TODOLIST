// import { createStore } from 'redux';
// import todoApp from './reducers/reducers';
// import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions/actions';

// let store = createStore(todoApp);

// // Mostramos el estado inicial
// console.log(store.getState());

// // Cada vez que el estado cambie, lo mostramos
// let unsubscribe = store.subscribe(() =>
//   console.log(store.getState())
// );

// // Enviamos algunas acciones
// store.dispatch(addTodo('Aprender sobre acciones'));
// store.dispatch(addTodo('Aprender sobre reductores'));
// store.dispatch(addTodo('Aprender sobre stores'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// // Anulamos el monitoreo de las actualizaciones al estado
// unsubscribe();




import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

let store = createStore(todoApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.container')
);