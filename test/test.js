
'use strict';

require('mocha');
const assert = require('chai').assert;
const expect = require('chai').expect;

const mid = require('../');

describe('basic functionality test', function(){

    it('verify inputs', function(){
		expect(function() { mid('fooobar') }).to.throw('expected the first argument to be an array. Please fix.');
    }); 

    it('length 3 array, default', function(){
    	expect(mid([1, 2, 3])).to.equal(2);
    });


    it('length 5 array, default', function(){
    	expect(mid([1, 2, 3, 4, 5])).to.equal(3);
    });  
 
});