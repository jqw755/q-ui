import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, unref, createCommentVNode, renderSlot, createTextVNode, toDisplayString, ref, watchEffect, resolveComponent, normalizeStyle, createElementVNode, createVNode, withModifiers, Transition, withCtx, withDirectives, Fragment, renderList, vShow, pushScopeId, popScopeId } from "vue";
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
const _hoisted_1$3 = {
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
        unref(loading) ? (openBlock(), createElementBlock("span", _hoisted_1$3)) : createCommentVNode("", true),
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
const _hoisted_1$2 = ["title"];
const _hoisted_2$1 = ["title", "onMouseenter", "onClick"];
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
          }, toDisplayString(selectedName.value || _ctx.placeholder), 15, _hoisted_1$2),
          createVNode(_component_q_icon, {
            name: "q-icon-arrow-bottom",
            class: normalizeClass(["triangle", { rotate: showOptions.value, show: !showClose.value }])
          }, null, 8, ["class"]),
          createVNode(_component_q_icon, {
            name: "q-icon-close",
            class: normalizeClass(["close", { show: showClose.value }]),
            onClick: withModifiers(onClear, ["stop"])
          }, null, 8, ["class", "onClick"])
        ], 38),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", {
              class: "q-options-panel",
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
const index_vue_vue_type_style_index_0_scoped_9026db89_lang = "";
const QSelect = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-9026db89"]]);
QSelect.install = (app) => {
  app.component(QSelect.name, QSelect);
};
const _withScopeId = (n) => (pushScopeId("data-v-625bf3fe"), n = n(), popScopeId(), n);
const _hoisted_1$1 = ["href", "title", "target"];
const _hoisted_2 = {
  key: 0,
  class: "u-separator"
};
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "assist" }, null, -1));
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
            }, toDisplayString(route.name || "--"), 15, _hoisted_1$1),
            index2 !== len.value - 1 ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString(_ctx.separator || ">"), 1)) : createCommentVNode("", true)
          ]);
        }), 128)),
        _hoisted_3
      ], 4);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_625bf3fe_lang = "";
const QBreadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-625bf3fe"]]);
QBreadcrumb.install = (app) => {
  app.component(QBreadcrumb.name, QBreadcrumb);
};
window._iconfont_svg_string_1837560 = '<svg><symbol id="q-icon-close" viewBox="0 0 1024 1024"><path d="M512 1024C229.701818 1024 0 794.298182 0 512S229.701818 0 512 0c282.321455 0 512 229.701818 512 512S794.344727 1024 512 1024zM512 44.520727C254.231273 44.520727 44.544 254.208 44.544 512c0 257.768727 209.710545 467.479273 467.479273 467.479273 257.792 0 467.479273-209.733818 467.479273-467.479273C979.502545 254.208 769.792 44.520727 512 44.520727z" fill="#414042" ></path><path d="M666.693818 692.177455c-5.701818 0-11.403636-2.164364-15.755636-6.493091L342.690909 377.390545c-8.704-8.704-8.704-22.784 0-31.488 8.704-8.704 22.784-8.704 31.488 0L682.426182 654.196364c8.704 8.680727 8.704 22.784 0 31.488C678.097455 690.013091 672.418909 692.177455 666.693818 692.177455z" fill="#414042" ></path><path d="M354.048 692.200727c-5.701818 0-11.380364-2.187636-15.732364-6.493091-8.704-8.704-8.704-22.784 0-31.488L654.196364 338.338909c8.704-8.704 22.784-8.704 31.488 0 8.680727 8.704 8.680727 22.784 0 31.488L369.803636 685.707636C365.451636 690.013091 359.749818 692.200727 354.048 692.200727z" fill="#414042" ></path></symbol><symbol id="q-icon-refresh-left" viewBox="0 0 1024 1024"><path d="M779.83616 240.49152C704.92544 167.94752 605.32736 128 499.38816 128c-0.0064 0 0.00768 0-0.00128 0-105.93024 0-205.53984 39.95392-280.44416 112.49152-0.34432 0.33408-1.41184 1.37088-2.944 2.86336l12.10112-43.72992c3.72736-13.46816-4.52864-27.31392-18.43584-30.92352-13.9136-3.61216-28.2048 4.384-31.93216 17.85344l-37.28 134.72768c-2.41152 8.71424 0.16128 18.0096 6.74688 24.38784 4.95488 4.79744 11.61344 7.39456 18.43712 7.39456 2.25024 0 4.51712-0.28288 6.74816-0.86016l139.12448-36.10112c13.90848-3.6096 22.1632-17.45408 18.43584-30.92352-3.72608-13.46816-18.02496-21.46176-31.93216-17.85344l-45.12128 11.70816c1.1904-1.1584 2.19776-2.13632 2.92224-2.84032 65.0624-63.00416 151.5648-97.70368 243.57376-97.70112 92.00896 0 178.51392 34.69696 243.57376 97.70112 134.30784 130.0608 134.30784 341.68448 0.00128 471.744-134.30656 130.05568-352.83968 130.05952-487.1488 0-34.0608-32.9856-60.1152-71.5584-77.43872-114.6432-5.22368-12.992-20.33792-19.424-33.75488-14.36928-13.41824 5.05856-20.06144 19.69408-14.83648 32.68736 19.96032 49.64736 49.95584 94.07104 89.15968 132.03072 74.90816 72.54272 174.50752 112.49024 280.44544 112.49024 105.94048 0 205.53856-39.95008 280.448-112.49024C854.74688 711.104 896.00128 614.656 896 512.06784 896 409.47968 854.74688 313.03296 779.83616 240.49152z"  ></path></symbol><symbol id="q-icon-delete" viewBox="0 0 1024 1024"><path d="M388.99712 188.80768h271.63904c15.1488 0 27.47264-12.18688 27.47264-27.16416 0-14.97856-12.32384-27.16416-27.47264-27.16416H388.99712c-15.1488 0-27.47136 12.1856-27.47136 27.16416-0.00128 14.97856 12.32256 27.16416 27.47136 27.16416zM881.344 268.24704H168.28928c-15.1488 0-27.47264 12.1856-27.47264 27.16416s12.32384 27.16416 27.47264 27.16416H881.344c15.1488 0 27.47136-12.1856 27.47136-27.16416s-12.32256-27.16416-27.47136-27.16416zM813.4336 410.93632c-15.1488 0-27.47136 12.18688-27.47136 27.16416V810.6112c0 20.69888-16.9792 37.53984-37.8496 37.53984h-446.592c-20.8704 0-37.8496-16.83968-37.8496-37.53984V438.10048c0-14.97856-12.32384-27.16416-27.47136-27.16416s-27.47264 12.18688-27.47264 27.16416V810.6112c0 50.656 41.62688 91.86816 92.7936 91.86816h446.592c51.16672 0 92.7936-41.21216 92.7936-91.86816V438.10048c0-14.97856-12.32384-27.16416-27.47264-27.16416z"  ></path><path d="M453.91104 690.33984V454.91712c0-14.97856-12.32384-27.16416-27.47136-27.16416-15.1488 0-27.47264 12.18688-27.47264 27.16416v235.42272c0 14.97856 12.32384 27.16416 27.47264 27.16416s27.47136-12.1856 27.47136-27.16416zM623.36256 690.33984V454.91712c0-14.97856-12.32384-27.16416-27.47136-27.16416-15.1488 0-27.47264 12.18688-27.47264 27.16416v235.42272c0 14.97856 12.32384 27.16416 27.47264 27.16416 15.14752 0 27.47136-12.1856 27.47136-27.16416z"  ></path></symbol><symbol id="q-icon-edit" viewBox="0 0 1024 1024"><path d="M800.6 370.7l41-48.9c41.2-49.1 35.7-122-12.4-162.6l-81.6-68.8c-20.2-17-45.9-26.4-72.4-26.4-34.5 0-67 15.3-89.5 42l-41.1 48.9 256 215.8z m-7-80.7L625.1 148l4.3-5.1c20.3-24.1 58.2-28.4 81.5-8.7l81.6 68.8c24 20.2 26.4 56.9 5.4 81.9l-4.3 5.1z m101 614H296.9l69.2-19.6c5.5-1.5 10.4-4.7 14.1-9.1l359.1-432c10.1-12.1 8.6-30.1-3.4-40.2L524.4 223.3c-5.8-4.9-13.2-7.5-20.9-6.7-7.5 0.6-14.6 4.2-19.4 10.1L124.3 659.6c-3.7 4.4-6 9.7-6.6 15.4L92.2 921.3c-1 9.4 2.8 18.7 10 24.9 5.2 4.4 11.7 6.7 18.4 6.7 0.6 0 1.2-0.2 1.8-0.3 6 4.6 13.4 7.4 21.5 7.4h752.3c19.7 0 35.7-17.6 35.7-37.3 0.1-19.8-17.6-18.7-37.3-18.7z m-721-214.3l335.8-404.2 167.9 142.7-335.2 403.5-188.7 53.5 20.2-195.5z"  ></path></symbol><symbol id="q-icon-add" viewBox="0 0 1024 1024"><path d="M512 832a32 32 0 0 0 32-32V544h256a32 32 0 0 0 0-64H544V224a32 32 0 0 0-64 0v256H224a32 32 0 0 0 0 64h256v256a32 32 0 0 0 32 32"  ></path></symbol><symbol id="q-icon-arrow-right" viewBox="0 0 1024 1024"><path d="M693.792 498.24l-320-297.664a32 32 0 0 0-43.584 46.848l295.36 274.752-295.84 286.848a31.968 31.968 0 1 0 44.544 45.92l320-310.272a31.968 31.968 0 0 0-0.48-46.4"  ></path></symbol><symbol id="q-icon-arrow-top" viewBox="0 0 1024 1024"><path d="M498.24000001 330.208l-297.66400001 320a32 32 0 0 0 46.84800001 43.584l274.75199999-295.36 286.848 295.84000001a31.968 31.968 0 1 0 45.92-44.54400001l-310.272-320.00000001a31.968 31.968 0 0 0-46.4 0.48000001"  ></path></symbol><symbol id="q-icon-arrow-bottom" viewBox="0 0 1024 1024"><path d="M525.75999999 693.792l297.66400001-320a32 32 0 0 0-46.84800001-43.584l-274.75199999 295.36-286.848-295.84000001a31.968 31.968 0 1 0-45.92 44.54400001l310.272 320.00000001a31.968 31.968 0 0 0 46.4-0.48000001"  ></path></symbol><symbol id="q-icon-upload" viewBox="0 0 1024 1024"><path d="M662.63 545.37l-128-128a32 32 0 0 0-45.25 0l-128 128a32 32 0 1 0 45.25 45.25L480 517.25V872a32 32 0 0 0 64 0V517.25l73.37 73.37a32 32 0 1 0 45.25-45.25z"  ></path><path d="M752 760H640a32 32 0 0 1 0-64h112c79.4 0 144-64.6 144-144a144 144 0 0 0-132.45-143.54 32 32 0 0 1-29.24-28C720.6 268.46 625 184 512 184s-208.6 84.46-222.31 196.45a32 32 0 0 1-29.24 28A144 144 0 0 0 128 552c0 79.4 64.6 144 144 144h112a32 32 0 0 1 0 64H272c-114.69 0-208-93.31-208-208a208.08 208.08 0 0 1 166.23-203.79C258 216.5 375 120 512 120s254 96.5 281.77 228.21A208.08 208.08 0 0 1 960 552c0 114.69-93.31 208-208 208z"  ></path></symbol><symbol id="q-icon-star-off" viewBox="0 0 1024 1024"><path d="M802.4 967.2c-7.2 0-15.2-1.6-21.6-4.8L522.4 833.6l-252.8 140c-18.4 10.4-41.6 5.6-56-9.6-8.8-9.6-12.8-23.2-11.2-36.8l43.2-285.6L33.6 444c-12.8-12-17.6-29.6-12-46.4 4.8-16.8 18.4-28.8 36-31.2l285.6-48L464.8 56c7.2-15.2 22.4-25.6 39.2-26.4 17.6-0.8 33.6 8.8 41.6 24l133.6 256.8 287.2 35.2c17.6 2.4 31.2 13.6 36.8 30.4 5.6 16 1.6 34.4-10.4 46.4L790.4 629.6l55.2 284c2.4 12.8-0.8 26.4-8.8 36.8-8.8 10.4-21.6 16.8-34.4 16.8zM520.8 784.8c7.2 0 15.2 1.6 21.6 4.8l255.2 127.2-54.4-280c-3.2-14.4 1.6-29.6 12-40l200-203.2L672 358.4c-14.4-1.6-28-11.2-34.4-24L506.4 81.6 385.6 340c-6.4 13.6-19.2 23.2-33.6 25.6L70.4 412l208 194.4c11.2 10.4 16 24.8 13.6 40L249.6 928l249.6-137.6c7.2-3.2 14.4-4.8 21.6-5.6z"  ></path></symbol><symbol id="q-icon-image" viewBox="0 0 1024 1024"><path d="M857 167H200c-55 0-100 45-100 100v484c0 55 45 100 100 100h657c55 0 100-45 100-100V267c0-55-45-100-100-100z m-695.1 61.9c10.3-10.3 23.8-15.9 38.1-15.9h657c14.3 0 27.8 5.6 38.1 15.9S911 252.7 911 267v429.1L785.3 561.3c-4.3-4.6-10.3-7.2-16.5-7.3-6.3-0.1-12.3 2.4-16.7 6.9l-139.3 142-219.9-238.4c-4.3-4.7-10.3-7.3-16.7-7.4h-0.3c-6.2 0-12.2 2.5-16.6 7L146 685.7V267c0-14.3 5.6-27.8 15.9-38.1zM857 805H200c-14.3 0-27.8-5.6-38.1-15.9-10-10-15.7-23.2-15.9-37.2 0.4-0.3 0.8-0.7 1.1-1l228.5-237.2 219.6 238.2c4.3 4.6 10.3 7.3 16.6 7.4h0.4c6.2 0 12.1-2.5 16.4-6.9L768 610.3l141.8 152c-2.2 10-7.2 19.3-14.7 26.8-10.3 10.3-23.8 15.9-38.1 15.9z"  ></path><path d="M750 370m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z"  ></path></symbol><symbol id="q-icon-arrow-left" viewBox="0 0 1024 1024"><path d="M330.208 525.75999999l320 297.66400001a32 32 0 0 0 43.584-46.84800001l-295.36-274.75199999 295.84000001-286.848a31.968 31.968 0 1 0-44.54400001-45.92l-320.00000001 310.272a31.968 31.968 0 0 0 0.48000001 46.4"  ></path></symbol><symbol id="q-icon-location" viewBox="0 0 1024 1024"><path d="M512.097 332.113a99.583 99.583 0 1 1-70.788 29.395 99.583 99.583 0 0 1 70.788-29.395m0-59.99a160.172 160.172 0 1 0 113.38 46.793 158.973 158.973 0 0 0-113.38-46.792z"  ></path><path d="M786.85 148.545a382.134 382.134 0 0 0-549.506 0 404.33 404.33 0 0 0 0 562.103L512.097 992l274.752-281.352a404.33 404.33 0 0 0 0-562.103z m-41.393 522.51l-233.36 239.959-233.36-239.959a342.541 342.541 0 0 1 0-476.918 325.144 325.144 0 0 1 466.72 0 342.541 342.541 0 0 1 0 476.918z"  ></path></symbol><symbol id="q-icon-loading" viewBox="0 0 1024 1024"><path d="M480 64h64v256h-64V64z m0 640h64v256h-64V704z m480-224v64H704v-64h256z m-640 0v64H64v-64h256zM173 218l45-45 181 181-45 45z m452 452l45-45 181 181-45 45z m181-497l45 45-181 181-45-45zM354 625l45 45-181 181-45-45z"  ></path></symbol></svg>', function(c) {
  var t = (t = document.getElementsByTagName("script"))[t.length - 1], e = t.getAttribute("data-injectcss"), t = t.getAttribute("data-disable-injectsvg");
  if (!t) {
    var o, a, l, i, n, d = function(t2, e2) {
      e2.parentNode.insertBefore(t2, e2);
    };
    if (e && !c.__iconfont__svg__cssinject__) {
      c.__iconfont__svg__cssinject__ = true;
      try {
        document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
      } catch (t2) {
        console && console.log(t2);
      }
    }
    o = function() {
      var t2, e2 = document.createElement("div");
      e2.innerHTML = c._iconfont_svg_string_1837560, (e2 = e2.getElementsByTagName("svg")[0]) && (e2.setAttribute("aria-hidden", "true"), e2.style.position = "absolute", e2.style.width = 0, e2.style.height = 0, e2.style.overflow = "hidden", e2 = e2, (t2 = document.body).firstChild ? d(e2, t2.firstChild) : t2.appendChild(e2));
    }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(o, 0) : (a = function() {
      document.removeEventListener("DOMContentLoaded", a, false), o();
    }, document.addEventListener("DOMContentLoaded", a, false)) : document.attachEvent && (l = o, i = c.document, n = false, h(), i.onreadystatechange = function() {
      "complete" == i.readyState && (i.onreadystatechange = null, s());
    });
  }
  function s() {
    n || (n = true, l());
  }
  function h() {
    try {
      i.documentElement.doScroll("left");
    } catch (t2) {
      return void setTimeout(h, 50);
    }
    s();
  }
}(window);
const _hoisted_1 = ["xlink:href"];
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
    const props = __props;
    const iconName = computed(() => {
      return `#${props.name}`;
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("svg", {
        class: "icon",
        style: normalizeStyle({ color: __props.color, fontSize: __props.size + "px" }),
        "aria-hidden": "true"
      }, [
        createElementVNode("use", { "xlink:href": iconName.value }, null, 8, _hoisted_1)
      ], 4);
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
