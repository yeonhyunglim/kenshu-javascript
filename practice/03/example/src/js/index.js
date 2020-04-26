(function() {
  'use strict';

  const button = document.getElementById('button');
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');
  const closeButton = document.getElementById('modal-close');

  /*
  function toggleClasses () {
    overlay.classList.toggle('is-active');
    content.classList.toggle('is-active');
  }
  */

  button.addEventListener('click', () => {
    overlay.classList.add('is-active');
    content.classList.add('is-active');
  });

  overlay.addEventListener('click', () => {
    overlay.classList.remove('is-active');
    content.classList.remove('is-active');
  });

  closeButton.addEventListener('click', () => {
    overlay.classList.remove('is-active');
    content.classList.remove('is-active');
  });
})()