(function () {
  let imageIndex = 0;
  let position = 0;
  const imageWidth = 400;

  const imageList = document.getElementsByClassName('list')[0];
  const prev = document.getElementsByClassName('prev')[0];
  const next = document.getElementsByClassName('next')[0];

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
    if (imageIndex < 2) {
      position -= imageWidth;
      imageList.style.marginLeft = `${position}px`;
      imageList.classList.add('is-transition');
      imageIndex = imageIndex + 1;
    }
    if (imageIndex == 2) {
      // move to 1st image
    }
  }
  function init() {
    prev.addEventListener('click', prevImage);
    next.addEventListener('click', nextImage);
  }
  init();
})();

// 1에서 3, 3에서 1 아직 구현 안함
