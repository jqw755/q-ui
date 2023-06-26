<template>
  <div class="q-breadcrumb" :style="`height: ${height}px;`">
    <div class="q-bread" v-for="(route, index) in routes" :key="index">
      <a
        :class="['u-route', { active: index === len - 1 }]"
        :style="`font-size: ${fontSize}px; max-width: ${maxWidth}px;`"
        :href="index === len - 1 ? 'javascript:;' : getUrl(route)"
        :title="route.name"
        :target="index === len - 1 ? '_self' : target"
      >
        {{ route.name || "--" }}
      </a>
      <template v-if="index !== len - 1">
        <span class="u-separator">{{ separator || ">" }}</span>
      </template>
    </div>
    <div class="assist"></div>
  </div>
</template>
<!-- 借助插件vite-plugin-vue-setup-extend ，可以再定义组件的name时，直接写在script上 -->
<script setup lang="ts" name="QBreadcrumb">
import { computed } from "vue"
interface IQuery {
  [propName: string]: any // 添加一个字符串索引签名，用于包含带有任意数量的其他属性
}
interface IRoute {
  path: string // 路由地址
  query?: IQuery // 路由查询参数
  name: string // 路由名称
}
interface Props {
  routes: Array<IRoute> // 或者Route[] router的路由数组，没有 ? 时，即表示 required: true
  fontSize: number // 字体大小
  height?: number // 面包屑高度
  maxWidth?: number // 文本最大显示宽度，超出后显示省略号
  separator?: string // 自定义分隔符
  target?: "_self" | "_blank" // 如何打开目标URL，当前窗口或新窗口
}
const props = withDefaults(defineProps<Props>(), {
  routes: () => [],
  fontSize: 14,
  height: 21,
  maxWidth: 150,
  separator: "",
  target: "_self",
})
const len = computed(() => {
  return props.routes.length
})
const getUrl = (route: IRoute) => {
  var targetUrl = route.path
  if (route.query && JSON.stringify(route.query) !== "{}") {
    const query = route.query
    Object.keys(query).forEach((param, index) => {
      if (index === 0) {
        targetUrl = targetUrl + "?" + param + "=" + query[param]
      } else {
        targetUrl = targetUrl + "&" + param + "=" + query[param]
      }
    })
  }
  return targetUrl
}
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
