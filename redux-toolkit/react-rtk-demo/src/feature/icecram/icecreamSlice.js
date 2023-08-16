import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    numberOfIcecreams: 20,
}

const icecreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers:{
        ordered: (state , action) => {
            //state.numberOfIcecreams--;
            state.numberOfIcecreams -= (action.payload == undefined ? 1 : action.payload) /*action.payload*/
        },
        reStocked: (state , action) => {
            state.numberOfIcecreams += (action.payload == undefined ? 1 : action.payload)/*action.payload*/
        },
    },
    // extraReducers: {
    //     ["cake/ordered"]: (state , action) => {
    //        action.payload >= 2 ? state.numberOfIcecreams-- : "";
    //     }
    // }
    // extraReducers: (builder) => {
    //     builder.addCase(cakeActions.ordered , (state , action) => {
    //         action.payload >= 2 ? state.numberOfIcecreams-- : "";
    //     } )
    // }
});

export default icecreamSlice.reducer;
// module.exports = icecreamSlice.reducer;

export const { ordered , reStocked } = icecreamSlice.actions;
// module.exports.icecreamActions = icecreamSlice.actions