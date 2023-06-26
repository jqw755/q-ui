import{_ as t,o as s,c as a,V as e}from"./chunks/framework.daa0b590.js";const h=JSON.parse('{"title":"快速上手","description":"","frontmatter":{},"headers":[],"relativePath":"utils/started.md","filePath":"utils/started.md"}'),l={name:"utils/started.md"},n=e(`<h1 id="快速上手" tabindex="-1">快速上手 <a class="header-anchor" href="#快速上手" aria-label="Permalink to &quot;快速上手&quot;">​</a></h1><h2 id="简要介绍" tabindex="-1">简要介绍 <a class="header-anchor" href="#简要介绍" aria-label="Permalink to &quot;简要介绍&quot;">​</a></h2><p>常用的 js 函数</p><h2 id="使用方式" tabindex="-1">使用方式 <a class="header-anchor" href="#使用方式" aria-label="Permalink to &quot;使用方式&quot;">​</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">dateFormat</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">throttle</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">debounce</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">downloadFile</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">@jqw755/q-ui</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><h2 id="目前收录-4-个常用函数" tabindex="-1">目前收录 4 个常用函数 <a class="header-anchor" href="#目前收录-4-个常用函数" aria-label="Permalink to &quot;目前收录 4 个常用函数&quot;">​</a></h2><table><thead><tr><th>函数名</th><th style="text-align:left;">描述</th><th style="text-align:left;">参数</th></tr></thead><tbody><tr><td>dateFormat</td><td style="text-align:left;">日期格式化函数</td><td style="text-align:left;">(timestamp: number|string|Date, format = &#39;YYYY-MM-DD HH:mm:ss&#39;) =&gt; string</td></tr><tr><td>throttle</td><td style="text-align:left;">使用 setTimeout 实现的节流函数</td><td style="text-align:left;">(fn: Function, delay = 300) =&gt; any</td></tr><tr><td>debounce</td><td style="text-align:left;">使用 setTimeout 实现的防抖函数</td><td style="text-align:left;">(fn: Function, delay = 300) =&gt; any</td></tr><tr><td>downloadFile</td><td style="text-align:left;">下载文件并自定义文件名，未传文件名时，从文件地址中自动获取文件名称</td><td style="text-align:left;">(url: string, name: string) =&gt; void</td></tr></tbody></table>`,7),o=[n];function r(p,c,d,i,y,D){return s(),a("div",null,o)}const u=t(l,[["render",r]]);export{h as __pageData,u as default};
