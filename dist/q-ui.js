import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot, createTextVNode, toDisplayString, ref, watchEffect, normalizeStyle, createElementVNode, withModifiers, createVNode, Transition, withCtx, withDirectives, Fragment, renderList, vShow, pushScopeId, popScopeId } from "vue";
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
function throttle(fn, delay = 300) {
  let timer;
  return function() {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      fn();
      timer = null;
    }, delay);
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
const __default__$2 = {
  name: "QButton"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
const index_vue_vue_type_style_index_0_scoped_4eae179c_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const QButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4eae179c"]]);
QButton.install = (app) => {
  app.component(QButton.__name, QButton);
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-3b126f0b"), n = n(), popScopeId(), n);
const _hoisted_1$1 = ["title"];
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z" }, null, -1));
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("path", { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z" }, null, -1));
const _hoisted_6$1 = [
  _hoisted_5$1
];
const _hoisted_7 = ["title", "onMouseenter", "onClick"];
const __default__$1 = {
  name: "QSelect"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    options: { default: () => [] },
    label: { default: "label" },
    value: { default: "value" },
    placeholder: { default: "请选择" },
    disabled: { type: Boolean, default: false },
    allowClear: { type: Boolean, default: false },
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
      if (props.allowClear && selectedName.value) {
        showClose.value = true;
      }
    }
    function onInputLeave() {
      if (props.allowClear && showClose.value) {
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "m-select",
        style: normalizeStyle(`height: ${_ctx.height}px;`)
      }, [
        createElementVNode("div", {
          class: normalizeClass(["m-select-wrap", { hover: !_ctx.disabled, focus: showOptions.value, disabled: _ctx.disabled }]),
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
          (openBlock(), createElementBlock("svg", {
            class: normalizeClass(["triangle", { rotate: showOptions.value, show: !showClose.value }]),
            viewBox: "64 64 896 896",
            "data-icon": "down",
            "aria-hidden": "true",
            focusable: "false"
          }, _hoisted_3$1, 2)),
          (openBlock(), createElementBlock("svg", {
            onClick: withModifiers(onClear, ["stop"]),
            class: normalizeClass(["close", { show: showClose.value }]),
            focusable: "false",
            "data-icon": "close-circle",
            "aria-hidden": "true",
            viewBox: "64 64 896 896"
          }, _hoisted_6$1, 10, _hoisted_4$1))
        ], 38),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: "m-options-panel",
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
                }, toDisplayString(option[_ctx.label]), 43, _hoisted_7);
              }), 128))
            ], 36), [
              [vShow, showOptions.value]
            ])
          ]),
          _: 1
        })
      ], 4);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_3b126f0b_lang = "";
const QSelect = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-3b126f0b"]]);
QSelect.install = (app) => {
  app.component(QSelect.__name, QSelect);
};
const _withScopeId = (n) => (pushScopeId("data-v-8c81a90d"), n = n(), popScopeId(), n);
const _hoisted_1 = ["href", "title", "target"];
const _hoisted_2 = {
  key: 0,
  class: "u-separator"
};
const _hoisted_3 = {
  key: 1,
  class: "u-arrow",
  viewBox: "64 64 896 896",
  "data-icon": "right",
  "aria-hidden": "true",
  focusable: "false"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("path", { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z" }, null, -1));
const _hoisted_5 = [
  _hoisted_4
];
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "assist" }, null, -1));
const __default__ = {
  name: "QBreadcrumb"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    routes: { default: () => [] },
    fontSize: { default: 14 },
    height: { default: 21 },
    maxWidth: { default: 180 },
    separator: { default: "" },
    target: { default: "_self" }
  },
  setup(__props) {
    const props = __props;
    const len = computed(() => {
      return props.routes.length;
    });
    function getUrl(route) {
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
    }
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: "m-breadcrumb",
        style: normalizeStyle(`height: ${_ctx.height}px;`)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.routes, (route, index2) => {
          return openBlock(), createElementBlock("div", {
            class: "m-bread",
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
              _ctx.separator ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.separator), 1)) : (openBlock(), createElementBlock("svg", _hoisted_3, _hoisted_5))
            ], 64)) : createCommentVNode("", true)
          ]);
        }), 128)),
        _hoisted_6
      ], 4);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8c81a90d_lang = "";
const QBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8c81a90d"]]);
QBreadcrumb.install = (app) => {
  app.component(QBreadcrumb.__name, QBreadcrumb);
};
const components = [QButton, QSelect, QBreadcrumb];
const install = (app) => {
  components.forEach((component) => app.component(component.name, component));
};
const QUI = {
  install
};
export {
  QBreadcrumb,
  QButton,
  QSelect,
  copyText,
  dateFormat,
  debounce,
  QUI as default,
  downloadFile,
  isArrayRepeat,
  throttle
};
