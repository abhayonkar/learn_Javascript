const accountID = 387682
let accountEmail = "abjha@jdsbj.com"
var accountPassword = "jhbsj"
accountCity = "djs"

// accountID = 2 // ==> can't change the value assigned to a cont
// let accountEmail = "aba@jdsbj.com" // ==> can't declare the same varible again using let
// var accountPassword = "jhbja" // can declare  same variable but it creates confusions
// accountCity = "shsd"  // can declare a variable without let/var/const but it is dangerous

let accountState

console.log(accountID);
console.table([accountID,accountEmail,accountPassword,accountCity,accountState]);

// Output

// 387682
// ┌─────────┬───────────────────┐
// │ (index) │ Values            │
// ├─────────┼───────────────────┤
// │ 0       │ 387682            │
// │ 1       │ 'abjha@jdsbj.com' │
// │ 2       │ 'jhbsj'           │
// │ 3       │ 'djs'             │
// │ 4       │ undefined         │