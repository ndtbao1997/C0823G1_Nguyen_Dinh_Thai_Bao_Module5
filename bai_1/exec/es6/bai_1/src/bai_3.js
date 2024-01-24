var arr3 = ['a', 'b', 'c', 'd', '2'];
var c = arr3.filter(function (a) {
    var string = 'V';
    return a.toLowerCase() === string.toLowerCase();
});
if (c.length == 0) {
    console.log("Khong tim thay");
}
else {
    console.log(c);
}
