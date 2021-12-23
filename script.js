let state=0;
let state1=0;
let num1="";
let num2="";
let selection="";

function add(num1,num2){
    let sum=+num1 + +num2;
    return sum.toString();
}
function subtract(num1,num2){
    let sub=+num1 - +num2;
    return sub;
}
function multiply(num1,num2){
    let mul=+num1 * +num2;
    return mul;
}
function divide(num1,num2){
    let div=+num1 / +num2;
    return div;
}
function operate(num1,num2,selection){
    if(selection==""){return}
    else{
        if(selection=="+"){
            num1=add(num1,num2);
            console.log(num1);
        }else if(selection=="-"){
            num1=subtract(num1,num2);
            console.log(num1);
        }else if(selection=="*"){
            num1=multiply(num1,num2);
            console.log(num1);
        }else if(selection=="/"){
            if(num2==0){
                num1="lmao";
                console.log(num1);
                state=0;
                num1="";
            }else{
                num1=divide(num1,num2);
                console.log(num1);
            }
        }
        return num1;
    }
}

const number=document.querySelectorAll(".number");
const operator=document.querySelectorAll(".operator");
const equal=document.querySelector(".equals");

number.forEach(number=>{
    number.addEventListener('click',()=>{
        if(state==0){
            num1=num1+number.value;
            console.log(num1);
        }else{
            num2=num2+number.value;
            console.log(num2);
        }
    })
})
operator.forEach(operator=>{
    operator.addEventListener('click',()=>{
        if(state==0){
            selection=operator.value;
            console.log(selection);
            state=1; 
        }
        else{
            console.log(selection);
            num1=operate(num1,num2,selection);
            selection=operator.value;
            console.log(num1);
            num2=""; 
        }
    })
})

equal.addEventListener('click',()=>{
    num1=operate(num1,num2,selection);
    num2="";
    selection="";
})