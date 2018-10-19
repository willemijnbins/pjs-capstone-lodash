let _ = {
 
 clamp(number,lower,upper) { //first idea to solution
    if(number >= lower && number<=upper) {	// number is in bound 			
    return number;
    } else if (number < lower){ // number is lower bound 	
        return lower;
      } else if (number > upper){ // number is higher bound 	
        return upper;
      }
    },
  
    /* 
  clamp(number,lower,upper) { // suggested solution
 let lowerClampedValue = Math.max(number,lower);
    let clampedValue = Math.min(lowerClampedValue, upper);
    return clampedValue;
    },*/
  
  inRange(number,start,end) {
    if (typeof end === "undefined"){ // check if end is undefined
        end = start;
		  	start = 0;
    };
    if (start > end) {// check is start is bigger than end
      let temp = end;
       end = start;
      start = temp;
    };
    let isInRange = number > start && number < end  
		return isInRange;
  },
  words(string){
    let words = string.split(' ');
    return words;
  },
 
 		pad(string,length){
    if (length<=string.length){ //check if length is shorter dan string length
     length = string.length // set length equal to string length, so there will be no extra padding
    }
	  let startPaddingLength = Math.floor((length-string.length)/2);
    let endPaddingLength = length - string.length  - startPaddingLength;
  	let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength); 
    return paddedString
      }, 
   /*
pad(string,length){ //original idea, didnt get it to work
   if (length<=string.length){
     length = string.length
    }
		let totalPadding = length-string.length;
    let startPaddingLength = Math.floor(totalPadding/2);
    let endPaddingLength = totalPadding - startPaddingLength;
  	let tempString = string.padStart(startPaddingLength+string.length);
  let newString = tempString.padEnd(length);
 return newString;  
      
}  */
      
     
  
has(object,key){
    let hasValue; 
  if (typeof object.key === 'undefined'){
     hasValue = false;
  }
else {
   hasValue = true;
}
     return hasValue 
  },
    
  invert(object){
    let invertedObject= {};
    for (let key in object) {
      let originalValue = object.key;
     invertedObject.originalValue =	key;
}
    return invertedObject
  },
  findKey(object, predicate){ 
    
    for (let key in object) {
       let value = object.key;
      let predicatReturnValue = predicate(value);
      if (predicatReturnValue){
           return key;
      } 
      }
      return undefined
    },
   drop(array,number){
    let droppedArray = [];
     if (number){
       droppedArray=array.slice(number)
     }
     else {
       droppedArray = array.slice(1);
     }
     return droppedArray
   },
  
 dropWhile(array,func){
    let droppedArray=[];
    for (let i = 0; i < array.length; i++){ // loop through array
    let returnValueFunc = func(array[i],i,array); // return value from function
      if (!returnValueFunc) { 
        droppedArray = array.slice(i)
           }
    }
        return droppedArray
   },
   /* 
   dropWhile(array,predicate){ //suggested solution 
    let dropNumber= array.findIndex(returnFirstFalseValue);
     function returnFirstFalseValue (element,index){
  let returnValueFunc = predicate(element,index,array)
  return !returnValueFunc
     }
        let droppedArray = this.drop(array,dropNumber);
     return droppedArray;
    }*/
       
  chunk(array,size){
    let chunkedArray =[]; // create new empty array
    
		 if (!size) { //if no size is supplied to the method, the size is set to 1
      size = 1;
		}
    
    let numberOfChunks = array.length % size; // calculates number of evenly distributed chunks;  
  	
    for (i=0; i < array.length; i += size){ //loop and increment by size
    let chunk = array.slice(i,i+size); //create chunks from specified size
    chunkedArray.push(chunk); //push chunks in new array
  }
      return chunkedArray;
  }
  
  };



// Do not write or modify code below this line.
module.exports = _;