$(function () {
    $(".thumb-item-img").mouseenter(function () { // 클래스명이 'thumb-item-img'인 이미지 요소에 마우스를 갖다대면
    $(".is-active").removeClass('is-active'); // "is-active" 클래스를 가지고 있는 요소는 'is-active' 클래스를 삭제하고
    $(this).addClass('is-active'); // 선택된 요소(마우스를 갖다댄 요소)에는 'is-active' 클래스를 부여한다
    $(".main-img").attr('src', $(this).attr("src").replace("_small", "_large")); // 클래스 명이 'main-img'인 이미지의 src를 바꾼다
  });
});