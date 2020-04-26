(function() {
  'use strict';

  const mainImg = document.getElementsByClassName('main-img')[0];

  const thumbImgs = document.getElementsByClassName('thumb-item-img');

  function removeAllActiveClass () {
    Array.prototype.forEach.call(thumbImgs, el => {
      el.classList.remove('is-active');
    });
  };

  function addActiveClass (el) {
    el.classList.add('is-active');
  };

  Array.prototype.forEach.call(thumbImgs, el => {
    el.addEventListener('mouseover', event => {
      const thumbImgSrc = event.currentTarget.getAttribute('src');
      const convertedImgSrc = thumbImgSrc.replace('_small', '_large');
      removeAllActiveClass();
      addActiveClass(el);
      mainImg.setAttribute('src', convertedImgSrc);
    });
  });
})();