var a = [1, 2, 6];
var b = [2, 3, 4, 5];
// console.log(a.concat(b));
// let c = a.concat(b); //[ 1, 2, 3, 2, 3, 4, 5 ] 

// toString()  : Chuyển một mảng về dạng chuỗi ký tự.
// console.log(typeof a);
// let c = a.toString();
// console.log(typeof c);

// push()  :  Thêm một phần tử mới vào vị trí cuối mảng. trả về đồ dài mới của mảng
// let d = a.push(5); return length = 4
// console.log(d);

// Extend funtion ( xem them func apply);
// let vegetables = ['parsnip', 'potato']
// let moreVegs = ['celery', 'beetroot']

// // Merge the second array into the first one
// // Equivalent to vegetables.push('celery', 'beetroot')
// Array.prototype.push.apply(vegetables, moreVegs)
// //push.apply push.call push.bind
// console.log(vegetables)  // ['parsnip', 'potato', 'celery', 'beetroot']
// console.log(moreVegs)  // ['parsnip', 'potato', 'celery', 'beetroot']

// pop() : Xóa phần tử nằm ở vị trí cuối mảng.  trả về giá trị vừa xóa cuối 
// let d = a.pop(); // 6
// console.log(d); 
// console.log(a); // [1, 2]

// unshift()  : Thêm một phần tử mới vào vị trí đầu mảng.
// shift() :  Xóa phần tử nằm ở vị trí đầu mảng. trả về giá trị đầu tiên trong mãng vừa xóa
// let c = a.shift(); //1
// console.log(c);

// concat() :  Ghép các mảng con lại với nhau rồi trả về một mảng mới.
// slice() :  Trích xuất một phần của mảng ban đầu rồi trả về một mảng mới.
// arr.slice([begin[, end]]) begin dau tu dem tu 1 

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// console.log(animals.slice(-2)); tra ve 2 phan tu cuoi

// console.log(animals.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]

// splice() :  Thêm hoặc xóa "một hoặc nhiều phần tử" ở vị trí bất kỳ trong mảng.

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
// let arrDeletedItems = array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

// length : Trả về số lượng phần tử của mảng.
