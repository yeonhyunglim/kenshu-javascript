(function () {
  var button = $('#button');
  var typeText = $('.text--type');
  var classText = $('.text--class');

  button.on('click', function() {
    
    // button.data('type')での取得も可
    var type = button.attr('data-type');
    var className = button.attr('class');

    typeText.text(type);
    classText.text(className);

    /*
    クリックしたエレメントからそのまま取得する場合

    var type = $(this).attr('data-type');
    var className = $(this).attr('class');
    typeText.text(type);
    classText.text(className);
    */
  });
})()