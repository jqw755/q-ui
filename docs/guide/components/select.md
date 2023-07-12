# Select 选择器

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

let selVal = ref(1)
const options = ref([
  {
    label: '北京市',
    value: 1
  },
  {
    label: '上海市',
    value: 2
  },    
  {
    label: '深圳市',
    value: 3
  },  
  {
    label: '苏州市',
    value: 4
  },  
  {
    label: '南阳市',
    value: 5
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
  {
    label: '深圳市',
    value: 3
  },  
  {
    label: '苏州市',
    value: 4
  },  
  {
    label: '南阳市',
    value: 5
  },
])
const optionsCustom = ref([
  {
    id: 1,
    name: "北京市",
  },
  {
    id: 2,
    name: "上海市",
  },
  {
    id: 3,
    name: "深圳市",
  },
  {
    id: 4,
    name: "苏州市",
  },
  {
    id: 5,
    name: "南阳市",
  },
])

// 加载更多
let moreSelVal = ref(1)
let moreSelVal2 = ref(2)
let loading = ref(false)
let loading2 = ref(false)
const modeOptions = ref([
  { id: 1, label: "label-1", value: "1" },
  { id: 2, label: "label-2", value: "2" },
  { id: 3, label: "label-3", value: "3" },
  { id: 4, label: "label-4", value: "4" },
  { id: 5, label: "label-5", value: "5" },
  { id: 6, label: "label-6", value: "6" },
  { id: 7, label: "label-7", value: "7" },
  { id: 8, label: "label-8", value: "8" },
  { id: 9, label: "label-9", value: "9" },
  { id: 10, label: "label-10", value: "10" },
])
const modeOptions2 = ref([
  { id: 1, label: "label-1", value: "1" },
  { id: 2, label: "label-2", value: "2" },
  { id: 3, label: "label-3", value: "3" },
  { id: 4, label: "label-4", value: "4" },
  { id: 5, label: "label-5", value: "5" },
  { id: 6, label: "label-6", value: "6" },
  { id: 7, label: "label-7", value: "7" },
  { id: 8, label: "label-8", value: "8" },
  { id: 9, label: "label-9", value: "9" },
  { id: 10, label: "label-10", value: "10" },
])
// 获取下拉菜单数据
const getList = () => {
  const len = modeOptions.value.length
  if (len >= 50) {
    return
  }
  loading.value = true

  setTimeout(() => {
    for (let index = 1; index <= 10; index++) {
      const val = len + index
      modeOptions.value.push({
        id: val,
        label: `label-${val}`,
        value: val,
      })
    }
     loading.value = false
  }, 1000)
}
// 获取下拉菜单数据
const getList2 = () => {
  const len = modeOptions2.value.length
  if (len >= 50) {
    return
  }
 loading2.value = true
  setTimeout(() => {
    for (let index = 1; index <= 10; index++) {
      const val = len + index
      modeOptions2.value.push({
        id: val,
        label: `label-${val}`,
        value: val,
      })
    }
     loading2.value = false
  }, 1000)
}

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

<q-select :options="options" clearable v-model="selVal" />

::: details Code

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
  {
    label: "深圳市",
    value: 3,
  },
  {
    label: "苏州市",
    value: 4,
  },
  {
    label: "南阳市",
    value: 5,
  },
])
const selVal = ref(1)
watchEffect(() => {
  console.log("选中的值:", selVal.value)
})
</script>
<template>
  <q-select :options="options" v-model="selVal" />
</template>
```

:::

## 加载更多选项

_通过为 select 生成唯一 class 类名后，再获取该类名 dom ，监听其滚动事件。达到页面多个（小于 100 个）select 加载更多时互不影响。_

<q-select :options="modeOptions" v-model="moreSelVal" value="id" :loading="loading" :loadmore="getList"/>

<q-select style="marginLeft:30px;" :options="modeOptions2" v-model="moreSelVal2" value="id" :loading="loading2" :loadmore="getList2" />

::: details Code

```vue
<script setup lang="ts">
import { ref } from "vue"

