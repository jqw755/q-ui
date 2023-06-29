import DefaultTheme from "vitepress/theme"
import "./global.scss"
import QUI from "../../../dist/q-ui"
import "../../../dist/style.css"

export default {
  ...DefaultTheme, // or extends: DefaultTheme,
  enhanceApp({ app }) {
    app.use(QUI)
    // app.mixin({
    //   async mounted() {
    //     //你自己的插件地址
    //     import("../../../packages/Icon/iconfont").then((module) => {
    //       app.use(module.default)
    //     })
    //   },
    // })
  },
}
