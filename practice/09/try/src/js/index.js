(function () {
  'use strict';

  var mainImg = document.getElementsByClassName('main-img')[0];
  var thumbImgs = document.getElementsByClassName('thumb-item-img');

  function removeAllActiveClass() {
    Array.prototype.forEach.call(thumbImgs, function (el) {
      el.classList.remove('is-active');
    });
  }

  Array.prototype.forEach.call(thumbImgs, function (currentImage) {
    currentImage.addEventListener('mouseenter', () => {
      removeAllActiveClass();
      currentImage.classList.add('is-active');
      mainImg.setAttribute('src', currentImage.getAttribute('src').replace('_small', '_large'));
    });
  });
})();
