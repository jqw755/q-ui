# 快速上手

## 安装

**With Yarn**

```bash
$ yarn add @jqw755/q-ui
```

**With NPM**

```bash
$ npm i @jqw755/q-ui
```

## 使用

**全局**

```ts
import { createApp } from "vue"
import App from "./App.vue"

import QUI from "@jqw755/q-ui"
// import "@jqw755/q-ui/css"

const app = createApp(App)
app.use(QUI)

app.mount("#app")
```

**单文件**

```ts
import { QButton } from "@jqw755/q-ui"
// import "@jqw755/q-ui/css"
```
