let answer = document.getElementById("answer") ;
let fistNumber = document.getElementById("fistNumber");
let secondNumber = document.getElementById("secondNumber"); 
let divied = document.getElementById("divied") ;
let multiply = document.getElementById("multiply") ;
let puls = document.getElementById("puls") ;
let minus = document.getElementById("minus") ;

divied.addEventListener("click", function(){
    let result = fistNumber.value / secondNumber.value;
    answer.innerHTML = result;
});
multiply.addEventListener("click", function(){
    let result = fistNumber.value * secondNumber.value;
    answer.innerHTML = result;
});
puls.addEventListener("click", function(){
    let a = Number(fistNumber.value);
    let b = Number(secondNumber.value);
    answer.innerHTML = (a  + b);
    
});
minus.addEventListener("click", function(){
    
    let result = fistNumber.value - secondNumber.value;
    answer.innerHTML = result;
});
