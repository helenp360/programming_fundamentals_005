// =============== PART 1 - Advanced Objects ================

/*
  This function receives an object and returns the number 
  of key-value pairs (properties) in the object.
*/
function size(object) {
  return Object.keys(object).length;
}

/*
  This function receives an object, whose values will all be numbers, and returns the smallest number in the object.
*/
function min(object) {
  const arrayOfValues = Object.values(object);
  return Math.min(...arrayOfValues);
}

/*
  This function receives an object, whose values will all be numbers, and returns the largest number in the object.
*/
function max(object) {
  const arrayOfValues = Object.values(object);
  return Math.max(...arrayOfValues);
}

/*
  This function receives an object, and will return a clone of this object - i.e. a new object with the same key-value pairs.
*/
function clone(object) {
  const obj2 = Object.assign({}, object);
  return obj2;
}

/*
  This function receives an object and returns the value for the given key.
  If the key does not exist it returns undefined.
*/
function get(object, key) {
  for (let item in object){
    if (item === key){
      return object[item];
    }
  }
}

/*
  This function will receive an object and a key, and will return true if the object has the given key, and false if not.
*/
function has(object, key) {
  let myKey = get(object, key);
  if (myKey !== undefined){
    return true;
  } else {
    return false;
  }
}

/*
  This function receives an object, whose values will all be numbers, and returns the sum of all these numbers.
*/
function sum(object) {
  let arr = Object.values(object);
  console.log(typeof arr[0]);
  let myTotal = 0;
  for (let i = 0; i < arr.length; i++){
    if (typeof arr[i] !== "number"){
      myTotal += 0;
    } else {
      myTotal += arr[i];
    }
  }
  return myTotal;
}

/*
  This function receives an object and will return a new object with the keys and values inverted. See the tests for examples of this.
*/
function invert(object) {
  return Object.assign({}, ...Object.entries(object).map(([a,b]) => ({ [b]: a })));
}

/*
  This function reveives an array of objects. It should return a single object, which is a combination of all the objects in the array.
*/
function addAll(arr) {
  let newObject = {};
  for (let i = 0; i < arr.length; i++){
    Object.assign(newObject, arr[i]);
  }
return newObject;
}

// =============== PART 2 - Functions as Values ================

/*
  This function allows you to find a value from an object which fulfils a criteria. 
  It receives an object and a matcher function. 
  It should test each value in the object against the matcher function and if a matching value is found, the value should be returned. 
  Otherwise, return null.
*/
function find(obj, matcherFunc) {
  let arrayOfValues = Object.values(obj);
  let result;
  for (let i = 0; i < arrayOfValues.length; i++){
    if (matcherFunc(arrayOfValues[i]) === true){
      result =  arrayOfValues[i];
    } 
  } if (result === undefined){
    return null;
  } else {
    return result;
  }
}

/*
  This function allows you to test whether every value in an object matches a certain criteria.
  For example, is every value greater than 100? The function receives an object and a tester function.
  If all values in the object pass the tester function, true is returned. Otherwise, return false.
*/

function every(obj, func) {
  const matcherFunc = function (num) {
    return num > 99;
  }
  let arrayOfValues = Object.values(obj);
  for (let i = 0; i < arrayOfValues.length; i++){
    if (matcherFunc(arrayOfValues[i]) === false){
      return false;
    } else {
      return true;
    }
  }
}

/*
  This function allows you to test whether some values in an object match a certain criteria.
  For example, are at least some of the values greater than 100? The function receives an object and a tester function.
  If at least 1 of the values in the object pass the tester function, true is returned. Otherwise, return false.
*/
function some(obj, func) {
  const matcherFunc = function (num) {
    return num > 99;
  }
  let arrayOfValues = Object.values(obj);
  for (let i = 0; i < arrayOfValues.length; i++){
    if (matcherFunc(arrayOfValues[i]) === true){
      return true;
    } else {
      return false;
    }
  }
}

function setUpGlobalObject() {
  Object.size = size;
  Object.min = min;
  Object.max = max;
  Object.clone = clone;
  Object.get = get;
  Object.has = has;
  Object.sum = sum;
  Object.invert = invert;
  Object.addAll = addAll;
  Object.find = find;
  Object.every = every;
  Object.some = some;
}

module.exports = setUpGlobalObject;
