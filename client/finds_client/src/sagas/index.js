import {all} from "redux-saga/effects";
import UserDocSaga from "./UserDoc";
import SearchSaga from "./Search";
import UserInfoSaga from "./UserInfo";
import UserLoginSaga from "./UserLogin";

export default function* rootSaga(){
    yield all([
        ...UserDocSaga,...UserInfoSaga,...SearchSaga,...UserLoginSaga
    ]);
}