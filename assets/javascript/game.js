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
var images = ["assets/images/air.gif", "assets/images/earth.gif", "assets/images/fire.gif", "assets/images/water.gif", 
"assets/images/aang1.gif", "assets/images/katara1.gif", "assets/images/zuko1.gif", "assets/images/toph1.gif"];
var symbols = ["assets/images/symbol_earth.jpg", "assets/images/symbol_fire.jpg", "assets/images/symbol_water.jpg", 
"assets/images/symbol_wind.jpg"]
var leftBox = "";
var rightBox = "";
var specialMove = false;


$("#main-body > h2").css("visibility", "hidden")
$("#start-text").text("Select your fighter!");
$("#special-move").css("visibility", "hidden");
$("#restart").css("visibility", "hidden");


    // Select your fighter ========================================
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
        } else if (x == 1 && firstSelection) {
            computerFighter = fighter.airbender;
            rightBox = images[0];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Katara is selected second -------------------------------
        } else if (x == 2 && firstSelection) {
            computerFighter = fighter.waterbender;
            rightBox = images[3];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Toph is selected second -------------------------------
        } else if (x == 3 && firstSelection) {
            computerFighter = fighter.earthbender;
            rightBox = images[1];
           $("#right-box").html("<img src=" + rightBox + " />");
    //if Zuko is selected second -------------------------------
        } else if (x == 4 && firstSelection) {
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
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Katara counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } else {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Zuko counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }else {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Aang attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Aang's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Toph counter-attacked with " + computerFighter.cap + " ap!")
                    }else {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                
            }
            // if you're Katara (water)=============================================================================
            if (yourFighter == fighter.waterbender) {
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Katara attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Zuko counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } else {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Katara attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Toph counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }else {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Katara attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Katara's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Aang counter-attacked with " + computerFighter.cap + " ap!")
                    }else {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                
            }
            // if you're Zuko (fire)=================================================================================
            if (yourFighter == fighter.firebender) {
                // vs Toph (earth)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.earthbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Zuko attacked Toph with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Toph counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } else {
                        $("#stats-computer").text("Toph's counter-attack missed!")
                    }
                }
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Zuko attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Aang counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }else {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                // vs Katara (water)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.waterbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Zuko attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Zuko's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Katara counter-attacked with " + computerFighter.cap + " ap!")
                    }else {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                
            }
            // if you're Toph (earth)=================================================================================
            if (yourFighter == fighter.earthbender) {
                // vs Aang (air)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.airbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Toph attacked Aang with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }
                    if (i < 4) {
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap-5));
                    $("#stats-computer").text("Aang counter-attacked with " + (computerFighter.cap-5) + " ap!")
                    } else {
                        $("#stats-computer").text("Aang's counter-attack missed!")
                    }
                }
                // vs Katara (water)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.waterbender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap + 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Toph attacked Katara with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - (computerFighter.cap+3));
                    $("#stats-computer").text("Katara counter-attacked with " + (computerFighter.cap+3) + " ap!")
                    }else {
                        $("#stats-computer").text("Katara's counter-attack missed!")
                    }
                }
                // vs Zuko (fire)+++++++++++++++++++++++++++++++++++++++++++
                if (computerFighter == fighter.firebender) {
                    var j = Math.floor(Math.random() * 6);
                    var i = Math.floor(Math.random() * 5);
                    if (j < 5) {
                        computerFighter.hp = (computerFighter.hp - (yourFighter.ap - 5));
                        yourFighter.ap = yourFighter.ap + 5;
                        $("#stats-you").text("Toph attacked Zuko with " + yourFighter.ap + " ap!")
                    } else {
                        $("#stats-you").text("Toph's attack missed!");
                    }
                    if (i<4){
                    yourFighter.hp = (yourFighter.hp - computerFighter.cap);
                    $("#stats-computer").text("Zuko counter-attacked with " + computerFighter.cap + " ap!")
                    }else {
                        $("#stats-computer").text("Zuko's counter-attack missed!")
                    }
                }
                
            }
            $(".yourHP").text("hp: " + yourFighter.hp);
            $(".computerHP").text("hp: " + computerFighter.hp);
            // win/lose conditions \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
           
       

            if(computerFighter.hp <= 0) {
                $("#computerFighter > .box").remove();
                computerFighter = {};
                gameStart = false;
                secondSelection = false;
                $("#start-text").text("Select enemy fighter!");
                counter--;
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
    // special moves **************************************************************************************
    $("#special-move").on("click", function() {
        if (yourFighter == fighter.airbender) {
            $("#special-move").html("");
            for(i=0; i<4; i++){
                var symbolz = symbols[i];
                $("#special-move").append("<img src= " + symbolz + " width='50px'/>")
            }
            
            if (specialMove) {
            var gif = images[4];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 3000);
            }
        }
         // Katara special move
         if (yourFighter == fighter.waterbender) {
            var gif = images[5];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 4310);
        }
        // Zuko special move
        if (yourFighter == fighter.firebender) {
            var gif = images[6];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 1945);
        }
        // Toph special move
        if (yourFighter == fighter.earthbender) {
            var gif = images[7];
            $("#your-screen").html("<img src=" + gif + " />")
            setTimeout(specialMove, 1250);
        }
    })
    function specialMove() {
        // Aang special move
        if (yourFighter == fighter.airbender) {
            computerFighter.hp = computerFighter.hp - 50;
            $("#stats-you").text("Aang used his Avatar special abilities against " + computerFighter.name + " and attacked with 50hp!")
            $(".computerHP").text("hp: " + computerFighter.hp);
            $("#your-screen").html("");
        }
        // Katara special move
        if (yourFighter == fighter.waterbender) {
            computerFighter.hp = computerFighter.hp - 50;
            $("#stats-you").text("Katara used her Avatar special abilities against " + computerFighter.name + " and attacked with 50hp!")
            $(".computerHP").text("hp: " + computerFighter.hp);
            $("#your-screen").html("");
        }
        // Zuko special move
        if (yourFighter == fighter.firebender) {
            computerFighter.hp = computerFighter.hp - 50;
            $("#stats-you").text("Zuko used his Avatar special abilities against " + computerFighter.name + " and attacked with 50hp!")
            $(".computerHP").text("hp: " + computerFighter.hp);
            $("#your-screen").html("");
        }
        // Toph special move
        if (yourFighter == fighter.earthbender) {
            computerFighter.hp = computerFighter.hp - 50;
            $("#stats-you").text("Toph used her Avatar special abilities against " + computerFighter.name + " and attacked with 50hp!")
            $(".computerHP").text("hp: " + computerFighter.hp);
            $("#your-screen").html("");
        }
    }

    // reset game button /////////////////////////////////////////////////////////////////////////////////////////////
    $('#restart').click(function() {
        location.reload();
    });
});

