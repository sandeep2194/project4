function handleSubmit(event) {
    event.preventDefault()
        // check what text was put into the form field
    let url = document.getElementById('url').value
    if (Client.checkForUrl(url) === true) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/classify')
            .then(res => res.json())
            .then(function(res) {
                document.getElementById('results').innerHTML = res.message
            })
    } else {
        alert("string in not a url")
    }

}

export { handleSubmit }