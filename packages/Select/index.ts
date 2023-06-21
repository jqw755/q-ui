import type { App } from "vue"
import QSelect from "./index.vue"

// 使用install方法，在app.use挂载
QSelect.install = (app: App) => {
  app.component(QSelect.name, QSelect)
}

export default QSelect
