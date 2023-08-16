const createSlice = require("@reduxjs/toolkit").createSlice;
const axios = require("axios");
const creatAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk

const initialState = {
    loading: false,
    data:[],
    error:"",
};

// Generated pending , fukfikked , rejected action types
const fetchUsers = creatAsyncThunk("user/fetchUsers", () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
        res.data.map( (user) => user.id);
    })
})
const userSlice = createSlice({
    name: "user",
    initialState,
    extraReducers:(builder) => {
        builder.addCase(fetchUsers.pending , (state) => {
            state.loading = true;
        }),
        builder.addCase(fetchUsers.fulfilled , (state , action) => {
            state.loading = false;
            state.data = action.payload;
            state.error = "";
        }),
        builder.addCase(fetchUsers.rejected , (state , action) => {
            state.loading = false;
            state.data = [];
            state.error = action.error.message;
        })
    }
});

module.exports = userSlice.reducer;

module.exports.fetchUsers = fetchUsers;
