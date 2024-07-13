import{_ as i,c as e,I as n,j as a,a as t,a6 as l,o,D as p}from"./chunks/framework.CYBeC69b.js";const y=JSON.parse('{"title":"onLanguage","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/onLanguage.md","filePath":"api/languages/onLanguage.md","lastUpdated":1720600471000}'),g={name:"api/languages/onLanguage.md"},h=a("h1",{id:"onlanguage",tabindex:"-1"},[t("onLanguage "),a("a",{class:"header-anchor",href:"#onlanguage","aria-label":'Permalink to "onLanguage"'},"​")],-1),c=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/languages.onLanguage.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/languages.onLanguage.html</a></p></details><ul><li><p>语法：<code>onLanguage(languageId, callback): IDisposable</code></p></li><li><p>参数：</p><ul><li><code>languageId</code>: <code>string</code></li><li><code>callback</code>: <code>(() =&gt; void)</code></li></ul></li><li><p>返回值：<a href="/api/IDisposable.html">IDisposable</a></p></li><li><p>描述：监听语言注册事件。</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">languages.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">onLanguage</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;javascript&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;language registered&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div>`,3);function d(r,k,u,E,_,m){const s=p("backTop");return o(),e("div",null,[h,n(s),c])}const f=i(g,[["render",d]]);export{y as __pageData,f as default};