 1. 
let greeting;
greetign = {};
console.log(greetign);

- A: {}
- B: ReferenceError: greetign is not defined
- C: undefined
Answer: (C) undefined. 
Because, here the object is empty but the object obtained some value.

2. 
function sum(a, b) {
  return a + b;
}

sum(1, "2");

- A: NaN
- B: TypeError
- C: "12"
- D: 3
Answer: (C) "12". 
Because,  '+' operator is used between two number. Here '1' is number but "2" is string.


3. 
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);

- A: ['🍕', '🍫', '🥑', '🍔']
- B: ['🍝', '🍫', '🥑', '🍔']
- C: ['🍝', '🍕', '🍫', '🥑', '🍔']
- D: ReferenceError
Answer: (A) ["🍕", "🍫", "🥑", "🍔"]
Because, info object of food items is separated but is not modified. 

4. 
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());

- A: Hi there,
- B: Hi there, undefined
- C: Hi there, null
- D: ReferenceError
Answer: (B) Hi there, undefined
Because, since the function is declared by without any value. So the function will be undefined.  

5.
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);

- A: 1
- B: 2
- C: 3
- D: 4
Answer: C: 3
Because, if (num) is truthy then it's value will be 1, 2 and 3. so, final value count be 3.



live link: 