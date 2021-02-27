const refs = {
  input: document.querySelector('#name-input'),
  nameSpan: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', onInputText);

function onInputText(event) {
  refs.nameSpan.textContent = event.currentTarget.value;
}
