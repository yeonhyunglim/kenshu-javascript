(function() {
  'use strict';

  const elements = {
    prev: document.getElementsByClassName('prev')[0],
    next: document.getElementsByClassName('next')[0],
    list: document.getElementsByClassName('list')[0],
    items: document.getElementsByClassName('item')
  };

  const widthValues = {
    list: elements.list.clientWidth,
    item: elements.items[0].clientWidth
  };

  const isTransitioning = {
    prev: false,
    next: false
  };

  // 受け取った引数のelementを最初の子要素の前に挿入する
  function prependItemToList (itemElement) {
    elements.list.insertBefore(itemElement, elements.list.firstElementChild);
  };

  // 受け取った引数のelementを最後の子要素の後に挿入する
  function appendItemToList (itemElement) {
    elements.list.appendChild(itemElement);
  };

  // .prevを押した時に前の要素を表示させる処理
  function slidePrev () {
    elements.list.classList.add('is-transition');
    elements.list.style.marginLeft = `${widthValues.item}px`;
  };

  // .nextを押した時に次の要素を表示させる処理
  function slideNext() {
    elements.list.classList.add('is-transition');
    elements.list.style.marginLeft = `-${widthValues.item}px`;
  };

  // transionの終了後の処理
  function slidePrevAfterTransition () {
    // list内最後の要素を最初の要素に移動させる
    prependItemToList(elements.items[elements.items.length - 1]);

    // margin-leftを戻してtransitionのクラスを削除
    elements.list.style.marginLeft = `0px`;
    elements.list.classList.remove('is-transition');

    // フラグに終了を保持
    isTransitioning.prev = false;
  };

  // transionの終了後の処理
  function slideNextAfterTransition () {
    // list内最初の要素を最後の要素に移動させる
    appendItemToList(elements.items[0]);

    // margin-leftを戻してtransitionのクラスを削除
    elements.list.style.marginLeft = '0px';
    elements.list.classList.remove('is-transition');

    // フラグに終了を保持
    isTransitioning.next = false;
  };

  // イベントの追加
  function addEvent() {
    // prevクリック時のイベント
    elements.prev.addEventListener('click', () => {
      slidePrev();
      isTransitioning.prev = true;

      // cssで付与したtransionの終了で呼び出す
      elements.list.addEventListener('transitionend', () => {
        // クラスがremoveされた後に関数内の処理を走らせないため
        if(!isTransitioning.prev) return false;

        slidePrevAfterTransition();
      })
    })
    // nextクリック時のイベント
    elements.next.addEventListener('click', () => {
      isTransitioning.next = true;
      slideNext();

      // cssで付与したtransionの終了で呼び出す
      elements.list.addEventListener('transitionend', () => {
        // クラスがremoveされた後に処理を走らせないため
        if(!isTransitioning.next) return false;

        slideNextAfterTransition();
      });
    });
  };

  // 最初にlistに付与するスタイル
  function addInitialStyleToList () {
    elements.list.style.left = `-${widthValues.list}px`;
  }

  // listの最初のitemの前にitem全てのクローンを挿入する
  function prependAllItems () {
    // listのクローンを生成し、itemを抽出した後、配列化して逆順にする
    const clonedItems = Array.from(elements.list.cloneNode(true).getElementsByClassName('item')).reverse();

    // 逆順にしたitem配列のクローンを
    Array.prototype.forEach.call(clonedItems, item => {
      prependItemToList(item);
    });

    // 追加した分をずらすためにスタイルの付与をする
    addInitialStyleToList();
  };

  // 最初に呼び出す関数のまとまり
  function init () {
    prependAllItems();
    addEvent();
  };

  init();
})()