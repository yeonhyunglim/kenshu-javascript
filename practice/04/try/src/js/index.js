(function() {
    'use strict';

    const buttons = document.getElementsByClassName('button');
    Array.prototype.forEach.call(buttons, function(currentButton) { //forEach 가 buttons라는 유사배열과 function(currentButton)을 파라미터로 가짐
        currentButton.addEventListener('click', () => { // currenButton은 buttons라는 유사 배열의 요소들(각각의 버튼). forEach가 반복되면서 값(요소)이 바뀜.
            currentButton.nextElementSibling.classList.toggle('is-active'); // nextSibling는 NG
            });
    });
})();

// [].forEach.call == Array.prototype.forEach.call
// forEach() 메서드는 주어진 함수를 배열 요소 각각에 대해 실행한다
// .call을 사용하여 유사 배열(여기서는 buttons라는 HTML Collection)에서도 forEach 메서드 사용이 가능!
// function(buttons)라고 해버리면 buttons라는 배열 자체에 이벤트를 추가하거나 클래스를 추가하는 것이 되므로 NG