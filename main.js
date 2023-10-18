import "ol/ol.css"

const fileName = "src/example/Accessible Map"
const script = document.createElement('script');
script.type = "module"
script.src = `/${fileName}/index.js`; // 假设你的文件都在同一个目录下
document.body.appendChild(script);