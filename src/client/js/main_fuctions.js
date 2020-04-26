import { error_handle } from "./helpers";
import { text_truncate } from "./helpers";

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
        const data = response;
        return data

    } catch (e) {
        console.log("error", e);
        // appropriately handle the error
    }
};


const updateUI = async() => {

    const request = await fetch('http://localhost:8081/getdata');
    try {
        const allData = await request.json();
        if (allData === null) {
            error_handle("sorry not able to get data for this URL")
        } else {
            document.getElementById('results').style.display = 'flex';
            document.getElementById('link_text').innerHTML = text_truncate(allData.text, 500);
            document.getElementById('link_ln').innerHTML = allData.language;
            document.getElementById('category').innerHTML = allData.categories[0].label;
            clearTimeout();
        }
    } catch (e) {
        console.log('erroe', e);
    }
};

export {
    postData,
    updateUI
}