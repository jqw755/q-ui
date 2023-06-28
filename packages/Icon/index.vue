<template>
  <svg class="icon" :style="{ color: color, fontSize: size + 'px' }" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts" name="QIcon">
import { computed } from "vue"
import "./iconfont"
const props = defineProps({
  name: String,
  color: {
    type: String,
    default: "#333333",
  },
  size: {
    type: String,
    default: "14",
  },
})

const iconName = computed(() => {
  return `#${props.name}`
})
</script>
<style>
@import "./index.scss";
</style>
