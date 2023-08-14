const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    test: 5,
    numberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers:{
        ordered: (state , action) => {
            state.numberOfCakes -= action.payload;
        },
        reStocked: (state, action) => {
            state.numberOfCakes += action.payload;
        }
    }
});

module.exports = cakeSlice.reducer;
// console.log(cakeSlice.actions)
module.exports.cakeActions = cakeSlice.actions