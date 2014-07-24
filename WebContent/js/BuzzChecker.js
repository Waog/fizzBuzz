function BuzzChecker() {
};

BuzzChecker.prototype.isBuzz = function(number) {
    return number > 0 && number % 5 == 0;
};