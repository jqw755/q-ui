# throttle 节流

<br/>

_高频触发同一事件，在函数执行一次之后，该函数每隔指定时间（delay）执行一次_

::: details Code

```ts
function throttle(fn: Function, deplay = 300) {
  let timer: any = null
  return function (this: unknown, ...args: any[]) {
    const context = this
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        fn.apply(context, args)
      }, deplay)
    }
  }
}
```

:::

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { throttle } from '@jqw755/q-ui'

onMounted(() => {
  document.onscroll = throttle(showPosition, 1000)
})
onUnmounted(() => {
  // 移除键盘切换事件
  document.onscroll = null
})
function showPosition () {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  console.log('滚动条位置：' + scrollTop)
}
</script>

## 基本使用

_打开控制台查看输出_

```vue
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import { throttle } from "@jqw755/q-ui"

onMounted(() => {
  document.onscroll = throttle(showPosition, 1000)
})
onUnmounted(() => {
  // 移除键盘切换事件
  document.onscroll = null
})
function showPosition() {
  const scrollTop = document.body.scrollTop || document.documentElement.scrollTop
  console.log("滚动条位置：" + scrollTop)
}
</script>
```

## APIs

| 参数  | 说明                  | 类型     | 默认值 | 必传  |
| ----- | --------------------- | -------- | ------ | ----- |
| fn    | 要执行的函数          | Function | -      | true  |
| delay | 函数失效时长，单位 ms | number   | 300    | false |
