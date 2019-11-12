import {USERDOC_FAILED,USERDOC_SUCCESS} from "../actions/actionTypes.js";

const initState={
    userDoc: JSON.parse(sessionStorage.getItem("user-doc"))||[]
};

export default function userDocReducer(state=initState,action){
    switch(action.type){
        case USERDOC_SUCCESS:
            sessionStorage.setItem("user-doc",JSON.stringify(action.payload));
            return {...state,userDoc:action.payload};
        case USERDOC_FAILED:
            sessionStorage.removeItem("user-doc");
            return {...state,userDoc:[]};
        default:
            return state;
    }
}