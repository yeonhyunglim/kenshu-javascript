$(function () {
  // elements
  const imageList = $('.list');
  let imageItems = $('.item');
  const next = $('.next');
  const prev = $('.prev');

  // values
  let currentIndex = 1;
  const itemWidth = imageItems.outerWidth();
  let itemLength = imageItems.length;

  // functions
  function makeClone() {
    imageItems.first().clone(true).appendTo(imageList);
    imageItems.last().clone(true).prependTo(imageList);
  }

  function setFirstNode() {
    imageList.css('margin-left', '-' + itemWidth + 'px');
  }

  function moveToNextItem() {
    if (currentIndex >= itemLength - 1) return;
    currentIndex++;
    imageList.addClass('is-transition');
    imageList.css('margin-left', '-' + currentIndex * itemWidth + 'px');
  }

  function moveToPrevItem() {
    if (currentIndex <= 0) return;
    currentIndex--;
    imageList.addClass('is-transition');
    imageList.css('margin-left', '-' + currentIndex * itemWidth + 'px');
  }

  function transitionEnd() {
    if (currentIndex == itemLength - 1) {
      currentIndex = 1;
      imageList.removeClass('is-transition');
      imageList.css('margin-left', '-' + currentIndex * itemWidth + 'px');
    }
    if (currentIndex == 0) {
      currentIndex = itemLength - 2;
      imageList.removeClass('is-transition');
      imageList.css('margin-left', '-' + currentIndex * itemWidth + 'px');
    }
  }

  // Call functions
  makeClone();
  setFirstNode();

  // Update Variables
  imageItems = $('.item');
  itemLength = imageItems.length;

  // carousel event
  next.on('click', moveToNextItem);
  prev.on('click', moveToPrevItem);

  // transition end event
  imageList.on('transitionend', transitionEnd);
});
