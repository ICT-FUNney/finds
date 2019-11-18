import * as request from "superagent";

export const getUserDocument = (id) => {
    return request.get(`https://private-anon-14c3863ce4-finds1.apiary-mock.com/documents/${id}`)
        .then(res => {
            return {res:res.body};
        }).catch(err => {
            console.log(err);
            return {err};
        })
}