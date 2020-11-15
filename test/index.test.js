// Default node assertion library
// const assert = require('assert');

// Chai assertion library
const assert = require('chai').assert;

const app = require('../index');
const sayHello = require('../index').sayHello;
const addNumbers = require('../index').addNumbers;



describe('App', function (){
    it('sayHello should return hello', function (){
        const result = sayHello();
        // assert.equal(sayHello(), 'hello')
        assert.equal(result, 'hello')
    });

    it('sayHello should return type String', function () {
        const result = sayHello();
        assert.typeOf(result, 'string');
    });

    it('addNumbers should be above 5', function() {
        const result = addNumbers(5, 5);
        assert.isAbove(result, 5);
    })

    it('addNumbers should return type number', function() {
        const result = addNumbers(5,5);
        assert.typeOf(result, 'number');
    })
})