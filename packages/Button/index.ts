import type { App } from "vue"
import QButton from "./index.vue"

// 使用install方法，在app.use挂载
QButton.install = (app: App) => {
  app.component(QButton.name, QButton)
}

export default QButton
