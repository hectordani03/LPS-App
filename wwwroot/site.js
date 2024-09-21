window.initMap = function () {
    var map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'Ao46xYbAAZCcZ02OaPnLjKJ8MnaQcSFdiGCEL3cfmvqXPlz9CRTL8_KfWW2L0Ke8',
        center: new Microsoft.Maps.Location(47.6149, -122.1941),
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        zoom: 10
    });
}
