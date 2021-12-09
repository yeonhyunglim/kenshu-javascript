(function () {
    const name = $('#name');
    const button = $('#button');
    const nameText = $('#name-text');
    const genderText= $('#gender-text');
    const textWrapper = $('#text-wrapper');

    button.on('click', function () {
        nameText.text(name.val());
        genderText.text($('input:radio[name=gender]:checked').val());
        textWrapper.addClass('is-active');
    });
})();
