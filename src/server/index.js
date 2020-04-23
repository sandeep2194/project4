var path = require('path')
const express = require('express')
var aylien = require("aylien_textapi");
const cors = require('cors')
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json())
console.log(__dirname)

let recieved_data = {};

const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.post('/classify', function(req, res) {
    textapi.classify({
        url: req.body.link
    }, function(error, response) {
        if (error === null) {
            response['categories'].forEach(function(c) {
                console.log(c);
            });
        } else console.log(error);
    });
})