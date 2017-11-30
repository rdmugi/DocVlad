function valueOf (a) { return document.getElementById(a).value }
let error = '#FF5252', success  = '#000', warn = '#FFC107'

function $ (a) { return document.body.querySelector( a ) }
function $$ (a) { return document.body.querySelectorAll( a ) }

let $screen = $('md-aside-table')

function print (succes, type) {
	$screen.innerHTML = succes
	$screen.style.color = type
}
