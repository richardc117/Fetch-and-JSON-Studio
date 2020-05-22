// TODO: add code here

window.addEventListener("load", function(){
    console.log("window loaded");
    fetch("https://handlers.education.launchcode.org/static/astronauts.json)").then(function(response) {
    // response.json().then( function(json) {
    //     console.log(response);
        console.log("fetch worked");
    //}
    //fetch("https://handlers.education.launchcode.org/static/weather.json").then(function(response) {
   //console.log(response);

        // //Get each element in the array from the website
        // for(i=0; i<response.length; i++){
        //     response[i]    
        // }
    })
});