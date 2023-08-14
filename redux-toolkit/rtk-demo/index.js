const { cakeActions } = require("./app/feature/cake/cakeSlice");
const { icecreamActions } = require("./app/feature/icecram/icecreamSlice");

const store = require("./app/store");

//console.log("iniail State" , store.getState());
// const unsubscribe = store.subscribe(() => { console.log("Updated State", store.getState())});
const unsubscribe = store.subscribe(() => {});
store.dispatch(cakeActions.ordered(3));
//store.dispatch(icecreamActions.ordered());
//store.dispatch(cakeActions.reStocked(2))
unsubscribe();