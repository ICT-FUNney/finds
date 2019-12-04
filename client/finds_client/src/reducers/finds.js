import *as actionTypes from '../actions/actionTypes';


const initialState = {
  hoge:0,
};

export function finds(state = initialState, action) {
    switch (action.type) {
        case 'LOGIN':
        case 'HOME':
        default:
            return state;
    }
}

export default finds;