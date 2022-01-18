(function () {
  'use strict';
  const imageList = document.getElementsByClassName('list')[0];
  const imageItem = document.getElementsByClassName('item');
  const prev = document.getElementsByClassName('prev')[0];
  const next = document.getElementsByClassName('next')[0];

  let imageIndex = 0;
  let position = 0;
  const imageWidth = 400;
  const imageLength = imageItem.length;

  function prevImage() {
    if (imageIndex > 0) {
      position += imageWidth;
      imageList.style.marginLeft = `${position}px`;
      imageList.classList.add('is-transition');
      imageIndex = imageIndex - 1;
    } else {
      imageList.insertBefore(imageList.lastElementChild, imageList.firstElementChild);
    }
  }
  function nextImage() {
    if (imageIndex < imageLength - 1) {
      position -= imageWidth;
      imageList.style.marginLeft = `${position}px`;
      imageList.classList.add('is-transition');
      imageIndex = imageIndex + 1;
    } else {
      imageList.appendChild(imageList.firstElementChild);
    }
  }
  function init() {
    prev.addEventListener('click', prevImage);
    next.addEventListener('click', nextImage);
  }
  init();
})();

// 1에서 3, 3에서 1 아직 구현 안함
/*  function endTransition(prevOrNext) {
    imageList.removeAttribute('style');
    prevOrNext == 'prev' ? imageList.insertBefore(imageList.lastElementChild, imageList.firstElementChild) : imageList.appendChild(imageList.firstElementChild);
  } */
/*     imageList.ontransitioned = () => {
      endTransition; */
/*   function endTransition(prevOrNext) {
    imageList.removeAttribute('style'); */
