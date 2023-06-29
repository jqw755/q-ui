# Q UI

Q UI 是一套基于 `Vue3` + `TypeScript` 开发的 PC 端 UI 组件库。

总结前端 UI 组件库和文档搭建的经验，同时封装一些项目中常用的组件。

[在线文档](https://jqw755.github.io/q-ui/)

## 特性

组件逐步完善中，主要提供 **icon、按钮、面包屑、下拉框** 等简洁易用的组件。

本组件库主要用于个人学习交流使用，不用于生产环境。[源代码](https://github.com/jqw755/q-ui) 。

## 安装使用

```bash
pnpm i @jqw755/q-ui
# or
npm install @jqw755/q-ui
# or
yarn add @jqw755/q-ui
```

组件库使用

**Global**

```ts
import { createApp } from "vue"
import App from "./App.vue"

import QUI from "@jqw755/q-ui"
// import "@jqw755/q-ui/css"

const app = createApp(App)
app.use(QUI)
```

**Local**

```vue
<script setup lang="ts">
import { QButton } from "@jqw755/q-ui"
// import "@jqw755/q-ui/css"
</script>
```

## Components

| Component name | Descriptions |
| -------------- | ------------ |
| QIcon          | icon         |
| QBreadcrumb    | 面包屑       |
| QButton        | 按钮         |
| QSelect        | 下拉菜单     |

**Global**

[CSDN](https://blog.csdn.net/qq_21473443)
