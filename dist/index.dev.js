"use strict";

function playSound(e) {
  var audio = document.querySelector("audio[data-key=\"".concat(e.keyCode, "\"]"));
  var key = document.querySelector(".key[data-key=\"".concat(e.keyCode, "\"]"));
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});
window.addEventListener('keydown', playSound);