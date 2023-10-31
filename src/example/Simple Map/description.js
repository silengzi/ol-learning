export default function getDescription() {
  let text = `
  <p>A simple map with an OSM source.</p>
  `
  let text_ch = `
  <p>一个使用OSM源的简单地图。</p>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text_ch)
}