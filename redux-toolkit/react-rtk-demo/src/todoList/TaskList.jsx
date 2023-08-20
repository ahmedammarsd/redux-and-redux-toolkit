import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { deleteTodo } from '../feature/todo/todoSlice';

const TaskList = () => {
    const tasks = useSelector( (state) => state.todoList.tasks)
    const dispatch = useDispatch();

    let counterTasks = 0
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }
  return (
    <div>
        <div>
            <h2>TASKS</h2>
            <ul>
                {
                    tasks.map( (task) => (
                        <li key={task.id}>
                            {++counterTasks}
                            {task.text}
                            <button
                             onClick={() => handleDelete(task.id)}
                            >delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  )
}

export default TaskList