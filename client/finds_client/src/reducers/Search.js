import {SEARCH_SUCCESS,SEARCH_FAILED} from "../actions/actionTypes.js";

const initState={
    searchResult:JSON.parse(sessionStorage.getItem("search-result"))||[]
};

export default function searchReducer(state=initState,action){
    switch(action.type){
        case SEARCH_SUCCESS:
            sessionStorage.setItem("search-result",JSON.stringify(action.payload));
            return {...state,searchResult:action.payload};
        case SEARCH_FAILED:
            sessionStorage.removeItem("search-result");
            return {...state,searchResult:[]};
        default:
            return state;
    }
}