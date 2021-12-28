let state=0;
let state1=0;
let state2=0;
let state3=0;
let num1="";
let num2="";
let calculate="";
let selection="";
const number=document.querySelectorAll(".number");
const operator=document.querySelectorAll(".operator");
const equal=document.querySelector(".equals");
const operations=document.querySelector(".operations");
const result=document.querySelector(".result");
const reset=document.querySelector("#ac");
const dot=document.querySelector('#dot');
const del=document.querySelector('#delete');

function round(number){
    let rounded=Math.round((number + Number.EPSILON)*100)/100;
    return rounded;
}

function add(num1,num2){
    let sum=+num1 + +num2;
    return sum;
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
function percentage(num1,num2){
    let perc=(num2/100)*num1;
    return perc;
}
function operate(num1,num2,selection){
    if(selection==""){return}
    else{
        if(selection=="+"){
            num1=add(num1,num2);
        }else if(selection=="-"){
            num1=subtract(num1,num2);
        }else if(selection=="*"){
            num1=multiply(num1,num2);
        }else if(selection=="/"){
            if(num2==0){
                alert("You can't divide a number by 0! Insert it again!");
                num2="";
            }else{
                num1=divide(num1,num2);
            }
        }else if(selection=="%"){
            num1=percentage(num1,num2); 
        }
        num1=round(num1);
        result.textContent=num1;
        state3=1;
        return num1;
    }
}
function resetEverything(){
    num1="";
    num2="";
    selection="";
    state=0;
    state1=0;
    state2=0;
    calculate="";
    operations.textContent=calculate;
    result.textContent="";
}

number.forEach(number=>{
    number.addEventListener('click',()=>{
        if(state1==1){
            alert("Please select an operator!")
        }
        else if(state==0){
            num1=num1+number.value;
            calculate=num1;
            operations.textContent=calculate;
        }else{
            num2=num2+number.value;
            calculate=num1+selection+num2;
            operations.textContent=calculate;
        }
    })
})
operator.forEach(operator=>{
    operator.addEventListener('click',()=>{
        if(state==0 || num2==""){
            selection=operator.value;
            num1=round(+num1);
            calculate=num1+selection;
            operations.textContent=calculate;
            state=1; 
            state1=0;
            state2=0;
        }
        else{
            state1=0;
            num1=operate(num1,num2,selection);
            selection=operator.value;
            calculate=num1+selection;
            operations.textContent=calculate;
            num2="";
            state2=0; 
        }
    })
})

equal.addEventListener('click',()=>{
    if(state!=0 && num2!=""){
        num1=operate(num1,num2,selection);
        calculate=num1;
        operations.textContent=calculate;
        num2="";
        selection="";
        state2=0;
        state1=1;
    }
    else{ alert("Please select an operator or a number!")}
})

reset.addEventListener('click',()=>{resetEverything()});

dot.addEventListener('click',()=>{
    if(state1==1){
        alert("Please select an operator!")
    }
    else if(state2==1){
        return;
    }
    else if(state==0){
        if(num1!=""){
            num1=num1+dot.value;
        }else{
            num1="0"+dot.value;
        }
        calculate=num1;
        operations.textContent=calculate;
        state2=1;
    }else{
        if(num2!=""){
           num2=num2+dot.value; 
        }else{
            num2="0"+dot.value;
        }
        calculate=num1+selection+num2;
        operations.textContent=calculate;
        state2=1;
    }
    
})
del.addEventListener('click',()=>{
    if(state3==1){
        resetEverything();
        state3=0;
    }else if(state==0){
        num1=num1.substring(0,num1.length-1);
        calculate=num1;
        operations.textContent=calculate;
    }else{
        num2=num2.substring(0,num2.length-1);
        calculate=num1+selection+num2;
        operations.textContent=calculate;
    }
})
