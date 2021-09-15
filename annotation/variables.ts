let apples: number = 10;

let speed: string = 'fast';

let nothingMuch: null = null;

let nothing: undefined = undefined;

let now: Date = new Date();

let arr: string[] = ['red', 'blue', 'green'];


class Car {

}
// class
let car: Car = new Car();


// object literal

let point: { x: number; y: number } = {
  x: 10,
  y: 20
};


//Function

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
}


//When to annotate

const json = '{"x": 5, "y": 10}';
const coordinates: {x: number, y: number} = JSON.parse(json);

console.log(coordinates);

const word = ['green', 'blue', 'red'];
let color: boolean;

for(let item of word) {
  if(item === 'green') {
    color = true;
  }
}

// Variables whos type cannot be inferred correctly

let nums = [-10, -1, 12];
let numAboveZero: boolean | number = false;

for(let item of nums) {
  if(item > 0) {
    numAboveZero = item;
  }
}
