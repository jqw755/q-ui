# Button 按钮

## 基本使用

<div>
  <q-button :class="$style['mr10']">Default</q-button>
  <q-button :class="$style['mr10']" type="primary" >Primary</q-button>
  <q-button :class="$style['mr10']" type="success" >Success</q-button>
  <q-button :class="$style['mr10']" type="info" >Info</q-button>
  <q-button :class="$style['mr10']" type="warning" >Warning</q-button>
  <q-button :class="$style['mr10']" type="danger" >Danger</q-button>
  <q-button :class="$style['mr10']" loading >Loading</q-button>
</div>
<br/>
<div>
  <q-button :class="$style['mr10']" round>Default</q-button>
  <q-button :class="$style['mr10']" type="primary" round>Primary</q-button>
  <q-button :class="$style['mr10']" type="success" round>Success</q-button>
  <q-button :class="$style['mr10']" type="info" round>Info</q-button>
  <q-button :class="$style['mr10']" type="warning" round>Warning</q-button>
  <q-button :class="$style['mr10']" type="danger" round>Danger</q-button>
</div>
<br/>
<div>
  <q-button :class="$style['mr10']" round>
    <q-icon name="q-icon-refresh-left" />
  </q-button>
  <q-button :class="$style['mr10']" type="primary" round>
    <q-icon name="q-icon-delete" color="#fff"/>
  </q-button>
  <q-button :class="$style['mr10']" type="success" round>
    <q-icon name="q-icon-edit" color="#fff"/>
  </q-button>
  <q-button :class="$style['mr10']" type="info" round>
    <q-icon name="q-icon-star-off" color="#fff"/>
  </q-button>
  <q-button :class="$style['mr10']" type="warning" round>
    <q-icon name="q-icon-location" color="#fff"/>
  </q-button>
  <q-button :class="$style['mr10']" type="danger" round>
    <q-icon name="q-icon-upload" color="#fff"/>
  </q-button>
</div>

::: details code

```vue
<template>
  <div>
    <q-button>Default</q-button>
    <q-button type="primary">Primary</q-button>
    <q-button type="success">Success</q-button>
    <q-button type="info">Info</q-button>
    <q-button type="warning">Warning</q-button>
    <q-button type="danger">Danger</q-button>
    <q-button loading>Loading</q-button>
  </div>

  <div>
    <q-button round>Default</q-button>
    <q-button type="primary" round>Primary</q-button>
    <q-button type="success" round>Success</q-button>
    <q-button type="info" round>Info</q-button>
    <q-button type="warning" round>Warning</q-button>
    <q-button type="danger" round>Danger</q-button>
  </div>

  <div>
    <q-button round>
      <q-icon name="q-icon-refresh-left" />
    </q-button>
    <q-button type="primary" round>
      <q-icon name="q-icon-delete" color="#fff" />
    </q-button>
    <q-button type="success" round>
      <q-icon name="q-icon-edit" color="#fff" />
    </q-button>
    <q-button type="info" round>
      <q-icon name="q-icon-star-off" color="#fff" />
    </q-button>
    <q-button type="warning" round>
      <q-icon name="q-icon-location" color="#fff" />
    </q-button>
    <q-button type="danger" round>
      <q-icon name="q-icon-upload" color="#fff" />
    </q-button>
  </div>
</template>
```

:::

## 禁用状态

<div>
  <q-button disabled>Disabled</q-button>
</div>

::: details Code

```vue
<template>
  <q-button disabled>Disabled</q-button>
</template>
```

:::

## 尺寸

<div>
  <q-button :class="$style['mr10']" size="small" >Small</q-button>
  <q-button :class="$style['mr10']">Default</q-button>
  <q-button :class="$style['mr10']" size="large" >Large</q-button>
</div>

::: details Code

```vue
<template>
  <q-button size="small">Small</q-button>
  <q-button>Default</q-button>
  <q-button size="large">Large</q-button>
</template>
```

:::

<style module>
.mr10  {
  margin-right: 10px;
}

</style>

## APIs

| 参数     | 说明     | 类型                              | 默认值  | 必传  |
| -------- | -------- | --------------------------------- | ------- | ----- |
| name     | 默认文本 | string                            | default | false |
| type     | 类型     | 'default' &#124; 'primary' &#124; | primary | false |
| size     | 尺寸     | 'small' &#124; 'large'            | -       | false |
| round    | 圆角按钮 | boolean                           | false   | false |
| disabled | 禁用状态 | boolean                           | false   | false |
| loading  | 加载状态 | boolean                           | false   | false |

## Events

| 事件名称 | 说明             | 参数               |
| -------- | ---------------- | ------------------ |
| click    | 点击按钮时的回调 | (e: Event) => void |
