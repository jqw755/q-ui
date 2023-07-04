import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot, createTextVNode, toDisplayString, ref, watchEffect, onMounted, nextTick, resolveComponent, normalizeStyle, createElementVNode, createVNode, withModifiers, Transition, withCtx, withDirectives, Fragment, renderList, vShow, pushScopeId, popScopeId } from "vue";
const index = "";
function dateFormat(time = Date.now(), fmt = "yyyy-MM-dd hh:mm:ss") {
  let date = new Date(time);
  let o = {
    "M+": date.getMonth() + 1,
    //月份
    "d+": date.getDate(),
    //日
    "h+": date.getHours(),
    //小时
    "m+": date.getMinutes(),
    //分
    "s+": date.getSeconds(),
    //秒
    "q+": Math.floor((date.getMonth() + 3) / 3),
    //季度
    S: date.getMilliseconds()
    //毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (let k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  return fmt;
}
function throttle(fn, deplay = 300) {
  let timer = null;
  return function(...args) {
    const context = this;
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(context, args);
      }, deplay);
    }
  };
}
function debounce(fn, delay = 300) {
  let timer;
  return function() {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
  };
}
function copyText(text) {
  return new Promise((resolve) => {
    const copyInput = document.createElement("input");
    copyInput.value = text;
    document.body.appendChild(copyInput);
    copyInput.select();
    document.execCommand("copy");
    copyInput.remove();
    resolve(true);
  });
}
function isArrayRepeat(arr) {
  var hash = {};
  for (var i in arr) {
    if (hash[arr[i]]) {
      return true;
    }
    hash[arr[i]] = true;
  }
  return false;
}
function downloadFile(url, name) {
  var fileName = "";
  if (name) {
    fileName = name;
  } else {
    const res = url.split("?")[0].split("/");
    fileName = res[res.length - 1];
  }
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.responseType = "blob";
  xhr.onload = function() {
    if (xhr.status === 200) {
      const blob = xhr.response;
      const link = document.createElement("a");
      const body = document.querySelector("body");
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.style.display = "none";
      body == null ? void 0 : body.appendChild(link);
      link.click();
      body == null ? void 0 : body.removeChild(link);
      window.URL.revokeObjectURL(link.href);
    }
  };
  xhr.send();
}
const _hoisted_1$2 = {
  key: 0,
  class: "q-loadingIndicator"
};
const __default__$3 = defineComponent({
  name: "QButton"
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
    type: {
      type: String,
      default: "default"
    },
    dashed: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    round: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const { type, dashed, size, round, disabled, loading } = props;
    const classes = computed(() => {
      return {
        [`q-type-${type}`]: type,
        [`q-type-dashed`]: dashed,
        [`q-size-${size}`]: size,
        [`is-round`]: round,
        [`is-disabled`]: disabled || loading,
        ["is-loading"]: loading
      };
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: normalizeClass(["q-button", classes.value])
      }, [
        unref(loading) ? (openBlock(), createElementBlock("span", _hoisted_1$2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(unref(type)), 1)
        ], true)
      ], 2);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_0b80682a_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const QButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0b80682a"]]);
QButton.install = (app) => {
  app.component(QButton.name, QButton);
};
const _hoisted_1$1 = ["title"];
const _hoisted_2$1 = ["title", "onMouseenter", "onClick"];
const _hoisted_3$1 = { class: "select-loading__text" };
const __default__$2 = defineComponent({
  name: "QSelect"
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: {
    options: { default: () => [] },
    label: { default: "label" },
    value: { default: "value" },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: false },
    loadMore: { type: Function, default: void 0 },
    isLoading: { type: Boolean, default: false },
    clearable: { type: Boolean, default: false },
    width: { default: 120 },
    height: { default: 32 },
    maxDisplay: { default: 6 },
    modelValue: { default: null }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const selectedName = ref();
    const hoverValue = ref();
    const showOptions = ref(false);
    const activeBlur = ref(true);
    const showClose = ref(false);
    const select = ref();
    watchEffect(() => {
      initSelector();
    });
    function initSelector() {
      if (props.modelValue) {
        const target = props.options.find((option) => option[props.value] === props.modelValue);
        if (target) {
          selectedName.value = target[props.label];
          hoverValue.value = target[props.value];
        } else {
          selectedName.value = props.modelValue;
          hoverValue.value = null;
        }
      } else {
        selectedName.value = null;
        hoverValue.value = null;
      }
    }
    function onBlur() {
      if (showOptions.value) {
        showOptions.value = false;
      }
    }
    function onInputEnter() {
      if (props.clearable && selectedName.value) {
        showClose.value = true;
      }
    }
    function onInputLeave() {
      if (props.clearable && showClose.value) {
        showClose.value = false;
      }
    }
    function onHover(value) {
      hoverValue.value = value;
    }
    function onEnter() {
      activeBlur.value = false;
    }
    function onLeave() {
      hoverValue.value = null;
      activeBlur.value = true;
      select.value.focus();
    }
    function openSelect() {
      showOptions.value = !showOptions.value;
      if (!hoverValue.value && selectedName.value) {
        const target = props.options.find((option) => option[props.label] === selectedName.value);
        hoverValue.value = target ? target[props.value] : null;
      }
    }
    function onClear() {
      showClose.value = false;
      selectedName.value = null;
      hoverValue.value = null;
      emits("update:modelValue");
      emits("change");
    }
    function onChange(value, label, index2) {
      if (props.modelValue !== value) {
        selectedName.value = label;
        hoverValue.value = value;
        emits("update:modelValue", value);
        emits("change", value, label, index2);
      }
      showOptions.value = false;
    }
    function loadMoreFn() {
      if (!props.isLoading) {
        props.loadMore && props.loadMore();
      }
    }
    onMounted(() => {
      nextTick(() => {
        const element = document.querySelector(".q-select .q-select-loadmore");
        element && element.addEventListener("scroll", () => {
          const { scrollTop, scrollHeight, clientHeight } = element;
          const scrollDistance = scrollHeight - scrollTop <= clientHeight;
          if (scrollDistance) {
            loadMoreFn();
          }
        });
      });
    });
    return (_ctx, _cache) => {
      const _component_q_icon = resolveComponent("q-icon");
      return openBlock(), createElementBlock("div", {
        class: "q-select",
        style: normalizeStyle(`height: ${_ctx.height}px;`)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["q-select-wrap", { hover: !_ctx.disabled, focus: showOptions.value, disabled: _ctx.disabled }]),
          style: normalizeStyle(`width: ${_ctx.width}px; height: ${_ctx.height}px;`),
          tabindex: "0",
          ref_key: "select",
          ref: select,
          onMouseenter: onInputEnter,
          onMouseleave: onInputLeave,
          onBlur: _cache[0] || (_cache[0] = ($event) => activeBlur.value && !_ctx.disabled ? onBlur() : () => false),
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.disabled ? () => false : openSelect())
        }, [
          createElementVNode("div", {
            class: normalizeClass(["u-select-input", { placeholder: !selectedName.value }]),
            style: normalizeStyle(`line-height: ${_ctx.height - 2}px;`),
            title: selectedName.value
          }, toDisplayString(selectedName.value || _ctx.placeholder), 15, _hoisted_1$1),
          createVNode(_component_q_icon, {
            name: "q-icon-arrow-bottom",
            class: normalizeClass(["selec-q-icon triangle", { rotate: showOptions.value, show: !showClose.value }])
          }, null, 8, ["class"]),
          createVNode(_component_q_icon, {
            name: "q-icon-close",
            class: normalizeClass(["selec-q-icon close", { show: showClose.value }]),
            onClick: withModifiers(onClear, ["stop"])
          }, null, 8, ["class", "onClick"])
        ], 38),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: normalizeClass(["q-options-panel", { "q-select-loadmore": !!_ctx.loadMore }]),
              onMouseenter: onEnter,
              onMouseleave: onLeave,
              style: normalizeStyle(`top: ${_ctx.height + 4}px; line-height: ${_ctx.height - 10}px; max-height: ${_ctx.maxDisplay * _ctx.height + 9}px; width: ${_ctx.width}px;`)
            }, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.options, (option, index2) => {
                return openBlock(), createElementBlock("p", {
                  key: index2,
                  class: normalizeClass([
                    "u-option",
                    {
                      "option-selected": option[_ctx.label] === selectedName.value,
                      "option-hover": !option.disabled && option[_ctx.value] === hoverValue.value,
                      "option-disabled": option.disabled
                    }
                  ]),
                  title: option[_ctx.label],
                  onMouseenter: ($event) => onHover(option[_ctx.value]),
                  onClick: ($event) => option.disabled ? () => false : onChange(option[_ctx.value], option[_ctx.label], index2)
                }, toDisplayString(option[_ctx.label]), 43, _hoisted_2$1);
              }), 128)),
              withDirectives(createElementVNode("p", _hoisted_3$1, "加载中...", 512), [
                [vShow, _ctx.isLoading]
              ])
            ], 38), [
              [vShow, showOptions.value]
            ])
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_beb910d4_lang = "";
const QSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-beb910d4"]]);
QSelect.install = (app) => {
  app.component(QSelect.name, QSelect);
};
const _withScopeId = (n) => (pushScopeId("data-v-6e1538d3"), n = n(), popScopeId(), n);
const _hoisted_1 = ["href", "title", "target"];
const _hoisted_2 = {
  key: 0,
  class: "u-separator"
};
const _hoisted_3 = {
  key: 1,
  class: "u-separator"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "assist" }, null, -1));
