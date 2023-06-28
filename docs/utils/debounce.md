# 防抖

<br/>

_对于短时间内连续触发的事件，在 delay 时间内函数只执行最后一次_

::: details Code

```ts
export function debounce(fn: Function, delay = 300): any {
  // timer 是在闭包中的
  let timer: number | null
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
      timer = null
    }, delay)
  }
}
```

:::

<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { debounce } from '@jqw755/q-ui'

onMounted(() => {
  document.onscroll = debounce(showPosition, 1000)
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
import { debounce } from "@jqw755/q-ui"

onMounted(() => {
  document.onscroll = debounce(showPosition, 1000)
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

## Params

| 参数  | 说明                  | 类型     | 默认值 | 必传  |
| ----- | --------------------- | -------- | ------ | ----- |
| fn    | 要执行的函数          | Function | -      | true  |
| delay | 防抖时间期限，单位 ms | number   | 300    | false |
