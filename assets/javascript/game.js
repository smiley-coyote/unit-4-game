// create an object that'll hold each fighter with their name, hp, ap, and cap.
// create variables to house the fighters
// create buttons and div sections on the html page for your fighter, fighters coming up and current enemy
// create a random selector to place four of the fighters into the selection bay
// create on click events for each fighter. the first being your fighter
// create a function that determines what each attack does
// create a win and lose function


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




// var randomNumber = Math.floor(Math.random() * (300 - 100 + 1) ) + 100;

$(document).ready(function() {
// Get each fighter ready
// aang 
$("#box-aang").prepend(fighter.airbender.name + "<p>" + "type: " + fighter.airbender.type)
$("#box-aang").append(fighter.airbender.hp)
// katara
$("#box-katara").prepend(fighter.waterbender.name + "<p>" + "type: " + fighter.waterbender.type)
$("#box-katara").append(fighter.waterbender.hp)
// toph
$("#box-toph").prepend(fighter.earthbender.name + "<p>" + "type: " + fighter.earthbender.type)
$("#box-toph").append(fighter.earthbender.hp)
// zuko
$("#box-zuko").prepend(fighter.firebender.name + "<p>" + "type: " + fighter.firebender.type)
$("#box-zuko").append(fighter.firebender.hp)

    $(".box").on("click", function() {
        $("#start-text").text("Select enemy fighter!");
        if (firstSelection == false) {
            firstSelection = true 
            yourFighter = $(this);
            
            $(this).appendTo("#yourFighter");
        } else if (firstSelection | secondSelection == false)   {
            computerFighter = $(this);
            $(this).appendTo("#computerFighter")
       
        } 
    })

    $("#computerFighter").on("click", function() {
        console.log(computerFighter);
    })

    
});