var map = new google.maps.Map(
    document.getElementById('map-canvas'),
    {
        'center': {
            'lat': 49.283,
            'lng': -123.1109
        },
        'zoom': 18,
        'minZoom': 16,
        'maxZoom': 20,
        'streetViewControl': false,
        'streetTypeControl': false
        // 'mapTypeId': google.maps.MapTypeid.SATELLITE,
        // 'panControl':false
    }
);

document
    .querySelector('#find')
    .addEventListener('click', function () {
        console.log(navigator);
        navigator.geolocation.getCurrentPosition(showPosition);
        function showPosition(pos) {
            var myLat = pos.coords.latitude;
            var myLng = pos.coords.longitude;

            var centerPoint = new google.maps.LatLng(myLat, myLng);

            map.panTo(centerPoint);
        }
    });
document
    .querySelector('#position')
    .addEventListener('click', function () {
        var mapCenter = map.getCenter();
        // console.log(mapCenter);
        alert('Lat: ' + mapCenter.lat() +
            'Lng: ' + mapCenter.lng());
    });

document
    .querySelector('#drop')
    .addEventListener('click', function () {

        var content = '<h2>Hey!</h2>' +
            '<p>Here you are</p>' +
            '<a href="google.com">Google</a>';

        var infoBubble = new google.maps.InfoWindow({
            'content': content
        });


        var marker = new google.maps.Marker({
            'position': map.getCenter(),
            'map': map,
            'animation': google.maps.Animation.DROP,
            'draggable': true,
            'title': 'Hey there, cowboy'
        });
        google.maps.event.addListener(
            marker,
            'click',
            function()
        {
            // infoBubble.setContent()
            infoBubble.open(map, marker);
        }
        )

    });
