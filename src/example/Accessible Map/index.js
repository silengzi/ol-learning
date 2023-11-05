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

// import Map from 'ol/Map.js';
// import OSM from 'ol/source/OSM.js';
// import TileLayer from 'ol/layer/Tile.js';
// import View from 'ol/View.js';

const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: 2,
  }),
});

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};
