$(document).ready(function() {


var fighter = {

    earthbender: {
        name: "Toph",
        type: "Earthbender",
        superpower: "",
        hp: 100,
        ap: 35,
        ca: 20,
    },
    firebender: {
        name: "Zuko",
        type: "Firebender",
        superpower: "",
        hp: 120,
        ap: 30,
        ca: 15,
    },
    waterbender: {
        name: "Katara",
        type: "Waterbender",
        superpower: "",
        hp: 130,
        ap: 25,
        ca: 12,
    },
    airbender: {
        name: "Aang",
        type: "Airbender",
        superpower: "Avatar",
        hp: 125,
        ap: 20,
        ca: 25,
    },

}

var yourFighter = {};
var computerFighter = {};
var firstSelection = false;
var secondSelection = false;
var gameStart = false;

$("#start-text").text("Select enemy fighter!");



    $(".box").on("click", function() {
        
        if (firstSelection == false && gameStart == false) {
            firstSelection = true 
            $(this).appendTo("#yourFighter");
            $("#yourFighter p:last").addClass("yourHP")
        } else if (firstSelection && secondSelection == false && gameStart == false)   {
            $(this).appendTo("#computerFighter")
            $("#computerFighter p:last").addClass("computerHP");
            $("#start-text").html("<button id='button-fight'>Fight!</button>")
            $("#button-fight").css("height", "50px");
            $("#button-fight").css("width", "100px");
            $("#button-fight").css("font-size", "15px");
            gameStart = true;
            console.log(gameStart);
       
        } 
    })

    $("#computerFighter").on("click", function() {
        console.log(computerFighter);
    })

   fighterFunction = function(x){
       if (x == 1 && firstSelection == false) {
           yourFighter = fighter.airbender;
           console.log(yourFighter);
       } if (x == 2 && firstSelection == false) {
           yourFighter = fighter.waterbender;
           console.log(yourFighter);
       } if (x == 3 && firstSelection == false) {
            yourFighter = fighter.earthbender;
            console.log(yourFighter);
        } if (x == 4 && firstSelection == false) {
            yourFighter = fighter.firebender;
            console.log(yourFighter);
        } else if (x == 1 && firstSelection) {
            computerFighter = fighter.airbender;
            console.log(computerFighter);
        } else if (x == 2 && firstSelection) {
            computerFighter = fighter.waterbender;
            console.log(computerFighter);
        } else if (x == 3 && firstSelection) {
            computerFighter = fighter.earthbender;
            console.log(computerFighter);
        } else if (x == 4 && firstSelection) {
            computerFighter = fighter.firebender;
            console.log(computerFighter);
        } 

    }

    // create a function that works with onClick if gameStart == true
   
    $("#start-text").on("click", function() {
        if (gameStart == true) {
            computerFighter.hp = (computerFighter.hp - yourFighter.ap);
            yourFighter.hp = (yourFighter.hp - computerFighter.ca);
            yourFighter.ap = yourFighter.ap + 5;
            $(".yourHP").text("hp: " + yourFighter.hp);
            $(".computerHP").text("chp: " + computerFighter.hp);

            if(computerFighter.hp <= 0) {
                $("#computerFighter").remove();
                gameStart = false;
                secondSelection = false;
            }
          
        }
    })
    
});