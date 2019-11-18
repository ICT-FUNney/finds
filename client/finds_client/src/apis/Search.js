import * as request from "superagent";

export const getSearchResult = (docName) => {
    return request.get(`https://private-anon-14c3863ce4-finds1.apiary-mock.com/search/${docName}`)
        .then(res => {
            return {res:res.body};
        }).catch(err => {
            console.log(err);
            return {err};
        })
}