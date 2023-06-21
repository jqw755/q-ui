<template>
  <div class="pre">
    <!-- 标题和组件实例 -->
    <h2>
      {{ component?.__sourceCodeTitle }}
      <span class="icon-expand" @click="showCode">&lt;&gt;</span>
    </h2>
    <div class="pre-component">
      <component :is="component" />
    </div>

    <!-- 源码展示 -->
    <transition name="fade">
      <div class="pre-code" v-show="codeVisible">
        <pre class="language-html" v-html="Prism.highlight(component?.__sourceCode, Prism.languages.html, 'html')" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
// 代码高亮
import "prismjs"
import "prismjs/themes/prism-okaidia.css"
const Prism = (window as any).Prism

import { ref } from "vue"

const props = defineProps({
  component: <any>{},
})

const codeVisible = ref(false)
const showCode = () => (codeVisible.value = !codeVisible.value)
</script>

<style lang="scss" scoped>
.pre {
  margin: 16px 0px 32px;
  max-width: 700px;
  min-width: 400px;
  > h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    padding: 8px 8px 8px 0;
  }
  .icon-expand {
    font-size: 14px;
    cursor: pointer;
  }

  &-component {
    padding: 20px 15px 30px;
    border: 1px solid $border-color;
  }

  &-code {
    height: auto;
    max-height: 500px;
    overflow-y: auto;

    > pre {
      margin: 0;
      border-radius: 0;
    }
  }
}

.fade-enter-from {
  height: 0;
}
.fade-leave-active,
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-enter-to {
  height: auto !important;
}
.fade-leave-to {
  height: 0;
}
</style>
