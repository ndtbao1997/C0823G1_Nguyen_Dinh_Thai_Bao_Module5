let persons = [
  { name: "John", age: 25, aa: 1 },
  { name: "Sarah", age: 30, aa: 1 },
  { name: "Michael", age: 35, aa: 1 },
];
for (let { name, age } of persons) {
  console.log(`Name: ${name} , Age: ${age}`);
}
