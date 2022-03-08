let CgNo = Math.floor(Math.random() * 10) + 1

console.log(CgNo);
let userguessed = document.getElementById("guessed-no-area");
const resultArea = document.getElementById("guess-n-area");
const checkBtn = document.getElementById("check");
const correctAns = document.getElementById("correct");
checkBtn.addEventListener("click", inpvalue);
const score = document.getElementById("score");
let tryagain = document.getElementById("tryagain")
tryagain.addEventListener("click",reverse)
const Highscore = document.getElementById("highScorem");
let Highscorem = 0
Highscore.innerText = Highscorem


let scoreMark = 20;
score.innerText = scoreMark



console.log(userguessed2);
function inpvalue() {
    score.innerText = scoreMark
    let userguessed2 = parseInt(userguessed.value);
    console.log(Highscorem);


  if (userguessed2 === CgNo) {
    resultArea.innerText = CgNo;
    correctAns.innerText = "you have choosed the right one";
    correctAns.setAttribute("style", "visibility:visible;");
    document.querySelector("body").style.backgroundColor = "lightgreen";
    console.log(Highscorem);
    Highscore.innerText = Highscorem
    checkBtn.disabled = true
    if (Highscorem < scoreMark){
        
    Highscorem = scoreMark
    Highscore.innerText = Highscorem
    }

    



  } else if (userguessed2 > CgNo) {
    correctAns.innerText = "too high choose another one";
    scoreMark = scoreMark - 1;
    if (scoreMark >= 0) {
      score.innerText = scoreMark;
    }
  } else if (userguessed2 < CgNo) {

    correctAns.innerText = "too small choose another one";
    scoreMark = scoreMark - 1;
    if (scoreMark >= 0) {
      score.innerText = scoreMark;
    }
  } else {
    resultArea.innerText = "unkown number";
  }
}
function reverse(){
    scoreMark = 20
    score.innerText = scoreMark
    checkBtn.disabled = false
    correctAns.textContent = "Guess another number"
    resultArea.textContent = "?"
    //bg ccolor d
    document.querySelector("body").setAttribute("style","background")
    CgNo = Math.floor(Math.random() * 10) + 1
    
}

