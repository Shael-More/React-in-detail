import React, { useState, useEffect } from 'react';
import TodoInput from './Components/TodoInput';
import TodoList from './Components/TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState('');

  const persistData = (newList) => {
    localStorage.setItem("todos", JSON.stringify({todos: newList}))
  }

  const handleAddTodo = (newTodo) => {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  };

  const handleDeleteTodo = (index) => {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  };

  const handleEditTodo = (index) => {
    const valueToBeedited = todos[index];
    setTodoValue(valueToBeedited);
    handleDeleteTodo(index);
  };

  useEffect(() => {
    if (!localStorage)
      return

    let localTodos = localStorage.getItem("todos")

    if(!localTodos) return

    localTodos = JSON.parse(localTodos).todos


    setTodoValue(localTodos)
  }, [])

 

  return (
    <>
      <TodoInput
        todoValue={todoValue}
        setTodoValue={setTodoValue}
        handleAddTodo={handleAddTodo}
      />
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
    </>
  );
}

export default App;
