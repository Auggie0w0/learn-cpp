// im using runJS application/ webbrowser version to ouput and play with JS, here is just to save the code

console.log("--------- Decleration methods ------------")
var a = "accessible anywhere in the function"
let b = "can accessible to the block they are declared in (it will be global outside of the function)"
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

let arr = [1,2,3,4,5,6]
arr.map((value,index)=>{ // only 2 parameters 
  console.log(`${index}: ${value}`)
  
})

console.log ("\nThe map tool goes through the array and returns a value that is defined" + "\n\nThe name can always be changed but it is always value and index for parameters, though index is an optional value" + "\n\nThough 'value' would be required (cuz it's value), but with an _ before the name could render it optional, as long as there is 'index'")



// ------------------------------------ //
console.log("\n --------- Exercize #1 ------------")

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let newArr = arr1.map((value,index)=>{
  if (value % 5 == 0) {
    return value = "fizzBuzz"
  } else if (value % 2 != 0) {
    return value = "buzz"
  } else{
    return value = "fizz"
  } 
  
})

console.log(newArr)
console.warn("im yellow")
console.error("im red")

console // just running this will output: 
/*
Object [console] {
  debug: ƒ (),
  error: ƒ (),
  info: ƒ (),
  log: ƒ (),
  warn: ƒ (),
  dir: ƒ dir(),
  dirxml: ƒ dirxml(),
  table: ƒ (),
  trace: ƒ trace(),
  group: ƒ group(),
  groupCollapsed: ƒ groupCollapsed(),
  groupEnd: ƒ groupEnd(),
  clear: ƒ (),
  count: ƒ count(),
  countReset: ƒ countReset(),
  assert: ƒ (),
  profile: ƒ profile(),
  profileEnd: ƒ profileEnd(),
  time: ƒ (),
  timeLog: ƒ (),
  timeEnd: ƒ (),
  timeStamp: ƒ timeStamp(),
  context: ƒ context(),
  createTask: ƒ createTask(),
  memory: Object [MemoryInfo] {
    __proto__: {
      totalJSHeapSize: 15200000,
      usedJSHeapSize: 13400000,
      jsHeapSizeLimit: 3760000000
    }
  }
}
*/



// ------------------------------------ //
console.log("\n --------- key and value --> decalrations ------------")

var space = " "

function side(){
  console.log("test")
}
let obj = {
  part1 : () =>{
    side()
    console.log("This is inside")
  },
  
    part2 : () =>{
    console.log(space)
  }
}
console.log(obj.part1() + obj.part2())




// ------------------------------------ //
console.log("\n --------- scopes ------------")


let out = "outslide"
function call(){
  console.log(out)
}

call()

// in this case there would be an error: 

// console.log("\nvs\n")

// let in
// function call(){
//   in = "inside"
// }

// call()


console.log("what if it is var?")

let var1 = "varvar"

function var1(){
  var1 = "variable"
}

var1()