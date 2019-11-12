import { call, put, takeEvery } from 'redux-saga/effects';
import {getUserInfo} from "../apis/UserInfo.js";
import {UserInfoSuccess,UserInfoFailed,USERINFO_REQUEST} from "../actions/actionTypes";

function* getUserInfoSaga(action){
    const id=action.payload;
    const {res,err}=yield call(getUserInfo,id);
    if(err){
        yield put(UserInfoFailed(err));
    }else{
        yield put(UserInfoSuccess(res));
    }
}

const saga=[
    takeEvery(USERINFO_REQUEST,getUserInfoSaga)
];

export default saga;