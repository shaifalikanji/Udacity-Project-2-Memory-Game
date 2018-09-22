Memory Game Project
Table of Contents
Instructions
Contributing
Contributing
This repository is the starter code for all Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out CONTRIBUTING.md.

WHAT YOU NEED TO BE FAMILIAR WITH:
Basic experience in HTML, CSS and JavaScript.

INSTRUCTIONS FOR THIS GAME:
The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open js/app.js and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the Udacity Classroom.

SUMMARY OF WHAT THE GAME DOES:
//https://docs.google.com/document/d/1xI7Hk1uQtitVuU2lfgWGS4Ic4CWsGEr0L1P1Vt7IYMs/edit

This game consists of a grid with 16 cards each with a different icon, that acts as 8 different pairs of cards. Each card is randomly placed with the symbols facing down. Each time a card is clicked it should flip over and show the icon and stay turned. When a second card (different card) is clicked on it must also flip over and show the icon. If the 2 cards that are flipped over match and remain flipped over then we will add these cards to the [matchingCards] variable. If the cards do not match, they automatically flip over and the icons on the cards will hide.

The game randomly shuffles the cards. A user wins once all cards have successfully been matched.

When the game ends: the following functions/variables should also be reset : •	show a modal •	Reset button •	Star rating • Timer •	Move counter •	Shuffle all the cards

STEPS REQUIRED TO COMPLETE THIS GAME
Create a Congratulations Popup: using [function showModal] When a user wins the game, a modal appears to congratulate the player and ask if they want to play again. It should also tell the user how much time it took to win the game, and what the star rating was.

Create a Restart Button: using [function resetGame] A restart button allows the player to reset the game board, the timer, and the star rating.

Create a Star Rating: using [function startRating] The game displays a star rating (from 1 to at least 3) that reflects the player's performance. At the beginning of a game, it should display at least 3 stars. After some number of moves, it should change to a lower star rating. After a few more moves, it should change to a even lower star rating (down to 1). The number of moves needed to change the rating is up to you, but it should happen at some point.

Create a Timer: using [function timerStart] When the player starts a game, a displayed timer should also start. Once the player wins the game, the timer stops.

Create a Move Counter: using [function addMove] Game displays the current number of moves a user has made.

use a shuffle function: from the site below // Shuffle function from http://stackoverflow.com/a/2450976

