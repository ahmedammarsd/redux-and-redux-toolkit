const createSlice = require("@reduxjs/toolkit").createSlice;
const { icecreamActions } = require("../icecram/icecreamSlice");


const initialState = {
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

module.exports = cakeSlice.reducer;
// console.log(cakeSlice.actions)
module.exports.cakeActions = cakeSlice.actions