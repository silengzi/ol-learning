export default function getCode() {
  let text = `
  <p>这是代码片段展示部分.</p>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text)
}



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