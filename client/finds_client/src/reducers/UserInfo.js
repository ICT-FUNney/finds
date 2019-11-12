import {USERINFO_SUCCESS,USERINFO_FAILED} from "../actions/actionTypes";

const initState={
    userInfo: JSON.parse(sessionStorage.getItem("user-info"))||null
};

export default function userInfoReducer(state=initState,action){
    switch(action.type){
        case USERINFO_SUCCESS:
            sessionStorage.setItem("user-info",JSON.stringify(action.payload));
            return {...state,userInfo:action.payload};
        case USERINFO_FAILED:
            sessionStorage.removeItem("user-info");
            return {...state,userInfo:null};
        default:
            return state;
    }
}