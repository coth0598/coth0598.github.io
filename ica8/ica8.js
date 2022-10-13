let body = document.querySelector('body');
body.addEventListener('click', giveAlert());

function giveAlert(){
    alert("this is an alert");
}

function changeText(){

    document.getElementById("demo").innerHTML = "Hello!!";

}

function changeFont(){

    document.getElementById('demo').style.fontSize='35px';
}