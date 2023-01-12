//connected with store to manipulate data 

import {combineReducers} from "redux";
import shoppingReducer from'./ShoppingCart/shoppingReducer';

const rootReducer = combineReducers({
    shop : shoppingReducer,
});


export default rootReducer;