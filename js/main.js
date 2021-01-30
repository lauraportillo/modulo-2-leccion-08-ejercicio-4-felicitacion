'use strict';

const faceElement = document.querySelector('.js-face');
const updateElement = document.querySelector('.js-update');
const happyElement = document.querySelector('.js-happy');
const resetElement = document.querySelector('.js-reset');

function handleWinkEyeBtn() {
  const updateValue = updateElement.value;
  faceElement.innerHTML = ';)';
  happyElement.innerHTML = 'zorionak!!!!!';
  happyElement.classList.add('zorionak');
}

function handleReset() {
  const resetValue = resetElement.value;
  faceElement.innerHTML = ':)';
  happyElement.classList.remove('zorionak');
  happyElement.innerHTML = '';
}

updateElement.addEventListener('click', handleWinkEyeBtn);
resetElement.addEventListener('click', handleReset);
