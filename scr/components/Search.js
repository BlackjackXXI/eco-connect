import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'your-mapbox-token-here';

const Search = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.5, 40], // Default center
      zoom: 9,
    });
  }, []);

  return (
    <div>
      <h2>Find Local Eco-Friendly Businesses</h2>
      <div id="map" style={{ width: '100%', height: '400px' }}></div>
    </div>
  );
};

export default Search;
