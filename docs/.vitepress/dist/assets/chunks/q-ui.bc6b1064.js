import{d as S,l as I,o as r,c,b as z,G as M,r as G,a as H,t as _,n as v,h as m,k as K,C as h,K as g,a3 as R,J as P,E as X,a5 as Y,F as B,R as q,a6 as Z,T as x,S as L,U as E}from"./framework.dc35932b.js";function $e(t,u=300){let a;return function(){a||(a=setTimeout(()=>{t(),a=null},u))}}function we(t,u=300){let a;return function(){a&&clearTimeout(a),a=setTimeout(()=>{t(),a=null},u)}}const ee={key:0,class:"q-loadingIndicator"},ae={name:"QButton"},le=S({...ae,props:{type:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(t){const u=t,{type:a,dashed:o,size:l,round:n,disabled:d,loading:s}=u,p=I(()=>({[`q-type-${a}`]:a,["q-type-dashed"]:o,[`q-size-${l}`]:l,["is-round"]:n,["is-disabled"]:d||s,["is-loading"]:s}));return(b,C)=>(r(),c("button",{class:v(["q-button",p.value])},[z(s)?(r(),c("span",ee)):M("",!0),G(b.$slots,"default",{},()=>[H(_(z(a)),1)],!0)],2))}}),k=(t,u)=>{const a=t.__vccOpts||t;for(const[o,l]of u)a[o]=l;return a},y=k(le,[["__scopeId","data-v-4eae179c"]]);y.install=t=>{t.component(y.__name,y)};const N=t=>(L("data-v-3b126f0b"),t=t(),E(),t),te=["title"],se=N(()=>h("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"},null,-1)),oe=[se],ne=["onClick"],ue=N(()=>h("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"},null,-1)),ie=[ue],de=["title","onMouseenter","onClick"],re={name:"QSelect"},ce=S({...re,props:{options:{default:()=>[]},label:{default:"label"},value:{default:"value"},placeholder:{default:"请选择"},disabled:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},width:{default:120},height:{default:32},maxDisplay:{default:6},modelValue:{default:null}},emits:["update:modelValue","change"],setup(t,{emit:u}){const a=t,o=m(),l=m(),n=m(!1),d=m(!0),s=m(!1),p=m();K(()=>{b()});function b(){if(a.modelValue){const e=a.options.find(f=>f[a.value]===a.modelValue);e?(o.value=e[a.label],l.value=e[a.value]):(o.value=a.modelValue,l.value=null)}else o.value=null,l.value=null}function C(){n.value&&(n.value=!1)}function T(){a.allowClear&&o.value&&(s.value=!0)}function D(){a.allowClear&&s.value&&(s.value=!1)}function O(e){l.value=e}function U(){d.value=!1}function j(){l.value=null,d.value=!0,p.value.focus()}function F(){if(n.value=!n.value,!l.value&&o.value){const e=a.options.find(f=>f[a.label]===o.value);l.value=e?e[a.value]:null}}function J(){s.value=!1,o.value=null,l.value=null,u("update:modelValue"),u("change")}function W(e,f,i){a.modelValue!==e&&(o.value=f,l.value=e,u("update:modelValue",e),u("change",e,f,i)),n.value=!1}return(e,f)=>(r(),c("div",{class:"m-select",style:g(`height: ${e.height}px;`)},[h("div",{class:v(["m-select-wrap",{hover:!e.disabled,focus:n.value,disabled:e.disabled}]),style:g(`width: ${e.width}px; height: ${e.height}px;`),tabindex:"0",ref_key:"select",ref:p,onMouseenter:T,onMouseleave:D,onBlur:f[0]||(f[0]=i=>d.value&&!e.disabled?C():()=>!1),onClick:f[1]||(f[1]=i=>e.disabled?()=>!1:F())},[h("div",{class:v(["u-select-input",{placeholder:!o.value}]),style:g(`line-height: ${e.height-2}px;`),title:o.value},_(o.value||e.placeholder),15,te),(r(),c("svg",{class:v(["triangle",{rotate:n.value,show:!s.value}]),viewBox:"64 64 896 896","data-icon":"down","aria-hidden":"true",focusable:"false"},oe,2)),(r(),c("svg",{onClick:R(J,["stop"]),class:v(["close",{show:s.value}]),focusable:"false","data-icon":"close-circle","aria-hidden":"true",viewBox:"64 64 896 896"},ie,10,ne))],38),P(x,{name:"fade"},{default:X(()=>[Y(h("div",{class:"m-options-panel",onMouseenter:U,onMouseleave:j,style:g(`top: ${e.height+4}px; line-height: ${e.height-10}px; max-height: ${e.maxDisplay*e.height+9}px; width: ${e.width}px;`)},[(r(!0),c(B,null,q(e.options,(i,V)=>(r(),c("p",{key:V,class:v(["u-option",{"option-selected":i[e.label]===o.value,"option-hover":!i.disabled&&i[e.value]===l.value,"option-disabled":i.disabled}]),title:i[e.label],onMouseenter:A=>O(i[e.value]),onClick:A=>i.disabled?()=>!1:W(i[e.value],i[e.label],V)},_(i[e.label]),43,de))),128))],36),[[Z,n.value]])]),_:1})],4))}}),$=k(ce,[["__scopeId","data-v-3b126f0b"]]);$.install=t=>{t.component($.__name,$)};const Q=t=>(L("data-v-8c81a90d"),t=t(),E(),t),fe=["href","title","target"],he={key:0,class:"u-separator"},ve={key:1,class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},pe=Q(()=>h("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"},null,-1)),me=[pe],ge=Q(()=>h("div",{class:"assist"},null,-1)),_e={name:"QBreadcrumb"},be=S({..._e,props:{routes:{default:()=>[]},fontSize:{default:14},height:{default:21},maxWidth:{default:180},separator:{default:""},target:{default:"_self"}},setup(t){const u=t,a=I(()=>u.routes.length);function o(l){var n=l.path;if(l.query&&JSON.stringify(l.query)!=="{}"){const d=l.query;Object.keys(d).forEach((s,p)=>{p===0?n=n+"?"+s+"="+d[s]:n=n+"&"+s+"="+d[s]})}return n}return(l,n)=>(r(),c("div",{class:"m-breadcrumb",style:g(`height: ${l.height}px;`)},[(r(!0),c(B,null,q(l.routes,(d,s)=>(r(),c("div",{class:"m-bread",key:s},[h("a",{class:v(["u-route",{active:s===a.value-1}]),style:g(`font-size: ${l.fontSize}px; max-width: ${l.maxWidth}px;`),href:s===a.value-1?"javascript:;":o(d),title:d.name,target:s===a.value-1?"_self":l.target},_(d.name||"--"),15,fe),s!==a.value-1?(r(),c(B,{key:0},[l.separator?(r(),c("span",he,_(l.separator),1)):(r(),c("svg",ve,me))],64)):M("",!0)]))),128)),ge],4))}}),w=k(be,[["__scopeId","data-v-8c81a90d"]]);w.install=t=>{t.component(w.__name,w)};export{we as d,$e as t};
