class Map {
  static map;
  static markers;
  static init(gradsArray) {
    const mapScript = document.createElement("script");
    mapScript.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyBmFg_4sF8RnPBlclqzm7SVw2w1OepZu0Q";
    window.document.body.appendChild(mapScript);
    mapScript.addEventListener("load", () => {
      this.map = new window.google.maps.Map(document.getElementById("map"), {
        center: { lat: 35, lng: -50 },
        zoom: 3,
      });
      this.markers = gradsArray.map(this.createMarker);
    });
  }

  static closeMarkers(map, markers) {
    markers.forEach(function (marker) {
      map.zoom = 7;
      marker.infowindow.close(map, marker);
    });
  }
  static createMarker({ address: { latitude, longitude }, name }) {
    let icon = {
      url:
        "https://coursereport-s3-production.global.ssl.fastly.net/rich/rich_files/rich_files/999/s200/flatironschool.png", // url
      scaledSize: new window.google.maps.Size(18, 18), // scaled size
      origin: new window.google.maps.Point(0, 0), // origin
      anchor: new window.google.maps.Point(0, 0), // anchor
    };
    const infowindow = new window.google.maps.InfoWindow({
      content: "hola",
    });
    let marker = new window.google.maps.Marker({
      position: {
        lat: latitude,
        lng: longitude,
      },
      map: Map.map,
      title: name,
      infowindow: infowindow,
      icon: icon,
    });
    marker.addListener("click", function () {
      Map.closeMarkers(this.map, Map.markers);
      infowindow.open(this.map, marker);
    });
    return marker;
  }
}

export default Map;
