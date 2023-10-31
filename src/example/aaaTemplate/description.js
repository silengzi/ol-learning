export default function getDescription() {
  let text = `
  <p>This page's map element has its tabindex attribute set to "0", that makes it focusable. To focus the map element you can either navigate to it using the "tab" key or use the skip link. When the map element is focused the + and - keys can be used to zoom in and out and the arrow keys can be used to pan.</p>
  <p>Clicking on the "Zoom in" and "Zoom out" buttons below the map zooms the map in and out. You can navigate to the buttons using the "tab" key, and press the "enter" key to trigger the zooming action.</p>
  `
  let text_ch = `
  <p>该页的map元素的tabindex属性设置为“0”，这使得它可以聚焦。要聚焦到该元素，您可以使用“tab”键导航到它，也可以点击跳转链接。当地图元素处于聚焦状态时，您可以使用键盘的+和-键来对地图进行放大和缩小，以及可以使用键盘方向键来平移地图。</p>
  <p>点击地图下方的“放大”和“缩小”按钮可以放大和缩小地图。您可以使用“tab”键聚焦到按钮上，然后键盘按下回车“enter”键来触发缩放操作。</p>
  `
  document.querySelector('#app').insertAdjacentHTML("beforeend", text_ch)
}