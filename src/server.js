const Express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv').config()

const commandParser = require('./commandParser').commandParser;

const app = new Express()
app.use(bodyParser.urlencoded({extended: true}))

const {SLACK_TOKEN: slackToken, PORT} = process.env

if (!slackToken) {
    console.error('missing environment variables SLACK_TOKEN')
    process.exit(1)
}

const port = PORT || 8080

app.post('/', (req, res) => {
    // console.log('RESPONSE', res)
    // return commandParser(req.body)
    console.log('-----------------')
    if (req.body.text.includes('home')) {
        res.json({
            response_type: 'ephemeral',
            text: 'yay you are home!'
        })
    }
})

app.listen(port, () => {
    console.log(`Server started at localhost:${port}`)
})
