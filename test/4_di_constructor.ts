/// <reference path="../src/jasmine.d.ts" />
import A = require('src/4_di_constructor/A');
import B = require('src/4_di_constructor/B');

class MockB extends B {
    public getName() {
        return 'Test';
    }
}

describe("injecting in constructor", ()=>{
    it('test', ()=>{
        var a: A = new A(new MockB());
        expect(a.greeting()).toBe('Hello, Test!');
    });
});


