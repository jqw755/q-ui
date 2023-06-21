<template>
  <div class="layout">
    <aside class="menu-aside">
      <h2 class="mb-10">组件列表</h2>
      <router-link class="menu-item" to="/doc/button">Button按钮</router-link>
      <!-- <router-link class="menu-item" to="/doc/button">Select下拉框</router-link> -->
    </aside>
    <main class="main-view">
      <router-view />
    </main>
  </div>
</template>
<style lang="scss">
.layout {
  display: flex;
}
.menu-aside {
  width: 200px;
  margin-right: 100px;
}
.main-view {
  width: 900px;
}
.menu-item {
  display: block;
  font-weight: 500;
  text-decoration: inherit;
  color: #606266;
  padding: 10px 16px;
  line-height: 1.5;
  font-size: 0.9rem;
  border-radius: 4px;
  &.router-link-active {
    color: $primary-color;
    background: rgba($primary-color, 0.1);
  }
}
</style>
