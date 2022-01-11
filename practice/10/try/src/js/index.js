(function () {
  let imageIndex = 0;
  let position = 0;
  const imageWidth = 400;

  const imageList = document.getElementsByClassName('list')[0];
  const prev = document.getElementsByClassName('prev')[0];
  const next = document.getElementsByClassName('next')[0];

  function prevImage() {
    if (imageIndex > 0) {
      imageList.classList.add('is-transition');
      position += imageWidth;
      imageList.style.transform = `translateX(${position}px)`;
      imageIndex = imageIndex - 1;
    }
    if (imageIndex == 0) {
    }
    // move to 3rd image
  }
  function nextImage() {
    if (imageIndex < 2) {
      imageList.classList.add('is-transition');
      position -= imageWidth;
      imageList.style.transform = `translateX(${position}px)`;
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

//.list.is-transition {transition: margin-left .3s;} 3초가 적용 안됨.
// translateX 공부하기
// 1에서 3, 3에서 1 아직 구현 안함
