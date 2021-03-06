import { error_handle } from "./helpers";
import { text_truncate } from "./helpers";
import { backend_callback_url_switch } from "./helpers";

const postData = async(url = " ", data = {}) => {
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });

    try {
        const content = await response.json();
    } catch (e) {
        console.log("error", e);
        // appropriately handle the error
    }
};


const updateUI = async() => {

    const request = await fetch(backend_callback_url_switch('/getdata'));
    try {
        const allData = await request.json();
        document.getElementById('results').style.display = 'flex';
        document.getElementById('link_text').innerHTML = text_truncate(allData.text, 500);
        document.getElementById('link_ln').innerHTML = allData.language;
        document.getElementById('category').innerHTML = allData.categories[0].label;
        clearTimeout();

    } catch (e) {
        console.log('erroe', e);
        error_handle("sorry something went wrong")
    }
};

export {
    postData,
    updateUI
}