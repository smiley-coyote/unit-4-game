$(document).ready(function() {


var fighter = {

    earthbender: {
        name: "Toph",
        type: "Earthbender",
        superpower: "",
        hp: 110,
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
        hp: 160,
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
var themeSong = new Audio("assets/audio/theme_song.mp3");
counter = 3;
var images = ["assets/images/air.gif", "assets/images/earth.gif", "assets/images/fire.gif", "assets/images/water.gif", 
"assets/images/aang1.gif", "assets/images/katara_heal.gif", "assets/images/zuko_lightning.gif", "assets/images/toph_metal.gif"];
// for special moves
var symbols = ["assets/images/symbol_earth.jpg", "assets/images/symbol_fire.jpg", "assets/images/symbol_water.jpg", 
"assets/images/symbol_wind.jpg"]
var leftBox = "";
var rightBox = "";
var specialMove = false;
var symbolGame = false;
var numberOptions = [10, 5, 3, 7];
var symbolCounter = 0;
var minNumber = 30;
var minTargetNumber = 50;
var maxTargetNumber = 54;
var computerMove = true;


$("#main-body > h2").css("visibility", "hidden")
$("#start-text").text("Select your fighter!");
$("#special-move").css("visibility", "hidden");
$("#restart").css("visibility", "hidden");
$("#special-move-ready").css("visibility", "hidden");



    // Select your fighter ========================================
    $(".box").on("click", function() {
        
        if (firstSelection == false && gameStart == false) {
            firstSelection = true 
            themeSong.play();
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
            $("#special-move").css("visibility", "visible");
            gameStart = true;
            console.log(gameStart);
       
        } 
    })

    $("#computerFighter").on("click", function() {
        console.log(computerFighter);
    })

   fighterFunction = function(x){
    //if Aang is selected first ++++++++++++++++++++++++++++++++
       if (x == 1 && firstSelection == false) {
           yourFighter = fighter.airbender;
           leftBox = images[0];
           $("#left-box").html("<img src=" + leftBox + " />");
    //if Katara is selected first ++++++++++++++++++++++++++++++
       } if (x == 2 && firstSelection == false) {
           yourFighter = fighter.waterbender;
           leftBox = images[3];
           $("#left-box").html("<img src=" + leftBox + " />");
    //if Toph is selected first ++++++++++++++++++++++++++++++++
       } if (x == 3 && firstSelection == false) {
            yourFighter = fighter.earthbender;
            leftBox = images[1];
           $("#left-box").html("<img src=" + leftBox + " />");
    //if Zuko is selected first ++++++++++++++++++++++++++++++++
        } if (x == 4 && firstSelection == false) {
            yourFighter = fighter.firebender;
            leftBox = images[2];
           $("#left-box").html("<img src=" + leftBox + " />");
    //if Aang is selected second -------------------------------
        } else if (x == 1 && firstSelection && gameStart == false) {
            computerFighter = fighter.airbender;
            rightBox = images[0];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Katara is selected second -------------------------------
        } else if (x == 2 && firstSelection && gameStart == false) {
            computerFighter = fighter.waterbender;
            rightBox = images[3];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Toph is selected second -------------------------------
        } else if (x == 3 && firstSelection && gameStart == false) {
            computerFighter = fighter.earthbender;
            rightBox = images[1];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Zuko is selected second -------------------------------
        } else if (x == 4 && firstSelection && gameStart == false) {
            computerFighter = fighter.firebender;
            rightBox = images[2];
           $("#right-box").html("<img src=" + rightBox + " />");
        } 

    }

    // fighting conditions
   
    $("#start-text").on("click", function() {
        if (gameStart == true) {
            // if you're Aang (air) ===================================================================================
            if (yourFighter == fighter.airbender) {
                // vs Katara (water)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.waterbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(3);
                        computerMove = false;
                    } 
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Katara counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(4);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Zuko counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(1);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Toph counter-attacked with " + computerFighter.cap + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                
            }
            // if you're Katara (water)=============================================================================
            if (yourFighter == fighter.waterbender) {
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Katara attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(4);
                        computerMove = false;
                    } 
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Zuko counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Katara attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(1);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Toph counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }
                    else if (i == 6) {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Katara attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(2);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Aang counter-attacked with " + computerFighter.cap + " ap!")
                    }
                    else if (i == 6) {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                
            }
            // if you're Zuko (fire)=================================================================================
            if (yourFighter == fighter.firebender) {
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Zuko attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(1);
                        computerMove = false;
                    } 
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Toph counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Zuko attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(2);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Aang counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }  
                    else if (i == 6) {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                // vs Katara (water)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.waterbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Zuko attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(3);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Katara counter-attacked with " + computerFighter.cap + " ap!")
                    }
                    else if (i == 6) {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                
            }
            // if you're Toph (earth)=================================================================================
            if (yourFighter == fighter.earthbender) {
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Toph attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(2);
                        computerMove = false;
                    } 
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Aang counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                // vs Katara (water)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.waterbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Toph attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(3);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Katara counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }
                    else if (i == 6) {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 7);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 4;
                        $("#stats-you").text("Toph attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }if (i == 5 && computerMove) {
                        $("#stats-computer").text(computerFighter.name + " is using their special ability!");
                        computerSpecial(4);
                        computerMove = false;
                    } 
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Zuko counter-attacked with " + computerFighter.cap + " ap!")
                    } 
                    else if (i == 6) {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                
            }
            $(".yourHP").text("hp: " + yourFighter.hp);
            $(".computerHP").text("hp: " + computerFighter.hp);

            // computer special move animate *********************************************************************
            function computerSpecial(x){
                $("#stats-you").text("");
                $("#start-text").css("visibility", "hidden");
                $("#special-move").css("visibility", "hidden");
                // toph ++++++++++++++++++++++++++++++++++++
                if(x == 1){
                    var gif = images[7];
                    $("#computer-screen").html("<img src=" + gif + " />")
                    setTimeout(CompSpecialMove, 1800);
                }
                // aang ++++++++++++++++++++++++++++++++++++
                if(x == 2){
                    var gif = images[4];
                    $("#computer-screen").html("<img src=" + gif + " />")
                    setTimeout(CompSpecialMove, 1800);
                }
                // katara ++++++++++++++++++++++++++++++++++
                if(x == 3){
                    var gif = images[5];
                    $("#computer-screen").html("<img src=" + gif + " />")
                    setTimeout(CompSpecialMove, 1800);
                }
                // Zuko ++++++++++++++++++++++++++++++++++++
                if(x == 4){
                    var gif = images[6];
                    $("#computer-screen").html("<img src=" + gif + " />")
                    setTimeout(CompSpecialMove, 1800);
                }
            }
            


            // win/lose conditions \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
           
       

            if(computerFighter.hp <= 0) {
                $("#computerFighter > .box").remove();
                computerFighter = {};
                gameStart = false;
                secondSelection = false;
                $("#start-text").text("Select enemy fighter!");
                counter--;
                $("#special-move").css("visibility", "hidden");
                $("#stats-you").text("");
                $("#stats-computer").text("");
            }
            // lose ++++++++++++++++++++++++++++++++++++++++++++++
            if(yourFighter.hp <= 0) {
                $("#yourFighter").fadeOut();
                $("#start-text").text("You have been defeated!");
                $("#restart").css("visibility", "visible");
                $("#special-move").css("visibility", "hidden");
            }
            // win ++++++++++++++++++++++++++++++++++++++++++++++
            if(counter == 0) {
                $("#start-text").text("You win!");
                $("#restart").css("visibility", "visible");
                $("#special-move").css("visibility", "hidden");
                
            }
           
          
        }
    })
     // computer special move initiate!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
     function CompSpecialMove() {
        $("#start-text").css("visibility", "visible");
        $("#special-move").css("visibility", "visible");
        $("#computer-screen").remove();
        $("#stats-you").text("");
        if (computerFighter == fighter.waterbender) {
            computerFighter.hp = computerFighter.hp + 40;
            
            $("#stats-computer").text("Katara used spirit water and healed herself for 40hp!");
            $(".computerHP").text("hp: " + computerFighter.hp);
        } else {
            yourFighter.hp = (yourFighter.hp - 40);
            $("#stats-computer").text(computerFighter.name + " used their special ability and attacked " + yourFighter.name + " costing 40hp!")
            $(".yourHP").text("hp: " + yourFighter.hp);
            if (yourFighter.hp < 0) {
                $("#yourFighter").fadeOut();
                $("#start-text").text("You have been defeated!");
                $("#restart").css("visibility", "visible");
                $("#special-move").css("visibility", "hidden");
            }
        }
    }
    // special moves **************************************************************************************
    $("#special-move").on("click", function() {
        $("#special-move > button").remove();
        var numberOptions = [];
        for(var i=0;i<4;i++){
            var numberz = Math.floor(Math.random()* (10-3))+3;
            numberOptions.push(numberz);
            console.log(numberOptions);
        }
        $("#start-text").css("visibility", "hidden");
        // aang special move
        if (yourFighter == fighter.airbender) {
            for (var j = 0; j < numberOptions.length; j++) {
                var imageSymbol = $("<img>");
                imageSymbol.addClass("symbol-image");
                imageSymbol.attr("src", symbols[j]);
                imageSymbol.attr("data-symbolvalue", numberOptions[j]);
                $("#symbol-game").append(imageSymbol);
            }
           
            $("#stats-you").text("Charge up Aang's special ability by clicking the elements!")
            $("#stats-computer").text("");
        }
         // Katara special move
         if (yourFighter == fighter.waterbender) {
            for (var j = 0; j < numberOptions.length; j++) {
                var imageSymbol = $("<img>");
                imageSymbol.addClass("symbol-image");
                imageSymbol.attr("src", "assets/images/symbol_water.jpg");
                imageSymbol.attr("data-symbolvalue", numberOptions[j]);
                $("#symbol-game").append(imageSymbol);
            }
           
            $("#stats-you").text("Charge up Katara's special ability by clicking the elements!")
            $("#stats-computer").text("");
            
            
        }
        // Zuko special move
        if (yourFighter == fighter.firebender) {
            for (var j = 0; j < numberOptions.length; j++) {
                var imageSymbol = $("<img>");
                imageSymbol.addClass("symbol-image");
                imageSymbol.attr("src", "assets/images/symbol_fire.jpg");
                imageSymbol.attr("data-symbolvalue", numberOptions[j]);
                $("#symbol-game").append(imageSymbol);
            }
           
            $("#stats-you").text("Charge up Zuko's special ability by clicking the elements!")
            $("#stats-computer").text("");

            
        }
        // Toph special move
        if (yourFighter == fighter.earthbender) {
            for (var j = 0; j < numberOptions.length; j++) {
                var imageSymbol = $("<img>");
                imageSymbol.addClass("symbol-image");
                imageSymbol.attr("src", "assets/images/symbol_earth.jpg");
                imageSymbol.attr("data-symbolvalue", numberOptions[j]);
                $("#symbol-game").append(imageSymbol);
            }
           
            $("#stats-you").text("Charge up Toph's special ability by clicking the elements!")
            $("#stats-computer").text("");
        }
        // special moves mini game ===============================================================================
        $(".symbol-image").on("click", function() {
            var symbolValue = ($(this).attr("data-symbolvalue"));
            symbolValue = parseInt(symbolValue);
            symbolCounter += symbolValue;
            $("#stats-you").text("Charging " + yourFighter.name + " special ability - " + symbolCounter + " Goal: between 50 and 54")
            if (symbolCounter <= maxTargetNumber && symbolCounter >= minTargetNumber) {
                $("#symbol-game").css("visibility", "hidden")
                $("#special-move-ready").css("visibility", "visible");
            }
            if (symbolCounter > maxTargetNumber) {
                yourFighter.hp = (yourFighter.hp - 40)
                $("#stats-you").text("Special ability overcharged costing 40hp!")
                $(".yourHP").text("hp: " + yourFighter.hp);
                $("#start-text").css("visibility", "visible");
                $("#symbol-game").css("visibility", "hidden")
            }
        })
        // special move animated gifs ===============================================================================
        $("#special-move-ready").on("click", function() {
            $("#stats-you").html("");
            $("#special-move-ready").remove();
        // Aang animated ////////////////////////////////////////////////////////////
            if (yourFighter == fighter.airbender) {
                var gif = images[4];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 3000);
            }
        // Katara animated ////////////////////////////////////////////////////////////
        if (yourFighter == fighter.waterbender) {
        var gif = images[5];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 1300);
        }
        // Zuko animated ////////////////////////////////////////////////////////////
        if (yourFighter == fighter.firebender) {
            var gif = images[6];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 1600);
        }
        // Toph animated ////////////////////////////////////////////////////////////
        if (yourFighter == fighter.earthbender) {
            var gif = images[7];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 1800);
        }
        })
        function specialMove() {
            $("#start-text").css("visibility", "visible");
            // Aang special move
            if (yourFighter == fighter.airbender) {
                computerFighter.hp = computerFighter.hp - 50;
                $("#stats-you").text("Aang used his Avatar special abilities, combining all of the elements against " + computerFighter.name + " and attacked with 50hp!")
                $(".computerHP").text("hp: " + computerFighter.hp);
                $("#your-screen").html("");
                if(computerFighter.hp <= 0) {
                    $("#computerFighter > .box").remove();
                    computerFighter = {};
                    gameStart = false;
                    secondSelection = false;
                    $("#start-text").text("Select enemy fighter!");
                    counter--;
                }
            }
            // Katara special move
            if (yourFighter == fighter.waterbender) {
                yourFighter.hp = yourFighter.hp + 40;
                $("#stats-you").text("Katara used spirit water to heal herself with 40hp!")
                $(".yourHP").text("hp: " + yourFighter.hp);
                $("#your-screen").html("");
                if(computerFighter.hp <= 0) {
                    $("#computerFighter > .box").remove();
                    computerFighter = {};
                    gameStart = false;
                    secondSelection = false;
                    $("#start-text").text("Select enemy fighter!");
                    counter--;
                }
            }
            // Zuko special move
            if (yourFighter == fighter.firebender) {
                computerFighter.hp = computerFighter.hp - 50;
                $("#stats-you").text("Zuko used his special ability and attacked " + computerFighter.name + " with lightning for 50hp!")
                $(".computerHP").text("hp: " + computerFighter.hp);
                $("#your-screen").html("");
                if(computerFighter.hp <= 0) {
                    $("#computerFighter > .box").remove();
                    computerFighter = {};
                    gameStart = false;
                    secondSelection = false;
                    $("#start-text").text("Select enemy fighter!");
                    counter--;
                }
            }
            // Toph special move
            if (yourFighter == fighter.earthbender) {
                computerFighter.hp = computerFighter.hp - 50;
                $("#stats-you").text("Toph used her special ability and attacked " + computerFighter.name + " with metal for 50hp!")
                $(".computerHP").text("hp: " + computerFighter.hp);
                $("#your-screen").html("");
                if(computerFighter.hp <= 0) {
                    $("#computerFighter > .box").remove();
                    computerFighter = {};
                    gameStart = false;
                    secondSelection = false;
                    $("#start-text").text("Select enemy fighter!");
                    counter--;
                }
            }
        }
    
    })
    

    // reset game button /////////////////////////////////////////////////////////////////////////////////////////////
    $('#restart').click(function() {
        location.reload();
    });
});

// for special move mini game
/*  for(i=0; i<4; i++){
    var symbolz = symbols[i];
    var numberz = Math.floor(Math.random() * (10 - 3)) + 3;
    
    $("#special-move").append("<img src= " + symbolz + " width='50px'/>")
*/