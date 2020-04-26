(function() {
  'use strict';

  const inputElement = document.getElementById('input');
  const textElement = document.getElementById('text');
  const searchText = 'yes';

  inputElement.addEventListener('keyup', event => {
    if(event.currentTarget.value.indexOf(searchText) > -1) {
      textElement.textContent = event.currentTarget.value;
    } else {
      textElement.textContent = '';
    };
  });
})();