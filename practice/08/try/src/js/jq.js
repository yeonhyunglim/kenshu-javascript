(function() {
    'use strict';
    
    let listElement = $('#list');

    let URL = 'https://jsonplaceholder.typicode.com/posts';

    function createItem (jsonObject) {
        var item = $('<li></li>');
        item.append($('<h3>' + jsonObject.title + '</h3>')); //{key: value}에서 jsonObject.title은 key가 title인 value의 값을 가져옴
        item.append($('<p>' + jsonObject.body + '</p>')); // {key: value}에서 json.Object.body는 key가 body인 value의 값을 가져옴
        return item; // <li>라는 요소를 만들고, 그 안에 <h3>요소와 <p>요소를 투입한 후에 <li>를 반환
      }
    
      function insertElements (json) {
        $.each(json, function(_, value) {
          listElement.append(createItem(value)); // listElement라는 요소 안의 맨 뒤에 투입하고 싶은 값을 반환하는 createItem(value)라는 함수를 지정    
      }

    $.ajax(URL)
    .done(function(json) {
        insertElements(json);
    }).fail(function(err) {
        throw new Error(err);
    })
})();

// $.each( collection, callback(index, value) )
//.append( function(index) ) -- マッチした各要素内の一番後ろに挿入したいHTML文字列, DOM要素, jQueryオブジェクトを返す関数を指定します。 関数が受け取る引数indexは、マッチした要素の番号を示します。