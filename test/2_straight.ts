/// <reference path="../src/jasmine.d.ts" />
import A = require('src/2_straight/A');

describe("straight", ()=>{
    it('test', ()=>{
        var a: A = new A();
        a['b'] = {
            getName: ()=>'Test'
        };
        expect(a.greeting()).toBe('Hello, Test!');
    });
});
