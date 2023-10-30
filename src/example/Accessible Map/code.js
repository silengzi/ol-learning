const html_str = `
  <a class="skiplink" href="#map">Go to map</a>
  <div id="map" class="map" tabindex="0"></div>
  <button id="zoom-out">Zoom out</button>
  <button id="zoom-in">Zoom in</button>
`

const css_str = `
  .map {
    width: 100%;
    height: 400px;
  }
  a.skiplink {
    position: absolute;
    clip: rect(1px, 1px, 1px, 1px);
    padding: 0;
    border: 0;
    height: 1px;
    width: 1px;
    overflow: hidden;
  }
  a.skiplink:focus {
    clip: auto;
    height: auto;
    width: auto;
    background-color: #fff;
    padding: 0.3em;
  }
  #map:focus {
    outline: #4A74A8 solid 0.15em;
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

`

const package_str = `
  {
    "name": "accessible",
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


export default function getCode() {
  let text = `
<pre class="language-markup"><code class="language-markup">\`${html_str}\`</code></pre>
<pre><code class="language-css">${css_str}</code>
<pre><code class="language-js">${js_str}</code>
<pre><code class="language-json">${package_str}</code>
</pre>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text)
}
setTimeout(() => {
  Prism.highlightAll();
})



// 全局引入prism.js和prism.css
// copyCode方法也挂载到全局，通过接收参数来控制复制哪个(html、css、js、package.json)

{/* <div class="wrap" style="width: 80%; margin: auto; position: relative;">
<button onclick="copyCode()" style="position: absolute; right: 10px; top: 10px;">copy</button>
<pre>
    <code class="language-css">
        function copyCode() {
            const code = document.querySelector('pre code').textContent;
            const textarea = document.createElement('textarea');
            textarea.value = code;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }
    </code>
</pre>
</div>

function copyCode() {
  const code = document.querySelector('pre code').textContent;
  const textarea = document.createElement('textarea');
  textarea.value = code;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
} */}