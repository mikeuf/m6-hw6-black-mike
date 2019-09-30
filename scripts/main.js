
var buttonList = document.getElementsByClassName('button');

for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener('mouseover', changeBackgroundColor)
  buttonList[i].addEventListener('mousedown', showStartOverButton)
}

buttonList[0].addEventListener('mousedown', printNoCigar)
buttonList[1].addEventListener('mousedown', printWinner)
buttonList[2].addEventListener('mousedown', printOops)


/* Change background color of all buttons on mouseover event */
function changeBackgroundColor() {
  for (var i = 0; i < buttonList.length; i++) {
    buttonList[i].style.backgroundColor = 'cyan';
  }
}


function printNoCigar() {
  var newP = document.createElement('p');
  newP.innerHTML = 'Oooh - so close, but no cigar';

  var insertionPoint = document.getElementById('messages');
  insertionPoint.appendChild(newP);

  showStartOverButton();
}


function printWinner() {
  var newP = document.createElement('p');
  newP.innerHTML = 'DING DING DING - We have a winner';

  var insertionPoint = document.getElementById('messages');
  insertionPoint.appendChild(newP);

  showStartOverButton();
}


function printOops() {
  var newP = document.createElement('p');
  newP.innerHTML = 'Oops, butter luck next time';

  var insertionPoint = document.getElementById('messages');
  insertionPoint.appendChild(newP);

  showStartOverButton();
}

function showStartOverButton() {
  var startOverButton = document.getElementById('start-over-button');
  startOverButton.classList.remove('hidden');

}









