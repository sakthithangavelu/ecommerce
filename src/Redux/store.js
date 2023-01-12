//all state (data) are stored here
import {createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from "./rootReducer";

const store = createStore(rootReducer,composeWithDevTools()); //takes in a reducer



export default store;