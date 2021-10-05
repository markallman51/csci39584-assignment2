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

// SOME: return true if at least one element in array passes callback //
Array.prototype.mySome = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue

        if(callbackFn(this[i], i, this))
            return true
    }
    return false

};

// EVERY: return true if all elements pass callback //
Array.prototype.myEvery = function(callbackFn) {
    for(let i = 0; i < this.length; i++){
        if(this[i] === undefined) continue

        if(!callbackFn(this[i], i, this))
            return false
    }
    return true
};

// REDUCE: takes array, applies function that combines all elements, returns single value //
Array.prototype.myReduce = function(callbackFn) {
    //initialize first array value separately
    var x = this[0]
    
    //start loop with second array value
    for(let i = 1; i < this.length; i++) 
    {
        if(this[i] === undefined) continue

        //apply function to current value(stored in x) and next value. store result in x
        //console.log(callbackFn(x, this[i]))
        x = callbackFn(x, this[i])

    }
    return x
};

// INCLUDES: returns true if array contains a given value//
Array.prototype.myIncludes = function(value, index) {
    //console.log(index)
    var count = 0

    //if a starting index is given, set counter to starting index
    if(!(index === undefined))
        count = index
    
    //console.log(count)

    for(let i = count; i < this.length; i++){
        if(this[i] === undefined) continue
        if(this[i] === value) return true
    }
    return false

};

// INDEXOF: returns index of given value in array. -1 if not in array //
Array.prototype.myIndexOf = function(value, index) {
    var count = 0

    //if a starting index is given, set counter to starting index
    if(!(index === undefined))
        count = index
    
    for(let i = count; i < this.length; i++){
        if(this[i] === value) return i
    }

    return -1

};

// PUSH: adds elements to the end of an array //
//...args is an array of all input values
Array.prototype.myPush = function(...args) {
    var argsIndex = 0

    for(let i = this.length; i < this.length + args.length; i++){
        this[i] = args[argsIndex]
        argsIndex++
    }
};

// LASTINDEXOF: returns the last index where a value was found //
Array.prototype.myLastIndexOf = function(value, index) {
    var count = 0

    //if a starting index is given, set counter to starting index
    if(!(index === undefined))
        count = index
    
    for(let i = count; i < this.length; i++){
        if(this[i] === value) return i
    }

    return -1


};

// KEYS //
Object.grabKeys = function() {

};

// VALUES //
Object.grabValues = function() {

};

/////////////TESTING////////////////////
const arr = [2, 4, 6, 8]

// console.log("ForEach:")
// arr.forEach(x => console.log(x))

// console.log("myEach:")
// arr.myEach(x => console.log(x))

// console.log("Map")
// console.log(arr.map(x => x * 2))

// console.log("myMap")
// console.log(arr.myMap(x => x * 2))

// console.log("Filter")
// console.log(arr.filter(x => x > 4))

// console.log("myFilter")
// console.log(arr.myFilter(x => x > 4))

// console.log("Some")
// console.log(arr.some(x => x %2 === 0))

// console.log("mySome")
// console.log(arr.mySome(x => x %2 === 0))

// console.log("Every")
// console.log(arr.every(x => x %2 ==0))

// console.log("myEvery")
// console.log(arr.myEvery(x => x %2 ==0))

// console.log("Reduce")
// console.log(arr.reduce((x, y) => x - y))

// console.log("myReduce")
// console.log(arr.myReduce((x, y) => x - y))

// console.log("Includes")
// console.log(arr.includes(4))

// console.log("myIncludes")
// console.log(arr.myIncludes(4))

// console.log("IndexOf")
// console.log(arr.indexOf(8, 2))

// console.log("myIndexOf")
// console.log(arr.myIndexOf(8, 2))

// console.log('Push')
// console.log(arr.push([16, 32, 64]))
// console.log(arr)


// console.log('Push')
// console.log(arr.push(5))
// console.log(arr)