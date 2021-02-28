let input = document.getElementById('name-input');
let nameSpan = document.getElementById('name-output');

input.addEventListener('input', onInputText);

function onInputText(event) {
  if (input.value === '') {
    nameSpan.innerHTML = 'незнакомец';
  } else {
    nameSpan.innerHTML = input.value;
  }
}
