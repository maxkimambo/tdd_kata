/**
 * Created by max on 18.03.16.
 */

var mocha = require('mocha');
var chai = require('chai');
var s = require('./../src/fizzbuzz');

var should = chai.should();
var expect = chai.expect();

var sut = new s();

describe('Given a number between 1 -100', function(){
    it('returns same number', function(){
       var result = sut.process(1);
        result.should.equal(1);
    });
});


describe('Given multiples of 3', function(){
    it('should return buzz instead', function(){
        var result = sut.process(9);
        result.should.equal('fizz');
    });
});

describe('Given multiples of 5', function(){
    it('should return buzz when given x', function(){
        var result = sut.process(25);
        result.should.equal('buzz');
    });
});


describe('Given multiples of both 3 and 5', function(){
    it('should return fizzbuzz when given 15', function(){
        var result = sut.process(15);
        result.should.equal('fizzbuzz');
    })
});

describe('System should  accept numbers up to 100, ', function(){
    it('should not throw an exception if input is less than 100', function(){

        should.not.Throw(function(){sut.process(99);}, RangeError, 'input out of bounds',  '');

    });
});

describe('System should not accept large numbers, ', function(){
    it('should throw an exception if input is larger than 100', function(){

        should.Throw(function(){sut.process(101);}, RangeError, 'input out of bounds',  '');

        sut.start();

    });
});



