
let numb1 = parseInt( prompt("enter any number "))
let numb2 = parseInt( prompt("enter another number"))
let operator = prompt('enter the type of operaion which my be mut, sub,add, div')

let mut,add,div,sub

if (operator == "mut"){
    mut = numb1 * numb2;
    console.log(mut)
    alert(`the mut of the two number is ${mut}`)
}else if(operator == "add" ){
    add = numb1 + numb2;
    console.log(add)
    alert(`the sum of the two number is ${add}`)
}
else if(operator == "sub"){
    sub = numb1 - numb2;
    console.log(sub)
    alert(`the sub of the two number is ${sub}`)
}else if(operator == "div"){
    div = numb1 / numb2;
    console.log(div)
    alert(`the div of the two number is ${div}`)
}
else{
console.log('the operator you enter is not valid')
alert('the operator you enter is not valid')
}


