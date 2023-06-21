import type { App } from "vue"
import QBreadcrumb from "./index.vue"

// 使用install方法，在app.use挂载
QBreadcrumb.install = (app: App) => {
  app.component(QBreadcrumb.name, QBreadcrumb)
}

export default QBreadcrumb
