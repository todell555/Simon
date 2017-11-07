//making sound with oscillators code from here:
// https://code.tutsplus.com/tutorials/the-web-audio-api-adding-sound-to-your-web-app--cms-23790
// shuffle array function from here:
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

var oColors = ["#cc9900","#cccc33","#99cc00","#336600","#006633","#6666cc","#990066","#990033","#660033","#660000","#993300","#663300"];

var hColors = ["#ffffcc","#ffffcc","#ccffcc","#ccff99","#66ffcc","#ccccff","#ccccff","#ff99cc","#ff3399","#ff0000","#ff9966","#cc9966"];

var notes = [
  [ //row1
    //row,col,freq,buttonID,highlight color, original color
    [1,1,1396.91,"#btn-row1-1",hColors[0],oColors[0]], 
    [1,2,1479.98,"#btn-row1-2",hColors[1],oColors[1]],
    [1,3,1567.98,"#btn-row1-3",hColors[2],oColors[2]],
    [1,4,1661.22,"#btn-row1-4",hColors[3],oColors[3]],
    [1,5,1760.00,"#btn-row1-5",hColors[4],oColors[4]],
    [1,6,1864.66,"#btn-row1-6",hColors[5],oColors[5]],
    [1,7,1975.53,"#btn-row1-7",hColors[6],oColors[6]],
    [1,8,2093.00,"#btn-row1-8",hColors[7],oColors[7]],
    [1,9,2217.46,"#btn-row1-9",hColors[8],oColors[8]],
    [1,10,2349.32,"#btn-row1-10",hColors[9],oColors[9]],
    [1,11,2489.02,"#btn-row1-11",hColors[10],oColors[10]],
    [1,12,2637.02,"#btn-row1-12",hColors[11],oColors[11]]],
  [ //row 2
    [2,1,698.456,"#btn-row2-1",hColors[0],oColors[0]],
    [2,2,739.989,"#btn-row2-2",hColors[1],oColors[1]],
    [2,3,783.991,"#btn-row2-3",hColors[2],oColors[2]],
    [2,4,830.609,"#btn-row2-4",hColors[3],oColors[3]],
    [2,5,880.000,"#btn-row2-5",hColors[4],oColors[4]],
    [2,6,932.328,"#btn-row2-6",hColors[5],oColors[5]],
    [2,7,987.767,"#btn-row2-7",hColors[6],oColors[6]],
    [2,8,1046.50,"#btn-row2-8",hColors[7],oColors[7]],
    [2,9,1108.73,"#btn-row2-9",hColors[8],oColors[8]],
    [2,10,1174.66,"#btn-row2-10",hColors[9],oColors[9]],
    [2,11,1244.51,"#btn-row2-11",hColors[10],oColors[10]],
    [2,12,1318.51,"#btn-row2-12",hColors[11],oColors[11]]],
  [ //row3 
    [3,1,349.228,"#btn-row3-1",hColors[0],oColors[0]],
    [3,2,369.994,"#btn-row3-2",hColors[1],oColors[1]],
    [3,3,391.995,"#btn-row3-3",hColors[2],oColors[2]],
    [3,4,415.305,"#btn-row3-4",hColors[3],oColors[3]],
    [3,5,440.000,"#btn-row3-5",hColors[4],oColors[4]],
    [3,6,466.164,"#btn-row3-6",hColors[5],oColors[5]],
    [3,7,493.883,"#btn-row3-7",hColors[6],oColors[6]],
    [3,8,523.251,"#btn-row3-8",hColors[7],oColors[7]],
    [3,9,554.365,"#btn-row3-9",hColors[8],oColors[8]],
    [3,10,587.330,"#btn-row3-10",hColors[9],oColors[9]],
    [3,11,622.254,"#btn-row3-11",hColors[10],oColors[10]],
    [3,12,659.255,"#btn-row3-12",hColors[11],oColors[11]]],
  [ //row4
    [4,1,174.614,"#btn-row4-1",hColors[0],oColors[0]],
    [4,2,184.997,"#btn-row4-2",hColors[1],oColors[1]],
    [4,3,195.998,"#btn-row4-3",hColors[2],oColors[2]],
    [4,4,207.652,"#btn-row4-4",hColors[3],oColors[3]],
    [4,5,220.000,"#btn-row4-5",hColors[4],oColors[4]],
    [4,6,233.082,"#btn-row4-6",hColors[5],oColors[5]],
    [4,7,246.942,"#btn-row4-7",hColors[6],oColors[6]],
    [4,8,261.626,"#btn-row4-8",hColors[7],oColors[7]], //middle C
    [4,9,277.183,"#btn-row4-9",hColors[8],oColors[8]],
    [4,10,293.665,"#btn-row4-10",hColors[9],oColors[9]],
    [4,11,311.127,"#btn-row4-11",hColors[10],oColors[10]],
    [4,12,329.628,"#btn-row4-12",hColors[11],oColors[11]]],
  [ //row5
    [5,1,87.3071,"#btn-row5-1",hColors[0],oColors[0]],
    [5,2,92.4986,"#btn-row5-2",hColors[1],oColors[1]],
    [5,3,97.9989,"#btn-row5-3",hColors[2],oColors[2]],
    [5,4,103.826,"#btn-row5-4",hColors[3],oColors[3]],
    [5,5,110.000,"#btn-row5-5",hColors[4],oColors[4]],
    [5,6,116.541,"#btn-row5-6",hColors[5],oColors[5]],
    [5,7,123.471,"#btn-row5-7",hColors[6],oColors[6]],
    [5,8,130.813,"#btn-row5-8",hColors[7],oColors[7]],
    [5,9,138.591,"#btn-row5-9",hColors[8],oColors[8]],
    [5,10,146.832,"#btn-row5-10",hColors[9],oColors[9]],
    [5,11,155.563,"#btn-row5-11",hColors[10],oColors[10]],
    [5,12,164.814,"#btn-row5-12",hColors[11],oColors[11]]],
  [ //row6
    [6,1,43.6535,"#btn-row6-1",hColors[0],oColors[0]],
    [6,2,46.2493,"#btn-row6-2",hColors[1],oColors[1]],
    [6,3,48.9994,"#btn-row6-3",hColors[2],oColors[2]],
    [6,4,51.9131,"#btn-row6-4",hColors[3],oColors[3]],
    [6,5,55.0000,"#btn-row6-5",hColors[4],oColors[4]],
    [6,6,58.2705,"#btn-row6-6",hColors[5],oColors[5]],
    [6,7,61.7354,"#btn-row6-7",hColors[6],oColors[6]],
    [6,8,65.4064,"#btn-row6-8",hColors[7],oColors[7]],
    [6,9,69.2957,"#btn-row6-9",hColors[8],oColors[8]],
    [6,10,73.4162,"#btn-row6-10",hColors[9],oColors[9]],
    [6,11,77.7817,"#btn-row6-11",hColors[10],oColors[10]],
    [6,12,82.4069,"#btn-row6-12",hColors[11],oColors[11]]],
];

 var sequence = [notes[1][9][2],notes[1][11][2],notes[1][7][2],notes[4][7][2],notes[3][2][2],
              notes[1][9][2],notes[1][11][2],notes[1][7][2],notes[2][7][2],notes[1][2][2],
              notes[3][9][2],notes[3][11][2],notes[3][7][2],notes[4][7][2],notes[3][2][2],
              notes[3][9][2],notes[3][11][2],notes[3][7][2],notes[4][7][2],notes[3][2][2],
              notes[3][2][2],notes[3][2][2],notes[3][7][2],notes[3][7][2],notes[3][2][2]];
  
 var buttonIDS = [notes[1][9][3],notes[1][11][3],notes[1][7][3],notes[4][7][3],notes[3][2][3],
               notes[1][9][3],notes[1][11][3],notes[1][7][3],notes[2][7][3],notes[1][2][3],
               notes[3][9][3],notes[3][11][3],notes[3][7][3],notes[4][7][3],notes[3][2][3],
               notes[3][9][3],notes[3][11][3],notes[3][7][3],notes[4][7][3],notes[3][2][3],
               notes[3][2][3],notes[3][2][3],notes[3][7][3],notes[3][7][3],notes[3][2][3]];

 var colors = [notes[1][9][4],notes[1][11][4],notes[1][7][4],notes[4][7][4],notes[3][2][4],
            notes[1][9][4],notes[1][11][4],notes[1][7][4],notes[2][7][4],notes[1][2][4],
            notes[3][9][4],notes[3][11][4],notes[3][7][4],notes[4][7][4],notes[3][2][4],
            notes[3][9][4],notes[3][11][4],notes[3][7][4],notes[4][7][4],notes[3][2][4],
            notes[3][2][4],notes[3][2][4],notes[3][7][4],notes[3][7][4],notes[3][2][4]];

