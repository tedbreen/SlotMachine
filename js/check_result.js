function checkResult(result) {
	if (result[0] !== result[1]) {
		return "You lose";
	}
	if (result[1] !== result[2]) {
		return "You lose";
	}
	return "You win";
}