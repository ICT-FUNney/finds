import * as request from "superagent";

export const getUserInfo = (userId) => {
    return request.get(`https://private-anon-09b303e34c-finds1.apiary-mock.com/search/${userId}`)
        .then(res => {
            console.log(res)
            return { res: res.body };
        }).catch(err => {
            console.log(err);
            return { err };
        })
}
