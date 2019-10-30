window.onload = () => {
  // Input, textarea, select, radiobutton vieme vytahovat value
  // z ostatnych elementov viem vytahovat len text

  const input = document.getElementById('vstup');
  const btns = document.querySelectorAll('#options div button');

  btns.forEach(moznost => {
    moznost.classList.add('disabled');
  });

  input.addEventListener('keyup', e => {
    console.log(e.target.value);

    e.target.value = e.target.value.trim();
    if (
      e.target.value.length === 1 &&
      isNaN(e.target.value) &&
      e.target.value !== '-' &&
      e.target.value !== '.'
    ) {
      e.target.value = null;
    }

    const inputValue = e.target.value;

    const inputLastValue = inputValue.slice(
      inputValue.length - 1,
      inputValue.length
    );

    const inputLastCurrentValue = inputValue.slice(
      inputValue.length - 2,
      inputValue.length - 1
    );

    const validInput = ['*', '/', '+', '-', '.'];

    if (
      e.target.value.includes(',') ||
      (validInput.includes(inputLastCurrentValue) &&
        validInput.includes(inputLastValue))
    ) {
      e.target.value = e.target.value.slice(0, e.target.value.length - 1);
    }

    btns.forEach(moznost => {
      if (vstup.value.length > 0) {
        moznost.classList.remove('disabled');
      } else {
        moznost.classList.add('disabled');
      }
    });
  });

  btns.forEach(moznost => {
    moznost.addEventListener('click', e => {
      if (e.target.textContent === 'Delete') {
        vstup.value = null;
      } else if (e.target.textContent === '=') {
        vstup.value = eval(vstup.value);
      } else {
        vstup.value += e.target.textContent;
      }
      vstup.focus();
    });
  });
};
