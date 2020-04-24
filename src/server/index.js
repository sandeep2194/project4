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

let recieved_link = '';
let got_details = {};

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
    recieved_link = req.body.link;
    textapi.classify({ url: recieved_link }, (error, response) => {
        got_details['first'] = response;
        console.log(got_details);
    })
    res.end();
})

app.get('/getdata', function(req, res) {
    // res.sendFile('dist/index.html')
    res.send(got_details);
})