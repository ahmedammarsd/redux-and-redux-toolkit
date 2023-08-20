import React from "react";
import { useSelector , useDispatch} from "react-redux";
import { selectTodoList, setCheck } from "../features/TodoSlice";

const TodoList = () => {

 // const todolist = useSelector((state) => state.todos.todoList);
   const todolist = useSelector(selectTodoList);

  const dispatch = useDispatch();
  const handleChange = (id) => {
    dispatch(setCheck(id))
  }
  return (
    <div className="todolist">
      {todolist?.map((todo) => (
        <div key={todo.id} className="todo">
          <input type="checkbox"
           id={todo.id} checked={todo.done}
           onChange={() => handleChange(todo.id)}
           />
          <label htmlFor={todo.id}
          style={
            {
              textDecoration: todo.done ? "line-through" : null,
            }
          }
          >{todo.title}</label>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
