

(function(window) {
  window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;  // stop the function
    audio.currentTime = 0; // rewind to start
    audio.play();
    console.log(key, audio)
    key.classList.add('playing')
  });
}(window));

function removeTransition(e) {
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



window.addEventListener('keydown', function(e) {
    console.log(e)
});
