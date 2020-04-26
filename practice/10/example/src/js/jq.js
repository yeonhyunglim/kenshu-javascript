(function() {
  var elements = {
    prev: $('.prev'),
    next: $('.next'),
    list: $('.list'),
    items: $('.item')
  };

  var widthValues = {
    list: elements.list.outerWidth(),
    item: elements.items.outerWidth()
  };

  var isTransitioning = {
    prev: false,
    next: false
  };

  function slidePrev () {
    elements.list.addClass('is-transition');
    elements.list.css({'margin-left': widthValues.item + 'px'});
  };

  function slideNext () {
    elements.list.addClass('is-transition');
    elements.list.css({'margin-left': '-' + widthValues.item + 'px'});
  };

  function slidePrevAfterTransition () {
    elements.list.removeClass('is-transition');
    elements.list.prepend(elements.items[elements.items.length - 1]);
    elements.list.css({'margin-left': '0px'});
    // 更新されているitemsを上書き
    elements.items = $('.item');
    isTransitioning.prev = false;;
  };

  function slideNextAfterTransition () {
    elements.list.removeClass('is-transition');
    elements.list.append(elements.items[0]);
    elements.list.css({'margin-left': '0px'});
    // 更新されているitemsを上書き
    elements.items = $('.item');
    isTransitioning.next = false;
  };

  function addEvent() {
    elements.prev.on('click', function() {
      isTransitioning.prev = true;
      slidePrev();
      elements.list.on('transitionend', () => {
        if(!isTransitioning.prev) return false;
        slidePrevAfterTransition();
      });
    });
    elements.next.on('click', function() {
      isTransitioning.next = true;
      slideNext();
      elements.list.on('transitionend', () => {
        if(!isTransitioning.next) return false;
        slideNextAfterTransition();
      });
    });
  };

  function addInitialStyleToList () {
    elements.list.css({'left': '-' + widthValues.list +'px'});
  };

  function prependAllItems () {
    elements.items.clone().prependTo(elements.list);
    addInitialStyleToList();
  };

  function init () {
    prependAllItems();
    addEvent();
  };

  init();
})();