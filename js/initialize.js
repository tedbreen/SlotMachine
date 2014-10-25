(function() {
    console.log("Initialzing important variables for game...");
    reel1 = document.getElementById('reel-1');
    reel2 = document.getElementById('reel-2');
    reel3 = document.getElementById('reel-3');
    reel1.style.webkitAnimationPlayState = "paused";
    reel2.style.webkitAnimationPlayState = "paused";
    reel3.style.webkitAnimationPlayState = "paused";
    slotSettings = {
        left: ["-300px", "-220px", "-140px"],
        middle: ["-140px", "-300px", "-220px"],
        right: ["-220px", "-140px", "-300px"]
    }
})();