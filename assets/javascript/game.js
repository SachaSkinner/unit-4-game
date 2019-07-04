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

    var total = 0;
    //    variables for crystals
    var yellow = randomIntFromInterval(1, 12);
    var red = randomIntFromInterval(1, 12);
    var green = randomIntFromInterval(1, 12);
    var blue = randomIntFromInterval(1, 12);




    // document.getElementById("random_number").innerHTML = randomIntFromInterval(19, 120);
    $("#random_number").text(randomIntFromInterval(19, 120));
   
   

    $("#yellow_crystal").on("click", function () {
       
        total += yellow;
        $("#total").text(total); 
    })
    $("#red_crystal").on("click", function () {
        total += red;
        $("#total").text(total); 

    })
    $("#green_crystal").on("click", function () {
        total += green;
        $("#total").text(total); 

    })
    $("#blue_crystal").on("click", function () {
        total += blue;
        $("#total").text(total); 

    })







});
