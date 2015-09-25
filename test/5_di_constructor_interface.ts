/// <reference path="../src/jasmine.d.ts" />
import A = require('src/5_di_constructor_interface/A');
import IB = require('src/5_di_constructor_interface/IB');

class MockB implements IB {
    getName() {
        return 'Test';
    }
    getLastName():string {
        return undefined;
    }
    getBirthDate():Date {
        return undefined;
    }
}

describe("injecting interface", ()=>{
    it('test', ()=>{
        var a: A = new A(new MockB());
        expect(a.greeting()).toBe('Hello, Test!');
    });
});


