const tokenizer = require('string-tokenizer')
const createUrlRegex = require('url-regex')

const homeResponse = (body) => {
    console.log('in homeresponse');
    console.log(body.text);
    // post back to slack acknowledging "home"

    fetch(body.response_url, { 
        method: 'post',
        body: JSON.stringify({
            text: 'yay you are home!'
        })
  });
}

const commandParser = (body) => {
    if (body.text.includes('home')) {
        return homeResponse(body);
    } else {
        console.log('did not match anything');
        return {
            text: 'nada',
            attachments: []
        }
    }
}

module.exports = { commandParser };
