import { call, put, takeEvery } from 'redux-saga/effects';
import {getSearchResult} from "../apis/Search";
import {SEARCH_REQUEST,SearchSuccess,SearchFailed} from "../actions/actionTypes";

function* getSearchResultSaga(action){
    const {res,err}=yield call(getSearchResult,action.payload);
    if(err){
        yield put(SearchFailed(err));
    }else{
        yield put(SearchSuccess(res));
    }
}

const saga=[
    takeEvery(SEARCH_REQUEST,getSearchResultSaga)
];

export default saga;