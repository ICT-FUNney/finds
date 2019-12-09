export const MOVE_DOC_DETAIL ="MOVE_DOC_DETAIL";

export const moveDetailPage=(target)=>({
    type:MOVE_DOC_DETAIL,
    payload:target
});

//=======非同期処理関連=======
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const SIGNUP_REQUEST ='SIGNUP_REQUEST';
export const SIGNUP_SUCCESS ='SIGNUP_SUCCESS';
export const SIGNUP_FAILED ='SIGNUP_FAILED';
export const SEARCH_REQUEST ="SEARCH_REQUEST";
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILED = 'SEARCH_FAILED';
export const USERDOC_REQUEST = "USERDOC_REQUEST";
export const USERDOC_SUCCESS = 'USERDOC_SUCCESS';
export const USERDOC_FAILED = 'USERDOC_FAILED';
export const USERINFO_REQUEST = "USERINFO_REQUEST";
export const USERINFO_SUCCESS = 'USERINFO_SUCCESS';
export const USERINFO_FAILED = 'USERINFO_FAILED';

export const getLoginRequest=(info)=>({
    type:LOGIN_REQUEST,
    payload:info
})

export const getSignupRequest=(info)=>({
    type: SIGNUP_REQUEST,
    payload:info
})

export const getSearchRequest=(word)=>({
        type:SEARCH_REQUEST,
        payload:word
});

export const getUserDocRequest=(id)=>({
    type:USERDOC_REQUEST,
    payload:id
});

export const getUserInfoRequest=(id)=>({
    type:USERINFO_REQUEST,
    payload:id
});

export const LoginSuccess=(res)=>({
    type:LOGIN_SUCCESS,
    payload:res
})

export const LoginFailed=(err)=>({
    type:LOGIN_FAILED,
    payload:err
})

export const SignupSuccess=(res)=>({
    type:SIGNUP_SUCCESS,
    payload:res
})

export const SignupFailed=(err)=>({
    type:SIGNUP_FAILED,
    payload:err
})

export const SearchSuccess=(res)=>({
    type:SEARCH_SUCCESS,
    payload:res
});

export const SearchFailed=(err)=>({
    type:SEARCH_FAILED,
    payload:err
});

export const UserDocSuccess=(res)=>({
    type:USERDOC_SUCCESS,
    payload:res
});

export const UserDocFailed=(err)=>({
    type:USERDOC_FAILED,
    payload:err
});

export const UserInfoSuccess=(res)=>({
    type:USERINFO_SUCCESS,
    payload:res
});

export const UserInfoFailed=(err)=>({
    type:USERINFO_FAILED,
    payload:err
});
//================