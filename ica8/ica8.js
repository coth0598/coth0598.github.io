
//body.addEventListener('click', giveAlert());

//function giveAlert(){
    //alert("this is an alert");
//}

const btn=document.getElementById("btn");

btn.addEventListener("click", function(){
   alert("You clicked me");
})



let body = document.querySelector('body');

function changeColor(){
    body.style.backgroundColor = "#ffffff";
    
}


function changeText(text){

    text.innerHTML = "Hello!!";

}

function changeFont(){

    document.getElementById('demo').style.fontSize='35px';
}