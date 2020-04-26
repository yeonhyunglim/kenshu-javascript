(function() {
  var URL = 'https://jsonplaceholder.typicode.com/posts';

  var parentListElement = $('#list');

  function createItem (jsonItem) {
    var item = $('<li></li>');
    item.append($('<h3>' + jsonItem.title + '</h3>'));
    item.append($('<p>' + jsonItem.body + '</p>'));
    return item;
  }

  function insertElements (json) {
    $.each(json, function(_, item) {
      parentListElement.append(createItem(item));
    });
  }

  $.ajax(URL)
    .done(function(json) {
      insertElements(json);
    }).fail(function(err) {
      throw new Error(err);
    })
})();