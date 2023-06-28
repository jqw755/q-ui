import type { App } from "vue"
import "./style/index.scss"
import { dateFormat, throttle, debounce, copyText, isArrayRepeat, downloadFile } from "./utils"
import QButton from "./Button"
import QSelect from "./Select"
import QBreadcrumb from "./Breadcrumb"
import QIcon from "./Icon"

const components = [QButton, QSelect, QBreadcrumb, QIcon]

// 定义 install 方法
const install = (app: App): void => {
  components.forEach((component) => app.component(component.name, component))
}
export { dateFormat, throttle, debounce, copyText, isArrayRepeat, downloadFile }
export { QButton, QSelect, QBreadcrumb, QIcon }
const QUI = {
  install,
}
export default QUI
