const inputEl = document.querySelector('#controls').firstElementChild;
console.log(inputEl);

inputEl.addEventListener('input', onInputText);

const btnRenderEl = document.querySelector('#controls').children[1];
console.log(btnRenderEl);

btnRenderEl.addEventListener('click', onBtnRenderClick);

const btnDestroyEl = document.querySelector('#controls').lastElementChild;
console.log(btnDestroyEl);

btnDestroyEl.addEventListener('click', onBtnDestroyClick);

function onInputText(event) {
  let textLength = event.currentTarget.value.length;
}

function onBtnRenderClick() {}

function onBtnDestroyClick() {}

function createBoxes(amount) {
  const box = document.createElement('div');
  let width = 30;
  let height = 30;
  box.style.width = `${width}px`;
  box.style.height = `${height}px`;
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
}
