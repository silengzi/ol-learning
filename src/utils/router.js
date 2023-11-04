// 展示示例详情页
const showExampleDetails = (filename) => {
  const filePath = "src/example/" + filename
  const script = document.createElement('script');
  script.type = "module"
  script.src = `/${filePath}/index.js`; // 假设你的文件都在同一个目录下
  script.src += '?' + new Date().getTime();
  document.body.appendChild(script);

  window.scrollTo(0, 0);
}

// 展示示例导航页
const showExampleList = () => {
  const filePath = "src/pages/examples"
  const script = document.createElement('script');
  script.type = "module"
  script.src = `/${filePath}.js`; // 假设你的文件都在同一个目录下
  script.src += '?' + new Date().getTime();
  document.body.appendChild(script);
  
  window.scrollTo(0, 0);
}

export {
  showExampleDetails,
  showExampleList
}