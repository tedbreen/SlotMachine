(function() {
    console.log("Initialzing important variables for game...");
    resetBtn = document.getElementById('btn-reset');
    reel1 = document.getElementById('reel-1');
    reel2 = document.getElementById('reel-2');
    reel3 = document.getElementById('reel-3');
    reel1.style.webkitAnimationPlayState = "paused";
    reel2.style.webkitAnimationPlayState = "paused";
    reel3.style.webkitAnimationPlayState = "paused";
    slotSettings = {
        left: ["-450px", "-330px", "-210px"],
        middle: ["-210px", "-450px", "-330px"],
        right: ["-330px", "-210px", "-450px"]
    }
})();