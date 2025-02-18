/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(val) {
        if (val % 2 === 0) {
            newArr.push(val);
        }
    });
    return newArr;
}

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let newArr = [];
    arr.forEach(function(val) {
        let first = val[0];
        let last = val[val.length - 1];
        newArr.push(first + last);
    });
    return newArr;
}

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    let newObj = arr;
    newObj.forEach(function(val) {
        val[key] = value;
    });
    return newObj;
}

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
    let lowCase = str.toLowerCase();
    let newArr = lowCase.split('');
    let newObj = {};
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    // console.log(lowCase); 
    // console.log(newArr);
    // console.log(newObj);
    newArr.forEach(function(val) {
        let letter = val;
        // console.log(letter);
        if (vowels.indexOf(letter) != -1) {
            // console.log('Vowel!');
            if (newObj[letter]) {
                newObj[letter]++;
            }
            else {
                newObj[letter] = 1;
            }
        }
    });
    // console.log(newObj);
    return newObj;
}

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
    return arr.map(function(val) {
        return val * arr.indexOf(val);
    });
}

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    let newArr = [];
    let extract = key;
    // console.log('Starting Arrray: ', arr);
    // console.log('Key to Extract: ', extract);
    arr.forEach(function(val) {
        let tempObj = val;
        // console.log('Object within Array: ', tempObj);
        if (Object.keys(tempObj) == extract) {
            let newArrVal = (Object.values(tempObj)).toString();
            // console.log('Value of Given Key: ', newArrVal);
            newArr.push(newArrVal);
        }
    });
    // console.log('Array of Values of Given Key: ', newArr);
    return newArr;
}

/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr) {
    let finalArr = [];
    arr.forEach(function(key) {
        let tempArr = Object.values(key);
        // console.log('Temp Array: ', tempArr);
        let fullName = tempArr.join(' ');
        // console.log('Full Name: ', fullName);
        finalArr.push(fullName);
        tempArr = [];
        fullName = [];
    });
    return finalArr;
}

/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    let finalArr = [];
    let extract = key;
    // console.log('Key to Filter: ', extract);
    arr.forEach(function(val) {
        // console.log(val);
        let tempObj = val;
        // console.log('Temporary Object: ', tempObj);
        // console.log('Owns a Cat: ', tempObj[`${extract}`]);
        if (tempObj[`${extract}`]) {
            // console.log('CAT!');
            finalArr.push(tempObj);
            // console.log('Final Array: ', finalArr);
        }
    });
    return finalArr;
}

/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    let element = undefined;
    // console.log('Target: ', searchValue);
    arr.forEach(function(val) {
        // console.log(val);
        if (val === searchValue) {
            // console.log('MATCH!', val);
            element = val;
        }
    });
    return element;
}

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    // console.log(arr);
    let target = key;
    let targetVal = searchValue;
    let finalObj = undefined;
    let searchCount = 0;
    // console.log(target);
    // console.log(targetVal);
    arr.forEach(function(val) {
        let tempObj = val;
        // console.log(tempObj);
        // console.log(tempObj[`${target}`]);
        if (tempObj[`${target}`] === targetVal) {
            if (searchCount === 0) {
                // console.log('YES!');
                finalObj = tempObj;
                searchCount ++;
                // console.log(finalObj);
                // console.log(searchCount);
            }
        }
    });
    return finalObj;
}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    // console.log(str);
    let strInput = (str.toLowerCase().split(''));
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
    // console.log(strInput);
    strInput.forEach(function(val) {
        let letter = val;
        // console.log(letter);
        // console.log(letter, vowels.indexOf(letter));
        if (vowels.indexOf(letter) == -1) {
            // console.log(letter);
            newStr = newStr + letter;
        }
    });
    return newStr;
}

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    // console.log(arr);
    let tempArr = [];
    arr.forEach(function(val) {
        // console.log(val, val % 2 === 1);
        if (val % 2 === 1) {
            tempArr.push(val);
        }
    });
    // console.log(tempArr);
    return tempArr.map(function(val) {
        return val * 2;
    });
}
