
let error = '#FF5252', success  = '#4CAF50', warn = '#FFC107'

let Errors = {
	setStatus ( text, type = success) {

	},
	analyze ( textArray ) {
		textArray.forEach( el => {
			el = ' ' + el
			console.log(el)
			if ( el.match(/[^\w\dñÑáéíóúÁÉÍÓÚüÜºª\-_\/\s\\<>,;:.*\[\]\(\)+?¿!&%@=]/g) ) {
				console.log(el.match(/[^\w\dñÑáéíóúÁÉÍÓÚüÜºª\-_\/\s\\<>,;:.*\[\]\(\)+?¿!&%@=]/g))
			}
		})
	},
	domAndBinder () {
		this.$screen = document.querySelector('#screen')
	}
}

Errors.domAndBinder()