const moreSelVal = ref(1)
const moreSelVal2 = ref(2)
let loading = ref(false)
let loading2 = ref(false)
const modeOptions = ref([
  { id: 1, label: "label-1", value: "1" },
  { id: 2, label: "label-2", value: "2" },
  { id: 3, label: "label-3", value: "3" },
  { id: 4, label: "label-4", value: "4" },
  { id: 5, label: "label-5", value: "5" },
  { id: 6, label: "label-6", value: "6" },
  { id: 7, label: "label-7", value: "7" },
  { id: 8, label: "label-8", value: "8" },
  { id: 9, label: "label-9", value: "9" },
  { id: 10, label: "label-10", value: "10" },
])
const modeOptions2 = ref([
  { id: 1, label: "label-1", value: "1" },
  { id: 2, label: "label-2", value: "2" },
  { id: 3, label: "label-3", value: "3" },
  { id: 4, label: "label-4", value: "4" },
  { id: 5, label: "label-5", value: "5" },
  { id: 6, label: "label-6", value: "6" },
  { id: 7, label: "label-7", value: "7" },
  { id: 8, label: "label-8", value: "8" },
  { id: 9, label: "label-9", value: "9" },
  { id: 10, label: "label-10", value: "10" },
])
// 获取下拉菜单数据
const getList = () => {
  const len = modeOptions.value.length
  if (len >= 50) {
    return
  }
  loading.value = true

  setTimeout(() => {
    for (let index = 1; index <= 10; index++) {
      const val = len + index
      modeOptions.value.push({
        id: val,
        label: `label-${val}`,
        value: val,
      })
    }
    loading.value = false
  }, 1000)
}
</script>
<template>
  <q-select :options="modeOptions" v-model="moreSelVal" :loading="loading" :loadmore="getList" />

  <q-select :options="modeOptions2" v-model="moreSelVal2" :loading="loading2" :loadmore="getList" />
</template>
```

:::

## 禁用状态

<q-select :options="options" v-model="selVal" disabled />

::: details Code

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
  {
    label: "深圳市",
    value: 3,
  },
  {
    label: "苏州市",
    value: 4,
  },
  {
    label: "南阳市",
    value: 5,
  },
])
const selVal = ref(1)
</script>
<template>
  <q-select :options="options" v-model="selVal" disabled />
</template>
```

:::

## 禁用选项

<q-select
  :options="optionsDisabled"
  v-model="selVal" />

::: details Code

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
  {
    label: "深圳市",
    value: 3,
  },
  {
    label: "苏州市",
    value: 4,
  },
  {
    label: "南阳市",
    value: 5,
  },
])
const selVal = ref(1)
</script>
<template>
  <q-select :options="optionsDisabled" v-model="selVal" />
</template>
```

:::

## 自定义样式

<q-select
:width="180"
:height="42"
:options="options"
v-model="selVal" />

::: details Code

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
  {
    label: "深圳市",
    value: 3,
  },
  {
    label: "苏州市",
    value: 4,
  },
  {
    label: "南阳市",
    value: 5,
  },
])
const selVal = ref(1)
</script>
<template>
  <q-select :width="180" :height="42" :options="options" v-model="selVal" />
</template>
```

:::

## 自定义字段名

<q-select
:options="optionsCustom"
label="name"
value="id"
v-model="selVal"
@change="onChange" />

::: details Code

```vue
<script setup lang="ts">
import { ref } from "vue"
const optionsCustom = ref([
  {
    id: 1,
    name: "北京市",
  },
  {
    id: 2,
    name: "上海市",
  },
  {
    id: 3,
    name: "深圳市",
  },
  {
    id: 4,
    name: "苏州市",
  },
  {
    id: 5,
    name: "南阳市",
  },
])
const selVal = ref(1)
</script>
<template>
  <q-select :options="optionsCustom" label="name" value="id" v-model="selVal" />
</template>
```

:::

## 自定义下拉面板展示数

<q-select
:options="options"
:max-display="2"
v-model="selVal"
@change="onChange" />

::: details Code

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
  {
    label: "深圳市",
    value: 3,
  },
  {
    label: "苏州市",
    value: 4,
  },
  {
    label: "南阳市",
    value: 5,
  },
])
const selVal = ref(1)
</script>
<template>
  <q-select :options="options" :max-display="2" v-model="selVal" />
</template>
```

:::

## APIs

| 参数               | 说明                                     | 类型                             | 默认值   | 必传  |
| ------------------ | ---------------------------------------- | -------------------------------- | -------- | ----- |
| v-model/modelValue | 当前选中的 option 项目                   | number &#124; string &#124; null | null     | false |
| options            | 选项数据                                 | Option[]                         | []       | false |
| label              | 字典项的文本字段名                       | string                           | 'label'  | false |
| value              | 字典项的值字段名                         | string                           | 'value'  | false |
| placeholder        | 默认文字                                 | string                           | '请选择' | false |
| disabled           | 是否禁用                                 | boolean                          | false    | false |
| clearable          | 是否支持清除                             | boolean                          | false    | false |
| width              | 宽度                                     | number                           | 120      | false |
| height             | 高度                                     | number                           | 32       | false |
| maxDisplay         | 下拉菜单最多展示的下拉项数，超出滚动显示 | number                           | 7        | false |
| loadmore           | 滚动加载更多回调                         | function                         | --       | false |
| loading            | 滚动加载更多时的提示状态                 | boolean                          | false    | false |

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
