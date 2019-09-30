
var buttonList = document.getElementsByClassName('button');

for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].addEventListener("mouseover", changeBackgroundColor)
}

/* Change background color of all buttons on mouseover event */
function changeBackgroundColor() {
for (var i = 0; i < buttonList.length; i++) {
  buttonList[i].style.backgroundColor = "cyan";
}
}


