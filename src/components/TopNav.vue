<template>
  <header class="top-nav-wrap">
    <div class="nav-wrap">
      <router-link v-for="item in navList" :key="item.id" class="nav-item" :to="item.path">{{ item.name }}</router-link>
    </div>
  </header>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"

interface IPageRow {
  id: number
  path: string
  name: string
}

const navList = reactive<IPageRow[]>([
  { id: 1, path: "/home", name: "介绍" },
  { id: 2, path: "/get-started", name: "开始" },
  { id: 3, path: "/doc", name: "组件" },
])
</script>
<style lang="scss">
.top-nav-wrap {
  display: flex;
  position: sticky;
  width: 100%;
  padding: 0 32px;
  border-bottom: 1px solid #dcdfe6;
  justify-content: flex-end;
  .nav-wrap {
    display: flex;
    .nav-item {
      display: block;
      text-decoration: inherit;
      padding: 0 12px;
      line-height: 52px;
      font-size: 14px;
      font-weight: 500;
      color: #301333;
      transition: all 0.3s;
      border-bottom: 2px solid transparent;
      &.router-link-active {
        border-bottom: 2px solid $primary-color;
        color: $primary-color;
      }
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
