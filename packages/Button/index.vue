<template>
  <button class="q-button" :class="classes">
    <span v-if="loading" class="q-loadingIndicator"></span>
    <slot> {{ type }} </slot>
  </button>
</template>
<!-- 借助插件vite-plugin-vue-setup-extend ，可以再定义组件的name时，直接写在script上 -->
<script setup lang="ts" name="QButton">
import { computed } from "vue"
// props
const props = defineProps({
  type: {
    type: String,
    default: "default",
  },
  dashed: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String,
    default: "default",
  },
  round: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
})

// data
const { type, dashed, size, round, disabled, loading } = props
const classes = computed(() => {
  return {
    [`q-type-${type}`]: type,
    [`q-type-dashed`]: dashed,
    [`q-size-${size}`]: size,
    [`is-round`]: round,
    [`is-disabled`]: disabled || loading,
    ["is-loading"]: loading,
  }
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
