import { Task } from "./Task";

export const TodoItems = ({ todo, onDelete }) => {
  return (
    <>
      {todo.map((task) => (
        <Task
          key={task.name}
          taskName={task.name}
          taskDate={task.date}
          onDelete={onDelete}
        ></Task>
      ))}
    </>
  );
};
