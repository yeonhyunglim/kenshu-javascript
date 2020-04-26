(function() {
  'use strict';

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const parentListElement = document.getElementById('list');

  function createItem (jsonItem) {
    "use strict";

    const item = document.createElement('li');

    const titleElement = document.createElement('h3');
    titleElement.textContent = jsonItem.title;

    const bodyElement = document.createElement('p');
    bodyElement.textContent = jsonItem.body;

    item.appendChild(titleElement);
    item.appendChild(bodyElement);

    return item;
  }

  function insertElements (json) {
    Array.prototype.forEach.call(json, obj => {
      parentListElement.append(createItem(obj))
    })
  }

  fetch(URL)
    .then(data => {
      return data.json()
    }).then(json => {
      insertElements(json);
    }).catch(err => {
      throw new Error(err);
    })
})()