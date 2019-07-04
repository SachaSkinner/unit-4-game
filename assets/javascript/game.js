{/* <p id="random_namber"></p>
        <p id="user_number"></p>
        <p id="wins"></p>
        <p id="loses"></p> */}

var user_number = 0;
var wins = 0;
var loses = 0;
$(document).ready(function () {
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
   
    // document.getElementById("random_number").innerHTML = randomIntFromInterval(19, 120);
    $("#random_number").text(randomIntFromInterval(19, 120));
    $("#user_number").text(randomIntFromInterval(1, 12));
    
});
