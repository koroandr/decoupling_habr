import IB = require('./IB');

class A {
    constructor(private b: IB) {

    }

    greeting(): string {
        return 'Hello, ' + this.b.getName() + '!';
    }
}


export = A;
