streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
        panorama = new google.maps.StreetViewPanorama(
          document.getElementById('pano'),
          {
            position: posicionCentral,
            pov: {
              heading: 40, 
              pitch: 9},
              zoom: 1
          });

  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
        /* Completar la función fijarStreetView que actualiza la posición
         de la variable panorama y cambia el mapa de modo tal que se vea 
         el streetView de la posición actual. */
      panorama.position = ubicacion;
      mapa.setStreetView(panorama);  
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
