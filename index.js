
// inspired by https://github.com/jonschlinkert/array-first

// Get middle element in an n-element array (either left, right, or both elements if n is odd)
module.exports = function mid(arr, n = 1, position = 'center') {

	// basic checks of inputs
	if (!Array.isArray(arr)) {
		throw new Error('expected the first argument to be an array. Please fix.');
	}

	if (!(!isNaN(+n) && isFinite(n))) {
		throw new Error('expected the argument "n" to be a number. Please fix.');
	}

	if (!Number.isInteger(n)) {
		throw new Error('expected the argument "n" to be a positive integer. Please fix.');		
	} else if (n < 1) {
		throw new Error('expected the argument "n" to be a positive integer. Please fix.');			
	}

	if (!(typeof position === 'string' || position instanceof String)) {
		throw new Error('expected the argument "position" to be a string')
	}

	if (!(position === 'left' || position === 'right' || position === 'center')) {
		throw new Error('expected the argument "position" to be either "left", "right", or "center". Please fix.')
	}

	const len = arr.length;
	if (len === 0) {
		return null;
	} 

	// check for array length vs. specified n
	if (len === n) {
		return arr;
	} else if (len < n) {
		throw new Error('expected the argument "n" to be less than the length of the array. Please fix.')		
	}

	if (len === 1 || len === 2) {
		return arr;
	}

	function checkOdd(num) {
		if (num % 2 == 1) {
			return true;
		} else {
			return false;
		}
	}

	function ifNegativeMakeZero(num) {
		if (num < 0) {
			num = 0;
		}
		return num;
	}


	const middlePosition = Math.floor(len/2);
	// if n is 1 and the array length is odd
	if (n === 1) {
		if (checkOdd(len)){
			return arr[middlePosition];
		}
	} else {
		// length is even 
		if (position === 'center') {
			return arr.slice(middlePosition-1, middlePosition+1);
		} else if (position === 'left') {
			return arr.slice(middlePosition-1, middlePosition);
		} else if (position === 'right') {
			return arr.slice(middlePosition, middlePosition+1);
		}
	}

    // n > 1
	if (position === 'center') {
		if (len === 3) {
			//throw new Error('length of the array is 3, but n > 1 and position is "center". Logically cannot return 2 elements in this case. Please fix by specifying either "left" or "right".');	
			return arr;
		} else {
			let padding = Math.floor(n/2);
			// NOTE: we will always return an odd number of elements here
			// if n is even, the user needs to specify left or right...
			// Note in README for users
			if (checkOdd(len)){
				return arr.slice(middlePosition-padding, middlePosition+padding+1); 
			} else {
				return arr.slice(middlePosition-padding, middlePosition+padding); 
			}
		}
	} else if (position === 'left') {
		let leftmostPosition = middlePosition - n;
		leftmostPosition = ifNegativeMakeZero(leftmostPosition);
		return arr.slice(leftmostPosition, middlePosition + 1);
	} else if (position === 'right') {
		let rightmostPosition = middlePosition + n; 
		// note: doesn't matter if rightmostPosition > len, .slice() still works as expected
		return arr.slice(middlePosition, rightmostPosition);
	}
};


	/*} else {
		// length is even
		if (position === 'center') {
			let padding = Math.floor(n/2);
			return arr.slice(middlePosition-padding, middlePosition+padding); 
		} else if (position === 'left') {
			let leftmostPosition = middlePosition - n;
			leftmostPosition = ifNegativeMakeZero(leftmostPosition);
			return arr.slice(leftmostPosition, middlePosition + 1);
		} else if (position === 'right') {
			let rightmostPosition = middlePosition + n; 
			// note: doesn't matter if rightmostPosition > len, .slice() still works as expected
			return arr.slice(middlePosition, rightmostPosition);
		}		
	}
	*/

