const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

document.querySelector("html").style.backgroundColor = "red";

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."


var insertX = new Array();
insertX[0] = "Willy the Goblin";
insertX[1] = "Big Daddy";
insertX[2] = "Father Christmas";

var insertY = new Array();
insertY[0] = "the soup kitchen";
insertY[1] = "Disneyland";
insertY[2] = "the White House";

var insertZ = new Array();
insertZ[0] = "spontaneously combusted";
insertZ[1] = "melted into a puddle on the sidewalk";
insertZ[2] = "turned into a slug and crawled away";

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:',xItem);
    newStory = newStory.replaceAll(':inserty:',yItem);
    newStory = newStory.replaceAll(':insertz:',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + " stones";
    const temperature =  Math.round((94-32)*0.5556) + " centigrade";
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}

