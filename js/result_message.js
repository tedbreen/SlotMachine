function makeResetButton() {
    // create div
    var newDiv = document.createElement("div");
    newDiv.className = "button";
    newDiv.id = "btn-reset-container";
    // create button
    var newBtn = document.createElement("button");
    newBtn.id = "btn-reset";
    var btnContent = document.createTextNode("Play again?");
    newBtn.appendChild(btnContent);
    // add button to div
    newDiv.appendChild(newBtn);
    // add to div and button to page
    var firstScript = document.getElementById("first-script");
    document.body.insertBefore(newDiv, firstScript);
    // add eventlistener to button
    // on click removes button and resets slot machine
}
    

function resultMessage(message) {
    var msg = document.getElementById('result');
    msg.innerHTML = message;
    makeResetButton();
}