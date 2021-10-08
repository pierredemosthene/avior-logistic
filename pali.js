
function checkPalindrome(inputString){

   var cstr = inputString.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
	var conta = 0;

	if(cstr==="") {
		console.log("Não encontrado!");
		return false;
	}

	if ((cstr.length) % 2 === 0) {
		conta = (cstr.length) / 2;
	} else {

		if (cstr.length === 1) {
			console.log("a entrada é um palindromo.");
			return true;
		} else {

			conta = (cstr.length - 1) / 2;
		}
	}

	for (var x = 0; x < conta; x++) {

		if (cstr[x] != cstr.slice(-1-x)[0]) {
			console.log("não é um palindromo.");
			return false;
		}
	}
	console.log("é um palindromo.");
	return true;
}
checkPalindrome('aabaa');
