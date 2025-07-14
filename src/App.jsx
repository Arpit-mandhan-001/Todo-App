import { useState } from "react";
import "./App.css";
import { Heading } from "./component/Heading";
import { AddTodo } from "./component/AddTodo";
import { WelcomeMessage } from "./component/WelcomeMessage";
import { TodoItems } from "./component/TodoItems";

function App() {

  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, dueDate) => {
    console.log(itemName, dueDate);
    const newItem = [...todoItem, { name: itemName, date: dueDate }];
    setTodoItem(newItem);
  };

  const handleDeleteClick = (itemName) => {
    const newItem = todoItem.filter((item) => item.name !== itemName);
    setTodoItem(newItem);
  };

  return (
    <>
      <Heading />
      <AddTodo onNewItem = {handleNewItem} />
      {todoItem.length == 0 && <WelcomeMessage />}
      <TodoItems todo={todoItem} onDelete={handleDeleteClick}></TodoItems>
    </>
  );
}

export default App;
