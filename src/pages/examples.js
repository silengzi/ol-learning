import { showExampleDetails } from "../utils/router.js"
import example_list from "../assets/json/example.json"

let example_list_content = ''

example_list.forEach(item => {
  example_list_content += `
    <div class="example-list-item">
      <strong class="example-list-item-title">${item.title}</strong>
      <br />
      <small class="example-list-item-file">(${item.file}.html)</small>
      <p class="example-list-item-discription">${item.description}</p>
    </div>
  `
})

// 示例导航页面
document.querySelector('#app').innerHTML = `
  <div class="example-list">
    ${example_list_content}
  </div>
`

Array.from(document.getElementsByClassName("example-list-item")).forEach(el => {{
  el.addEventListener("click", () => {
    const filename = el.getElementsByTagName("strong")[0].innerText
    showExampleDetails(filename)
  })
}})
