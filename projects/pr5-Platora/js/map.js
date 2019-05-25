$(function() {


  // $(".linkMap").on('click', function(event) {
  //   var popupName = $(this).attr("data-link");
  //   var id = "#" + popupName;
  //   $(".preloader").addClass('active');
  //   setTimeout(function(){
  //     $(".preloader").removeClass('active');
  //     $(id).addClass('active');
  //     $("#bg").addClass('active');
  //   }, 3000);  
  // });

    $(".linkMap").on('click', function(event) {
      event.preventDefault();
      $("#bg").addClass('active');
      $("#mapPop").addClass('modal-inline-block-top show');
  });

    $(".closePopup").on('click', function(event) {
      $("#bg").removeClass('active');
      $("#mapPop").removeClass('modal-inline-block-top show');
    });

    $(document).click(function (e){ // отслеживаем событие клика по веб-документу
        var block = $("#mapPop"); // определяем элемент, к которому будем применять условия (можем указывать ID, класс либо любой другой идентификатор элемента)
        if (block.is(e.target) // проверка условия если клик был не по нашему блоку
            && block.has(e.target).length === 0) { // проверка условия если клик не по его дочерним элементам
            $("#bg").removeClass('active');
            $("#mapPop").removeClass('modal-inline-block-top show'); // если условия выполняются - скрываем наш элемент
        }
    });


   // map -------------------------------------------------------
   mapboxgl.accessToken = 'pk.eyJ1IjoibHBuZXZnIiwiYSI6ImNqczI1aHNsaTAzazg0Ym54bHExMHlud24ifQ.K0-ozpY5zAFGF-lwy123vw';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v10',
  center: [30.5525,50.4755],
  zoom: 10
});
map.addControl(new mapboxgl.NavigationControl());
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
});
 
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

// ЗАДАВАТЬ КООРДИНАТЫ НЕ ДОЛГОТА ШИРОТА А ШИРОТА ДОЛГОТА !!
var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    id: 1,
    geometry: {
      type: 'Point',
      coordinates: [30.5213, 50.4503]
    },
    properties: {
      title: 'Отделение Альфа-Банка',
      adress: 'ул. Волговича 60 ',
      city: 'г.Чернигов Украина, 14029',
      tel: '+7 0000 000 847',
      description: 'Расписание на неделю',
      workday:'Пн-Пт',
      hours: '08.40-16.40',
      break: '14:00-14:30',
      hoursBreak: 'Перерыв',
      saturday: 'Суббота',
      sunday: 'Восскресенье',
      free: 'Выходной'
    }
  },
  {
    type: 'Feature',
    id: 2,
    geometry: {
      type: 'Point',
      coordinates: [30.3949, 50.5098]
    },
    properties: {
      title: 'Отделение Альфа-Банка',
      adress: 'ул. Волговича 80 ',
      city: 'г.Чернигов Украина, 14029',
      tel: '+7 8948 832 847',
      description: 'Расписание на неделю',
      workday:'Пн-Пт',
      hours: '08.40-16.40',
      break: '14:00-14:30',
      hoursBreak: 'Перерыв',
      saturday: 'Суббота',
      sunday: 'Восскресенье',
      free: 'Выходной'
    }
  }]
};
geojson.features.forEach(function(marker) {
  // create a HTML element for each feature
  var el = document.createElement('div');
  el.innerHTML = marker.id;
  el.className = 'marker';
  new mapboxgl.Marker(el)
  .setLngLat(marker.geometry.coordinates)
  .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
    .setHTML('<h5>' + marker.properties.title + '</h5>'+
      '<p class="adress">' + marker.properties.adress +'<br>'+ marker.properties.city + '</p>'+
      '<p class="tel">'+ marker.properties.tel + '</p>'+
      '<h6>'+ marker.properties.description +'</h6>'+
      '<table>'+
        '<tr><td>' + marker.properties.workday + '</td><td>'+marker.properties.hours +'</td></tr>'+
        '<tr><td>'+ marker.properties.hoursBreak+'</td><td>'+ marker.properties.break +'</td></tr>'+
        '<tr><td>' +  marker.properties.saturday+ '</td><td>'+ marker.properties.free+'</td></tr>'+
        '<tr><td>'+ marker.properties.sunday+ '</td><td>'+ marker.properties.free+'</td></tr>'+
      '</table>'))
  .addTo(map);
});


$('.marker').on('click', function(e){
  $('.marker').removeClass('active');
  $(this).toggleClass('active');
});



   // map -------------------------------------------------------end

});


