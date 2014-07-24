describe("FizzChecker", function() {
    it("should exist", function() {
        expect(FizzChecker).toBeDefined();
    });
    
    it("can be instanciated", function() {
        var fizzChecker = new FizzChecker();
        expect(fizzChecker).toEqual(jasmine.any(FizzChecker));
    });

    it("should offer an isFizz() method", function() {
        var fizzChecker = new FizzChecker();
        expect(fizzChecker.isFizz).toEqual(jasmine.any(Function));
    });
    
    it(".isFizz() should return false on 0", function() {
        var fc = new FizzChecker();
        expect(fc.isFizz(0)).toBe(false);
    });
    
    it(".isFizz() should return true on 3", function() {
        var fc = new FizzChecker();
        expect(fc.isFizz(3)).toBe(true);
    });
    
    it(".isFizz() should return false on 4", function() {
        var fc = new FizzChecker();
        expect(fc.isFizz(4)).toBe(false);
    });
    
    it(".isFizz() should return true on 6", function() {
        var fc = new FizzChecker();
        expect(fc.isFizz(6)).toBe(true);
    });
    
});