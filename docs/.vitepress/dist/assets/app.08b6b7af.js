import{d as v,l as I,o as c,c as p,b as A,G as E,r as W,n as f,i as g,k as z,C as h,K as b,t as _,a3 as K,J as X,E as Y,T as Z,F as L,R as M,a as x,a5 as ee,a6 as ae,S as P,U as D,Q as B,a7 as te,a8 as le,a9 as se,aa as ne,ab as oe,ac as ue,ad as ie,ae as re,af as de,ag as ce,M as pe,u as fe,q as he,ah as ve,ai as me,aj as ge,ak as be}from"./chunks/framework.daa0b590.js";import{t as ye}from"./chunks/theme.7531f3f1.js";const _e={key:0,class:"q-loadingIndicator"},$e=v({name:"QButton"}),we=v({...$e,props:{type:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const l=e,{type:a,dashed:n,size:s,round:u,disabled:r,loading:o}=l,m=I(()=>({[`q-type-${a}`]:a,["q-type-dashed"]:n,[`q-size-${s}`]:s,["is-round"]:u,["is-disabled"]:r||o,["is-loading"]:o}));return(C,V)=>(c(),p("button",{class:f(["q-button",m.value])},[A(o)?(c(),p("span",_e)):E("",!0),W(C.$slots,"default",{},()=>[x(_(A(a)),1)],!0)],2))}}),k=(e,l)=>{const a=e.__vccOpts||e;for(const[n,s]of l)a[n]=s;return a},$=k(we,[["__scopeId","data-v-0b80682a"]]);$.install=e=>{e.component($.name,$)};const O=e=>(P("data-v-67820ef2"),e=e(),D(),e),Se=["title"],Ce=O(()=>h("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"},null,-1)),Be=[Ce],ke=["onClick"],Ve=O(()=>h("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"},null,-1)),qe=[Ve],Ae=["title","onMouseenter","onClick"],Ie=v({name:"QSelect"}),Ee=v({...Ie,props:{options:{default:()=>[]},label:{default:"label"},value:{default:"value"},placeholder:{default:"请选择"},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},width:{default:120},height:{default:32},maxDisplay:{default:6},modelValue:{default:null}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,n=g(),s=g(),u=g(!1),r=g(!0),o=g(!1),m=g();z(()=>{C()});function C(){if(a.modelValue){const t=a.options.find(d=>d[a.value]===a.modelValue);t?(n.value=t[a.label],s.value=t[a.value]):(n.value=a.modelValue,s.value=null)}else n.value=null,s.value=null}function V(){u.value&&(u.value=!1)}function R(){a.clearable&&n.value&&(o.value=!0)}function T(){a.clearable&&o.value&&(o.value=!1)}function N(t){s.value=t}function j(){r.value=!1}function F(){s.value=null,r.value=!0,m.value.focus()}function U(){if(u.value=!u.value,!s.value&&n.value){const t=a.options.find(d=>d[a.label]===n.value);s.value=t?t[a.value]:null}}function G(){o.value=!1,n.value=null,s.value=null,l("update:modelValue"),l("change")}function H(t,d,i){a.modelValue!==t&&(n.value=d,s.value=t,l("update:modelValue",t),l("change",t,d,i)),u.value=!1}return(t,d)=>(c(),p("div",{class:"q-select",style:b(`height: ${t.height}px;`)},[h("div",{class:f(["q-select-wrap",{hover:!t.disabled,focus:u.value,disabled:t.disabled}]),style:b(`width: ${t.width}px; height: ${t.height}px;`),tabindex:"0",ref_key:"select",ref:m,onMouseenter:R,onMouseleave:T,onBlur:d[0]||(d[0]=i=>r.value&&!t.disabled?V():()=>!1),onClick:d[1]||(d[1]=i=>t.disabled?()=>!1:U())},[h("div",{class:f(["u-select-input",{placeholder:!n.value}]),style:b(`line-height: ${t.height-2}px;`),title:n.value},_(n.value||t.placeholder),15,Se),(c(),p("svg",{class:f(["triangle",{rotate:u.value,show:!o.value}]),viewBox:"64 64 896 896","data-icon":"down","aria-hidden":"true",focusable:"false"},Be,2)),(c(),p("svg",{onClick:K(G,["stop"]),class:f(["close",{show:o.value}]),focusable:"false","data-icon":"close-circle","aria-hidden":"true",viewBox:"64 64 896 896"},qe,10,ke))],38),X(Z,{name:"fade"},{default:Y(()=>[ee(h("div",{class:"q-options-panel",onMouseenter:j,onMouseleave:F,style:b(`top: ${t.height+4}px; line-height: ${t.height-10}px; max-height: ${t.maxDisplay*t.height+9}px; width: ${t.width}px;`)},[(c(!0),p(L,null,M(t.options,(i,q)=>(c(),p("p",{key:q,class:f(["u-option",{"option-selected":i[t.label]===n.value,"option-hover":!i.disabled&&i[t.value]===s.value,"option-disabled":i.disabled}]),title:i[t.label],onMouseenter:J=>N(i[t.value]),onClick:J=>i.disabled?()=>!1:H(i[t.value],i[t.label],q)},_(i[t.label]),43,Ae))),128))],36),[[ae,u.value]])]),_:1})],4))}}),w=k(Ee,[["__scopeId","data-v-67820ef2"]]);w.install=e=>{e.component(w.name,w)};const ze=e=>(P("data-v-625bf3fe"),e=e(),D(),e),Le=["href","title","target"],Me={key:0,class:"u-separator"},Pe=ze(()=>h("div",{class:"assist"},null,-1)),De=v({name:"QBreadcrumb"}),Oe=v({...De,props:{routes:{default:()=>[]},fontSize:{default:14},height:{default:21},maxWidth:{default:150},separator:{default:""},target:{default:"_self"}},setup(e){const l=e,a=I(()=>l.routes.length),n=s=>{var u=s.path;if(s.query&&JSON.stringify(s.query)!=="{}"){const r=s.query;Object.keys(r).forEach((o,m)=>{m===0?u=u+"?"+o+"="+r[o]:u=u+"&"+o+"="+r[o]})}return u};return(s,u)=>(c(),p("div",{class:"q-breadcrumb",style:b(`height: ${s.height}px;`)},[(c(!0),p(L,null,M(s.routes,(r,o)=>(c(),p("div",{class:"q-bread",key:o},[h("a",{class:f(["u-route",{active:o===a.value-1}]),style:b(`font-size: ${s.fontSize}px; max-width: ${s.maxWidth}px;`),href:o===a.value-1?"javascript:;":n(r),title:r.name,target:o===a.value-1?"_self":s.target},_(r.name||"--"),15,Le),o!==a.value-1?(c(),p("span",Me,_(s.separator||">"),1)):E("",!0)]))),128)),Pe],4))}}),S=k(Oe,[["__scopeId","data-v-625bf3fe"]]);S.install=e=>{e.component(S.name,S)};const Qe=[$,w,S],Re=e=>{Qe.forEach(l=>e.component(l.name,l))},Te={install:Re};const Ne={extends:ye,enhanceApp({app:e}){e.use(Te)}};function Q(e){if(e.extends){const l=Q(e.extends);return{...l,...e,async enhanceApp(a){l.enhanceApp&&await l.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const y=Q(Ne),je=v({name:"VitePressApp",setup(){const{site:e}=fe();return he(()=>{z(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ve(),me(),ge(),y.setup&&y.setup(),()=>be(y.Layout)}});async function Fe(){const e=Ge(),l=Ue();l.provide(le,e);const a=se(e.route);return l.provide(ne,a),l.component("Content",oe),l.component("ClientOnly",ue),Object.defineProperties(l.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),y.enhanceApp&&await y.enhanceApp({app:l,router:e,siteData:ie}),{app:l,router:e,data:a}}function Ue(){return re(je)}function Ge(){let e=B,l;return de(a=>{let n=ce(a);return e&&(l=n),(e||l===n)&&(n=n.replace(/\.js$/,".lean.js")),B&&(e=!1),pe(()=>import(n),[])},y.NotFound)}B&&Fe().then(({app:e,router:l,data:a})=>{l.go().then(()=>{te(l.route,a.site),e.mount("#app")})});export{Fe as createApp};
