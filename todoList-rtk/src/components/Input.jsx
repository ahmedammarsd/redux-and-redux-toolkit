import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/TodoSlice";

const Input = () => {
  const [input, setInput] = useState("");
  const [error , setError] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
  let RemoveSpaceInput = input.trim();
    if (RemoveSpaceInput){
        dispatch(saveTodo({
            id:Date.now(),
            title: input,
            done:false
        }));
        setInput("");
        return;
    }
    else{
        setError("Sorry, The Feild Required")
        setTimeout(() => setError("") , 5000);
        return
    }
  };

  return (
    <div>
        <p
        style={{
            padding: "9px",
            height:"30px",
            color: "red",
            opacity: `${error ? "1" : "0"}`
        }}
        >
            {error}
        </p>
    <form onSubmit={handleSubmit}>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="submit">Add</button>
    </form>
    </div>
  );
};

export default Input;
