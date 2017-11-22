let Analizer = {
	set ( textArray ) {

		this.$screen.innerHTML = `
			<tt>
				<t>el</t>
				<t>Token No.</t>
				<t>Línea</t>
				<t>Total</t>
			</tt>
		`
		textArray.forEach( (el, indx) => {
			console.log( el.math(/[A-Z|a-z|á|é|í|ó|ú|Á|É|Í|Ó|Ú]+/g) )
			console.log( el.math(/[0-9]+/g) )
			console.log( el.math(/[(|)|{|}|,|\[|\]\-|;|\.]+/g) )
			/*this.$screen.innerHTML += `
				<tt>
					<t>${indx}</t>
					<t>${el}</t>
					<t>Línea</t>
					<t>Total</t>
				</tt>
			`*/
		})

	},
	domAndBinder () {
		this.$screen = document.querySelector('md-aside-table')
	}
}

Analizer.domAndBinder()
