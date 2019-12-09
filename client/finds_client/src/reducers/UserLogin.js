import {LOGIN_SUCCESS,LOGIN_FAILED} from "../actions/actionTypes";

const initState={
    token:sessionStorage.getItem("finds-token")||"",
    id:sessionStorage.getItem("finds-id")||""
};

export default function userLoginReducer(state = initState, action) {
    switch (action.type)
    {
        case LOGIN_SUCCESS:
            sessionStorage.setItem("finds-token", action.payload.token);
            sessionStorage.setItem("finds-id", action.payload.id);
            return { ...state, token: action.payload.token,id:action.payload.id };
        case LOGIN_FAILED:
            sessionStorage.removeItem("finds-token");
            sessionStorage.removeItem("finds-id");
            return { ...state, token: "",id:"" };
        default:
            return state;
    }
}