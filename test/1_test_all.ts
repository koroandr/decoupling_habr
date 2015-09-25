/// <reference path="../src/jasmine.d.ts" />
import A = require('src/1_test_all/A');

describe("test all", ()=>{
    it('test', ()=>{
        var a: A = new A();
        expect(a.greeting()).toBe('Hello, Habr!');
    });
});
