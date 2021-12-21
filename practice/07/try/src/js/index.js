(function() {
  'use strict';

  const form = document.getElementById('form');

  const formElements = {
    name: form.name,
    mail: form.mail,
    gender: form.gender,
    age: form.age,
    term: form.term,
  };

  const formElementsArray = Object.values(formElements);

  const errorText = document.getElementById('error');

  function isFormElementsFilled () {
    return formElementsArray.filter((el) => {
      if(el.type === 'checkbox') {
        return el.checked === false;
      } else {
        return el.value === '';
      }
    }).length === 0; // 길이가 0이면 빈 배열. 즉, 길이가 0라는 것은 체크가 안되어 있거나 값이 ''인 el이 없다는 뜻. 아무것도 array에 filter되어 반환되지 않아 빈 배열임. 
  };

  function addActiveToError () {
    errorText.classList.add('is-active');
  };

  form.addEventListener('submit', event => {
    event.preventDefault();

    if(isFormElementsFilled()) {
      event.currentTarget.submit();
    } else {
      addActiveToError();
    }
  });

})();