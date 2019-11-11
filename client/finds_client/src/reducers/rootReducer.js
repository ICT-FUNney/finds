import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import finds from './finds';

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    finds
});

export default rootReducer;