(function () {
    'use strict';
    
    const formElements = {
        nameInput: $('input[name=name]'),
        submitButton: $('#button')
    }
    const textElements = {
        nameText: $('#name-text'),
        genderText: $('#gender-text'),
        textWrapper: $('#text-wrapper')
    }

    formElements.submitButton.on('click', function () {
        textElements.nameText.text(formElements.nameInput.val());
        textElements.genderText.text($('input:radio[name=gender]:checked').val());
        textElements.textWrapper.addClass('is-active');
    });
})();