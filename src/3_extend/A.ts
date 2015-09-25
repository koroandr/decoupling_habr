import B = require('./B');

class A {
    greeting(): string {
        return 'Hello, ' + this.b.getName() + '!';
    }
    protected b: B = new B();
}

export = A;
