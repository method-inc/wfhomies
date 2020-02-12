import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { MongoClient as db } from 'mongodb';

dotenv.config();

// const { commandParser } = require('./commandParser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const { SLACK_TOKEN: slackToken, PORT } = process.env;

if (!slackToken) {
    console.error('missing environment variables SLACK_TOKEN');
    process.exit(1);
}

const port = PORT || 8080;

app.post('/', (req, res) => {
    console.log('RESPONSE', res)
    // const result = commandParser(req.body);
    switch (req.body.text) {
        case 'home':
            res.json({
                response_type: 'ephemeral',
                text: ':house_with_garden: I\'ve marked you as working from home. Enjoy your day!',
            });
            break;
        case 'office':
            res.json({
                response_type: 'ephemeral',
                text: ':office: I\'ve marked you as working from the office. Have fun!',
            });
            break;
        case 'remote':
            res.json({
                response_type: 'ephemeral',
                text: ':snowboarder: I\'ve marked you as working remotely. Wherever you are, hope you\'re well!',
            });
            break;
        case 'everyone':
            res.json({
                response_type: 'ephemeral',
                text: ':skookum: This will eventually return a list of where everyone is working from today',
            });
            break;
        default:
            res.json({
                response_type: 'ephemeral',
                text: ':question: Sorry, I didn\'t get that. Try `/wf home`, `/wf office`, `/wf remote`, or `/wf everyone`.',
            });
            break;
    }
});

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
