# Breadcrumb 面包屑

<script setup lang="ts">
const routes = [
  {
    path: '/first', // 路由地址
    query: { id: 1, tab: 2 }, // 路由参数
    name: '一级路由' // 路由名称
  },
  {
    path: '/second',
    name: '二级路由'
  },
  {
    path: '/third',
    name: '三级路由三级路由'
  }
]
</script>

## 基本使用

<q-breadcrumb :routes="routes" />

::: details Code

```vue
<script setup lang="ts">
const routes = [
  {
    path: "/first", // 路由地址
    query: { id: 1, tab: 2 }, // 路由参数
    name: "一级路由", // 路由名称
  },
  {
    path: "/second",
    name: "二级路由",
  },
  {
    path: "/third",
    name: "三级路由三级路由三级路由三级路由",
  },
]
</script>
<template>
  <q-breadcrumb :routes="routes" />
</template>
```

:::

## 自定义分隔符

<q-breadcrumb :routes="routes" separator="/" />

::: details Code

```vue
<script setup lang="ts">
const routes = [
  {
    path: "/first", // 路由地址
    query: { id: 1, tab: 2 }, // 路由参数
    name: "一级路由", // 路由名称
  },
  {
    path: "/second",
    name: "二级路由",
  },
  {
    path: "/third",
    name: "三级路由三级路由三级路由三级路由",
  },
]
</script>
<template>
  <q-breadcrumb :routes="routes" separator="/" />
</template>
```

:::

## 自定义样式

<q-breadcrumb :routes="routes" :font-size="20" />

::: details Code

```vue
<script setup lang="ts">
const routes = [
  {
    path: "/first", // 路由地址
    query: { id: 1, tab: 2 }, // 路由参数
    name: "一级路由", // 路由名称
  },
  {
    path: "/second",
    name: "二级路由",
  },
  {
    path: "/third",
    name: "三级路由三级路由三级路由三级路由三级路由",
  },
]
</script>
<template>
  <q-breadcrumb :routes="routes" :font-size="16" />
</template>
```

:::

## 新页面打开目标链接

<q-breadcrumb :routes="routes" target="_blank" />

::: details Code

```vue
<script setup lang="ts">
const routes = [
  {
    path: "/first", // 路由地址
    query: { id: 1, tab: 2 }, // 路由参数
    name: "一级路由", // 路由名称
  },
  {
    path: "/second",
    name: "二级路由",
  },
  {
    path: "/third",
    name: "三级路由三级路由三级路由三级路由",
  },
]
</script>
<template>
  <q-breadcrumb :routes="routes" target="_blank" />
</template>
```

:::

## APIs

| 参数      | 说明                                        | 类型                      | 默认值   | 必传  |
| --------- | ------------------------------------------- | ------------------------- | -------- | ----- |
| routes    | 路由数组                                    | Route[]                   | []       | true  |
| fontSize  | 字体大小，单位 px                           | number                    | 14       | false |
| height    | 面包屑高度                                  | number                    | 36       | false |
| maxWidth  | 文本最大显示宽度，超出后显示省略号，单位 px | 150                       | false    |
| separator | 分隔符，默认''时为箭头                      | string                    | ''       | false |
| target    | 在何处打开目标 URL                          | '\_self' &#124; '\_blank' | '\_self' | false |

## Route Type

| 名称  | 说明         | 类型                    | 必传  |
| ----- | ------------ | ----------------------- | ----- |
| path  | 路由地址     | string                  | true  |
| query | 路由查询参数 | [propName: string]: any | false |
| name  | 路由名称     | string                  | true  |
