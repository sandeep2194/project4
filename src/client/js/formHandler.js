function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let testlink = document.getElementById('testlink').value
        // if (Client.checkForUrl(url) === true) {
    async function postData(url = '', data = {}) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                    // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        return response.json(); // parses JSON response into native JavaScript objects

    }

    postData('http://localhost:8081/classify', { link: testlink })
    console.log('sent form')
}

export { handleSubmit }