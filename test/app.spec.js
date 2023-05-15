const assert = require('assert');
const expect = require('chai').expect;

const { hello, add} = require('../src/app.js');

// test # 1
describe("the hello function", function(){
    it("should say 'hello'", function(){
        const result = hello();
        assert.equal(result, 'hello');
    });
    });


// test # 2
describe("the add function", function(){
    it("should add 2 numbers correctly", function(){
        const result = add(1,5);
        assert.equal(result, 6);
    });
    });


// test 1 using Chai's expect assertion
describe("the hello function", function(){
    it("should say 'hello'", function(){
        const result = hello();
        expect(result).to.be.eq('hello');
    });
    });

// test 2 using Chai's expect assertion
describe("the add function", function(){
    it("should add 2 numbers correctly", function(){
        const result = add(1,5);
        expect(result).to.be.eq(6);
    });
    });



