const ballAnswers = ["Lukas Said", "10 Steps Forward 9 Steps Back", "Go Ask Someone Else", "Do You Need a Nap?", 
"Those Guy's!","Did You Try Turning Off and then On?","Its Only Right after the 3rd Try", "SG5?"];

function getRandomAnswer(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}
document.addEventListener("keyup", function(event) {
   
    if (event.key === "Enter") {
        displayRandomAnswer();
    }
});

function displayRandomAnswer() {
    const randomAnswer = getRandomAnswer(ballAnswers);
    
    const answerDisplay = document.getElementById("answerDisplay");
    answerDisplay.textContent = randomAnswer;

    answerDisplay.classList.add("fade-in");

    answerDisplay.style.visibility = "visible";
}

function resetDisplay() {
    const answerDisplay = document.getElementById("answerDisplay");

    answerDisplay.style.backgroundColor = "transparent";

    answerDisplay.textContent = "";

    answerDisplay.classList.remove("fade-in");

    answerDisplay.style.visibility = "hidden";
}