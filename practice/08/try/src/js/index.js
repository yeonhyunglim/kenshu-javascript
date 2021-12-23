(function () {
    'use strict';

    const ulList = document.getElementById('list');

    var requestURL = 'https://jsonplaceholder.typicode.com/posts';
    var request = new XMLHttpRequest();

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
        var titleBody = request.response;
        showTitleBody(titleBody);
    }

    function showTitleBody(jsonObj) {
        for (var i = 0; i < jsonObj.length; i++) {
            var myLi = document.createElement('li');
            ulList.appendChild(myLi);

            var myH3 = document.createElement('h3');
            myH3.textContent = jsonObj[i]['title'];
            myLi.appendChild(myH3);

            var mypara = document.createElement('p');
            mypara.textContent = jsonObj[i]['body'];
            myLi.appendChild(mypara); 
        }
    }

})();

// for 반복문 말고 for each를 사용할 수 있을 듯. 전에 했던 것 참고해봅시다
// fetch API는 아직 안함.
// array 안에 object야. [{}, {}, ...]