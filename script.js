// TODO: add code here

window.addEventListener("load", function(){
    let url = "https://handlers.education.launchcode.org/static/astronauts.json"
    fetch(url).then(function(response) {
        response.json().then( function(json) {
            const list = document.getElementById("container");
            list.innerHTML = "<ul><br>"
            for(i=0; i < json.length; i++){
                list.innerHTML += `<li> ${json[i].firstName} ${json[i].lastName} </li>`
            }
            list.innerHTML += "</ul>"
        })
    })
});