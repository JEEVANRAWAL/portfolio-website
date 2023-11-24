var i = 0;
var j = 0;
var txt = 'Hi I am <br> Jeevan Rawal <br> Software Developer, Full-Stack Developer <br>'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */
var txt2= "i am a developer and i love to drink coffee.";

var element = document.getElementsByClassName("shrt-intro")[0];

function typeWriter() {
  if (i < txt.length) {
    if (txt.charAt(i) === '<') {
      // If the current character is '<', find the closing '>' and append the tag.
      var closingTagIndex = txt.indexOf('>', i);
      if (closingTagIndex !== -1) {
        element.innerHTML += txt.substring(i, closingTagIndex + 1);
        i = closingTagIndex + 1;
      }
    } else {
      // If it's not '<', append the character.
      element.innerHTML += txt.charAt(i);
      i++;
    }
    setTimeout(typeWriter, speed);
  }
}

typeWriter();

var element2 = document.getElementsByClassName("shrt-intro2")[0];

function typeWriter2(){
  if (j < txt2.length) {
    if (txt2.charAt(j) === '<') {
      // If the current character is '<', find the closing '>' and append the tag.
      var closingTagIndex = txt2.indexOf('>', j);
      if (closingTagIndex !== -1) {
        element2.innerHTML += txt2.substring(j, closingTagIndex + 1);
        j = closingTagIndex + 1;
      }
    } else {
      // If it's not '<', append the character.
      element2.innerHTML += txt2.charAt(j);
      j++;
    }
    setTimeout(typeWriter2, speed);
  }
}


typeWriter2();


// for toggle hammburger nav bar for mobile

function onClickMenu(){
  document.getElementById("menu").classList.toggle("icon");
  document.getElementById("nav").classList.toggle("change");
}
