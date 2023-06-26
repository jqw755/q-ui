# 选择器 QSelect

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
const options = ref([
  {
    label: '北京市',
    value: 1
  },
  {
    label: '上海市',
    value: 2
  },
])
const optionsDisabled = ref([
  {
    label: '北京市',
    value: 1
  },
  {
    label: '上海市',
    value: 2,
    disabled: true
  },
])
const optionsCustom = ref([
  {
    name: '北京市',
    id: 1
  },
  {
    name: '上海市',
    id: 2
  },
])
const selVal = ref(1)
watchEffect(() => {
  console.log('选中的值:', selVal.value)
})
function onChange (value: string|number, label: string,  index: number) {
  console.log('value:', value)
  console.log('label:', label)
  console.log('index:', index)
}
</script>

## 基本使用

<QSelect :options="options" clearable v-model="selVal" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref, watchEffect } from "vue"
const options = ref([
  {
    label: "北京市",
    value: 1,
  },
  {
    label: "上海市",
    value: 2,
  },
])
const selVal = ref(1)
watchEffect(() => {
  console.log("选中的值:", selVal.value)
})
</script>
<template>
  <QSelect :options="options" v-model="selVal" />
</template>
```

:::

## 禁用

<QSelect :options="options" v-model="selVal" disabled />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const options = ref([
  {
    label: "北京市",
    value: 1,
  },
])
const selVal = ref(1)
</script>
<template>
  <QSelect :options="options" v-model="selVal" disabled />
</template>
```

:::

## 禁用选项

<QSelect
  :options="optionsDisabled"
  v-model="selVal" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const optionsDisabled = ref([
  {
    label: "北京市",
    value: 1,
  },
  {
    label: "上海市",
    value: 2,
    disabled: true,
  },
])
const selVal = ref(1)
</script>
<template>
  <QSelect :options="optionsDisabled" v-model="selVal" />
</template>
```

:::

## 自定义样式

<QSelect
:width="180"
:height="42"
:options="options"
v-model="selVal" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const options = ref([
  {
    label: "北京市",
    value: 1,
  },
  {
    label: "上海市",
    value: 2,
  },
])
const selVal = ref(1)
</script>
<template>
  <QSelect :width="180" :height="42" :options="options" v-model="selVal" />
</template>
```

:::

## 自定义字段名

<QSelect
:options="optionsCustom"
label="name"
value="id"
v-model="selVal"
@change="onChange" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const optionsCustom = ref([
  {
    name: "北京市",
    id: 1,
  },
  {
    name: "上海市",
    id: 2,
  },
])
const selVal = ref(1)
</script>
<template>
  <QSelect :options="optionsCustom" label="name" value="id" v-model="selVal" />
</template>
```

:::

## 自定义下拉面板展示数

<QSelect
:options="options"
:max-display="1"
v-model="selVal"
@change="onChange" />

::: details Show Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const options = ref([
  {
    label: "北京市",
    value: 1,
  },
  {
    label: "上海市",
    value: 2,
  },
])
const selVal = ref(1)
</script>
<template>
  <QSelect :options="options" :max-display="1" v-model="selVal" />
</template>
```

:::

## APIs

| 参数                | 说明                                     | 类型                             | 默认值   | 必传  |
| ------------------- | ---------------------------------------- | -------------------------------- | -------- | ----- |
| modelValue(v-model) | 当前选中的 option 条目                   | number &#124; string &#124; null | null     | false |
| options             | 选项数据                                 | Option[]                         | []       | false |
| label               | 字典项的文本字段名                       | string                           | 'label'  | false |
| value               | 字典项的值字段名                         | string                           | 'value'  | false |
| placeholder         | 默认文字                                 | string                           | '请选择' | false |
| disabled            | 是否禁用                                 | boolean                          | false    | false |
| clearable           | 是否支持清除                             | boolean                          | false    | false |
| width               | 宽度                                     | number                           | 120      | false |
| height              | 高度                                     | number                           | 32       | false |
| maxDisplay          | 下拉菜单最多展示的下拉项数，超出滚动显示 | number                           | 7        | false |

## Option Type

| 名称               | 说明                                                   | 类型                 | 必传  |
| ------------------ | ------------------------------------------------------ | -------------------- | ----- |
| label              | 选项名                                                 | string               | false |
| value              | 选项值                                                 | string &#124; number | false |
| disabled           | 是否禁用选项                                           | boolean              | false |
| [propName: string] | 添加一个字符串索引签名，用于包含带有任意数量的其他属性 | any                  | -     |

## Events

| 事件名称 | 说明               | 参数                                                                |
| -------- | ------------------ | ------------------------------------------------------------------- |
| change   | 选项值改变后的回调 | (value: string &#124; number, label: string, index: number) => void |
