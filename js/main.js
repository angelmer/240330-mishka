/**
 * Created by merimax on 07.10.2017.
 */
ymaps.ready(init);

function init() {
  var map = new ymaps.Map('map', {
    center: [59.938631, 30.323055]
    , zoom: 16.5,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });
  var placemark = new ymaps.Placemark([59.938631, 30.323055], {
      hintContent: 'Mishka',
      balloonContent: 'Милые штуки ручной работы'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [46, 57],
      iconImageOffset: [-30, -65]
    });
  map.geoObjects.add(placemark);
}

var toggler = document.querySelector('.main-menu__toggle');
var mainMenu = document.querySelector('.main-menu');
mainMenu.classList.remove('main-menu--nojs');
toggler.addEventListener('click', function (event) {
  event.preventDefault();
  mainMenu.classList.contains('main-menu--closed') ?
    (mainMenu.classList.add('main-menu--opened'),
      mainMenu.classList.remove('main-menu--closed')) :
    (mainMenu.classList.add('main-menu--closed'),
      mainMenu.classList.remove('main-menu--opened'))
});

var order = document.querySelector('.best-goods__price-link');
var modal = document.querySelector('.modal');
var modalOverlay = document.querySelector('.modal__overlay');
order.addEventListener('click', function () {
  event.preventDefault();
  modal.classList.add('modal--open');
  modalOverlay.classList.add('modal--open')
});

modalOverlay.addEventListener('click', function () {
  modalOverlay.classList.remove('modal--open');
  modal.classList.remove('modal--open');
});
