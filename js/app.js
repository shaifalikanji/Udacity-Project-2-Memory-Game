

                        /* STEP 1: BUILD CARDS FROM THE ARRAY ABOVE BY LOOPING INSIDE THE ARRAY */


//FIRST TASK: CREATE A ARRAY LIST
/*that holds all your cards, they have to match when flipped, add 2 cards of each type, delete all ('li') in HTML,
and create array, javascript will automatically create cards for you when looped*/

//loop within array until 16 cards are read, create a 'li' element, add each card to the list, 
//name the cards, add the all the cards to the original deck
 



var allCards = ['fa fa-diamond', 'fa fa-diamond', 'fa fa-paper-plane-o', 'fa fa-paper-plane-o', 
'fa fa-anchor', 'fa fa-anchor', 'fa fa-bolt', 'fa fa-bolt', 'fa fa-cube', 'fa fa-cube', 'fa fa-leaf', 'fa fa-leaf', 
'fa fa-bicycle', 'fa fa-bicycle', 'fa fa-bomb', 'fa fa-bomb'];

var cardsBox = document.getElementsByClassName('deck')[0];

var cardsOpen = []; 
var matchingCards = []; 

//innerHTML: is the actual innerIMAGE of the card eg (diamond, plane etc)
//classList: is accessing all the elements from that specific class

shuffle(allCards); 

function startGame() { 


for(var i = 0; i < allCards.length; i++) { 
        let newCard = document.createElement("li"); 
        newCard.classList.add("card"); 
        newCard.innerHTML = `<i class="${allCards[i]}"></i>`;  
        cardsBox.appendChild(newCard); 

        clickCards(newCard); 
                            
}

                            
                            
                            
                            /* STEP 2: ADDING EVENT LISTENER TO EACH CARD THAT IS CLICKED */


var firstClickedCard = true;

function clickCards(newCard) { //function for all click events below

newCard.addEventListener("click", function() { 
        //console.log(newCard.innerHTML);

        if(firstClickedCard) { 
          timerStart();
          firstClickedCard = false; 


        }
        

if(cardsOpen.length === 1) { //if you open a card and click it

            newCard.classList.add("open", "show", 'disabled'); 
            cardsOpen.push(newCard);
  
            if(newCard.innerHTML === cardsOpen[0].innerHTML) { 
            //console.log('YOUR CARDS MATCH'); //first opened card matches second opened card similar to code code below
            newCard.classList.add('match'); 
            cardsOpen[0].classList.add('match');

            matchingCards.push(newCard, cardsOpen); 

            cardsOpen = []; 

            gameFinished(); 
           

             }else{ 
                
                setTimeout(function () { 
                
                newCard.classList.remove ('open', 'show','disabled'); 
                cardsOpen[0].classList.remove ('open', 'show', 'disabled'); 
                cardsOpen = []; 
                }, 250);


            addMove();
            
        }
        
        
        } else { 
      
            newCard.classList.add("open", "show","disabled"); 
            cardsOpen.push(newCard); 
        
        }
        
    });
        
}
        
}
                                /* STEP 3: YOUR GAME IS FINISHED */



//when all your set of cards match and you have 8 matches and are they all the cards from the original 'allcards' array it means your game is over
//basically repeat from above: //check this using 'matchingCards' in javascript console once all 16 cards match = 8 sets = now the game is over!
//matchingCards.length, allCards.length = should both equal to 16 cards. Game is only over if the two arrays have 16 cards.

