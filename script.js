console.log("Script running...")
// Task 1: Define a function called `calculateArea` that takes length and width as parameters and returns the area (length * width)
function calculateArea(length, width){
  return length * width
} 


// Call the `calculateArea` function with any two values. Console log the result to check it.
let result =calculateArea(4, 5)
console.log(result)


// Task 2: Define a function called `checkPassing` that takes in `student` (object) as a parameter and returns whether the `grade` attribute is greater than or equal to 63.
function checkPassing(student){
  return student.grade >= 63;
}

// Define a `student` object that has name (string), class (string), and grade (number) attributes.
let student = {
  name: "Roberto",
  class: "Math",
  grade: 11
}




// Call the `checkPassing` function with the `student` object. Console log the result to check it.
console.log(checkPassing(student))

// Task 3: Define a function called `printIndex` that takes in `array` and `index` as parameters and console logs the element at that index of the array.
// Pink & Blue: Define `printIndex` as an ARROW function
function printIndex(array, index){
  console.log(array[index])
}


// Define an array called `favoriteFoods` and put at least 3 elements in
let favoriteFoods=["Pizza", "Hot dog", "Sandwich"]

// Call the `printIndex` function with `favoriteFoods` and any index
 printIndex(favoriteFoods, 1)


// Extra Credit: Define an arrow function called `calculateTotal` that takes in `array` (array of numbers) as a parameter and returns the total of all the numberes



// Define an array called `numbers` and put at least 3 numbers in


// Call the `calculateTotal` function with `numbers` and any index



