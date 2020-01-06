import {call,put,takeEvery} from "redux-saga/effects";
import {push} from "connected-react-router";
import {BUYDOC_REQUEST,buyDocSuccess,buyDocFailed} from "../actions/actionTypes";
import {sendApi} from "../apis/buyDoc";

function* buyDoc(action){
    const data =action.payload;
    const {body,newToken,error}= yield call(sendApi,data,data.token);
    if(error){
        yield put(buyDocFailed(error));
    }else{
        yield put(push("/detail/afterpayment"));
    }
}

const sagas=[takeEvery(BUYDOC_REQUEST,buyDoc)];

export default sagas;