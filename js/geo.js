if ("geolocation" in navigator) {
  navigator.geolocation.getCurrentPosition(
  function(position) {
    const lat = 20.2704568;//position.coords.latitude;
    const lng = 86.3678751;//position.coords.longitude;
    const map = L.map('map').setView([lat, lng], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
    L.marker([lat, lng])
    .addTo(map)
    .bindPopup('You are here!')
    .openPopup();
  },
  function(error) {
    document.getElementById("map").innerText = `Error getting location: ${error.message}`;
  }
  );
} else {
  document.getElementById("map").innerText = "Geolocation is not supported by your browser.";
}