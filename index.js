

let cards = []
let sum = 0
let hasBlackJack = false //Default
let isAlive = false //Default: Using this to track whether or not you are alive in the game. Set false because at the beginning not alive yet in game
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.querySelector('#sum-el') //QuerySelector used: We specify that the selector is an ID with so so name. Now we can change this to a class if we want
let cardsEl = document.getElementById("cards-el")
let newCardMessage = document.getElementById('new-card')

//Create object for player

let player = {
    name: 'Green',
    chips: 145
} // This is an object

let playerEl = document.getElementById('player-el')

playerEl.textContent = player.name + ': $' + player.chips



//Creating the function for our blackjack button on the game interface

function getRandomCard(){
    let randomCard = Math.floor( Math.random() *13) +1
    if (randomCard === 1){
        return 11
    } else if ( randomCard > 10){
        return 10
   
    } else return randomCard
  
}

function startGame(){
    
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard 

    renderGame()
} // We did not change the name of 'startGame' in out html instead we simple created a different function with the name "startGame" that calls the function renderGame


function renderGame() {

    cardsEl.textContent = "Cards: "
 
for ( let i = 0; i < cards.length; i ++){
    cardsEl.textContent += cards[i] + " "

}

    if (sum <= 20) {
        message =" You're Still in the game! Wanna draw another card?"  //Replacing consol.log with message
      isAlive = true
    } else if (sum === 21) {
        message = "Wow! You have BlackJack"
     hasBlackJack = true
     } else {
         message = 'Oop! Your money is gone'
         isAlive = false
     } // Remeber that the last condition can simply be just 'else' since that is the only other possible condition



sumEl.textContent = "Sum: " + sum
messageEl.textContent = message

}



function newCard(){ 

    if ( isAlive === true && hasBlackJack === false) {
        let extraCard = getRandomCard()
        sum += extraCard
        cards.push(extraCard) //Pushing the extra card to the array 'cards'
        renderGame()
        newCardMessage.textContent = "You have drawn a new card"    

    }
    
   }

