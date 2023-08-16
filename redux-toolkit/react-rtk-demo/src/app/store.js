
import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feature/cake/cakeSlice";
import icecreamReducer from "../feature/icecram/icecreamSlice";
import userReducer from "../feature/user/userSlice";
import {logger} from "redux-logger"

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;