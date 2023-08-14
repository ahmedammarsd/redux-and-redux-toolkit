// console.log("Hello Redux");
const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require("redux-logger");
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();


 // INITIALSTATE ====
const initialCakelState = {
    numberOfCakes: 10,
};

const initialIcecreamlState = {
    numberOfIcecream: 10,
}
//========================================


// ACTIONS ======
// === CAKE ===
const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";

// === ICECREAM ===
const BUY_ICECREAM = "BUY_ICECREAM";
const ADD_ICECREAM = "ADD_ICECREAM";

// FUNCTIONS RETURN OBJECTS ACTIONS
//  === CAKE FUNCTIONS ===
function buyCake(num = 1) {
    return {
        type: BUY_CAKE,
        num: num
    };
}

function addCake(num = 1) {
    return {
        type: ADD_CAKE,
        num : num
    }
}

//  === ICECREAM FUNCTIONS ===
function buyIcecream(num = 1) {
    return {
        type: BUY_ICECREAM,
        num: num
    };
}

function addIcecream(num = 1) {
    return {
        type: ADD_ICECREAM,
        num : num
    }
}
// ==================================================


// ================  REDUCERS =======================

// === CAKE REDUCER ===
const cakeReducer = (state = initialCakelState , action) => {
    switch(action.type) {
        case BUY_CAKE :
            console.log(`==== update buy ${action.num} cake${action.num > 1 && action.num != 1 ? "s" : ""} ====`)
            return {
                ...state ,
                numberOfCakes: state.numberOfCakes - action.num,
            };
        case ADD_CAKE : 
        console.log(`==== update add ${action.num} cake${action.num > 1 && action.num != 1 ? "s" : ""} ====`)
            return {
                ...state ,
                numberOfCakes: state.numberOfCakes + action.num
            }    
        default:
            return state    
    }
};

// === ICECREAM REDUCER ===
const icecreamReducer = (state = initialIcecreamlState , action) => {
    switch(action.type) {
        case BUY_ICECREAM :
            console.log(`==== update buy ${action.num} Icecream${action.num > 1 && action.num != 1 ? "s" : ""} ====`)
            return {
                ...state ,
                numberOfIcecream: state.numberOfIcecream - action.num,
            };
        case ADD_ICECREAM : 
        console.log(`==== update add ${action.num} Icecream${action.num > 1 && action.num != 1 ? "s" : ""} ====`)
            return {
                ...state ,
                numberOfIcecream: state.numberOfIcecream + action.num
            }    
        default:
            return state    
    }
};


// ======================================================

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: icecreamReducer,
})

const store = createStore(rootReducer , applyMiddleware(logger));

// console.log( "Initial State" ,store.getState() );
// const unsubscribe = store.subscribe(() => console.log("updated State" , store.getState()));
console.log( "Initial State" ,store.getState() );
const unsubscribe = store.subscribe(() =>{});

// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
store.dispatch(addCake(3))
store.dispatch(addIcecream(4))
unsubscribe();