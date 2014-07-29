describe("FizzPrinter", function() {
    it("should exist", function() {
        expect(FizzPrinter).toBeDefined();
    });
    
    it("can be instanciated", function() {
        var fizzPrinter = new FizzPrinter();
        expect(fizzPrinter).toEqual(jasmine.any(FizzPrinter));
    });
    
    it("should extend IPrinter", function() {
        var fizzPrinter = new FizzPrinter();
        expect(fizzPrinter).toEqual(jasmine.any(IPrinter));
    });
});