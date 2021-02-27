const input = document.querySelector('#validation-input');

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
  let inputLength = event.currentTarget.value.length;
  let dataLength = Number(this.getAttribute('data-length'));

  if (inputLength === dataLength) {
    input.classList.remove('invalid');
    return input.classList.add('valid');
  }
  input.classList.remove('valid');
  return input.classList.add('invalid');
}
