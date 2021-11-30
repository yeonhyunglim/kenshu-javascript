(function() {
    'use strict';
    const button = document.getElementById('button');
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const closeButton = document.getElementById('modal-close');

    function toggleClass () {
        modalOverlay.classList.toggle('is-active');
        modalContent.classList.toggle('is-active');
    };

    button.addEventListener('click', toggleClass); 
    modalOverlay.addEventListener('click', toggleClass);
    closeButton.addEventListener('click', toggleClass);
})(); 

/* 他の方法として
    button.addEventListener('click', () => {
        modalOverlay.classList.add("is-active");
        modalContent.classList.add("is-active");
    });
    
    modalOverlay.addEventListener('click', () => {
        modalOverlay.classList.remove("is-active");
        modalContent.classList.remove("is-active");
    });
    closeButton.addEventListener('click', () => {
        modalOverlay.classList.remove("is-active");
        modalContent.classList.remove("is-active");
    });
もできる */    
