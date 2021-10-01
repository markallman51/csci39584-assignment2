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

// MAP //
Array.prototype.myMap = function() {

};

// FILTER //
Array.prototype.myFilter = function() {

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