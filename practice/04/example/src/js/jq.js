(function() {
  const buttons = $('.button');
  $.each(buttons, function(el) {
    $(this).on('click', () => {
      $(this).next().toggleClass('is-active');
    });
  });
})()