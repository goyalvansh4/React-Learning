import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { TodoItemContext } from "./store/items-context-store";
import "./App.css";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
    let newItem = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newItem);
  };
  const deleteItem = (itemName) => {
    let remainingTodo = todoItems.filter((item) => item.name !== itemName);
    setTodoItems(remainingTodo);
  };
  return (
    <TodoItemContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemContext.Provider>
  );
}

export default App;
