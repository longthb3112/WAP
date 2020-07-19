//------------------------------------------------
// Lab 05
// Huynh Bao Long Tran
// email: hbtran@miu.edu
//------------------------------------------------

//
// Test function to test
//
function myFunctionTest(expected, f) {
    if (Array.isArray(expected)) {
        let v1 = expected.concat().sort().join(',');
        let v2 = f().sort().join(',');
        return v1 === v2 ? 'TEST SUCCEEDED' : 'TEST FAILED';
    }
    return expected === f() ? 'TEST SUCCEEDED' : 'TEST FAILED';
}

//Find max that takes two numbers as arguments and returns the largest of them
function max(a, b) {
    if (a >= b) {
        return a;
    }
    else {
        return b;
    }
}
console.log("max(10, 20) | Expected = 20 | Actual = " + max(10, 20) + " | Result: " +
    myFunctionTest(20, function () {
        return max(10, 20)
    })
);

//
// Find max among three values
//
function maxOfThree(a,b,c) {
    return max(max(a, b), c);
}

console.log("maxOfThree(10, 20, 15) | Expected = 20 | Actual = " + maxOfThree(10, 20, 15) + " | Result: " +
    myFunctionTest(20, function () {
        return maxOfThree(10, 20, 15)
    })
);

//
// Check if a character is a vowel
//
function isVowel(c) {
    console.assert(c.length === 1, 'Must be a single character');
    return ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'].indexOf(c) >= 0;
}
console.log("isVowel('e') | Expected: true | Actual = " + isVowel('e') + " | Result: " +
    myFunctionTest(true, function () {
        return isVowel('e');
    })
);

//
// Sum all the numbers in an array of numbers.
//
function sum(a) {
    return a.reduce(function (x, y) {
        return x + y;
    }, 0);
}
console.log("sum([1, 2, 3, 4] | Expected: 10 | Actual = " + sum([1, 2, 3, 4]) + " | Result: " +
    myFunctionTest(10, function () {
        return sum([1, 2, 3, 4]);
    })
);

//
// Multiply an array
//
function multiply(a) {
    return a.reduce(function (x, y) {
        return x * y;
    }, 1);
}
console.log("multiply([1, 2, 3, 4] | Expected: 10 | Actual = " + multiply([1, 2, 3, 4]) + " | Result: " +
    myFunctionTest(24, function () {
        return multiply([1, 2, 3, 4]);
    })
);

//
// Reverse a string
//
function reverse(str) {
    const splitString = str.split(""); 
    const reverseArray = splitString.reverse(); 
    const joinArray = reverseArray.join(""); 
    return joinArray;
}
console.log("reverse('jag testar') | Expected: 'ratset gaj' | Actual = '" + reverse('jag testar') + "' | Result: " +
    myFunctionTest('ratset gaj', function () {
        return reverse('jag testar');
    })
);

//
// Find length of longest word
//
function findLongestWord(a) {
    return Math.max(... (a.map(e => e.length)));
}
console.log("findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']) | Expected: 6 | Actual = " + findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']) + " | Result: " +
    myFunctionTest(6, function () {
        return findLongestWord(['cow', 'cat', 'deer', 'snake', 'parrot']);
    })
);

//
// Filter long words
//
function filterLongWords(words, i) {
    return words.filter(e => e.length > i);
}
console.log("filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4) | Expected: snake,parrot | Actual = " + filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4) + " | Result: " +
    myFunctionTest(['snake', 'parrot'], function () {
        return filterLongWords(['cow', 'cat', 'deer', 'snake', 'parrot'], 4);
    })
);

//
// Modify Jsfiddle script at: https://jsfiddle.net/keithlevi/e6kqvx2f/1/
//
function jsfiddle() {
    // original input
    const a = [1,3,5,3,3];

    // multiply by 10
    const b = a.map(function(elem, i, array) {
        return elem * 10;
    });
    console.log(b);

    // all elements equal to 3
    const c = a.filter(function(elem, i, array) {
        return elem === 3;
    });
    console.log(c);

    // return product
    const d = a.reduce(function(prevValue, elem, i, array){
        return prevValue * elem;
    });
    console.log(d);
}
jsfiddle();