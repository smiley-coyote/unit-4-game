$(document).ready(function() {


var fighter = {

    earthbender: {
        name: "Toph",
        type: "Earthbender",
        superpower: "",
        hp: 100,
        ap: 6,
        cap: 15,
    },
    firebender: {
        name: "Zuko",
        type: "Firebender",
        superpower: "",
        hp: 150,
        ap: 6,
        cap: 15,
    },
    waterbender: {
        name: "Katara",
        type: "Waterbender",
        superpower: "",
        hp: 180,
        ap: 6,
        cap: 15,
    },
    airbender: {
        name: "Aang",
        type: "Airbender",
        superpower: "Avatar",
        hp: 120,
        ap: 6,
        cap: 15,
    },

}

var yourFighter = {};
var computerFighter = {};
var firstSelection = false;
var secondSelection = false;
var gameStart = false;
counter = 3;

$("#main-body > h2").css("visibility", "hidden")
$("#start-text").text("Select your fighter!");



    $(".box").on("click", function() {
        
        if (firstSelection == false && gameStart == false) {
            firstSelection = true 
            $(this).appendTo("#yourFighter");
            $("#yourFighter p:last").addClass("yourHP")
            $("#start-text").text("Select enemy fighter!");
        } else if (firstSelection && secondSelection == false && gameStart == false)   {
            $(this).appendTo("#computerFighter")
            $("#computerFighter p:last").addClass("computerHP");
            $("#start-text").html("<button id='button-fight'>Fight!</button>")
            $("#button-fight").css("height", "50px");
            $("#button-fight").css("width", "100px");
            $("#button-fight").css("font-size", "15px");
            $("#main-body > h2").css("visibility", "visible")
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
            // air 
            if (yourFighter == fighter.airbender) {
                // vs water
                if (computerFighter == fighter.waterbender) {
                    computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                    yourFighter.ap = yourFighter.ap + 6;
                    $("#stats-you").text("Aang attacked Katara with " + yourFighter.ap + " ap!")
                    var i = Math.floor(Math.random() * 3);
                    console.log(i);
                    if (i < 2) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Katara counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } else {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                // vs fire
                if (computerFighter == fighter.firebender) {
                    computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    yourFighter.ap = yourFighter.ap + 6;
                }
                // vs earth
                if (computerFighter == fighter.earthbender) {
                    computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    yourFighter.ap = yourFighter.ap + 6;
                }
                
            }
            // air vs fire
            // air vs earth
            // water vs fire
            // water vs earth
            // water vs air
            // fire vs earth
            // fire vs air
            // fire vs water
            // earth vs air
            // earth vs water
            // earth vs fire
           
            $(".yourHP").text("hp: " + yourFighter.hp);
            $(".computerHP").text("chp: " + computerFighter.hp);

            if(computerFighter.hp <= 0) {
                $("#computerFighter > .box").remove();
                computerFighter = {};
                gameStart = false;
                secondSelection = false;
                $("#start-text").text("Select enemy fighter!");
                counter--;
            }
            if(yourFighter.hp <= 0) {
                $("#yourFighter").fadeOut();
                $("#start-text").text("You have been defeated!");

            }
            if(counter == 0) {
                $("#start-text").text("You win!");
            }
          
        }
    })
    $('#restart').click(function() {
        location.reload();
    });
});

computerFighter.hp = (computerFighter.hp - yourFighter.ap);
yourFighter.hp = (yourFighter.hp - computerFighter.cap);
yourFighter.ap = yourFighter.ap + 6;