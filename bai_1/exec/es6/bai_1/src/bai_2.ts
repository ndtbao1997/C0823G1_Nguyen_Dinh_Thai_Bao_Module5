let arr: number[] = [1,2,2,5,7];

const sum = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0)

console.log(sum);
