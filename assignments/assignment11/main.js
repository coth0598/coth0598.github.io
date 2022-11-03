
document.addEventListener('load', getQuote);

const quoteButton = document.querySelector('.new-quote');
quoteButton.addEventListener('click', getQuote);

const copyButton = document.querySelector('.new-copy');
copyButton.addEventListener('click', copyToClipboard);

const endpoint = 'https://www.boredapi.com/api/activity' ;

async function getQuote(){
    let text = await fetch(endpoint)
    let response = await text.text();
    let json_response = JSON.parse(response);
    console.log(json_response['activity']);
    displayQuote(json_response['activity']);
}

function displayQuote(x){

   document.getElementById('js-quote-text').textContent = x;
}

getQuote();

function copyToClipboard() {

    window.prompt("Copy to clipboard: Ctrl+C, Enter", document.getElementById('js-quote-text').textContent);
  }

  //I used https://www.boredapi.com/api/activity the bored API which generates random activities for when you're bored. 
  //My extension of the quote machine was to add a button that allows the user to easily copy the activity that is generated to their clipboard. 
  //After doing some research, I found that copying straight to a clipboard can be dangerous and therefore some browsers make it very hard to do.
  //My way around this was to create a pop up window that displays the avtivity generated in a text box already highlighted and as long as the user follows the directions, it makes it super easy to copy. 
