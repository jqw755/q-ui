<template>
  <div :class="['q-select', selectUniClass]" :style="`height: ${height}px;`">
    <div
      :class="['q-select-wrap', { hover: !disabled, focus: showOptions, disabled: disabled }]"
      :style="`width: ${width}px; height: ${height}px;`"
      tabindex="0"
      ref="select"
      @mouseenter="onInputEnter"
      @mouseleave="onInputLeave"
      @blur="activeBlur && !disabled ? onBlur() : () => false"
      @click="disabled ? () => false : openSelect()"
    >
      <div
        :class="['u-select-input', { placeholder: !selectedName }]"
        :style="`line-height: ${height - 2}px;`"
        :title="selectedName"
      >
        {{ selectedName || placeholder }}
      </div>
      <q-icon
        name="q-icon-arrow-bottom"
        :class="['selec-q-icon triangle', { rotate: showOptions, show: !showClose }]"
      />
      <q-icon name="q-icon-close" :class="['selec-q-icon close', { show: showClose }]" @click.stop="onClear" />
    </div>
    <Transition name="fade">
      <div
        v-show="showOptions"
        :class="['q-options-panel', { 'q-select-loadmore': !!loadmore }]"
        @mouseenter="onEnter"
        @mouseleave="onLeave"
        :style="`top: ${height + 4}px; line-height: ${height - 10}px; max-height: ${
          maxDisplay * height + 9
        }px; width: ${width}px;`"
      >
        <p
          v-for="(option, index) in options"
          :key="index"
          :class="[
            'u-option',
            {
              'option-selected': option[label] === selectedName,
              'option-hover': !option.disabled && option[value] === hoverValue,
              'option-disabled': option.disabled,
            },
          ]"
          :title="option[label]"
          @mouseenter="onHover(option[value])"
          @click="option.disabled ? () => false : onChange(option[value], option[label], index)"
        >
          {{ option[label] }}
        </p>
        <p v-show="loading" class="select-loading__text">加载中...</p>
      </div>
    </Transition>
  </div>
</template>

<!-- 借助插件vite-plugin-vue-setup-extend ，可以再定义组件的name时，直接写在script上 -->
<script setup lang="ts" name="QSelect">
import { ref, watchEffect, onMounted, onUnmounted, nextTick } from "vue"
interface IOption {
  label?: string // 选项值
  value?: string | number // 选项名
  disabled?: boolean // 是否禁用选项
  [propName: string]: any // 添加一个字符串索引签名，用于包含带有任意数量的其他属性
}
interface IProps {
  options?: IOption[] // 选项数据
  label?: string // 字典项的文本字段名
  value?: string // 字典项的值字段名
  placeholder?: string // 默认文本
  disabled?: boolean // 是否禁用
  loadmore?: Function // 加载更多
  loading?: boolean // 是否加载更多中
  clearable?: boolean // 是否支持清除
  width?: number // 宽度
  height?: number // 高度
  maxDisplay?: number // 下拉面板最多能展示的下拉项数，超过后滚动显示
  modelValue?: number | string | null // （v-model）当前选中的option条目
}
const props = withDefaults(defineProps<IProps>(), {
  options: () => [],
  label: "label",
  value: "value",
  placeholder: "请选择",
  disabled: false,
  loadmore: undefined,
  loading: false,
  clearable: false,
  width: 120,
  height: 32,
  maxDisplay: 6,
  modelValue: null,
})

// 全局唯一的select class
const selectUniClass = ref()
// 滚动加载的q-select dom
const domClass = ref("")
const selectedName = ref()
const hoverValue = ref() // 鼠标悬浮项的value值
const showOptions = ref(false) // options面板
const activeBlur = ref(true) // 是否激活blur事件
const showClose = ref(false) // 清除按钮显隐
const select = ref()

watchEffect(() => {
  // 回调立即执行一次，同时会自动跟踪回调中所依赖的所有响应式依赖
  initSelector()
})

function initSelector() {
  if (props.modelValue) {
    const target = props.options.find((option) => option[props.value] === props.modelValue)
    if (target) {
      selectedName.value = target[props.label]
      hoverValue.value = target[props.value]
    } else {
      selectedName.value = props.modelValue
      hoverValue.value = null
    }
  } else {
    selectedName.value = null
    hoverValue.value = null
  }
}
function onBlur() {
  if (showOptions.value) {
    showOptions.value = false
  }
}
function onInputEnter() {
  // console.log('input enter')
  if (props.clearable && selectedName.value) {
    showClose.value = true
  }
}
function onInputLeave() {
  // console.log('input leave')
  if (props.clearable && showClose.value) {
    showClose.value = false
  }
}
function onHover(value: string | number) {
  hoverValue.value = value
}
function onEnter() {
  activeBlur.value = false
}
function onLeave() {
  hoverValue.value = null
  activeBlur.value = true
  select.value.focus()
}
function openSelect() {
  showOptions.value = !showOptions.value
  if (!hoverValue.value && selectedName.value) {
    const target = props.options.find((option) => option[props.label] === selectedName.value)
    hoverValue.value = target ? target[props.value] : null
  }
}
const emits = defineEmits(["update:modelValue", "change"])

function onClear() {
  showClose.value = false
  selectedName.value = null
  hoverValue.value = null
  emits("update:modelValue")
  emits("change")
}
function onChange(value: string | number, label: string, index: number) {
  // 选中下拉项后的回调
  if (props.modelValue !== value) {
    selectedName.value = label
    hoverValue.value = value
    emits("update:modelValue", value)
    emits("change", value, label, index)
  }
  showOptions.value = false
}
// 下拉菜单滚动触底时，加载更多
function loadMoreFn() {
  // 加载期间触发滚动时，不执行逻辑
  if (!props.loading) {
    props.loadmore && props.loadmore()
  }
}
// 计算滚动距离
function calcScrollDis() {
  const element = document.querySelector(domClass.value)
  if (element) {
    const { scrollTop, scrollHeight, clientHeight } = element
    const scrollDistance = scrollHeight - scrollTop <= clientHeight
    if (scrollDistance) {
      loadMoreFn()
    }
  }
}

// 生成全局唯一的class
const uniSelectClass = () => {
  const num = Math.ceil(Math.random() * 100 + 1)
  if (document.getElementById(`qSelect${num}`)) {
    uniSelectClass()
  } else {
    return `qSelect${num}`
  }
}

onMounted(() => {
  selectUniClass.value = uniSelectClass()
  domClass.value = "." + selectUniClass.value + " .q-select-loadmore"
  nextTick(() => {
    // 监听加载更多滚动事件
    const element = document.querySelector(domClass.value)
    element && element.addEventListener("scroll", calcScrollDis)
  })
})
onUnmounted(() => {
  const element = document.querySelector(domClass.value)
  element && element.removeEventListener("scroll", calcScrollDis)
})
</script>
<style lang="scss" scoped>
@import "./index.scss";
</style>
