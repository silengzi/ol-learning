import "./index.css"
import getDescription from "./description.js"
import getCode from "./code.js"

document.querySelector('#app').innerHTML = `
  <div id="map" class="map"></div>
`

import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';

const map = new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
    }),
  ],
  target: 'map',
  view: new View({
    center: [0, 0],
    zoom: 2,
  }),
});

getDescription()
getCode()