window.AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new window.AudioContext();
var context = new AudioContext();
var osc1;
var osc2;
var counter = document.getElementById('counterdiv');
var currentCount = counter.querySelector('.theCount');
var randomIndex = [];
var playerPlayed = [];
var currentSolution = [];
var currentButtonIDS = [];
var currentColors = [];
var firstPlay = true;
var pNotesPlayed = 0; //counts how many notes the player played
var cNotesPlayed = 0; //counts how many notes the computer played
var playerTurn = false;
var gameOn = false; //toggle switch off
var gameRunning = false; //player has not started theme or random game
var themeGame = false;
var won = false;
var strictMode = false;
    
document.getElementById("mycheck").onclick = function() {
  if (this.checked) {
    gameOn = true;
  } else {
    gameOn = false;
    resetGame();
  }
};

function strict() {
  strictMode = !strictMode;
  if (strictMode === true) {
    $(light).css("background-color", "green");
  } else {
    $(light).css("background-color", "red");
  }
}

function startThemeGame() {
  if (gameOn === true) {
    resetGame();
    themeGame = true;
    currentSolution = [sequence[0]];
    setTimeout(function() {
      dealRandomNote();      
    }, 2000);  }
}

function startRandomGame() {
  if (gameOn === true) {
    themeGame = false;
    resetGame();
    setTimeout(function() {
      dealRandomNote();      
    }, 2000);
  }
}

