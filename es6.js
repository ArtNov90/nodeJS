// console.log("Hello world")

let a = 5
var b = 5
const c = 5



const nombre = 5.556
const bool = true

const str = "Hello world"
const str2 = 'Hello world'
const str3 = `Hello world`


// Array copy
let array = [1,55,2, true, "dzaa"]
let arrayCopy = [ ...array ]

// Array destructuration
const [ first, second ] = array


// Object
const obj = {
  message : "Hello",
  code : 200,
}


// Object copy
const objCopy = {
  ...obj,
  message : "World"
}

// Object destructuration
const { message } = obj


function varTest() {
  var x = 1
  if (true) {
    var x = 2
    console.log(x) // 2
  }
  console.log(x) // 2 
}


function letTest() {
  let x = 1 
  if (true) {
    let x = 2
    console.log(x) // 2
  }
  console.log(x) // 1
}

// from
function tata () {
  console.log("Hello")
}

// to 
const toto = () => {
  console.log("Hello toto")
}


// return explicite
const increment = (arg) => {
  return arg + 1
}

// return implicite
const impliciteIncrement = (arg) => arg + 1


// return implicite
const impliciteIncremen = (arg) => ({name : "John", surname : "Doe"})


if (5 > 9) {
  console.log("Yes")
} else {
  console.log("No")
}


console.log( 5 > 9 ? "Yes" : "No" )

