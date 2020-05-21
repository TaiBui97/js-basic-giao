// dùng function như tham số đươcj gọi là callback
var coffeeMachine = {
    makeCoffee: function (onFinish) {
        console.log('making coffee');
        onFinish();
    }
}
var beep = function () {
    console.log('beep beep');
}
// coffeeMachine.makeCoffee(beep);

// coffeeMachine.makeCoffee(function(){
//     console.log('tit tit');
// })

/**
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */
function double(num) {
    return num * 2;
}
var nums = [1, 2, 3];

function sumAndDo(nums, callback) {
    var total = 0;
    // for(let i = 0; i< nums.length; i++){
    //     total += nums[i];   
    // }
    // return callback(total);
    for (var i of nums) {
        total += i;
    }
    return callback(total);

}
console.log(sumAndDo(nums, double));

/**
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

function transform(numbers, callback) {
    // Viết nội dung hàm ở đây 
    var result = [];
    for (var i of numbers) {
        result.push(callback(i));

    }
    return result;
}

function double(num) {
    // viết code ở đây
    return num * 2;
}