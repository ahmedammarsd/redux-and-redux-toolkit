import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    numberOfCakes: 10,
};

const cakeSlice = createSlice({
    name: "cake",
    initialState,
    reducers:{
        ordered: (state , action) => {
            state.numberOfCakes -= (action.payload == undefined ? 1 : action.payload);
        },
        reStocked: (state, action) => {
            state.numberOfCakes += (action.payload == undefined ? 1 : action.payload)/*action.payload*/
        },
    },
    // extraReducers: {
    //     ["icecream/ordered"]: (state , action) => {
    //         action.payload >= 3 ? state.numberOfCakes-- : "";
    //     }
    // }
    // extraReducers: (builder) => {
    //     builder.addCase(icecreamActions.ordered, (state , action) => {
    //         action.payload >= 3 ? state.numberOfCakes-- : "";
    //     } )
    // }
});

export default cakeSlice.reducer;
export const { ordered , reStocked } = cakeSlice.actions;
// module.exports.cakeActions = cakeSlice.actions