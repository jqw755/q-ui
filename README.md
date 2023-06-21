# Q UI

Q UI 是一套基于 `Vue3` + `TypeScript` 开发的 UI 组件库。

总结前端 UI 组件库和介绍文档搭建的经验，同时封装一些项目中常用的组件，提高编码效率。

## 特性

本组件库的实现尽量不采用第三方库，主要提供 **按钮、** 等简洁易用的组件。

本组件库主要用于个人学习交流使用，不可用于生产环境。[源代码](https://github.com/jqw755/q-ui) 。

## 安装使用

```bash
pnpm i @jqw755/q-ui
# or
npm install @jqw755/q-ui
# or
yarn add @jqw755/q-ui
```

Import and register component

**Global**

```ts
import { createApp } from "vue"
import App from "./App.vue"

import QUI from "@jqw755/q-ui"
import "@jqw755/q-ui/css"

const app = createApp(App)
app.use(QUI)
```

**Local**

```vue
<script setup lang="ts">
import { QButton } from "@jqw755/q-ui"
import "@jqw755/q-ui/css"
</script>
```

## Components

| Component name | Descriptions |
| -------------- | ------------ |
| QBreadcrumb    | 面包屑       |
| QButton        | 按钮         |
| QSelect        | 下拉菜单     |

**Global**

[CSDN](https://blog.csdn.net/qq_21473443)
