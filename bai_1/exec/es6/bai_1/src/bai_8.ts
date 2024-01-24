const sum8 = (a: number, b: number, ...args: number[]) => {
  let arr: number[] = [a, b, ...args];
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
};

console.log(sum8(1, 2, 3, 4));
