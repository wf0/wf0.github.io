import{_ as a,c as e,I as t,j as s,a as n,a6 as l,o,D as p}from"./chunks/framework.CYBeC69b.js";const F=JSON.parse('{"title":"tokenize","description":"","frontmatter":{},"headers":[],"relativePath":"api/editor/tokenize.md","filePath":"api/editor/tokenize.md","lastUpdated":1720599564000}'),k={name:"api/editor/tokenize.md"},h=s("h1",{id:"tokenize",tabindex:"-1"},[n("tokenize "),s("a",{class:"header-anchor",href:"#tokenize","aria-label":'Permalink to "tokenize"'},"​")],-1),d=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#functions/editor.tokenize.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#functions/editor.tokenize.html</a></p></details><ul><li><p>语法：<code>tokenize(text, languageId): Token[][]</code></p></li><li><p>参数：</p><ul><li><code>text</code>: <code>string</code></li><li><code>languageId</code>: <code>string</code></li></ul></li><li><p>返回值：<a href="/api/Token.html">Token</a>[][]</p></li><li><p>描述：对指定的文本进行语法分析，返回一个 Token 数组</p></li><li><p>示例：</p></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> text</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;function add(a, b) { return a + b; }&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> languageId</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;javascript&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tokens</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> editor.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tokenize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(text, languageId);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tokens);</span></span></code></pre></div>`,3);function r(c,g,_,m,E,u){const i=p("backTop");return o(),e("div",null,[h,t(i),d])}const f=a(k,[["render",r]]);export{F as __pageData,f as default};