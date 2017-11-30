
let Errors = {
	analyze ( textArray ) {
		if ( textArray.match(/[@|·|à|è|ì|ò|ù|À|È|Ì|Ò|Ù]/g) ) {
			print('<b>Hay algo mal con el texto!</b>', error)
		} else {
			textArray = textArray.split('\n')
			Analizer.set(textArray)
		}
	}
}
