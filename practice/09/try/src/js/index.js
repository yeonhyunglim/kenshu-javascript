(function () {
  'use strict';

  var mainImg = document.getElementsByClassName('main-img')[0];
  var thumbImgs = document.getElementsByClassName('thumb-item-img');

  Array.prototype.forEach.call(thumbImgs, function (currentImage) {
    currentImage.addEventListener('mouseenter', () => {
      var activeThumbImg = document.getElementsByClassName('is-active')[0];
      activeThumbImg.classList.remove('is-active');
      currentImage.classList.add('is-active');
      mainImg.setAttribute('src', currentImage.getAttribute('src').replace('_small', '_large'));
    });
  });
})();

/* var activeThumbImg = document.getElementsByClassName('is-active')[0]를
global 변수로 지정하면 초기에 class ='is-active' 되어있던 thumb-item-img 하나만 지워지고
currenImage.classList.add('is-active')로 class를 부여한 이미지들의 class는 지울 수가 없음! */
