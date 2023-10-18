export default function getDescription() {
  let text = `
  <p>A simple map with an OSM source.</p>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text)
}