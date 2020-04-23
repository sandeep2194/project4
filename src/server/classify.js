const textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});

let recieved_data = {};

function get_classification(url) {
    textapi.classify({
        url: url
    }, function(error, response) {
        if (error === null) {
            response['categories'].forEach(function(c) {
                recieved_data['entry'] = c;
                return recieved_data;
            });
        }
    });
}