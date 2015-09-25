/// <reference path="../src/jasmine.d.ts" />
import A = require('src/3_extend/A');

class MockA extends A {
    constructor() {
        super();
        this.b = {
            getName: ()=>'Test'
        };
    }
}

describe("extend", ()=>{
    it('test', ()=>{
        var a: A = new MockA();
        expect(a.greeting()).toBe('Hello, Test!');
    });
});
