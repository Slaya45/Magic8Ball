const ballAnswers = ["Lukas Said", "Try Again", "Your Dumb", "HA"];

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