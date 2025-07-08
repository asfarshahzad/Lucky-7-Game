
window.addEventListener("load", (event) => {
    sectionFirst.style.display = "block";
    sectionSecond.style.display = "none";

});


// function to show or hide sectionFisrt or sectionSecond
playNow.addEventListener('click', function () {
    StartSound();
    sectionFirst.style.display = "none";
    sectionSecond.style.display = "block";

});

// resetScore.addEventListener('click', function () {
//     sectionFirst.style.display = "block";
//     sectionSecond.style.display = "none";
// });


// function to show Rules div 
showRules.addEventListener('click', () => {
    show.innerHTML =
        ` <p class="text-end text-danger"><i class="fa-regular fa-circle-xmark fs-3" onclick="hideRules()"></i></p>
<div class="bg-color">
    <h5 class="fw-bold fs-3">How to play Dice Game</h5>
    <p>
        Start the Game when the game begins, press one of the three buttons (Below, Lucky 7, or Above 7) to generate your first number. <br />
        <h5 class="fw-bold fs-3">Rounds</h5>
        The game has 3 rounds. In each round, you need to press a button to generate a random number. You can select any button in each round: Below 7, Lucky 7, or Above 7. <br /> <br />
        <h5 class="fw-bold fs-3">Winning Condition</h5>
        If you get the same number twice in any of the 3 rounds, you win! If no number repeats after 3 rounds, the game is over, and you lose. <br /> <br />
        <h5 class="fw-bold fs-3">Tips</h5>
        Try using a different button in each round to maximize your chances of repeating a number. Use the Lucky 7 Button if you feel the number 7 will help you win. Enjoy the game and see if luck is on your side! 🎲😊
    </p>
</div>`
});


// function to hide Rules div 
function hideRules() {
    show.innerHTML = "";
}




function StartSound() {
    var audio = new Audio('pic/start.wav');
    audio.play();
}
function diceSound() {
    var audio = new Audio('pic/dice.mp3');
    audio.play();
}
function endSound() {
    var audio = new Audio('pic/end.mp3');
    audio.play();
}
function errorSound() {
    var audio = new Audio('pic/error.mp3');
    audio.play();
}







let winArray = [];
let loseArray = [];
let commanArray = [];
let roundResult = [];


function below7() {

    let h1 = document.querySelector(".resultParent")
    let loder = document.querySelector(".loder")
    let highlight = document.getElementById('highlight')
    highlight.textContent = "You Choose Below 7";

    let below7Value = [1, 2, 3, 4, 5, 6]
    let randomNumber = Math.ceil(Math.random() * 12)


    loder.innerHTML = `<img src="https://media.tenor.com/sUiwSBs8S6QAAAAj/dice-game.gif"/>`

    setTimeout(() => {
        loder.innerHTML = ''
    }, 2000)
    setTimeout(() => {
        h1.innerHTML = `<h2 class="result"> Computer Number: ${randomNumber}</h2>`

        for (let i = 0; i < below7Value.length; i++) {
            if (below7Value[i] === randomNumber) {
                win(below7Value[i])
                break;
            }
            if (randomNumber > 6) {
                lose(below7Value[i])
                break;
            }
        }

        commanArray.push(1);
        roundCountProgram();
    }, 2000)
}

function lucky7() {

    let h1 = document.querySelector(".resultParent");
    let loder = document.querySelector(".loder");
    let highlight = document.getElementById('highlight');
    highlight.textContent = "You Choose Lucky 7";

    let lucky7 = 7
    let randomNumber = Math.ceil(Math.random() * 12)

    loder.innerHTML = `<img src="https://media.tenor.com/sUiwSBs8S6QAAAAj/dice-game.gif"/>`

    setTimeout(() => {
        loder.innerHTML = ''
    }, 2000)

    setTimeout(() => {
        h1.innerHTML = `<h1 class="result"> Computer Number: ${randomNumber}</h1>`

        if (lucky7 === randomNumber) {
            win(lucky7)
        } else {
            lose(lucky7)
        }
        commanArray.push(1)
        roundCountProgram()
    }, 2000)
}

function above7() {

    let h1 = document.querySelector(".resultParent")
    let loder = document.querySelector(".loder")
    let highlight = document.getElementById('highlight')
    highlight.textContent = "You Choose Above 7";

    let below7Value = [8, 9, 10, 11, 12]
    let randomNumber = Math.ceil(Math.random() * 12)

    loder.innerHTML = `<img src="https://media.tenor.com/sUiwSBs8S6QAAAAj/dice-game.gif"/>`

    setTimeout(() => {
        loder.innerHTML = ''
    }, 2000)

    setTimeout(() => {
        h1.innerHTML = `<h1 class="result"> Computer Number: ${randomNumber}</h1>`

        for (let i = 0; i < below7Value.length; i++) {
            if (below7Value[i] === randomNumber) {
                win(below7Value[i])
                break;
            }
            if (randomNumber < 8) {
                lose(below7Value[i])
                break;
            }
        }
        commanArray.push(1)
        roundCountProgram()
    }, 2000)

}

function win(value) {

    roundResult.push(`<h5 class = "winnig"> You win! 🎉</h5>`)


    winArray.push(1)
    console.log(winArray)
    round()
    roundResultWork()
}

function lose(value) {

    roundResult.push(`<h5 class = "losing">You lose!</h5>`)

    loseArray.push(2)
    console.log(loseArray)
    round()
    roundResultWork()
}

function round() {

    let child = document.querySelector(".child")
    let childWork = document.querySelector(".module")
    let booo = document.querySelector(".booo")
    var bgColor = document.getElementById('bg-color-second-section')

    if (winArray.length == 2) {

        child.className = "hello"

        booo.className = "check"

        childWork.innerHTML += `
        <img src="./pic/win.png" class="winWork"></img>
        <div class= "btn-wrapper">
            <div class="startBtnParent">
            <button onclick="start()" class="again-btn">Play again</button>
            </div>
        </div>
        `
        // document.getElementById('resetScore').style.display = "none";
        document.getElementById('showRules').style.display = "none";
    }
    if (loseArray.length == 2) {

        child.className = "hello"
        childWork.innerHTML += `
        <img src="./pic/lose.png" class="loseWork"></img>
        <div class= "btn-wrapper">
            <div class="startBtnParent">
            <button onclick="start()" class="btnn">Try again</button>
            </div>
        </div>
        `
        // document.getElementById('resetScore').style.display = "none";
        document.getElementById('showRules').style.display = "none";
    }
}

function roundCountProgram() {
    let roundCount = document.querySelector(".roundCount")

    roundCount.innerText = `Round ${commanArray.length}`
}

function roundResultWork() {
    let h1 = document.querySelector(".round")

    h1.innerHTML = ""
    roundResult.map((item) => {
        h1.innerHTML += `${item} <br>`
    })
}

function start() {
    window.location.reload()
}