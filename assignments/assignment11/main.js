
document.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');

quoteButton.addEventListener('click', getQuote);

const copyButton = document.querySelector('.new-copy');

copyButton.addEventListener('click', copyToClipboard);
//copyButton.addEventListener('click', window.prompt("Copy to clipboard: Ctrl+C, Enter", getQuote));


const endpoint = 'https://www.boredapi.com/api/activity' ;

async function getQuote(){
    //console.log('test clicked worked');
    let text = await fetch(endpoint)
    let response = await text.text();
    let json_response = JSON.parse(response);
    console.log(json_response['activity']);
    //.then (text => text.text());
    //console.log(text['message']);
    displayQuote(json_response['activity']);
   // copyToClipboard(json_response['activity'])
    
}

function displayQuote(x){

   document.getElementById('js-quote-text').textContent = x;

}

getQuote();


function copyToClipboard() {

    window.prompt("Copy to clipboard: Ctrl+C, Enter", document.getElementById('js-quote-text').textContent);
  }