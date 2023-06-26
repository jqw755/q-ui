# 快速上手

## 简要介绍

常用的 js 函数

## 使用方式

```vue
<script setup lang="ts">
import { dateFormat, throttle, debounce, downloadFile } from "@jqw755/q-ui"
</script>
```

## 目前收录 4 个常用函数

| 函数名       | 描述                                                               | 参数                                                                                |
| ------------ | :----------------------------------------------------------------- | :---------------------------------------------------------------------------------- |
| dateFormat   | 日期格式化函数                                                     | (timestamp: number&#124;string&#124;Date, format = 'YYYY-MM-DD HH:mm:ss') => string |
| throttle     | 使用 setTimeout 实现的节流函数                                     | (fn: Function, delay = 300) => any                                                  |
| debounce     | 使用 setTimeout 实现的防抖函数                                     | (fn: Function, delay = 300) => any                                                  |
| downloadFile | 下载文件并自定义文件名，未传文件名时，从文件地址中自动获取文件名称 | (url: string, name: string) => void                                                 |
