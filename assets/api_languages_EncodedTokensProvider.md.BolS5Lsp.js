import{_ as s,c as a,I as t,j as i,a as n,a6 as l,o,D as d}from"./chunks/framework.CYBeC69b.js";const F=JSON.parse('{"title":"EncodedTokensProvider","description":"","frontmatter":{},"headers":[],"relativePath":"api/languages/EncodedTokensProvider.md","filePath":"api/languages/EncodedTokensProvider.md","lastUpdated":1720600471000}'),h={name:"api/languages/EncodedTokensProvider.md"},k=i("h1",{id:"encodedtokensprovider",tabindex:"-1"},[n("EncodedTokensProvider "),i("a",{class:"header-anchor",href:"#encodedtokensprovider","aria-label":'Permalink to "EncodedTokensProvider"'},"​")],-1),r=l(`<details class="details custom-block"><summary>原文链接</summary><p><a href="https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EncodedTokensProvider.html" target="_blank" rel="noreferrer">https://microsoft.github.io/monaco-editor/docs.html#interfaces/languages.EncodedTokensProvider.html</a></p></details><p>令牌的“手动”提供者，以二进制形式返回令牌。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EncodedTokensProvider</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    getInitialState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IState</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tokenize</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ILineTokens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    tokenizeEncoded</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">line</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">state</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IEncodedLineTokens</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="getinitialstate" tabindex="-1">getInitialState <a class="header-anchor" href="#getinitialstate" aria-label="Permalink to &quot;getInitialState&quot;">​</a></h2><ul><li>语法：<code>getInitialState(): IState</code></li><li>返回值：<a href="/api/languages/IState.html">IState</a></li><li>描述：语言的初始状态。将是州通过的象征性的第一行。</li></ul><h2 id="tokenize" tabindex="-1">tokenize <a class="header-anchor" href="#tokenize" aria-label="Permalink to &quot;tokenize&quot;">​</a></h2><ul><li>语法：<code>tokenize(line, state): ILineTokens</code></li><li>参数： <ul><li><code>line</code>: <code>string</code></li><li><code>state</code>: <a href="/api/languages/IState.html">IState</a></li></ul></li><li>返回值：<a href="/api/languages/ILineTokens.html">ILineTokens</a></li><li>描述：在给定行开头的状态的情况下标记该行。</li></ul><h2 id="tokenizeencoded" tabindex="-1">tokenizeEncoded <a class="header-anchor" href="#tokenizeencoded" aria-label="Permalink to &quot;tokenizeEncoded&quot;">​</a></h2><ul><li>语法：<code>tokenizeEncoded(line, state): IEncodedLineTokens</code></li><li>参数： <ul><li><code>line</code>: <code>string</code></li><li><code>state</code>: <a href="/api/languages/IState.html">IState</a></li></ul></li><li>返回值：<a href="/api/languages/IEncodedLineTokens.html">IEncodedLineTokens</a></li><li>描述：在给定行开头的状态的情况下标记该行。</li></ul>`,9);function p(c,E,g,u,m,y){const e=d("backTop");return o(),a("div",null,[k,t(e),r])}const T=s(h,[["render",p]]);export{F as __pageData,T as default};