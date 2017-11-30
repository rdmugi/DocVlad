let idenArray = {}
let numbersArray = {}
let charsArray = {}

let Analizer = {
	set ( textArray ) {
		idenArray = {}
		numbersArray = {}
		charsArray = {}
		textArray.forEach( (el, indx) => {
			try {
				this.identifiers = el.match(/[a-z|A-Z|á|é|í|ó|ú|Á|É|Í|Ó|Ú]+/g) || undefined
				this.identifiers = this.identifiers.sort()
				this.identifiers.forEach( (elem, indx2) => {
					console.log( '-------------| ' + indx2 + ' |-------------')
					if ( idenArray[elem] === undefined ) {
						idenArray[elem] = {
							"elm": elem,
							"lne": indx + 1,
							"ttl": 1
						}
					} else {
						idenArray[elem] = {
							"elm": elem,
							"lne": idenArray[elem].lne + ", " + (indx + 1),
							"ttl": parseInt(idenArray[elem].ttl) + 1
						}
					}
				})

				this.numbers = el.match(/[0-9]+/g) || undefined
				this.numbers = this.numbers.sort()
				this.numbers.forEach( (elem, indx2) => {
					if ( numbersArray[elem] === undefined ) {
						numbersArray[elem] = {
							"elm": elem,
							"lne": indx + 1,
							"ttl": 1
						}
					} else {
						numbersArray[elem] = {
							"elm": elem,
							"lne": numbersArray[elem].lne + ", " + (indx + 1),
							"ttl": parseInt(numbersArray[elem].ttl) + 1
						}
					}
				})

				this.chars = el.match(/[(|)|{|}|,|\[|\]\-|;|\.]/g) || undefined
				this.chars.forEach( (elem, indx2) => {
					//console.log( charsArray )
					if ( charsArray[elem] === undefined ) {
						charsArray[elem] = {
							"elm": elem,
							"lne": indx + 1,
							"ttl": 1
						}
					} else {
						charsArray[elem] = {
							"elm": elem,
							"lne": charsArray[elem].lne + ", " + (indx + 1),
							"ttl": parseInt(charsArray[elem].ttl) + 1
						}
					}
				})


			} catch (err) {

			}
		})

		Results.pass( idenArray, numbersArray, charsArray )

	},
	domAndBinder () {
		this.$screen = document.querySelector('md-aside-table')
	}
}

Analizer.domAndBinder()
