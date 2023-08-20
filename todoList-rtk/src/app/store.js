import { configureStore } from "@reduxjs/toolkit";
import TodoReducer from "../features/TodoSlice";

const store = configureStore({
    reducer: {
        todos: TodoReducer
    }
});

// store.subscribe( () => {
//     localStorage.setItem("reduxState" , JSON.stringify(store.getState()))
// })

export default store;