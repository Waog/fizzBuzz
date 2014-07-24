function IPrinter() {
    throw 'Interfaces shouldn`t be instanciated';
}

IPrinter.prototype.print = function(number) {
    throw 'This function must be implemented before calling';
};