function gameFinished() { 
    if (allCards.length === 16 && matchingCards.length ===16) { 
        
        timerStop(); 
        showModal();
        modalStats();
      

               


                              //* STEP 4: CONGRATULATIONS POP UP */
      
      
//When a user wins the game, a modal appears to congratulate player: timer, star rating, play again
//alert('CONGRATULAIONS YOU WON!')
 
// Get the modal
// Get the <span> X element that closes the modal
// When the user clicks on the button, open the modal
// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it

      // Display Modal
      
function showModal(){
        var modal = document.getElementById('myModal');
      
        var span = document.getElementsByClassName('close')[0];
        
        var button = document.getElementsByClassName ('modal_cancel') [0];
        
       
        
        document.querySelector('.modal_replay').addEventListener('click', replayGame);
        modal.style.display = "block";
        
        button.onclick = function() { //hide modal when cancel button is clicked
            modal.style.display ='none';
        }
        

        span.onclick = function() { //hide modal when close x is clicked
        modal.style.display = "none";
        }

        window.onclick = function(event) { //hide modal if player clicks anywhere outside of modal
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    

}   
      
      
      
      
      
    var playAgain = document.querySelector('.modal_replay'); 
    playAgain.addEventListener('click', function() { 

        //delete all cards
        cardsBox.innerHTML = ""; 


        //call startGame function to create new cards
        startGame(); //all the cards are reset and game restarts
        resetGame(); //resets all variables
        
        
        // RESET ALL THE VARIABLES BELOW:  including: matchingCards, moves, rating and timer
       
      });   
      
      
      function resetGame() {
        matchingCards = []; 
        moves = 0; 
        movesBox.innerHTML = moves; 
        starsBox.innerHTML = `<li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li `;
                            
        cardsOpen = [];

        timerStop(); 
        firstClickedCard = true;
        totalSec = 0;
        timerBox.innerHTML = totalSec + 'seconds'; 
        
        shuffle(allCards);
    
    } 
      
    function modalStats(){

    var moveStat = document.querySelector('.modal_moves');
    var timeStat= document.querySelector('.modal_time');

    const starsStat = document.querySelector('.modal_stars');
    const stars = getStars();
    
    moveStat.innerHTML=`Moves : ${movesBox.innerHTML}`;
    var t = document.querySelector('.timer').innerHTML; 
    timeStat.innerHTML=`Time : ${t}`;
    
    starsStat.innerHTML = `Stars : ${stars}`;
}
    

    }
        
}


function getStars() {
    stars = document.querySelectorAll('.stars li');
    starCount = 0;
    for (star of stars) {
        if (star.style.display !== 'none') {
            starCount++;
        }
    }
    return starCount;
}



function replayGame() { 
        resetGame();
        
       

}

                                      /* STEP 5: SETTING THE MOVES  */


var movesBox = document.querySelector('.moves')            
var moves = 0;
movesBox.innerHTML = 0;

function addMove() { 
    moves ++;
    movesBox.innerHTML = moves; 
    starRating(); 
                             


}


                                                /* STEP 6: STAR RATING */
  

//ul class parent = 'stars', li child class = fa fa-star

var starsBox = document.querySelector('.stars'); //selecting the parent star
starsBox.innerHTML = `<li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li`; 

function starRating() { //function is used as the player moves around the game depending on how many times they click based on the move counter
                    //call this function above in STEP 4 addMove
   
    if( moves < 8) {
    starsBox.innerHTML = `<li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li `; //show 3 star

    }else if( moves < 16 ) {
    starsBox.innerHTML = `<li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li`; //show 2 stars

    }else {

    starsBox.innerHTML = ` <li><i class="fa fa-star"></i></li `;
                            //show 1 star
}
    
    }

                                     /* STEP 7: CREATING A TIMER */  
                        
var timerBox = document.querySelector('.timer'); //created in html file in order to use 'timer' class
var timers
    totalSec = 0;

timerBox.innerHTML = totalSec + '  seconds';

function timerStart(){ //function to start the timer 
    timers =setInterval(function() {

        totalSec = totalSec + 1; 
        timerBox.innerHTML = totalSec + '  seconds'; // new time is added into the timerBox
    }, 1000);


}

function timerStop(){ //this function stops the timer and call it when the game is finished //called on line # 134
    clearInterval(timers); //clearInterval is used to stop the timer
}



                       
                             /* STEP 8: RESTART BUTTON : Resetting the board on the game */


var restartButton = document.querySelector('.restart'); //class restart in html file
    restartButton.addEventListener('click', function() { //the restart button should do the following:

        //delete all cards
        cardsBox.innerHTML = ""; //delete all the innerHTML of the cards so they are flipped over for a fresh restart


        //call startGame function to create new cards
        startGame(); //all the cards are reset and game restarts
        resetGame(); //resets all variables
        
        // RESET ALL THE VARIABLES BELOW:  including: matchingCards, moves, rating and timer
       
      });   

    function resetGame() {
        matchingCards = []; //all the cards are deleted from the matchingCards array
        moves = 0; //reset the moves to 0 when the resetart button is clicked 
        movesBox.innerHTML = moves; //reset the moves to 0 when the restart button is clicked
        starsBox.innerHTML = `<li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li <li><i class="fa fa-star"></i></li `;
                            // reset the stars when restart button is clicked


        timerStop(); // resetting the time :start over
        firstClickedCard = true;// start the timer again 
        totalSec = 0;
        timerBox.innerHTML = totalSec + 'seconds'; //here you basically set the new seconds and add it to the innerHTML
        
    
    } 

        
startGame(); // call the 'startGame' function and start the game for the FIRST TIME line #55 function is defined.





                              /* STEP 9: SHUFFLE : shuffle function to shuffle cards */

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;

}

//shuffle(allCards); line #51 called this function, now all cards are shuffled in the game


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
