;(function(window, document, undefined) {

  'use strict';

  var baseImagePath = './assets/img/';

  var places = [
    {name: 'São Paulo', image: 'saopaulo.jpg'},
    {name: 'New York', image: 'newyork.jpg'},
    {name: 'Bucharest', image: 'bucharest.jpg'}
  ];

  function getRandomCity() {
    var random = Math.floor(Math.random() * places.length);
    return places[random];
  }

  function init() {
    var city = getRandomCity(),
      backgroundImage = document.getElementById('background-image'),
      coverImage = document.getElementById('header'),
      searchField = document.getElementById('search-field');

    var img = baseImagePath + city.image;

    backgroundImage.style.backgroundImage = 'url(' + img + ')';
    header.style.backgroundImage = 'url(' + img + ')';
    searchField.innerHTML = city.name;
  }

  init();

})(window, document);
