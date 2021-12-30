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
      } else if (formElements.age.val() == '' ) { //.filter(':selected').text() == ''
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
      event.preventDefault(); // 페이지를 다시 불러오는 것을 방지하기 위해 추가
  
      if(isFormElementsFilled()) {
        form[0].submit(); // form[0]은 첫번째 form을 의미함.
      } else {
        addActiveToError();
      }
    });
  })();

// formElements.age.is(':selected')は選択されているかどうかではなくて、デフォルトで選択するoptionを指定しているだけ！

// form[0]을 form으로 대신해도 무방
// $(this)로도 가능하나 arrow function일때는 불가능함
// function 일때는 $(this) == form이지만 arrow function에서는 $(this) !== form 이기 때문.