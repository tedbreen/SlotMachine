function generateResult() {
    console.log("CoffeeSlots is ready!");
    console.log("1) generateResult()");
    var result = [];
    for(var i = 0; i < 3; i++) {
        result.push(
            Math.floor( Math.random() * 2.999 )
        );
    }
    return result;
}

function prepareMachine(result) {
    console.log("2) prepareMachine()");
    var resetBtn = document.getElementById('btn-reset');
    resetBtn.setAttribute("disabled", "");
    var div = document.getElementById('btn-pull-container');
    var divClone = div.cloneNode(true);
    div.parentNode.replaceChild(divClone, div);

    var btn = document.getElementById("btn-pull");
    console.log("event listener added: pullLever()");
    btn.addEventListener("click", function() {
        pullLever(reel1, reel2, reel3, btn, result);
    });
}

function pullLever(reel1, reel2, reel3, button, result) {
    console.log("3) pullLever()");
    reel1.style.webkitAnimationPlayState = "running";
    reel2.style.webkitAnimationPlayState = "running";
    reel3.style.webkitAnimationPlayState = "running";

    reel1.style.top = slotSettings["left"][result[0]];
    reel2.style.top = slotSettings["middle"][result[1]];
    reel3.style.top = slotSettings["right"][result[2]];

    button.setAttribute("disabled", "");
    window.setTimeout( function () {
        reel1.id = 'reel-1-temp';
        reel2.id = 'reel-2-temp';
        reel3.id = 'reel-3-temp';
        resultMessage( checkResult(result) );
    }, 8500 );
}

function checkResult(result) {
    console.log("4) checkResult()");
    if ( (result[0] !== result[1]) || (result[0] !== result[2]) ) {
        return "You lose";
    }
    return "You win";
}

function resultMessage(message) {
    console.log("5) resultMessage()");
    var msg = document.getElementById('result-display');
    msg.innerHTML = message;
    var resetDiv = document.getElementById('btn-reset-container');
    // resetDiv.style.display = "block";
    var resetDivClone = resetDiv.cloneNode(true);
    resetDiv.parentNode.replaceChild(resetDivClone, resetDiv);
    var resetBtn = document.getElementById('btn-reset');
    resetBtn.removeAttribute('disabled');
    console.log("event listener added: resetGame()");
    resetBtn.addEventListener('click', function() {
        resetGame();
    });
}

function resetGame() {
    console.log("6) resetGame()");
    // var resetDiv = document.getElementById('btn-reset-container');
    // resetDiv.style.display = "none";
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