# Icon 图标

<br>

_可自定义颜色、大小，并嵌套在其他组件内。icon 图表基于阿里图标库，逐步完善中_

## 基本使用

<q-icon :class="$style['mr10']" name="q-icon-refresh-left" color="green" size="30"/>
<q-icon :class="$style['mr10']" name="q-icon-delete" color="red" size="26"/>
<q-icon :class="$style['mr10']" name="q-icon-edit"/>
<q-icon :class="$style['mr10']" name="q-icon-add"/>
<q-icon :class="$style['mr10']" name="q-icon-arrow-right"/>
<q-icon name="q-icon-loading"/>

::: details Code

```vue
<template>
  <q-icon name="q-icon-refresh-left" color="green" size="30" />
  <q-icon name="q-icon-delete" color="red" size="26" />
  <q-icon name="q-icon-edit" />
  <q-icon name="q-icon-add" />
  <q-icon name="q-icon-arrow-right" />
  <q-icon name="q-icon-loading" />
</template>
```

:::

## APIs

| 参数  | 说明      | 类型   | 默认值    | 必传  |
| ----- | --------- | ------ | --------- | ----- |
| name  | icon 名称 | string | ''        | true  |
| color | icon 颜色 | string | '#333333' | false |
| size  | icon 大小 | string | '14'      | false |

## 图标集合

<script setup lang="ts">
import {ref} from 'vue'
import {copyText} from '@jqw755/q-ui'
// 图标列表
const iconList = ref([
  ['q-icon-refresh-left', 'q-icon-delete', 'q-icon-edit', 'q-icon-add', 'q-icon-arrow-right', 'q-icon-arrow-top'],
  ['q-icon-arrow-bottom', 'q-icon-arrow-left','q-icon-upload', 'q-icon-star-off', 'q-icon-image', 'q-icon-location'],
  ['q-icon-loading', 'q-icon-close'],
])
let copyTips = ref('复制');
// 复制
const copyIconCode = (iconName: string) => {
  copyText(`<q-icon name="${iconName}" />`)
  copyTips.value = '复制成功'
  setTimeout(() => {copyTips.value = '复制'}, 300)
}
</script>
<table>
  <tr v-for="item in iconList">
      <td v-for="iconName in item" :class="$style['icon-td-wrap']">
        <q-icon :name="iconName" size="22"/>
        <div :class="$style['copy-icon']" @click="copyIconCode(iconName)">{{copyTips}}</div>
      </td>
  </tr>
</table>

<style module>
.mr10 {
  margin-right: 20px;
}
.icon-td-wrap{
  position: relative;
  width:80px;
  height:80px;
  text-align:center;
  cursor: pointer;
}
.icon-td-wrap:hover .copy-icon{
  display: block;
}
.copy-icon{
  display: none;
  line-height:80px;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  z-index: 10;
  color: #fff;
}
</style>
