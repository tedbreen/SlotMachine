(function() {
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
        initialize: function() {
            console.log("initialize() invoked");
            var result;
            var message;
            game.pauseReels();
            game.leverBtn.removeAttribute('disabled');
            game.resetBtn.setAttribute("disabled", "");
            game.leverBtn.addEventListener('click', game.leverEvent);
            game.resetBtn.addEventListener('click', game.resetEvent);
        },
        resetEvent: function() {
            console.log("reset button was clicked");
            game.resetBtn.setAttribute("disabled", "");
            game.resetReels();
            game.msgDisplay.innerHTML = "";
            game.leverBtn.removeAttribute('disabled');
        },
        leverEvent: function() {
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
        },
        spinReels: function() {
            console.log("spinReels() invoked");
            game.resetIDS();
            game.reel1.style.webkitAnimationPlayState = "running";
            game.reel2.style.webkitAnimationPlayState = "running";
            game.reel3.style.webkitAnimationPlayState = "running";
            game.reel1.style.animationPlayState = "running";
            game.reel2.style.animationPlayState = "running";
            game.reel3.style.animationPlayState = "running";
        },
        pauseReels: function() {
            console.log("pauseReels() invoked");
            game.reel1.style.webkitAnimationPlayState = "paused";
            game.reel2.style.webkitAnimationPlayState = "paused";
            game.reel3.style.webkitAnimationPlayState = "paused";
            game.reel1.style.animationPlayState = "paused";
            game.reel2.style.animationPlayState = "paused";
            game.reel3.style.animationPlayState = "paused";
        },
        setReels: function(result) {
            console.log("setReels() invoked");
            game.reel1.style.top = game.slotSettings["left"][result[0]];
            game.reel2.style.top = game.slotSettings["middle"][result[1]];
            game.reel3.style.top = game.slotSettings["right"][result[2]];
        },
        resetReels: function() {
            console.log("resetReels() invoked");
            jQuery('div#reel-1').animate({ top: "-450px"});
            jQuery('div#reel-2').animate({ top: "-450px"});
            jQuery('div#reel-3').animate({
                top: "-450px"
            });
            setTimeout(game.resetAnimation, 0);
        },
        resetIDS: function() {
            console.log("resetIDS() invoked");
            game.reel1.id = 'reel-1';
            game.reel2.id = 'reel-2';
            game.reel3.id = 'reel-3';
        },
        resetAnimation: function() {
            console.log("resetAnimation() invoked");
            game.reel1.id = "reel-1-temp";
            game.reel2.id = "reel-2-temp";
            game.reel3.id = "reel-3-temp";
        },
        generateResult: function() {
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
        },
        checkResult: function(result) {
            console.log("checkResult() invoked");
            if (
                (result[0] === 0) &&
                (result[1] === 0) &&
                (result[2] === 0)
            ) {
                return "You win a cup of coffee!";
            } else if (
                (result[0] === 1) &&
                (result[1] === 1) &&
                (result[2] === 1)
            ) {
                return "You win a shot of espresso!";
            } else if (
                (result[0] === 2) &&
                (result[1] === 2) &&
                (result[2] === 2)
            ) {
                return "You win a cup of tea!";
            } else {
                return "You lose! No hot drinks for you!";
            }
        }
    }
    jQuery( document ).ready( function() {
        game.initialize();
        console.log("Coffee Slots is ready!");
    });
})();