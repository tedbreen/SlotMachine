function checkResult(result) {
    console.log("checkResult() invoked");
    console.log(result);
    if ( (result[0] !== result[1]) || (result[0] !== result[2]) ) {
        return "You lose";
    }
    return "You win";
}