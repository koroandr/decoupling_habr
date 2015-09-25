/// <reference path="../src/jasmine.d.ts" />
import A = require('src/6_di_constructor_decoupling/A');
import b_interfaces = require('src/6_di_constructor_decoupling/IB');
import IBForA = b_interfaces.IBForA;

class MockB implements IBForA {
    getName() {
        return 'Test';
    }
}

describe("interface decoupling", ()=>{
    it('test', ()=>{
        var a: A = new A(new MockB());
        expect(a.greeting()).toBe('Hello, Test!');
    });
});


