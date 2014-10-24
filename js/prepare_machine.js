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
        reel1.style.webkitAnimationPlayState = "running";
        reel2.style.webkitAnimationPlayState = "running";
        reel3.style.webkitAnimationPlayState = "running";

        reel1.style.top = thisSpin[0];
        reel2.style.top = thisSpin[1];
        reel3.style.top = thisSpin[2];

        btn.setAttribute("disabled", "");
        window.setTimeout( function () {
            resultMessage( checkResult(result) );
        }, 8500 );
        
    });
}