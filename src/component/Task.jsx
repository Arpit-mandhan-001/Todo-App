
export const Task = ({taskName, taskDate, onDelete}) => {
  return (
   <div className="task-show">
    <h3 className="task-name">you task is {taskName}</h3>
    <h3 className="task-date">Due date is {taskDate}</h3>
    <button className="task-delete" onClick={() =>  onDelete(taskName)}>Delete</button>
   </div>
  )
}
