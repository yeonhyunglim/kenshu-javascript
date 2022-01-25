(function () {
  'use strict';
  //elements
  const imageList = document.querySelector('.list');
  const next = document.getElementsByClassName('next')[0];
  const prev = document.getElementsByClassName('prev')[0];
  let imageItems = document.querySelectorAll('.item');

  //values
  let currentIndex = 1;
  const itemWidth = imageItems[currentIndex].clientWidth;
  let itemLength = imageItems.length;

  // defining fuctions
  function makeClone() {
    const firstClone = imageItems[0].cloneNode(true); // deep clone the 1st item
    const lastClone = imageItems[itemLength - 1].cloneNode(true); // deep clone the last itme (here, it is the 3rd one)

    imageList.append(firstClone);
    imageList.prepend(lastClone);
  }

  function setFirstNode() {
    imageList.style.marginLeft = `-${itemWidth}px`; // 클론된 요소들이 반영되기 전. 그래서 초기의 첫번째 요소인 숫자 1.
  }

  function moveToNextItem() {
    if (currentIndex >= itemLength - 1) return;
    currentIndex++;
    imageList.style.marginLeft = `-${itemWidth * currentIndex}px`;
    imageList.classList.add('is-transition');
  }

  function moveToPrevItem() {
    if (currentIndex <= 0) return;
    currentIndex--;
    imageList.style.marginLeft = `-${itemWidth * currentIndex}px`;
    imageList.classList.add('is-transition');
  }

  // transition end
  imageList.addEventListener('transitionend', () => {
    if (imageItems[currentIndex].id === 'first-clone') {
      currentIndex = 1;
      imageList.classList.remove('is-transition');
      imageList.style.marginLeft = `-${currentIndex * itemWidth}px`;
    }
    if (imageItems[currentIndex].id === 'last-clone') {
      currentIndex = itemLength - 2;
      imageList.classList.remove('is-transition');
      imageList.style.marginLeft = `-${currentIndex * itemWidth}px`;
    }
  });

  makeClone();

  setFirstNode();

  imageItems = document.querySelectorAll('.item');
  itemLength = imageItems.length;

  next.addEventListener('click', moveToNextItem);
  prev.addEventListener('click', moveToPrevItem);
})();
