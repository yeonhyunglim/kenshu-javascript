(function() {
    'use strict';

    const button = document.getElementById('button'); // <button id="button" data-type="register" class="btn">登録</button>
    const textType = document.getElementsByClassName('text--type')[0]; // <p class="text--type"></p>
    const textClass = document.getElementsByClassName('text--class')[0]; // <p class="text--class"></p>

    button.addEventListener('click', () => { 
        textType.textContent = button.getAttribute('data-type');
        /* Set the element's text content.
        The HTML for text--type is now:
        <p class="text--type">register</p> */
        textClass.textContent = button.getAttribute('class');
        /* Set the element's text content.
        The HTML for text--type is now:
        <p class="text--class">btn</p> */
    }) 
})();
