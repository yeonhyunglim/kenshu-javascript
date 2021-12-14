(function () {
    const form = $('#form');

    const formElements = {
        name: $('input[name=name]'),
        mail: $('input[name=mail]'),
        gender: $('input[name=gender]'),
        age: $('select[name=age]'),
        term: $('input[name=term]'),
    }

    const errorNotice = $('#error');

    function AreformElemenentsFilled () {
        if(!formElements.name.value) {
            return false;
        } else if (!formElements.mail.value) {
            return false;
        } else if (!formElements.gender.prop('checked')) {
            return false;
        } else if (!formElements.age.value) {
            return false;
        } else if (!formElements.term.prop('checked')) {
            return false;
        } else {
            return true;
        };
    };

    function ActivatingErrorNotice () {
        errorNotice.addClass('is-active');
    };
    
// 폼 제출하거나 add class

})();


// 모두 다 입력했을 때, form의 submit
// 하나라도 충족안되면 add class