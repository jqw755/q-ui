<template>
  <h1>Button按钮</h1>
  <preview :component="QButtonPreview" />
  <preview :component="QButtonDisabledPreview" />
  <preview :component="QButtonLoadingPreview" />
</template>

<script setup lang="ts">
import Preview from "@/components/Preview.vue"
import QButtonPreview from "./QButton-basics.preview.vue"
import QButtonDisabledPreview from "./QButton-disabled.preview.vue"
import QButtonLoadingPreview from "./QButton-loading.preview.vue"
</script>

<style>
.q-button + .q-button {
  margin-left: 20px;
}
</style>
