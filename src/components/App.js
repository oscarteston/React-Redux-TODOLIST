import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// );

const App = ({params}) => (
  <div>
    <AddTodo />
    <VisibleTodoList filter={params.filter || 'SHOW_ALL'}/>
    <Footer />
  </div>
);

export default App;