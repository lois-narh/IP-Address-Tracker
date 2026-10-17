import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="top">
        <header className="top-banner">
          <img src="./src/assets/background-image.jpg" alt="Header Image" />

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

      <div className="map"></div>
    </div>
  );
};

export default App;