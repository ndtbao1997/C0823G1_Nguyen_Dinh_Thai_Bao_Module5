let arr4: number[] = [1, 2, 3, 4];

const newArr4 = arr4.filter((a) => a > 0);

const result = (a: number[], b: number[]) => {
  if (a.length == b.length) {
    console.log("OK");
  } else {
    console.log("NG");
  }
};

result(arr4, newArr4);
