import DefaultTheme from "vitepress/theme"
import "./global.scss"
import QUI from "../../../dist/q-ui"
import "../../../dist/style.css"

export default {
  extends: DefaultTheme, // or ...DefaultTheme
  enhanceApp({ app }) {
    app.use(QUI)
  },
}
