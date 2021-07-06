//this is a handle function to send and get datafrom the server data and display it in the browser
function handleSubmit(event) {
    event.preventDefault()

    // here i write this line to get a url from user
    let userUrl = document.getElementById('url').value
    //here i check the url it is a url or no throght the urlValidatiom function 
   if(Client.urlValidiation(userUrl) == true) {
    console.log("::: Form Submitted :::")
    // here i send a userurl to the server to get the require api data
    fetch('http://localhost:8081/test/'+userUrl)
    //j her i convert the data to jason file
    .then(res => res.json())
    // here i display the data in the html file to see in browser
    .then(function(res) {
        document.getElementById('agreement').innerHTML = ` Agreement for this url is : ${res.agreement} `
        document.getElementById('confidence').innerHTML = ` confidence for this url is : ${res.confidence} `
        document.getElementById('subjectivity').innerHTML = ` subjectivity for this url is : ${res.subjectivity} `
        document.getElementById('irony').innerHTML = ` irony for this url is : ${res.irony} `
    })}
    // here i display alert to the user in case he insert a invalid url
    else{
        alert(' invaled url or empty  please insert valid url')
    }
}
// here i export the handle functhion to import it in index.js file or any file
export { handleSubmit }
