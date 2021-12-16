(function() {
    'use strict';

    var form = $('#form');
  
    var formElements = {
      name: form.find('input[name=name]'),
      mail: form.find('input[name=mail]'),
      gender: form.find('input:radio[name=gender]'),
      age: form.find('select[name=age]'),
      term: form.find('input:checkbox[name=term]')
    };
  
    var errorText = $('#error');
  
    function isFormElementsFilled () {
      if(formElements.name.val() == ''){
        return false;
      } else if (formElements.mail.val() == '') {
        return false;
      } else if (formElements.gender.is(':checked') == false) {
        return false;
      } else if (formElements.age.val() == '') { //.filter(':selected').text() == '' 
        return false;
      } else if (formElements.term.is(':checked') == false) {
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