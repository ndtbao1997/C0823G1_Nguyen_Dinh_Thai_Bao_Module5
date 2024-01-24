let str = (...args: string[]) => {
  return args.reduce((acc, cur) => {
    return acc + cur + ", ";
  }, "Welcome ");
};

console.log(str("a", "b"));
