require(["js/FizzPrinter"], function() {
	console.log('main');

	var FizzPrinter = require('js/FizzPrinter');

	/**
	 * Object to print fizzes.
	 * @type {FizzPrinter}
	 */
	var aFizzPrinter = new FizzPrinter();

	aFizzPrinter.print();
});