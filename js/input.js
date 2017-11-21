
// luego comento :v
let Input = {
	attach ( text ) {
		text = ' ' + text;
		Errors.analyze(text.split('\n'))
	},
	domAndBinder () {
		this.$input = document.getElementById('textarea')
		this.$input.addEventListener('input', () => {
			this.attach( this.$input.value )
		})
	}
}

Input.domAndBinder()
