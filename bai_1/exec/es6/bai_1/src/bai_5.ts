let arr5: number[] = [-1, -2, -3, 0, 2, 4];

const newArr5 = arr5.filter((a) => a > 3);

if (newArr5.length == 0) {
  console.log("Không tồn tại");
} else {
  console.log(newArr5[0]);
}