const __default__$1 = defineComponent({
  name: "QBreadcrumb"
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    routes: { default: () => [] },
    fontSize: { default: 14 },
    height: { default: 21 },
    maxWidth: { default: 150 },
    separator: { default: "" },
    target: { default: "_self" }
  },
  setup(__props) {
    const props = __props;
    const len = computed(() => {
      return props.routes.length;
    });
    const getUrl = (route) => {
      var targetUrl = route.path;
      if (route.query && JSON.stringify(route.query) !== "{}") {
        const query = route.query;
        Object.keys(query).forEach((param, index2) => {
          if (index2 === 0) {
            targetUrl = targetUrl + "?" + param + "=" + query[param];
          } else {
            targetUrl = targetUrl + "&" + param + "=" + query[param];
          }
        });
      }
      return targetUrl;
    };
    return (_ctx, _cache) => {
      const _component_q_icon = resolveComponent("q-icon");
      return openBlock(), createElementBlock("div", {
        class: "q-breadcrumb",
        style: normalizeStyle(`height: ${_ctx.height}px;`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.routes, (route, index2) => {
          return openBlock(), createElementBlock("div", {
            class: "q-bread",
            key: index2
          }, [
            createElementVNode("a", {
              class: normalizeClass(["u-route", { active: index2 === len.value - 1 }]),
              style: normalizeStyle(`font-size: ${_ctx.fontSize}px; max-width: ${_ctx.maxWidth}px;`),
              href: index2 === len.value - 1 ? "javascript:;" : getUrl(route),
              title: route.name,
              target: index2 === len.value - 1 ? "_self" : _ctx.target
            }, toDisplayString(route.name || "--"), 15, _hoisted_1),
            index2 !== len.value - 1 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              _ctx.separator ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.separator), 1)) : (openBlock(), createElementBlock("span", _hoisted_3, [
                createVNode(_component_q_icon, { name: "q-icon-arrow-right" })
              ]))
            ], 64)) : createCommentVNode("", true)
          ]);
        }), 128)),
        _hoisted_4
      ], 4);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_6e1538d3_lang = "";
const QBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6e1538d3"]]);
QBreadcrumb.install = (app) => {
  app.component(QBreadcrumb.name, QBreadcrumb);
};
const __default__ = defineComponent({
  name: "QIcon"
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    name: String,
    color: {
      type: String,
      default: "#333333"
    },
    size: {
      type: String,
      default: "14"
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("i", {
        class: normalizeClass(["qIconfont", __props.name]),
        style: normalizeStyle({ color: __props.color, fontSize: __props.size + "px" })
      }, null, 6);
    };
  }
});
const index_vue_vue_type_style_index_0_lang = "";
_sfc_main.install = (app) => {
  app.component(_sfc_main.name, _sfc_main);
};
const components = [QButton, QSelect, QBreadcrumb, _sfc_main];
const install = (app) => {
  components.forEach((component) => app.component(component.name, component));
};
const QUI = {
  install
};
export {
  QBreadcrumb,
  QButton,
  _sfc_main as QIcon,
  QSelect,
  copyText,
  dateFormat,
  debounce,
  QUI as default,
  downloadFile,
  isArrayRepeat,
  throttle
};
