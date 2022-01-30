
'use strict';

require('mocha');
const assert = require('chai').assert;
const expect = require('chai').expect;

const mid = require('../');

describe('basic functionality test', function(){

    it('verify inputs', function(){
        // note: using function(){ }
        // cf: https://stackoverflow.com/questions/40529776/chai-expect-function-to-throw-error
		expect(function() { mid('fooobar') }).to.throw('Expected the first argument to be an array. Please fix.');
        expect(function() { mid([1, 2], -42) }).to.throw('Expected the argument "n" to be a positive integer. Please fix.');
        expect(function() { mid([1, 2], 0) }).to.throw('Expected the argument "n" to be a positive integer. Please fix.');
        expect(function() { mid([1, 2], 3.14) }).to.throw('Expected the argument "n" to be a positive integer. Please fix.');
        expect(function() { mid([1, 2], 2, 42) }).to.throw('Expected the argument "position" to be a string. Please fix.');        
        expect(function() { mid([1, 2], 2, 'foobar') }).to.throw('Expected the argument "position" to be either "left", "right", or "center". Please fix.');     
        expect(function() { mid([1, 2], 3) }).to.throw('Expected the argument "n" to be less than the length of the array. Please fix.'); 
    }); 

    it('length 3 array, default', function(){
    	expect(mid([1, 2, 3])).to.have.members([2]);
    });


    it('odd length 5 array, default', function(){
        expect(mid([1, 2, 3, 4, 5])).to.have.members([3]);
        expect(mid([1, 2, 3, 4, 5], 1, 'left')).to.have.members([3]);
        expect(mid([1, 2, 3, 4, 5], 1, 'right')).to.have.members([3]);       
    });  
    it('even length 6 array, default', function(){
        expect(mid([1, 2, 3, 4, 5, 6])).to.have.members([3, 4]);
        expect(mid([1, 2, 3, 4, 5, 6], 1, 'left')).to.have.members([3]);
        expect(mid([1, 2, 3, 4, 5, 6], 1, 'right')).to.have.members([4]);       
    }); 

    let seven = [1, 2, 3, 4, 5, 6, 7];
    it('check n > 1, array length 7', function(){
        expect(mid(seven)).to.have.members([4])
        expect(mid(seven, 2)).to.have.members([3, 4, 5]);  
        expect(mid(seven, 3)).to.have.members([3, 4, 5]);  
        expect(mid(seven, 3, 'left')).to.have.members([1, 2, 3, 4]);  
        expect(mid(seven, 3, 'right')).to.have.members([4, 5, 6, 7]);         
    });    

    let six = [1, 2, 3, 4, 5, 6];
    it('check n > 1, array length 6', function(){
        expect(mid(six)).to.have.members([3, 4])
        expect(mid(six, 2)).to.have.members([3, 4, 5]);  
        expect(mid(six, 3)).to.have.members([3, 4, 5]);  
        expect(mid(six, 3, 'left')).to.have.members([1, 2, 3]);  
        expect(mid(six, 3, 'right')).to.have.members([4, 5, 6]);         
    });    

 
});