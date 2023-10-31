const title = 'Simple Map'

const html_str = `
  <div id="map" class="map"></div>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
`

const js_str = `
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
`

const package_str = `
  {
    "name": "simple",
    "dependencies": {
      "ol": "8.1.0"
    },
    "devDependencies": {
      "vite": "^3.2.3"
    },
    "scripts": {
      "start": "vite",
      "build": "vite build"
    }
  }
`

function getCode() {
  let text = `
    <h5 class="source-heading">html</h5>
    <pre><code class="language-markup">${replaceStr(html_str).trim()}</code></pre>
    <h5 class="source-heading">css</h5>
    <pre><code class="language-css">${"  " + css_str.trim()}</code></pre>
    <h5 class="source-heading">js</h5>
    <pre><code class="language-js">${"  " + js_str.trim()}</code></pre>
    <h5 class="source-heading">package.json</h5>
    <pre><code class="language-json">${"  " + package_str.trim()}</code></pre>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text)
}

export {
  title,
  html_str,
  css_str,
  js_str,
  package_str,
  getCode
}

