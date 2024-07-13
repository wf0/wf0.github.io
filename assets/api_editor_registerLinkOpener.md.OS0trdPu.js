import{_ as a,c as e,I as n,j as s,a as t,a6 as l,o as p,av as r,D as h}from"./chunks/framework.CYBeC69b.js";const f=JSON.parse('{"title":"registerLinkOpener","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/registerLinkOpener.md","filePath":"api/editor/registerLinkOpener.md","lastUpdated":1720599564000}'),k={name:"api/editor/registerLinkOpener.md"},o=s("h1",{id:"registerlinkopener",tabindex:"-1"},[t("registerLinkOpener "),s("a",{class:"header-anchor",href:"#registerlinkopener","aria-label":'Permalink to "registerLinkOpener"'},"​")],-1),d=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.registerLinkOpener.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.registerLinkOpener.html</a></p></details><ul><li><p>语法：<code>registerLinkOpener(opener): IDisposable</code></p></li><li><p>参数：<code>opener</code>: <a href="/api/editor/ILinkOpener.html">ILinkOpener</a></p></li><li><p>返回值：<code>IDisposable</code>:<a href="/api/IDisposable.html">IDisposable</a></p></li><li><p>描述：注册在任何编辑器中打开链接时调用的处理程序。如果链接已被处理，则处理程序回调应返回 true，否则返回 false。打开链接时，将最先调用最后注册的处理程序。</p></li><li><p>示例：</p></li></ul><details class="details custom-block"><summary>查看代码</summary><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> myEditor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dom, {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  value: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;// https://www.baidu.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  language: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;javascript&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">registerLinkOpener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">resource</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(resource);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 只有return false 才能默认打开链接</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 包括 return false / return Promise.resolve(false)</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 当然可以手动调用 window.open(resource.toString())</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // return window.open(resource.toString())</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Promise</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">resolve</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div></details><ul><li>输出：</li></ul><img src="`+r+'">',5);function c(E,g,y,m,u,_){const i=h("backTop");return p(),e("div",null,[o,n(i),d])}const b=a(k,[["render",c]]);export{f as __pageData,b as default};
