import { createApp } from "vue"
import "./assets/base.css"
import QUI from "../packages"

import App from "./App.vue"
import router from "./router"

const app = createApp(App)

app.use(router)
app.use(QUI)

app.mount("#app")
