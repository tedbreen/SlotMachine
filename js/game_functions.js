function pullLever(reel1, reel2, reel3, slotSettings, button) {
    reel1.style.webkitAnimationPlayState = "running";
    reel2.style.webkitAnimationPlayState = "running";
    reel3.style.webkitAnimationPlayState = "running";
    reel1.style.animationPlayState = "running";
    reel2.style.animationPlayState = "running";
    reel3.style.animationPlayState = "running";
    reel1.style.top = slotSettings["left"][result[0]];
    reel2.style.top = slotSettings["middle"][result[1]];
    reel3.style.top = slotSettings["right"][result[2]];
    button.setAttribute("disabled", "");
    // window.setTimeout( function () {
    //     reel1.id = 'reel-1-temp';
    //     reel2.id = 'reel-2-temp';
    //     reel3.id = 'reel-3-temp';
    //     // resultMessage( checkResult(result) );
    //     resultMessage(
    //         checkResult(generateResult()),
    //         // displayNode,
    //         // resetBtn
    //     );
        
    // }, 5000 );
}

function resetGame() {
    var msg = document.getElementById('result-display');
    msg.innerHTML = "";
    // enable pull lever button
    var leverButton = document.getElementById('btn-pull');
    leverButton.removeAttribute('disabled');
    // reset the animations on the reels
    if ((reel1.id = 'reel-1') && (reel2.id = 'reel-2') && (reel3.id = 'reel-3')) {
        if (reel1.style.webkitAnimationPlayState === "running") {
            reel1.style.webkitAnimationPlayState = "paused";
            reel2.style.webkitAnimationPlayState = "paused";
            reel3.style.webkitAnimationPlayState = "paused";
        }
        if (reel1.style.animationPlayState === "running") {
            reel1.style.animationPlayState = "paused";
            reel2.style.animationPlayState = "paused";
            reel3.style.animationPlayState = "paused";
        }
        prepareMachine( generateResult() );
    } else {
        console.log("well, that didn't work");
    }
}