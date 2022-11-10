
const higherbutton = document.querySelector('.higherbutton').addEventListener('click', setMin);
const lowerbutton = document.querySelector('.lowerbutton').addEventListener('click', setMax);
const submitbutton = document.querySelector('.submitbutton').addEventListener('click', submit);

let min = 0;
let max = 9999999999;

let output = document.querySelector('.output');
output.textContent = getRandInteger(min, max);


function setMin(){

    min = output.textContent;
    console.log("new min = " + min);
    console.log("max = " + max);

    output.textContent = getRandInteger(min, max);

}

function setMax(){

    max = output.textContent;
    console.log("new max = " + max);
    console.log("min= " + min);


    output.textContent = getRandInteger(min, max);

}

function getRandInteger(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

function submit(){

    alert(output.textContent);

}

function check(){
    console.log('test');
}


//const output = document.querySelector('.output');
//let phone_content = document.querySelector('.phone');


//button.addEventListener('click', updateOutput);

//function updateOutput() {
//    output.textContent = phone_content.value;
////}

//generate numbers 0-10 for each of the digit places

//if user selects true at array spot, keep digit and move onto next position in the array


//warmer colder 