import type { App } from "vue"
import QIcon from "./index.vue"

// 使用install方法，在app.use挂载
QIcon.install = (app: App) => {
  app.component(QIcon.name, QIcon)
}

export default QIcon
