import { useEffect, useState } from "react";
import "./App.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "./assets/icon-location.svg";

const pin = L.icon({
  iconUrl: markerIcon,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

type IpData = {
  ip: string;
  isp: string;
  location: {
    city: string;
    region: string;
    postalCode: string;
    timezone: string;
    lat: number;
    lng: number;
  };
};

// moves the map when the coordinates change
const MapMover = ({ lat, lng }: { lat: number; lng: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

const App = () => {
  const [data, setData] = useState<IpData | null>(null);
  const [query, setQuery] = useState("");

  const fetchData = async (search = "") => {
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}`;

    if (search) {
      const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(search);
      url += isIp ? `&ipAddress=${search}` : `&domain=${search}`;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Request failed");
      const result = await res.json();
      setData(result);
    } catch (err) {
      console.error(err);
      alert("Could not find that IP address or domain");
    }
  };

  // runs once on page load: your own IP
  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = () => {
    if (query.trim()) fetchData(query.trim());
  };

  const lat = data?.location.lat ?? 40.7128;
  const lng = data?.location.lng ?? -74.006;

  return (
    <div className="App">
      <div className="top">
        <header className="top-banner">
          <picture>
            <source
              media="(max-width: 600px)"
              srcSet="./src/assets/pattern-bg-mobile.png"
            />
            <img src="./src/assets/pattern-bg-desktop.png" alt="Header Image" />
          </picture>

          <div className="overlay">
            <p className="title">IP Address Tracker</p>
            <div className="search">
              <input
                type="text"
                placeholder="Search for any IP address or domain"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button onClick={handleSearch}>&gt;</button>
            </div>
          </div>
        </header>

        <div className="info-card">
          <div className="info-item">
            <span className="label">IP Address</span>
            <h2 className="value">{data?.ip ?? "N/A"}</h2>
          </div>
          <div className="info-item">
            <span className="label">Location</span>
            <h2 className="value">
              {data
                ? `${data.location.city}, ${data.location.region} ${data.location.postalCode}`
                : "N/A"}
            </h2>
          </div>
          <div className="info-item">
            <span className="label">Timezone</span>
            <h2 className="value">
              {data ? `UTC ${data.location.timezone}` : "N/A"}
            </h2>
          </div>
          <div className="info-item">
            <span className="label">ISP</span>
            <h2 className="value">{data?.isp ?? "N/A"}</h2>
          </div>
        </div>
      </div>

      <MapContainer
        center={[lat, lng]}
        zoom={13}
        zoomControl={false}
        className="map"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lng]} icon={pin} />
        <MapMover lat={lat} lng={lng} />
      </MapContainer>
    </div>
  );
};

export default App;
