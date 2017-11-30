
let Results = {
	pass (_identifiers, _numbers, _chars) {
		let table = `<tt><t>elem</t><t>Token No.</t><t>Línea</t><t>Total</t></tt>`
		table += `<tt class="section"><t>Identificadores</t></tt>`
		let c = 0
		for ( let first in _identifiers ) {
			c += 1
			console.log('---')
			table += '<tt>'
			table += '<t>' + c + '</t>'
			for (let secnd in _identifiers[first]) {
				table += `<t>${_identifiers[first][secnd]}</t>`
			}
			table += '</tt>'
		}

		table += `<tt class="section"><t>Numeros</t></tt>`

		c = 0
		for ( let first in _numbers ) {
			c += 1
			console.log('---')
			table += '<tt>'
			table += '<t>' + c + '</t>'
			for (let secnd in _numbers[first]) {
				table += `<t>${_numbers[first][secnd]}</t>`
			}
			table += '</tt>'
		}

		table += `<tt class="section"><t>Otros caracteres</t></tt>`

		c = 0
		for ( let first in _chars ) {
			c += 1
			console.log('---')
			table += '<tt>'
			table += '<t>' + c + '</t>'
			for (let secnd in _chars[first]) {
				table += `<t>${_chars[first][secnd]}</t>`
			}
			table += '</tt>'
		}

		console.log(table)
		print(table, success)
	}
}
