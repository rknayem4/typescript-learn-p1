// general types
const str: string = "Hello World";
const num: number = 42;
const bool: boolean = true;

// array of numbers and array of strings

const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: Array<string> = ["apple", "banana", "cherry"];

// tuple and readonly array
const tuple: [string, number] = ["age", 30];

const arr4: readonly number[] = [1, 2, 3, 4, 5];
// arr4.push(6);  Error: Property 'push' does not exist on type 'readonly number[]'.

const arr5: Readonly<[string, number, string]> = ["apple", 30, "cherry"];
const obj: { name: string; age: number } = { name: "John", age: 30 };

type Person = { name: string; age: number };

const person: Person = { name: "Alice", age: 25 };

const addTwo = (a: number, b: number) => {
  return a + b;
};

console.log(addTwo(26, 44));

const arr: string[] = [
  "programming",
  "language",
  "typescript",
  "is",
  "awesome",
];

const arrFixed: [string, string] = ["programming", "language"];

//  Optional and default parameters
const optional = (FirstName: string, lastName?: string) => {
  if (lastName) {
    return `Hello, ${FirstName} ${lastName}!`;
  }
  return `Hello, ${FirstName}!`;
};
// console.log(optional("R.K")); // Output: Hello, John!
// console.log(optional("R.K", "Nayem")); // Output: Hello, John Doe!

const defaultParam = (FirstName: string, lastName: string = "Nayem") => {
  return `Hello, ${FirstName} ${lastName}!`;
};

// console.log(defaultParam("R.K")); // Output: Hello, John!
// console.log(defaultParam("R.K", "Nayem")); // Output: Hello, John Doe!

// rest parameters
const restParam = (...nums: number[]) => {
  return nums.reduce((total, sum) => total + sum, 0);
};
// console.log(restParam(1, 2, 3, 4, 5)); // Output: 15

// -------------------------------------

// object types
const obj1: { name: string; age: number } = { name: "John", age: 30 };
const obj2: { name: string; age: number; isStudent: boolean } = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

type Obj = { name: string; age: number; isStudent: boolean };

const obj3: Obj = { name: "Bob", age: 40, isStudent: false };
// -------------------------------------

// union types
const unionType = (value: string | number) => {
  if (typeof value === "string") {  
    return value.toUpperCase();
  }
  return value.toString();
};

// console.log(unionType("hello")); // Output: "HELLO"
// console.log(unionType(42)); // Output: "42"



// intersection types
type A = { name: string; age: number };
type B = { isStudent: boolean };  
type C = A & B; // Intersection type

const intersectionType: C = { name: "Alice", age: 25, isStudent: true };

// console.log(intersectionType.name); // Output: "Alice"
// console.log(intersectionType.age); // Output: 25
// console.log(intersectionType.isStudent); // Output: true 

// optional types
type OptionalType = { name: string; age?: number }; 

const optionalType1: OptionalType = { name: "John" }; // age is optional
const optionalType2: OptionalType = { name: "Alice", age: 25 }; // age is provided


// interface types
interface PersonInterface {
  name: string;
  age: number;
  isStudent?: boolean; // optional property
}

const person1: PersonInterface = { name: "John", age: 30 };
const person2: PersonInterface = { name: "Alice", age: 25, isStudent: true }; 

