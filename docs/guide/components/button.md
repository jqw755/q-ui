# 按钮

## 何时使用

- 当需要添加一个操作按钮时

<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)
function onClick (e: Event) {
  console.log('click')
}
</script>

## 基本使用

<div :class="$style['m-flex']">
  <q-button @click="onClick">Default</q-button>
  <q-button effect="reverse" @click="onClick">Reverse</q-button>
  <q-button type="primary" @click="onClick">Primary</q-button>
  <q-button type="danger" @click="onClick">Danger</q-button>
  <q-button disabled @click="onClick">Disabled</q-button>
</div>

::: details Show Code

```vue
<script setup lang="ts">
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button @click="onClick">Default</q-button>
  <q-button effect="reverse" @click="onClick">Reverse</q-button>
  <q-button type="primary" @click="onClick">Primary</q-button>
  <q-button type="danger" @click="onClick">Danger</q-button>
  <q-button disabled @click="onClick">Disabled</q-button>
</template>
```

:::

## 大、中、小三种尺寸

<div :class="$style['m-flex']">
  <q-button size="small" @click="onClick">Small</q-button>
  <q-button @click="onClick">Default</q-button>
  <q-button size="large" @click="onClick">Large</q-button>
</div>

::: details Show Code

```vue
<script setup lang="ts">
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button size="small" @click="onClick">Small</q-button>
  <q-button @click="onClick">Default</q-button>
  <q-button size="large" @click="onClick">Large</q-button>
</template>
```

:::

## 自定义样式

<q-button :width="120" :height="40" :border-radius="8" size="large" @click="onClick">

  <p style="font-size: 18px;">自定义样式</p>
</q-button>

::: details Show Code

```vue
<script setup lang="ts">
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button :width="120" :height="40" :border-radius="8" size="large" @click="onClick">
    <p style="font-size: 18px;">自定义样式</p>
  </q-button>
</template>
```

:::

## 加载中状态

<div :class="$style['m-flex']">
  <q-button :loading="loading" @click="onClick">Default</q-button>
  <q-button :loading="loading" type="primary" @click="onClick">Primary</q-button>
  <q-button :loading="loading" type="danger" @click="onClick">Danger</q-button>
</div>
<div :class="$style['m-flex']" style="margin-top: 30px;">
  <h3 :class="$style['u-h3']">Loading state: </h3>
  <Switch v-model:checked="loading" />
</div>

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const loading = ref(true)
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button :loading="loading" @click="onClick">Default</q-button>
  <q-button :loading="loading" type="primary" @click="onClick">Primary</q-button>
  <q-button :loading="loading" type="danger" @click="onClick">Danger</q-button>
  <h3>Loading state: <Switch v-model:checked="loading" /></h3>
</template>
```

:::

<style module>
.m-flex {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
}
.u-h3 {
  margin-top: 0 !important;
}
</style>

## APIs

| 参数         | 说明                                                 | 类型                                       | 默认值    | 必传  |
| ------------ | ---------------------------------------------------- | ------------------------------------------ | --------- | ----- |
| name         | 默认文本                                             | string &#124; slot                         | '按钮'    | false |
| type         | 类型                                                 | 'default' &#124; 'primary' &#124; 'danger' | 'default' | false |
| effect       | 悬浮变化效果，只有 type 为 default 时，effect 才生效 | 'fade' &#124; 'reverse'                    | ''        |
| size         | 尺寸                                                 | 'small' &#124; 'middle' &#124; 'large'     | '\_self'  | false |
| width        | 宽度，优先级高于 size 属性，为 0 时自适应内容的宽度  | number                                     | 0         | false |
| height       | 高度，优先级高于 size 属性                           | number                                     | 0         | false |
| borderRadius | 圆角                                                 | number                                     | 5         | false |
| route        | 跳转目标 URL 地址                                    | {path?: string&#44; query?: object}        | {}        | false |
| target       | 如何打开目标 URL，设置 route 时生效                  | '\_self' &#124; '\_blank'                  | '\_self'  | false |
| disabled     | 是否禁用                                             | boolean                                    | false     | false |
| loading      | 是否加载中                                           | boolean                                    | false     | false |
| center       | 是否将按钮设置为块级元素并居中展示                   | boolean                                    | false     | false |

## Events

| 事件名称 | 说明                                  | 参数               |
| -------- | ------------------------------------- | ------------------ |
| click    | 点击按钮时的回调，未设置 route 时生效 | (e: Event) => void |
