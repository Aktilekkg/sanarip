import React from 'react';
import './App.css';
import TodoList from './TodoList'

const todolist = [
  {h3:'Card one',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
  {h3:'Card two',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
  {h3:'Card three',p:'lorem ipsum dolor sit amet, consectetur adipicing elit, sed to eiusmud tempor incididunt ut labore etdolore magna aliqua',a:'Read More'},
]
function App() {
  return (
    <div className="App">
      <TodoList todolist={todolist}/>
    </div>
  );
}

export default App;
