(function() {
  var mainImg = $('.main-img');

  var thumbImgs = $('.thumb-item-img');

  function removeAllActiveClass () {
    thumbImgs.each(function() {
      $(this).removeClass('is-active');
    });
  };

  function addActiveClass (el) {
    el.addClass(('is-active'));
  };

  thumbImgs.each(function() {
    $(this).on('mouseover', function() {
      var thumbImgSrc = $(this).attr('src');
      var convertedImgSrc = thumbImgSrc.replace('_small', '_large');
      removeAllActiveClass();
      addActiveClass($(this));
      mainImg.attr('src', convertedImgSrc);
    });
  });
})()