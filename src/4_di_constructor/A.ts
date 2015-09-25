import B = require('./B');

class A {
    constructor(private b: B) {

    }

    greeting(): string {
        return 'Hello, ' + this.b.getName() + '!';
    }
}


export = A;
