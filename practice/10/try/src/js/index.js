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

  function makeClone() {
    const firstClone = imageItems[0].cloneNode(true); // deep clone 1st item after last item
    const lastClone = imageItems[itemLength - 1].cloneNode(true); // deep clone last item before 1st item

    firstClone.id = 'first-clone';
    lastClone.id = 'last-clone';

    imageList.append(firstClone);
    imageList.prepend(lastClone);
  }

  function setFirstNode() {
    imageList.style.marginLeft = `-${itemWidth}px`;
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
