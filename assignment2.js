// FOR EACH //
//here, callbackFn is a placeholder for the function that is applied to each element when myEach is called
//when myEach is called, the callback function will be applied to each(valid) element 
Array.prototype.myEach = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; //checks if element is valid
        //apply callback function. include all possible inputs:
        //element
        //element, index
        //element, index, array
        callbackFn(this[i], i, this)        
    }

};

// MAP: takes array, apply callback to elements, return new elements in new array //
Array.prototype.myMap = function(callbackFn) {
    var returnArr = []

    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; //checks if element is valid

        //apply callback to element, store element in return
        returnArr[i] = callbackFn(this[i], i, this)
    }
    return returnArr
};

// FILTER: takes array, returns array of elements that pass thru callback function //
Array.prototype.myFilter = function(callbackFn) {
    var returnArr = []
    var count = 0

    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue; //checks if element is valid

        //apply callback to element, store element in return
        if(callbackFn(this[i], i, this)){
            returnArr[count] = this[i]
            count++
        }

    }
    return returnArr

};

// SOME //
Array.prototype.mySome = function() {

};

// EVERY //
Array.prototype.myEvery = function() {

};

// REDUCE //
Array.prototype.myReduce = function() {

};

// INCLUDES //
Array.prototype.myIncludes = function() {

};

// INDEXOF //
Array.prototype.myIndexOf = function() {

};

// PUSH //
Array.prototype.myPush = function() {

};

// LASTINDEXOF //
Array.prototype.myLastIndexOf = function() {

};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

/////////////TESTING////////////////////
const arr = [2, 4, 6, 8]

console.log("ForEach:")
arr.forEach(x => console.log(x))

console.log("myEach:")
arr.myEach(x => console.log(x))

console.log("Map")
console.log(arr.map(x => x * 2))

console.log("myMap")
console.log(arr.myMap(x => x * 2))

console.log("Filter")
console.log(arr.filter(x => x > 4))

console.log("myFilter")
console.log(arr.myFilter(x => x > 4))
