<template>
  <!-- <svg class="icon" :style="{ color: color, fontSize: size + 'px' }" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg> -->
  <i :class="['qIconfont', name]" :style="{ color: color, fontSize: size + 'px' }"></i>
</template>

<script setup lang="ts" name="QIcon">
// import "./iconfont.js"   // 不使用Symbol了，因为生成的iconfont.js中使用了window对象。vitepress打包时报错。暂时没有解决该问题。使用font class方案
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
</script>
<style>
@import "./font/iconfont.css";
.qIconfont {
  display: inline-block;
}
</style>
