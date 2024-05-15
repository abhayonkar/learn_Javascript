//const bumbleUser = new Object() // this creates a singleton object

 const facebookUser = {}

 facebookUser.id = "123abh"
 facebookUser.name = "bhai"
 facebookUser.isLoggedIn = false

// console.log(bumbleUser); 

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "abhay",
            lastname : "onkar"
        }
    }
}

console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)

const obj = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj, obj2} -  { obj: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign(obj, obj2) // or we can use const obj3 = Object.assign({}, obj, obj2)

console.log(obj)
console.log(obj3)

const obj4 = {...obj, ...obj2}

console.log(obj4)

const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source)

console.log(target)
console.log(returnedTarget === target)

console.log(facebookUser)

console.log(Object.keys(facebookUser))
console.log(Object.values(facebookUser))
console.log(Object.entries(facebookUser))
console.log(facebookUser.hasOwnProperty('isLoggedIn'))
console.log(facebookUser.hasOwnProperty('isLoggedOut'))

const users = [
    {
        id:1,
        email:"jhsb@gmail.com"
    },
    {
        id:2,
        email:"jgdfgfdhsb@gmail.com"
    },
    {
        id:3,
        email:"jhsb@gmail.com"
    },
    {
        id:4,
        email:"jhsb@gmail.com"
    },

]

console.log(users[1].email)
console.log(users[2].email)