(function () {
    'use strict';

    const startGame = document.getElementById("startgame");
    const gameControl = document.getElementById("gamecontrol");
    const game = document.getElementById("game");
    const score = document.getElementById("score");
    const actionArea = document.getElementById("actions");
    const quitArea = document.getElementById("quit");
    const mainBody = document.getElementsByTagName("body")[0];
    let numDoubles = 0;
        
    const gameData = {
        dice: ["1die.png","2die.png", "3die.png", "4die.png", "5die.png", "6die.png"],
        penny: ["0penny.png", "1penny.png"],
        players: ["player 1", "player 2"],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }

    startGame.addEventListener("click", function(){
        
        gameControl.innerHTML = '<img src="images/penny.png" class="bounce">';
        gameControl.innerHTML += '<h2>Start a New Game</h2>';
        gameControl.innerHTML += '<h3>Toss Coin to Determine First Player</h3>';
        gameControl.innerHTML += '<button id="toss">Toss Coin</button>';
        gameControl.innerHTML += '<p>Heads means Player 1 will go first. Tails means Player 2 will go first.';
        quitArea.innerHTML = '<button id="reset">Reset Game?</button>';

        document.getElementById('reset').addEventListener("click", function(){
            location.reload();
        });

        document.getElementById('toss').addEventListener("click", function(){
            gameData.index = Math.round(Math.random());
            console.log(gameData.index);
            gameControl.innerHTML = `<img src="images/${gameData.penny[gameData.index]}" class="flip">`;
            console.log(gameData.penny[gameData.index]);
            gameControl.innerHTML += '<h2>The Starting Player Has Been Chosen</h2>'
            if (gameData.index === 0) {
                gameControl.innerHTML += '<p>You flipped heads! Player 1 goes first.</p>'; 
            } else {
                gameControl.innerHTML += '<p>You flipped tails! Player 2 goes first.</p>';
                
            }
            gameControl.innerHTML += '<button id="setup">Begin Game</button>';


            document.getElementById('setup').addEventListener("click", function() {
                gameControl. innerHTML = '';
                setUpTurn();
            });
        });


        


    });


    function setUpTurn(){
        if (gameData.index === 0) {
            mainBody.classList.add("color1");
            mainBody.classList.remove("color2");
        } else {
            mainBody.classList.add("color2");
            mainBody.classList.remove("color1");
        }
        game.innerHTML = `<h2>It is ${gameData.players[gameData.index]}'s Turn</h2>`
        game.innerHTML += `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener("click", function(){

            throwDice();

        });
        checkWinningCondition();
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2 class="flash">${gameData.players[gameData.index]} 
            wins with ${gameData.score[gameData.index]} points!</h2>`;

            actionArea.innerHTML = '';
            document.getElementById('reset').innerHTML = "Reset Game?";
        }
        else{  
            showCurrentScore();
        }
    }

    function automaticLose(){
        actionArea.innerHTML = '';
        game.innerHTML += `<p>You rolled a double three times in a row! You lose!</p>`
        gameData.index ? gameData.index = 0 : gameData.index = 1;
        score.innerHTML = `<h2>${gameData.players[gameData.index]} wins!</h2>`;
        document.getElementById('rest').innerHTML = "Reset Game?";
        
    }

    function showCurrentScore(){
        score.innerHTML = `<p>The score is currently <strong>${gameData.players[0]} ${gameData.score[0]}</strong> and <strong>${gameData.players[1]} ${gameData.score[1]}</strong></p>`;
    }   

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.ceil(Math.random()*6);
        gameData.roll2 = Math.ceil(Math.random()*6);
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}" class="shake slideInLeft"> 
                            <img src="images/${gameData.dice[gameData.roll2-1]}" class="shake slideInLeft">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;
    
        // if two 1's are rolled...
        if( gameData.rollSum === 2 ){
            numDoubles = 0;
            game.innerHTML += "<p>Oh snap! Snake eyes!</p>";
            gameData.score[gameData.index] = 0;
            gameData.index ? gameData.index = 0 : gameData.index = 1;
            showCurrentScore();
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
    
        // if either die is a 1...
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            numDoubles = 0;
            gameData.index ? gameData.index = 0 : gameData.index = 1;

            game.innerHTML += `<p>Sorry, one of your rolls was a one, switching to  ${gameData.players[gameData.index]}</p>`;
            setTimeout(function(){
                setUpTurn();
            }, 2000);
        }
        // if neither die is a 1...
        else {
            if (gameData.roll1 === gameData.roll2){
                numDoubles += 1;
                if (numDoubles == 3) {
                    automaticLose();
                }
                game.innerHTML += `<p>You rolled a double ${gameData.roll1}!</p>`;
                gameData.rollSum = gameData.roll1 ** 2;
            }
            numDoubles = 0;
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>';
    
            document.getElementById('rollagain').addEventListener("click", function(){ 
                throwDice();
            });
    
            document.getElementById('pass').addEventListener("click", function(){
                gameData.index ? gameData.index = 0 : gameData.index = 1;
                setUpTurn();
            });
    
            checkWinningCondition();
        }
    }
}() );