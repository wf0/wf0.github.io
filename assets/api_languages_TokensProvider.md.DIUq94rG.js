import{_ as e,c as s,I as t,j as a,a as n,a6 as l,o,D as r}from"./chunks/framework.V0McN4Tf.js";const f=JSON.parse('{"title":"TokensProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/TokensProvider.md","filePath":"api/languages/TokensProvider.md","lastUpdated":1720600471000}'),h={name:"api/languages/TokensProvider.md"},k=a("h1",{id:"tokensprovider",tabindex:"-1"},[n("TokensProvider "),a("a",{class:"header-anchor",href:"#tokensprovider","aria-label":'Permalink to "TokensProvider"'},"​")],-1),d=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TokensProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.TokensProvider.html</a></p></details><p>A &quot;manual&quot; provider of tokens.</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> TokensProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getInitialState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tokenize</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ILineTokens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="getinitialstate" tabindex="-1">getInitialState <a class="header-anchor" href="#getinitialstate" aria-label="Permalink to &quot;getInitialState&quot;">​</a></h2><ul><li>语法：<code>getInitialState(): IState</code></li><li>返回值：<a href="/api/languages/IState.html">IState</a></li><li>描述：语言的初始状态。</li></ul><h2 id="tokenize" tabindex="-1">tokenize <a class="header-anchor" href="#tokenize" aria-label="Permalink to &quot;tokenize&quot;">​</a></h2><ul><li>语法：<code>tokenize(line, state): ILineTokens</code></li><li>参数： <ul><li><code>line</code>: <code>string</code></li><li><code>state</code>: <a href="/api/languages/IState.html">IState</a></li></ul></li><li>返回值：<a href="/api/languages/ILineTokens.html">ILineTokens</a></li><li>描述：在给定行开头的状态的情况下标记该行。</li></ul>`,7);function p(c,g,u,E,m,_){const i=r("backTop");return o(),s("div",null,[k,t(i),d])}const y=e(h,[["render",p]]);export{f as __pageData,y as default};