function changeCase(){
    let btn1 = document.getElementsByTagName('input')[0]
    uname = btn1.value 
    console.log(uname)   
    btn1.value = uname.toUpperCase()
}