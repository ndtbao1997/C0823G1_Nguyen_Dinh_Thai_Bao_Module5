let fibonacci = (a, b) => a + b;
let arrFibonacci = [0, 1];
let sum = 0;
for (let i = 0; i <= 20; i++) {
    arrFibonacci.push(fibonacci(arrFibonacci[arrFibonacci.length - 1], arrFibonacci[arrFibonacci.length - 2]));
}
for (let arr of arrFibonacci) {
    console.log(arr);
    sum += arr;
}
console.log("Tổng các số fibonacci là " + sum);
//# sourceMappingURL=main.js.map