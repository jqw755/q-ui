# 按钮

## 基本使用

<div>
  <q-button :class="$style['mr10']" @click="onClick">Default</q-button>
  <q-button :class="$style['mr10']" type="primary" >Primary</q-button>
  <q-button :class="$style['mr10']" type="success" >Success</q-button>
  <q-button :class="$style['mr10']" type="info" >Info</q-button>
  <q-button :class="$style['mr10']" type="warning" >Warning</q-button>
  <q-button :class="$style['mr10']" type="error" >
    <q-icon name="q-icon-delete" color="#fff"/> <span>Error</span>
  </q-button>
  <q-button :class="$style['mr10']" loading >Loading</q-button>
</div>

::: details code

```vue
<script setup lang="ts">
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button :class="$style['mr10']" @click="onClick">Default</q-button>
  <q-button :class="$style['mr10']" type="primary">Primary</q-button>
  <q-button :class="$style['mr10']" type="success">Success</q-button>
  <q-button :class="$style['mr10']" type="info">Info</q-button>
  <q-button :class="$style['mr10']" type="warning">Warning</q-button>
  <q-button :class="$style['mr10']" type="error">
    <q-icon name="q-icon-delete" color="#fff" /> <span>Error</span>
  </q-button>
  <q-button :class="$style['mr10']" loading>Loading</q-button>
</template>
```

:::

## 禁用状态

<div>
  <q-button :class="$style['mr10']" disabled >Disabled</q-button>
</div>

::: details Code

```vue
<template>
  <q-button :class="$style['mr10']" disabled>Disabled</q-button>
</template>
```

:::

## 尺寸

<div>
  <q-button :class="$style['mr10']" size="small" >Small</q-button>
  <q-button :class="$style['mr10']">Default</q-button>
  <q-button :class="$style['mr10']" size="large" >Large</q-button>
</div>

::: details Code

```vue
<script setup lang="ts">
function onClick(e: Event) {
  console.log("click")
}
</script>
<template>
  <q-button size="small">Small</q-button>
  <q-button>Default</q-button>
  <q-button size="large" @click="onClick">Large</q-button>
</template>
```

:::

<style module>
.mr10  {
  margin-right: 10px;
}

</style>

## APIs

| 参数     | 说明     | 类型                              | 默认值  | 必传  |
| -------- | -------- | --------------------------------- | ------- | ----- |
| name     | 默认文本 | string                            | default | false |
| type     | 类型     | 'default' &#124; 'primary' &#124; | primary | false |
| size     | 尺寸     | 'small' &#124; 'large'            | -       | false |
| disabled | 禁用状态 | boolean                           | false   | false |
| loading  | 加载状态 | boolean                           | false   | false |

## Events

| 事件名称 | 说明             | 参数               |
| -------- | ---------------- | ------------------ |
| click    | 点击按钮时的回调 | (e: Event) => void |
