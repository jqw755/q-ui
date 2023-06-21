import{d as C,l as E,o as d,c,b as z,G as L,r as K,a as X,t as y,n as h,h as m,k as M,C as f,K as g,a3 as Y,J as Z,E as x,a5 as ee,F as B,R as P,a6 as ae,T as te,S as q,U as D,Q as k,a7 as le,a8 as se,a9 as ne,aa as oe,ab as ue,ac as ie,ad as re,ae as de,af as ce,ag as pe,M as fe,u as he,p as ve,ah as me,ai as ge,aj as _e,ak as ye}from"./chunks/framework.dc35932b.js";import{t as be}from"./chunks/theme.0d1c29fb.js";const we={key:0,class:"q-loadingIndicator"},$e={name:"QButton"},Ce=C({...$e,props:{type:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}},setup(e){const l=e,{type:a,dashed:n,size:s,round:u,disabled:r,loading:o}=l,v=E(()=>({[`q-type-${a}`]:a,["q-type-dashed"]:n,[`q-size-${s}`]:s,["is-round"]:u,["is-disabled"]:r||o,["is-loading"]:o}));return(S,A)=>(d(),c("button",{class:h(["q-button",v.value])},[z(o)?(d(),c("span",we)):L("",!0),K(S.$slots,"default",{},()=>[X(y(z(a)),1)],!0)],2))}}),V=(e,l)=>{const a=e.__vccOpts||e;for(const[n,s]of l)a[n]=s;return a},b=V(Ce,[["__scopeId","data-v-4eae179c"]]);b.install=e=>{e.component(b.__name,b)};const O=e=>(q("data-v-3b126f0b"),e=e(),D(),e),Se=["title"],Be=O(()=>f("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"},null,-1)),ke=[Be],Ve=["onClick"],Ae=O(()=>f("path",{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm165.4 618.2l-66-.3L512 563.4l-99.3 118.4-66.1.3c-4.4 0-8-3.5-8-8 0-1.9.7-3.7 1.9-5.2l130.1-155L340.5 359a8.32 8.32 0 01-1.9-5.2c0-4.4 3.6-8 8-8l66.1.3L512 464.6l99.3-118.4 66-.3c4.4 0 8 3.5 8 8 0 1.9-.7 3.7-1.9 5.2L553.5 514l130 155c1.2 1.5 1.9 3.3 1.9 5.2 0 4.4-3.6 8-8 8z"},null,-1)),Ie=[Ae],ze=["title","onMouseenter","onClick"],Ee={name:"QSelect"},Le=C({...Ee,props:{options:{default:()=>[]},label:{default:"label"},value:{default:"value"},placeholder:{default:"请选择"},disabled:{type:Boolean,default:!1},allowClear:{type:Boolean,default:!1},width:{default:120},height:{default:32},maxDisplay:{default:6},modelValue:{default:null}},emits:["update:modelValue","change"],setup(e,{emit:l}){const a=e,n=m(),s=m(),u=m(!1),r=m(!0),o=m(!1),v=m();M(()=>{S()});function S(){if(a.modelValue){const t=a.options.find(p=>p[a.value]===a.modelValue);t?(n.value=t[a.label],s.value=t[a.value]):(n.value=a.modelValue,s.value=null)}else n.value=null,s.value=null}function A(){u.value&&(u.value=!1)}function T(){a.allowClear&&n.value&&(o.value=!0)}function N(){a.allowClear&&o.value&&(o.value=!1)}function j(t){s.value=t}function F(){r.value=!1}function U(){s.value=null,r.value=!0,v.value.focus()}function G(){if(u.value=!u.value,!s.value&&n.value){const t=a.options.find(p=>p[a.label]===n.value);s.value=t?t[a.value]:null}}function H(){o.value=!1,n.value=null,s.value=null,l("update:modelValue"),l("change")}function J(t,p,i){a.modelValue!==t&&(n.value=p,s.value=t,l("update:modelValue",t),l("change",t,p,i)),u.value=!1}return(t,p)=>(d(),c("div",{class:"m-select",style:g(`height: ${t.height}px;`)},[f("div",{class:h(["m-select-wrap",{hover:!t.disabled,focus:u.value,disabled:t.disabled}]),style:g(`width: ${t.width}px; height: ${t.height}px;`),tabindex:"0",ref_key:"select",ref:v,onMouseenter:T,onMouseleave:N,onBlur:p[0]||(p[0]=i=>r.value&&!t.disabled?A():()=>!1),onClick:p[1]||(p[1]=i=>t.disabled?()=>!1:G())},[f("div",{class:h(["u-select-input",{placeholder:!n.value}]),style:g(`line-height: ${t.height-2}px;`),title:n.value},y(n.value||t.placeholder),15,Se),(d(),c("svg",{class:h(["triangle",{rotate:u.value,show:!o.value}]),viewBox:"64 64 896 896","data-icon":"down","aria-hidden":"true",focusable:"false"},ke,2)),(d(),c("svg",{onClick:Y(H,["stop"]),class:h(["close",{show:o.value}]),focusable:"false","data-icon":"close-circle","aria-hidden":"true",viewBox:"64 64 896 896"},Ie,10,Ve))],38),Z(te,{name:"fade"},{default:x(()=>[ee(f("div",{class:"m-options-panel",onMouseenter:F,onMouseleave:U,style:g(`top: ${t.height+4}px; line-height: ${t.height-10}px; max-height: ${t.maxDisplay*t.height+9}px; width: ${t.width}px;`)},[(d(!0),c(B,null,P(t.options,(i,I)=>(d(),c("p",{key:I,class:h(["u-option",{"option-selected":i[t.label]===n.value,"option-hover":!i.disabled&&i[t.value]===s.value,"option-disabled":i.disabled}]),title:i[t.label],onMouseenter:W=>j(i[t.value]),onClick:W=>i.disabled?()=>!1:J(i[t.value],i[t.label],I)},y(i[t.label]),43,ze))),128))],36),[[ae,u.value]])]),_:1})],4))}}),w=V(Le,[["__scopeId","data-v-3b126f0b"]]);w.install=e=>{e.component(w.__name,w)};const Q=e=>(q("data-v-8c81a90d"),e=e(),D(),e),Me=["href","title","target"],Pe={key:0,class:"u-separator"},qe={key:1,class:"u-arrow",viewBox:"64 64 896 896","data-icon":"right","aria-hidden":"true",focusable:"false"},De=Q(()=>f("path",{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4z"},null,-1)),Oe=[De],Qe=Q(()=>f("div",{class:"assist"},null,-1)),Re={name:"QBreadcrumb"},Te=C({...Re,props:{routes:{default:()=>[]},fontSize:{default:14},height:{default:21},maxWidth:{default:180},separator:{default:""},target:{default:"_self"}},setup(e){const l=e,a=E(()=>l.routes.length);function n(s){var u=s.path;if(s.query&&JSON.stringify(s.query)!=="{}"){const r=s.query;Object.keys(r).forEach((o,v)=>{v===0?u=u+"?"+o+"="+r[o]:u=u+"&"+o+"="+r[o]})}return u}return(s,u)=>(d(),c("div",{class:"m-breadcrumb",style:g(`height: ${s.height}px;`)},[(d(!0),c(B,null,P(s.routes,(r,o)=>(d(),c("div",{class:"m-bread",key:o},[f("a",{class:h(["u-route",{active:o===a.value-1}]),style:g(`font-size: ${s.fontSize}px; max-width: ${s.maxWidth}px;`),href:o===a.value-1?"javascript:;":n(r),title:r.name,target:o===a.value-1?"_self":s.target},y(r.name||"--"),15,Me),o!==a.value-1?(d(),c(B,{key:0},[s.separator?(d(),c("span",Pe,y(s.separator),1)):(d(),c("svg",qe,Oe))],64)):L("",!0)]))),128)),Qe],4))}}),$=V(Te,[["__scopeId","data-v-8c81a90d"]]);$.install=e=>{e.component($.__name,$)};const Ne=[b,w,$],je=e=>{Ne.forEach(l=>e.component(l.name,l))},Fe={install:je};const Ue={extends:be,enhanceApp({app:e}){e.use(Fe)}};function R(e){if(e.extends){const l=R(e.extends);return{...l,...e,async enhanceApp(a){l.enhanceApp&&await l.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const _=R(Ue),Ge=C({name:"VitePressApp",setup(){const{site:e}=he();return ve(()=>{M(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),me(),ge(),_e(),_.setup&&_.setup(),()=>ye(_.Layout)}});async function He(){const e=We(),l=Je();l.provide(se,e);const a=ne(e.route);return l.provide(oe,a),l.component("Content",ue),l.component("ClientOnly",ie),Object.defineProperties(l.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),_.enhanceApp&&await _.enhanceApp({app:l,router:e,siteData:re}),{app:l,router:e,data:a}}function Je(){return de(Ge)}function We(){let e=k,l;return ce(a=>{let n=pe(a);return e&&(l=n),(e||l===n)&&(n=n.replace(/\.js$/,".lean.js")),k&&(e=!1),fe(()=>import(n),[])},_.NotFound)}k&&He().then(({app:e,router:l,data:a})=>{l.go().then(()=>{le(l.route,a.site),e.mount("#app")})});export{He as createApp};
