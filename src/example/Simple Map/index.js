import "./index.css"
import getDescription from "./description.js"
import { title, html_str, getCode } from "./code.js"

document.querySelector('#app').innerHTML = `
  <h4 id="title">${title}</h4>
  ${html_str}
`

getDescription()
getCode()

setTimeout(() => {
  Prism.highlightAll();
})


// *** js ***

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
