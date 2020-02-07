const makeRequest = require('superagent');

const request = (endpoint, method, body) => {
    return makeRequest(method, endpoint)
        .then(res => {
            return Promise.resolve(JSON.stringify(res.body) || {})
        })
        .catch(err => {
            console.log('REQUEST ERROR! -', err)
        })
}

module.exports = {request};