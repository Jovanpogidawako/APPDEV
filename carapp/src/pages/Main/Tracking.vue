<template>
  <template>
  <q-page>
    <q-page-container>
      <h2 class="text-h6 q-mb-md">Map Page</h2>

      <div id="map" style="height: 400px;"></div>

      <q-card-section>
        <q-item v-for="(bookmark, index) in bookmarks" :key="index">
          <q-item-section>
            <q-item-label>{{ bookmark.name }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <q-btn icon="bookmark" @click="centerOnBookmark(bookmark)" />
          </q-item-section>
        </q-item>
      </q-card-section>

    </q-page-container>
  </q-page>
</template>

</template>
<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet-realtime';
import L from 'leaflet';
import 'leaflet-control-geocoder/dist/Control.Geocoder.js';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

export default {
  data() {
    return {
      map: null,
      searchAddress: '',
      bookmarks: [],
      carLayer: null,
      carMarker: null,
    };
  },
  mounted() {
    this.initMap();
    this.initCarLayer();
    this.startCarTracking(); // Start tracking the car
  },
  methods: {
    initMap() {
      this.map = L.map('map').setView([0, 0], 15);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(this.map);

      // Add the geocoder control for searching
      L.Control.geocoder({
        defaultMarkGeocode: false,
        collapsed: false,
      }).on('markgeocode', (e) => this.handleGeocodeResult(e)).addTo(this.map);
    },
    initCarLayer() {
      this.carLayer = L.realtime({
        url: 'URL_TO_YOUR_CAR_API_ENDPOINT', // Replace with your car tracking API endpoint
        crossOrigin: true,
        type: 'json',
      }, {
        interval: 5 * 1000, // Update every 5 seconds
      }).addTo(this.map);
    },
    startCarTracking() {
      this.carLayer.on('update', (event) => {
        // Handle the car position update
        event.features.forEach((feature) => {
          const { geometry } = feature;
          const { lat, lon } = geometry.coordinates;

          // Update the car marker position on the map
          if (this.carMarker) {
            this.carMarker.setLatLng([lat, lon]);
          } else {
            this.carMarker = L.marker([lat, lon]).addTo(this.map);
          }

          // Additional handling if needed
          // For example, update car information in the component's data
        });
      });
    },
    handleGeocodeResult(event) {
      // Handle the result of a geocode search
      const result = event.geocode || event.marker.getLatLng();
      this.map.fitBounds(result.bbox);
      L.marker(result.center, { icon: this.createBookmarkIcon(result.name) })
        .bindPopup(result.name)
        .addTo(this.map);
    },
    createBookmarkIcon(name) {
      // Create a custom bookmark icon
      return L.divIcon({
        className: 'custom-bookmark-icon',
        html: `<div>${name}</div>`,
      });
    },
    centerOnBookmark(bookmark) {
      // Center the map on a bookmark when it's clicked
      this.map.setView(bookmark.latlng, 15);
    },
    // ... (other methods remain unchanged)
  },
};
</script>
