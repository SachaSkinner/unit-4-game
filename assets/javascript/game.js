
$(document).ready(function () {
    var wins = 0;
    var losses = 0;
    // user points
    var total = 0;
    // random number    
    var randomNumber = randomIntFromInterval(19, 120)
    $("#random_number").text("Random number now is: " + randomNumber);
    $("#total").text("Your total is: " + total);
    $("#losses").text("Losses: " + losses);
    $("#wins").text("Wins: " + wins);
    // variables for crystals
    var yellow = randomIntFromInterval(1, 12);
    var red = randomIntFromInterval(1, 12);
    var green = randomIntFromInterval(1, 12);
    var blue = randomIntFromInterval(1, 12);

    // random number function with an interval
    function randomIntFromInterval(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // update total and check for win
    function update(crystalValue){
        total += crystalValue;
        $("#total").text("Your total is: " + total);

        if (total > randomNumber) {
            losses++;
            console.log(losses);
            $("#losses").text("Losses: " + losses);
            randomNumber = randomIntFromInterval(19, 120);
            total = 0;
            $("#random_number").text("Random number is: " + randomNumber);
            $("#total").text("Your total is: 0");  
            // $("#my-button:visible").length;
            // $('#my-button[style*="display: block"]')
            // document.getElementById("#my-button").style.display = "block";
    
        }
        if (total === randomNumber) {
            wins++;
            console.log(wins);
            $("#wins").text("Wins: " + wins);
            randomNumber = randomIntFromInterval(19, 120);
            total = 0;
            $("#random_number").text("Random number is: " + randomNumber);
            $("#total").text("Your total is: 0");    
        }
    }    

    // document.getElementById("randomNumber").innerHTML = randomIntFromInterval(19, 120);
    // click events for each picture

    $("#yellow_crystal").on("click", function () {
        update(yellow);
    
    });
    $("#red_crystal").on("click", function () {
        update(red);

    });
    $("#green_crystal").on("click", function () {
        update(green);

    });
    $("#blue_crystal").on("click", function () {
        update(blue);

    });
    $("#my-button").click(function(){
        wins = 0;
        losses = 0;
        total = 0
        randomNumber = randomIntFromInterval(19, 120);
        $("#random_number").text("Random number is: " + randomNumber);
        $("#total").text("Your total is: " + total); 
        $("#losses").text("Losses: " + losses);
        $("#wins").text("Wins: " + wins);        
      });

});
