const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
    numberOfIcecreams: 20,
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state , action) => {
            //state.numberOfIcecreams--;
            state.numberOfIcecreams -= action.payload
        },
        reStocked: (state , action) => {
            state.numberOfIcecreams += action.payload;
        },
    },
    extraReducers: {
        ["cake/ordered"]: (state , action) => {
           action.payload >= 2 ? state.numberOfIcecreams-- : "";
        }
    }
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered , (state , action) => {
    //         action.payload >= 2 ? state.numberOfIcecreams-- : "";
    //     } )
    // }
});

module.exports = icecreamSlice.reducer;
module.exports.icecreamActions = icecreamSlice.actions