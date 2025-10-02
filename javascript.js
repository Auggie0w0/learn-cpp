// im using runJS application/ webbrowser version to ouput and play with JS, here is just to save the code

console.log("--------- Decleration methods ------------")
var a = "accessible anywhere in the function"
let b = "only accessible to the block they are declared in"
const c = "can't be changed"

// console.log(2+3)
// console.log("2"+"3")

let side = `${a+b+c}`
console.log(side)

// ------------------------------------ //
console.log("\n --------- Use of `${}` ------------")
console.log("it is also known as template strings. often used like this: const greeting = `Hello, my name is ${name} and I am ${age} years old.`")

let day = "October 1"
let time = "16:54"
const test = `Today's day is ${day} and the time is ${time}`

console.log("\nExercize: \n"+ test)


// ------------------------------------ //
console.log("\n --------- Callback function ------------")

let arr = [1,2,3,4,5,6,6]
arr.map((value,index)=>{ // only 2 parameters 
  console.log(`${index}: ${value}`)
  
})

console.log ("\nThe map tool goes through the array and returns a value that is defined" + "\n\nThe name can always be changed but it is always value and index for parameters, though index is an optional value" + "\n\nThough 'value' would be required (cuz it's value), but with an _ before the name could render it optional, as long as there is 'index'")
