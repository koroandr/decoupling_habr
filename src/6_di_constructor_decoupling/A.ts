import b_interfaces = require('./IB');
import IBForA = b_interfaces.IBForA;

class A {
    constructor(private b: IBForA) {

    }

    greeting(): string {
        return 'Hello, ' + this.b.getName() + '!';
    }
}


export = A;
