import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../feature/todo/todoSlice';

const Task = () => {
    const dispatch = useDispatch();
    const [ task , setTask] = useState("");
   // const inputRef = useRef(null);
    const addNewTask = () => {
      //  const task = inputRef.current.vaule.trim();
        // if (task !== ""){
        if (task.trim() !== ""){   
            dispatch(addTodo());
            setTask("")
           // inputRef.current.value = "";
        }
    }
  return (
    <div>
        <div>
            <input
             type="text"
             placeholder="Add Task.."
            // ref={inputRef}
            value={task}
            onBlur={(e) => setTask(e.target.value)}
            />
            <button type="button" onClick={addNewTask()}>Add Task</button>
        </div>
    </div>
  )
}

export default Task