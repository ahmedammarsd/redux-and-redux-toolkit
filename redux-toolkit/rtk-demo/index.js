const { cakeActions } = require("./feature/cake/cakeSlice");
const { icecreamActions } = require("./feature/icecram/icecreamSlice");
const { fetchUsers } = require("./feature/user/userSlice");
const store = require("./app/store");

console.log("iniail State" , store.getState());
const unsubscribe = store.subscribe(() => { console.log("Updated State", store.getState())});
store.dispatch(fetchUsers())
// const unsubscribe = store.subscribe(() => {});
//store.dispatch(cakeActions.ordered(3));
// store.dispatch(icecreamActions.ordered(3));
//store.dispatch(cakeActions.reStocked(2))
// unsubscribe();