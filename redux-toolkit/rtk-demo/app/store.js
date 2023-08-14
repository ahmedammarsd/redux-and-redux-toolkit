const configureStore = require("@reduxjs/toolkit").configureStore;
const cakeReducer = require("./feature/cake/cakeSlice");
const icecreamReducer = require("./feature/icecram/icecreamSlice");
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();
const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: icecreamReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

module.exports = store