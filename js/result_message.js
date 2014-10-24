function resetGame() {
    var resetDiv = document.getElementById('btn-reset-container');
    resetDiv.style.display = "none";
    var msg = document.getElementById('result');
    msg.innerHTML = "";
    // enable pull lever button
    var leverButton = document.getElementById('btn-pull');
    leverButton.removeAttribute('disabled');

    var reel1 = document.getElementById('reel-1-temp');
    var reel2 = document.getElementById('reel-2-temp');
    var reel3 = document.getElementById('reel-3-temp');

    result = generateResult();  // result is a global variable
    // change reels back
    reel1.id = 'reel-1';
    reel2.id = 'reel-2';
    reel3.id = 'reel-3';
    if ((reel1.id = 'reel-1') && (reel2.id = 'reel-2') && (reel3.id = 'reel-3')) {
        prepareMachine(result);
    } else {
        console.log("FAIL");
    }
}

function resultMessage(message) {
    var msg = document.getElementById('result');
    msg.innerHTML = message;
    var resetDiv = document.getElementById('btn-reset-container');
    resetDiv.style.display = "block";
    // add event listener to play again button
}