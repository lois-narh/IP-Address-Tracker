import { useEffect, useState } from 'react';
import './App.css';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from './assets/icon-location.svg';

const App = () => {
  const pin = L.icon({
  iconUrl: markerIcon,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

useEffect(() => {
  const getData = async () => {
    const res = await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const data = await res.json();
    console.log(data);
  };
  getData();
}, []);

  return (
    <div className="App">
      <div className="top">
        <header className="top-banner">
          <img src="./src/assets/pattern-bg-desktop.png" alt="Header Image" />

          <div className="overlay">
            <p className="title">IP Address Tracker</p>
            <div className="search">
              <input type="text" placeholder="Search for any IP address or domain" />
              <button>&gt;</button>
            </div>
          </div>
        </header>

        <div className="info-card">
          <div className="info-item">
            <span className="label">IP Address</span>
            <h2 className="value">N/A</h2>
          </div>
          <div className="info-item">
            <span className="label">Location</span>
            <h2 className="value">N/A</h2>
          </div>
          <div className="info-item">
            <span className="label">Timezone</span>
            <h2 className="value">N/A</h2>
          </div>
          <div className="info-item">
            <span className="label">ISP</span>
            <h2 className="value">N/A</h2>
          </div>
        </div>
      </div>

      <div className="map">
        <MapContainer
  center={[40.7128, -74.006]}
  zoom={13}
  zoomControl={false}
  className="map"
>
  <TileLayer
    attribution='&copy; OpenStreetMap contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[40.7128, -74.006]} icon={pin} />
</MapContainer>
      </div>
    </div>
  );
};

export default App;