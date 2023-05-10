const assert = require('assert');

const { display, add} = require('../src/app.js');

// test # 1: pass
describe("the hello function", function(){
    it("should say 'hello'", function(){
        const result = display();
        assert.equal(result, 'hello');
    });
    });


// test # 1: fail
describe("the hello function", function(){
    it("should say 'hello'", function(){
        const result = display();
        assert.equal(result, 'helllo');
    });
    });


// test # 2: pass
describe("the add function", function(){
    it("should add 2 numbers correctly", function(){
        const result = add(1,5);
        assert.equal(result, 6);
    });
    });

// test # 2: fail
describe("the add function", function(){
    it("should add 2 numbers correctly", function(){
        const result = add(1,5);
        assert.equal(result, 7);
    });
    });

