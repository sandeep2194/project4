function handleSubmit(event) {
    event.preventDefault()
    let testlink = document.getElementById('testlink').value

    postData('http://localhost:8081/classify', { link: testlink })
        .then(() => {
            updateUI()
        })
}

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
        const data = await response.json();
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
        console.log(allData)

    } catch (e) {
        console.log('erroe', e);
    }
};
export { handleSubmit }