function FizzChecker() {
};

FizzChecker.prototype.isFizz = function(number) {
    return number > 0 && (number % 3) == 0;
};