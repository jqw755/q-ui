---
layout: home

title: QUI
titleTemplate: 组件库文档

hero:
  name: QUI
  text: 组件库
  tagline: 基于 Vite4 + Vue3 + TS 开发
  image:
    src: /logo.png
    alt: QUI
  actions:
    - theme: brand
      text: 开始
      link: /guide/features
    - theme: alt
      text: 在GitHub上查看
      link: https://github.com/jqw755/q-ui
    - theme: alt
      text: 在NPM上查看
      link: https://www.npmjs.com/package/@jqw755/q-ui
---

<script setup lang="ts">
  // 获取q-ui版本号
import { onMounted } from 'vue'
import { fetchVersion } from './.vitepress/utils/fetchVersion'

onMounted(() => {
  fetchVersion()
})
</script>
