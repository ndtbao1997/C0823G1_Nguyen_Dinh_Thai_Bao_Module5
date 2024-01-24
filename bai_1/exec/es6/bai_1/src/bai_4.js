var arr4 = [1, 2, 3, 4];
var newArr4 = arr4.filter(function (a) { return a > 0; });
var result = function (a, b) {
    if (a.length == b.length) {
        console.log("OK");
    }
    else {
        console.log("NG");
    }
};
result(arr4, newArr4);
