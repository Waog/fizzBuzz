define(function(require) {

	console.log('fprinter');

    var IPrinter = require('./IPrinter');

    /**
     * Prints fizzes.
     * @constructor
     * @augments IPrinter
     */
    function FizzPrinter() {
    	console.log('a new FizzPrinter was born');
    }

    FizzPrinter.prototype = Object.create(IPrinter.prototype);
    FizzPrinter.prototype.constructor = FizzPrinter;

    return FizzPrinter;
});