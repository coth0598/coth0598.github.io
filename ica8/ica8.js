let body = document.querySelector('body');
body.addEventListener('click', giveAlert());

function giveAlert(){
    alert("this is an alert");
}

function clickButton(){

    document.getElementById("demo").innerHTML = "Hello JavaScript!";

}

function changeFont(){

    document.getElementById('demo').style.fontSize='35px';
}