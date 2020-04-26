(function() {
  var formElements = {
    name: $('input[name=name]'),
    gender: $('input[name=gender]'),
    button: $('#button'),
  }
  var textElements = {
    wrapper: $('#text-wrapper'),
    name: $('#name-text'),
    gender: $('#gender-text'),
  }

  formElements.button.on('click', function() {
    textElements.wrapper.addClass('is-active');
    textElements.name.text(formElements.name.val());
    formElements.gender.each(function () {
      if($(this).prop('checked')) {
        textElements.gender.text($(this).val());
      }
    })
  });
})();