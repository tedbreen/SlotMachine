function generateResult() {
	console.log("generateResult() invoked");
    var result = [];
    for(var i = 0; i < 3; i++) {
        result.push(
            Math.floor( Math.random() * 2.999 )
        );
    }
    console.log(result);
    return result;
}