function playNextRound() {  
  playerTurn = false;
  if (currentSolution.length < 20) {
    setTimeout (function() {
      dealRandomNote();
    }, 1000);
  } else if (currentSolution.length === 20) {
    won = true;
    gameOver();
  }
}

function dealRandomNote() {
  if (themeGame === true) {
    playerTurn = false;
    var nextIndex = currentSolution.length;
    if (firstPlay === false) {
      currentSolution.push(sequence[nextIndex]);
    }
    currentCount.innerHTML = currentSolution.length;
    console.log(currentSolution);
    computerPlay();
  } else if (themeGame === false) {
    playerTurn = false;
    var randomRow = Math.floor(Math.random() * 5) + 0;
    var randomCol = Math.floor(Math.random() * 11) + 0;
    currentSolution.push(notes[randomRow][randomCol][2]);
    currentButtonIDS.push(notes[randomRow][randomCol][3]);
    currentColors.push(notes[randomRow][randomCol][4]);
    currentCount.innerHTML = currentSolution.length;
    computerPlay();
  }
}

function computerPlay() {
  playerTurn = false;
  cNotesPlayed = 0; //reset for this turn
  pNotesPlayed = 0; //reset notesPlayed for next turn
  playerPlayed = [];
  firstPlay = false;
  var i = 0; 
  var howManyTimes = currentSolution.length;
  if (themeGame === true) {
    function f() {
      playNote(sequence[i], context.currentTime, 1.000);
      highlight(buttonIDS[i], colors[i], 1000);
      i++;
      if (i === howManyTimes) {
       playersTurn();
    //    testPlayerPlay();
      }
      if( i < howManyTimes && i > 0 ){
        setTimeout( f, 1000 );
      }
    }
    f();
  } else if (themeGame === false) {
    function f() {
      playNote(currentSolution[i], context.currentTime, 1.000);
      highlight(currentButtonIDS[i], currentColors[i], 1000);
      i++;
      if (i === howManyTimes) {
       playersTurn();
//        testPlayerPlay();
      }
      if( i < howManyTimes && i > 0 ){
        setTimeout( f, 1000 );
      }
    }
    f();
  }
}

function playersTurn() {
  playerTurn = true;
  setTimeout(function() { //if player doesn't respond in 3 seconds, timeout
    if (pNotesPlayed === 0) {
      wrongAnswer();
    }
  }, 3000);
}

function playerPlay(row,column) {
  if (playerTurn === true) {
    resetTimer();
    pNotesPlayed++;
    var a = notes[row-1][column-1];
    playNote(a[2], context.currentTime, 1.000); 
    highlight("#btn-row"+(row)+"-"+(column),hColors[column-1], 1000); 
    playerPlayed.push(a[2]);
    // return false;
    checkIfCorrect();
  } 
}

