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

  const formElementsArray = Object.entries(formElements);

  const errorText = document.getElementById('error');

  function isFormElementsFilled () {
    // Objectを配列に変換してiterateし、
    // filterを使って項目のチェックをして、falseの場合は配列に返す
    // 配列の長さが0である場合にtrueをそうでない場合はfalseを返す
    return formElementsArray.filter(([_, el]) => {
      // checkboxは別のチェック
      if(el.type === 'checkbox') {
        return el.checked === false;
      } else {
        return el.value === '';
      }
    }).length === 0;
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