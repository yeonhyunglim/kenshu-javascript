(function () {
    'use strict';

    let listElement = document.getElementById('list');

    let URL = 'https://jsonplaceholder.typicode.com/posts';

    function createElements (jsonObj) {
        for (var i = 0; i < jsonObj.length; i++) {
            let item = document.createElement('li');
            listElement.appendChild(item);

            let titleElement = document.createElement('h3');
            titleElement.textContent = jsonObj[i]['title']; // 角括弧を使用した書き方
            item.appendChild(titleElement);

            let bodyElement = document.createElement('p');
            bodyElement.textContent = jsonObj[i]['body']; // 角括弧を使用した書き方
            item.appendChild(bodyElement); 
        }
    }

    fetch(URL)
    .then(data => {
        return data.json();
    }).then(json => {
        createElements(json);
    }).catch(err => {
        throw new Error(err);
    })
})();


// jsonplaceholder는 array 안에 object가 있는 형태 [{}, {}, ...]
// for 반복문 말고 for each를 사용할 수 있음. practice 04 참고하기
// 변수 정의를 할 때 let을 쓰면 컨트롤하기가 더 편하다고 Tuさん이 코텐트 해줌