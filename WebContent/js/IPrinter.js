define(function() {

	console.log('iprinter');

	/**
	 * Something that can print.
	 * @abstact
	 * @constructor
	 */
	function IPrinter() {
		throw 'Interfaces shouldn`t be instanciated';
	}

	/**
	 * Print a number
	 * @param  {number} number the number to print
	 */
	IPrinter.prototype.print = function(number) {
		throw 'This function must be implemented before calling';
	};

	return IPrinter;
});