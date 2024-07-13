import{_ as e,c as t,I as a,j as i,a as l,a6 as n,o,al as p,D as r}from"./chunks/framework.CYBeC69b.js";const F=JSON.parse('{"title":"colorizeElement","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/colorizeElement.md","filePath":"api/editor/colorizeElement.md","lastUpdated":1720599564000}'),h={name:"api/editor/colorizeElement.md"},d=i("h1",{id:"colorizeelement",tabindex:"-1"},[l("colorizeElement "),i("a",{class:"header-anchor",href:"#colorizeelement","aria-label":'Permalink to "colorizeElement"'},"​")],-1),c=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.colorizeElement.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.colorizeElement.html</a></p></details><ul><li><p>语法：<code>colorizeElement(domNode, options): Promise&lt;void&gt;</code></p></li><li><p>参数：</p><ul><li><code>domNode</code>: <code>HTMLElement</code></li><li><code>options</code>: <a href="/api/editor/IColorizerElementOptions.html">IColorizerElementOptions</a></li></ul></li><li><p>返回值：<code>Promise&lt;void&gt;</code></p></li><li><p>描述：对指定的 HTML 元素进行语法高亮处理</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 将普通的 htmlElement 转换为高亮显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;function add(a, b) { return a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b; }&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">colorizeElement</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.main&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mimeType: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ul><li>输出：</li></ul><p><img src="`+p+'"></p>',5);function k(E,m,g,u,_,y){const s=r("backTop");return o(),t("div",null,[d,a(s),c])}const b=e(h,[["render",k]]);export{F as __pageData,b as default};