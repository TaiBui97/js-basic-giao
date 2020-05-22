// THE METHOS SOME & EVERY IN ES5 2015
es2015 release most method off array : 

        indexOf
        forEach
        Map
        filter
        some
        every
const arrAssertNegative = [-1, 0, 4, -2];
const arrAssertPositive = [1, 2, 5, 10];

function isNegative(nums) {
    return nums < 0;
}
// arrAssertNegative.some(isNegative) == true);
// arrAssertPositive.some(isNegative) == false);
assert([-1,0,1,3,4].some(isNegative) == true);
assert([1,0,1,3,4].some(isNegative) == false);

//  can even inline predicate function and stil maintan :
 assert([-1,0,1,3,4].some(x => x < 0) == true); //using arrow function in es6 2018
 assert([-1,0,1,3,4].some(x => x < 0) == false); 


//  function some return true/false value if exist elements if find out element in arr

assert([-1,0,1,3,4].some(x => x < 0) == false); 
assert([-1,0,1,3,4].some(x => x >= 0) == false); 
assert([1,0,1,3,4].some(x => x < 0) == false); 
assert([1,0,1,3,4].some(x => x >= 0) == true); 
// check all element in array
ADDITIONAL PARAMETERS
function predicate (element, index, array){
    //code here functtion determine whether to return true or false
}