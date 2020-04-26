(function() {
  'use strict';

  const form = document.getElementById('form');
  const formElements = {
    name: form.name,
    gender: form.gender,
    button: form.button
  };

  const textElements = {
    wrapper: document.getElementById('text-wrapper'),
    name: document.getElementById('name-text'),
    gender: document.getElementById('gender-text')
  };

  formElements.button.addEventListener('click', () => {
    textElements.wrapper.classList.add('is-active');
    textElements.name.textContent = formElements.name.value;
    textElements.gender.textContent = formElements.gender.value;
  });
})();