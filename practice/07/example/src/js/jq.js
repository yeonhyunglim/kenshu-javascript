(function() {
  var form = $('#form');

  var formElements = {
    name: form.find('input[name=name]'),
    mail: form.find('input[name=mail]'),
    gender: form.find('input[name=gender]'),
    age: form.find('select[name=age]'),
    term: form.find('input[name=term]')
  };

  var errorText = $('#error');

  function isFormElementsFilled () {
    if(formElements.name.val() === ''){
      return false;
    } else if (formElements.mail.val() === '') {
      return false;
    } else if (!formElements.gender.prop('checked')) {
      return false;
    } else if (formElements.age.val() === '') {
      return false;
    } else if (!formElements.term.prop('checked')) {
      return false;
    } else {
      return true;
    };
  };

  function addActiveToError () {
    errorText.addClass('is-active');
  };

  form.on('submit', function (event) {
    event.preventDefault();

    if(isFormElementsFilled()) {
      form[0].submit();
    } else {
      addActiveToError();
    }
  });

})();