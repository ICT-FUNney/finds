import { call, put, takeEvery } from 'redux-saga/effects';
import {getUserDocument} from "../apis/UserDoc";
import {USERDOC_REQUEST,UserDocSuccess,UserDocFailed} from "../actions/actionTypes";

function* getUserDocumentSaga(action){
    const id=action.payload;
    const {res,err}=yield call(getUserDocument,id);
    if(err){
        yield put(UserDocFailed(err));
    }else{
        yield put(UserDocSuccess(res));
    }
}

const saga=[
    takeEvery(USERDOC_REQUEST,getUserDocumentSaga)
];

export default saga;