const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value.trim() === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value.trim();
  }
}

inputEl.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.currentTarget.value.trim() === '') {
    outputEl.textContent = 'Anonymous';
  } else {
    outputEl.textContent = event.currentTarget.value.trim();
  }
}
