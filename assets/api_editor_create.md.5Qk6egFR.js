import{_ as e,c as s,I as t,j as i,a as o,a6 as n,o as l,an as r,D as d}from"./chunks/framework.CYBeC69b.js";const v=JSON.parse('{"title":"create","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/create.md","filePath":"api/editor/create.md","lastUpdated":1720599564000}'),p={name:"api/editor/create.md"},c=i("h1",{id:"create",tabindex:"-1"},[o("create "),i("a",{class:"header-anchor",href:"#create","aria-label":'Permalink to "create"'},"​")],-1),h=n(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.create.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.create.html</a></p></details><div class="warning custom-block"><p class="custom-block-title">提示</p><p>这是创建编辑器的函数，在日常开发中，常用的是其返回值的属性进行项目开发，大家可以重点关注该方法！</p></div><ul><li><p>语法：<code>create(domElement, options?, override?): IStandaloneCodeEditor</code></p></li><li><p>参数：</p><ul><li><code>domElement</code>: <code>HTMLElement</code></li><li><code>options</code>: <a href="/api/editor/IStandaloneEditorConstructionOptions.html">IStandaloneEditorConstructionOptions</a></li><li><code>override</code>: <a href="/api/editor/IEditorOverrideServices.html">IEditorOverrideServices</a></li></ul></li><li><p>返回值：<a href="/api/editor/IStandaloneCodeEditor.html">IStandaloneCodeEditor</a></p></li><li><p>描述：创建编辑器示例</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myEditor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;.editor&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`function add(a, b) { return a + b; }\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  language: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><ul><li>输出：</li></ul><p><img src="`+r+'"></p>',6);function k(E,m,u,_,g,y){const a=d("backTop");return l(),s("div",null,[c,t(a),h])}const b=e(p,[["render",k]]);export{v as __pageData,b as default};