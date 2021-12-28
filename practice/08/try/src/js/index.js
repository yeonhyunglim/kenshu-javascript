(function () {
    'use strict';

    const listElement = document.getElementById('list');

    const URL = 'https://jsonplaceholder.typicode.com/posts';

    function createElements (jsonObj) {
        for (var i = 0; i < jsonObj.length; i++) {
            var item = document.createElement('li');
            listElement.appendChild(item);

            var titleElement = document.createElement('h3');
            titleElement.textContent = jsonObj[i]['title'];
            item.appendChild(titleElement);

            var bodyElement = document.createElement('p');
            bodyElement.textContent = jsonObj[i]['body'];
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

// for 반복문 말고 for each를 사용할 수 있을 듯. 전에 했던 것 참고해봅시다
// fetch API는 아직 안함.
// array 안에 object야. [{}, {}, ...]