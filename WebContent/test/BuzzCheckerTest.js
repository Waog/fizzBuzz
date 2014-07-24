describe("BuzzChecker", function() {
    it("should exist", function() {
        expect(BuzzChecker).toBeDefined();
    });
    
    it("can be instanciated", function() {
        var buzzChecker = new BuzzChecker();
        expect(buzzChecker).toEqual(jasmine.any(BuzzChecker));
    });

    it("should offer an isBuzz() method", function() {
        var buzzChecker = new BuzzChecker();
        expect(buzzChecker.isBuzz).toEqual(jasmine.any(Function));
    });
    
    it(".isBuzz() should return false on 0", function() {
        var fc = new BuzzChecker();
        expect(fc.isBuzz(0)).toBe(false);
    });
    
    it(".isBuzz() should return true on 5", function() {
        var fc = new BuzzChecker();
        expect(fc.isBuzz(5)).toBe(true);
    });
    
    it(".isBuzz() should return false on 6", function() {
        var fc = new BuzzChecker();
        expect(fc.isBuzz(6)).toBe(false);
    });
    
    it(".isBuzz() should return true on 10", function() {
        var fc = new BuzzChecker();
        expect(fc.isBuzz(10)).toBe(true);
    });
});