//arrow functions

const add = (firstnumber, secondnumber) => firstnumber + secondnumber; // Implicit return
console.log(add(2, 3)); // Output: 5

//multiple statement

const calculateArea = (width, height) => {
    const area = width * height;
    return area; 
};

console.log(calculateArea(5, 10));

//arrow function using call back

const fruits = ['apple', 'banana', 'cherry'];


fruits.forEach(fruit => {
    console.log(fruit);
});

//returning an object

const getCoordinates = (x, y) => ({ x, y });

const point = getCoordinates(5, 10);

console.log(point); 
