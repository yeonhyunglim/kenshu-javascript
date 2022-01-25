$(function () {
  // elements
  const imageList = $('.list');
  let imageItems = $('.item');
  const next = $('.next');
  const prev = $('.prev');

  // values
  const currentIndex = 1;
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

  function moveToNextItem() {}

  function moveToPrevItem() {}

  function transitionEnd() {}

  makeClone();
  setFirstNode();
});
