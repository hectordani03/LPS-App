window.initMap = function (latitude, longitude) {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'Ao46xYbAAZCcZ02OaPnLjKJ8MnaQcSFdiGCEL3cfmvqXPlz9CRTL8_KfWW2L0Ke8',
        center: new Microsoft.Maps.Location(latitude, longitude), // Usa las coordenadas proporcionadas
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 17
    });
    // Crear la ubicación del Pushpin
    var currentLocation = new Microsoft.Maps.Location(latitude, longitude);

    // Crear el Pushpin en la ubicación actual
    var pushpin = new Microsoft.Maps.Pushpin(currentLocation, {
        title: '',
        color: 'blue' // Color opcional para el Pushpin
    });

    // Agregar el Pushpin al mapa
    map.entities.push(pushpin);

    // Crear un infobox (globo de texto) para mostrar al hacer clic en el Pushpin
    var infobox = new Microsoft.Maps.Infobox(currentLocation, {
        visible: false, // Inicialmente invisible
        offset: new Microsoft.Maps.Point(0, 15) // Offset para el infobox
    });

    // Vincular el infobox al mapa
    infobox.setMap(map);

    // Evento para mostrar el infobox cuando se haga clic en el Pushpin
    Microsoft.Maps.Events.addHandler(pushpin, 'click', function () {
        infobox.setOptions({
            visible: true, // Mostrar el infobox
            title: 'Unidad 1',
            description: 'Operador: Gilberto Ceja <br> Transporte: Kenworth',
            visible: true
        });
    });
};
