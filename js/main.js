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
    balloonContent: 'Милые штуки ручной работы',
  },
  {
    iconLayout: 'default#image',
    iconImageHref: 'img/icon-map-pin.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-30, -65]
  });
  map.geoObjects.add(placemark);
}
