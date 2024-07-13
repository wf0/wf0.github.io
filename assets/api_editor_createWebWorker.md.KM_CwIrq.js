import{_ as a,c as i,I as t,j as s,a as r,a6 as o,o as n,aq as l,D as p}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"createWebWorker","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/createWebWorker.md","filePath":"api/editor/createWebWorker.md","lastUpdated":1720599564000}'),k={name:"api/editor/createWebWorker.md"},h=s("h1",{id:"createwebworker",tabindex:"-1"},[r("createWebWorker "),s("a",{class:"header-anchor",href:"#createwebworker","aria-label":'Permalink to "createWebWorker"'},"​")],-1),c=o(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createWebWorker.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.createWebWorker.html</a></p></details><ul><li><p>语法：<code>createWebWorker&lt;T&gt;(opts): MonacoWebWorker&lt;T&gt;</code></p></li><li><p>泛型： <code>T extends object</code></p></li><li><p>参数： <code>opts</code>: <a href="/api/editor/IWebWorkerOptions.html">IWebWorkerOptions</a></p></li><li><p>返回值：<a href="/api/editor/MonacoWebWorker.html">MonacoWebWorker</a><code>&lt;T&gt;</code></p></li><li><p>描述：创建一个新的 Web Worker 实例</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> worker</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createWebWorker</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  moduleId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myWorker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;My Worker&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  createData: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    languageId: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(worker);</span></span></code></pre></div><ul><li>输出</li></ul><p><img src="`+l+'"></p>',5);function d(E,g,W,b,m,_){const e=p("backTop");return n(),i("div",null,[h,t(e),c])}const f=a(k,[["render",d]]);export{y as __pageData,f as default};
