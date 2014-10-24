function pullLever(reel1, reel2, reel3, result, thisSpin, button) {
    console.log("pullLever() invoked");
    reel1.style.webkitAnimationPlayState = "running";
    reel2.style.webkitAnimationPlayState = "running";
    reel3.style.webkitAnimationPlayState = "running";

    reel1.style.top = thisSpin[0];
    reel2.style.top = thisSpin[1];
    reel3.style.top = thisSpin[2];

    button.setAttribute("disabled", "");
    window.setTimeout( function () {
        reel1.id = 'reel-1-temp';
        reel2.id = 'reel-2-temp';
        reel3.id = 'reel-3-temp';
        resultMessage( checkResult(result) );
    }, 8500 );
}

function prepareMachine(result) {
    console.log("prepareMachine() invoked");

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

    var div = document.getElementById('btn-pull-container');
    var divClone = div.cloneNode(true);
    div.parentNode.replaceChild(divClone, div);

    var btn = document.getElementById("btn-pull");
    console.log("event listener added: pullLever()");
    btn.addEventListener("click", function() {
        pullLever(reel1, reel2, reel3, result, thisSpin, btn);
    });
}