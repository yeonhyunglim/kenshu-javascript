(function() {
    'use strict';

    const button = document.getElementById('button'); // ここで定数がIDと一緒でも大丈夫ですか？
    const textType = document.getElementsByClassName('text--type')[0];
    const textClass = document.getElementsByClassName('text--class')[0];

    button.addEventListener('click', () => { 
        textType.textContent = /* `data-type` 属性（"register"） */ ;
        textClass.textContent = /* `class名` ("btn")*/ ;
    }) 
})();
