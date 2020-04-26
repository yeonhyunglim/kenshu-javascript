(function() {
  const button = $('#button');
  const overlay = $('#modal-overlay');
  const content = $('#modal-content');
  const closeButton = $('#modal-close');

  function toggleClasses () {
    overlay.toggleClass('is-active');
    content.toggleClass('is-active');
  }

  button.on('click', () => {
    toggleClasses()
  });

  overlay.on('click', () => {
    toggleClasses();
  });

  closeButton.on('click', () => {
    toggleClasses();
  });
})()