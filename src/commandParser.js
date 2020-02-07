const tokenizer = require('string-tokenizer')
const createUrlRegex = require('url-regex')

const homeResponse = () => {
    console.log('in homeresponse');
    
    // post back to slack acknowledging "home"
    return {
        text: 'yay you are home!',
        attachments: []
    }
}

const commandParser = (body) => {
    if (body.text.includes('home')) {
        return homeResponse();
    } else {
        console.log('did not match anything');
        return {
            text: 'nada',
            attachments: []
        }
    }
}

module.exports = { commandParser };
