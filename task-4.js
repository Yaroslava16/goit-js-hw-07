const counterValue = document.querySelector('#value');

let counter = 0;

const btnDecrement = document.getElementById('counter').firstElementChild;

btnDecrement.addEventListener('click', onBtnDecrementClick);

function onBtnDecrementClick() {
  counter -= 1;
  counterValue.textContent = counter;
}

const btnIncrement = document.getElementById('counter').lastElementChild;

btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnIncrementClick() {
  counter += 1;
  counterValue.textContent = counter;
}
