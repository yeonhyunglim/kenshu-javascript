(function() {
  'use strict';

  const buttons = document.getElementsByClassName('button');
  Array.prototype.forEach.call(buttons, el => {
    el.addEventListener('click', () => {
      el.nextElementSibling.classList.toggle('is-active');
    });
  });
})();