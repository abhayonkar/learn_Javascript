let gotoGoa = (success,failure) => {
    let accBal = 500;
    accBal > 10000 ? success("go and enjoy"):failure("go to prostack")

}
gotoGoa((msg)=> {console.log(msg)}, (err)=> {console.log(err)})