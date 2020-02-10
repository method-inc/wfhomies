const homeResponse = (body) => {
    console.log('in homeresponse');
    console.log(body.text);
    // post back to slack acknowledging "home"
    // const responseBody = JSON.stringify({ text: 'yay you are home!' });

    // request(
    //     body.response_url,
    //     'POST',
    //     responseBody
    // );
};

const commandParser = (body) => {
    if (body.text.includes('home')) {
        return homeResponse(body);
    }
    console.log('did not match anything');
    return {
        text: 'nada',
        attachments: [],
    };
};

module.exports = { commandParser };
