const counterValue = document.querySelector('#value');

const btnDecrement = document.getElementById('counter').firstElementChild;

btnDecrement.addEventListener('click', onBtnDecrementClick);

function onBtnDecrementClick() {
  const value = btnDecrement.textContent;
  console.log(value);
  const magic = counterValue.textContent
    .split('')
    .reduce((total, num) => total + num, -1)
    .splice(0, 1)
    .join('');
  console.log(magic);
  return counterValue.append(...magic);
}

console.log(btnDecrement);

const btnIncrement = document.getElementById('counter').lastElementChild;

btnIncrement.addEventListener('click', onBtnIncrementClick);

function onBtnIncrementClick() {
  const value = btnIncrement.textContent;
  console.log(value);
}

console.log(btnIncrement);

const increment = () => {};

const decrement = () => {};
