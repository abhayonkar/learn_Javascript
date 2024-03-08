// let score = 34

// console.log(typeof score)// 

// // const {score} = req.body // here you don't know what is data type while receiving 

// console.log(typeof(score))

// score = "24"
// console.log(typeof score)// 
// console.log(typeof(score))


score = "33sda"
let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number
console.log(valueInNumber); // NaN

score = null
let valueInScore = Number(score)
console.log(typeof valueInScore); // number
console.log(valueInScore); // 0

age = undefined
valueInAge = Number(age)
console.log(typeof valueInAge); // number 
console.log(valueInAge); // undefined

pass = true
valueInNumber = Number(pass)
console.log(typeof valueInNumber); // number 
console.log(valueInNumber); // 1

pass = true
valueInNumber = Number(pass)
console.log(typeof valueInNumber); // number 
console.log(valueInNumber); // 1

// conversions
// "33" => 33
// "33abc" => NaN (Not a Number)
// true =>1 , false => 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true
// "" => false
// "hitesh" => true


let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string 