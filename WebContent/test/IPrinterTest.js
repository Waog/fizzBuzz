describe("IPrinter", function() {
    it("should exist", function() {
        expect(IPrinter).toBeDefined();
    });

    it("can't be instanciated", function() {
        var constructInterface = function() {
            new IPrinter();
        };
        expect(constructInterface).toThrow();
    });

    it("should offer a print() method", function() {
        expect(IPrinter.prototype.print).toEqual(jasmine.any(Function));
    });

    it("'s print() method should not be an implementation", function() {
        var callMethod = function() {
            IPrinter.prototype.print();
        };
        expect(callMethod).toThrow();
    });
});