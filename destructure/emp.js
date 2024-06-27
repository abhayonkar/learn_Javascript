let emp={
    id:101,
    emp_name:'Abhay',
    email:'abhay@gmail.com'
}

//console.log(id)  ReferenceError: id is not defined

let {id,emp_name} = emp

console.log(id)
console.log(emp_name)