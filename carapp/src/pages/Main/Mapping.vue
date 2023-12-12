<template>
  <div>
    <q-page>
      <q-card>
        <q-card-section>
          <!-- Leaflet Map Container -->
          <div id="map" style="height: 400px;"></div>
        </q-card-section>
        <q-card-section>
          <q-input v-model="searchQuery" label="Search Location" />
          <q-btn @click="performSearch" label="Search" />
          <q-btn @click="shareLocation" label="Share Location" />
        </q-card-section>
        <q-card-section>
          <q-input v-model="bookmarkName" label="Bookmark Name" />
          <q-btn @click="addBookmark" label="Add Bookmark" />
        </q-card-section>
        <q-card-section>
          <q-list bordered>
            <q-item v-for="(bookmark, index) in bookmarks" :key="index">
              <q-item-section>{{ bookmark.name }}</q-item-section>
              <q-item-section side top>
                <q-btn @click="removeBookmark(index)" flat icon="delete" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-page>
  </div>
</template>

<script>
import 'leaflet/dist/leaflet.css';
import 'leaflet-search/dist/leaflet-search.min.css';
import L from 'leaflet';
import 'leaflet-search';
import 'leaflet/dist/leaflet.js';
import 'leaflet-search/dist/leaflet-search.min.js';

export default {
  data() {
    return {
      zoom: 13,
      center: [0, 0],
      markers: [],
      bookmarkName: '',
      bookmarks: [],
      map: null,
      searchControl: null,
      searchQuery: '',
    };
  },
  mounted() {
    this.map = L.map('map').setView(this.center, this.zoom);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    // Add Leaflet Control Search
    this.searchControl = new L.Control.Search({
      position: 'topright',
      layer: L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),
      initial: false,
      zoom: 12,
      marker: false,
      propertyName: 'name',
      collapsed: false,
    });

    this.map.addControl(this.searchControl);

    // Add event listener for map clicks
    this.map.on('click', this.handleMapClick);
  },
  methods: {
    performSearch() {
      if (this.searchControl) {
        this.searchControl.searchText(this.searchQuery);
      }
    },
    handleMapClick(event) {
      const { lat, lng } = event.latlng;
      this.markers = [{ latlng: { lat, lng } }];
    },
    shareLocation() {
      if (this.markers.length > 0) {
        const { lat, lng } = this.markers[0].latlng;
        const shareText = `Check out this location: https://www.google.com/maps?q=${lat},${lng}`;
        navigator.clipboard.writeText(shareText);
        alert('Location shared! URL copied to clipboard.');
      } else {
        alert('Please select a location on the map.');
      }
    },
    addBookmark() {
      if (this.markers.length > 0 && this.bookmarkName) {
        const bookmark = {
          name: this.bookmarkName,
          position: this.markers[0].latlng,
        };
        this.bookmarks.push(bookmark);
        this.bookmarkName = '';
      } else {
        alert('Please select a location and provide a name for the bookmark.');
      }
    },
    removeBookmark(index) {
      this.bookmarks.splice(index, 1);
    },
  },
};
</script>
