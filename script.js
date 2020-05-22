// TODO: add code here

window.addEventListener("load", function(){
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url).then(function(response) {
        response.json().then( function(json) {
            console.log(json);
        })
    })
});