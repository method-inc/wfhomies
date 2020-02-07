const tokenizer = require('string-tokenizer')
const createUrlRegex = require('url-regex')

const homeResponse = () => {
    // post back to slack acknowledging "home"
    return {
        text: 'yay you are home!',
        attachments: []
    }
}

const commandParser = (body) => {
    console.log('IN COMMAND PARSER')
    console.log('BODY', body);
    if (body.text.includes('home')) {
        return homeResponse();
    }
}

module.exports = { commandParser };
