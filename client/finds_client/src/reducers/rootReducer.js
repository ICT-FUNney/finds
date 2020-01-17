import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import search from "./Search";
import userDoc from "./UserDoc";
import userInfo from "./UserInfo";
import userLogin from "./UserLogin";
import selectDoc from "./SelectDoc";

const rootReducer = history => combineReducers({
    router: connectRouter(history),
    search,
    userDoc,
    userInfo,
    userLogin,
    selectDoc
});

export default rootReducer;