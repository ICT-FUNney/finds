import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import search from "./Search";
import userDoc from "./UserDoc";
import userInfo from "./UserInfo";

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    search,
    userDoc,
    userInfo
});

export default rootReducer;