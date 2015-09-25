import B = require('./B');

class A {
    greeting(): string {
        return 'Hello, ' + this.b.getName() + '!';
    }
    private b: B = new B();
}

export = A;
