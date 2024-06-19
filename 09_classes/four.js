class Account{
    min_Bal = 5000
    deposit_Amt(x){
        console.log(`${x} deposited successfully`)
    }
    }
    
    let a1 = new Account()
    let a2 = new Account()
    
    console.log(a1.min_Bal)
    console.log(a2.min_Bal)

    a1.deposit_Amt(10000)
    a2.deposit_Amt(20000)