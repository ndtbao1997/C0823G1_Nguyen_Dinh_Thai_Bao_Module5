var arr = [1, 2, 2, 5, 7];
var sum = arr.reduce(function (acc, cur) {
    return acc + cur;
}, 0);
console.log(sum);
