// import "ol/ol.css"
import { showExampleList } from "./src/utils/router.js"

// showExampleDetails("Simple Map")
showExampleList()

document.getElementById("examples-page").addEventListener("click", () => {
  showExampleList()
})
