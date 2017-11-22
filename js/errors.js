
let error = '#FF5252', success  = '#4CAF50', warn = '#FFC107'

let Errors = {
	setStatus ( text, type = success) {

	},
	analyze ( textArray ) {
		if ( textArray.match(/[^\w\dñÑüÜºª\-_\/\s\\<>,;:.*\[\]\(\)+?¿!&%@=]/g) ) {
			//console.log(textArray.match(/[^\w\dñÑáéíóúÁÉÍÓÚüÜºª\-_\/\s\\<>,;:.*\[\]\(\)+?¿!&%@=]/g))
			this.$screen.textContent = 'Hay un catacter extraño'
		} else {
			textArray = textArray.split('\n')
		}
	},
	domAndBinder () {
		this.$screen = document.querySelector('md-aside-table')
	}
}

Errors.domAndBinder()
