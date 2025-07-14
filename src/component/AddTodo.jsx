import { useState } from "react";

export const AddTodo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonCicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  return (
    <div className="add-todo">
      <input
        className="todo-input"
        type="text"
        placeholder="Enter your Todo here"
        onChange={handleNameChange}
      />
      <div className="input-group">
        <input
          className="todo-date"
          type="date"
          placeholder="none"
          onChange={handleDateChange}
        />
        <button className="add-button" onClick={handleAddButtonCicked}>
          ADD
        </button>
      </div>
    </div>
  );
};
