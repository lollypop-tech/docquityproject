// Google Map and Select box for Contact page

const invokeMap = () => {
  // Initiate Contact Page Map
  function initMap() {
    const SUTURES = { lat: 13.019611, lng: 77.505841 };

    const MAP = new google.maps.Map(
      document.getElementById('contact-banner__map'),
      {
        zoom: 16,
        center: SUTURES,
        disableDefaultUI: true,
      },
    );

    const marker = new google.maps.Marker({
      position: SUTURES,
      MAP,
      icon: './img/map-marker.png',
    });

    marker.setMap(MAP);
  }


  initMap();

  $(window).on('resize', () => {
    initMap();
  });

  // Customizing Select Picker
  $('#country').niceSelect();
};

invokeMap();
