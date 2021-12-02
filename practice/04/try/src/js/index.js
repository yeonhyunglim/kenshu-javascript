(function() {
    'use strict';

    const buttons = document.getElementsByClassName('button');
    Array.prototype.forEach.call(buttons, function(buttons) { 
        buttons.addEventListener('click', () => {
            buttons.nextElementSibling.classList.toggle('is-active'); // nextSibling is NG
            });
    });
})();

//[].forEach.call == Array.prototype.forEach.call
