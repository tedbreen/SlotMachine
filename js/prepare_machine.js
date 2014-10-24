function pullLever(reel1, reel2, reel3, spinResults, button) {
    reel1.style.webkitAnimationPlayState = "running";
    reel2.style.webkitAnimationPlayState = "running";
    reel3.style.webkitAnimationPlayState = "running";

    reel1.style.top = spinResults[0];
    reel2.style.top = spinResults[1];
    reel3.style.top = spinResults[2];

    button.setAttribute("disabled", "");
    window.setTimeout( function () {
        reel1.id = 'reel-1-temp';
        reel2.id = 'reel-2-temp';
        reel3.id = 'reel-3-temp';
        resultMessage( checkResult(result) );
    }, 8500 );
}

function prepareMachine(result) {
    var reel1 = document.getElementById('reel-1');
    var reel2 = document.getElementById('reel-2');
    var reel3 = document.getElementById('reel-3');

    var slotSettings = {
        left: ["-300px", "-220px", "-140px"],
        middle: ["-140px", "-300px", "-220px"],
        right: ["-220px", "-140px", "-300px"]
    }

    var thisSpin = [
        slotSettings["left"][result[0]],
        slotSettings["middle"][result[1]],
        slotSettings["right"][result[2]]
    ]

    reel1.style.webkitAnimationPlayState = "paused";
    reel2.style.webkitAnimationPlayState = "paused";
    reel3.style.webkitAnimationPlayState = "paused";

    var btn = document.getElementById("btn-pull");

    btn.addEventListener("click", function() {
        pullLever(reel1, reel2, reel3, thisSpin, btn);
    });
}