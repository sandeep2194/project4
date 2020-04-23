var path = require('path')
const express = require('express')
const mockAPIResponse = require('./classify.js')
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);

const app = express()

app.use(express.static('dist'))

console.log(__dirname)


app.get('/', function(req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Example app listening on port 8081!')
})

app.get('/classify', function(req, res) {
    res.send(get_classification)
})