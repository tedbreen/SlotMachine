var game = {
    leverBtn: document.getElementById('btn-pull'),
    resetBtn: document.getElementById('btn-reset'),
    reel1: document.getElementById('reel-1'),
    reel2: document.getElementById('reel-2'),
    reel3: document.getElementById('reel-3'),
    slotSettings: {
      left: ["-450px", "-330px", "-210px"],
      middle: ["-210px", "-450px", "-330px"],
      right: ["-330px", "-210px", "-450px"]
    },
    pauseReels: function() {
        console.log("pauseReels() invoked");
        this.reel1.style.webkitAnimationPlayState = "paused";
        this.reel2.style.webkitAnimationPlayState = "paused";
        this.reel3.style.webkitAnimationPlayState = "paused";
        this.reel1.style.animationPlayState = "paused";
        this.reel2.style.animationPlayState = "paused";
        this.reel3.style.animationPlayState = "paused";
    },
    checkResult: function(result) {
        console.log("checkResult() invoked");
        if ((result[0] === 0) && (result[1] === 0) && (result[2] === 0)) {
            return "You win a cup of coffee!";
        } else if ((result[0] === 1) && (result[1] === 1) && (result[2] === 1)) {
            return "You win a shot of espresso!";
        } else if ((result[0] === 2) && (result[1] === 2) && (result[2] === 2)) {
            return "You win a cup of tea!";
        } else {
            return "You lose! No hot drinks for you!";
        }
    }
};

game.initialize = function() {
    console.log("initialize() invoked");
    var result;
    game.pauseReels();
    game.resetBtn.setAttribute("disabled", "");
    game.leverBtn.addEventListener('click', function() {
        console.log("lever button was clicked");
        game.leverBtn.setAttribute("disabled", "");
        if (result = game.generateResult()) {
            var message = game.checkResult( result );
            console.log(message);
        }
        
        // create a display message for result
        // spin reels
        // stop reels on result
        game.resetBtn.removeAttribute('disabled');
    });
    game.resetBtn.addEventListener('click', function() {
        console.log("reset button was clicked");
        game.resetBtn.setAttribute("disabled", "");
        // move reels back into position
        // clear display
        // start reel animations again, then pause them
        game.leverBtn.removeAttribute('disabled');
    });
};

game.generateResult = function() {
    console.log("generateResult() invoked");
    var result = [];
    var winOrLose = Math.round(Math.random());
    if (winOrLose === 0) {
        for(var i = 0; i < 3; i++) {
            result.push(
                Math.floor( Math.random() * 2.999 )
            );
        }
        return result;
    } else {
        var selection = Math.floor( Math.random() * 2.999 );
        return [selection, selection, selection];
    }
}