function testPlayerPlay() {
  setTimeout(function(){
    if (playerTurn === true) {
        resetTimer();
        pNotesPlayed++;
        var j = 0; 
        var howManyTimes = currentSolution.length;
      if (themeGame === true){
        function f() {
          playNote(sequence[j], context.currentTime, 1.000);
          highlight(buttonIDS[j], colors[j], 1000);
          playerPlayed.push(sequence[j]);
          console.log(playerPlayed);
          j++;
          if (j === howManyTimes) {
            checkIfCorrect();
          }
          if (j < howManyTimes && j > 0 ){
            setTimeout( f, 1000 );
          }
          }
          f();        
        } else if (themeGame === false) {
          function f() {
            playNote(currentSolution[j], context.currentTime, 1.000);
            highlight(currentButtonIDS[j], currentColors[j], 1000);
            playerPlayed.push(currentSolution[j]);
            j++;
            if (j === howManyTimes) {
              checkIfCorrect();
            }
            if (j < howManyTimes && j > 0 ){
              setTimeout( f, 1000 );
            }
          }
          f();
        }
    }
  }, 1000);
}

function checkIfCorrect() {
  startTimer();
  var a = pNotesPlayed-1;
  if (playerPlayed[a] != currentSolution[a]) {
    if (strictMode === true) {
      resetGame();
      setTimeout(function() {
        if (themeGame === true) {
          startThemeGame();
        } else if (themeGame != true) {
          startRandomGame();
        }
      }, 2000);
      return;
    }
    wrongAnswer();
    return a;
  } else if (playerPlayed[a] === currentSolution[a]) {
      if (playerPlayed.length === currentSolution.length) {
        playerTurn = false;
        setTimeout(function(){
          playNextRound();
        }, 1000);
      }
  }
}

//used in conjunction with timer, see if player timed out before answering
function checkIfPlayerPlayed() { 
  if (pNotesPlayed != cNotesPlayed) {
    wrongAnswer();
  }
}

function wrongAnswer(a) {
  playerTurn = false;
  setTimeout(function() { 
    //wait for wrong note to finish playing
    playerPlayed.splice([a], 1);
    playNote(notes[5][6], context.currentTime, 1.000); 
    playNote(notes[5][11], context.currentTime, 1.000);
    resetBoard();
  }, 1000);
  setTimeout(function() {
    computerPlay();    
  }, 3000);
}

function highlight(buttonID, highlightColor, time) {
  var originalColor = $(buttonID).css("background");
  $(buttonID).css("background", highlightColor);
  setTimeout(function() {
    $(buttonID).css("background", originalColor);
  }, time);
}

var playNote = function (frequency, startTime, duration) {
  var osc1 = context.createOscillator(),
        osc2 = context.createOscillator(),
        volume = context.createGain();
 
    // Set oscillator wave type
    osc1.type = 'triangle';
    osc2.type = 'triangle';
 
    volume.gain.value = 0.3;    
 
    // Set up node routing
    osc1.connect(volume);
    osc2.connect(volume);
    volume.connect(context.destination);
 
    // Detune oscillators for chorus effect
    osc1.frequency.value = frequency + 1;
    osc2.frequency.value = frequency - 2;
 
    // Fade out
    volume.gain.setValueAtTime(0.1, startTime + duration - 0.05);
    volume.gain.linearRampToValueAtTime(0, startTime + duration);
 
    // Start oscillators
    osc1.start(startTime);
    osc2.start(startTime);
 
    // Stop oscillators
    osc1.stop(startTime + duration);
    osc2.stop(startTime + duration);
};

function resetBoard() {
  for (j=1; j <= 70; j++) {
    highlight("#btn-row1-"+(j),oColors[j-1],1000);   
    highlight("#btn-row2-"+(j),oColors[j-1],1000);   
    highlight("#btn-row3-"+(j),oColors[j-1],1000);   
    highlight("#btn-row4-"+(j),oColors[j-1],1000);   
    highlight("#btn-row5-"+(j),oColors[j-1],1000);   
    highlight("#btn-row6-"+(j),oColors[j-1],1000);   
  }
  for (k=1; k <= 70; k++) {
    highlight("#btn-row1-"+(k),hColors[k-1],1000);   
    highlight("#btn-row2-"+(k),hColors[k-1],1000);   
    highlight("#btn-row3-"+(k),hColors[k-1],1000);   
    highlight("#btn-row4-"+(k),hColors[k-1],1000);   
    highlight("#btn-row5-"+(k),hColors[k-1],1000);   
    highlight("#btn-row6-"+(k),hColors[k-1],1000);   
  }
}

function clearGame() {
  currentCount.innerHTML = 0;
  randomIndex = [];
  playerPlayed = [];
  currentButtonIDS = [];
  currentColors = [];
  currentSolution = [];
  firstPlay = true;
  pNotesPlayed = 0;
  cNotesPlayed = 0;
  playerTurn = false;
  won = false;
}

