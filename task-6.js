const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputLength = this.value.length;
  let dataLength = this.getAttribute('data-length');

  if (inputLength === dataLength) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
