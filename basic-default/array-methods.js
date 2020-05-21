// var a = [1, 2, 6];
// var b = [2, 3, 4, 5];
// // console.log(a.concat(b));
// // let c = a.concat(b); //[ 1, 2, 3, 2, 3, 4, 5 ] 

// // toString()  : Chuyển một mảng về dạng chuỗi ký tự.
// // console.log(typeof a);
// // let c = a.toString();
// // console.log(typeof c);

// // push()  :  Thêm một phần tử mới vào vị trí cuối mảng. trả về đồ dài mới của mảng
// // let d = a.push(5); return length = 4
// // console.log(d);

// // Extend funtion ( xem them func apply);
// // let vegetables = ['parsnip', 'potato']
// // let moreVegs = ['celery', 'beetroot']

// // // Merge the second array into the first one
// // // Equivalent to vegetables.push('celery', 'beetroot')
// // Array.prototype.push.apply(vegetables, moreVegs)
// // //push.apply push.call push.bind
// // console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
// // console.log(moreVegs)  // ['parsnip', 'potato', 'celery', 'beetroot']

// // pop() : Xóa phần tử nằm ở vị trí cuối mảng.  trả về giá trị vừa xóa cuối 
// // let d = a.pop(); // 6
// // console.log(d); 
// // console.log(a); // [1, 2]

// // unshift()  : Thêm một phần tử mới vào vị trí đầu mảng.
// // shift() :  Xóa phần tử nằm ở vị trí đầu mảng. trả về giá trị đầu tiên trong mãng vừa xóa
// // let c = a.shift(); //1
// // console.log(c);

// // concat() :  Ghép các mảng con lại với nhau rồi trả về một mảng mới.
// // slice() :  Trích xuất một phần của mảng ban đầu rồi trả về một mảng mới.
// // arr.slice([begin[, end]]) begin dau tu dem tu 1 

// // const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// // console.log(animals.slice(-2)); tra ve 2 phan tu cuoi

// // console.log(animals.slice(2));
// // // expected output: Array ["camel", "duck", "elephant"]

// // console.log(animals.slice(2, 4));
// // // expected output: Array ["camel", "duck"]

// // console.log(animals.slice(1, 5));
// // // expected output: Array ["bison", "camel", "duck", "elephant"]

// // splice() :  Thêm hoặc xóa "một hoặc nhiều phần tử" ở vị trí bất kỳ trong mảng.

// const months = ['Jan', 'March', 'April', 'June'];
// months.splice(1, 0, 'Feb');
// // inserts at index 1
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "June"]

// months.splice(4, 1, 'May');
// // replaces 1 element at index 4
// console.log(months);
// // expected output: Array ["Jan", "Feb", "March", "April", "May"]
// // let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// // // length : Trả về số lượng phần tử của mảng.
// Array MAP
/**
 * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
 * 2. Viết hàm multiply nhận vào một mảng numbers, 
 * sử dụng map method và hàm tripple để trả về 1 mảng 
 * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
 */

// function tripple(num) {
//     // Write code here
//     return num * 3;
//   }
  
//   function multiply(numbers) {
//     // Write code here...
//     var arrMul = numbers.map(function(x){
//         return tripple(x);
//     })
//     return arrMul;
//   }/**
//  * 1. Viết hàm tripple nhận vào 1 số và trả về số đó nhân 3
//  * 2. Viết hàm multiply nhận vào một mảng numbers, 
//  * sử dụng map method và hàm tripple để trả về 1 mảng 
//  * gồm các phần tử nhân 3 các phần tử trong mảng ban đầu
//  */

// function tripple(num) {
//   // Write code here
//   return num * 3;
// }

// function multiply(numbers) {
//   // Write code here...
//   var arrMul = numbers.map(function(x){
//       return tripple(x);
//   })
//   return arrMul;
// }

// Use array map make an array of strings of the names
// Use array map make an array of strings of the names
// var users = [{
//     name: "Angelina Jolie",
//     age: 80
//   },
//   {
//     name: "Eric Jones",
//     age: 2
//   },
//   {
//     name: "Paris Hilton",
//     age: 5
//   },
//   {
//     name: "Kayne West",
//     age: 16
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100
//   }
// ]

// function namesOnly(arr) {
//   // Write code here...
//   return arr.map(x => x.name)

// }



// Use array map make an array of the names in <h1></h1>, and the ages in <h2></h2>

// const users = [
//     {
//       name: "Angelina Jolie",
//       age: 80
      
//     },
//     {
//       name: "Eric Jones",
//       age: 2
      
