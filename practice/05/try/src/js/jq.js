(function() {
    var input = $('#input'); // document.getElementById('input')
    var text = $('#text'); // document.getElementById('text')
    var searchTerm = 'yes';
  
    input.on('keyup', function() { // addEventListener('keyup', event =>)
      if($(this).val().indexOf(searchTerm) !== -1) { //currentTarget
        text.text($(this).val()) //textContent
      } else {
        text.text('')
      };
    });
  })();