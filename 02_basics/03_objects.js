// singleton - when a object is created using constructor as it has only one instance

//object literals

// we can also use Object.create which is singleton method or use below

const mySum = Symbol("key1")

const JsUser = {
    name: "Abhay",
    [mySum]: "myKey1",
    "full_name": "Abhay O",
    age: 18,
    location: "athani",
    "email": "abhay123@google.com",
    isLoggedIn: false,
    lastLoggedInDays: ["Monday", "Thursday"]
}

console.log(JsUser.email) 
// // console.log(JsUser[email]) console.log(JsUser[email])
//                    ^
//                    ReferenceError: email is not defined
//                        at Object.<anonymous>

console.log(JsUser["email"])
console.log(JsUser.age) 
console.log(JsUser.full_name) 
// // console.log(JsUser.mySum)
// // console.log(typeof(JsUser.mySum)) // string 
// // if we rewrite mySum as [mySum]

console.log(JsUser[mySum]) 
JsUser.age = "21"
console.log(JsUser.age) 

//Object.freeze(JsUser) -- to freeze the object any chages after this won't be considered

JsUser.email = "abhay@gmail.com"
console.log(JsUser)
// {
//     name: 'Abhay',
//     full_name: 'Abhay O',
//     age: '21',
//     location: 'athani',
//     email: 'abhay123@google.com',
//     isLoggedIn: false,
//     lastLoggedInDays: [ 'Monday', 'Thursday' ],
//     [Symbol(key1)]: 'myKey1'
//   }

JsUser.greeting = function(){
    console.log("hello world!");
}

console.log(JsUser.greeting)   // [Function (anonymous)]
console.log(JsUser.greeting()) //hello world!

JsUser.greetingTwo = function(){
    console.log(`Hello ${this.name}`)
}
console.log(JsUser.greetingTwo())