function resetGame() {
  //clear timeouts
  var id = window.setTimeout(function() {}, 0);
  // will do nothing if no timeout with id is present
  while (id--) {
    window.clearTimeout(id); 
  }
  resetTimer();
  clearGame();
  resetBoard();
}

function gameOver() {
  resetTimer();
  if (won === true) {
    var timeToDisplay = 3000;
    winBoard(timeToDisplay);
    setTimeout(function(){
      resetGame();
      setTimeout(function() {
        if (themeGame === true) {
          startThemeGame();
        } else if (themeGame != true) {
          startRandomGame();
        }
      }, 2000);
    }, 4000);
  } else if (won != true) {
    loseBoard();
  }
}

function winBoard(timeToDisplay) {
  for (j=1; j <= 70; j++) { //make original colors first
    highlight("#btn-row1-"+(j),oColors[j-1],1000);   
    highlight("#btn-row2-"+(j),oColors[j-1],1000);   
    highlight("#btn-row3-"+(j),oColors[j-1],1000);   
    highlight("#btn-row4-"+(j),oColors[j-1],1000);   
    highlight("#btn-row5-"+(j),oColors[j-1],1000);   
    highlight("#btn-row6-"+(j),oColors[j-1],1000);   
  }
  setTimeout(function () {
      var x = timeToDisplay;
  highlight("#btn-row2-1",hColors[0],x); 
  highlight("#btn-row3-1",hColors[0],x); 
  highlight("#btn-row4-1",hColors[0],x); 
  highlight("#btn-row5-1",hColors[0],x); 
  highlight("#btn-row5-2",hColors[1],x); 
  highlight("#btn-row2-3",hColors[2],x); 
  highlight("#btn-row3-3",hColors[2],x);
  highlight("#btn-row4-3",hColors[2],x);
  highlight("#btn-row5-3",hColors[2],x);
  highlight("#btn-row5-4",hColors[3],x);
  highlight("#btn-row2-5",hColors[4],x);
  highlight("#btn-row3-5",hColors[4],x);
  highlight("#btn-row4-5",hColors[4],x);
  highlight("#btn-row5-5",hColors[4],x);
  highlight("#btn-row2-7",hColors[6],x);
  highlight("#btn-row3-7",hColors[6],x);
  highlight("#btn-row4-7",hColors[6],x);
  highlight("#btn-row5-7",hColors[6],x);
  highlight("#btn-row2-9",hColors[8],x);
  highlight("#btn-row3-9",hColors[8],x);
  highlight("#btn-row4-9",hColors[8],x);
  highlight("#btn-row5-9",hColors[8],x);
  highlight("#btn-row3-10",hColors[9],x);
  highlight("#btn-row4-11",hColors[10],x);
  highlight("#btn-row2-12",hColors[11],x);
  highlight("#btn-row3-12",hColors[11],x);
  highlight("#btn-row4-12",hColors[11],x);
  highlight("#btn-row5-12",hColors[11],x);
  }, 1000);

}

function loseBoard() {
  resetGame();
}

//TIMER-----------------------------------------------
var currentTime = 0;
//var deadline = 0;
var running = false;
var timeinterval = 0;

function getTimeRemaining(endtime){
var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  return {
    'total': t,
    'seconds': seconds
  };
}

function initializeClock(endtime){
  currentTime = Date.parse(new Date());
//  deadline = new Date(currentTime + 3000);
    function updateClock() {
      if (running === true) {   
        var t = getTimeRemaining(endtime);
        if(t.total<=0){
          running = false;
          clearInterval(timeinterval);
          checkIfPlayerPlayed();
        }
      }
    }
  clearInterval(timeinterval);
  updateClock(); // run function once at first to avoid delay
  timeinterval = setInterval(updateClock,1000);
}

function startTimer() {
  if (running === false) {
    running = true;
    clearInterval(timeinterval);
    timerinterval = null;
    currentTime = Date.parse(new Date());
    var endtime = new Date(currentTime + 3000);
    initializeClock(endtime);
  }
}

function resetTimer() {
  running = false;
  clearInterval(timeinterval);
  timerinterval = null;
}

function restartTimer() {
  running = true;
  clearInterval(timeinterval);
  timerinterval = null;
  currentTime = Date.parse(new Date());
  var endtime = new Date(currentTime + ss.innerHTML*60*1000);
  initializeClock(endtime);
}

// the modal ----------------------------------------------
var modal = document.getElementById('myModal');
var btn = document.getElementById("info");
var close = document.getElementById("closebtn");
btn.onclick = function() {
    modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
close.onclick = function() {
    modal.style.display = "none";
};