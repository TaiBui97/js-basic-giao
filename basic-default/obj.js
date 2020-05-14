// // // var person = {
// // //     age : 1,
// // //     name : 'giao',
// // //     weight : 5,
// // //     city : 'hcm'
// // // }
// // // de truy cap vao obj dung : person.age // 1
// // // object methods trong js : 
// // var person = {
// //     age : 1,
// //     name : 'giao',
// //     weight : 5,
// //     city : 'hcm',
// //     language : function () {
// //         console.log('vietnamese, age : ', this.age)
// //     },
// //     // _______

// //     // language : () => { // this is undefind -> arrow function this 
// //     //     console.log('vietnamese, age : ', this.age) //undefined
// //     //     console.log('vietnamese, age : ', person.age) // 1
// //     // }
// //     // ___________
// //     eat : function(meat){
// //         this.weight = this.weight + meat.weight;
// //         // console.log(this.weight);
// //         return this;
// //     }

// // }
// // var meat = { weight : 2 }
// // person.eat(meat);
// // console.log(person.weight) //7


// // let getAge = person.age;
// // console.log(getAge)
 



// // function sumMultiplyArray(a, b) {
// //    var sum = 0;
// //    for(var i = 0; i < a.length; i++){
// //       for(var j = 0; j < b.length; j++){
// //          sum += a[i] * b[j];
// //       }
// //    }
// //    return sum;

// // }
// // var a = [1, 2, 3];
// // var b = [10, 20,20];
// // sumMultiplyArray(a,b);
// /**
//  * Viết hàm calculate trả về tích các số từ start đến end, không tính end 
//  * Ví dụ: calculate(2, 5) trả về kết quả 24 (vì 2 * 3 * 4 = 24)
//  */
// // function calculate(start, end) {
// //    // viết code ở đây.
// //    var mulTil = 1;
// //    for(let i = start ; i < end; i++){
// //        mulTil *= i;
// //    }
// //    return mulTil;
// //  }
 
// // let list = [4, 5, 6];

// // for (let i in list) {
// //    console.log(i); // "0", "1", "2",
// // }

// // for (let i of list) {
// //    console.log(i); // "4", "5", "6"
// // // }
let oldCar = {
   make: 'Toyota',
   model: 'Tercel',
   year: '1996'
};
 
 for(let key in oldCar) {
   console.log(key);
 };
//  for (let key in oldCar) {
//    console.log(key);
//  }
// // var arr = [2,3,4];
// // var total =1;
// // for(let item in arr){
// //    console.log(total*=arr[item]);
// // }
// // console.log(total)

// // for in -> index
// // for of -> value
// function getObjectKey(obj, keys) {
//    // Write code here...
//    if (typeof keys === 'undefined')
//       var arr = [];
//    else
//       arr = keys;
//    for (var k in obj) {
//       arr.push(k);
//       if (typeof obj[k] === 'object')
//          getObjectKey(obj[k], arr);
//    }
//    return arr;
// }
// var apartment = {
//    bedroom: {
//      area: 20,
//      bed: {
//        type: 'twin-bed',
//        price: 100
//      }
//    }
//  };
 
//  var keys = [];
 
//  function getObjectKey(obj, keys) {
//    // Write code here...
//      for(let x in obj){
//       keys.push(x);
//       if(typeof obj[x] === 'object'){
//          getObjectKey(obj[x],keys);  
//       }
//      }
//      return keys;
     
//  }
 
//  getObjectKey(apartment, keys);
//  console.log(keys);