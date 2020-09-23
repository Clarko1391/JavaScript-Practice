const game = ()=> {
    let pScore = 0;
    let cScore = 0;
    
    //Start the Game
    const startGame = ()=> {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=> {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    }

    //Play a Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector ('.playerHand');
        const computerHand = document.querySelector ('.computerHand');
        const hands = document.querySelectorAll ('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = "";
            });
        });

        //Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];
        
        options.forEach(option => {
            option.addEventListener('click', function() {
                // Computer Choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(() =>{
                    // call 'compare hands' here
                    compareHands(this.textContent, computerChoice);

                    //Update images 
                    playerHand.src = `./img/${this.textContent}.png`;
                    computerHand.src = `./img/${computerChoice}.png`;
                    }, 2000);

                // Animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });   
        })
    };

    //Update Score
    const updateScore = ()=> {
        const playerScore = document.querySelector ('.playerScore p');
        const computerScore = document.querySelector ('.computerScore p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Compare Hands
    const compareHands = (playerChoice, computerChoice)=> {
        //update text
        const winner = document.querySelector('.winner');
        // Checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent = "It's a tie!"
            return;
        }
        //Check for Rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
        }else{
            winner.textContent = 'Computer Wins'
            cScore++;
            updateScore();
            return;
        }
        //Check for Paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
        }else{
            winner.textContent = 'Computer Wins'
            cScore++;
            updateScore();
            return;
        }
        //Check for Scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins!'
                pScore++;
                updateScore();
                return;
            }
        }else{
            winner.textContent = 'Computer Wins'
            cScore++;
            updateScore();
            return;
        }
    
    }

    // Call All Inner Functions
    startGame();
    playMatch();
}



// Start Game
game();