const { combineReducers } = require("@reduxjs/toolkit");
const { userSlice } = require("./formSlice/getUser");


const rootReducer = combineReducers(
    {
        [userSlice.reducerPath]: userSlice.reducer,
    
    }
);

rootReducer.middleware = [
  userSlice.middleware,
];

export default rootReducer;