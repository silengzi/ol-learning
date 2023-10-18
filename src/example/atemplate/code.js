export default function getCode() {
  let text = `
  <p>这是代码片段展示部分.</p>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text)
}