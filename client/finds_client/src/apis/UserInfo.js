import * as request from "superagent";

export const getUserInfo = (userId) => {
    return request.get(`http://private-anon-14c3863ce4-finds1.apiary-mock.com/userinfo/${userId}`)
        .then(res => {
            return {res:res.body};
        }).catch(err => {
            console.log(err);
            return {err};
        })
}
