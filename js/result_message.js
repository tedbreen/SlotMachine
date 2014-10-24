function resetGame() {
    console.log("resetGame() invoked");
    var resetDiv = document.getElementById('btn-reset-container');
    resetDiv.style.display = "none";
    var msg = document.getElementById('result-display');
    msg.innerHTML = "";
    // enable pull lever button
    var leverButton = document.getElementById('btn-pull');
    leverButton.removeAttribute('disabled');
    // change reels back
    if ((reel1.id = 'reel-1') && (reel2.id = 'reel-2') && (reel3.id = 'reel-3')) {
        if (reel1.style.webkitAnimationPlayState == "running") {
            reel1.style.webkitAnimationPlayState = "paused";
            reel2.style.webkitAnimationPlayState = "paused";
            reel3.style.webkitAnimationPlayState = "paused";    
        }
        prepareMachine( generateResult() );
    } else {
        console.log("well that didn't work");
    }
}

function resultMessage(message) {
    console.log("resultMessage() invoked");
    var msg = document.getElementById('result-display');
    msg.innerHTML = message;
    var resetDiv = document.getElementById('btn-reset-container');
    resetDiv.style.display = "block";
    var resetDivClone = resetDiv.cloneNode(true);
    resetDiv.parentNode.replaceChild(resetDivClone, resetDiv);
    var resetBtn = document.getElementById('btn-reset');
    console.log("event listener added: resetGame()");
    resetBtn.addEventListener('click', function() {
        resetGame();
    });
}