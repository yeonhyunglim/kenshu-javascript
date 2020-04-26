(function() {
  var inputElement = $('#input');
  var textElement = $('#text');
  var searchText = 'yes';

  inputElement.on('keyup', function() {
    if($(this).val().indexOf(searchText) > -1) {
      textElement.text($(this).val())
    } else {
      textElement.text('');
    };
  });
})();