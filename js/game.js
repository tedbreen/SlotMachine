var game = {
    leverBtn: document.getElementById('btn-pull'),
    resetBtn: document.getElementById('btn-reset'),
    reel1: document.getElementById('reel-1'),
    reel2: document.getElementById('reel-2'),
    reel3: document.getElementById('reel-3'),
    msgDisplay: document.getElementById('result-display'),
    slotSettings: {
      left: ["-450px", "-330px", "-210px"],
      middle: ["-210px", "-450px", "-330px"],
      right: ["-330px", "-210px", "-450px"]
    },
    spinReels: function() {
        console.log("spinReels() invoked");
        this.reel1.style.webkitAnimationPlayState = "running";
        this.reel2.style.webkitAnimationPlayState = "running";
        this.reel3.style.webkitAnimationPlayState = "running";
        this.reel1.style.animationPlayState = "running";
        this.reel2.style.animationPlayState = "running";
        this.reel3.style.animationPlayState = "running";
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
    setReels: function(result) {
        console.log("setReels() invoked");
        this.reel1.style.top = this.slotSettings["left"][result[0]];
        this.reel2.style.top = this.slotSettings["middle"][result[1]];
        this.reel3.style.top = this.slotSettings["right"][result[2]];
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
    var message;
    game.pauseReels();
    game.resetBtn.setAttribute("disabled", "");
    game.leverBtn.addEventListener('click', function() {
        console.log("lever button was clicked");
        game.leverBtn.setAttribute("disabled", "");
        game.spinReels();
        if (result = game.generateResult()) {
            game.setReels(result);
            message = game.checkResult(result);
        }
        setTimeout( function() {
            game.msgDisplay.innerHTML = message;
            game.resetBtn.removeAttribute('disabled');
        }, 5000);
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

// game.resultMessage = function(message) {
//     console.log("resultMessage() invoked");
//     game.msgDisplay.innerHTML = message;
// }

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

