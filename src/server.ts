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
    // console.log('RESPONSE', res)
    // const result = commandParser(req.body);

    if (req.body.text.includes('home')) {
        res.json({
            response_type: 'ephemeral',
            text: 'I\'ve marked you as working from home. Enjoy your day!',
        })else if (req.body.text.includes('office')) {
        res.json({
            response_type: 'ephemeral',
            text: 'I\'ve marked you as working from the office. Enjoy your day!',
        }
    }
});

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`);
});
