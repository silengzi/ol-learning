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
