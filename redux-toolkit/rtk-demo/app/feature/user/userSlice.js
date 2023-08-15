const createSlice = require("@reduxjs/toolkit");
const axios = require("axios");
const creatAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk

const initailState = {
    loading: false,
    data:[],
    error:""
};

const fetchUser = creatAsyncThunk("user/fetchUser", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {})
    .catch((error) => {})
})
const userSlice = createSlice({
    name: "user",
    initailState,
})