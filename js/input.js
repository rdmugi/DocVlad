
let Input = {
	attach ( text ) {
		text = ' ' + text;
		Errors.analyze(text)
	},
	domAndBinder () {
		this.$input = $('textarea')
		this.$input.addEventListener('input', () => {
			this.attach( this.$input.value )
		})
	}
}

Input.domAndBinder()
