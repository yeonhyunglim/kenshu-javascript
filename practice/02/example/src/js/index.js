(function() {
  'use strict';

  const button = document.getElementById('button');
  const typeText = document.getElementsByClassName('text--type')[0];
  const classText = document.getElementsByClassName('text--class')[0];

  button.addEventListener('click', () => {
    typeText.textContent = button.getAttribute('data-type');
    classText.textContent = button.getAttribute('class');
  });
  
  /* 
  クリックしたエレメントからそのまま取得する場合

  button.addEventListener('click', event => {
    typeText.textContent = event.currentTarget.getAttribute('data-type');
    classText.textContent = event.currentTarget.getAttribute('class');
  });
  */
})();