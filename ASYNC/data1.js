let employees=[
    {'id':101,name:"Rahul Gandhi",sal:45000},
    {'id':102,name:"Sonia Gandhi",sal:55000}
]

// let createEmp = (emp) => {
//     setTimeout(() => {
//         employees.push(emp);
//     }, 4000)
// }

// let displayData = () => {
//     setTimeout( () => {
//         let rows = ''
//         for( emp of employees ){
//             rows += `<tr>
//                         <td>${emp.id}</td>
//                         <td>${emp.name}</td>
//                         <td>${emp.sal}</td>
//                     </tr>`
//         }
//         document.getElementsByTagName('tbody')[0].innerHTML =rows
//     }, 2000)
// }

// createEmp({id:103,name:"priya",sal:75000})

let createEmp = (emp, callback) => {
    setTimeout(() => {
        employees.push(emp);
        callback();
    }, 4000)
}

let displayData = () => {
    setTimeout( () => {
        let rows = ''
        for( emp of employees ){
            rows += `<tr>
                        <td>${emp.id}</td>
                        <td>${emp.name}</td>
                        <td>${emp.sal}</td>
                    </tr>`
        }
        document.getElementsByTagName('tbody')[0].innerHTML =rows
    }, 2000)
}

createEmp({id:103,name:"priya",sal:75000}, displayData)
