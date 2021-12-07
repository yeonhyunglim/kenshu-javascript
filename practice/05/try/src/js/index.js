(function(){
    const input = document.getElementById('input');
    const text = document.getElementById('text');
    const searchTerm = 'yes';

    input.addEventListener('keyup', event => { // inputに 'keyup'という キーボード関連のイベントを生成
        if (event.currentTarget.value.indexOf(searchTerm)!== -1) { // ここで、currentTargetは　input elementを指す
            text.textContent = event.currentTarget.value;
        } else {
            text.textContent = '';
        };
    }); 
})();　

// `event.currentTarget.value`는 여기서 `input.value`를 의미함.
// `.indexOf`는 `string(문자열)`에만 사용할 수 있음.
// `console.log(typeof(input.value));` 를 해보면 `string`이 출력됨을 확인할 수 있음.

// `.currentTarget`은 event handler된 곳을 가리키고, `.target`은 event가 발생하는 곳을 가리킨다.
// 즉, `.target`은 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소를 반환한다.
// 하지만 `.currentTarget`은 이벤트가 부착된 부모의 위치를 반환한다.


/* 次のようにinput.valueでも動くのだが、
一般的には event.target.valueから取得する方が良いので、
currentTarget.valueを使用すること！

(function(){
    const input = document.getElementById('input');
    const text = document.getElementById('text');
    const searchTerm = 'yes';

    input.addEventListener('keyup', () => {
        if (input.value.indexOf(searchTerm)!== -1) { 
            text.textContent = input.value;
        } else {
            text.textContent = '';
        };
    }); 
})();
*/
