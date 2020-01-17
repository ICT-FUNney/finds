import { call, put, takeEvery } from 'redux-saga/effects';
import { signInApi,signUpApi} from "../apis/UserLogin";
import {LOGIN_REQUEST,SIGNUP_REQUEST ,LoginSuccess,LoginFailed, SignupFailed, SignupSuccess } from "../actions/actionTypes";
import { push } from "connected-react-router";

function* getLoginRequestSaga(action){
    const data={id:action.payload.id,password:action.payload.password};
    const {newToken,error}=yield call(signInApi,data);
    if(error){
        yield put(LoginFailed(error));
    }else{
        yield put(LoginSuccess({token:newToken,id:data.id}));
        yield put(push("/home"));
    }
}

function* getSignupRequestSaga(action){
    const data = { id: action.payload.id, password: action.payload.password };
    const { newToken, error } = yield call(signUpApi, data);
    if (error)
    {
        yield put(SignupFailed(error));
    } else
    {
        yield put(SignupSuccess({ token: newToken, id: data.id }));
        yield put(push("/home"));
    }
}

const saga=[
    takeEvery(LOGIN_REQUEST,getLoginRequestSaga),
    takeEvery(SIGNUP_REQUEST,getSignupRequestSaga)
];

export default saga;