//     },
//     {
//       name: "Paris Hilton",
//       age: 5
      
//     },
//     {
//       name: "Kayne West",
//       age: 16
      
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100
      
//     }
//   ]
  
//   function readyToPutInTheDOM(arr) {
//     // Write code here...
//     return arr.map((x) =>{
//         return '<h1>' + x.name + '</h1><h2>' + x.age + '</h2>'
//     })
//   }

// filter

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter((x) => {
        return x >= 5;
    })
  }
  
  // Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
function fiveAndGreaterOnly(arr) {
    // your code here
    return arr.filter((x) => {
        return x >= 5;
    })
  }
  
  /**
 * Give a list of students, filter out non-female 
 */
 
 var members = [
    { name: 'Lan', gender: 'female' },
  { name: 'Linh', gender: 'female' },
  { name: 'Trung', gender: 'male' },
  { name: 'Peter', gender: 'gay' }
];
function filterOutFemales(members) {
// your code here!
return members.filter( x => {
    return x.gender != 'female';
})
}

-------find method----------
// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
function findFirstEvenNumber(array) {
    // your code here
    return array.find( x => {
        if(x % 2 === 0)
        return true
        return undefined;
    })
  }
  /**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

function findDivisibleNum(array, x) {
    // viết code ở đây.
    return array.find((nums) =>{
        if(nums % x == 0 )
        return nums;
        return undefined;
    })
  }
  

  -----reduce------
  // Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
  ];
  
  function totalVotes(arr) {
    // write code here...
    return arr.reduce((total,x)=> {
      return total += x.voted;
       
    },0)
  } 
  // Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
  ];
  
  function shoppingSpree(wishlist) {
    // Write code here..
    return wishlist.reduce( (total,x) => {
        return total += x.price;
    },0)
  }
  // Given an array of all your wishlist items, returns an array of titles
var wishlist = [{
    title: "Tesla Model S",
    price: 90000
  },
  {
    title: "4 carat diamond ring",
    price: 45000
  },
  {
    title: "Fancy hacky Sack",
    price: 5
  },
  {
    title: "Gold fidgit spinner",
    price: 2000
  },
  {
    title: "A second Tesla Model S",
    price: 90000
  }
];

function arrayTitle(wishlist) {
  // Write code here..
  return wishlist.reduce((arr,x) => {
     arr.push(x.title);
     return arr;
  }, [])
}

// extend
/* Filter các sản phẩm khi biết id danh mục sản phẩm
  Ví dụ đây là 1 danh sách các danh mục sản phẩm, 
  khi người dùng muốn lọc các sản phẩm thuộc danh mục nào 
  thì filter các sản phẩm của danh mục đó.
  var categories = [
    { id: 1, name: 'Đồ điện tử'},
    { id: 2, name: 'Đồ gia dụng'},
    { id: 3, name: 'Nội thất'}
  ];
*/

var listProducts = [
    {id: 1, categoryId: 1, name: 'Tivi'},
    {id: 2, categoryId: 1, name: 'Tủ lạnh'},
    {id: 3, categoryId: 3, name: 'Ghế sofa'},
    {id: 4, categoryId: 1, name: 'Máy giặt'},
    {id: 5, categoryId: 2, name: 'Chén bát'},
    {id: 6, categoryId: 2, name: 'Nồi cơm điện'},
    {id: 7, categoryId: 3, name: 'Cửa kính'},
    {id: 8, categoryId: 1, name: 'Điều hoà'},
    {id: 9, categoryId: 3, name: 'Bàn tròn'},
    {id: 10, categoryId: 2, name: 'Lò vi sóng'},
   ]
    var categories = [
       { id: 1, name: 'Đồ điện tử'},
       { id: 2, name: 'Đồ gia dụng'},
       { id: 3, name: 'Nội thất'}
     ];
   
   function filterProductsByCategoryId(products, categoryId) {
     // your code here! 
     return products.filter(x => x.categoryId == categoryId)
   }



   /**
 * Viêt hàm có sử dụng method filter để loại bỏ những phần tử bị lặp lại trong mảng:
 * Tìm hiểu thêm indexOf:
 * https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
 * Example:
 * removeDuplicate([1, 1, 2, 3, 3]) // [1, 2, 3]
 * 
*/

function removeDuplicate(array) {
    // write code here..
    var arrDup = [];
    return array.filter(x => {
        if(arrDup.indexOf(x) == -1){
          arrDup.push(x);
          return true;  
        }
         return false; 
  
    });
    
    
  }